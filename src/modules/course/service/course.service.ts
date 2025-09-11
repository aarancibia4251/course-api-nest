import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from '../course.entity';
import { Repository, Raw } from 'typeorm';
import { CourseDto } from '../dto/course.dto';
import {CourseMapper} from "../../../common/mapper/CourseMapper";

@Injectable()
export class CourseService {
  courseMapper = new CourseMapper();
  constructor(
    @InjectRepository(CourseEntity) private courseRepository: Repository<CourseEntity>,
  ) {
  }

  async getCourses(dateSync: Date): Promise<Array<CourseDto>> {
    const courses = await this.courseRepository.find({
      updated: Raw(alias => {
        if (dateSync) {
          return `${alias} >= '${dateSync}'`;// ::timestamptz for postgres
        }
        return '';
      })
    });
    return this.courseMapper.mapperFromListEntityToListRO(courses);
  }

  async saveCourse(courseDto: CourseDto): Promise<CourseDto> {
    const existCourse = await this.courseRepository.findOne({ where: { id: courseDto.Id }});
    if (existCourse) {
      await this.courseRepository.update({
        id: courseDto.Id
      }, {
        id: courseDto.Id,
        name: courseDto.Nombre,
        price: courseDto.Precio,
        register: courseDto.FechaRegistro,
        created: existCourse.created,
        updated: courseDto.FechaModificacion
      });
    } else {
      const newCourse = this.courseRepository.create({
        id: courseDto.Id,
        name: courseDto.Nombre,
        price: courseDto.Precio,
        register: courseDto.FechaRegistro,
        updated: courseDto.FechaModificacion
      });
      await this.courseRepository.save(newCourse);
    }
    const course = await this.courseRepository.findOne({ where: { id: courseDto.Id }});
    return this.courseMapper.mapperFromEntityToRO(course);
  }

}

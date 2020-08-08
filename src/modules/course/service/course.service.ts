import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from '../course.entity';
import { Repository } from 'typeorm';
import { CourseDto } from '../dto/course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity) private courseRepository: Repository<CourseEntity>,
  ) {
  }

  async getCourses(): Promise<Array<CourseEntity>> {
    return await this.courseRepository.find();
  }

  async saveCourse(course: CourseDto): Promise<CourseEntity> {
    const existCourse = await this.courseRepository.findOne({ where: { id: course.Id }});
    if (existCourse) {
      await this.courseRepository.update({
        id: course.Id
      }, {
        id: course.Id,
        name: course.Nombre,
        price: course.Precio,
        created: existCourse.created,
      });
    } else {
      const newCourse = await this.courseRepository.create({
        id: course.Id,
        name: course.Nombre,
        price: course.Precio,
        created: course.FechaRegistro,
        updated: course.FechaModificacion
      });
      await this.courseRepository.save(newCourse);
    }
    return await this.courseRepository.findOne({ where: { id: course.Id }});
  }

}

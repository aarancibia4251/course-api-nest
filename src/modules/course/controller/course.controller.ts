import { Body, Controller, Get, Post } from '@nestjs/common';
import { CourseService } from '../service/course.service';
import { CourseDto } from '../dto/course.dto';

@Controller('course')
export class CourseController {
  constructor(
    private courseService: CourseService
  ) {

  }

  @Get()
  public async getCourses() {
    return await this.courseService.getCourses();
  }

  @Post()
  public async saveCourse(
    @Body() course: CourseDto
  ) {
    return await this.courseService.saveCourse(course);
  }
}

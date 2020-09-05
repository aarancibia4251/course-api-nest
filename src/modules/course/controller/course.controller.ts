import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';
import { CourseService } from '../service/course.service';
import { CourseDto } from '../dto/course.dto';

@Controller('course')
export class CourseController {
  constructor(
    private courseService: CourseService
  ) {

  }

  @Get()
  public async getCourses(
    @Query('dateSync') dateSync: Date
  ) {
    console.log(dateSync);
    return await this.courseService.getCourses(dateSync);
  }

  @Post()
  public async saveCourse(
    @Body() course: CourseDto
  ) {
    return await this.courseService.saveCourse(course);
  }
}

import { Module } from '@nestjs/common';
import { CourseController } from './controller/course.controller';
import { CourseService } from './service/course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './course.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CourseEntity
    ])
  ],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}

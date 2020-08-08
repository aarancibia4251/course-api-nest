import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from '../modules/course/course.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CourseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app/app.module';
const dotenv = require('dotenv');
const environment = process.env.NODE_ENV;
dotenv.config({
  path: `cfg/${environment}.env`,
});

Logger.log(`${process.env.PORT}`);

const port = process.env.PORT || 4001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at port ${port}`);
  });
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as config from 'config';

const { port } = config.get('server');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at port ${port}`);
  });
}
bootstrap();

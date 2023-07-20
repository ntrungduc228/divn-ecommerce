import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api', { exclude: ['/'] });
  const port = 5002;
  await app.listen(port);
  console.log(`Start Invetory Service: ${port}`);
}
bootstrap();

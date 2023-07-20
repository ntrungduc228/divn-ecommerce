import * as compression from 'compression';
import helmet from 'helmet';
import { ConfigService } from './config/config.service';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api', { exclude: ['/'] });
  app.use(helmet());
  app.use(
    compression({
      threshold: 100 * 1000,
    }),
  );
  const configService = app.get(ConfigService);
  await app.listen(configService.get('servicePort') || 5001);
  console.log('Start Product Service: ', configService.get('servicePort'));
}
bootstrap();

import * as compression from 'compression';
import helmet from 'helmet';
import { ConfigService } from './config/config.service';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

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
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://ubjmugow:hwouG3iu_b9AkJBtOUlQbNDqb4LA_lNY@armadillo.rmq.cloudamqp.com/ubjmugow',
      ],
      queue: 'product_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen(5001, () => {
    console.log('Start Product Service: 5001');
  });
  // console.log('Start Product Service: ', configService.get('servicePort'));
}
bootstrap();

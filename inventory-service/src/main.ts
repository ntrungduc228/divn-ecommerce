import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api', { exclude: ['/'] });
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://ubjmugow:hwouG3iu_b9AkJBtOUlQbNDqb4LA_lNY@armadillo.rmq.cloudamqp.com/ubjmugow',
      ],
      queue: 'inventory_queue',
      noAck: false,
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.startAllMicroservices();
  const port = 5002;
  await app.listen(port);
  console.log(`Start Invetory Service: ${port}`);
}
bootstrap();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InventoryModule } from './inventory/inventory.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    InventoryModule,
    // ClientsModule.register([
    //   {
    //     name: 'PRODUCT_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: [
    //         'amqps://ubjmugow:hwouG3iu_b9AkJBtOUlQbNDqb4LA_lNY@armadillo.rmq.cloudamqp.com/ubjmugow',
    //       ],
    //       queue: 'product_queue',
    //       queueOptions: {
    //         durable: false,
    //       },
    //     },
    //   },
    // ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

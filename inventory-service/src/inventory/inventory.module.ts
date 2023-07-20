import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { PrismaService } from 'src/service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
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
  controllers: [InventoryController],
  providers: [InventoryService, PrismaService],
})
export class InventoryModule {}

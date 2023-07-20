import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ConfigModule } from './config/config.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
    PostModule,
    ConfigModule,
    ProductModule,
    MongooseModule,
    MongooseModule.forRoot('mongodb://localhost:27017/divn-product'),
    // ClientsModule.register([
    //   {
    //     name: 'PRODUCT_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://localhost:5672'],
    //       queue: 'product_queue',
    //       queueOptions: {
    //         durable: false,
    //       },
    //     },
    //   },
    // ]),
    // ClientsModule.register([
    //   {
    //     name: 'INVENTORY_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: [
    //         'amqps://ubjmugow:hwouG3iu_b9AkJBtOUlQbNDqb4LA_lNY@armadillo.rmq.cloudamqp.com/ubjmugow',
    //       ],
    //       queue: 'inventory_queue',
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

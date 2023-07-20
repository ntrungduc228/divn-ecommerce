import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ConfigModule } from './config/config.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    PostModule,
    ConfigModule,
    ProductModule,
    MongooseModule,
    MongooseModule.forRoot('mongodb://localhost:27017/divn-product'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlantsModule } from './plant/PlantsModule';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), PlantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

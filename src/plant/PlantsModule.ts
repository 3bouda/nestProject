import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Plant, PlantSchema } from './schemas/plant.schema';
import { PlantsController } from './plant.controller';
import { PlantsService } from './plant.service';
import { PlantRepository } from './plant.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plant.name, schema: PlantSchema }]),
  ],
  controllers: [PlantsController],
  providers: [PlantsService, PlantRepository],
})
export class PlantsModule {}

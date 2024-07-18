import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PlantsService } from './plant.service';
import { Plant } from './schemas/plant.schema';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { CreatePlantDto } from './dto/create-plant.dto';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}
  @Get(':plantId')
  async getPlant(@Param('plantId') plantId: string): Promise<Plant> {
    return this.plantsService.getPlantById(plantId);
  }

  @Get()
  async getPlants(): Promise<Plant[]> {
    return this.plantsService.getPlants();
  }

  @Post()
  async createPlant(@Body() createPlantDto: CreatePlantDto): Promise<Plant> {
    return this.plantsService.createPlant(
      createPlantDto.family,
      createPlantDto.length,
    );
  }

  @Patch(':plantId')
  async updatePlant(
    @Param('plantId') plantId: string,
    @Body() updatePlantDto: UpdatePlantDto,
  ): Promise<Plant> {
    return this.plantsService.updatePlant(plantId, updatePlantDto);
  }
  @Delete(':id')
  async remove(@Param('id') plantId: string): Promise<Plant> {
    return this.plantsService.remove(plantId);
  }
}

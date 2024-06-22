import { Injectable, NotFoundException } from '@nestjs/common';
import { PlantRepository } from './plant.repository';
import { Plant } from './schemas/plant.schema';
import { v4 as uuidv4 } from 'uuid';
import { UpdatePlantDto } from './dto/update-plant.dto';
@Injectable()
export class PlantsService {
  constructor(private readonly plantRepository: PlantRepository) {}
  async getPlantById(plantId: string): Promise<Plant> {
    const plant = await this.plantRepository.findOne({ plantId });
    if (!plant) {
      throw new NotFoundException(`Plant with ID ${plantId} not found`);
    }
    return plant;
  }
  async getPlants(): Promise<Plant[]> {
    return this.plantRepository.find({});
  }
  async createPlant(family: string, length: number): Promise<Plant> {
    return this.plantRepository.create({
      plantId: uuidv4(),
      family,
      length,
    });
  }
  async updatePlant(
    plantId: string,
    plantUpdates: UpdatePlantDto,
  ): Promise<Plant> {
    await this.plantRepository.findOneAndUpdate({ plantId }, plantUpdates);
    const updatedPlant = await this.plantRepository.findOne({
      where: { plantId },
    });
    if (!updatedPlant) {
      throw new NotFoundException(`Plant with ID ${plantId} not found`);
    }
    return updatedPlant;
  }
  async remove(plantId: number): Promise<Plant> {
    const result = await this.plantRepository.findByIdAndDelete(plantId);
    if (!result) {
      throw new NotFoundException(`Sheep with ID ${plantId} not found`);
    }
    return result;
  }
}

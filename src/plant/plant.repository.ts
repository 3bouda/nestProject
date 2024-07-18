import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Plant, PlantDocument } from './schemas/plant.schema';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class PlantRepository {
  constructor(
    @InjectModel(Plant.name) private plantModel: Model<PlantDocument>,
  ) {}
  async findOne(plantFilterQuey: FilterQuery<Plant>): Promise<Plant> {
    return this.plantModel.findOne(plantFilterQuey);
  }
  async find(plantFilterQuey: FilterQuery<Plant>): Promise<Plant[]> {
    return this.plantModel.find(plantFilterQuey);
  }
  async create(plant: {
    length: number;
    plantId: string;
    family: string;
  }): Promise<Plant> {
    const newPlant = new this.plantModel(plant);
    return newPlant.save();
  }
  async findOneAndUpdate(
    plantFilterQuery: FilterQuery<Plant>,
    plant: Partial<Plant>,
  ): Promise<Plant> {
    return this.plantModel.findOneAndUpdate(plantFilterQuery, plant);
  }
  async findByIdAndDelete(plantId: string): Promise<Plant> {
    return this.plantModel.findByIdAndDelete(plantId);
  }
}

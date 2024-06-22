import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PlantDocument = Plant & Document;
@Schema()
export class Plant {
  @Prop()
  plantId: string;

  @Prop()
  family: string;

  @Prop()
  length: number;

  @Prop()
  age: number;
}
export const PlantSchema = SchemaFactory.createForClass(Plant);

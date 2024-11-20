import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: { createdAt: true } })
export class User {
  @Prop({ required: true })
  username: string;

  @Prop()
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

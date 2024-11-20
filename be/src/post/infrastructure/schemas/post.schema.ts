import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { PostTagEnum } from 'src/constant';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ required: true, type: String })
  topic: string;

  @Prop({ required: true, type: String })
  content: string;

  @Prop({ required: true, type: String, enum: PostTagEnum })
  tag: PostTagEnum;

  @Prop({
    required: true,
    type: [{ type: Types.ObjectId, ref: 'Comment' }],
  })
  comments: Types.ObjectId[] | Comment[];

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);

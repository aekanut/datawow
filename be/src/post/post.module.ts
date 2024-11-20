import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './infrastructure/schemas/post.schema';
import {
  Comment,
  CommentSchema,
} from './infrastructure/schemas/comment.schema';
import { CommentRepository } from './infrastructure/repositories/comment.repository';
import { PostRepository } from './infrastructure/repositories/post.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema },
      { name: Comment.name, schema: CommentSchema },
    ]),
  ],
  controllers: [],
  providers: [PostRepository, CommentRepository],
})
export class PostModule {}

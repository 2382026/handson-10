import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './posts.service';
import { Posts } from './posts.entity';
import { PostController } from './posts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  providers: [PostService],
  controllers: [PostController],
  exports: [PostService],
})
export class PostsModule {}

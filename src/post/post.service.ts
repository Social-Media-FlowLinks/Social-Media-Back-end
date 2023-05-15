import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Post } from './schemas/post.schema';

@Injectable()
export class PostService {
  // constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}
}

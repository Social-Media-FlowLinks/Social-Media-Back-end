import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';

// import { User, UserListInfo } from 'src/user/schemas/user.schema';

export type PostDocument = HydratedDocument<Post>;

@Schema({ _id: false })
export class UserListInfo {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users: ObjectId[];
  // users: User[];

  @Prop({
    default: 0,
  })
  count?: number;
}

@Schema({ _id: false })
class ProfileInfo {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, default: true })
  isPublic: boolean;
}

@Schema({ timestamps: true })
class Comment {
  @Prop({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  })
  userId: ObjectId;
  // userId: User;

  @Prop({ required: true })
  body: string;

  @Prop({
    default: false,
  })
  isEdited: boolean;

  @Prop(UserListInfo)
  likes: UserListInfo;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  })
  replies: Comment[];
}

@Schema({ timestamps: true })
export class Post {
  @Prop({
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // required: true,
  })
  ownerId: ObjectId;
  // ownerId: User;

  @Prop()
  caption: string;

  @Prop()
  media: string;

  @Prop({
    default: false,
  })
  isEdited: boolean;

  @Prop(ProfileInfo)
  profileInfo: ProfileInfo;

  @Prop(UserListInfo)
  likes: UserListInfo;

  @Prop([Comment])
  comments: Comment[];
}

export const PostSchema = SchemaFactory.createForClass(Post);

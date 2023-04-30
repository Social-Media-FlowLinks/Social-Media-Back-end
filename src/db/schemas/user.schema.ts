import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
class Profile {
  @Prop()
  bio: string;

  // followInfo: {
  //   request: string[];
  //   following: string[];
  //   follower: string[];
  //   block: string[];
  // };

  @Prop()
  isPublic: boolean;

  @Prop()
  posts: string[];
}

@Schema({ timestamps: true })
export class User {
  // @Prop({
  //   required: true,
  // })
  // name: {
  //   firstName: string;
  //   lastName: string;
  // };

  @Prop()
  name: string;

  @Prop()
  avatar_url: string;

  @Prop()
  birthday: Date;

  @Prop({
    required: true,
  })
  username: string;

  @Prop({
    required: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  profile: Profile;

  @Prop()
  timestamps: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

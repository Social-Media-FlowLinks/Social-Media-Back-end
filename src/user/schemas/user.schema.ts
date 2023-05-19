import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { type } from 'os';

export type UserDocument = HydratedDocument<User>;

enum ROLE {
  CLIENT = 'CLIENT',
  ADMIN = 'ADMIN',
}

@Schema()
class Name {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;
}

@Schema()
class ProfileInformation {
  @Prop()
  biography: string;

  @Prop(
    raw({
      followInformation: {
        requests: [String],
        following: [String],
        followers: [String],
        blockList: [String],
      },
    }),
  )
  @Prop()
  pageType: [String];

  @Prop([String])
  postInformation: [String];

  @Prop()
  location: string;
}

@Schema({ timestamps: true })
export class User {
  @Prop([Name])
  names: Name[];

  @Prop({ type: String, required: false })
  avatar_url: string;

  @Prop({ type: Date, required: true, trim: true })
  birthday: Date;

  @Prop({ unique: true, required: true })
  userName: string;

  @Prop({ required: false, unique: false })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: false })
  phoneNumber: string;

  @Prop([ProfileInformation])
  profileInformation: ProfileInformation[];

  @Prop({ timestamps: true })
  timestamp: Date;

  @Prop({ default: ROLE.CLIENT })
  role: ROLE;

  @Prop({ default: false })
  activeWithPhoneNumber: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

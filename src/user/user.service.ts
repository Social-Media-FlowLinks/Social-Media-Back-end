import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(
    userName: string,
    hashedpassword: string,
    phoneNumber: string,
  ): Promise<User> {
    this.userModel.exists({userName})
    try {
      return await this.userModel.create({
        userName,
        password: hashedpassword,
        phoneNumber,
      });
    } catch (error) {
        throw new Error();

    }
  }
}

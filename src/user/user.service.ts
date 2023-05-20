import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async getAllUser(): Promise<User[]> {
    return await this.userModel.find();
  }

  async createUser(
    username: string,
    email: string,
    hashedPassword: string,
    phoneNumber: string,
  ): Promise<User | Error> {
    if (await this.userModel.exists({ username })) {
      throw new HttpException('This Username Exists!', HttpStatus.CONFLICT);
    }
    try {
      return await this.userModel.create({
        username,
        email,
        password: hashedPassword,
        phoneNumber,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getUserByUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username });
  }
}

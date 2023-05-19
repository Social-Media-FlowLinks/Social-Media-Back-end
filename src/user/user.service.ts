import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
  ): Promise<User | Error> {
    if (this.userModel.exists({ userName })) {
      throw new HttpException(
        'This username is already registered',
        HttpStatus.CONFLICT,
      );
    }
    try {
      return await this.userModel.create({ 
        userName,
        password: hashedpassword,
        phoneNumber,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}

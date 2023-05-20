import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { UserCreateDto } from '../auth/dto/user-create-dto';
import { UserLoginDto } from '../auth/dto/user-login-dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async signUp(@Body() userCreateDto: UserCreateDto): Promise<any> {
    const { email, password, phoneNumber, username } = userCreateDto;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.userService.createUser(
      username,
      hashedPassword,
      phoneNumber,
      email,
    );
  }
}

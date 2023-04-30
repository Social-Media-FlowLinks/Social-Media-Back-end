import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../db/schemas/user.schema';

@Controller('/user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  async getHello(): Promise<User[]> {
    return await this.appService.findAll();
  }
}

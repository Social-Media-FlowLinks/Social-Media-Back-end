import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async createUser(userName: string, password: string, phoneNumber: string) {
    const hashedpassword = await bcrypt.hash(password, 10);
    return await this.userService.createUser(
      userName,
      hashedpassword,
      phoneNumber,
    );
  }

  isActive(userName, password, activeWithPhoneNumber) {
    throw new Error('Method not implemented.');
  }
}

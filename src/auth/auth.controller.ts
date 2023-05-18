import { Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { User } from 'src/user/schemas/user.schema';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(): Promise<User> {
    return await this.authService.createNewUser();
  }
}

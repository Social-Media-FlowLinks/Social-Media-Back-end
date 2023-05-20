import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from './DTO/user-create.dto';
import { AuthService } from './auth.service';
import { UserLogingDto } from './DTO/user-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async signUp(@Body() userCreateDto: UserCreateDto): Promise<any> {
    const { userName, password, phoneNumber } = userCreateDto;
    return await this.authService.createUser(userName, password, phoneNumber);
  }

  @Post('login')
  async signIn(@Body() userLogingDto: UserLogingDto ) {
    const {userName, password, phoneNumber} = userLogingDto;
    return await this.authService.isActive(userName, password, phoneNumber)
  }
}

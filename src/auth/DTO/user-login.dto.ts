import { IsString, MinLength, IsNotEmpty, Matches, IsBoolean } from 'class-validator';

export class UserLogingDto {
  @MinLength(3)
  userName: string;
 
  @IsString()
  @IsNotEmpty()
  password: string;

  @Matches(/^09[0-9]{9}$/)
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
  
}

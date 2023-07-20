import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword
} from "class-validator"

export class AuthUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string
}

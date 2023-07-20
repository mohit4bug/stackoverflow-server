import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Res,
  Get
} from "@nestjs/common"
import { AuthUserDto } from "@/auth/dto/auth.dto"
import { AuthService } from "@/auth/auth.service"
import { Response } from "express"

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/reg")
  async regUser(
    @Body(new ValidationPipe()) data: AuthUserDto,
    @Res() res: Response
  ) {
    try {
      await this.authService.createUser(data)
      return res.status(201).json({
        message: "User created successfully",
        statusCode: 201
      })
    } catch (error) {
      throw error
    }
  }

  @Post("/signin")
  async loginUser(
    @Body(new ValidationPipe()) data: AuthUserDto,
    @Res() res: Response
  ) {
    try {
      const accessToken = await this.authService.findUser(data)
      return res.cookie("token", accessToken).status(200).json({
        message: "User logged in successfully",
        statusCode: 200
      })
    } catch (error) {
      throw error
    }
  }

  @Get("/signout")
  async signoutUser(@Res() res: Response) {
    try {
      res.clearCookie("token").status(200).json({
        message: "User logged out successfully",
        statusCode: 200
      })
    } catch (error) {
      throw error
    }
  }
}

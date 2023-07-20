import { Module } from "@nestjs/common"
import { AuthController } from "@/auth/auth.controller"
import { AuthService } from "@/auth/auth.service"
import { PrismaService } from "@/lib/prisma.service"
import { BcryptService } from "@/lib/bcrypt.service"
import { JwtService } from "@/lib/jwt.service"

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, BcryptService, JwtService]
})
export class AuthModule {}

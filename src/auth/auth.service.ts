import { PrismaService } from "@/lib/prisma.service"
import {
  ConflictException,
  Injectable,
  NotFoundException
} from "@nestjs/common"
import { AuthUserDto } from "@/auth/dto/auth.dto"
import { BcryptService } from "@/lib/bcrypt.service"
import { JwtService } from "@/lib/jwt.service"

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private bcryptService: BcryptService,
    private jwtService: JwtService
  ) {}

  async createUser(data: AuthUserDto) {
    // find user
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    })
    // user exists
    if (userExists) {
      throw new ConflictException("User already exists")
    }
    // create user
    const user = await this.prisma.user.create({
      data: {
        email: data.email,
        password: await this.bcryptService.hashPassword(data.password)
      }
    })
    const { password, ...others } = user
    return { user: others }
  }

  async findUser(data: AuthUserDto) {
    // find user
    const userExists = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    })
    // user does not exists
    if (!userExists) {
      throw new NotFoundException("User does not exists")
    }
    // check password
    const validPassword = await this.bcryptService.comparePassword(
      data.password,
      userExists.password
    )
    // password invalid
    if (!validPassword) {
      throw new NotFoundException("Invalid credentials")
    }
    // return access token
    return this.jwtService.generateAccessToken({ id: userExists.id })
  }
}

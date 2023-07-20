import { Injectable } from "@nestjs/common"
import * as jwt from "jsonwebtoken"

@Injectable()
export class JwtService {
  generateAccessToken(payload: any): string {
    return jwt.sign(payload, process.env.JWT_SECRET)
  }

  verifyToken(token: string): any {
    try {
      return jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
      return null
    }
  }
}

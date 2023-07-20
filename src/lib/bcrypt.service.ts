import { Injectable } from "@nestjs/common"
import * as bcrypt from "bcrypt"

@Injectable()
export class BcryptService {
  async hashPassword(raw: string): Promise<string> {
    return bcrypt.hash(raw, 10)
  }

  async comparePassword(raw: string, hash: string): Promise<boolean> {
    return bcrypt.compare(raw, hash)
  }
}

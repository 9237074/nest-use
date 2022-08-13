import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken({ phone, code }: { phone: number; code: number }) {
    const payload = { phone, code };
    const access_token = this.jwtService.sign(payload);
    return {
      access_token,
    };
  }
}

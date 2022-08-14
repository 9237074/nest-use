import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(args: Record<any,any>) {
    const access_token = this.jwtService.sign(args);
    return {
      access_token,
    };
  }
}

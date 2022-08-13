import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export interface ValidateDto {
  phone: number;
  code: number;
  iat: number;
  exp: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('jwt.secret'),
      jsonWebTokenOptions: {
        expiresIn: configService.get('jwt.expiresIn'),
      },
    });
  }

  async validate(payload: ValidateDto) {
    const phone = +payload.phone;
    return { phone };
  }
}

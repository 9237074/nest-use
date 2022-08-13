import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC } from '../../../decorators';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
  canActivate(context: ExecutionContext) {
    const reflector = new Reflector();
    const isPublic = reflector.get(IS_PUBLIC, context.getHandler());
    if (isPublic) return true;
    return super.canActivate(context);
  }
}

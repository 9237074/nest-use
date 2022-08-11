import { ConsoleLogger } from '@nestjs/common';

export class DefaultLogger extends ConsoleLogger {
  private readonly debugEnv = ['develop', 'local'];
  private readonly isDebug = this.debugEnv.includes(process.env.NODE_ENV);
  debug(message: any, context?: string): void {
    if (this.isDebug) super.debug(message, context);
  }
}

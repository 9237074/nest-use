import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { throwError } from 'rxjs';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    Logger.log('AllExceptionFilter错误提示', exception);
    if (exception.message) {
      return throwError(exception.message);
    }
    return throwError({
      message: exception,
    });
  }
}

import { Logger } from './logger.interface';

export class ServerLoggerService implements Logger {
  constructor() {
    console.log('ServerLoggerService is created.');
  }

  log(message: string): void {
    // send message to remote logging infrastructure
    console.log(
      `%c ServerLoggerService: ${message}`,
      'color: red'
    );
  }
}

import { Injectable } from '@angular/core';
import { Logger } from './logger.interface';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  constructor() {
    console.log('LoggerService is created.');
  }

  log(message: string): void {
    // logs to the console
    console.log(`%c LoggerService: ${message}`, 'color: yellow');
  }
}

import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { ServerLoggerService } from '../server-logger.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  // providers: [{ provide: LoggerService, useClass: ServerLoggerService }],
})
export class ContentComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.log('ContentComponent is created.');
  }
}

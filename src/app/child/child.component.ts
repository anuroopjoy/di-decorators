import {
  Component,
  Host,
  Input,
  OnInit,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { LoggerService } from '../logger.service';
import { ServerLoggerService } from '../server-logger.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [{ provide: LoggerService, useClass: ServerLoggerService }],
})
export class ChildComponent implements OnInit {
  @Input() id!: string;
  constructor(
    @SkipSelf() private logger: LoggerService,
    @Optional() @Host() private serviceLogger?: LoggerService
  ) {}

  ngOnInit(): void {
    this.serviceLogger?.log(this.id + ' ChildComponent is created.');
  }

  log(): void {
    this.logger.log('Overridden log method.');
  }
}

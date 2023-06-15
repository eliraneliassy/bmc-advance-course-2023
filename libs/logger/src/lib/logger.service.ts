import {Inject, Injectable, Optional} from "@angular/core";
import {LOGGER_CONFIG} from "./logger.token";
import {LoggerConfig} from "./logger.interface";

@Injectable({providedIn: 'root'})
export class LoggerService {

  constructor(@Optional() @Inject(LOGGER_CONFIG) private config: LoggerConfig) {

  }

  log(msg: string): void {
    console.group('NEW LOG MSG FROM APP', this.config.appName)
    console.log(msg)
    console.groupEnd();
  }
}

import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoggerIntercptor} from "./logger.intercptor";
import {LoggerConfig} from "./logger.interface";
import {LOGGER_CONFIG} from "./logger.token";

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerIntercptor,
      multi: true
    }
  ]
})
export class LoggerModule {
  static init(config: LoggerConfig) : ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        {
          provide: LOGGER_CONFIG,
          useValue: config,
          multi: false
        }
      ]
    }
  }
}

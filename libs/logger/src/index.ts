import {LoggerConfig} from "./lib/logger.interface";
import {LOGGER_CONFIG} from "./lib/logger.token";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from "@angular/common/http";
import {loggerInterceptor} from "./lib/logger.intercptor";


export * from './lib/logger.token';
export * from './lib/logger.interface';
export  * from './lib/logger.intercptor';
export * from './lib/logger.service';

export function provideLogger(config: LoggerConfig){
  return [
    {provide: LOGGER_CONFIG, useValue: config, multi: false},
    provideHttpClient(
      withInterceptors(
        [loggerInterceptor]
      )
    ),
  ]
}

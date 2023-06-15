import {inject, Inject, Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {catchError, EMPTY, Observable, of, retry} from "rxjs";
import {LoggerService} from "./logger.service";
import {LoggerConfig} from "./logger.interface";
import {LOGGER_CONFIG} from "./logger.token";




export const loggerInterceptor: HttpInterceptorFn = (req, next) => {

  const config = inject(LOGGER_CONFIG);
  const loggerService = inject(LoggerService);

  return next(req)
    .pipe(
      retry(config.retryCount),
      catchError((err) => {
        loggerService.log(`HTTP ERROR ${err.message}`)
        return of(err);
      })
    );
}

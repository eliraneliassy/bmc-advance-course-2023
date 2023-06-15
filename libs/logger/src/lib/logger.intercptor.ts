import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, EMPTY, Observable, of} from "rxjs";
import {LoggerService} from "./logger.service";

@Injectable()
export  class LoggerIntercptor implements  HttpInterceptor {

  constructor(private loggerService: LoggerService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((err) => {
          this.loggerService.log(`HTTP ERROR ${err.message}`)
          return of(err);
        })
      );
  }

}

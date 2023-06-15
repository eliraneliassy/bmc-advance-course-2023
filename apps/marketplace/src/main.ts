import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { akitaDevtools } from '@datorama/akita';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideRouter} from "@angular/router";
import {appRoutes} from "./app/app.routes";
import {loggerInterceptor, provideLogger} from "@bmc/logger";



platformBrowserDynamic()
  //.bootstrapModule(AppModule)
  bootstrapApplication(AppComponent,
    {
      providers: [
        provideHttpClient(),
        provideRouter(appRoutes),
        provideLogger({appName: 'asdasd', retryCount: 1})


      ]
    })
  .catch((err) => console.error(err));



akitaDevtools({

});

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {SliderModule} from "@bmc/ui";
import {LOGGER_CONFIG, LoggerModule} from "@bmc/logger";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    SliderModule,
    LoggerModule.init({appName: 'marketplace'})
  ],
  providers: [
    // {provide: LOGGER_CONFIG, useValue: {appName: 'MARKETPLACE'}}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

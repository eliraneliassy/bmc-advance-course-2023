import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { HttpClientModule } from '@angular/common/http';
import { BooksModule } from '@bmc/books';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HttpClientModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { UserModule } from '../users/user.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,UserModule,RouterModule.forRoot(routes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

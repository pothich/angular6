import { Component2 } from './c2.component';
import { Component1 } from './c1.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,Component1,Component2],
    bootstrap: [AppComponent],
})
export class AppModule { }

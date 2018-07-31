import { Component3 } from './c3.component';
import { FormsModule } from '@angular/forms';
import { Service1 } from './service1';
import { Component2 } from './component2';
import { Component1 } from './component1';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,Component1,Component2,Component3],
    providers:[Service1],
    bootstrap: [AppComponent],
})
export class AppModule { }

import { DisableInputDirective } from './disable-input.directive';
import { ABCDirective } from './abc.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,ABCDirective,DisableInputDirective],
    bootstrap: [AppComponent],
})
export class AppModule { }

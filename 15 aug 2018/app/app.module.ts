import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list.component';
import { ReversePipe } from './reverse.pipe';
import { DisableInputDirective } from './disable-input.directive';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, StudentListComponent, ReversePipe, DisableInputDirective],
    bootstrap: [AppComponent],
})
export class AppModule { }

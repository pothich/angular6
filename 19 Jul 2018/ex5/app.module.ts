import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,ProductListComponent,ProductDetailComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }

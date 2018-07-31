import { StudentListComponent } from './student-list.component';
import { ErrorComponent } from './error.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentFormComponent } from './student-form.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './aboutus.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,RouterModule.forRoot(routes),RouterModule,HttpClientModule,FormsModule],
    declarations: [AppComponent,HomeComponent,ContactComponent,AboutUsComponent,StudentFormComponent,ErrorComponent,
    StudentListComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }

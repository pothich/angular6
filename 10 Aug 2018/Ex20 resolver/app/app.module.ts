import { StudentListComponent2 } from './student-list2.component';
import { StudentListComponent1 } from './student-list1.component';
import { StudentResolver } from './student-list.resolver';
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
    StudentListComponent1,StudentListComponent2],
    providers:[StudentService,StudentResolver],
    bootstrap: [AppComponent],
})
export class AppModule { }

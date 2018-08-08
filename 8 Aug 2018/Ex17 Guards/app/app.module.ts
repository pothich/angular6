import { UserModule } from './user/user.module';
import { SecurityGuard } from './security.guard';
import { StudentModule } from './student/student.module';
import { routes } from './app.routes';
import { ErrorComponent } from './error.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,StudentModule,UserModule,RouterModule.forRoot(routes),RouterModule],
    declarations: [AppComponent,ContactComponent,AboutComponent,HomeComponent,ErrorComponent],
    bootstrap: [AppComponent],
    providers:[SecurityGuard]
})
export class AppModule { }

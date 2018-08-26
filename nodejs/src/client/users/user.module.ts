import { DashboardComponent } from './../dashboard/components/dashboard.component';
import { UserRegisterComponent } from './components/user.register.component';
import { PasswordValidDirective } from './../common/directives/passwordvalid.directive';
import { routes } from './user.routes';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user.login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from '../common/components/header.component';
import { FormsModule } from "@angular/forms";
import { RouterService } from '../common/services/router.service';
import { HttpClientModule } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
    imports: [RouterModule.forChild(routes),CommonModule,FormsModule,HttpClientModule],
    exports: [],
    declarations: [UserLoginComponent,HeaderComponent,PasswordValidDirective,UserRegisterComponent,DashboardComponent],
    providers: [RouterService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class UserModule { }

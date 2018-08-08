import { routes } from './user.routes';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [CommonModule,RouterModule.forChild(routes)],
    declarations: [LoginComponent],
    providers: [UserService],
})
export class UserModule { }

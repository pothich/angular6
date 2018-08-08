import { ProtectDataGuard } from './protectdata.guard';
import { StudentListResolver } from './student.resolve';
import { routes } from './student.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { StudentListComponent } from './student-list.component';
import { NgModule } from '@angular/core';

import { StudentComponent } from './student.component';

import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule,HttpClientModule,RouterModule.forChild(routes)],
    exports: [],
    declarations: [StudentComponent,StudentListComponent],
    providers:[StudentService,ProtectDataGuard]
})
export class StudentModule { }

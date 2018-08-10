import { StudentListComponent2 } from './student-list2.component';
import { StudentListComponent1 } from './student-list1.component';
import { StudentResolver } from './student-list.resolver';
import { ErrorComponent } from './error.component';
import { StudentFormComponent } from './student-form.component';
import { Component } from '@angular/core';
import { AboutUsComponent } from './aboutus.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
export const routes = [
    {path:"home",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"aboutUs",component:AboutUsComponent},
    {path:"studentForm",component:StudentFormComponent},
    {path:"studentUpdate/:studentId",component:StudentFormComponent},
    {path:"studentList1",component:StudentListComponent1,resolve: { message: StudentResolver }},
    {path:"studentList2",component:StudentListComponent2},
    {path:"error",component:ErrorComponent},
    {path:"",component:ContactComponent},
];
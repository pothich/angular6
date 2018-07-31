import { StudentListComponent } from './student-list.component';
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
    {path:"studentList",component:StudentListComponent},
    {path:"error",component:ErrorComponent},
    {path:"",component:ContactComponent},
];
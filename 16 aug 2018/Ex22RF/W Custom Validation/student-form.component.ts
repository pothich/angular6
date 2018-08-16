import { Test } from './test.validator';
import { StudentService } from './student.service';
import { Student } from './student';

import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent implements OnInit {

    studentForm:FormGroup;
    


    constructor(private ss:StudentService,private builder:FormBuilder) { 
        
                this.studentForm = this.builder.group({
                    id:["",[Validators.required,Validators.min(1)]],
                    name:["",[Validators.required,Validators.minLength(2)]],
                    email:["",Test.m1],
                    address:[""]});
              }

    ngOnInit() { }

    save(){
       this.ss.saveStudent(this.studentForm.value).subscribe((data)=>{
           alert("inserted");
       })
    }
}
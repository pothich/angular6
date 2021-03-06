import { StudentService } from './student.service';
import { Student } from './student';

import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent implements OnInit {

    studentForm:FormGroup;
    
    constructor(private ss:StudentService) { 

        this.studentForm = new FormGroup({
            id:new FormControl("",[Validators.required,Validators.min(1)]),
            name:new FormControl("",[Validators.required,Validators.minLength(2)]),
            email:new FormControl(""),
            address:new FormControl(""),
        });
    }

    ngOnInit() { }

    save(){
       this.ss.saveStudent(this.studentForm.value).subscribe((data)=>{
           alert("inserted");
       })
    }
}
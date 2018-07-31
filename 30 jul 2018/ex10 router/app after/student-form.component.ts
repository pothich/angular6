import { StudentService } from './student.service';
import { Student } from './student';
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent implements OnInit {

    s1:Student;
    errorMessage : string = "";    
    constructor(private ss:StudentService,private router:Router) { 
        this.s1 = new Student();
    }

    ngOnInit() { }

    save(){
        this.ss.saveStudent(this.s1).subscribe((data)=>{
            alert("inserted");
            this.router.navigate(['/home']);
        },(error)=>{
            this.errorMessage = error.message;
        })
    }
}
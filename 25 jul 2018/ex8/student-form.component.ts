import { StudentService } from './student.service';
import { Student } from './student';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent implements OnInit {

    s1:Student;
    
    constructor(private ss:StudentService) { 
        this.s1 = new Student();
    }

    ngOnInit() { }

    save(){
        this.ss.saveStudent(this.s1).subscribe((data)=>{
            alert("inserted");
        })
    }
}
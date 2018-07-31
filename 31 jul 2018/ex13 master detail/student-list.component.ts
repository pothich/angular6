import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent implements OnInit {
    students:Student[];
    currentStudent:Student;
    constructor(private ss:StudentService) {
        this.ss.getStudents().subscribe((data)=>{
            this.students = <Student[]>data;
        })
     }

     passData(obj:Student){
         this.currentStudent = obj;
     }

    ngOnInit() { }
}
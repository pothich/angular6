import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent implements OnInit {
    students:Observable<Student[]>;
    currentStudent:Student;
    start:number = 0;
    end:number = 2;
    constructor(private ss:StudentService) {
        this.students = <Observable<Student[]>>this.ss.getStudents();
     }

     passData(obj:Student){
         this.currentStudent = obj;
     }

     prev(){
         this.start = this.start - 2;
         this.end = this.end - 2;         
     }

     next(){
        this.start = this.start + 2;
        this.end = this.end + 2;         
    }

    ngOnInit() { }
}
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
    finalStudents:Promise<Student[]>;
    currentStudent:Student;
    currentDate;
    dateFormat:string = "dd/MMM/yyyy";
    constructor(private ss:StudentService) {
        this.students = <Observable<Student[]>>this.ss.getStudents();
        this.finalStudents = <Promise<Student[]>>this.ss.getStudentsAsPromise();
        
        this.currentDate = new Date();
    }
     passData(obj:Student){
         this.currentStudent = obj;
     }

     setFormat(){
         this.dateFormat = "MMM/dd/yyyy";
     }

    ngOnInit() { }
}
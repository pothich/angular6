import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list2',
    templateUrl: 'student-list2.component.html'
})

export class StudentListComponent2 implements OnInit {
    students:Student[];
    constructor(private ss:StudentService) {
        this.ss.getStudents().subscribe((data)=>{
            this.students = <Student[]>(data);
        })
     }

    ngOnInit() { }
}
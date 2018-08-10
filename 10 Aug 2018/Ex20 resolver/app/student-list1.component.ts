import { ActivatedRoute } from '@angular/router';
import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list1',
    templateUrl: 'student-list1.component.html'
})

export class StudentListComponent1 implements OnInit {
    students:Student[];
    constructor(private route:ActivatedRoute) {
        this.route.data.subscribe((data)=>{
            this.students = <Student[]>(data.message);
        })
     }

    ngOnInit() { }
}
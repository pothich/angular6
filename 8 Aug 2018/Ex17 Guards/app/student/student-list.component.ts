import { ActivatedRoute } from '@angular/router';
import { StudentListResolver } from './student.resolve';

import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html',
})

export class StudentListComponent implements OnInit {

    students:Student[];

    constructor(private route:ActivatedRoute) {
        console.log("i am in student list constructor");
        this.route.data.subscribe((data)=>{
            this.students = <Student[]>data;
        })
     }

    ngOnInit() { }
}
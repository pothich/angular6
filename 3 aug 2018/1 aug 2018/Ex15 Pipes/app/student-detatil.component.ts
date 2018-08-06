import { Student } from './student';
import { Component, Input ,OnInit} from '@angular/core';

@Component({
    selector: 'student-detail',
    templateUrl: 'student-detail.component.html'
})

export class StudentDetailComponent implements OnInit {

    @Input()
    s1:Student;

    constructor() { }

    ngOnInit() { }
}
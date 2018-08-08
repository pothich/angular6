import { StudentListResolver } from './student.resolve';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student',
    templateUrl: 'student.component.html'

})

export class StudentComponent implements OnInit {

    data:boolean = true;

    constructor() {
        
     }

    ngOnInit() { }

    m1(){
        this.data = false;
    }
}
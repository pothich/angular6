import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student',
    templateUrl: 'student.component.html'
})

export class StudentComponent implements OnInit {
    
    currentValue:string="";
    
    constructor() { }

    ngOnInit() { }
}
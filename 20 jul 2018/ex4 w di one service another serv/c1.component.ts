import { Service1 } from './s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c1',
    templateUrl: 'c1.component.html'
})

export class Component1 implements OnInit {


    constructor(private s1:Service1) {
        console.log("creating component1 object");
     }

    ngOnInit() { }
}
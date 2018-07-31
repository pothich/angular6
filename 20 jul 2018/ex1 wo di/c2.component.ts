import { Service1 } from './s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c2',
    templateUrl: 'c2.component.html'
})

export class Component2 implements OnInit {

    s1:Service1;

    constructor() {
        console.log("creating component2 object");
        this.s1 = new Service1();
     }

    ngOnInit() { }
}
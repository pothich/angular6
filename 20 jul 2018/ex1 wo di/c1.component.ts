import { Service1 } from './s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c1',
    templateUrl: 'c1.component.html'
})

export class Component1 implements OnInit {

    s1:Service1;

    constructor() {
        console.log("creating component1 object");
        this.s1 = new Service1();
        this.s1.m1();
     }

    ngOnInit() { }
}
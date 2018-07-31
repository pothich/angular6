import { Service2 } from './s2.service';
import { Service1 } from './s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c2',
    templateUrl: 'c2.component.html'
})

export class Component2 implements OnInit {


    constructor(private s1:Service1,private s2:Service2) {
        console.log("creating component2 object");
     }

    ngOnInit() { }
}
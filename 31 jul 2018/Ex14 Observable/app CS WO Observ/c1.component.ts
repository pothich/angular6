import { Service1 } from './s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c1',
    templateUrl: 'c1.component.html'
})

export class Component1 implements OnInit {
    i:number = 10;
    constructor(private s1:Service1) { }

    ngOnInit() { }

    m1(){
        this.i = this.i +1;
        this.s1.setData(this.i);
    }
}
import { Service1 } from './s1.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c2',
    templateUrl: 'c2.component.html'
})

export class Component2 implements OnInit {

    j:number;

    constructor(private s1:Service1) { }

    ngOnInit() { }

    getData(){
        this.j = this.s1.getData();
    }
}
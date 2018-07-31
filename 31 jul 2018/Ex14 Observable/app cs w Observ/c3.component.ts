import { Service1 } from './service1';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c3',
    templateUrl: 'c3.component.html'
})

export class Component3 implements OnInit {

    msg:string;

    constructor(private s1:Service1) { 
        this.s1.getMessage().subscribe((data)=>{
            this.msg = <string>data;
        })
    }

    ngOnInit() { }
}
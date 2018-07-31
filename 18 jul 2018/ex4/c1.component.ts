import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c1',
    templateUrl: 'c1.component.html'
})

export class Component1 implements OnInit {
    i:number = 10;
    constructor() { }

    ngOnInit() { }
}
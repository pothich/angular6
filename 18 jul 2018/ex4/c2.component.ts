import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'c2',
    templateUrl: 'c2.component.html'
})

export class Component2 implements OnInit {
    @Input()
    j:number;
    constructor() { }

    ngOnInit() { }
}
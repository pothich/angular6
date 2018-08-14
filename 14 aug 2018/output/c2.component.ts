import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
    selector: 'c2',
    templateUrl: 'c2.component.html'
})

export class Component2 implements OnInit {
    @Input()
    j:number;

    @Output()
    sendData:EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() { }

    m1(){
        this.j = this.j + 1;
        this.sendData.emit(this.j);
    }
}
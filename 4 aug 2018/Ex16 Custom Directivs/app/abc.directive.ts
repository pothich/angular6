import { Directive,HostListener,Input,ElementRef } from '@angular/core';

@Directive({ selector: '[abc]' })
export class ABCDirective {

    @Input("id")
    idValue:string;

    constructor(private element : ElementRef) { }

    @HostListener("click")
    m1(){
        this.element.nativeElement.style.color = 'red';
    }
}
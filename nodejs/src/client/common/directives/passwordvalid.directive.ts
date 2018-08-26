import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({ selector: '[password-valid]' })
export class PasswordValidDirective {
    constructor(private element:ElementRef) { }
    @HostListener("keyup")
    check(){
        var value = this.element.nativeElement.value;
        if(value == "abc"){
            alert("abc reached");
        }
    }
}
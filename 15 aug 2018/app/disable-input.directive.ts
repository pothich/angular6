import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[disableInput]' })
export class DisableInputDirective {

    @Input("disableInput")
    blockedWordsString:string;

    constructor(private element:ElementRef) { }

    @HostListener("change")
    m1(){
        var value = this.element.nativeElement.value;
        
        var blockedWords=this.blockedWordsString.split(",");
        for(var i=0;i<blockedWords.length;i++){
            if(value==blockedWords[i]){
                this.element.nativeElement.style.border = "1px solid red";
                return;
            }
            else
                this.element.nativeElement.style.border = "";
        }
    }

}
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[disableInput]' })
export class DisableInputDirective {

    @Input("disableInput")
    blockedWordsString:string;

    constructor(private element:ElementRef) { }

    @HostListener("keyup")
    m1(){
        var value = this.element.nativeElement.value;
        
        var blockedWords=this.blockedWordsString.split(",");
        for(var i=0;i<blockedWords.length;i++){
            if(value==blockedWords[i]){
                alert("we dont allow this value");
                this.element.nativeElement.value = "";
            }
        }
    }


}
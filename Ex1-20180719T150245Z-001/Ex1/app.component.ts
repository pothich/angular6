import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent{

    message:string = "first Data binding example";

    names:string[] = ["s1","s2","s3"];

    m1(){
       this.message = "event binding";
       this.names = ["s4","s5","s6"];
    }
}
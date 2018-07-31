import { Injectable } from '@angular/core';

@Injectable()
export class Service1 {

    constructor() {
        console.log("creating service object");
     }

    m1(){
        console.log("i am in service class m1");
    }
}
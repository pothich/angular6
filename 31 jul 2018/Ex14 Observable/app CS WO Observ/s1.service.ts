import { Injectable } from '@angular/core';

@Injectable()
export class Service1 {

    data:number;

    constructor() { }

    setData(a:number){
        this.data = a;
    }

    getData(){
       return this.data;
    }

}
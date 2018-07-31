import { Service3 } from './s3.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Service2 {

    constructor(private s3:Service3) { 
        console.log("creating service2 object");
    }
}
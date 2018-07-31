import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

    constructor(private hc:HttpClient) { }

    getStudents(){
        return this.hc.get("http://localhost:3000/students");
    }
}
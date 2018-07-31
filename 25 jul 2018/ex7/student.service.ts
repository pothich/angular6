import { Student } from './student';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class StudentService {

    constructor(private hc:HttpClient) { }

    saveStudent(a:number,b:string){

        var student = new Student();

        student.id = a;
        student.name = b;

        return this.hc.post("http://localhost:3000/students",student);
    }
}
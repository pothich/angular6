import { Student } from './student';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable()
export class StudentService {

    constructor(private hc:HttpClient) { }

    getStudents():Observable<Student[]>{
        return <Observable<Student[]>>this.hc.get("http://localhost:3000/students");
    }
}
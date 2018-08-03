import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

    constructor(private hc:HttpClient) { }

    saveStudent( student:Student){
        return this.hc.post("http://localhost:3000/students",student);
    }

    getStudents( ){
        return this.hc.get("http://localhost:3000/students");
    }

    getStudentById(id:number){
        return this.hc.get("http://localhost:3000/students/"+id);
    }

    deleteStudent( student:Student){
        return this.hc.delete("http://localhost:3000/students/"+student.id);
    }
   
}
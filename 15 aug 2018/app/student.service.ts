import { Student } from './student';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable()
export class StudentService {

  constructor(private hc:HttpClient) { }

  getStudents(){
    return this.hc.get<Student[]>("http://localhost:3000/students");
  }

  getStudentById(id:number){
    return this.hc.get<Student>("http://localhost:3000/students/"+id);
  }

}

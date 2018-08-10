import { StudentService } from './student.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
@Injectable()
export class StudentResolver implements Resolve<any> {
  constructor(private ss: StudentService) {}

  resolve() {
    return this.ss.getStudents();
  }
}
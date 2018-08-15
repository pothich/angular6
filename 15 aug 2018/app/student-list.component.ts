import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';
@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent implements OnInit {

  message:string = "hello";

  students:Student[];

  constructor(private ss:StudentService) { }

  ngOnInit() {
    this.ss.getStudents().subscribe((data)=>{
      this.students = data;
    })
  }

}

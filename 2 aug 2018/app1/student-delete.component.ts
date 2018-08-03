import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-delete',
    templateUrl: 'student-delete.component.html'
})

export class StudentDeleteComponent implements OnInit {

    s1:Student;

    constructor(private ss:StudentService,private ar:ActivatedRoute,private router:Router) {
        this.s1 = new Student();
        var studentid = this.ar.snapshot.params["studentId"];
        this.ss.getStudentById(studentid).subscribe((data)=>{
           this.s1 = <Student>data;
        },
        (error)=>{
            alert("cannot be deleted right now");
        });
     }

    ngOnInit() { }

    delete(){
        this.ss.deleteStudent(this.s1).subscribe((data)=>{
            alert("deleted");
            this.router.navigate(['/studentList']);
        })
    }
}
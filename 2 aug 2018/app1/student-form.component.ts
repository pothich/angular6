import { StudentService } from './student.service';
import { Student } from './student';
import { Router,ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent implements OnInit {

    s1:Student;
    errorMessage : string = "";    
    constructor(private ss:StudentService,private router:Router,private route:ActivatedRoute) { 
        this.s1 = new Student();
        var studentId = this.route.snapshot.params["studentId"];
        if(studentId){
            //load from server
            this.ss.getStudentById(studentId).subscribe((data)=>{
                this.s1 = <Student>data;
            })
        }

    }

    ngOnInit() { }

    save(){
        this.ss.saveStudent(this.s1).subscribe((data)=>{
            alert("inserted");
            this.router.navigate(['/home']);
        },(error)=>{
            this.errorMessage = error.message;
        })
    }
}
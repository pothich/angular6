import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent implements OnInit {

    sid:number;
    sname:string;

    constructor(private ss:StudentService) { }

    ngOnInit() { }

    save(){
        this.ss.saveStudent(this.sid,this.sname).subscribe((data)=>{
            alert('inserted');
        },(error)=>{
            alert('failed');
        });
    }
}
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(private us:UserService) { }

    ngOnInit() { }

    login(){
        var result:boolean=this.us.login();
        if(result)
            localStorage.setItem("userLogin","success");
    }
}
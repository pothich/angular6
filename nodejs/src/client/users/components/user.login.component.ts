import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { RouterService } from '../../common/services/router.service';
import { Router } from '@angular/router';

@Component({
    selector: 'user-login',
    templateUrl: '../partials/user.login.component.html'
})

export class UserLoginComponent implements OnInit {
    user:Users;
    constructor(private cs:RouterService,private router:Router) { 
        this.user = new Users();
    }

    ngOnInit() { }
    login(){
        this.cs.loginuser(this.user).subscribe((data)=>{
            if(data){
                this.router.navigate(['/dashboard']);
            }
        });

    }
    googleLogin(){
        this.cs.google().subscribe((data)=>{
            alert("google returned");
        })
    }
}
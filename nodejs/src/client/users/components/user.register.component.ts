import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { RouterService } from '../../common/services/router.service';
import { Router } from '@angular/router';

@Component({
    selector: 'user-register',
    templateUrl: '../partials/user.register.component.html'
})

export class UserRegisterComponent implements OnInit {
    user:Users;
    constructor(private cs:RouterService,private router:Router) {
        this.user = new Users();
     }

    ngOnInit() { }
    register(){
        this.cs.registerUser(this.user).subscribe((data)=>{
            if(data){
                this.router.navigate(['/login']);
            }
        });
    }
}
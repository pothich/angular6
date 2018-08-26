import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../common/services/router.service';
import { Users } from '../../users/users';

@Component({
    selector: 'dashboard',
    template:"dashboard page"
})

export class DashboardComponent implements OnInit {
    users:Users[];
    constructor(private cs:RouterService) { 
        this.cs.getUsers().subscribe((data)=>{
            if(data){
                this.users = <Users[]>data;
            }

        })
    }

    ngOnInit() { }
}
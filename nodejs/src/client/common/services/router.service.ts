import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RouterService {

    constructor(private hc:HttpClient) { }

    loginuser(user){
        return this.hc.post("/api/loginuser",user);
    }
    registerUser(user){
        return this.hc.post("/api/createusers",user);
    }
    getUsers(){
        return this.hc.get("/api/users");
    }
    google(){
        return this.hc.get("/api/auth/google");
    }
}
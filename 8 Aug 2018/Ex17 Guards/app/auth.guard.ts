import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor() { }

    canLoad(route: Route) {
        var data = localStorage.getItem("userLogin");
        if(data)
            return true;
        else
            return false;
    }
}
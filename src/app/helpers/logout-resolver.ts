import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { LoginServiceService } from "../services/login-service.service";

@Injectable({
  providedIn: 'root'
})


export class LogoutResolver implements Resolve<void> {


    constructor(private _auth:LoginServiceService) { }
    resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
       this._auth.logout();
    }


}
    
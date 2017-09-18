import { Injectable } from '@angular/core';
import {LoginService} from "../service/login.service";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class LoginGuardService implements CanActivate{
  constructor(private loginService: LoginService, private router: Router){

  }
  canActivate(){
    if(this.loginService.validInfo){
      return true;
    }else{
      this.router.navigateByUrl('');
      console.log('Wrong Information!');
    }
  }

}

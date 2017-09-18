import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  validInfo = false;

  constructor() { }

  match(email:string, password:string){
    if(email === "601347015@qq.com" && password === "18x+19y=20z"){
      this.validInfo = true;
    }else {
      this.validInfo = false;
    }
}

}

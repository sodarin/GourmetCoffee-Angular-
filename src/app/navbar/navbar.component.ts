import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input()
  isLogin;

  @Output()
  logOut: EventEmitter<string> = new EventEmitter();
  username: string;

  formModel: FormGroup;
  loginModel: FormGroup;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.username = "xxx";
    $('.modal').modal();

    let fb = new FormBuilder();
    this.formModel = fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
        emailID: ['', [Validators.required, Validators.email]],
        pwd: fb.group({
          password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
          cpassword: ['', [Validators.required]]
        }, {validator: this.passwordMatcherValidator})
      }
    )
    this.loginModel = fb.group(
      {
        loginID: ['', [Validators.required, Validators.email]],
        loginPassword: ['', [Validators.required]]
      }
    )
  }

  logout(){
    this.logOut.emit("false");
  }

  signInOpen(){
    $('#signInModal').modal('open');
  }

  loginOpen() {
    $('#loginModal').modal('open');
  }

  signInSubmit() {
    if(this.formModel.valid){
      console.log(this.formModel.value);
      $('#signInModal').modal('close');
  }
  }
  loginSubmit() {
    if(this.loginModel.valid){
      this.loginService.match(this.loginModel.get('loginID').value, this.loginModel.get('loginPassword').value);
      this.router.navigateByUrl('/home');
      if(this.loginService.validInfo){
        $('#loginModal').modal('close');
      }else{
        alert('Wrong Information!');
      }
    }
  }

  passwordMatcherValidator(c: AbstractControl): any{
    let passwordControl= c.get('password');
    let cpasswordControl= c.get('cpassword');
    if(passwordControl.pristine || cpasswordControl.pristine){
      return null;
    };
    return passwordControl.value === cpasswordControl.value? null : {'match': true};
  }

}

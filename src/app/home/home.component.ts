import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogin = true;
  constructor() { }

  ngOnInit() {
  }

  exit(message: string) {
    if(message === 'false'){
      this.isLogin = false;
    }

  }

}

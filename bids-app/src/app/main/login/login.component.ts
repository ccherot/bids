
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username :string = ""

  @Output() loginEvent = new EventEmitter()

  

  constructor() { }

  ngOnInit() {
  }

  onClickLogin()
  {
    console.log("login-reg-view: onClickLogin called")
    this.loginEvent.emit(this.username)
  }

}

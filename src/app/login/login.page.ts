import { Component } from '@angular/core';
import {LoginService} from '../loginservice/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {
  username: string;
  password: string;
  constructor(private loginService: LoginService) {
  }
  getLogin() {
    this.loginService.getLogin(this.username, this.password).then(data => {
      console.log(data);
    }).catch(err => {
      console.error(err);
    });
  }
}

import { Component } from '@angular/core';
import {LoginService} from '../services/loginservice/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {
  username: string;
  password: string;
  constructor(private loginService: LoginService, private router: Router) {
    }
  getLogin() {
    this.loginService.getLogin(this.username, this.password).then(data => {
      console.log(data);
      this.router.navigateByUrl('/prodotti');
    }).catch(err => {
      console.error(err);
    });
  }
}

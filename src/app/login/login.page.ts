import { Component } from '@angular/core';
import {LoginService} from '../services/loginservice/login.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'demo-root',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {
  username: string;
  password: string;
  cookieValue = 'UNKNOWN';
  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) {
    }

  getLogin() {
    this.loginService.getLogin(this.username, this.password).then(data => {
      console.log(data);
      //sessionStorage.setItem('utente',JSON.stringify(data['login']));
      this.cookieService.set('PHPSESSID', data['login']['id_session']);
      this.cookieValue = this.cookieService.get('PHPSESSID');
      console.log(this.cookieValue);
      this.router.navigateByUrl('/prodotti', { skipLocationChange: true });
    }).catch(err => {
      console.error(err);
    });
  }


}

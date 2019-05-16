import { Component } from '@angular/core';
import {LoginService} from '../services/loginservice/login.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage {
  username: string;
  password: string;
  constructor(private loginService: LoginService, private router: Router, private appComponent: AppComponent) {
    }

  getLogin() {
    this.loginService.getLogin(this.username, this.password).then(data => {
      console.log(data);
      this.appComponent.saveInSession('username', data['login']['username']);
      this.appComponent.saveInSession('password', this.password);
      this.appComponent.saveInSession('id', data['login']['id']);
      this.appComponent.saveInSession('permesso', data['login']['permesso']);
      this.appComponent.saveInSession('sede', data['login']['sede']);
      this.router.navigateByUrl('/prodotti');
    }).catch(err => {
      console.error(err);
    });
  }


}

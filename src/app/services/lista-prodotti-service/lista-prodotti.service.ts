import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {reject} from 'q';
import {LoginPage} from '../../login/login.page';

@Injectable({
  providedIn: 'root'
})
export class ListaProdottiService {

  baseUrl = 'http://localhost/UniFood/public/prodotti';

  constructor(private http: HttpClient, private loginPage: LoginPage) { }
  getProdotti() {
    console.log('CIAOOOOOOOO');
    //const cookie = JSON.parse(sessionStorage.getItem('utente'))['id_session'];
    //const us = JSON.parse(sessionStorage.getItem('utente'))['username'];
    //const pa = JSON.parse(sessionStorage.getItem('utente'))['password'];
    //const base64 = btoa(us + ':' + pa);
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json', 'Set-cookie' : this.loginPage.cookieValue, 'Authorization':'my-auth-token'}),withCredentials: true};
    console.log(httpOptions);
    return new Promise((resolve => {
      this.http.get(this.baseUrl, httpOptions).subscribe(res => {
        resolve(res);
        console.log(res);
      }, (err) => {
        reject(err);
      });
    }));
  }
}

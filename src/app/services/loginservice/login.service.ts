import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {reject} from 'q';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost/UniFood/public/login';

  constructor(private http: HttpClient) { }

  getLogin(username: string, password: string) {
      return new Promise((resolve => {
        this.http.post(this.baseUrl, {username, password}).subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
      }));
  }

}

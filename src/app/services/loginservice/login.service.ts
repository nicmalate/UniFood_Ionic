import {ApplicationModule, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {reject} from 'q';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = 'http://localhost/UniFood/public/login';
  //falasta: any;

  constructor(private http: HttpClient, /*private session_storage: Storage*/) { }

  getLogin(username: string, password: string) {
      return new Promise((resolve => {
        this.http.post(this.baseUrl, {username, password}).subscribe(res => {
            //this.falasta = this.session_storage.getItem('PHPSESSID').toString();
            //console.log(this.falasta);
            resolve(res);
        }, (err) => {
            reject(err);
        });
      }));
  }

}

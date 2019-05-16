import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {reject} from 'q';

@Injectable({
  providedIn: 'root'
})
export class ListaProdottiService {

  baseUrl = 'http://localhost/UniFood/public/prodotti';

  constructor(private http: HttpClient) { }
  getProdotti() {
    return new Promise((resolve => {
      this.http.get(this.baseUrl).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    }));
  }
}

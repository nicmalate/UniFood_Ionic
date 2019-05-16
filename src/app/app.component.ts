import { Inject, Injectable } from '@angular/core';
import { Component } from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
@Injectable()
export class AppComponent {

  public data:any=[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    @Inject(SESSION_STORAGE)private session_storage: WebStorageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  saveInSession(key, val): void {
    console.log('recieved= key: ' + key + ' ' + 'value: ' + val);
    this.session_storage.set(key, val);
    this.data[key]= this.session_storage.get(key);
  }

  getFromSession(key): void{
    console.log('recieved = key' + key);
    this.data[key] = this.session_storage.get(key);
    console.log(this.data);
  }
}

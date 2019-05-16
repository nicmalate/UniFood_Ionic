import {Component} from '@angular/core';
import {ListaProdottiService} from '../services/lista-prodotti-service/lista-prodotti.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.page.html',
  styleUrls: ['./lista-prodotti.page.scss'],
})
export class ListaProdottiPage {
  constructor(private listaProdottiService: ListaProdottiService, private appComponent: AppComponent) {

    this.getProdotti();
  }

  getProdotti(){
    this.listaProdottiService.getProdotti().then(data =>{
      console.log(data);
    }).catch(err=>{
      console.error(err);
    });
  }

}

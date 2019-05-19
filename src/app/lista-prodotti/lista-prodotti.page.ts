import {Component, OnInit} from '@angular/core';
import {ListaProdottiService} from '../services/lista-prodotti-service/lista-prodotti.service';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.page.html',
  styleUrls: ['./lista-prodotti.page.scss'],
})
export class ListaProdottiPage implements OnInit{

  constructor(private listaProdottiService: ListaProdottiService) {
  }

  ngOnInit(): void {
    console.log('PAGE LISTA PRODOTTI');
    this.getProdotti()
  }

  getProdotti(){
    this.listaProdottiService.getProdotti().then(data =>{
      console.log('FUNZIONE GET PRODOTTI');
      console.log(data);
    }).catch(err=>{
      console.error(err);
    });
  }

}

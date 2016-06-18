import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ScientificFactsPage} from '../scientific-facts-page/scientific-facts-page';
import {EstrelasData} from '../../providers/estrelas';

@Component({
  templateUrl: 'build/pages/capa/capa.html'
})
export class CapaPage {

  items: Array<{nome: string, descricao: string, image: string}>;

  constructor(private _navController:NavController, estrelas: EstrelasData) {

	estrelas.getData().then(estrelas => {
    	this.items = estrelas;
	});

  }

  goToFactsPage(){
    this._navController.push(ScientificFactsPage);
  }
}

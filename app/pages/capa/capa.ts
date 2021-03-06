import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TestPage} from '../test/test';
import {EstrelasData} from '../../providers/estrelas';

@Component({
  templateUrl: 'build/pages/capa/capa.html'
})
export class CapaPage {

  items: Array<{nome: string, descricao: string, image: string}>;

  constructor(private _navController:NavController, estrelas: EstrelasData) {

	estrelas.getListadeEstrelas().then(estrelas => {
    	this.items = estrelas;
	});

  }

  goToTest(estrela){
    this._navController.push(TestPage, estrela);
  }
}

import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EstrelasData} from '../../providers/estrelas';

@Component({
  templateUrl: 'build/pages/test/test.html'
})
export class TestPage {

  private estrela:any;
  
  constructor(
    private _navController: NavController, 
    private _navParams: NavParams, 
    private estrelas: EstrelasData) {

    this.estrela = {};
    estrelas.getEstrela(this._navParams.data.link).then(estrela => {
        this.estrela = estrela;
    });
  }

  goPasso(num){
    this._navController.push(TestPage, this.estrela.passos[num]);
  }

  goBack(){
    this._navController.pop();
  }
}

import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EstrelasData} from '../../providers/estrelas';

@Component({
  templateUrl: 'build/pages/test/test.html'
})
export class TestPage {

  private fact:any;
  
  constructor(private _navController: NavController, private _navParams: NavParams, private estrelas: EstrelasData) {
    this.fact = this._navParams.data.link;
    estrelas.getTest(this.fact).then(test => {
        this.fact = test.descricao;
    });
  }

  goBack(){
    this._navController.pop();
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  titre ='app works';
  firsName ="robert";
  name = "dupont";
  constructor(public navCtrl: NavController) {

  }

  doClick(){
    this.name = "click sur button";
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//page
import { FilmsPage } from './../films/films';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  // repère des pages ( tabulation)
  tab1 = 'FilmsPage';
  tab2 = 'PeoplePage';
  tab3 = 'PlanetsPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  

  navigerVersfilms(){
    this.navCtrl.push(FilmsPage);
  }

}

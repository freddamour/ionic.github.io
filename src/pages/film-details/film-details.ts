import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film-details',
  templateUrl: 'film-details.html',
})
export class FilmDetailsPage {
  filmId = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filmId = this.navParams.get('filmID');
    this.ionViewDidLoad();
    console.log(this.filmId);
  }

  goBack() {
    this.navCtrl.pop();
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmDetailsPage');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
/* import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject' */;






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  titre ='app works';
  firsName ="robert";
  name = "dupont";



  constructor(public navCtrl: NavController) {

      this.testObservable();
      }

  doClick(){
    this.name = "click sur button";
  }

  testObservable(){

    // observation de tableau
    [1, 2, 3, 4, 5]
    .map(x => x * 2) // applique la fonction anonyme fn sur chaque événement et retourne le résultat.
    .filter(x => x > 5)// laisse passer les seuls événements qui répondent au prédicat
    .forEach(x => console.log(x));

    //Observable.create reçoit une fonction qui émet des événements sur son paramètre observer
    const observable = Observable.create((observer) => observer.next('hello'));
          observable.subscribe((value) => console.log(value));
    
    // observation des Event
    window.onload= function(){
      var btn = document.getElementById('btn');
      var source = Observable.fromEvent(btn,'click');
      source.subscribe((data) => console.log("obs1"+data));
      }
   
   
  }

  


}

webpackJsonp([5],{

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/film-details/film-details.module": [
		673,
		4
	],
	"../pages/films/films.module": [
		674,
		3
	],
	"../pages/people/people.module": [
		675,
		2
	],
	"../pages/planets/planets.module": [
		676,
		1
	],
	"../pages/tabs/tabs.module": [
		677,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(344);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/film-details/film-details.module#FilmDetailsPageModule', name: 'FilmDetailsPage', segment: 'film-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/films/films.module#FilmsPageModule', name: 'FilmsPage', segment: 'films', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/people/people.module#PeoplePageModule', name: 'PeoplePage', segment: 'people', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/planets/planets.module#PlanetsPageModule', name: 'PlanetsPage', segment: 'planets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'TabsPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\0 Projet\00 projet GIT\ionic.github.io\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\0 Projet\00 projet GIT\ionic.github.io\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_item__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_config__ = __webpack_require__(672);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {provideForms} from '@angular/forms'


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.choix = ['a faire', 'en cours', 'fait'];
        this.titre = __WEBPACK_IMPORTED_MODULE_4__app_models_config__["a" /* Config */].APP_TITLE;
        this.version = __WEBPACK_IMPORTED_MODULE_4__app_models_config__["a" /* Config */].APP_Version;
        this.firsName = "robert";
        this.name = "dupont";
        this.collection = [
            new __WEBPACK_IMPORTED_MODULE_3__app_models_item__["a" /* Item */]({ reference: '1234', name: 'toto', state: 0, image: 'http://via.placeholder.com/350x150' }),
            new __WEBPACK_IMPORTED_MODULE_3__app_models_item__["a" /* Item */]({ reference: '3456', name: 'titi', state: 1, image: 'http://via.placeholder.com/350x150' }),
            new __WEBPACK_IMPORTED_MODULE_3__app_models_item__["a" /* Item */]({ reference: '5678', name: 'tata', state: 2, image: 'http://via.placeholder.com/350x150' })
        ];
        console.log(this.collection);
        this.model = new __WEBPACK_IMPORTED_MODULE_3__app_models_item__["a" /* Item */]({ reference: '1234', name: 'toto', state: 0, image: 'http://via.placeholder.com/350x150' });
        this.testObservable();
        this.resetNewItem();
    } // fin constructeur
    HomePage.prototype.resetNewItem = function () {
        this.newItem = new __WEBPACK_IMPORTED_MODULE_3__app_models_item__["a" /* Item */]({ reference: '', name: '', state: 0, image: '' });
    };
    HomePage.prototype.getDetails = function (event, parameter) {
        event.preventDefault();
        console.log(event);
        var eventEnCours = event.target || event.currentTarget || event.srcElement;
        //console.log(eventEnCours.attributes.id); //affiche id=1234
        // console.log(eventEnCours.id); // affiche 1234
        console.log(parameter);
    };
    HomePage.prototype.creationObjet = function () {
        this.collection.push(this.newItem);
        console.log(this.newItem);
        this.resetNewItem();
    };
    HomePage.prototype.doClick = function () {
        this.name = "click sur button";
    };
    HomePage.prototype.testObservable = function () {
        // observation de tableau
        [1, 2, 3, 4, 5]
            .map(function (x) { return x * 2; }) // applique la fonction anonyme fn sur chaque événement et retourne le résultat.
            .filter(function (x) { return x > 5; }) // laisse passer les seuls événements qui répondent au prédicat
            .forEach(function (x) { return console.log(x); });
        //Observable.create reçoit une fonction qui émet des événements sur son paramètre observer
        var observable = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) { return observer.next('hello'); });
        observable.subscribe(function (value) { return console.log(value); });
        var myObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].from([1, 2, 4, 5]);
        myObservable.subscribe(function (i) { return console.log(i); });
        //const myObservable2 = Observable.interval(1000)
        //myObservable2.subscribe((i) => (console.log(i)));
        // observation des Event
        window.onload = function () {
            var btn = document.getElementById('btn');
            var source = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromEvent(btn, 'click');
            source.subscribe(function (data) { return console.log("obs1" + data); });
        };
    };
    HomePage.prototype.EnvoyerAjax = function () {
        console.log(this.model);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\0 Projet\00 projet GIT\ionic.github.io\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form #todoForm = "ngForm"  >\n\n    \n\n\n\n<div class="form-group">\n\n  <input type="number" name="reference" id="" placeholder="reference" [(ngModel)]="model.reference" class="form-control">\n\n  {{model.reference}}\n\n</div>\n\n<div class="form-group">\n\n  <input type="text" #todoName name="name" id="" placeholder="name" [(ngModel)]="model.name" class="form-control" >\n\n  {{todoName.className}}\n\n</div>\n\n<div class="form-group">\n\n  <select name="" id=""  class="form-control">\n\n    <option *ngFor="let v of choix" value="{{v}}">{{v}}</option>\n\n    \n\n  </select>\n\n  <input type="number" name="state" id="" placeholder="state" [(ngModel)]="model.state" >\n\n</div>\n\n{{model | json}}\n\n    <button type="submit" (click)="EnvoyerAjax()" >Envoyer</button>\n\n</form>\n\n\n\n\n\n<a href="https://placeholder.com"><img src="http://via.placeholder.com/350x150"></a>\n\n<h1> {{titre}}</h1>\n\n<h2>{{version}}</h2>\n\n\n\n\n\n  bla bla.\n\n  <p>\n\n    lien vers site <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n  <p>interpolation de propriété {{1+1}}</p>\n\n  \n\n\n\n\n\n  <!--object type="image/svg+xml" data="https://s.cdpn.io/3/kiwi.svg">failed to load svg :(</object-->\n\n  <hr />\n\n\n\n<br>\n\n<input type="text" name="" id="" [(ngModel)]="newItem.reference">\n\n<input type="text" name="" id="" [(ngModel)]="newItem.name">\n\n<input type="text" name="" id="" [(ngModel)]="newItem.state">\n\n<input type="text" name="" id="" [(ngModel)]="newItem.image">\n\n\n\n<!--   utile pour la maintenance -->\n\n<p> {{newItem |json}}</p>\n\n\n\n\n\n<!--   câblage de l\'évenement sur une méthode du composant -->\n\n<button (click)="creationObjet()">Ajouter un objet</button>\n\n<!--   itération sur une collection -->\n\n  <div\n\n   *ngFor="let item of collection">\n\n  <p> Référense: {{item.reference}}</p>\n\n  <p> nom: {{item.name}}</p>\n\n  <p> state: {{item.state}}</p>\n\n  <a href="https://placeholder.com"><img src="{{item.image}}"></a>\n\n  <p> image: {{item.image}}</p>\n\n  \n\n\n\n  <!--   définition de l\'objet $event -->\n\n  <a href="" id="{{item.reference}}" (click)="getDetails($event, \'test\')">vers getDetails</a>\n\n\n\n  <!--   affichage conditionner -->\n\n  <p class="state-0" *ngIf="0==item.state">A faire </p>\n\n  <p class="state-1" *ngIf="1==item.state">En cours </p>\n\n  <p class="state-2"*ngIf="2==item.state">fait </p>\n\n  <hr />\n\n </div>\n\n  \n\n\n\n  <!--   cible du binding -->\n\ndom: <input type="texte" [value]="name">\n\nattr:<input type="texte" value="{{name}}">\n\n<p [innerText]= "name"></p>\n\n<p>{{name}}</p>\n\n\n\n <!--   cible vue vers model -->\n\ndouble binding <input type="text"[(ngModel)]=name>\n\n<button (click)="doClick()">appel méthode dans fichier .ts</button>\n\n<button ion-button id="btn" >click</button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\0 Projet\00 projet GIT\ionic.github.io\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}()); //fin constructeur

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = /** @class */ (function () {
    function Item(data) {
        this.reference = data.reference;
        this.name = data.name;
        this.state = data.state;
        this.image = data.image;
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Object.defineProperty(Config, "APP_TITLE", {
        get: function () { return 'Application Neuroteck'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Config, "APP_Version", {
        get: function () { return 'Version 1.0'; },
        enumerable: true,
        configurable: true
    });
    ;
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ })

},[339]);
//# sourceMappingURL=main.js.map
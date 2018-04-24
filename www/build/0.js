webpackJsonp([0],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(682);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilmsPage = /** @class */ (function () {
    function FilmsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilmsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilmsPage');
    };
    FilmsPage.prototype.openDetails = function () {
        this.navCtrl.push('FilmDetailsPage');
    };
    FilmsPage.prototype.goToPlanets = function () {
        this.navCtrl.parent.select(1);
    };
    FilmsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-films',template:/*ion-inline-start:"D:\0 Projet\00 projet GIT\ionic.github.io\src\pages\films\films.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Filmsgg</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content padding>\n\n  <button ion-button full (click)="openDetails()">Go to Details</button>\n\n  <button ion-button full (click)="goToPlanets()">Switch to Planets</button>\n\n</ion-content>'/*ion-inline-end:"D:\0 Projet\00 projet GIT\ionic.github.io\src\pages\films\films.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FilmsPage);
    return FilmsPage;
}());

//# sourceMappingURL=films.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__films_films__ = __webpack_require__(678);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//page

var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // repère des pages ( tabulation)
        this.tab1 = 'FilmsPage';
        this.tab2 = 'PeoplePage';
        this.tab3 = 'PlanetsPage';
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage.prototype.navigerVersfilms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__films_films__["a" /* FilmsPage */]);
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\0 Projet\00 projet GIT\ionic.github.io\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1" tabTitle="Films" tabIcon="film"></ion-tab>\n\n    <ion-tab [root]="tab2" tabTitle="People" tabIcon="people"></ion-tab>\n\n    <ion-tab [root]="tab3" tabTitle="Planets" tabIcon="planet"></ion-tab>\n\n</ion-tabs>\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>tabs</ion-title>\n\n\n\n    \n\n  </ion-navbar>\n\n  \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-tabs>\n\n    <ion-tab [root]="tab1" tabTitle="Films" tabIcon="film"></ion-tab>\n\n    <ion-tab [root]="tab2" tabTitle="People" tabIcon="people"></ion-tab>\n\n    <ion-tab [root]="tab3" tabTitle="Planets" tabIcon="planet"></ion-tab>\n\n   </ion-tabs>\n\n\n\n\n\n    \n\n   <!-- <button ion-button  color="light" href="" (click)="navigerVersfilms()" >aller vers films</button> -->\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"D:\0 Projet\00 projet GIT\ionic.github.io\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
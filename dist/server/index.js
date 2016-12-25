module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/usr/share/nginx/volejbal-sokol-benesov";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            template: __webpack_require__(19)
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Login = (function () {
    function Login() {
    }
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            template: __webpack_require__(20)
        }), 
        __metadata('design:paramtypes', [])
    ], Login);
    return Login;
}());
exports.Login = Login;


/***/ },
/* 3 */
/***/ function(module, exports) {

"use strict";
"use strict";
exports.PATHS = {
    CART: '/kosik',
    LOGIN: '/login',
    HOMEPAGE: '/homepage',
};
exports.SLASH = '/';
exports.DOT = '.';
exports.FORMAT_NUMBER_1 = '1.0-0';
exports.FORMAT_NUMBER_2 = '1.1-2';
exports.SESSIONID_CODE = 'sessionid';
exports.AUTH_TOKEN_CODE = 'auth_token';


/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var fs = __webpack_require__(39);
var Promise = __webpack_require__(40);
var Constants = __webpack_require__(3);
var tools_1 = __webpack_require__(36);
function sessionidCookie(req, res, next) {
    var sql, vals = {};
    try {
        if (!tools_1.Tools.getSessionId(req)) {
            sql =
                'SELECT ' +
                    '  encrypt_cookie(seq_sessionid_nbs.nextval) as "sessionid" ' +
                    'FROM ' +
                    '  dual';
            next();
        }
        else {
            next();
        }
    }
    catch (e) {
        console.log(e);
        next();
    }
}
exports.sessionidCookie = sessionidCookie;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(37);
var angular2_universal_1 = __webpack_require__(4);
var app_1 = __webpack_require__(27);
var app_routing_1 = __webpack_require__(26);
var home_component_1 = __webpack_require__(1);
var header_component_1 = __webpack_require__(31);
var footer_component_1 = __webpack_require__(30);
var contact_component_1 = __webpack_require__(28);
var matches_component_1 = __webpack_require__(33);
var match_schedule_component_1 = __webpack_require__(32);
var statistics_component_1 = __webpack_require__(35);
var about_us_component_1 = __webpack_require__(25);
var players_component_1 = __webpack_require__(34);
var login_component_1 = __webpack_require__(2);
var cslider_component_1 = __webpack_require__(29);
//noinspection TypeScriptUnresolvedVariable
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_1.App],
            declarations: [
                app_1.App,
                home_component_1.Home,
                header_component_1.Header,
                footer_component_1.Footer,
                contact_component_1.Contact,
                matches_component_1.Matches,
                match_schedule_component_1.MatchSchedule,
                statistics_component_1.Statistics,
                about_us_component_1.AboutUs,
                players_component_1.Players,
                login_component_1.Login,
                cslider_component_1.CSlider
            ],
            imports: [
                angular2_universal_1.UniversalModule,
                forms_1.FormsModule,
                app_routing_1.routing,
            ],
            providers: [
                app_routing_1.appRoutingProviders,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MainModule);
    return MainModule;
}());
exports.MainModule = MainModule;


/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("cookie-parser");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("cookies");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = "<header></header>\n<router-outlet></router-outlet>\n<footer></footer>\n"

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = "<!-- Newsletter section start -->\n<!--<div class=\"section third-section\">\n  <div class=\"container newsletter\">\n    <div class=\"sub-section\">\n      <div class=\"title clearfix\">\n        <div class=\"pull-left\">\n          <h3>Newsletter</h3>\n        </div>\n      </div>\n    </div>\n    <div id=\"success-subscribe\" class=\"alert alert-success invisible\">\n      <strong>Děkujeme!</strong>Váš email byl zaregistrován k odběru novinek.</div>\n    <div class=\"row-fluid\">\n      <div class=\"span5\">\n        <p>Zadejte svůj email a budete dostávat aktuality o našem týmu a upozornění na konající se zápasy.</p>\n      </div>\n      <div class=\"span7\">\n        <form class=\"inline-form\">\n          <input type=\"email\" name=\"email\" id=\"nlmail\" class=\"span8\" placeholder=\"Zadejte Váš email\" required />\n          <button id=\"subscribe\" class=\"button button-sp\">Zaregistrovat email</button>\n        </form>\n        <div id=\"err-subscribe\" class=\"error centered\">Zadejte validní emailovou adresu.</div>\n      </div>\n    </div>\n  </div>\n</div>-->\n<!-- Newsletter section end -->\n<!-- Contact section start -->\n<!-- Contact section edn -->\n<!-- Footer section start -->\n<div class=\"footer\">\n  <p>\n    &copy; 2013 Theme by\n    <a href=\"http://www.graphberry.com\">GraphBerry</a>,\n    <a href=\"http://goo.gl/NM84K2\">Documentation</a>,\n    created by Martin Boháč(2016)\n    <a href=\"/login\">login</a>\n  </p>\n  <div class=\"icons-licence\">\n    Icons made by\n    <a href=\"http://www.freepik.com\" title=\"Freepik\">Freepik</a>\n    from\n    <a href=\"http://www.flaticon.com\" title=\"Flaticon\">www.flaticon.com</a>\n    is licensed by\n    <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a>\n  </div>\n</div>\n<!-- Footer section end -->\n<!-- ScrollUp button start -->\n<!--<div class=\"scrollup\">\n  <a href=\"#\">\n    <i class=\"icon-up-open\"></i>\n  </a>\n</div>-->\n<!-- ScrollUp button end -->\n<!-- Include javascript -->\n<!-- Load google maps api and call initializeMap function defined in app.js -->\n<!--<script async=\"\" defer=\"\" type=\"text/javascript\" src=\"https://maps.googleapis.com/maps/api/js?sensor=false&callback=initializeMap\"></script>-->\n"

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <div class=\"navbar-inner\">\n    <div class=\"container\">\n      <a href=\"#\" class=\"brand logo\">\n        <!-- This is website logo -->\n        <img src=\"/assets/img/znak.png\" width=\"37\" height=\"43\" alt=\"TJ Sokol Benešov\" />\n      </a>\n      <h2 class=\"logo\">TJ Sokol Benešov u Prahy</h2>\n      <!-- Navigation button, visible on small resolution -->\n      <button type=\"button\" class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n        <i class=\"icon-menu\"></i>\n      </button>\n      <!-- Main navigation -->\n      <div class=\"nav-collapse collapse pull-right\">\n        <ul class=\"nav\" id=\"top-navigation\">\n          <!--<li><a href=\"#\">Úvod</a></li>-->\n          <li><a href=\"#about\">O nás</a></li>\n          <li><a href=\"#players\">Hráči</a></li>\n          <li><a href=\"#news\">Aktuality</a></li>\n          <li><a target=\"_blank\" href=\"http://www.cvf.cz/rozpisy-vysledky/?soutez=ST-M1&skupina=ST-M-1\">Zápasy</a></li>\n          <li><a target=\"_blank\" href=\"http://www.cvf.cz/souteze/soutez/?soutez=ST-M1\">Tabulka</a></li>\n          <li><a href=\"#contact\">Kontakt</a></li>\n          <li><a href=\"#partners\">Partneři</a></li>\n        </ul>\n      </div>\n      <!-- End main navigation -->\n    </div>\n  </div>\n</div>\n<!-- Start home section -->\n<div id=\"home\">\n  <!-- Start cSlider -->\n  <div id=\"da-slider\" class=\"da-slider\" cslider>\n    <div class=\"triangle\"></div>\n    <!-- mask elemet use for masking background image -->\n    <div class=\"mask\"></div>\n    <!-- All slides centred in container element -->\n    <div class=\"container\">\n      <!-- Start first slide -->\n      <div class=\"da-slide\">\n        <h2 class=\"fittext2\">Aktuálně hrajeme</h2>\n        <h4>KP I. TŘÍDY MUŽŮ</h4>\n        <p>V sezóně 2016/2017 hrajeme soutěž ST-M1. Naším cílem v druhé polovině sezóny je podat vyrovnaný výkon a vyhrát soutěž.</p>\n        <a href=\"http://www.cvf.cz/souteze/soutez/?soutez=ST-M1\" class=\"da-link button\">Podrobnosti</a>\n        <div class=\"da-img\">\n          <img src=\"/assets/img/header11.png\" alt=\"Soutěž\" width=\"320\">\n        </div>\n      </div>\n      <!-- End first slide -->\n      <!-- Start second slide -->\n      <div class=\"da-slide\">\n        <h2>Naši hráči</h2>\n        <h4>Přidej se k nám</h4>\n        <p>Jsme ambiciózní tým lidí, které volejbal skutečně baví a chtějí podávat ty nejlepší výkony, ale také dobrá parta, která ráda zajde na pivo. Pokud máš chuť se k nám přidat tak neváhej a přijď se podívat na trénink</p>\n        <a href=\"#players\" class=\"da-link button\">Podrobnosti</a>\n        <div class=\"da-img\">\n          <img src=\"/assets/img/header22.png\" width=\"520\" alt=\"hráči\">\n        </div>\n      </div>\n      <!-- End second slide -->\n      <!-- Start third slide -->\n      <div class=\"da-slide\">\n        <h2>Aktualita</h2>\n        <h4>10.12.2016</h4>\n        <p>Volejbalisté Benešova brali s Dobřichovicemi tři body. V prvním utkání podali domácí nevýrazný výkon, a i přes těsný výsledek ve třetím setu, nakonec hladce prohráli. Ve druhém zápase se benešovští volejbalisté zlepšili a povolili hostům zisk pouze jednoho setu.</p>\n        <a href=\"#news\" class=\"da-link button\">Podrobnosti</a>\n        <div class=\"da-img\">\n          <img src=\"/assets/img/header3.png\" width=\"520\" alt=\"Aktualita\">\n        </div>\n      </div>\n      <!-- Start third slide -->\n      <!-- Start cSlide navigation arrows -->\n      <div class=\"da-arrows\">\n        <span class=\"da-arrows-prev\"></span>\n        <span class=\"da-arrows-next\"></span>\n      </div>\n      <!-- End cSlide navigation arrows -->\n    </div>\n  </div>\n</div>\n<!-- End home section -->\n"

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = "<!-- Service section start -->\n<div class=\"section primary-section\" id=\"service\">\n  <div class=\"container\">\n    <!-- Start title section -->\n    <div class=\"title\">\n      <h1>Vítejte na stránkách volejbalového klubu TJ Sokol Benešov</h1>\n      <!-- Section's title goes here -->\n      <p>Najdete zde kompletní informace o našem týmu, zápasech, tréninku a další.</p>\n      <!--Simple description for section goes here. -->\n    </div>\n    <div class=\"row-fluid\">\n      <div class=\"span4\">\n        <div class=\"centered service\">\n          <div class=\"circle-border zoom-in\">\n            <img class=\"img-circle\" src=\"/assets/img/ico/cup.png\" alt=\"Soutěž\">\n          </div>\n          <h3>Soutěž</h3>\n          <p>V sezóně 2016/2017 hrajeme soutěž ST-M1.</p>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"centered service\">\n          <div class=\"circle-border zoom-in\">\n            <img class=\"img-circle\" src=\"/assets/img/ico/spider.png\" alt=\"Kde hrajeme\" />\n          </div>\n          <h3>Kde hrajeme</h3>\n          <p>Sportovní hala ZŠ Jiráskova, Jiráskova 888, Benešov</p>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"centered service\">\n          <div class=\"circle-border zoom-in\">\n            <img class=\"img-circle\" src=\"/assets/img/ico/ball.png\" alt=\"Tréninky\">\n          </div>\n          <h3>Tréninky</h3>\n          <p>Každé pondělí od 19:00-21:00 a středu od 20:00-22:00</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Service section end -->\n<!-- Portfolio section start -->\n<!--<div class=\"section secondary-section \" id=\"portfolio\">\n    <div class=\"triangle\"></div>\n    <div class=\"container\">\n        <div class=\" title\">\n            <h1>Have You Seen our Works?</h1>\n            <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>\n        </div>\n        <ul class=\"nav nav-pills\">\n            <li class=\"filter\" data-filter=\"all\">\n                <a href=\"#noAction\">All</a>\n            </li>\n            <li class=\"filter\" data-filter=\"web\">\n                <a href=\"#noAction\">Web</a>\n            </li>\n            <li class=\"filter\" data-filter=\"photo\">\n                <a href=\"#noAction\">Photo</a>\n            </li>\n            <li class=\"filter\" data-filter=\"identity\">\n                <a href=\"#noAction\">Identity</a>\n            </li>\n        </ul>\n        &lt;!&ndash; Start details for portfolio project 1 &ndash;&gt;\n        <div id=\"single-project\">\n            <div id=\"slidingDiv\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio01.png\" alt=\"project 1\" />\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 1 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 2 &ndash;&gt;\n            <div id=\"slidingDiv1\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio02.png\" alt=\"project 2\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 2 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 3 &ndash;&gt;\n            <div id=\"slidingDiv2\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio03.png\" alt=\"project 3\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>How far you go in life depends on your being tender with the young, compassionate with the aged, sympathetic with the striving and tolerant of the weak and strong. Because someday in your life you will have been all of these.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 3 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 4 &ndash;&gt;\n            <div id=\"slidingDiv3\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio04.png\" alt=\"project 4\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Project for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>Life's but a walking shadow, a poor player, that struts and frets his hour upon the stage, and then is heard no more; it is a tale told by an idiot, full of sound and fury, signifying nothing.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 4 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 5 &ndash;&gt;\n            <div id=\"slidingDiv4\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio05.png\" alt=\"project 5\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>We need to give each other the space to grow, to be ourselves, to exercise our diversity. We need to give each other space so that we may both give and receive such beautiful things as ideas, openness, dignity, joy, healing, and inclusion.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 5 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 6 &ndash;&gt;\n            <div id=\"slidingDiv5\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio06.png\" alt=\"project 6\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 6 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 7 &ndash;&gt;\n            <div id=\"slidingDiv6\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio07.png\" alt=\"project 7\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>Always continue the climb. It is possible for you to do whatever you choose, if you first get to know who you are and are willing to work with a power that is greater than ourselves to do it.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 7 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 8 &ndash;&gt;\n            <div id=\"slidingDiv7\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio08.png\" alt=\"project 8\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>What if you gave someone a gift, and they neglected to thank you for it - would you be likely to give them another? Life is the same way. In order to attract more of the blessings that life has to offer, you must truly appreciate what you already have.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 8 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 9 &ndash;&gt;\n            <div id=\"slidingDiv8\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio09.png\" alt=\"project 9\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>I learned that we can do anything, but we can't do everything... at least not at the same time. So think of your priorities not in terms of what activities you do, but when you do them. Timing is everything.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 9 &ndash;&gt;\n            <ul id=\"portfolio-grid\" class=\"thumbnails row\">\n                <li class=\"span4 mix web\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio01.png\" alt=\"project 1\">\n                        <a href=\"#single-project\" class=\"more show_hide\" rel=\"#slidingDiv\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix photo\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio02.png\" alt=\"project 2\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv1\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix identity\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio03.png\" alt=\"project 3\">\n                        <a href=\"#single-project\" class=\"more show_hide\" rel=\"#slidingDiv2\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix web\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio04.png\" alt=\"project 4\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv3\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix photo\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio05.png\" alt=\"project 5\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv4\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix identity\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio06.png\" alt=\"project 6\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv5\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix web\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio07.png\" alt=\"project 7\" />\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv6\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix photo\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio08.png\" alt=\"project 8\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv7\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix identity\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio09.png\" alt=\"project 9\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv8\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>-->\n<!-- Portfolio section end -->\n\n<div class=\"section secondary-section\">\n  <div class=\"triangle\"></div>\n  <div class=\"container centered\">\n    <p class=\"large-text\">Můžeš mít buď výsledky nebo výmluvy. Nemůžeš mít obojí.</p>\n    <small>Arnold Schwarzenegger</small>\n    <a href=\"#\" class=\"button\">Na úvod</a>\n  </div>\n</div>\n\n<!-- About us section start -->\n<div class=\"section primary-section\" id=\"players\">\n  <div class=\"triangle\"></div>\n  <div class=\"container\">\n    <div class=\"title\">\n      <h1>Naši hráči</h1>\n      <p>Představujeme Vám naše aktivní hráče, kteří jsou pro sezónu 2016/2017 na soupisce.</p>\n    </div>\n    <div class=\"row-fluid team\">\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/bartusekjan.png\" alt=\"team 1\">\n          <h3>Bartůšek Jan</h3>\n          <h5>Smečař</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař</h2>\n            <p>Ročník 1993</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/bartusekj.png\" alt=\"team 1\">\n          <h3>Bartůšek Josef</h3>\n          <h5>Smečař, univerzál</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař, univerzál</h2>\n            <p>Ročník 1987</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/bohac.png\" alt=\"team 1\">\n          <h3>Boháč Martin</h3>\n          <h5>Smečař</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař</h2>\n            <p>Ročník 1981</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row-fluid team\">\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/no-person.png\" alt=\"team 1\">\n          <h3>Brandl Tomáš</h3>\n          <h5>Smečař, Blokař</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař, Blokař</h2>\n            <p>Ročník 1982</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/no-person.png\" alt=\"team 1\">\n          <h3>Čepl Marek</h3>\n          <h5>Libero</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Libero</h2>\n            <p>Ročník 1990</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/hlavnicka.png\" alt=\"team 1\">\n          <h3>Hlavnička Jiří</h3>\n          <h5>Nahrávač</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Nahrávač</h2>\n            <p>Ročník 1982</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row-fluid team\">\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/koci.png\" alt=\"team 1\">\n          <h3>Kočí Petr</h3>\n          <h5>Blokař, trenér</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Blokař</h2>\n            <p>Ročník 1981</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/kunc.png\" alt=\"team 1\">\n          <h3>Kunc Martin</h3>\n          <h5>Univerzál</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Univerzál</h2>\n            <p>Ročník 1981</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/kyselka.png\" alt=\"team 1\">\n          <h3>Kyselka Jan</h3>\n          <h5>Blokař</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Blokař</h2>\n            <p>Ročník 1985</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row-fluid team\">\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/lang.png\" alt=\"team 1\">\n          <h3>Lang Michal</h3>\n          <h5>Smečař, libero, univerzál</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař, libero, univerzál</h2>\n            <p>Ročník 1984</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/rehak.png\" alt=\"team 1\">\n          <h3>Řehák Petr</h3>\n          <h5>Smečař, trenér</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař</h2>\n            <p>Ročník 1974</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/votruba.png\" alt=\"team 1\">\n          <h3>Votruba Viktor</h3>\n          <h5>Blokař</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Blokař</h2>\n            <p>Ročník 1977.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"title\">\n      <h1>Funkcionáři</h1>\n      <!--<p>Představujeme Vám naše aktivní hráče, kteří jsou pro sezónu 2016/2017 na soupisce.</p>-->\n    </div>\n    <div class=\"row-fluid team\">\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/jiracek.png\" alt=\"team 1\">\n          <h3>Jiráček Viktor</h3>\n          <h5>Čestný vedoucí oddílu</h5>\n          <div class=\"mask\">\n            <h2>Čestný vedoucí oddílu</h2>\n            <p>Ročník 1932</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--<div class=\"about-text centered\">\n      <h3>O nás</h3>\n      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>\n    </div>-->\n    <!--<h3>Skills</h3>\n    <div class=\"row-fluid\">\n        <div class=\"span6\">\n            <ul class=\"skills\">\n                <li>\n                    <span class=\"bar\" data-width=\"80%\"></span>\n                    <h3>Graphic Design</h3>\n                </li>\n                <li>\n                    <span class=\"bar\" data-width=\"95%\"></span>\n                    <h3>Html & Css</h3>\n                </li>\n                <li>\n                    <span class=\"bar\" data-width=\"68%\"></span>\n                    <h3>jQuery</h3>\n                </li>\n                <li>\n                    <span class=\"bar\" data-width=\"70%\"></span>\n                    <h3>Wordpress</h3>\n                </li>\n            </ul>\n        </div>\n        <div class=\"span6\">\n            <div class=\"highlighted-box center\">\n                <h1>We're Hiring</h1>\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ullamcorper suscipit lobortis nisl ut aliquip consequat. I learned that we can do anything, but we can't do everything...</p>\n                <button class=\"button button-sp\">Join Us</button>\n            </div>\n        </div>\n    </div>-->\n  </div>\n</div>\n\n<div class=\"section secondary-section\">\n  <div class=\"triangle\"></div>\n  <div class=\"container centered\">\n    <p class=\"large-text\">Tajemství úspěchu člověka spočívá ve zvyku dělat to, co neúspěšní lidé dělají neradi.</p>\n    <small>Jackson King</small>\n    <a href=\"#\" class=\"button\">Na úvod</a>\n  </div>\n</div>\n\n<div id=\"about\">\n  <div class=\"section primary-section\">\n    <div class=\"triangle\"></div>\n    <div class=\"container\">\n      <div class=\"title\">\n        <h1>O nás</h1>\n        <p>Jsme ambiciózní tým lidí, které volejbal skutečně baví a chtějí podávat ty nejlepší výkony, ale také dobrá parta, která ráda zajde na pivo. Pokud máš chuť se k nám přidat tak neváhej a přijď se podívat na trénink.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- About us section end -->\n<div class=\"section secondary-section\">\n  <div class=\"triangle\"></div>\n  <div class=\"container centered\">\n    <p class=\"large-text\">Překážky jsou ony obávané věci, které spatříte, když odvrátíte pohled od svého cíle.</p>\n    <small>Henry Ford</small>\n    <a href=\"#\" class=\"button\">Na úvod</a>\n  </div>\n</div>\n<!-- Client section start -->\n<!-- Client section start -->\n<div id=\"news\">\n  <div class=\"section primary-section\">\n    <div class=\"triangle\"></div>\n    <div class=\"container\">\n      <div class=\"title\">\n        <h1>Aktuality</h1>\n        <p>Články o našem volejbale můžete také najít na stránkách <a href=\"http://benesovsky.denik.cz/\">Benešovského deníku</a> v rubrice\n          <a href=\"http://benesovsky.denik.cz/ostatni_region/\">sport</a>.\n        </p>\n      </div>\n      <div class=\"row\">\n        <div class=\"span4\">\n          <div class=\"testimonial\">\n            <div class=\"whopic\">\n              <small>10.12.2016</small>\n              <!--<img src=\"/assets/img/volejbal-benesov-foto-1_denik-630.jpg\" class=\"centered\" alt=\"client 1\">-->\n              <strong>Volejbalisté Benešova brali s Dobřichovicemi tři body</strong>\n            </div>\n            <!--<div class=\"arrow\"></div>-->\n            <p>Benešov – Volejbalisté Benešova se ve dvojutkání devátého kola krajského přeboru s Dobřichovicemi dočkali doma tří bodů za výhru ve druhém zápase a v tabulce poskočili na druhé místo.Benešov – Dobřichovice 0:3 (17, 21, 27), 3:1 (23, -24, 17, 17)\n\n            </p>\n            <p *ngIf=\"false\">V prvním utkání podali domácí nevýrazný výkon, a i přes těsný výsledek ve třetím setu, nakonec hladce prohráli. Ve druhém zápase se benešovští volejbalisté zlepšili a povolili hostům zisk pouze jednoho setu.\n\n              Benešov: Jo. Bartůšek, P. Kočí, J. Hlavnička, M. Boháč, M. Lang, J. Kyselka, P. Řehák, V. Votruba, M. Čepl.\n\n              Další domácí utkání sehraje TJ Sokol Benešov až 14. ledna 2017 od 11 hodin ve sportovní hale ZŠ Jiráskova proti SK Volejbal Kolín A.\n            </p>\n            <p><a href=\"#\">celá zpráva...</a></p>\n          </div>\n        </div>\n        <div class=\"span4\">\n          <div class=\"testimonial\">\n            <div class=\"whopic\">\n              <small>3.12.2016</small>\n              <!--<img src=\"/assets/img/volejbal-benesov-foto-1_denik-630.jpg\" class=\"centered\" alt=\"client 1\">-->\n              <strong>Volejbalisté Benešova postrádali více štěstí</strong>\n            </div>\n            <!--<div class=\"arrow\"></div>-->\n            <p>Roztoky u Prahy – Po hladkém vítězství s Rakovníkem získali benešovští volejbalisté v 8. kole pouze bod s Roztoky v krajském přeboru, když i přes dobrý výkon, podlehli soupeři 1:3, 2:3. Roztoky – Benešov 3:1 (-18, 18, 18, 24), 3:2 (-13, 14, 25, -17, 12)\n\n            </p>\n            <p *ngIf=\"false\">Po jednoznačném průběhu prvního setu v prvním zápase pro hosty, byly další dva sety záležitostí domácích. Ve čtvrtém dějství se v dramatické koncovce přiklonilo štěstí na stranu Roztok.\n\n              Druhý zápas byl mnohem vyrovnanější a ve zkrácené páté sadě byli opět šťastnější domácí.\n\n              Benešov: Jo. Bartůšek, Kočí, Hlavnička, Boháč, Lang, Řehák, Votruba, J. Bartůšek.\n\n              Aktuálně třetí Benešov hraje další utkání v sobotu 10. prosince od 11 hodin ve sportovní hale ZŠ Jiráskova v Benešově proti Dobřichovicím.\n            </p>\n            <p><a href=\"#\">celá zpráva...</a></p>\n          </div>\n        </div>\n        <div class=\"span4\">\n          <div class=\"testimonial\">\n            <div class=\"whopic\">\n              <small>22.11.2016</small>\n              <!--<img src=\"/assets/img/volejbal-benesov-foto-1_denik-630.jpg\" class=\"centered\" alt=\"client 1\">-->\n              <strong>Benešov si smlsnul na Rakovníku</strong>\n            </div>\n            <!--<div class=\"arrow\"></div>-->\n            <p>Benešov – Po vítězství v okresním derby ve Vlašimi si volejbalisté Sokola Benešov připsali v domácím dvojutkání 7. kola krajského přeboru i s Rakovníkem plný bodový zisk, aniž by ztratili set.</p>\n            <p><a href=\"#\">celá zpráva...</a></p>\n          </div>\n        </div>\n      </div>\n      <!--<p class=\"testimonial-text\">\n        Články o našem volejbale můžete také najít na stránkách <a href=\"http://benesovsky.denik.cz/\">Benešovského deníku</a> v rubrice\n        <a href=\"http://benesovsky.denik.cz/ostatni_region/\">sport</a>.\n      </p>-->\n    </div>\n  </div>\n</div>\n<!--<div class=\"section third-section\">\n    <div class=\"container centered\">\n        <div class=\"sub-section\">\n            <div class=\"title clearfix\">\n                <div class=\"pull-left\">\n                    <h3>Our Clients</h3>\n                </div>\n                <ul class=\"client-nav pull-right\">\n                    <li id=\"client-prev\"></li>\n                    <li id=\"client-next\"></li>\n                </ul>\n            </div>\n            <ul class=\"row client-slider\" id=\"clint-slider\">\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo01.png\" alt=\"client logo 1\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo02.png\" alt=\"client logo 2\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo03.png\" alt=\"client logo 3\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo04.png\" alt=\"client logo 4\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo05.png\" alt=\"client logo 5\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo02.png\" alt=\"client logo 6\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo04.png\" alt=\"client logo 7\">\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>-->\n<!-- Price section start -->\n<!--<div id=\"price\" class=\"section secondary-section\">\n    <div class=\"container\">\n        <div class=\"title\">\n            <h1>Price</h1>\n            <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>\n        </div>\n        <div class=\"price-table row-fluid\">\n            <div class=\"span4 price-column\">\n                <h3>Basic</h3>\n                <ul class=\"list\">\n                    <li class=\"price\">$19,99</li>\n                    <li><strong>Free</strong> Setup</li>\n                    <li><strong>24/7</strong> Support</li>\n                    <li><strong>5 GB</strong> File Storage</li>\n                </ul>\n                <a href=\"#\" class=\"button button-ps\">BUY</a>\n            </div>\n            <div class=\"span4 price-column\">\n                <h3>Pro</h3>\n                <ul class=\"list\">\n                    <li class=\"price\">$39,99</li>\n                    <li><strong>Free</strong> Setup</li>\n                    <li><strong>24/7</strong> Support</li>\n                    <li><strong>25 GB</strong> File Storage</li>\n                </ul>\n                <a href=\"#\" class=\"button button-ps\">BUY</a>\n            </div>\n            <div class=\"span4 price-column\">\n                <h3>Premium</h3>\n                <ul class=\"list\">\n                    <li class=\"price\">$79,99</li>\n                    <li><strong>Free</strong> Setup</li>\n                    <li><strong>24/7</strong> Support</li>\n                    <li><strong>50 GB</strong> File Storage</li>\n                </ul>\n                <a href=\"#\" class=\"button button-ps\">BUY</a>\n            </div>\n        </div>\n        <div class=\"centered\">\n            <p class=\"price-text\">We Offer Custom Plans. Contact Us For More Info.</p>\n            <a href=\"#contact\" class=\"button\">Contact Us</a>\n        </div>\n    </div>\n</div>-->\n<!-- Price section end -->\n<!--<div id=\"contact\" class=\"contact\">\n  <div class=\"section secondary-section\">\n    <div class=\"container\">\n      <div class=\"title\">\n        <h1>Kontakt</h1>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"span9 center contact-info\">\n        <p class=\"title2\">TJ Sokol Benešov u Prahy</p>\n        <p>Sportovní hala ZŠ Jiráskova</p>\n        <p>Jiráskova 888, Benešov 25601</p>\n        <p class=\"info-mail\"><a href=\"mailto:bene.volej@seznam.cz\">bene.volej@seznam.cz</a></p>\n        <p>+420 775 358 293</p>\n        <div class=\"title\">\n          <h3>Najdete nás také na</h3>\n        </div>\n      </div>\n      <div class=\"row-fluid centered\">\n        <ul class=\"social\">\n          <li>\n            <a target=\"_blank\" href=\"https://www.facebook.com/VK-Sokol-Bene%C5%A1ov-165352263481472/?fref=ts\">\n              <span class=\"icon-facebook-circled\"></span>\n            </a>\n          </li>\n          &lt;!&ndash;<li>\n              <a href=\"\">\n                  <span class=\"icon-twitter-circled\"></span>\n              </a>\n          </li>\n          <li>\n              <a href=\"\">\n                  <span class=\"icon-linkedin-circled\"></span>\n              </a>\n          </li>\n          <li>\n              <a href=\"\">\n                  <span class=\"icon-pinterest-circled\"></span>\n              </a>\n          </li>\n          <li>\n              <a href=\"\">\n                  <span class=\"icon-dribbble-circled\"></span>\n              </a>\n          </li>\n          <li>\n              <a href=\"\">\n                  <span class=\"icon-gplus-circled\"></span>\n              </a>\n          </li>&ndash;&gt;\n        </ul>\n      </div>\n      &lt;!&ndash;<div class=\"title\">\n        <h3>Máte jakýkoliv dotaz, můžete nás kontaktovat pomocí tohoto formuláře.</h3>\n      </div>\n      <div class=\"map-wrapper\">\n      <div class=\"container\">\n        <div class=\"row-fluid\">\n          <div class=\"span5 contact-form centered\">\n            <h3>Napište nám</h3>\n            <div id=\"successSend\" class=\"alert alert-success invisible\">\n              <strong>Děkujeme!</strong>Vaše zpráva byla odeslána.</div>\n            <div id=\"errorSend\" class=\"alert alert-error invisible\">Došlo k chybě.</div>\n            <form id=\"contact-form\" action=\"php/mail.php\">\n              <div class=\"control-group\">\n                <div class=\"controls\">\n                  <input class=\"span12\" type=\"text\" id=\"name\" name=\"name\" placeholder=\"* Vaše jméno...\" />\n                  <div class=\"error left-align\" id=\"err-name\">Prosím, Zadejte Vaše jméno.</div>\n                </div>\n              </div>\n              <div class=\"control-group\">\n                <div class=\"controls\">\n                  <input class=\"span12\" type=\"email\" name=\"email\" id=\"email\" placeholder=\"* Váš email...\" />\n                  <div class=\"error left-align\" id=\"err-email\">Prosím, zadejte Váš email.</div>\n                </div>\n              </div>\n              <div class=\"control-group\">\n                <div class=\"controls\">\n                  <textarea class=\"span12\" name=\"comment\" id=\"comment\" placeholder=\"* Dotaz...\"></textarea>\n                  <div class=\"error left-align\" id=\"err-comment\">Prosím, zadejte Váš dotaz.</div>\n                </div>\n              </div>\n              <div class=\"control-group\">\n                <div class=\"controls\">\n                  <button id=\"send-mail\" class=\"message-btn\">Odeslat zprávu</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>&ndash;&gt;\n    </div>\n  </div>\n</div>-->\n\n<div class=\"section secondary-section\">\n  <div class=\"triangle\"></div>\n  <div class=\"container centered\">\n    <p class=\"large-text\">Věřím ve štěstí. Čím víc se snažím, tím víc ho mám.</p>\n    <small>Stephen Leacock</small>\n    <a href=\"#\" class=\"button\">Na úvod</a>\n  </div>\n</div>\n\n<div id=\"contact\">\n  <div class=\"section primary-section\">\n    <div class=\"triangle\"></div>\n    <div class=\"container\">\n      <div class=\"title\">\n        <h1>Kontakt</h1>\n      </div>\n      <div class=\"span9 center contact\">\n        <p class=\"title2\">TJ Sokol Benešov u Prahy</p>\n        <p>Sportovní hala ZŠ Jiráskova</p>\n        <p>Jiráskova 888, Benešov 25601</p>\n        <p class=\"info-mail\"><a href=\"mailto:bene.volej@seznam.cz\">bene.volej@seznam.cz</a></p>\n        <p>+420 775 358 293</p>\n        <a target=\"_blank\" href=\"https://www.facebook.com/VK-Sokol-Bene%C5%A1ov-165352263481472/?fref=ts\">\n          <span class=\"icon-facebook-circled\"></span>\n        </a>\n        <!--<div class=\"title\">\n          <h3>Najdete nás také na</h3>\n        </div>-->\n      </div>\n      <!--<div class=\"row-fluid centered\">\n        <ul class=\"social\">\n          <li>\n            <a target=\"_blank\" href=\"https://www.facebook.com/VK-Sokol-Bene%C5%A1ov-165352263481472/?fref=ts\">\n              <span class=\"icon-facebook-circled\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>-->\n    </div>\n  </div>\n</div>\n\n<div id=\"partners\" class=\"contact\">\n  <div class=\"section secondary-section\">\n    <div class=\"container\">\n      <div class=\"title\">\n        <h1>Partneři</h1>\n      </div>\n      <div class=\"centered partners-container\">\n        <a href=\"http://www.fitboss.cz\"><img src=\"/assets/img/partners/fitboss2.png\" alt=\"Fit Boss cz s.r.o.\" title=\"Fit Boss cz s.r.o.\"></a>\n        &nbsp;\n        |\n        &nbsp;\n        <a href=\"http://www.equabank.cz\"><img src=\"/assets/img/partners/equabank3.png\" alt=\"Equa bank\" title=\"Equa bank\"></a>\n        &nbsp;\n        |\n        &nbsp;\n        <a href=\"http://www.benesov-city.cz/\"><img src=\"/assets/img/partners/logo_benesov_city.png\" alt=\"Město Benešov\" title=\"Město Benešov\"></a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div>\n  <div class=\"section secondary-section\">\n    <div class=\"container centered\">\n      <!--<div class=\"title\">\n        <h1>Partneři</h1>\n      </div>-->\n      <a class=\"button\" href=\"#\">Na úvod</a>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = "<label for=\"login\">Login</label>\n<input type=\"text\" id=\"login\">\n<label for=\"login\">Password</label>\n<input type=\"password\">\n"

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var AboutUs = (function () {
    function AboutUs() {
    }
    AboutUs = __decorate([
        core_1.Component({
            selector: 'about-us',
            template: __webpack_require__(14)
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUs);
    return AboutUs;
}());
exports.AboutUs = AboutUs;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(38);
var home_component_1 = __webpack_require__(1);
var login_component_1 = __webpack_require__(2);
var title = 'Volejbal Sokol Benešov';
var appRoutes = [
    //{ path: '', redirectTo: 'homepage', pathMatch: 'full' },
    { path: '', component: home_component_1.Home, data: { title: title } },
    /*  {path: 'home', component: Home, data: {title: title}},
      {path: 'about-us', component: AboutUs, data: {title: title}},
      {path: 'contact', component: Contact, data: {title: title}},
      {path: 'matches', component: Matches, data: {title: title}},
      {path: 'match-schedule', component: MatchSchedule, data: {title: title}},
      {path: 'statistics', component: Statistics, data: {title: title}},
      {path: 'players', component: Players, data: {title: title}},*/
    { path: 'login', component: login_component_1.Login, data: { title: title } },
    { path: '**', component: home_component_1.Home, data: { title: title } },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: __webpack_require__(15)
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Contact = (function () {
    function Contact() {
    }
    Contact = __decorate([
        core_1.Component({
            selector: 'contact',
            template: __webpack_require__(16)
        }), 
        __metadata('design:paramtypes', [])
    ], Contact);
    return Contact;
}());
exports.Contact = Contact;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var angular2_universal_1 = __webpack_require__(4);
var CSlider = (function () {
    function CSlider(_elRef) {
        this._elRef = _elRef;
    }
    CSlider.prototype.ngOnInit = function () {
        if (angular2_universal_1.isBrowser) {
        }
    };
    CSlider = __decorate([
        core_1.Directive({
            selector: '[cslider]',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CSlider);
    return CSlider;
}());
exports.CSlider = CSlider;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Footer = (function () {
    function Footer() {
    }
    Footer = __decorate([
        core_1.Component({
            selector: 'footer',
            template: __webpack_require__(17)
        }), 
        __metadata('design:paramtypes', [])
    ], Footer);
    return Footer;
}());
exports.Footer = Footer;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Header = (function () {
    function Header() {
    }
    Header = __decorate([
        core_1.Component({
            selector: 'header',
            template: __webpack_require__(18)
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());
exports.Header = Header;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var MatchSchedule = (function () {
    function MatchSchedule() {
    }
    MatchSchedule = __decorate([
        core_1.Component({
            selector: 'match-schedule',
            template: __webpack_require__(21)
        }), 
        __metadata('design:paramtypes', [])
    ], MatchSchedule);
    return MatchSchedule;
}());
exports.MatchSchedule = MatchSchedule;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Matches = (function () {
    function Matches() {
    }
    Matches = __decorate([
        core_1.Component({
            selector: 'matches',
            template: __webpack_require__(22)
        }), 
        __metadata('design:paramtypes', [])
    ], Matches);
    return Matches;
}());
exports.Matches = Matches;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Players = (function () {
    function Players() {
    }
    Players = __decorate([
        core_1.Component({
            selector: 'players',
            template: __webpack_require__(23)
        }), 
        __metadata('design:paramtypes', [])
    ], Players);
    return Players;
}());
exports.Players = Players;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var Statistics = (function () {
    function Statistics() {
    }
    Statistics = __decorate([
        core_1.Component({
            selector: 'statistics',
            template: __webpack_require__(24)
        }), 
        __metadata('design:paramtypes', [])
    ], Statistics);
    return Statistics;
}());
exports.Statistics = Statistics;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Constants = __webpack_require__(3);
var Tools;
(function (Tools) {
    function getSingleResult(result) {
        var obj = {};
        if (result && result.result) {
            if (result.result.rows) {
                if (result.result.rows[0]) {
                    obj = result.result.rows[0];
                }
                else {
                    obj = {};
                }
            }
        }
        return obj;
    }
    Tools.getSingleResult = getSingleResult;
    function getMultiResult(result) {
        var obj = [], i, l;
        if (result && result.result) {
            if (result.result.rows) {
                for (i = 0, l = result.result.rows.length; i < l; i += 1) {
                    obj.push(result.result.rows[i]);
                }
            }
        }
        return obj;
    }
    Tools.getMultiResult = getMultiResult;
    function validateEmail(value) {
        var re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, result = value ? re.test(value) : true;
        return result;
    }
    Tools.validateEmail = validateEmail;
    function validatePhone(value) {
        var re = /^(\+420)? ?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$/, result = value ? re.test(value) : true;
        return result;
    }
    Tools.validatePhone = validatePhone;
    function validateZip(value) {
        var re = /^[0-9]{3} ?[0-9]{2}$/, result = value ? re.test(value) : true;
        return result;
    }
    Tools.validateZip = validateZip;
    function getCookieId(req, name) {
        return req.cookies.get(name);
    }
    Tools.getCookieId = getCookieId;
    function getSessionId(req) {
        return req.cookies.get(Constants.SESSIONID_CODE);
    }
    Tools.getSessionId = getSessionId;
    function createCookie(res, name, val, options) {
        if (options === void 0) { options = {}; }
        res.cookies.set(name, val, options);
    }
    Tools.createCookie = createCookie;
    function createAuthCookie(res, val) {
        //let expires = new Date();
        res.cookies.set(Constants.AUTH_TOKEN_CODE, val, {});
    }
    Tools.createAuthCookie = createAuthCookie;
    function deleteCookie(res, name) {
        //res.cookies.set(name, {expire: new Date()});
        res.clearCookie(name);
    }
    Tools.deleteCookie = deleteCookie;
})(Tools = exports.Tools || (exports.Tools = {}));


/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 40 */
/***/ function(module, exports) {

module.exports = require("promise");

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
var Cookies = __webpack_require__(11);
// the polyfills must be the first thing imported in node.js
__webpack_require__(8);
var path = __webpack_require__(13);
var express = __webpack_require__(12);
var bodyParser = __webpack_require__(9);
var cookieParser = __webpack_require__(10);
// Angular 2
var core_1 = __webpack_require__(0);
// Angular 2 Universal
var angular2_express_engine_1 = __webpack_require__(7);
var main_node_1 = __webpack_require__(6);
var api = __webpack_require__(5);
// enable prod for faster renders
core_1.enableProdMode();
var app = express();
var ROOT = path.join(path.resolve(__dirname, '..'));
// APP_PORT, APP_ENV, APP_SSL
var env = process.env.NODE_ENV || process.env.APP_ENV, port = (parseInt(process.env.APP_PORT, 10) || 9002), ssl = (parseInt(process.env.APP_SSL, 10) || 0);
// Express View
app.engine('.html', angular2_express_engine_1.createEngine({ ngModule: main_node_1.MainModule }));
app.set('views', __dirname);
app.set('view engine', 'html');
//noinspection TypeScriptValidateTypes
app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
// cookies
app.use(Cookies.express());
app.use(api.sessionidCookie);
// Serve static files
app.use('/assets', express.static(path.join(__dirname, '../assets'), { maxAge: 30 }));
app.use(express.static(path.join(ROOT, 'dist/client'), { index: false }));
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: main_node_1.MainModule,
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
// Routes with html5pushstate
// ensure routes match client-side-app
app.get('*', ngApp);
//app.get('/', ngApp);
//app.get('/homepage', ngApp);
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
// Server
var server = app.listen(port, function () {
    console.log("Listening on: http://localhost:" + server.address().port);
});

/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ }
/******/ ]);
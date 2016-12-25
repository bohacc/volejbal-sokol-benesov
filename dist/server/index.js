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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("jquery");

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
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            template: __webpack_require__(21)
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;


/***/ },
/* 3 */
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
            template: __webpack_require__(22)
        }), 
        __metadata('design:paramtypes', [])
    ], Login);
    return Login;
}());
exports.Login = Login;


/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

module.exports = require("!!webpack amd options");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var fs = __webpack_require__(44);
var Promise = __webpack_require__(45);
var Constants = __webpack_require__(4);
var tools_1 = __webpack_require__(38);
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
/* 8 */
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
var forms_1 = __webpack_require__(42);
var angular2_universal_1 = __webpack_require__(6);
var app_1 = __webpack_require__(29);
var app_routing_1 = __webpack_require__(28);
var home_component_1 = __webpack_require__(2);
var header_component_1 = __webpack_require__(33);
var footer_component_1 = __webpack_require__(32);
var contact_component_1 = __webpack_require__(30);
var matches_component_1 = __webpack_require__(35);
var match_schedule_component_1 = __webpack_require__(34);
var statistics_component_1 = __webpack_require__(37);
var about_us_component_1 = __webpack_require__(27);
var players_component_1 = __webpack_require__(36);
var login_component_1 = __webpack_require__(3);
var cslider_component_1 = __webpack_require__(31);
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
/* 9 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("cookie-parser");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("cookies");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = "<header></header>\n<router-outlet></router-outlet>\n<footer></footer>\n"

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = "<!-- Newsletter section start -->\n<!--<div class=\"section third-section\">\n  <div class=\"container newsletter\">\n    <div class=\"sub-section\">\n      <div class=\"title clearfix\">\n        <div class=\"pull-left\">\n          <h3>Newsletter</h3>\n        </div>\n      </div>\n    </div>\n    <div id=\"success-subscribe\" class=\"alert alert-success invisible\">\n      <strong>Děkujeme!</strong>Váš email byl zaregistrován k odběru novinek.</div>\n    <div class=\"row-fluid\">\n      <div class=\"span5\">\n        <p>Zadejte svůj email a budete dostávat aktuality o našem týmu a upozornění na konající se zápasy.</p>\n      </div>\n      <div class=\"span7\">\n        <form class=\"inline-form\">\n          <input type=\"email\" name=\"email\" id=\"nlmail\" class=\"span8\" placeholder=\"Zadejte Váš email\" required />\n          <button id=\"subscribe\" class=\"button button-sp\">Zaregistrovat email</button>\n        </form>\n        <div id=\"err-subscribe\" class=\"error centered\">Zadejte validní emailovou adresu.</div>\n      </div>\n    </div>\n  </div>\n</div>-->\n<!-- Newsletter section end -->\n<!-- Contact section start -->\n<!-- Contact section edn -->\n<!-- Footer section start -->\n<div class=\"footer\">\n  <p>\n    &copy; 2013 Theme by\n    <a href=\"http://www.graphberry.com\">GraphBerry</a>,\n    <a href=\"http://goo.gl/NM84K2\">Documentation</a>,\n    created by Martin Boháč(2016)\n    <a href=\"/login\">login</a>\n  </p>\n  <div class=\"icons-licence\">\n    Icons made by\n    <a href=\"http://www.freepik.com\" title=\"Freepik\">Freepik</a>\n    from\n    <a href=\"http://www.flaticon.com\" title=\"Flaticon\">www.flaticon.com</a>\n    is licensed by\n    <a href=\"http://creativecommons.org/licenses/by/3.0/\" title=\"Creative Commons BY 3.0\" target=\"_blank\">CC 3.0 BY</a>\n  </div>\n</div>\n<!-- Footer section end -->\n<!-- ScrollUp button start -->\n<!--<div class=\"scrollup\">\n  <a href=\"#\">\n    <i class=\"icon-up-open\"></i>\n  </a>\n</div>-->\n<!-- ScrollUp button end -->\n<!-- Include javascript -->\n<!-- Load google maps api and call initializeMap function defined in app.js -->\n<!--<script async=\"\" defer=\"\" type=\"text/javascript\" src=\"https://maps.googleapis.com/maps/api/js?sensor=false&callback=initializeMap\"></script>-->\n"

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <div class=\"navbar-inner\">\n    <div class=\"container\">\n      <a href=\"#\" class=\"brand logo\">\n        <!-- This is website logo -->\n        <img src=\"/assets/img/znak.png\" width=\"37\" height=\"43\" alt=\"TJ Sokol Benešov\" />\n      </a>\n      <h2 class=\"logo\">TJ Sokol Benešov u Prahy</h2>\n      <!-- Navigation button, visible on small resolution -->\n      <button type=\"button\" class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n        <i class=\"icon-menu\"></i>\n      </button>\n      <!-- Main navigation -->\n      <div class=\"nav-collapse collapse pull-right\">\n        <ul class=\"nav\" id=\"top-navigation\">\n          <!--<li><a href=\"#\">Úvod</a></li>-->\n          <li><a href=\"#about\">O nás</a></li>\n          <li><a href=\"#players\">Hráči</a></li>\n          <li><a href=\"#news\">Aktuality</a></li>\n          <li><a target=\"_blank\" href=\"http://www.cvf.cz/rozpisy-vysledky/?soutez=ST-M1&skupina=ST-M-1\">Zápasy</a></li>\n          <li><a target=\"_blank\" href=\"http://www.cvf.cz/souteze/soutez/?soutez=ST-M1\">Tabulka</a></li>\n          <li><a href=\"#contact\">Kontakt</a></li>\n          <li><a href=\"#partners\">Partneři</a></li>\n        </ul>\n      </div>\n      <!-- End main navigation -->\n    </div>\n  </div>\n</div>\n<!-- Start home section -->\n<div id=\"home\">\n  <!-- Start cSlider -->\n  <div id=\"da-slider\" class=\"da-slider\" cslider>\n    <div class=\"triangle\"></div>\n    <!-- mask elemet use for masking background image -->\n    <div class=\"mask\"></div>\n    <!-- All slides centred in container element -->\n    <div class=\"container\">\n      <!-- Start first slide -->\n      <div class=\"da-slide\">\n        <h2 class=\"fittext2\">Aktuálně hrajeme</h2>\n        <h4>KP I. TŘÍDY MUŽŮ</h4>\n        <p>V sezóně 2016/2017 hrajeme soutěž ST-M1. Naším cílem v druhé polovině sezóny je podat vyrovnaný výkon a vyhrát soutěž.</p>\n        <a href=\"http://www.cvf.cz/souteze/soutez/?soutez=ST-M1\" class=\"da-link button\">Podrobnosti</a>\n        <div class=\"da-img\">\n          <img src=\"/assets/img/header11.png\" alt=\"Soutěž\" width=\"320\">\n        </div>\n      </div>\n      <!-- End first slide -->\n      <!-- Start second slide -->\n      <div class=\"da-slide\">\n        <h2>Naši hráči</h2>\n        <h4>Přidej se k nám</h4>\n        <p>Jsme ambiciózní tým lidí, které volejbal skutečně baví a chtějí podávat ty nejlepší výkony, ale také dobrá parta, která ráda zajde na pivo. Pokud máš chuť se k nám přidat tak neváhej a přijď se podívat na trénink</p>\n        <a href=\"#players\" class=\"da-link button\">Podrobnosti</a>\n        <div class=\"da-img\">\n          <img src=\"/assets/img/header22.png\" width=\"520\" alt=\"hráči\">\n        </div>\n      </div>\n      <!-- End second slide -->\n      <!-- Start third slide -->\n      <div class=\"da-slide\">\n        <h2>Aktualita</h2>\n        <h4>10.12.2016</h4>\n        <p>Volejbalisté Benešova brali s Dobřichovicemi tři body. V prvním utkání podali domácí nevýrazný výkon, a i přes těsný výsledek ve třetím setu, nakonec hladce prohráli. Ve druhém zápase se benešovští volejbalisté zlepšili a povolili hostům zisk pouze jednoho setu.</p>\n        <a href=\"#news\" class=\"da-link button\">Podrobnosti</a>\n        <div class=\"da-img\">\n          <img src=\"/assets/img/header3.png\" width=\"520\" alt=\"Aktualita\">\n        </div>\n      </div>\n      <!-- Start third slide -->\n      <!-- Start cSlide navigation arrows -->\n      <div class=\"da-arrows\">\n        <span class=\"da-arrows-prev\"></span>\n        <span class=\"da-arrows-next\"></span>\n      </div>\n      <!-- End cSlide navigation arrows -->\n    </div>\n  </div>\n</div>\n<!-- End home section -->\n"

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = "<!-- Service section start -->\n<div class=\"section primary-section\" id=\"service\">\n  <div class=\"container\">\n    <!-- Start title section -->\n    <div class=\"title\">\n      <h1>Vítejte na stránkách volejbalového klubu TJ Sokol Benešov</h1>\n      <!-- Section's title goes here -->\n      <p>Najdete zde kompletní informace o našem týmu, zápasech, tréninku a další.</p>\n      <!--Simple description for section goes here. -->\n    </div>\n    <div class=\"row-fluid\">\n      <div class=\"span4\">\n        <div class=\"centered service\">\n          <div class=\"circle-border zoom-in\">\n            <img class=\"img-circle\" src=\"/assets/img/ico/cup.png\" alt=\"Soutěž\">\n          </div>\n          <h3>Soutěž</h3>\n          <p>V sezóně 2016/2017 hrajeme soutěž ST-M1.</p>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"centered service\">\n          <div class=\"circle-border zoom-in\">\n            <img class=\"img-circle\" src=\"/assets/img/ico/spider.png\" alt=\"Kde hrajeme\" />\n          </div>\n          <h3>Kde hrajeme</h3>\n          <p>Sportovní hala ZŠ Jiráskova, Jiráskova 888, Benešov</p>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"centered service\">\n          <div class=\"circle-border zoom-in\">\n            <img class=\"img-circle\" src=\"/assets/img/ico/ball.png\" alt=\"Tréninky\">\n          </div>\n          <h3>Tréninky</h3>\n          <p>Každé pondělí od 19:00-21:00 a středu od 20:00-22:00</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Service section end -->\n<!-- Portfolio section start -->\n<!--<div class=\"section secondary-section \" id=\"portfolio\">\n    <div class=\"triangle\"></div>\n    <div class=\"container\">\n        <div class=\" title\">\n            <h1>Have You Seen our Works?</h1>\n            <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>\n        </div>\n        <ul class=\"nav nav-pills\">\n            <li class=\"filter\" data-filter=\"all\">\n                <a href=\"#noAction\">All</a>\n            </li>\n            <li class=\"filter\" data-filter=\"web\">\n                <a href=\"#noAction\">Web</a>\n            </li>\n            <li class=\"filter\" data-filter=\"photo\">\n                <a href=\"#noAction\">Photo</a>\n            </li>\n            <li class=\"filter\" data-filter=\"identity\">\n                <a href=\"#noAction\">Identity</a>\n            </li>\n        </ul>\n        &lt;!&ndash; Start details for portfolio project 1 &ndash;&gt;\n        <div id=\"single-project\">\n            <div id=\"slidingDiv\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio01.png\" alt=\"project 1\" />\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 1 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 2 &ndash;&gt;\n            <div id=\"slidingDiv1\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio02.png\" alt=\"project 2\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 2 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 3 &ndash;&gt;\n            <div id=\"slidingDiv2\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio03.png\" alt=\"project 3\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>How far you go in life depends on your being tender with the young, compassionate with the aged, sympathetic with the striving and tolerant of the weak and strong. Because someday in your life you will have been all of these.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 3 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 4 &ndash;&gt;\n            <div id=\"slidingDiv3\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio04.png\" alt=\"project 4\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Project for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>Life's but a walking shadow, a poor player, that struts and frets his hour upon the stage, and then is heard no more; it is a tale told by an idiot, full of sound and fury, signifying nothing.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 4 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 5 &ndash;&gt;\n            <div id=\"slidingDiv4\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio05.png\" alt=\"project 5\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>We need to give each other the space to grow, to be ourselves, to exercise our diversity. We need to give each other space so that we may both give and receive such beautiful things as ideas, openness, dignity, joy, healing, and inclusion.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 5 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 6 &ndash;&gt;\n            <div id=\"slidingDiv5\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio06.png\" alt=\"project 6\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 6 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 7 &ndash;&gt;\n            <div id=\"slidingDiv6\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio07.png\" alt=\"project 7\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>Always continue the climb. It is possible for you to do whatever you choose, if you first get to know who you are and are willing to work with a power that is greater than ourselves to do it.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 7 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 8 &ndash;&gt;\n            <div id=\"slidingDiv7\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio08.png\" alt=\"project 8\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>What if you gave someone a gift, and they neglected to thank you for it - would you be likely to give them another? Life is the same way. In order to attract more of the blessings that life has to offer, you must truly appreciate what you already have.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 8 &ndash;&gt;\n            &lt;!&ndash; Start details for portfolio project 9 &ndash;&gt;\n            <div id=\"slidingDiv8\" class=\"toggleDiv row-fluid single-project\">\n                <div class=\"span6\">\n                    <img src=\"/assets/img/Portfolio09.png\" alt=\"project 9\">\n                </div>\n                <div class=\"span6\">\n                    <div class=\"project-description\">\n                        <div class=\"project-title clearfix\">\n                            <h3>Webste for Some Client</h3>\n                            <span class=\"show_hide close\">\n                                <i class=\"icon-cancel\"></i>\n                            </span>\n                        </div>\n                        <div class=\"project-info\">\n                            <div>\n                                <span>Client</span>Some Client Name</div>\n                            <div>\n                                <span>Date</span>July 2013</div>\n                            <div>\n                                <span>Skills</span>HTML5, CSS3, JavaScript</div>\n                            <div>\n                                <span>Link</span>http://examplecomp.com</div>\n                        </div>\n                        <p>I learned that we can do anything, but we can't do everything... at least not at the same time. So think of your priorities not in terms of what activities you do, but when you do them. Timing is everything.</p>\n                    </div>\n                </div>\n            </div>\n            &lt;!&ndash; End details for portfolio project 9 &ndash;&gt;\n            <ul id=\"portfolio-grid\" class=\"thumbnails row\">\n                <li class=\"span4 mix web\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio01.png\" alt=\"project 1\">\n                        <a href=\"#single-project\" class=\"more show_hide\" rel=\"#slidingDiv\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix photo\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio02.png\" alt=\"project 2\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv1\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix identity\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio03.png\" alt=\"project 3\">\n                        <a href=\"#single-project\" class=\"more show_hide\" rel=\"#slidingDiv2\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix web\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio04.png\" alt=\"project 4\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv3\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix photo\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio05.png\" alt=\"project 5\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv4\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix identity\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio06.png\" alt=\"project 6\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv5\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix web\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio07.png\" alt=\"project 7\" />\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv6\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix photo\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio08.png\" alt=\"project 8\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv7\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n                <li class=\"span4 mix identity\">\n                    <div class=\"thumbnail\">\n                        <img src=\"/assets/img/Portfolio09.png\" alt=\"project 9\">\n                        <a href=\"#single-project\" class=\"show_hide more\" rel=\"#slidingDiv8\">\n                            <i class=\"icon-plus\"></i>\n                        </a>\n                        <h3>Thumbnail label</h3>\n                        <p>Thumbnail caption...</p>\n                        <div class=\"mask\"></div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>-->\n<!-- Portfolio section end -->\n\n<div class=\"section secondary-section\">\n  <div class=\"triangle\"></div>\n  <div class=\"container centered\">\n    <p class=\"large-text\">Můžeš mít buď výsledky nebo výmluvy. Nemůžeš mít obojí.</p>\n    <small>Arnold Schwarzenegger</small>\n    <a href=\"#\" class=\"button\">Na úvod</a>\n  </div>\n</div>\n\n<!-- About us section start -->\n<div class=\"section primary-section\" id=\"players\">\n  <div class=\"triangle\"></div>\n  <div class=\"container\">\n    <div class=\"title\">\n      <h1>Naši hráči</h1>\n      <p>Představujeme Vám naše aktivní hráče, kteří jsou pro sezónu 2016/2017 na soupisce.</p>\n    </div>\n    <div class=\"row-fluid team\">\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/bartusekjan.png\" alt=\"team 1\">\n          <h3>Bartůšek Jan</h3>\n          <h5>Smečař</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař</h2>\n            <p>Ročník 1993</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/bartusekj.png\" alt=\"team 1\">\n          <h3>Bartůšek Josef</h3>\n          <h5>Smečař, univerzál</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař, univerzál</h2>\n            <p>Ročník 1987</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/bohac.png\" alt=\"team 1\">\n          <h3>Boháč Martin</h3>\n          <h5>Smečař</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař</h2>\n            <p>Ročník 1981</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row-fluid team\">\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/no-person.png\" alt=\"team 1\">\n          <h3>Brandl Tomáš</h3>\n          <h5>Smečař, Blokař</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař, Blokař</h2>\n            <p>Ročník 1982</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/no-person.png\" alt=\"team 1\">\n          <h3>Čepl Marek</h3>\n          <h5>Libero</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Libero</h2>\n            <p>Ročník 1990</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/hlavnicka.png\" alt=\"team 1\">\n          <h3>Hlavnička Jiří</h3>\n          <h5>Nahrávač</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Nahrávač</h2>\n            <p>Ročník 1982</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row-fluid team\">\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/koci.png\" alt=\"team 1\">\n          <h3>Kočí Petr</h3>\n          <h5>Blokař, trenér</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Blokař</h2>\n            <p>Ročník 1981</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/kunc.png\" alt=\"team 1\">\n          <h3>Kunc Martin</h3>\n          <h5>Univerzál</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Univerzál</h2>\n            <p>Ročník 1981</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/kyselka.png\" alt=\"team 1\">\n          <h3>Kyselka Jan</h3>\n          <h5>Blokař</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Blokař</h2>\n            <p>Ročník 1985</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row-fluid team\">\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/lang.png\" alt=\"team 1\">\n          <h3>Lang Michal</h3>\n          <h5>Smečař, libero, univerzál</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař, libero, univerzál</h2>\n            <p>Ročník 1984</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/rehak.png\" alt=\"team 1\">\n          <h3>Řehák Petr</h3>\n          <h5>Smečař, trenér</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Smečař</h2>\n            <p>Ročník 1974</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/votruba.png\" alt=\"team 1\">\n          <h3>Votruba Viktor</h3>\n          <h5>Blokař</h5>\n          <ul class=\"social\">\n            <li>\n              <a href=\"\">\n                <span class=\"icon-facebook-circled\"></span>\n              </a>\n            </li>\n          </ul>\n          <div class=\"mask\">\n            <h2>Blokař</h2>\n            <p>Ročník 1977.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"title\">\n      <h1>Funkcionáři</h1>\n      <!--<p>Představujeme Vám naše aktivní hráče, kteří jsou pro sezónu 2016/2017 na soupisce.</p>-->\n    </div>\n    <div class=\"row-fluid team\">\n      <div class=\"span4\">\n        <div class=\"thumbnail\">\n          <img src=\"/assets/img/players/jiracek.png\" alt=\"team 1\">\n          <h3>Jiráček Viktor</h3>\n          <h5>Čestný vedoucí oddílu</h5>\n          <div class=\"mask\">\n            <h2>Čestný vedoucí oddílu</h2>\n            <p>Ročník 1932</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--<div class=\"about-text centered\">\n      <h3>O nás</h3>\n      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>\n    </div>-->\n    <!--<h3>Skills</h3>\n    <div class=\"row-fluid\">\n        <div class=\"span6\">\n            <ul class=\"skills\">\n                <li>\n                    <span class=\"bar\" data-width=\"80%\"></span>\n                    <h3>Graphic Design</h3>\n                </li>\n                <li>\n                    <span class=\"bar\" data-width=\"95%\"></span>\n                    <h3>Html & Css</h3>\n                </li>\n                <li>\n                    <span class=\"bar\" data-width=\"68%\"></span>\n                    <h3>jQuery</h3>\n                </li>\n                <li>\n                    <span class=\"bar\" data-width=\"70%\"></span>\n                    <h3>Wordpress</h3>\n                </li>\n            </ul>\n        </div>\n        <div class=\"span6\">\n            <div class=\"highlighted-box center\">\n                <h1>We're Hiring</h1>\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ullamcorper suscipit lobortis nisl ut aliquip consequat. I learned that we can do anything, but we can't do everything...</p>\n                <button class=\"button button-sp\">Join Us</button>\n            </div>\n        </div>\n    </div>-->\n  </div>\n</div>\n\n<div class=\"section secondary-section\">\n  <div class=\"triangle\"></div>\n  <div class=\"container centered\">\n    <p class=\"large-text\">Tajemství úspěchu člověka spočívá ve zvyku dělat to, co neúspěšní lidé dělají neradi.</p>\n    <small>Jackson King</small>\n    <a href=\"#\" class=\"button\">Na úvod</a>\n  </div>\n</div>\n\n<div id=\"about\">\n  <div class=\"section primary-section\">\n    <div class=\"triangle\"></div>\n    <div class=\"container\">\n      <div class=\"title\">\n        <h1>O nás</h1>\n        <p>Jsme ambiciózní tým lidí, které volejbal skutečně baví a chtějí podávat ty nejlepší výkony, ale také dobrá parta, která ráda zajde na pivo. Pokud máš chuť se k nám přidat tak neváhej a přijď se podívat na trénink.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- About us section end -->\n<div class=\"section secondary-section\">\n  <div class=\"triangle\"></div>\n  <div class=\"container centered\">\n    <p class=\"large-text\">Překážky jsou ony obávané věci, které spatříte, když odvrátíte pohled od svého cíle.</p>\n    <small>Henry Ford</small>\n    <a href=\"#\" class=\"button\">Na úvod</a>\n  </div>\n</div>\n<!-- Client section start -->\n<!-- Client section start -->\n<div id=\"news\">\n  <div class=\"section primary-section\">\n    <div class=\"triangle\"></div>\n    <div class=\"container\">\n      <div class=\"title\">\n        <h1>Aktuality</h1>\n        <p>Články o našem volejbale můžete také najít na stránkách <a href=\"http://benesovsky.denik.cz/\">Benešovského deníku</a> v rubrice\n          <a href=\"http://benesovsky.denik.cz/ostatni_region/\">sport</a>.\n        </p>\n      </div>\n      <div class=\"row\">\n        <div class=\"span4\">\n          <div class=\"testimonial\">\n            <div class=\"whopic\">\n              <small>10.12.2016</small>\n              <!--<img src=\"/assets/img/volejbal-benesov-foto-1_denik-630.jpg\" class=\"centered\" alt=\"client 1\">-->\n              <strong>Volejbalisté Benešova brali s Dobřichovicemi tři body</strong>\n            </div>\n            <!--<div class=\"arrow\"></div>-->\n            <p>Benešov – Volejbalisté Benešova se ve dvojutkání devátého kola krajského přeboru s Dobřichovicemi dočkali doma tří bodů za výhru ve druhém zápase a v tabulce poskočili na druhé místo.Benešov – Dobřichovice 0:3 (17, 21, 27), 3:1 (23, -24, 17, 17)\n\n            </p>\n            <p *ngIf=\"false\">V prvním utkání podali domácí nevýrazný výkon, a i přes těsný výsledek ve třetím setu, nakonec hladce prohráli. Ve druhém zápase se benešovští volejbalisté zlepšili a povolili hostům zisk pouze jednoho setu.\n\n              Benešov: Jo. Bartůšek, P. Kočí, J. Hlavnička, M. Boháč, M. Lang, J. Kyselka, P. Řehák, V. Votruba, M. Čepl.\n\n              Další domácí utkání sehraje TJ Sokol Benešov až 14. ledna 2017 od 11 hodin ve sportovní hale ZŠ Jiráskova proti SK Volejbal Kolín A.\n            </p>\n            <p><a href=\"#\">celá zpráva...</a></p>\n          </div>\n        </div>\n        <div class=\"span4\">\n          <div class=\"testimonial\">\n            <div class=\"whopic\">\n              <small>3.12.2016</small>\n              <!--<img src=\"/assets/img/volejbal-benesov-foto-1_denik-630.jpg\" class=\"centered\" alt=\"client 1\">-->\n              <strong>Volejbalisté Benešova postrádali více štěstí</strong>\n            </div>\n            <!--<div class=\"arrow\"></div>-->\n            <p>Roztoky u Prahy – Po hladkém vítězství s Rakovníkem získali benešovští volejbalisté v 8. kole pouze bod s Roztoky v krajském přeboru, když i přes dobrý výkon, podlehli soupeři 1:3, 2:3. Roztoky – Benešov 3:1 (-18, 18, 18, 24), 3:2 (-13, 14, 25, -17, 12)\n\n            </p>\n            <p *ngIf=\"false\">Po jednoznačném průběhu prvního setu v prvním zápase pro hosty, byly další dva sety záležitostí domácích. Ve čtvrtém dějství se v dramatické koncovce přiklonilo štěstí na stranu Roztok.\n\n              Druhý zápas byl mnohem vyrovnanější a ve zkrácené páté sadě byli opět šťastnější domácí.\n\n              Benešov: Jo. Bartůšek, Kočí, Hlavnička, Boháč, Lang, Řehák, Votruba, J. Bartůšek.\n\n              Aktuálně třetí Benešov hraje další utkání v sobotu 10. prosince od 11 hodin ve sportovní hale ZŠ Jiráskova v Benešově proti Dobřichovicím.\n            </p>\n            <p><a href=\"#\">celá zpráva...</a></p>\n          </div>\n        </div>\n        <div class=\"span4\">\n          <div class=\"testimonial\">\n            <div class=\"whopic\">\n              <small>22.11.2016</small>\n              <!--<img src=\"/assets/img/volejbal-benesov-foto-1_denik-630.jpg\" class=\"centered\" alt=\"client 1\">-->\n              <strong>Benešov si smlsnul na Rakovníku</strong>\n            </div>\n            <!--<div class=\"arrow\"></div>-->\n            <p>Benešov – Po vítězství v okresním derby ve Vlašimi si volejbalisté Sokola Benešov připsali v domácím dvojutkání 7. kola krajského přeboru i s Rakovníkem plný bodový zisk, aniž by ztratili set.</p>\n            <p><a href=\"#\">celá zpráva...</a></p>\n          </div>\n        </div>\n      </div>\n      <!--<p class=\"testimonial-text\">\n        Články o našem volejbale můžete také najít na stránkách <a href=\"http://benesovsky.denik.cz/\">Benešovského deníku</a> v rubrice\n        <a href=\"http://benesovsky.denik.cz/ostatni_region/\">sport</a>.\n      </p>-->\n    </div>\n  </div>\n</div>\n<!--<div class=\"section third-section\">\n    <div class=\"container centered\">\n        <div class=\"sub-section\">\n            <div class=\"title clearfix\">\n                <div class=\"pull-left\">\n                    <h3>Our Clients</h3>\n                </div>\n                <ul class=\"client-nav pull-right\">\n                    <li id=\"client-prev\"></li>\n                    <li id=\"client-next\"></li>\n                </ul>\n            </div>\n            <ul class=\"row client-slider\" id=\"clint-slider\">\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo01.png\" alt=\"client logo 1\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo02.png\" alt=\"client logo 2\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo03.png\" alt=\"client logo 3\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo04.png\" alt=\"client logo 4\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo05.png\" alt=\"client logo 5\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo02.png\" alt=\"client logo 6\">\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        <img src=\"/assets/img/clients/ClientLogo04.png\" alt=\"client logo 7\">\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>-->\n<!-- Price section start -->\n<!--<div id=\"price\" class=\"section secondary-section\">\n    <div class=\"container\">\n        <div class=\"title\">\n            <h1>Price</h1>\n            <p>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>\n        </div>\n        <div class=\"price-table row-fluid\">\n            <div class=\"span4 price-column\">\n                <h3>Basic</h3>\n                <ul class=\"list\">\n                    <li class=\"price\">$19,99</li>\n                    <li><strong>Free</strong> Setup</li>\n                    <li><strong>24/7</strong> Support</li>\n                    <li><strong>5 GB</strong> File Storage</li>\n                </ul>\n                <a href=\"#\" class=\"button button-ps\">BUY</a>\n            </div>\n            <div class=\"span4 price-column\">\n                <h3>Pro</h3>\n                <ul class=\"list\">\n                    <li class=\"price\">$39,99</li>\n                    <li><strong>Free</strong> Setup</li>\n                    <li><strong>24/7</strong> Support</li>\n                    <li><strong>25 GB</strong> File Storage</li>\n                </ul>\n                <a href=\"#\" class=\"button button-ps\">BUY</a>\n            </div>\n            <div class=\"span4 price-column\">\n                <h3>Premium</h3>\n                <ul class=\"list\">\n                    <li class=\"price\">$79,99</li>\n                    <li><strong>Free</strong> Setup</li>\n                    <li><strong>24/7</strong> Support</li>\n                    <li><strong>50 GB</strong> File Storage</li>\n                </ul>\n                <a href=\"#\" class=\"button button-ps\">BUY</a>\n            </div>\n        </div>\n        <div class=\"centered\">\n            <p class=\"price-text\">We Offer Custom Plans. Contact Us For More Info.</p>\n            <a href=\"#contact\" class=\"button\">Contact Us</a>\n        </div>\n    </div>\n</div>-->\n<!-- Price section end -->\n<!--<div id=\"contact\" class=\"contact\">\n  <div class=\"section secondary-section\">\n    <div class=\"container\">\n      <div class=\"title\">\n        <h1>Kontakt</h1>\n      </div>\n    </div>\n    <div class=\"container\">\n      <div class=\"span9 center contact-info\">\n        <p class=\"title2\">TJ Sokol Benešov u Prahy</p>\n        <p>Sportovní hala ZŠ Jiráskova</p>\n        <p>Jiráskova 888, Benešov 25601</p>\n        <p class=\"info-mail\"><a href=\"mailto:bene.volej@seznam.cz\">bene.volej@seznam.cz</a></p>\n        <p>+420 775 358 293</p>\n        <div class=\"title\">\n          <h3>Najdete nás také na</h3>\n        </div>\n      </div>\n      <div class=\"row-fluid centered\">\n        <ul class=\"social\">\n          <li>\n            <a target=\"_blank\" href=\"https://www.facebook.com/VK-Sokol-Bene%C5%A1ov-165352263481472/?fref=ts\">\n              <span class=\"icon-facebook-circled\"></span>\n            </a>\n          </li>\n          &lt;!&ndash;<li>\n              <a href=\"\">\n                  <span class=\"icon-twitter-circled\"></span>\n              </a>\n          </li>\n          <li>\n              <a href=\"\">\n                  <span class=\"icon-linkedin-circled\"></span>\n              </a>\n          </li>\n          <li>\n              <a href=\"\">\n                  <span class=\"icon-pinterest-circled\"></span>\n              </a>\n          </li>\n          <li>\n              <a href=\"\">\n                  <span class=\"icon-dribbble-circled\"></span>\n              </a>\n          </li>\n          <li>\n              <a href=\"\">\n                  <span class=\"icon-gplus-circled\"></span>\n              </a>\n          </li>&ndash;&gt;\n        </ul>\n      </div>\n      &lt;!&ndash;<div class=\"title\">\n        <h3>Máte jakýkoliv dotaz, můžete nás kontaktovat pomocí tohoto formuláře.</h3>\n      </div>\n      <div class=\"map-wrapper\">\n      <div class=\"container\">\n        <div class=\"row-fluid\">\n          <div class=\"span5 contact-form centered\">\n            <h3>Napište nám</h3>\n            <div id=\"successSend\" class=\"alert alert-success invisible\">\n              <strong>Děkujeme!</strong>Vaše zpráva byla odeslána.</div>\n            <div id=\"errorSend\" class=\"alert alert-error invisible\">Došlo k chybě.</div>\n            <form id=\"contact-form\" action=\"php/mail.php\">\n              <div class=\"control-group\">\n                <div class=\"controls\">\n                  <input class=\"span12\" type=\"text\" id=\"name\" name=\"name\" placeholder=\"* Vaše jméno...\" />\n                  <div class=\"error left-align\" id=\"err-name\">Prosím, Zadejte Vaše jméno.</div>\n                </div>\n              </div>\n              <div class=\"control-group\">\n                <div class=\"controls\">\n                  <input class=\"span12\" type=\"email\" name=\"email\" id=\"email\" placeholder=\"* Váš email...\" />\n                  <div class=\"error left-align\" id=\"err-email\">Prosím, zadejte Váš email.</div>\n                </div>\n              </div>\n              <div class=\"control-group\">\n                <div class=\"controls\">\n                  <textarea class=\"span12\" name=\"comment\" id=\"comment\" placeholder=\"* Dotaz...\"></textarea>\n                  <div class=\"error left-align\" id=\"err-comment\">Prosím, zadejte Váš dotaz.</div>\n                </div>\n              </div>\n              <div class=\"control-group\">\n                <div class=\"controls\">\n                  <button id=\"send-mail\" class=\"message-btn\">Odeslat zprávu</button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>&ndash;&gt;\n    </div>\n  </div>\n</div>-->\n\n<div class=\"section secondary-section\">\n  <div class=\"triangle\"></div>\n  <div class=\"container centered\">\n    <p class=\"large-text\">Věřím ve štěstí. Čím víc se snažím, tím víc ho mám.</p>\n    <small>Stephen Leacock</small>\n    <a href=\"#\" class=\"button\">Na úvod</a>\n  </div>\n</div>\n\n<div id=\"contact\">\n  <div class=\"section primary-section\">\n    <div class=\"triangle\"></div>\n    <div class=\"container\">\n      <div class=\"title\">\n        <h1>Kontakt</h1>\n      </div>\n      <div class=\"span9 center contact\">\n        <p class=\"title2\">TJ Sokol Benešov u Prahy</p>\n        <p>Sportovní hala ZŠ Jiráskova</p>\n        <p>Jiráskova 888, Benešov 25601</p>\n        <p class=\"info-mail\"><a href=\"mailto:bene.volej@seznam.cz\">bene.volej@seznam.cz</a></p>\n        <p>+420 775 358 293</p>\n        <a target=\"_blank\" href=\"https://www.facebook.com/VK-Sokol-Bene%C5%A1ov-165352263481472/?fref=ts\">\n          <span class=\"icon-facebook-circled\"></span>\n        </a>\n        <!--<div class=\"title\">\n          <h3>Najdete nás také na</h3>\n        </div>-->\n      </div>\n      <!--<div class=\"row-fluid centered\">\n        <ul class=\"social\">\n          <li>\n            <a target=\"_blank\" href=\"https://www.facebook.com/VK-Sokol-Bene%C5%A1ov-165352263481472/?fref=ts\">\n              <span class=\"icon-facebook-circled\"></span>\n            </a>\n          </li>\n        </ul>\n      </div>-->\n    </div>\n  </div>\n</div>\n\n<div id=\"partners\" class=\"contact\">\n  <div class=\"section secondary-section\">\n    <div class=\"container\">\n      <div class=\"title\">\n        <h1>Partneři</h1>\n      </div>\n      <div class=\"centered partners-container\">\n        <a href=\"http://www.fitboss.cz\"><img src=\"/assets/img/partners/fitboss2.png\" alt=\"Fit Boss cz s.r.o.\" title=\"Fit Boss cz s.r.o.\"></a>\n        &nbsp;\n        |\n        &nbsp;\n        <a href=\"http://www.equabank.cz\"><img src=\"/assets/img/partners/equabank3.png\" alt=\"Equa bank\" title=\"Equa bank\"></a>\n        &nbsp;\n        |\n        &nbsp;\n        <a href=\"http://www.benesov-city.cz/\"><img src=\"/assets/img/partners/logo_benesov_city.png\" alt=\"Město Benešov\" title=\"Město Benešov\"></a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div>\n  <div class=\"section secondary-section\">\n    <div class=\"container centered\">\n      <!--<div class=\"title\">\n        <h1>Partneři</h1>\n      </div>-->\n      <a class=\"button\" href=\"#\">Na úvod</a>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = "<label for=\"login\">Login</label>\n<input type=\"text\" id=\"login\">\n<label for=\"login\">Password</label>\n<input type=\"password\">\n"

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
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = ""

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
var AboutUs = (function () {
    function AboutUs() {
    }
    AboutUs = __decorate([
        core_1.Component({
            selector: 'about-us',
            template: __webpack_require__(16)
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUs);
    return AboutUs;
}());
exports.AboutUs = AboutUs;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var router_1 = __webpack_require__(43);
var home_component_1 = __webpack_require__(2);
var login_component_1 = __webpack_require__(3);
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
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'app',
            template: __webpack_require__(17)
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;


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
var Contact = (function () {
    function Contact() {
    }
    Contact = __decorate([
        core_1.Component({
            selector: 'contact',
            template: __webpack_require__(18)
        }), 
        __metadata('design:paramtypes', [])
    ], Contact);
    return Contact;
}());
exports.Contact = Contact;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {"use strict";
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
var angular2_universal_1 = __webpack_require__(6);
var CSlider = (function () {
    function CSlider(_elRef) {
        this._elRef = _elRef;
    }
    CSlider.prototype.ngOnInit = function () {
        if (angular2_universal_1.isBrowser) {
            $(__webpack_require__(40));
            $(__webpack_require__(41));
            $(__webpack_require__(39));
            $(this._elRef.nativeElement).cslider();
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

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
var Footer = (function () {
    function Footer() {
    }
    Footer = __decorate([
        core_1.Component({
            selector: 'footer',
            template: __webpack_require__(19)
        }), 
        __metadata('design:paramtypes', [])
    ], Footer);
    return Footer;
}());
exports.Footer = Footer;


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
var Header = (function () {
    function Header() {
    }
    Header = __decorate([
        core_1.Component({
            selector: 'header',
            template: __webpack_require__(20)
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());
exports.Header = Header;


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
var MatchSchedule = (function () {
    function MatchSchedule() {
    }
    MatchSchedule = __decorate([
        core_1.Component({
            selector: 'match-schedule',
            template: __webpack_require__(23)
        }), 
        __metadata('design:paramtypes', [])
    ], MatchSchedule);
    return MatchSchedule;
}());
exports.MatchSchedule = MatchSchedule;


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
var Matches = (function () {
    function Matches() {
    }
    Matches = __decorate([
        core_1.Component({
            selector: 'matches',
            template: __webpack_require__(24)
        }), 
        __metadata('design:paramtypes', [])
    ], Matches);
    return Matches;
}());
exports.Matches = Matches;


/***/ },
/* 36 */
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
            template: __webpack_require__(25)
        }), 
        __metadata('design:paramtypes', [])
    ], Players);
    return Players;
}());
exports.Players = Players;


/***/ },
/* 37 */
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
            template: __webpack_require__(26)
        }), 
        __metadata('design:paramtypes', [])
    ], Statistics);
    return Statistics;
}());
exports.Statistics = Statistics;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Constants = __webpack_require__(4);
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($, undefined) {

    /*
     * Slider object.
     */
    $.Slider = function (options, element) {
        this.$el = $(element);
        this._init(options);
        
    };

    $.Slider.defaults = {
        width:1170, //Max slider width
        height:500, //max slider height
        current: 0, // index of current slide
        bgincrement: 100, // increment the bg position (parallax effect) when sliding
        autoplay: true, // slideshow on / off
        interval: 6000 // time between transitions
    };

    $.Slider.prototype = {
            _init: function (options) {
             var  self = this;
            this.options = $.extend(true, {}, $.Slider.defaults, options);
            this.ratio = this.$el.width() / this.$el.height();
            this.$slides = this.$el.children().children('.da-slide');
            this.slidesCount = this.$slides.length;

            this.current = this.options.current;

            if (this.current < 0 || this.current >= this.slidesCount) {

                this.current = 0;

            }

            this.$slides.eq(this.current).addClass('da-slide-current');

            var $navigation = $('<nav class="da-dots"/>');
            for (var i = 0; i < this.slidesCount; ++i) {

                $navigation.append('<span/>');

            }
            $navigation.appendTo(this.$el);

            this.$pages = this.$el.find('nav.da-dots > span');
            this.$navNext = this.$el.find('span.da-arrows-next');
            this.$navPrev = this.$el.find('span.da-arrows-prev');

            this.isAnimating = false;

            this.bgpositer = 0;
            

            this.cssAnimations = Modernizr.cssanimations;
            this.cssTransitions = Modernizr.csstransitions;

            if (!this.cssAnimations || !this.cssAnimations) {

                this.$el.addClass('da-slider-fb');

            }

            this._updatePage();

            // load the events
            this._loadEvents();

            // slideshow
            if (this.options.autoplay) {

                this._startSlideshow();

            }
            $(window).bind('resize', function() {
               setTimeout(function() {
                    self._makeResponsive();
                }, 150);
			});
           this._makeResponsive();

        },
        _navigate: function (page, dir) {

            var $current = this.$slides.eq(this.current),
                $next, _self = this;

            if (this.current === page || this.isAnimating) return false;

            this.isAnimating = true;

            // check dir
            var classTo, classFrom, d;

            if (!dir) {

                (page > this.current) ? d = 'next' : d = 'prev';

            } else {

                d = dir;

            }

            if (this.cssAnimations && this.cssAnimations) {

                if (d === 'next') {

                    classTo = 'da-slide-toleft';
                    classFrom = 'da-slide-fromright';
                    ++this.bgpositer;

                } else {

                    classTo = 'da-slide-toright';
                    classFrom = 'da-slide-fromleft';
                    --this.bgpositer;

                }

                this.$el.css('background-position', this.bgpositer * this.options.bgincrement + '% center');
            }

            this.current = page;

            $next = this.$slides.eq(this.current);

            if (this.cssAnimations && this.cssAnimations) {

                var rmClasses = 'da-slide-toleft da-slide-toright da-slide-fromleft da-slide-fromright';
                $current.removeClass(rmClasses);
                $next.removeClass(rmClasses);

                $current.addClass(classTo);
                $next.addClass(classFrom);

                $current.removeClass('da-slide-current');
                $next.addClass('da-slide-current');

            }

            // fallback
            if (!this.cssAnimations || !this.cssAnimations) {
 $next.addClass('da-slide-current');
                $next.css('left', (d === 'next') ? '100%' : '-100%').stop().animate({
                    left: '0%'
                }, 1000, function () {
                    _self.isAnimating = false;

                });

                $current.stop().animate({
                    left: (d === 'next') ? '-100%' : '100%'
                }, 1000, function () {
                    $current.removeClass('da-slide-current');                    
                });

            }

            this._updatePage();

        },
        _updatePage: function () {

            this.$pages.removeClass('da-dots-current');
            this.$pages.eq(this.current).addClass('da-dots-current');

        },
        _startSlideshow: function () {

            var _self = this;

            this.slideshow = setTimeout(function () {

                var page = (_self.current < _self.slidesCount - 1) ? page = _self.current + 1 : page = 0;
                _self._navigate(page, 'next');

                if (_self.options.autoplay) {

                    _self._startSlideshow();

                }

            }, this.options.interval);

        },
        page: function (idx) {
            if (idx >= this.slidesCount || idx < 0) {
                return false;
            }

            if (this.options.autoplay) {
                clearTimeout(this.slideshow);
                this.options.autoplay = false;
            }

            this._navigate(idx);

        },
        _makeResponsive: function () {

            var _self = this;
                
            var w = this.$el.width();
            var h = this.$el.height();
            var nH = h;
            if(w < _self.options.width){
            var xy = this.options.width / this.options.height;
            var nH = w / xy;
                this.$el.height(Math.ceil(nH));
                
            }else{
                this.$el.height(Math.ceil(this.options.height));
            }
        },
        _loadEvents: function () {

            var _self = this;

            this.$pages.on('click.cslider', function (event) {

                _self.page($(this).index());
                return false;

            });

            this.$navNext.on('click.cslider', function (event) {

                if (_self.options.autoplay) {

                    clearTimeout(_self.slideshow);
                    _self.options.autoplay = false;

                }

                var page = (_self.current < _self.slidesCount - 1) ? page = _self.current + 1 : page = 0;
                _self._navigate(page, 'next');
                return false;

            });

            this.$navPrev.on('click.cslider', function (event) {

                if (_self.options.autoplay) {

                    clearTimeout(_self.slideshow);
                    _self.options.autoplay = false;

                }

                var page = (_self.current > 0) ? page = _self.current - 1 : page = _self.slidesCount - 1;
                _self._navigate(page, 'prev');
                return false;

            });

            if (this.cssTransitions) {

                if (!this.options.bgincrement) {

                    this.$el.on('webkitAnimationEnd.cslider animationend.cslider OAnimationEnd.cslider', function (event) {

                        if (event.originalEvent.animationName === 'toRightAnim4' || event.originalEvent.animationName === 'toLeftAnim4') {

                            _self.isAnimating = false;

                        }

                    });

                } else {

                    this.$el.on('webkitTransitionEnd.cslider transitionend.cslider OTransitionEnd.cslider', function (event) {

                        if (event.target.id === _self.$el.attr('id'))
                            _self.isAnimating = false;

                    });

                }

            }

        }
    };

    var logError = function (message) {
        if (this.console) {
            console.error(message);
        }
    };

    $.fn.cslider = function (options) {

        if (typeof options === 'string') {

            var args = Array.prototype.slice.call(arguments, 1);

            this.each(function () {

                var instance = $.data(this, 'cslider');

                if (!instance) {
                    logError("cannot call methods on cslider prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;
                }

                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("no such method '" + options + "' for cslider instance");
                    return;
                }

                instance[options].apply(instance, args);

            });

        } else {

            this.each(function () {

                var instance = $.data(this, 'cslider');
                if (!instance) {
                    $.data(this, 'cslider', new $.Slider(options, this));
                }
            });

        }

        return this;

    };

})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_$) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=__webpack_provided_window_dot_$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return __webpack_provided_window_dot_$===p&&(__webpack_provided_window_dot_$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=__webpack_provided_window_dot_$=p,"function"=="function"&&__webpack_require__(5)&&__webpack_require__(5).jQuery&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return p}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))})(window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 41 */
/***/ function(module, exports) {

window.Modernizr = function () {};


/***/ },
/* 42 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 43 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 44 */
/***/ function(module, exports) {

module.exports = require("fs");

/***/ },
/* 45 */
/***/ function(module, exports) {

module.exports = require("promise");

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
var Cookies = __webpack_require__(13);
// the polyfills must be the first thing imported in node.js
__webpack_require__(10);
var path = __webpack_require__(15);
var express = __webpack_require__(14);
var bodyParser = __webpack_require__(11);
var cookieParser = __webpack_require__(12);
// Angular 2
var core_1 = __webpack_require__(0);
// Angular 2 Universal
var angular2_express_engine_1 = __webpack_require__(9);
var main_node_1 = __webpack_require__(8);
var api = __webpack_require__(7);
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
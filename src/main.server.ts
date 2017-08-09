import 'zone.js/dist/zone-node';
import './polyfills';

import 'reflect-metadata';
import 'rxjs/Rx';

import { AppServerModule } from './app/modules/app.server.module';
import { ngExpressEngine } from './app/modules/ng-express-engine/express-engine';

import * as express from 'express';

import * as api from './backend/api';
import { Tools } from './backend/tools';

import * as path from 'path';
let Cookies = require( "cookies" );
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import {enableProdMode} from "@angular/core";
let Constants = require('./backend/constants');
import * as auth from './backend/auth';

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));
/*const api = new App();*/

// APP_PORT, APP_ENV, APP_SSL
const env = process.env.ENV || process.env.NODE_ENV || process.env.APP_ENV;
const port = (parseInt(process.env.APP_PORT, 10) || Constants.PORT);
const ssl = (parseInt(process.env.APP_SSL, 10) || 0);
const baseUrl = `http://localhost:${port}`;

if (process.env.APP_ENV === 'production') {
  enableProdMode(); //is enabled in aot version (main.server.aot.ts) file for dist
}

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule
}));

app.set('view engine', 'html');
app.set('views', 'dist');

app.use(cookieParser());
app.use(bodyParser.json());

// language version - !!! MUST BE BEFORE ANY DB CALL !!!
//app.use(Tools.countryVersion);

// cookies
app.use(Cookies.express());

// var app = express()
app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

app.use('/', express.static('dist', {index: false}));
app.use('/assets', express.static(path.join(__dirname, '../src/assets'), {maxAge: 30}));
app.use('/tools', express.static('tools', {maxAge: 0}));
//app.use(express.static(path.join(ROOT, 'dist'), {index: false}));

const ngApp = (req, res) => {
  res.render('index', {
    req: req,
    res: res,
    hostname: req.hostname,
    requestUrl: req.originalUrl,
    originUrl: 'http://' + req.hostname + ':' + port,
  });
};

app.get('*', ngApp);

app.get('*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var pojo = { status: 404, message: 'No Content' };
  var json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});

//noinspection TypeScriptUnresolvedFunction
var oracle = require('oracledb');
//noinspection TypeScriptUnresolvedFunction
var fs = require('fs');
//noinspection TypeScriptUnresolvedFunction
var Promise = require('promise');
//noinspection TypeScriptUnresolvedFunction
var Constants = require('./constants');
var request = require('request');
var shopifyAPI = require('shopify-node-api');
import * as auth from './auth';

import { Oracledb } from './api_oracle';
import { Tools } from './tools';
import * as api from './api';

export function main () {
  try {
    initApp();
  } catch (e) {
    console.log(e);
  }
};

export function initApp () {
  // get credentials from DB
  auth.getCredentials().then(
    function (result) {
      // {apiKey, apiSecretKey, apiRefreshToken}
      const credentials: any = Tools.getSingleResult(result);

      // set options for auth token
      auth.setOptions(credentials);

      auth.setShopifyAPI();

      // send request for auth
      return auth.sendAuthRequest();
    }
  ).then(
    function (result) {
      // finish auth
      console.log('finish auth waiting');
      // shopify call my api /finish_auth
    },
    function (result) {
      console.log(result);
    }
  );
};

export function exchange () {
  let shopify = auth.getShopify();
  let queryData: any = {};
  console.log('exchange');
  shopify.get('/admin/products.json', queryData, function(err, data, headers){
    console.log(data); // Data contains product json information
    console.log(headers); // Headers returned from request
  });
}

let Promise = require('promise');
var request = require('request');
var shopifyAPI = require('shopify-node-api');
var Constants = require('./constants');
import {Oracledb} from './api_oracle';
import * as api from './api';

let options: any = {
  shop: '',
  shopify_api_key: '',
  shopify_shared_secret: '',
  shopify_scope: 'write_products',
  redirect_uri: 'http://localhost:9002/finish_auth',
  nonce: Math.random() // you must provide a randomly selected value unique for each authorization request
};

let shopify: any;

export function getCredentials () {
  const sql =
    'select ' +
    '  get_param(\'SHOPIFY_API_KEY\', 0, null, USER) as "apiKey", ' +
    '  get_param(\'SHOPIFY_APP_ID\', 0, null, USER) as "appId", ' +
    '  get_param(\'SHOPIFY_API_SECRET_KEY\', 0, null, USER) as "apiSecretKey", ' +
    '  get_param(\'SHOPIFY_API_REFRESH_TOKEN\', 0, null, USER) as "apiRefreshToken" ' +
    'from ' +
    '  dual';

  return Oracledb.select(sql, {}, null, null, null);
}

export function sendAuthRequest () {
  return new Promise(function (resolve, reject) {
    // Building the authentication url
    const authUrl = shopify.buildAuthURL();
    console.log('sendAuthRequest');
    console.log(authUrl);
    request(authUrl, function (error, response, body) {
      if (error) {
        reject(error);
        return;
      }
      resolve({response: response, body: body});
    });
  });
}

export function finishAuth (req, res) {
  return new Promise(function (resolve, reject) {
    try {
      console.log('finishAuth');
      shopify.exchange_temporary_token(req.query, function (err, data) {
        // This will return successful if the request was authentic from Shopify
        // Otherwise err will be non-null.
        // The module will automatically update your config with the new access token
        // It is also available here as data['access_token']
        if (err) {
          reject(err);
          return;
        }
        // ve queries param ziksam autorizacni kode a s tim zavolam nasledujici
        // zavolat pro sccess token a ulozit do DB
        // potom je mozne volat API
        api.exchange();
        resolve(data);
      });
    } catch (e) {
      reject(e);
    }
  })
};

export function setOptions (opt: any) {
  options.shop = (opt.appId + Constants.DOT + Constants.SHOPIFY_DOMAIN) || options.shop;
  options.shopify_api_key = opt.apiKey || options.shopify_api_key;
  options.shopify_shared_secret = opt.apiSecretKey || options.shopify_shared_secret;
  options.shopify_scope = opt.scope || 'write_products';
  options.redirect_uri = opt.redirectUrl || 'http://localhost:9002/finish_auth';
  options.nonce = Math.random();
};

export function setShopifyAPI () {
  if (!shopify) {
    shopify = new shopifyAPI(options);
  }
};

export function getShopify () {
  return shopify;
};

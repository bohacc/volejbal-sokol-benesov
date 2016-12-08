var fs = require('fs');
var Promise = require('promise');
var Constants = require('./constants');

import { Tools } from './tools';

export function sessionidCookie (req, res, next) {
  let sql, vals = {};
  try {
    if (!Tools.getSessionId(req)) {
      sql =
        'SELECT ' +
        '  encrypt_cookie(seq_sessionid_nbs.nextval) as "sessionid" ' +
        'FROM ' +
        '  dual';
      next();
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
    next();
  }
}

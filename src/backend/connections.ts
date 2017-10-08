var Constants = require('./constants');

export module Connections {
  export function getConnection (req) {
    let connection: any;

    connection =
      {
        user: process.env.APP_USER || 'NBSV',
        password: process.env.APP_USER_PASSWORD || 'nbsv',
        database: '',
        hostname: '',
        port: process.env.APP_DB_PORT || 1521,
        clientDB: '',
        connectString: ((process.env.APP_ENV === 'production' ? process.env.APP_CONNECT_STRING : '') || 'sun.notia.cz/sunee.notia.cz'),
        meta: {}
      };

    return connection;
  }
}

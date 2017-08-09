const path = require("path");
const webpack = require("webpack");

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = {
  "entry": {
    "main": [
      "./src/main.server.ts",
    ]
  },
  "output": {
    "path": path.join(process.cwd(), "dist"),
    "filename": "[name].server.bundle.js",
    "chunkFilename": "[id].server.chunk.js",
  },
  "target": "node",
  "node": {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  },
  /*externals: {
    "htmlToPdf": "html-pdf"
  },*/
  externals: checkNodeImport
};

// Helpers
function checkNodeImport(context, request, cb) {
  if (request != 'oracledb' && request != 'html-pdf') {
    cb();
    return;
  }
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request);
    return;
  }
  cb();
}

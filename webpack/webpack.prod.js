const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const postcssUrl = require("postcss-url");

const { NoEmitOnErrorsPlugin } = require("webpack");

/**
 * This is a prod config to be merged with the Client config
 */
module.exports = {
  "plugins": [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      "mangle": {
        "keep_fnames": true,
        "screw_ie8": true
      },
      compress: {
        "warnings" : false
      }
    }),
    new webpack.DefinePlugin({
      "process.env.APP_ENV": JSON.stringify("production")
    })
    /*new webpack.DefinePlugin({
      "process.env": {
        "ENV": JSON.stringify("production"),
        "APP_ENV": JSON.stringify("production"),
        "APP_PORT": JSON.stringify("9003"),
        "APP_SSL": JSON.stringify("0"),
        "APP_CONNECT_STRING": JSON.stringify("100.100.0.102/notia")
      }
    })*/
  ]
};

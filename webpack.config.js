'use strict'

let path = require('path')
require('babel-loader')

module.exports = {
  entry: {
    "index": path.join(__dirname, 'resources')
  },
  output: {
    filename: "[name].js"
  },
  watch: true,
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

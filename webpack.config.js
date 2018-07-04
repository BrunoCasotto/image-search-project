'use strict'

let path = require('path')
require('babel-loader')

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    filename: "bundle.js"
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

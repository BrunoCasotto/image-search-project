'use strict'

const path = require('path')
const webpack = require('webpack')
require('babel-loader')

module.exports = {
  entry: {
    "index": path.join(__dirname, 'resources'),
    "app": path.join(__dirname, 'resources', 'app.js')
  },
  output: {
    filename: "[name].js"
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  watch: true,
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          postcss: [
            require('autoprefixer')({
              browsers: ['last 4 versions', 'IE 10']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

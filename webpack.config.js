'use strict'

require('babel-loader');

const { getObjectPaths, toObject } = require('./webpack.helpers')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');

const imagePaths  = getObjectPaths(`${__dirname}/resources/images/*.**`);
const entryImgObj = toObject(imagePaths);

const entryObj = {
  "index": path.join(__dirname, 'resources'),
  "app": path.join(__dirname, 'resources', 'app.js'),
  "style": path.join(__dirname, 'resources', 'styles', 'main.scss')
}

Object.assign(entryObj, entryImgObj)

module.exports = {
  entry: entryObj,
  output: {
    filename: "[name].js"
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      '_components': path.join(__dirname, 'resources', 'components')
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
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
        use: [ {loader: 'file-loader?limit=100000&name=/images/[name].[ext]'} ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
      chunkFilename: "styles/[id].css"
    })
  ]
};

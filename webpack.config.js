'use strict'

let path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    filename: "bundle.js"
  },
  watch: true,
  mode: 'development'
};

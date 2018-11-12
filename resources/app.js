window.$ = window.jQuery = require('jquery');

import Vue from 'vue';

new Vue({
  el: '#app',
  mounted () {
    console.log('vue ready');
  }
})

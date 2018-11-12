window.$ = window.jQuery = require('jquery');

import Vue from 'vue';
import imageSearch from '_components/image-search.vue'

new Vue({
  el: '#app',
  componentes: {
    imageSearch
  }
})

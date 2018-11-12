window.$ = window.jQuery = require('jquery');

import Vue from 'vue';
import ImageSearch from '_components/image-search.vue';

new Vue({
  el: '#app',
  components: {
    ImageSearch
  }
});

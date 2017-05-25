import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from  './store/'

new Vue({
  store,
  el: '#app',
  render: h => h(App)
});

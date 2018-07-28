import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes'

const router  =  new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

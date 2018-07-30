import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes'
import store from './store/store'

const router  =  new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter);
Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

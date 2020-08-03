// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/mui.min.css'
import '@/assets/fonts/mui.ttf'
import './assets/iconfont/iconfont.css'
import './assets/js/comm'
import "./mock/mockserver"
import store from "./store"
import '../node_modules/swiper/css/swiper.min.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

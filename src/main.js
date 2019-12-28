import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 用这种方式就可以直接在演示页面显示我们组件，而不需要通过npm的方式引入
import '@/plugin/assets/scss/index.scss'
import Vzer from '@/plugin'
Vue.use(Vzer)

import '@/assets/css/base.css'

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
})

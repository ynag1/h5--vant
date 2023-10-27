import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/vant/vant'
import store from './store/index.js'
import './permission.js'
import './filters/index'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

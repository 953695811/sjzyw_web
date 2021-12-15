import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Api from './assets/Api/Api'
import './assets/css/base.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// 统一全局接口
Vue.prototype.$Api = Api
// 全局报错提示
Vue.prototype.$log = function (msg) {
  console.log('%c' + msg, 'background: #222; color: #bada55')
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

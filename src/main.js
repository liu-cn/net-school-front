import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import store from "./store/index"

Vue.prototype.$bus= new Vue()
Vue.prototype.$ajax=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

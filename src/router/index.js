import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.config.productionTip = false
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

import Home from '../views/home/Home.vue'
import el from "element-ui/src/locale/lang/el";

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    name:"register",
    component: ()=> import("@/views/register/register")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  console.log("to name:",to.name,"from:",from.name,next)
  // if (to.name!="login" || to.name!="register"){
  //   let token=localStorage.getItem("token")
  //   console.log(token)
  //   if (token==null){
  //     next("/login")
  //   }else {
  //     next()
  //   }
  // }else {
  //   next()
  // }
  if (to.name==="login" || to.name==="register"){
    next()
    return
  }else {
    let token = localStorage.getItem("token")
    console.log(token)
    if (token == null) {
      next("/login")
    } else {
      next()
    }
  }
})

export default router

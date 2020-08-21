import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.config.productionTip = false
import layout from '../components/layout/layout'
import home from "@/views/home/Home"
import el from "element-ui/src/locale/lang/el";

  const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    redirect:"/home",
    children:[
     {
        path:"/home",
        name:"home",
        component:home,
     },
    {
      path:"/wall",
      name:"wall",
      component:()=>import("@/views/wall/wall")
    },
    {
      path:"/profile",
      name:"profile",
      component:()=>import("@/views/profile/profile")
    },
    {
      path:"/publish",
      name:"publish",
      component:()=>import("@/views/publish/publish")
    },
    {
      path:"/works",
      name:"works",
      component:()=>import("@/views/works/works")
    },
    {
      path:"/community",
      name:"community",
      component:()=>import("@/views/community/community")
    },
    {
      path:"/study",
      name:"study",
      component:()=>import("@/views/study/study")
    },
    {
      path: "/test",
      name: "test",
      component: ()=>import("@/views/test/test")
    },
    {
      path: "/friends",
      name: "friends",
      component: ()=>import("@/views/friends/friends")
    }
    ]
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

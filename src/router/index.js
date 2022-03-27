import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

// const router = new VueRouter({
//   // mode: "history",      //注释即为默认的hash值
//   base: process.env.BASE_URL,
//   routes,
// });
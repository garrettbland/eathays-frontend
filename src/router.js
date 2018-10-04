import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Restaurant from '@/views/Restaurant'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/restaurants',
      redirect: '/'
    },
    {
      path: '/restaurants/:slug',
      name: 'restaurant',
      component: Restaurant
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

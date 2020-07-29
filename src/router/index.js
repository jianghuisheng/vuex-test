import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import children from '@/views/children'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/children',
      name: 'children',
      component: children,
    },
  ],
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/home'
import catalog from './page/catalog'
import Panel from './panel/Panel'

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
      path: '/admin/panel',
      name: 'panel',
      component: Panel
    },
    {
      path: '/smartphone',
      name: 'smartphone',
      component: catalog
    },
    {
      path: '/tablet',
      name: 'tablet',
      component: catalog
    },
    {
      path: '/notebook',
      name: 'notebook',
      component: catalog
    },
    {
      path: '/computer',
      name: 'computer',
      component: catalog
    },
  ]
})

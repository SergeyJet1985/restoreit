import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/home'
import catalog from './page/catalog'
import Panel from './panel/Panel'
import model from './panel/model'
import service from './page/service'

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
      path: '/admin/panel/model',
      name: 'model',
      component: model
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: catalog
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
  ]
})

import Vue from 'vue'
import Vuex from 'vuex'

import Links from './JavaScript/navigationLinks'
import miniCategory from './JavaScript/miniCategory'
import smartphone from './JavaScript/smartphone'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Links,
    miniCategory,
    smartphone,
  },
  mutations: {

  },
  actions: {

  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import Links from './JavaScript/navigationLinks'
import miniCategory from './JavaScript/miniCategory'
import smartphone from './JavaScript/smartphone'
import state from './store/state'
import mutations from './store/mutations'
import actions from './store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
})

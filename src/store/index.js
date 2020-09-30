import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import product from './product'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth, user, product
  }
})

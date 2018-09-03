import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    md: ''
  },
  mutations: {
    edit(state, input) {
      state.md = input
    }
  },
  actions: {
    edit(context, input) {
      context.commit('edit', input)
    }
  }
})

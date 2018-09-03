import Vue from 'vue'
import Vuex from 'vuex'
import marked from 'marked'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    md: '',
    compiled: ''
  },
  mutations: {
    edit(state, input) {
      state.md = input
      state.compiled = marked(state.md, { sanitize: true })
    }
  },
  actions: {
    edit(context, input) {
      context.commit('edit', input)
    }
  }
})

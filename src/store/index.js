import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        commentsTotal: 0
    },
    mutations: {
        commentsNum (state,commentsTotal) {
          state.commentsTotal = commentsTotal
        }
    }
  })
  
  export default store
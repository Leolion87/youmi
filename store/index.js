import Vue from 'vue'
import Vuex from 'vuex'
import request from '~/service/index.js'
Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
      state: {
        userInfo: {
          
        }
      },
      mutations:{

      }
  })

export default store

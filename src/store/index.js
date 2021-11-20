import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      status: '',
      user: {},
      error: ''
    },
    mutations: {
      authRequest(state){
          state.status = 'loading'
      },
      logUserIn(state, user){
        state.user = user
        state.status = 'loggedIn'
      },
      getError(state, error){
        state.error = error
      }, 
      logUserOut(state) {
        state.status = ''
        state.error = ''
        Object.keys(state.user).forEach(key => state.user[key]=null);
      }
    },
    actions: {
        async login({commit}, loginData){
          commit('authRequest')
          try {
            const resp = await axios.post('https://us-central1-ria-server-b1103.cloudfunctions.net/authenticate', loginData)
            if(resp.data.result.error){
              commit('getError', resp.data.result.error)
              console.log(resp.data.result.error);
            } else {
              commit('logUserIn', resp.data.result)
            }
          } catch (error) {
            console.log(error)
          }
        },
        logout({commit}) {
          commit('logUserOut')
        }
    },
    getters : {
      isLoggedIn: state => {
        return state.status === 'loggedIn'
      },
      getError: state => {
        return state.error
      },
      getUserInfo: state => {
        return state.user
      }
    }
  })
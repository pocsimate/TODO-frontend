import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      status: '',
      user: {},
      todos: [],
      error: ''
    },
    mutations: {
      authRequest(state){
          state.status = 'loading'
      },
      addTodo(state, todo){
        state.todos.push(todo)
      },
      setTodos(state, todos) {
        state.todos = todos;
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
        async fetchTodos({commit}) {
          const resp = await axios.get("http://192.168.0.17:8080/api/v1/todo");
          commit('setTodos', resp.data)
        },
        async addNewTodo({commit}, todo) {
          const resp = await axios.post("http://192.168.0.17:8080/api/v1/todo", todo);
          commit('addTodo', resp.data)
        },
        logout({commit}) {
          commit('logUserOut')
        }
    },
    getters : {
      isLoggedIn: state => {
        return state.status === 'loggedIn'
      },
      getTodos: state => {
        return state.todos
      },
      getError: state => {
        return state.error
      },
      getUserInfo: state => {
        return state.user
      }
    }
  })
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      status: '',
      user: {},
      todos: [],
      error: '',
      jwt: ''
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
      setUserInfo(state, user){
        state.user = user
      },
      setJWT(state, jwt) {
        state.jwt = jwt
        state.status = 'loggedIn'
      },
      setError(state, error){
        state.error = error
      },
      logUserOut(state) {
        state.status = ''
        state.error = ''
        state.jwt = ''
        Object.keys(state.user).forEach(key => state.user[key]=null);
      }
    },
    actions: {

        async login({commit}, loginData){
          commit('authRequest')
          try {
            console.log(loginData);
            const resp = await axios.post('http://localhost:8080/api/v1/user/login', loginData)
              commit('setJWT', resp.data)
              console.log(resp);
          } catch (error) {
            console.log(error)
            commit("setError", "Login failed due to incorrect credentials")
          }
        },

        async register({commit}, userData) {
          try {
            console.log(userData);
            await axios.post('http://localhost:8080/api/v1/user/register', userData)
          } catch(error) {
            console.log(error);
            commit("setError", "An error occured during registration")
          }
        },

        async fetchUserInfo({commit, state}) {
          const config = {
            headers: { Authorization: `Bearer ${state.jwt}` }
          };
          try {
            const resp = await axios.get('http://localhost:8080/api/v1/user/me', config)
            commit('setUserInfo', resp.data)
          } catch (error) {
            console.log(error)
          }
        },

        async fetchTodos({commit, state}) {
          const config = {
            headers: { Authorization: `Bearer ${state.jwt}` }
          };
          try {
            const resp = await axios.get("http://localhost:8080/api/v1/todo", config)
            commit('setTodos', resp.data)
          } catch (error) {
            console.log(error)
          }
        },

        async addNewTodo({commit, state}, todo) {
          const config = {
            headers: { Authorization: `Bearer ${state.jwt}` }
          };
          try {
            const resp = await axios.post("http://localhost:8080/api/v1/todo", todo, config)
            commit('addTodo', resp.data)
          } catch (error) {
            console.log(error)
          }
        },

        async deleteTodo({state, dispatch}, todoId) {
          const config = {
            headers: { Authorization: `Bearer ${state.jwt}` }
          };
          try {
            const resp =await axios.delete(`http://localhost:8080/api/v1/todo/${todoId}`, config)
            console.log(resp);
            dispatch("fetchTodos")
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
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
    }
  },
  actions: {
    register ({ commit }, credentials) {
      return axios
        .post('//localhost:3000/register', credentials)
        .then(({ data }) => {
          console.log('user data is', data)
          commit('SET_USER', data)
        })
    },
    login ({ commit }, credentials) {
      return axios
        .post('//localhost:3000/login', credentials)
        .then(({ data }) => {
          commit('SET_USER', data)
        })
    }
  }
})

import { login } from "../../api/imgur"

const state = {
  token: null
}

const getters = {
  isLoggedIn:state => !!state.token

}

const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
  },
  login: () => {
    login();
  }
}

const mutations = {
  setToken:(state, token) => {
    state.token = token
  }
}

export {
  state,
  getters,
  actions,
  mutations
}
import twitch_api from '../../apis/twitch'

const state = {
  token: null
}

const getters = {
  isLoggedIn: state => !!state.token
}

const actions = {
  login: ({ commit }) => {
    twitch_api.login()
  },
  logout: ({ commit }) => {
    commit("setToken", null)
  }
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

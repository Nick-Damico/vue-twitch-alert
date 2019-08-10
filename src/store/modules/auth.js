import twitch from '../../apis/twitch'

const state = {
  token: null
}

const getters = {
  isLoggedIn: state => !!state.token
}

const actions = {
  login ({ commit }) => {
    twitch.login()
    .then(r => {
      console.log(r)
    })
  }
  logout ({ commit }) => {
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

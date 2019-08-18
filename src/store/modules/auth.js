import twitch_api from "../../apis/twitch";
import qs from "qs";
import { router } from '../../main'

const state = {
  token: window.localStorage.getItem('twitch_token')
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  login: ({ commit }) => {
    twitch_api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const query = qs.parse(hash.replace("#", ""));

    commit("SET_TOKEN", query.access_token);
    window.localStorage.setItem('twitch_token', query.access_token)
    setTimeout(() => {
      router.push('/')
    }, 3000)
  },
  logout: ({ commit }) => {
    commit("SET_TOKEN", null);
    window.localStorage.removeItem('twitch_token')
  }
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

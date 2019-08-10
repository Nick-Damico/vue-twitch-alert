import twitch_api from "../../apis/twitch";
import qs from "qs";

const state = {
  token: null
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
  },
  logout: ({ commit }) => {
    commit("SET_TOKEN", null);
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

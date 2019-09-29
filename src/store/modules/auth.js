import twitch_api from "../../apis/twitch";
import qs from "qs";
import { router } from "../../main";

const state = {
  token: window.localStorage.getItem("twitch_token"),
  currentUser: JSON.parse(window.localStorage.getItem("twitch_user"))
};

const getters = {
  isLoggedIn: state => !!state.token,
  getCurrentUser: state => state.currentUser
};

const actions = {
  login: ({ commit }) => {
    twitch_api.login();
  },

  async validateUser({ commit, state }) {
    const { token } = state;
    const response = await twitch_api.validate(token);
    const jsonResponse = JSON.stringify(response.data)

    commit("SET_CURRENT_USER", response.data);
    window.localStorage.setItem("twitch_user", jsonResponse)
  },

  finalizeLogin: ({ commit, dispatch }, hash) => {
    const query = qs.parse(hash.replace("#", ""));

    commit("SET_TOKEN", query.access_token);
    dispatch('validateUser', {root:true})
    window.localStorage.setItem("twitch_token", query.access_token);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  },

  logout: ({ commit }) => {
    commit("SET_TOKEN", null);
    commit("SET_CURRENT_USER", null);
    window.localStorage.removeItem("twitch_token");
    window.localStorage.removeItem("twitch_user");
  }
};

const mutations = {
  SET_TOKEN: (state, token) => {
    // "t9ujesbjd9b9au1y330u3h2ic1izru"
    state.token = token;
  },
  SET_CURRENT_USER: (state, user) => {
    state.currentUser = user;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

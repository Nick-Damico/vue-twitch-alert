import { router } from '../../main'
import twitch_api from "../../apis/twitch";

const state = {
  selectedStreamer: null,
  streamers: []
};

const getters = {
  selectedStreamer: state => state.selectedStreamer,
  allStreamers: state => state.streamers
};

const actions = {
  setStreamer({ commit, dispatch }, streamer) {
    commit("SET_SELECTED_STREAMER", streamer)
  },
  async fetchTop20({ commit, dispatch }) {
    const streamersResponse = await twitch_api.fetchTop20Streamers()
    commit("SET_STREAMERS", streamersResponse.data.data)
    dispatch('fetchGames', {root:true})
  },
  async fetchFollowed({ rootState, commit }) {
    const { user_id } = rootState.auth.currentUser
    const streamerResponse = await twitch_apit.fetchFollowed(user_id)
    commit("SET_FOLLOWERS", streamerResponse.data.data)
  }
};

const mutations = {
  SET_SELECTED_STREAMER: (state, streamer) => {
    state.selectedStreamer = streamer;
  },
  SET_STREAMERS: (state, streamers) => {
    state.streamers = streamers
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

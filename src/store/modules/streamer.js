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
  setStreamer({ commit }, streamer) {
    commit("SET_SELECTED_STREAMER", streamer)
  },
  async fetchTop20({ commit }) {
    const streamersResponse = await twitch_api.fetchTop20Streamers()
    commit("SET_STREAMERS", streamersResponse.data.data)
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

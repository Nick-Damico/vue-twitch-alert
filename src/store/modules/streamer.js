import { router } from '../../main'

const state = {
  selectedStreamer: null
};

const getters = {
  selectedStreamer: state => state.selectedStreamer
};

const actions = {
  setStreamer({ commit }, streamer) {
    commit("SET_SELECTED_STREAMER", streamer)
  }
};

const mutations = {
  SET_SELECTED_STREAMER: (state, streamer) => {
    state.selectedStreamer = streamer;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

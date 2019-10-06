import { router } from '../../main'
import twitch_api from "../../apis/twitch";

const state = {
  selectedStreamer: null,
  streamers: [],
  followers: []
};

const getters = {
  selectedStreamer: state => state.selectedStreamer,
  allStreamers: state => state.streamers,
  getFollowers: state => state.followers
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
    const followerResponse = await twitch_api.fetchFollowed(user_id)
    const followedIds = followerResponse.data.data.map(followed => followed.to_id)
    const followers = await twitch_api.fetchStreamers(followedIds)
    debugger
    commit("SET_FOLLOWERS", followers.data.data)
  }
};

const mutations = {
  SET_SELECTED_STREAMER: (state, streamer) => {
    state.selectedStreamer = streamer;
  },
  SET_STREAMERS: (state, streamers) => {
    state.streamers = streamers
  },
  SET_FOLLOWERS: (state, streamers) => {
    state.followers = streamers
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

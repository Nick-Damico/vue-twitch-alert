// import { router } from '../../main'
import twitch_api from "../../apis/twitch";

const state = {
  selectedStreamer: {},
  selectedVideo: {},
  streamers: [],
  followers: [],
  offline: [],
  videos: []
};

const getters = {
  selectedStreamer: state => state.selectedStreamer,
  selectedVideo: state => state.selectedVideo,
  allStreamers: state => state.streamers,
  getFollowers: state => state.followers,
  getOffline: state => state.offline,
  getVideos: state => state.videos
};

const actions = {
  setStreamer({ commit, dispatch }, streamer) {
    commit("SET_SELECTED_STREAMER", streamer)
    dispatch({ type: 'fetchVideos', payload: { streamer: streamer }})
  },
  setVideo({ commit }, video) {
    commit("SET_SELECTED_VIDEO", video)
  },
  async fetchTop20({ commit, dispatch }) {
    const streamersResponse = await twitch_api.fetchTop20Streamers()
    commit("SET_STREAMERS", streamersResponse.data.data)
    dispatch('fetchGames', {root:true})
  },
  async fetchFollowed({ rootState, commit, dispatch }) {
    const { user_id } = rootState.auth.currentUser
    const followerResponse = await twitch_api.fetchFollowed(user_id)
    const followedIds = followerResponse.data.data.map(followed => followed.to_id)
    const followers = await twitch_api.fetchStreamers(followedIds)
    const liveIds = followers.data.data.map(follower => follower['user_id'])

    dispatch({type: 'fetchOffline', payload: {allIds: followedIds, liveIds: liveIds}})
    commit("SET_FOLLOWERS", followers.data.data)
  },
  async fetchOffline({ commit }, { payload }) {
    const { allIds, liveIds } = payload
    const offlineIds = allIds.filter(id => !liveIds.includes(id))
    const offlineStreamers = await twitch_api.fetchUsers(offlineIds)

    commit("SET_OFFLINE", offlineStreamers.data.data)
  },
  async fetchVideos({ commit, rootState }, { payload }) {
    const { streamer } = payload
    const user_id = streamer.user_id ? streamer.user_id : streamer.id
    const videos = await twitch_api.fetchVideos(user_id)

    commit("SET_VIDEOS", videos.data.data)
  }
};

const mutations = {
  SET_FOLLOWERS: (state, streamers) => {
    state.followers = streamers
  },
  SET_SELECTED_STREAMER: (state, streamer) => {
    state.selectedStreamer = streamer;
  },
  SET_SELECTED_VIDEO: (state, video) => {
    state.selectedVideo = video
  },
  SET_STREAMERS: (state, streamers) => {
    state.streamers = streamers
  },
  SET_OFFLINE: (state, streamers) => {
    state.offline = streamers
  },
  SET_VIDEOS: (state, videos) => {
    state.videos = videos
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

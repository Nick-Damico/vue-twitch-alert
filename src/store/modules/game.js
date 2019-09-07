import twitch_api from "../../apis/twitch";
import qs from "qs";
import { router } from '../../main'

const state = {
  selectedGame: null
};

const getters = {
  selectedGame: state => state.selectedGame
};

const actions = {
  async fetchGame({ rootState, commit }) {
    const { game_id } = rootState.streamer.selectedStreamer
    const game = await twitch_api.fetchGame(game_id)
  
    commit('SET_SELECTED_GAME', game.data.data[0])
  }
};

const mutations = {
  SET_SELECTED_GAME: (state, game) => {
    state.selectedGame = game;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

import twitch_api from "../../apis/twitch";
import qs from "qs";
import { router } from '../../main'

const state = {
  selectedGame: null,
  games: []
};

const getters = {
  selectedGame: state => state.selectedGame,
  allGames: state => state.games
};

const actions = {
  async fetchGames({ commit, rootState }, gameIds) {
    const streamers = rootState.streamer.streamers
    if (streamers.length > 0) {
      const game_ids = streamers.map((streamer) => streamer.game_id)
      const games = await  twitch_api.fetchGames(game_ids)

      commit('SET_GAMES', games.data.data)
    }
  },
  async fetchGame({ rootState, commit }) {
    const { game_id } = rootState.streamer.selectedStreamer
    const game = await twitch_api.fetchGame(game_id)

    commit('SET_SELECTED_GAME', game.data.data[0])
  }
};

const mutations = {
  SET_SELECTED_GAME: (state, game) => {
    state.selectedGame = game;
  },
  SET_GAMES: (state, games) => {
    state.games = games
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

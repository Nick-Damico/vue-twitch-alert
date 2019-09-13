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
  async fetchGames({ rootState, commit }, gameIds) {
    const streamers = rootState.streamer.streamers
    if (streamers.length > 0) {
      const game_ids = streamers.map((streamer) => streamer.game_id)
      const games = await twitch_api.fetchGames(game_ids)

      commit('SET_GAMES', games.data.data)
    }
  },
  async fetchGame({ rootState, commit, state }) {
    let game, response
    const { game_id } = rootState.streamer.selectedStreamer
    if (state.games.length > 0) {
      game = state.games.find(game => game.id === game_id)
    } else {
      response = await twitch_api.fetchGame(game_id)
      game = response.data.data[0]
    }
    
    commit('SET_SELECTED_GAME', game)
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

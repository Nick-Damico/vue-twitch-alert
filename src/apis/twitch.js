import axios from "axios";
import qs from "qs";

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.VUE_APP_CLIENT_SECRET;
const AUTH_ROOT_URL = "https://id.twitch.tv";
const ROOT_URL = "https://api.twitch.tv/helix";
const redirect_uri = "http://localhost:8080/oauth2/callback";
const grant_type = "client_credentials";
const response_type = "token";
// space separated
const scope = "user:read:broadcast";

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      redirect_uri: redirect_uri,
      response_type: response_type,
      scope: scope
    };

    window.location = `${AUTH_ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  validate(token) {
    return axios.get(`${AUTH_ROOT_URL}/oauth2/validate`, {
      headers: {
        'Authorization': 'OAuth ' + token
      }
    })
  },
  // TODO: Might be able to refactor the fetchGame(s) methods into single method.
  fetchGame(id) {
    const querystring = {
      id: id
    };
    return axios.get(`${ROOT_URL}/games?${qs.stringify(querystring)}`, {
      headers: {
        "Client-ID": CLIENT_ID
      }
    });
  },
  fetchGames(ids) {
    const querystring = {
      id: ids
    }
    return axios.get(`${ROOT_URL}/games?${qs.stringify(querystring)}`, {
      headers: {
        "Client-ID": CLIENT_ID
      }
    })
  },
  fetchStreamers(ids) {
    const querystring = {
      user_id: ids
    };

    return axios.get(`${ROOT_URL}/streams?${qs.stringify(querystring)}`, {
      headers: {
        "Client-ID": CLIENT_ID
      }
    })
  },
  fetchTop20Streamers() {
    const querystring = {
      first: 20
    };
    return axios.get(`${ROOT_URL}/streams?${qs.stringify(querystring)}`, {
      headers: {
        "Client-ID": CLIENT_ID
      }
    });
  },
  fetchUsers(ids) {
    const querystring = {
      id: ids
    }
    return axios.get(`${ROOT_URL}/users?${qs.stringify(querystring)}`, {
      headers: {
        "Client-ID": CLIENT_ID
      }
    });
  },
  fetchFollowed(id) {
    const querystring = {
      from_id: id
    };
    return axios.get(`${ROOT_URL}/users/follows?${qs.stringify(querystring)}`, {
      headers: {
        "Client-ID": CLIENT_ID
      }
    });
  },
  fetchVideos(id) {
    const querystring = {
      user_id: id
    }
    return axiso.get(`${ROOT_URL}/videos?${qs.stringify(querystring)}`, {
      headers: {
        "Client-ID" CLIENT_ID
      }
    })
  }
};

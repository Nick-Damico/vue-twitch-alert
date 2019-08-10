import qs from 'qs'

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID
const CLIENT_SECRET = process.env.VUE_APP_CLIENT_SECRET
const ROOT_URL = 'https://id.twitch.tv'
const redirect_uri = 'http://localhost:8080/callback'
const grant_type = 'client_credentials'
const response_type = 'token'
// space separated
const scope = 'user:read:broadcast'

export default {
  login() {
     const querystring = {
      client_id: CLIENT_ID,
      redirect_uri: redirect_uri,
      response_type: response_type,
      scope: scope
    }

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  }
};

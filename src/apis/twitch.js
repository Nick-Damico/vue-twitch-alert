import axios from 'axios'

const CLIENT_ID = process.env.VUE_APP_CLIENT_APP
const CLIENT_SECRET = process.env.VUE_APP_CLIENT_SECRET
const ROOT_URL = 'https://id.twitch.tv'
const grant_type = 'client_credentials'
const scope = ''

export default {
  login() {
     const params = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: grant_type
    }

    axios.post(ROOT_URL, params)
  }
};

// Causes the Users Browser to redirect to this address.
// window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;

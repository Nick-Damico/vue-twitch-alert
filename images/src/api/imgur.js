import qs from 'qs';

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.VUE_APP_CLIENT_SECRET;
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    // Causes the Users Browser to redirect to this address.
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`;
  }
};

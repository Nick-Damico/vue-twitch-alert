<template>
  <div id="app" class="container-fluid">
    <NavigationBar />
    <NowPlaying />
  </div>
</template>

<script>
import axios from 'axios'
import NavigationBar from './components/NavigationBar'
import NowPlaying from './components/NowPlaying'
// Api Access Keys
const API_KEY = process.env.VUE_APP_SECRET
const API_CLIENT_ID = process.env.VUE_APP_CLIENT_ID

export default {
  name: 'app',
  components: {
    NavigationBar,
    NowPlaying
  },
  data() {
    return {
      streamers: []
    }
  },
  mounted() {
    axios.get('https://api.twitch.tv/helix/streams?first=20', {
      headers: {
        'Client-ID': API_CLIENT_ID
      },
      params: {
        client_id: API_CLIENT_ID
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
  #app {
    padding: 0;
    background-color: black;
  }
</style>

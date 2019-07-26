<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <NavigationBar />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <NowPlaying :streamer="selectedStreamer"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BootstrapVue from 'bootstrap-vue'
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
      streamers: [],
      selectedStreamer: null
    }
  },
  mounted() {
    axios.get('https://api.twitch.tv/helix/streams?first=20', {
      headers: {
        'Client-ID': API_CLIENT_ID
      }
    })
    .then(response => {
      this.streamers = response.data.data;
      this.selectedStreamer = response.data.data[Math.floor(Math.random()*response.data.data.length)];
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
</style>

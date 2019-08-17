<template lang="html">
  <div class="landing-page">
    <NowPlaying :streamer="selectedStreamer" />
    <StreamerList :streamers="streamers" @streamerSelect="onStreamerSelect" />
  </div>
</template>

<script>
import axios from 'axios'

import NowPlaying from './NowPlaying'
import StreamerList from './StreamerList'
import Pagination from './Pagination'

// Api Access Keys
const API_KEY = process.env.VUE_APP_SECRET
const API_CLIENT_ID = process.env.VUE_APP_CLIENT_ID

export default {
  name: 'LandingPage',
  components: {
    NowPlaying,
    StreamerList
  },
  data() {
    return {
      streamers: [],
      selectedStreamer: null
    }
  },
  methods: {
    onStreamerSelect(streamer) {
      this.selectedStreamer = streamer;
    }
  },
  mounted() {
    axios
      .get('https://api.twitch.tv/helix/streams?first=20', {
        headers: {
          'Client-ID': API_CLIENT_ID
        }
      })
      .then(response => {
        this.streamers = response.data.data
        this.selectedStreamer = response.data.data[Math.floor(Math.random() * response.data.data.length)]
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="css" scoped>
</style>

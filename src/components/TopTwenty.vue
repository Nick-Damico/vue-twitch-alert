<template lang="html">

  <div>
    <NowPlaying />
    <BoxArtScroller :title="`The Games of the Top 20`" />
    <StreamerList v-if="streamers" :streamers="streamers" />
  </div>

</template>

<script>

  import axios from 'axios'

  import BoxArtScroller from './BoxArtScroller'
  import NowPlaying from './NowPlaying'
  import StreamerList from './StreamerList'
  import Pagination from './Pagination'
  import { mapActions, mapGetters } from 'vuex'

  // Api Access Keys
  const API_KEY = process.env.VUE_APP_SECRET
  const API_CLIENT_ID = process.env.VUE_APP_CLIENT_ID

  export default {
    name: 'TopTwenty',
    components: {
      NowPlaying,
      BoxArtScroller,
      StreamerList
    },
    methods: {
      ...mapActions(['setStreamer', 'fetchTop20'])
    },
    computed: {
      ...mapGetters({ streamers: 'allStreamers' })
    },
    created() {
      this.fetchTop20()
    },
    watch: {
      streamers(newVal, oldVal) {
        const streamer = newVal[Math.floor(Math.random() * newVal.length)]
        this.setStreamer(streamer)
      }
    }
  }

</script>

<style lang="css" scoped>
</style>

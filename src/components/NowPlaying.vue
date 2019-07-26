<template lang="html">
  <b-container v-if="streamer" id="nowPlaying" fluid>
    <b-row>
      <b-col>
        <VideoPlayer></VideoPlayer>
      </b-col>
      <b-col>
        <div>
          <b-card :title="this.streamer.title"
                  :img-src="thumbnailUrl()"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2">
            <b-card-text>
              {{ this.streamer.type }}
            </b-card-text>
            <b-button href="#" variant="primary">View Streamer</b-button>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  import VideoPlayer from './VideoPlayer'
  import VideoDetails from './VideoDetails'

  export default {
    name: 'NowPlaying',
    props: ['streamer'],
    components: {
      VideoPlayer
    },
    methods: {
      thumbnailUrl() {
        return this.streamer.thumbnail_url.replace(/{width}/, 320).replace(/{height}/, 180);
      }
    }
  }

</script>

<style lang="css" scoped>

  #nowPlaying {
    background-color: #6441a4;
    height: 100%;
    min-height: 60vh;
  }

</style>

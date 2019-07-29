<template lang="html">
  <div v-if="streamer" id="nowPlaying">
    <div class="frow centered">
      <div class="col-md-2-3">
        <div class="video-preview">
          <img :src="thumbnailUrl" />
        </div>
      </div>
      <div class="col-md-1-3">
        <div class="video-details">
          <h4 class="video-details__title">{{ this.streamer.user_name }}</h4>
          <p>{{ this.streamer.title }}</p>
          <b-button href="#" variant="primary">View Streamer</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NowPlaying',
    props: ['streamer'],
    computed: {
      thumbnailUrl() {
        return this.streamer.thumbnail_url.replace(/{width}/, 512).replace(/{height}/, 288);
      },
    }
  }

</script>

<style lang="css" scoped>

  #nowPlaying {
    background-color: #6441a4;
    height: 100%;
    min-height: 60vh;
  }

  .video-preview {
    text-align: center;
  }

  .video-details {
    align-self: flex-start;
    text-align: left;
  }
</style>

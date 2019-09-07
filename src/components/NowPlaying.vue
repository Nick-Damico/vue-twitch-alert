<template lang="html">

  <div id="nowPlaying" class="bg-blue-purple-gradient" v-if="streamer">
    <div class="ui container two column stackable grid">
      <div class="column">
        <div class="video-preview">
          <img class="ui fluid image" :src="thumbnailUrl" />
        </div>
      </div>

      <div class="column">
        <div class="video-details">
          <h3 class="video-details__title">{{ streamer.user_name }}</h3>
          <p class="video-details__text">{{ streamer.title }}</p>
          <p>Current Viewers: {{ streamer.viewer_count }}</p>
          <button class="ui primary button video-details__btn" href="#">Watch Stream</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NowPlaying',
    computed: {
      ...mapGetters({
        streamer: 'selectedStreamer'
      }),
      thumbnailUrl() {
        return this.streamer.thumbnail_url.replace(/{width}/, 512).replace(/{height}/, 288)
      }
    },
    created() {

    }
  }

</script>

<style lang="css" scoped>

  #nowPlaying {
    padding: 30px 0;
  }

  .video-preview {
    text-align: center;
  }

  .video-details__col {
    max-width: 400px;
  }

  .video-details {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .video-details__title {
    font-size: 2.2rem;
    color: var(--text-mint);
    margin-bottom: 8px;
  }

  .video-details__text {
    color: var(--text-white);
  }

  .video-details__btn {
    display: flex;
    margin-top: auto;
    width: 100%;
  }

</style>

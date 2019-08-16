<template lang="html">

  <div id="nowPlaying" class="bg-blue-purple-gradient" v-if="streamer">
    <div class="ui two column stackable grid container">
      <div class="column">
        <div>
          <div class="video-preview">
            <img class="video" :src="thumbnailUrl" />
          </div>
        </div>
      </div>
      <div class="column">
        <div>
          <div class="video-details">
            <h4 class="video-details__title">{{ this.streamer.user_name }}</h4>
            <p class="video-details__text">{{ this.streamer.title }}</p>
            <p>Current Viewers: {{ this.streamer.viewer_count }}</p>
            <button class="video-details__btn" href="#" variant="primary">Watch Stream</button>
          </div>
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
        return this.streamer.thumbnail_url.replace(/{width}/, 512).replace(/{height}/, 288)
      }
    }
  }

</script>

<style lang="css" scoped>

  #nowPlaying {
    padding: 30px;
  }

  .video-preview {
    text-align: center;
  }

  .video {
    max-width: 100%;
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

<template lang="html">
  <div v-if="streamer" id="nowPlaying">
    <div class="wrapper">
      <div class="frow gutters centered items-stretch">
        <div class="col-md-1-2">
          <div class="video-preview">
            <img :src="thumbnailUrl" />
          </div>
        </div>
        <div class="col-md-1-2 video-details__col">
          <div class="video-details">
            <h4 class="video-details__title">{{ this.streamer.user_name }}</h4>
            <p class="video-details__text">{{ this.streamer.title }}</p>
            <b-button class="video-details__btn" href="#" variant="primary">Watch Stream</b-button>
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
        return this.streamer.thumbnail_url.replace(/{width}/, 512).replace(/{height}/, 288);
      },
    }
  }

</script>

<style lang="css" scoped>

  #nowPlaying {
    padding: 30px;
    background-color: #6441a4;
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

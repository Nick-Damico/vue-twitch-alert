<template lang="html">

  <div id="nowPlaying" class="bg-blue-purple-gradient" v-if="streamer">
    <div class="ui container two column stackable grid">
      <div class="column">
        <div class="video-preview">
          <img class="ui fluid image" :src="streamThumbnailUrl" />
        </div>
      </div>

      <div class="column ui grid">
        <div class="ten wide column">
          <h3 class="video-details__title">{{ streamer.user_name }}</h3>
          <p class="video-details__text">{{ streamer.title }}</p>
          <p>Current Viewers: {{ streamer.viewer_count }}</p>
        </div>
        <div class="six wide column">
          <div class="game-details" v-if="game">
            <img class="game__box-art ui fluid image" :src="boxartThumbnailUrl" :alt="game.name">
          </div>
        </div>
        <button class="ui primary button video-details__btn" href="#">Watch Stream</button>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'NowPlaying',
    computed: {
      ...mapGetters({
        streamer: 'selectedStreamer',
        game: 'selectedGame'
      }),
      boxartThumbnailUrl() {
        if (this.game && this.game.box_art_url) {
          return this.game.box_art_url.replace(/{width}/, 188).replace(/{height}/, 250)
        }
      },
      streamThumbnailUrl() {
        if (this.streamer && this.streamer.thumbnail_url){          
          return this.streamer.thumbnail_url.replace(/{width}/, 512).replace(/{height}/, 288)
        }
      }
    },
    methods: {
      ...mapActions(['fetchGame'])
    },
    watch: {
      streamer(newVal, oldVal) {
        if (newVal !== null) {
          this.fetchGame()
        }
      }
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


  /* GAME DETAILS */
  .game__box-art {
    max-width: 180px;
  }
</style>

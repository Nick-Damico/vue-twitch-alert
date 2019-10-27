<template lang="html">

  <div class="eight wide tablet five wide computer column">
    <div v-if="typeIsLive" class="streamer-card" @click="onClick">
      <img class="ui fluid image" :src="thumbnailUrl" alt="">
      <h5 class="streamer-title">{{ this.streamer.title }}</h5>
    </div>

    <div v-else-if="typeIsOffline" class="streamer-card" @click="onClick">
      <img class="ui fluid image" :src="this.streamer.offline_image_url" alt="">
      <h5 class="streamer-title">{{ this.streamer.display_name }}</h5>
    </div>
  </div>

</template>

<script>

  import { mapActions } from 'vuex'

  export default {
    name: 'StreamerListItem',
    props: {
      streamer: {
        type: Object,
        default: 'Live'
      },
      type: String
    },
    computed: {
      thumbnailUrl() {
        return this.streamer.thumbnail_url.replace(/{width}/, 740).replace(/{height}/, 416)
      },
      typeIsLive() {
        return this.type === 'Live'
      },
      typeIsOffline() {
        return this.type === 'Offline'
      }
    },
    methods: {
      ...mapActions(['setStreamer']),
      onClick() {
        this.setStreamer(this.streamer)
      }
    }
  }

</script>

<style lang="css" scoped>

  .streamer-card {
    position: relative;
  }

  .streamer-title {
    position: absolute;
    display: flex;
    background: rgba(64, 36, 99, 0.6);
    bottom: 0;
    color: white;
    flex-direction: column;
    font-weight: 200;
    justify-content: center;
    padding: 15px;
    text-align: center;
    width: 100%;
  }

  .placeholder {
    min-height: 190px;
  }
</style>

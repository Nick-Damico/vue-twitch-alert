<template lang="html">

  <div class="eight wide tablet five wide computer column">
    <div class="video-card" @click="onClick">
      <img class="ui fluid image" :src="thumbnailUrl" alt="">
      <h5 class="video-title">{{ this.video.title }}</h5>
    </div>
  </div>

</template>

<script>

  import { mapActions } from 'vuex'

  export default {
    name: 'VideoListItem',
    props: {
      video: {
        type: Object,
      }
    },
    computed: {
      thumbnailUrl() {
        return this.video.thumbnail_url.replace(/{width}/, 740).replace(/{height}/, 416)
      }
    },
    methods: {
      ...mapActions(['setVideo']),
      onClick() {
        this.setVideo(this.video)
      }
    }
  }

</script>

<style lang="css" scoped>

  .video-card {
    position: relative;
  }

  .video-title {
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

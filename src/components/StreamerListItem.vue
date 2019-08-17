<template lang="html">

  <div class="eight wide tablet four wide computer column">
    <div class="streamer-card" @click="onClick">
      <img class="ui fluid image" :src="thumbnailUrl" alt="">
      <h5 class="streamer-title">{{ this.streamer.title }}</h5>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'StreamerListItem',
    props: ['streamer'],
    computed: {
      thumbnailUrl() {
        return this.streamer.thumbnail_url.replace(/{width}/, 740).replace(/{height}/, 416)
      }
    },
    methods: {
      onClick() {
        return this.$emit('streamerSelect', this.streamer)
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

</style>

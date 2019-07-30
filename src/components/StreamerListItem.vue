<template lang="html">
  <div class="col-xs-1-2 col-md-1-3">
    <div class="streamer-card" @click="onClick">
      <img :src="thumbnailUrl" alt="">
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
      return this.streamer.thumbnail_url.replace(/{width}/, 512).replace(/{height}/, 288);
    },
  },
  methods: {
    onClick() {
      return this.$emit('streamerSelect', this.streamer);
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
    bottom: 20px;
    color: white;
    font-weight: 200;
  }
</style>

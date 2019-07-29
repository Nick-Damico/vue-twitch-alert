<template lang="html">
  <div v-if="streamer">
    {{ this.streamer.title }}
  </div>
</template>

<script>
export default {
  name: 'StreamerCard',
  props: ['streamer'],
  computed: {
    thumbnailUrl() {
      return this.streamer.thumbnail_url.replace(/{width}/, 320).replace(/{height}/, 180);
    },
    filter(value, limit) {
      return value.substring(0, limit) + '...'
    }
  }
}
</script>

<style lang="css" scoped>
</style>

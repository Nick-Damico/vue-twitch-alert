<template lang="html">
  <li class="list-group-item" v-if="streamer" @click="onClick">
    {{ this.streamer.title }}
  </li>
</template>

<script>
export default {
  name: 'StreamerCard',
  props: ['streamer'],
  methods: {
    onClick() {
      return this.$emit('streamerSelect', this.streamer);
    }
  },
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

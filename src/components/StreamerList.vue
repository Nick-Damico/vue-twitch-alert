<template lang="html">
  <ul class="list-group" v-if="streamers">
    <StreamerCard v-for="streamer in streamers" :streamer="streamer" @streamerSelect="onStreamerSelect" />
  </ul>
</template>

<script>
import StreamerCard from './StreamerCard'

export default {
  name: 'StreamerList',
  props: ['streamers'],
  methods: {
    onStreamerSelect(streamer) {
      return this.$emit('streamerSelect', streamer);
    }
  },
  components: {
    StreamerCard
  }
}
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <div class="frow wrapper" v-if="streamers">
    <StreamerListItem v-for="streamer in streamers" :streamer="streamer" @streamerSelect="onStreamerSelect" />
  </div>
</template>

<script>
import StreamerCard from './StreamerCard'
import StreamerListItem from './StreamerListItem'

export default {
  name: 'StreamerList',
  props: ['streamers'],
  methods: {
    onStreamerSelect(streamer) {
      return this.$emit('streamerSelect', streamer);
    }
  },
  components: {
    StreamerCard,
    StreamerListItem
  }
}
</script>

<style lang="css" scoped>
</style>

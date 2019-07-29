<template lang="html">
  <div class="" v-if="streamers">
    <StreamerCard v-for="streamer in streamers" :streamer="streamer" />
  </div>
</template>

<script>
import StreamerCard from './StreamerCard'

export default {
  name: 'StreamerList',
  props: ['streamers'],
  components: {
    StreamerCard
  }
}
</script>

<style lang="css" scoped>
</style>

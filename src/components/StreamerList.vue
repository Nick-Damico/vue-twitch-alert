<template lang="html">

  <div class="ui grid stackable three column centered streamer-list" v-if="streamers">
    <StreamerListItem v-for="streamer in streamers" :streamer="streamer" @streamerSelect="onStreamerSelect" />
  </div>

</template>

<script>

  import StreamerListItem from './StreamerListItem'

  export default {
    name: 'StreamerList',
    props: ['streamers'],
    methods: {
      onStreamerSelect(streamer) {
        return this.$emit('streamerSelect', streamer)
      }
    },
    components: {
      StreamerListItem
    }
  }

</script>

<style lang="css" scoped>

  .streamer-list {
    padding-top: 30px;
  }

</style>

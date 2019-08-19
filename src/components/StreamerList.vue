<template lang="html">

  <div class="ui grid centered stackable streamer-list" v-if="streamers">
    <StreamerListItem v-for="streamer in streamers" :streamer="streamer" @streamerSelect="onStreamerSelect" />
    <Pagination :streamers="streamers" @streamerList="onStreamerList"/>
  </div>

</template>

<script>

  import StreamerListItem from './StreamerListItem'
  import Pagination from './Pagination'

  export default {
    name: 'StreamerList',
    data() {
      return {
        streamerList: []
      }
    },
    props: {
      streamers: {
        type: Array,
        default: []
      }
    },
    methods: {
      onStreamerSelect(streamer) {
        return this.$emit('streamerSelect', streamer)
      },
      onStreamerList(streamers) {
        return this.streamerList = streamers
      }
    },
    components: {
      StreamerListItem,
      Pagination
    }
  }

</script>

<style lang="css" scoped>

  .streamer-list {
    padding-top: 30px;
  }

</style>

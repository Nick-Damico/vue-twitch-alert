<template lang="html">

  <div class="streamer-container">
    <div class="ui grid centered stackable streamer-list" v-if="streamerList">
      <StreamerListItem v-for="streamer in streamerList"
                        v-bind:key="streamer.id"
                        :streamer="streamer"
                        :type="type" />
    </div>
    <Pagination :items="streamers" @paginate="onPaginate" />
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
      streamers: Array,
      type: {
        type: String,
        default: 'Live'
      }
    },
    methods: {
      onPaginate(streamers) {
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
  .streamer-container {
    display: flex;
    flex-grow: 2;
    flex-direction: column;
  }

  .streamer-list {
    flex-grow: 2;
    padding-top: 30px;
  }
</style>

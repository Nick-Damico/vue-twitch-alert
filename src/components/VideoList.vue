<template lang="html">
  <div class="video-list__container">
    <h4>VideoList</h4>
    <div class="ui grid centered stackable video-list" v-if="videoList">
      <VideoListItem v-for="video in videoList"
                        v-bind:key="video.id"
                        :video="video"
                        />
    </div>
    <Pagination :items="videos" @paginate="onPaginate" />
  </div>
</template>

<script>
import Pagination from './Pagination'
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  data() {
    return {
      videoList: []
    }
  },
  props: {
    videos: Array,
  },
  methods: {
    onPaginate(videos) {
      return this.videoList = videos
    }
  },
  components: {
    VideoListItem,
    Pagination
  }
}
</script>

<style lang="css" scoped>
</style>

<template lang="html">
<<<<<<< HEAD
  <h2>VideoList</h2>
</template>

<script>
export default {
  name: 'VideoList',
  props: {
    streamers: Array
=======
  <div class="video-list__container">
    <h4>VideoList</h4>
    <div class="ui grid centered stackable video-list" v-if="videoList">
      {{ videos }}
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
    videos: Array
  },
  components: {
    VideoListItem,
    Pagination
  },
  method: {
    onPaginate: function(videos) {
      this.videoList = videos
    }
>>>>>>> development
  }
}
</script>

<style lang="css" scoped>
</style>

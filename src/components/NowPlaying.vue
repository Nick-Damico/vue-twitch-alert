<template lang="html">
  <div id="nowPlaying" class="container">
    <VideoPlayer></VideoPlayer>
    <VideoDetails></VideoDetails>
  </div>
</template>

<script>
import VideoPlayer from './VideoPlayer'
import VideoDetails from './VideoDetails'

export default {
  name: 'NowPlaying',
  components: {
    VideoPlayer,
    VideoDetails
  }
}
</script>

<style lang="css" scoped>
  #nowPlaying {
    background-color: #6441A4;
    height: 100%;
    min-height: 60vh;
  }
</style>

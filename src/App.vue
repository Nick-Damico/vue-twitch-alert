<template>
  <div id="app" class="container-fluid">
    <NavigationBar />
    <NowPlaying />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import NowPlaying from './components/NowPlaying'

export default {
  name: 'app',
  components: {
    NavigationBar,
    NowPlaying
  }
}
</script>

<style scoped>
  #app {
    padding: 0;
    background-color: black;
  }
</style>

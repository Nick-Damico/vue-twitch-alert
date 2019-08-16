<template>

  <div class="container">
    <NavigationBar />
    <router-view></router-view>
  </div>

</template>

<script>
  import NavigationBar from './components/NavigationBar'

  export default {
    name: 'app',
    components: {
      NavigationBar
    }
  }

</script>

<style scoped>
</style>

<template>

  <div class="container">
    <NavigationBar />
    <router-view></router-view>
    <Footer />
  </div>

</template>

<script>
  import NavigationBar from './components/NavigationBar'
  import Footer from './components/Footer'

  export default {
    name: 'app',
    components: {
      NavigationBar,
      Footer
    }
  }

</script>

<style scoped>
</style>

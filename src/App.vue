<template>

  <div class="site-wrapper">
    <NavigationBar />
    <router-view class="site-content" />
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

  .site-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .site-content {
    flex: 1;
  }

</style>

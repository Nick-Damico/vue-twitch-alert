<template>

  <b-container fluid>
    <NavigationBar />
    <router-view></router-view>
  </b-container>
</template>

<script>

  import BootstrapVue from 'bootstrap-vue'
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

<template lang="html">

  <div class="app-header ui secondary pointing menu">
    <a href="/" class="active item">
        Image Storage
      </a>
    <div class="right menu">
      <a class="ui item" href="#" @click="login">
          Login
      </a>
    </div>
  </div>

</template>

<script>

  // Actions Modify Data, change State.
  import { mapActions } from 'vuex'

  export default {
    name: 'AppHeader',
    methods: mapActions(['login'])
  }

</script>

<style lang="css" scoped>
</style>

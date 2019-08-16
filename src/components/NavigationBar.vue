<template lang="html">

  <div class="ui pointing menu">
    <a href="/" class="active item">
      StreamerAlert
    </a>
    <a class="item">
      Top 20
    </a>
    <div class="right menu">
      <a class="ui item">
        Login
      </a>
    </div>
  </div>

</template>

<script>

  import { mapActions } from 'vuex'

  export default {
    name: 'NavigationBar',
    methods: mapActions(['login'])
  }

</script>

<style lang="css" scoped>
  .ui.menu {
    margin-bottom: 0;
  }
  
  .brand {
    color: var(--twitch-purple) !important;
  }

  .navbar {
    background: #212121;
  }

  .login-btn {
    color: white !important;
  }

</style>

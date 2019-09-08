<template lang="html">

  <div class="ui inverted pointing menu">
    <router-link to="/" class="item">
      StreamerAlert
    </router-link>
    <router-link to="/top-20" class="active item">
      Top 20
    </router-link>
    <div v-if="isLoggedIn" class="right menu">
      <a class="ui item">Notifications</a>
      <a class="ui item">Following</a>
      <a class="ui item">Account</a>
      <a class="ui item" @click="logout">Logout</a>
    </div>

    <div v-else class="right menu">
      <a @click="login" class="ui item">
          Login with Twitch
        </a>
    </div>
  </div>

</template>

<script>

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'NavigationBar',
    methods: mapActions(['login', 'logout']),
    computed: mapGetters(['isLoggedIn'])
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

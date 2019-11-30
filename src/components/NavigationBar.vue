<template lang="html">

  <nav class="ui inverted pointing menu nav">
    <router-link to="/" class="item">
      StreamerAlert
    </router-link>
    <router-link to="/top-20" class="active item">
      Top 20
    </router-link>
    <div v-if="isLoggedIn" class="right menu">
      <router-link to="/notifications" class="ui item">Notifications</router-link>
      <router-link to="/following" class="ui item">Following</router-link>
      <a class="ui item">Account</a>
      <a class="ui item" @click="logout">Logout</a>
    </div>

    <div v-else class="right menu">
      <a @click="login" class="ui item">
          Login with Twitch
        </a>
    </div>
  </nav>

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

  .nav {
    margin-bottom: 0;
    border-bottom: 1px solid var(--menu-board-color) !important;
  }

  .brand {
    color: var(--twitch-purple) !important;
  }

  .login-btn {
    color: var(--white) !important;
  }

</style>

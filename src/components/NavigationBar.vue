<template lang="html">
  <div class="frow navbar">
    <div class="col-md-1-1">
      <div class="wrapper">
        <nav>
          <h2 class="brand">StreamerAlert</h2>
          <div class="nav-right">
            <div class="search-container">
              <input type="text" name="streamer[name]" placeholder="search" />
            </div>
            <a href="#" class="login-btn" @click="login">Login</a>
          </div>
        </nav>
      </div>
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
  .brand {
    margin-top: 0;
    font-weight: 300;
    color: var(--twitch-purple);
  }

  .navbar {
    background: #212121;
  }

  nav {
    display: flex;
    flex-direction: row;
  }

  .nav-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
  }

  .login-btn {
    padding: 8px 15px;
    background: #530ae0;
    color: white;
    border-radius: 6px;
    margin-left: 1rem;
    transition: background-color .3s ease-in-out;
  }

  .login-btn:hover,
  .login-btn:active {
    background-color: #4006af;
  }

</style>

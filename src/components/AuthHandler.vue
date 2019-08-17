<template lang="html">
  <div class="row">
    <div class="ui one column centered grid">
      <h2 class="ui icon header centered">
        <i class="sync icon"></i>
        <div class="content">
          Authenticating Please Wait...
          <div class="sub header">Via TwitchAPI</div>
        </div>
      </h2>
    </div>
  </div>

</template>

<script>

  import { mapActions } from 'vuex'

  export default {
    name: 'AuthHandler',
    methods: mapActions(['finalizeLogin']),
    created() {
      this.finalizeLogin(window.location.hash)
    }
  }

</script>

<style lang="css" scoped>

  .column {
    margin-top: 20px;
  }

  h2 {
    font-weight: 300;
    text-align: center;
    padding: 2rem 0;
  }

  .content, .header {
    color: white;
  }

</style>

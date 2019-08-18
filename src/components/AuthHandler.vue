<template lang="html">

    <div class="ui items">
      <div class="item">
        <i class="sync icon huge"></i>
        <h3 class="ui heading">Authenticating Please Wait...</h3>
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

  @keyframes loading {
      from {transform: rotate(0deg)}
      to { transform: rotate(360deg)}
  }

  @-webkit-keyframes pulsate {
    0% { opacity: 0.5; }
    50% { opacity: 1.0; }
    100% { opacity: 0.5; }
  }


  .icon {
    animation: loading 1.6s infinite linear;
  }

  .items {
    min-height: 40vh;
    display: flex;
    justify-content: center;
  }

  .item {
    color: white;
    text-align: center;
  }

  .heading {
    animation: pulsate 1.6s infinite linear;
    color: var(--twitch-purple)
  }

</style>

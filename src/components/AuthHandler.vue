<template lang="html">
  <h2>
    Now Loading...
  </h2>
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
  h2 {
    font-weight: 300;
    text-align: center;
    color: white;
    padding: 2rem 0;
  }
</style>

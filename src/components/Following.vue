<template lang="html">

  <div class="ui inverted center aligned segment">
    <div class="ui text">
      <h1 class="ui dividing header inverted text-slim">
        Following
      </h1>
    </div>
    <StreamerList :streamers="followers" />
  </div>

</template>

<script>
import StreamerList from './StreamerList'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Followers',
  components: {
    StreamerList
  },
  computed: {
    ...mapGetters({
      followers: 'getFollowers'
    })
  },
  methods: {
    ...mapActions(['fetchFollowed'])
  },
  created() {
    this.fetchFollowed();
  }
}
</script>

<style lang="css" scoped>

  h1 {
    margin-top: 20px !important;
    text-align: left;
    font-weight: 300 !important;
  }
</style>

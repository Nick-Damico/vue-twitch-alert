<template lang="html">

  <div class="masthead ui inverted vertical masthead center aligned segment">
    <div class="ui text container">
      <h1 class="ui inverted masthead">
        Followers
      </h1>
      <StreamerList :streamers="followers" />
    </div>
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
    if (this.followers.length < 1) {
      this.fetchFollowed()
    }
  }
}
</script>

<style lang="css" scoped>
</style>

<template lang="html">

  <div class="ui inverted center aligned segment following">
    <SideBar />
    <div class="ui text">
      <h2 class="ui inverted text-slim following__title">
        Following
      </h2>
    </div>
    <div class="ui item menu inverted following__menu" :class="menuKlasses">
      <a
        v-for="item in menuItems"
        v-on:click="onSelect($event)"
        v-bind:key="item"
        class="item menu__item"
        :class="{active: isActive(item)}">{{ item }}
      </a>
    </div>
      <StreamerList v-if="menuSelection === 'Live'" :streamers="liveFollowers" :type="menuSelection" />
      <StreamerList v-else-if="menuSelection === 'Offline'" :streamers="offlineFollowers" :type="menuSelection" />
      <VideoList v-else-if="menuSelection === 'Recent VODS'" :videos="videos" />
  </div>

</template>

<script>
import StreamerList from './StreamerList'
import VideoList from './VideoList'
import SideBar from './SideBar'

import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'Followers',
  data: () => {
    return {
      menuItems: ['Live', 'Offline', 'Recent VODS'],
      menuKlasses: ['four'],
      menuSelection: 'Live'
    }
  },
  components: {
    StreamerList,
    VideoList,
    SideBar
  },
  computed: {
    ...mapGetters({
      liveFollowers: 'getFollowers',
      offlineFollowers: 'getOffline',
      videos: 'getVideos'
    })
  },
  methods: {
    ...mapActions(['fetchFollowed']),
    isActive: function(item) {
      return item === this.menuSelection
    },
    onSelect: function(event) {
      const { target } = event
      this.menuSelection = target.innerText
    }
  },
    created() {
      this.fetchFollowed()
    }
  }
</script>

<style lang="css" scoped>

  .following__title {
    font-size: 3rem;
    margin-top: 20px !important;
    text-align: left;
    font-weight: 300 !important;
  }

  .ui.inverted.menu .menu__item.active {
    color: var(--text-black) !important;
    background: #a8ff78 !important;
    background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78) !important;
    background: linear-gradient(to right, #78ffd6, #a8ff78) !important;
  }

  .following__menu {
    border-bottom: 1px solid var(--menu-board-color) !important;
  }

</style>

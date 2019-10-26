<template lang="html">

  <div class="ui inverted center aligned segment following">
    <div class="ui text">
      <h2 class="ui inverted text-slim following__title">
        Following
      </h2>
    </div>
    <div class="ui item menu inverted following__menu" :class="menuKlasses">
      <a
        v-for="item in menuItems"
        v-on:click="onSelect($event)"
        class="item menu__item"
        :class="{active: isActive(item)}">{{ item }}
      </a>
    </div>
    <StreamerList :streamers="liveFollowers" />
  </div>

</template>

<script>
import StreamerList from './StreamerList'
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'Followers',
  data: () => {
    return {
      menuItems: ['Live', 'Offline', 'All', 'Recent VODS'],
      menuKlasses: ['four']
    }
  },
  components: {
    StreamerList
  },
  computed: {
    ...mapGetters({
      liveFollowers: 'getFollowers',
      offlineFollowers: 'getOffline'
    })
  },
  methods: {
    ...mapActions(['fetchFollowed']),
    isActive: item => {
      return item === 'Live'
    },
    onSelect: (event) => {
      const links = [...document.querySelectorAll('.menu__item')]
      const { target } = event
      links.filter(link => {
        if (link === target) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
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

  .menu__item.active {
    color: var(--text-black) !important;
    background: #a8ff78 !important;
    background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78) !important;
    background: linear-gradient(to right, #78ffd6, #a8ff78) !important;
  }

  .following__menu {
    border-bottom: 1px solid var(--menu-board-color) !important;
  }

</style>

<template lang="html">
  <div v-if="games" class="box-art-scroller">
    <div class="ui text container center aligned box-art__text-container">
      <h3 class="box-art__title text-slim">{{ title }}</h3>
    </div>
    <div class="box-art__scroller">
      <div v-for="game in games">
        <img class="box-art" :src="boxartThumbnailUrl(game)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'BoxArtScroller',
  props: ['title'],
  methods: {
    boxartThumbnailUrl(game) {
      if (game) {
        return game.box_art_url.replace(/{width}/, 188).replace(/{height}/, 250)
      }
    }
  },
  computed: {
    ...mapGetters({
      games: 'allGames'
    })
  }
}
</script>

<style lang="css" scoped>
  .box-art-scroller {
    /* height: 300px; */
    background: #a8ff78;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .box-art__text-container {
    padding-top: 20px;
  }
  .box-art__title {
    font-size: 1.8rem
  }
  .box-art {
    margin : 0 0.25rem;
  }
  .box-art__scroller {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 300px;
    overflow-x: hidden;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .box-art__scroller::-webkit-scrollbar {
    display: none;
  }
</style>

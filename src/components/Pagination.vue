<template lang="html">

  <div class="ui inverted pagination menu">
    <a v-for="item in pages" class="active item">
      {{ item }}
    </a>
  </div>

</template>

<script>

  export default {
    name: 'Pagination',
    data() {
      return {
        pages: 1,
        perPage: 5
      }
    },
    props: {
      streamers: {
        type: Array,
        required: true
      }
    },
    computed: {
      numberOfPages() {
        this.data.pages = Math.ceil(this.streamers.length / this.data.perPage)
      }
    },
    watch: {
      streamers: {
        handler: function(newVal, oldVal) {
            this.pages = Math.ceil(newVal.length / this.perPage)
        }
      }
    }
  }

</script>

<style lang="css" scoped>

</style>

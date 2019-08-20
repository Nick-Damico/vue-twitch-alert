<template lang="html">

  <div class="ui sixteen wide inverted pagination menu">
    <a v-for="pageNum in numberOfPages" class="active item" @click="onUpdatePage(parseInt(pageNum))">
              {{ pageNum }}
            </a>
  </div>

</template>

<script>

  export default {
    name: 'Pagination',
    data() {
      return {
        currentPage: 1,
        numberOfPages: 1,
        perPage: 6
      }
    },
    props: {
      streamers: {
        type: Array,
        required: true
      }
    },
    methods: {
      onUpdatePage: function(pageNum = 1) {
        this.currentPage = pageNum
        let start = (pageNum - 1) * this.perPage
        let end = start + this.perPage
        let streamerList = this.streamers.slice(start, end)

        return this.$emit('paginate', streamerList)
      }
    },
    watch: {
      streamers: function(newVal, oldVal) {
        this.numberOfPages = Math.ceil(newVal.length / this.perPage)
        this.onUpdatePage()
      }
    }
  }

</script>

<style lang="css" scoped>

</style>

<template lang="html">

  <div class="ui container">
    <div class="ui inverted centered pagination menu">
      <a v-for="pageNum in pageCount" class="active item" @click="onUpdatePage(parseInt(pageNum))">
            {{ pageNum }}
          </a>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'Pagination',
    data() {
      return {
        currentPage: 1,
        pageCount: 1,
        itemsPerPage: 6
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
        let start = (pageNum - 1) * this.itemsPerPage
        let end = start + this.itemsPerPage
        let streamerList = this.streamers.slice(start, end)

        return this.$emit('paginate', streamerList)
      }
    },
    watch: {
      streamers: function(newVal, oldVal) {
        this.pageCount = Math.ceil(newVal.length / this.itemsPerPage)
        this.onUpdatePage()
      }
    }
  }

</script>

<style lang="css" scoped>

</style>

<template lang="html">

  <div id="pagination" class="ui container">
    <div class="ui inverted centered pagination menu">
      <a v-for="pageNum in pageCount"
      v-bind:key="pageNum"
      class="active item"
      @click="onUpdatePage(parseInt(pageNum))">{{ pageNum }}</a>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'Pagination',
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 6
      }
    },
    props: {
      streamers: {
        type: Array,
        required: true
      }
    },
    computed: {
      pageCount: function() {
        return Math.ceil(this.streamers.length / this.itemsPerPage)
      }
    },
    methods: {
      onUpdatePage: function(pageNum = 1) {
        this.currentPage = pageNum
        let start = (pageNum - 1) * this.itemsPerPage
        let end = start + this.itemsPerPage
        let streamerList = this.streamers.slice(start, end)

        return this.$emit('paginate', streamerList)
      },

    },
    watch: {
      streamers: function(newVal, oldVal) {
        if(newVal !== oldVal) { this.onUpdatePage() }
      }
    },
    mounted: function() {
      this.onUpdatePage()
    }
  }

</script>

<style lang="css" scoped>

  #pagination {
    margin: 20px 0;
    text-align: center;
  }

</style>

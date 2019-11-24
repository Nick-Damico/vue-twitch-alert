<template lang="html">

  <div id="pagination" class="ui container">
    <div class="ui inverted centered pagination menu">
      <a v-for="pageNum in pageCount"
      v-bind:key="pageNum"
      class="pagination__item item"
      :class="{active: isActive(pageNum)}"
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
      items: {
        type: Array,
        required: true
      }
    },
    computed: {
      pageCount: function() {
        return Math.ceil(this.items.length / this.itemsPerPage)
      }
    },
    methods: {
      onUpdatePage: function(pageNum = 1) {
        this.currentPage = pageNum
        let start = (pageNum - 1) * this.itemsPerPage
        let end = start + this.itemsPerPage
        let itemList = this.items.slice(start, end)

        return this.$emit('paginate', itemList)
      },
      isActive: function(pageNum) {
        return this.currentPage == pageNum
      }
    },
    watch: {
      items: function(newVal, oldVal) {
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

  #pagination .active.item  {
    color: var(--text-black) !important;
    background: #a8ff78 !important;
    background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78) !important;
    background: linear-gradient(to right, #78ffd6, #a8ff78) !important;
    transition: transform .2s ease-in;
  }

  #pagination .item:hover,
  #pagination .item:active {
    transform: scale(1.1);
  }

</style>

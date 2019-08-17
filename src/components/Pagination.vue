<template lang="html">

  <div class="ui inverted pagination menu">
    <a class="active item">
      {{ this.pageCount }}
    </a>
  </div>

</template>

<script>

  export default {
    name: 'Pagination',
    props: {
      pageCount: Number
    }
  }

</script>

<style lang="css" scoped>

</style>

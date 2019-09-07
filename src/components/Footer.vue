<template lang="html">
  <div class="ui container footer">
    Footer
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear: () => {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="css" scoped>
  .main-footer {
    height: 35px;
    background-color: var(--twitch-purple)
  }
</style>

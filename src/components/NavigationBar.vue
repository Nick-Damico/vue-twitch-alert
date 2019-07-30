<template lang="html">
  <div class="frow navbar">
    <div class="col-md-1-1">
      <div class="wrapper">
        <nav>
          <h2 class="brand">StreamerAlert</h2>
          <div class="search-container">
            <input type="text" name="streamer[name]" placeholder="search" />
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'NavigationBar'
  }

</script>

<style lang="css" scoped>
  .brand {
    margin-top: 0;
    font-weight: 300;
    color: var(--twitch-purple);
  }

  .navbar {
    background: #212121;
  }

  nav {
    display: flex;
    flex-direction: row;
  }

  .search-container {
    margin-left: auto;
  }


</style>

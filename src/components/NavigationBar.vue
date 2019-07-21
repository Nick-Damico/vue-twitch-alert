<template lang="html">
  <div id="navigationBar" class="container">
    <nav class="navbar navbar-dark">
      <span class="navbar-brand mb-0 h1">TwitchAlert</span>
      <div>
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">AlertIcon</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Icon<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">email@twitchalert.com</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style lang="css" scoped>
  #navigationBar {
    background-color: black;
  }
  ul {
    display: flex;
    flex-direction: row;
  }
  ul li:nth-child(-n+2) {
    margin-right: 8px;
  }
</style>

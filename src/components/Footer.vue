<template lang="html">
  <footer>
    <div class="ui two column grid container footer-content">
      <div class="column">
        <h5>Streamer Alert</h5>
        <p>
          Brings you a better way to manage your Twitch experience. An easy to use
          ui customized for <b>You</b>, will get into the games you want faster with
          less of a hassle.
        </p>
      </div>
      <div class="column">
        <h5>Navigation</h5>
        <div class="ui list">
          <div class="item">
            <i class="users icon"></i>
            <div class="content">
              Following
            </div>
          </div>
          <div class="item">
            <i class="marker icon"></i>
            <div class="content">
              The Top 20
            </div>
          </div>
          <div class="item">
            <i class="settings icon"></i>
            <div class="content">
              Account Settings
            </div>
          </div>
          <div class="item">
            <i class="info icon"></i>
            <div class="content">
              Notifications
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <small>&copy; {{ currentYear }}. StreamerAlert</small>
    </div>
  </footer>
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
  footer {
    background-color: var(--twitch-purple);
    width: 100%;
    padding: 1rem 0 0 0;
  }

  .footer-copyright {
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
    color: var(--text-white);
    background-color: var(--twitch-purple-drk);
  }
</style>

<template lang="html">

  <b-col sm="6" lg="4">
    <b-card no-body class="streamer__cards overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="thumbnailUrl()" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              {{ filter(streamer.title, 40)}}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-col>

</template>

<script>

  export default {
    name: 'StreamerList',
    props: ['streamer'],
    methods: {
      thumbnailUrl() {
        return this.streamer.thumbnail_url.replace(/{width}/, 320).replace(/{height}/, 180);
      },
      filter(value, limit) {
        return value.substring(0, limit) + '...'
      }
    }
  }

</script>

<style lang="css" scoped>
  .streamer__cards {
    margin-bottom: .75rem;
    margin-top: .75rem;
  }
</style>

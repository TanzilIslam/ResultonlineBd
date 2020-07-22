<template>
  <div class="channel-cover">
    <b-card overlay img-height="80" :img-src="image" text-variant="white">
      <b-card-text text-tag="h2" class="channel-cover-title">
        {{ ChannelCoverTitle }}</b-card-text
      >
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["ChannelCoverTitle", "image"]
};
</script>

<style scoped>
/* .channel-cover {
} */

.channel-cover-title {
  text-align: center !important;
}
</style>
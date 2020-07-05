<template>
  <div class="question-and-answere">
    <div class="cover mt-2">
      <b-card
        overlay
        img-height="190"
        :img-src="require('~/assets/user/dummyImages/channelCover.jpg')"
        text-variant="white"
      >
        <b-card-text text-tag="h2" class="channel-cover-title">
          JavaScript</b-card-text
        >
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .question-and-answere{

} */
.channel-cover-title {
  margin-top: 50px;
  text-align: center !important;
}
</style>
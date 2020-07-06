<template>
  <div class="question-and-answere">
    <div class="cover mt-2 mb-3">
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
    <b-row>
      <b-col
        cols="10"
        sm="10"
        md="10"
        lg="10"
        class="mb-3"
        v-for="i in 5"
        :key="i"
      >
        <b-card no-body class="card-body">
          <div class="d-flex justify-content-around">
            <div>
              <h4><strong>This is the demo title of QandA</strong></h4>
              <p class="text-muted">
                7 July,2020
                <b-icon icon="clock-fill" class="ml-1"></b-icon>
              </p>
              <p>
                this will be the deccriprion text of the article.this will be in
                a short length.about 30 or 40 key
              </p>
            </div>
            <div>
              <b-card-img
                src="~/assets/user/dummyImages/channelCover.jpg"
                class="rounded"
                height="100"
                width="100"
              ></b-card-img>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
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
.card-body {
  border-radius: 8px;
}
</style>
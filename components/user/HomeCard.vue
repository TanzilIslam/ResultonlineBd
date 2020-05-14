<template>
  <div class="home-card">
    <div class="custom-home-card rounded">
      <b-card no-body style="max-width: 40rem;" class="mb-4">
        <div class="d-flex">
          <div class="ml-3 mt-3 mb-2">
            <b-card-img-lazy
              blankColor="#bbb"
              :blank="false"
              class="rounded-circle p-1 img-logo"
              :src="article.contentowners.authorsprofilrimg"
            ></b-card-img-lazy>
          </div>
          <div class="mt-4 ml-3 mb-2">
            <!-- <b-card-text> -->
            <n-link :to="`/authorProfile/${article.contentowners.authorsname}`">
              <h5 class="custome-home-card-title">
                {{ article.contentowners.authorsname }}
              </h5>
            </n-link>
            <p class="text-muted">{{ article.release_date }}</p>
            <!-- </b-card-text> -->
          </div>
        </div>
        <h5 class="ml-4">{{ article.title }}</h5>
        <nuxt-link :to="`/detailPost/${article.slug}`">
          <b-card-img-lazy
            blankColor="#bbb"
            :blank="false"
            :src="article.photo"
            bottom
            height="230"
            width="280"
          >
          </b-card-img-lazy>
        </nuxt-link>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
/* .home-card {

} */
.custom-home-card {
  cursor: pointer;
}
.img-logo {
  width: 70px !important;
  height: 70px !important;
}
a {
  color: black !important;
  text-decoration: none !important;
}
</style>

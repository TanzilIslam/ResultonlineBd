<template>
  <div class="home-card">
    <div class="custom-home-card rounded">
      <b-card no-body style="max-width: 40rem;" class="mb-4">
        <div class="d-inline-flex">
          <div class="ml-3 mt-3 mb-2">
            <b-card-img-lazy
              blank-color="#bbb"
              class="rounded-circle p-1 img-logo"
              :src="article.contentowners.authorsprofilrimg"
            ></b-card-img-lazy>
          </div>

          <div class="mt-4 ml-3 mb-2">
            <div class="d-flex">
              <div class="">
                <nuxt-link
                  prefetch
                  :to="`/authorProfile/${article.contentowners.authorsname}`"
                >
                  <h5>
                    {{ article.contentowners.authorsname }}
                  </h5>
                </nuxt-link>
              </div>

              <div class="ml-auto">
                <b-icon icon="reply"></b-icon>
              </div>
            </div>
            <!-- <b-card-text text-tag="h5" class="custome-home-card-title">
                {{ article.contentowners.authorsname }}
                <b-icon class="ml-auto" icon="reply"></b-icon>
              </b-card-text> -->

            <b-card-text text-tag="p" class="text-muted"
              >{{ article.release_date }}
              <b-icon icon="clock-fill" variant="gray"></b-icon>
            </b-card-text>
          </div>
        </div>

        <h5 class="ml-4">{{ article.title }}</h5>
        <nuxt-link prefetch :to="`/detailPost/${article.slug}`">
          <div @click="setview">
            <b-card-img-lazy
              blank-color="#bbb"
              :src="article.photo"
              bottom
              height="230"
              width="280"
            >
            </b-card-img-lazy>
          </div>
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
  },
  methods: {
    setview() {
      try {
        this.$axios.$put(process.env.baseUrl + `/count/${this.article.slug}`, {
          view: this.article.view + 1
        });
        // this.$store.dispatch("countView/setViewcount", this.article.slug);
      } catch (e) {
        alert("No more data" + e);
      }
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

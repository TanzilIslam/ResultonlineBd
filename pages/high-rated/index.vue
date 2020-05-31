<template>
  <div class="high-rated">
    <Carousel />
    <Breadcrumb :highRatedActive="true" />
    <div class="top-container">
      <b-row>
        <b-col
          sm="6"
          md="4"
          lg="4"
          xl="4"
          v-for="(article, index) in HighRatedArticles"
          :key="index"
        >
          <nuxt-link prefetch :to="`/detailPost/${article.slug}`">
            <ChannelCommonCard :article="article" :data-index="index" />
          </nuxt-link>
        </b-col>
      </b-row>
      <!-- Pagination Start End -->
      <div class="myPagination">
        <div class="text-center mt-5 mb-3">
          <b-button variant="dark" @click="loadData">Load More</b-button>
        </div>
      </div>
      <!-- Pagination End -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "default",
  head() {
    return {
      title: "High Rated Articles- ResultOnlineBd",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Here you can find all the high rated articles  about technology,education,celebrity,history,islam and different programming cool stuffs."
        }
      ]
    };
  },
  async fetch() {
    await this.$axios
      .$get(process.env.baseUrl + `/high_ratetd`)
      .then(posts =>
        this.$store.dispatch("highRated/FetchHighRatedArticles", posts.results)
      );
  },
  computed: mapState({
    HighRatedArticles: state => state.highRated.HighRatedArticles
  }),
  data() {
    return {
      currentPage: 2
    };
  },
  methods: {
    async loadData() {
      try {
        await this.$store.dispatch("highRated/FetchMoreHighRatedArticles");
      } catch (e) {
        alert("No more data" + e);
      }
    }
  }
};
</script>

<style scoped>
/* .top{

} */
.high-rated-container {
  margin-left: 30px;
  margin-right: 30px;
}
a {
  color: black !important;
  text-decoration: none;
}
</style>
<template>
  <div class="top">
    <Carousel />
    <Breadcrumb :topActive="true" />
    <div class="top-container">
      <b-row>
        <b-col
          sm="6"
          md="4"
          lg="4"
          xl="4"
          v-for="(article, index) in TopArticles"
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
      title: "Top Articles - ResultOnlineBd",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Here you can find all the top articles  about technology,education,celebrity,history,islam and different programming cool stuffs."
        }
      ]
    };
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("FetchTopArticles");
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch data at this time.Please try again."
      });
    } finally {
    }
  },
  computed: mapState({
    TopArticles: state => state.TopArticles
  }),
  data() {
    return {
      currentPage: 2
    };
  },
  methods: {
    async loadData() {
      try {
        let moreData = await this.$axios
          .$get(process.env.baseUrl + "/TopContent?page=" + this.currentPage)
          .then(item =>
            item.results.forEach(element => {
              this.$store.dispatch("FetchMoreTopArticles", element);
            })
          );
        this.currentPage = this.currentPage + 1;
      } catch (e) {
        alert("No more data");
      }
    }
  }
};
</script>

<style scoped>
/* .top{

} */
.top-container {
  margin-left: 30px;
  margin-right: 30px;
}
a {
  color: black !important;
  text-decoration: none;
}
</style>
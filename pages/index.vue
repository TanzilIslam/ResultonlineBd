<template>
  <div class="home">
    <Carousel />
    <Breadcrumb :allActive="true" />
    <b-row>
      <b-col sm="12" md="3" lg="3" xl="3">
        <SideBar />
      </b-col>
      <b-col sm="12" md="5" lg="5" xl="5">
        <HomeCard
          v-for="(article, index) in HomeArticles"
          :key="index"
          :article="article"
          :data-index="index"
        />
      </b-col>
      <b-col sm="12" md="4" lg="4" xl="4">
        <LatestCard />
      </b-col>
    </b-row>
    <div class="myPagination">
      <div class="text-center mt-5 mb-3">
        <b-button variant="dark" @click="loadData">Load More</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "default",
  head() {
    return {
      title: "ResultOnlineBd - Home Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Here you can find all the latest information about technology,mobile phones,educations etc."
        }
      ]
    };
  },
  data() {
    return {
      currentPage: 2
    };
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("FetchHomeArticles");
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch data at this time.Please try again."
      });
    } finally {
    }
  },
  computed: mapState({
    HomeArticles: state => state.HomeArticles
  }),
  methods: {
    async loadData() {
      try {
        let moreData = await this.$axios
          .$get(process.env.baseUrl + "/?page=" + this.currentPage)
          .then(item =>
            item.results.forEach(element => {
              this.$store.dispatch("FetchMoreHomeArticles", element);
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
/* .home{

} */
</style>

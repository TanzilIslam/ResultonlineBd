<template>
  <div class="home">
    <Carousel />
    <Breadcrumb :allActive="true" />
    <b-row>
      <b-col sm="12" md="3" lg="3" xl="3">
        <SideBar />
      </b-col>
      <b-col sm="12" md="5" lg="5" xl="5">
        <VclHomeCard v-if="$fetchState.pending" />
        <h4 v-else-if="$fetchState.error">
          Error while fetching posts: {{ error }}
        </h4>
        <HomeCard
          v-else
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
    return {};
  },
  async fetch() {
    await this.$axios
      .$get(process.env.baseUrl)
      .then(posts =>
        this.$store.dispatch("home/FetchHomeArticles", posts.results)
      );
  },
  computed: mapState({
    HomeArticles: state => state.home.HomeArticles
  }),
  methods: {
    async loadData() {
      try {
        await this.$store.dispatch("home/FetchMoreHomeArticles");
      } catch (e) {
        alert("No more data" + e);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  }
};
</script>

<style scoped>
/* .home{

} */
</style>

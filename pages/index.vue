<template>
  <div class="home">
    <b-container>
      <Carousel />
    </b-container>
    <Breadcrumb :allActive="true" />
    <b-row>
      <b-col sm="12" md="3" lg="3" xl="3">
        <SideBar />
      </b-col>
      <b-col sm="12" md="5" lg="5" xl="5">
        <VclHomeCard v-if="$fetchState.pending" />
        <p v-else-if="$fetchState.error">
          Error while fetching posts: {{ $fetchState.error.message }}
        </p>
        <HomeCard
          v-else
          v-for="(article, index) in HomeArticle"
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
        <b-button variant="dark" @click="fetchMoreData()">Load More</b-button>
      </div>
    </div>
  </div>
</template>

<script>
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
  async fetch() {
    let data = await this.$axios
      .$get(process.env.baseUrl + "/")
      .then(item => this.$store.dispatch("setHomeArticle", item.results));
  },
  methods: {
    async fetchMoreData() {
      let moreData = await this.$axios
        .$get(process.env.baseUrl + "/?page=" + this.currentPage)
        .then(item =>
          item.results.forEach(element => {
            this.$store.dispatch("setLoadMoreHomeArticle", element);
          })
        );
      this.currentPage = this.currentPage + 1;
    }
  },
  computed: {
    HomeArticle() {
      var self = this;
      return self.$store.getters.getHomeArticle;
    }
  }
};
</script>

<style scoped>
/* .home{

} */
</style>

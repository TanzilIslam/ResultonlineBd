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
          Error while fetching posts: {{ $fetchState.error.message }}
        </h4>
        <HomeCard
          v-else
          v-for="(article, index) in HomeArticles"
          :key="index"
          :article="article"
          :data-index="index"
        />
      </b-col>
      <!-- Latest card start -->
      <b-col sm="12" md="4" lg="4" xl="4">
        <div class="latest-home-card">
          <h5 class="custom-latest-title">Latest</h5>
          <b-list-group>
            <b-list-group-item
              v-for="(article, index) in LatestArticles"
              :key="index"
              :data-index="index"
              class="custom-list-item"
            >
              <nuxt-link prefetch :to="`/detailPost/${article.slug}`">
                <div class="d-flex">
                  <div>
                    <b-img
                      class="custom-latest-image"
                      :src="article.photo"
                    ></b-img>
                  </div>
                  <div class="custom-latest-text">
                    {{ article.title }}
                    <p class="mt-4 text-muted">{{ article.release_date }}</p>
                  </div>
                </div>
              </nuxt-link>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
      <!-- Latest card End -->
    </b-row>

    <!-- pagination Start -->
    <div class="myPagination">
      <div class="text-center mt-5 mb-3">
        <span v-if="!loaded"
          ><b-spinner
            style="width: 2rem; height: 2rem;"
            label="Loading..."
          ></b-spinner
        ></span>
        <b-button v-else-if="loaded" variant="dark" @click="loadData">
          <span> Load More</span>
        </b-button>
      </div>
    </div>
    <!-- pagination End -->
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
      loading: false,
      loaded: true
    };
  },
  async fetch() {
    await this.$axios
      .$get(process.env.baseUrl)
      .then(posts =>
        this.$store.dispatch("home/FetchHomeArticles", posts.results)
      );
    await this.$axios
      .$get(process.env.baseUrl + `/latestdata`)
      .then(posts => this.$store.dispatch("home/FetchLatestArticles", posts));
  },
  computed: mapState({
    HomeArticles: state => state.home.HomeArticles,
    LatestArticles: state => state.home.LatestArticles
  }),
  methods: {
    async loadData() {
      this.loaded = false;
      try {
        await this.$store.dispatch("home/FetchMoreHomeArticles");
      } catch (e) {
        alert("No more data" + e);
      }
      this.loaded = true;
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
.latest-home-card {
  background: #fff;
  box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
.custom-latest-title {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 20px;
  color: rgb(20, 23, 24);
  padding: 0 12px;
  border-bottom: 1px solid #eee;
}
.custom-list-item {
  border: none !important;
  margin-bottom: 5px;
  cursor: pointer;
}
.custom-latest-image {
  width: 80px;
  height: 80px;
  left: 10px;
  top: 10px;
}
.custom-latest-text {
  margin-left: 20px;
  margin-top: 10px;
  text-align: left;
  line-height: 20px;
  font-size: 14px;
}
a {
  color: black !important;
  text-decoration: none !important;
}
</style>

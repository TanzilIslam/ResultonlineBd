<template>
  <div class="top">
    <Carousel />
    <Breadcrumb :topActive="true" />
    <div class="top-container">
      <VclChannelCommonCard v-if="$fetchState.pending" />
      <h4 v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </h4>
      <div v-else>
        <b-row>
          <b-col
            sm="6"
            md="3"
            lg="3"
            xl="3"
            v-for="(article, index) in TopArticles"
            :key="index"
          >
            <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
            <CheckSmallCard :article="article" :data-index="index" />
            <!-- </nuxt-link> -->
          </b-col>
        </b-row>
      </div>
      <!-- Pagination Start End -->
      <!-- <div class="myPagination">
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
      </div> -->
      <!-- Pagination End -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "default",
  data() {
    return {
      loaded: true,
      seoObject: {}
    };
  },
  head() {
    return {
      title: this.seoObject.page_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.seoObject.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.seoObject.meta_keyword
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: this.seoObject.page_title
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.seoObject.page_title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.seoObject.description
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.seoObject.page_title
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article.text"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: ""
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.seoObject.description
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.seoObject.meta_image
        }
      ]
    };
  },
  async fetch() {
    var self = this;
    await self.$axios
      .$get(process.env.baseUrl + "/s/all/")
      .then(function(posts) {
        self.seoObject = posts;
      })
      .catch(function(error) {
        console.log(error);
      });

    await self.$axios
      .$get(process.env.baseUrl + `/TopContent`)
      .then(posts =>
        self.$store.dispatch("top/FetchTopArticles", posts.results)
      );
  },
  computed: mapState({
    TopArticles: state => state.top.TopArticles
  }),
  methods: {
    async loadData() {
      try {
        await this.$store.dispatch("top/FetchMoreTopArticles");
      } catch (e) {
        // alert("No more data");
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
/* .top{

} */
/* .top-container {
  margin-left: 30px;
  margin-right: 30px;
} */
a {
  color: black !important;
  text-decoration: none;
}
</style>

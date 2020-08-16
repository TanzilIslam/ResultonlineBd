<template>
  <div class="high-rated">
    <Carousel />
    <Breadcrumb :highRatedActive="true" />
    <div class="top-container">
      <b-row>
        <b-col
          sm="6"
          md="3"
          lg="3"
          xl="3"
          v-for="(article, index) in HighRatedArticles"
          :key="index"
        >
          <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
          <ChannelCommonCard :article="article" :data-index="index" />
          <!-- </nuxt-link> -->
        </b-col>
      </b-row>
      <!-- Pagination Start End -->
      <!-- <div class="myPagination">
        <div class="text-center mt-5 mb-3">
          <b-button variant="dark" @click="loadData">Load More</b-button>
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
      .$get(process.env.baseUrl + `/high_ratetd`)
      .then(posts =>
        self.$store.dispatch("highRated/FetchHighRatedArticles", posts.results)
      );
  },
  computed: mapState({
    HighRatedArticles: state => state.highRated.HighRatedArticles
  }),
  data() {
    return {
      currentPage: 2,
      seoObject: {}
    };
  },
  methods: {
    async loadData() {
      try {
        await this.$store.dispatch("highRated/FetchMoreHighRatedArticles");
      } catch (e) {
        // alert("No more data" + e);
      }
    }
  }
};
</script>

<style scoped>
/* .top{

} */
/* .high-rated-container {
  margin-left: 30px;
  margin-right: 30px;
} */
a {
  color: black !important;
  text-decoration: none;
}
</style>

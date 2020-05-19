<template>
  <div class="author-profile">
    <b-row>
      <b-col sm="12" md="12" lg="12" xl="12">
        <div class="custom-cover">
          <b-row>
            <b-col sm="6" md="6" lg="6" xl="6" class="mt-4 mx-auto">
              <div class="d-flex ml-4 mt-4">
                <b-img
                  class="custom-author-logo mt-4"
                  :src="AuthorArticles.authorsprofilrimg"
                ></b-img>
                <div class="vl mt-4"></div>
                <div class="custom-text mt-4 ml-3">
                  <h4>Content Amount</h4>
                  <h3 class="text-dark">
                    {{ AuthorArticles.Status_list.length }}
                  </h3>
                  <!-- <h3 class="text-dark">
                    {{ AuthorArticles.authorsname }}
                  </h3> -->
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col md="12">
        <b-tabs :no-nav-style="true" content-class="mt-0 mb-0">
          <b-tab
            title="Latest"
            title-link-class="text-dark"
            active
            @click="goLatest()"
          >
            <div class="latest-under-line"></div>
          </b-tab>
          <b-tab title="About" title-link-class="text-dark" @click="goAbout()">
            <div class="about-under-line"></div>
          </b-tab>
          <hr class="line" />
        </b-tabs>
      </b-col>
      <div class="ml-2 mr-3" v-show="showLatestDiv">
        <b-row>
          <VclChannelCommonCard v-if="$fetchState.pending" />
          <h4 v-else-if="$fetchState.error">
            Error while fetching posts: {{ error }}
          </h4>
          <b-col
            v-else
            md="3"
            lg="3"
            xs="12"
            sm="6"
            xl="3"
            v-for="(a, index) in AuthorArticles.Status_list"
            :key="index"
          >
            <nuxt-link prefetch :to="`/detailPost/${a.slug}`">
              <AuthorSmallCard
                :ArticleCover="'http://cdn.resultonlinebd.com' + a.photo"
                :ArticleTitle="a.title"
                :ArticlePublish="a.release_date"
              />
            </nuxt-link>
          </b-col>
        </b-row>
      </div>
      <div v-show="showAboutDiv">
        <b-container>
          <h3>{{ AuthorArticles.authorsname }}</h3>
          <p class="about-text">{{ AuthorArticles.about }}</p>
        </b-container>
      </div>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  head() {
    return {
      title: "ResultOnlineBd " + this.AuthorArticles.authorsname,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "what you need to know About  " + this.AuthorArticles.about
        }
      ]
    };
  },
  async fetch() {
    await this.$axios
      .$get(process.env.baseUrl + `/channel/${this.$route.params.authorName}`)
      .then(posts =>
        this.$store.dispatch("authorProfile/FetchAuthorArticles", posts)
      );
  },
  // async fetch({ store, error, params }) {
  //   try {
  //     await store.dispatch(
  //       "authorProfile/FetchAuthorArticles",
  //       params.authorName
  //     );
  //   } catch (e) {
  //     error({
  //       statusCode: 503,
  //       message: "Unable to fetch events at this time. Please try again."
  //     });
  //   } finally {
  //   }
  // },
  computed: mapState({
    AuthorArticles: state => state.authorProfile.AuthorArticles
  }),

  data() {
    return {
      showLatestDiv: true,
      showAboutDiv: false,
      Loading: false
    };
  },
  methods: {
    goLatest() {
      var self = this;
      self.showLatestDiv = true;
      self.showAboutDiv = false;
    },
    goAbout() {
      var self = this;
      self.showLatestDiv = false;
      self.showAboutDiv = true;
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
/* .author-profile{
  
} */
.custom-text {
  color: rgb(255, 255, 255);
}

.vl {
  border-left: 3px solid rgb(230, 233, 230);
  height: 150px;
  margin-left: 30px;
}
.custom-cover {
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  height: 320px;
  border-radius: 10px;
}

.custom-author-logo {
  height: 150px;
  width: 150px;
  border-radius: 10px;
  padding: 5px;
}
a {
  color: black !important;
  text-decoration: none;
}
.about-text {
  text-align: justify;
}
</style>

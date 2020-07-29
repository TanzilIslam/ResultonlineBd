<template>
  <div class="author-profile">
    <b-row>
      <b-col sm="12" md="12" lg="12" xl="12">
        <div class="custom-cover">
          <b-row>
            <b-col sm="6" md="6" lg="6" xl="6" class="mt-4 mx-auto">
              <div class="d-flex ml-4 mt-4">
                <b-img
                  v-if="loadImg"
                  blank="true"
                  blank-color="#777"
                  class="custom-author-logo mt-4"
                ></b-img>

                <b-img
                  v-else
                  class="custom-author-logo mt-4"
                  :src="
                    'http://cdn.resultonlinebd.com/media/' +
                    AuthorArticles.authorsprofilrimg
                  "
                ></b-img>
                <div class="vl mt-4"></div>
                <div class="custom-text mt-4 pl-3">
                  <h3 class="text-dark">
                    Hello Everyone! <br />
                    I am {{ AuthorArticles.authorsname }}
                  </h3>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <!--Tab start -->
        <b-tabs :no-nav-style="true" content-class="mt-0 mb-0">
          <b-tab title-link-class="text-dark" active @click="goLatest()">
            <template v-slot:title>
              <b-img
                src="~assets/user/icons/fresh.svg"
                style="height: 30px; width: 23px;"
              ></b-img>
              Fresh
            </template>
            <div class="latest-under-line"></div>
          </b-tab>
          <b-tab title-link-class="text-dark" @click="goAbout()">
            <template v-slot:title>
              <b-img
                src="~assets/user/icons/about.svg"
                style="height: 30px; width: 30px;"
              ></b-img>
              About
            </template>
            <div class="about-under-line"></div>
          </b-tab>
          <hr class="line" />
        </b-tabs>
        <!--Tab End -->
      </b-col>
    </b-row>
    <div v-show="showLatestDiv">
      <AuthorVclCard v-if="$fetchState.pending" />
      <h4 v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </h4>
      <b-row v-else>
        <b-col
          sm="6"
          md="3"
          lg="3"
          xl="3"
          v-for="(a, index) in AuthorArticles.List"
          :key="index"
        >
          <AuthorSmallCard
            :ArticleCover="'http://cdn.resultonlinebd.com/media/' + a.photo"
            :ArticleTitle="a.title"
            :ArticlePublish="a.release_date"
            :ArticleSlug="a.slug"
            :ArticleView="a.view"
          />
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
    <div v-show="showAboutDiv">
      <b-container>
        <h3>{{ AuthorArticles.authorsname }}</h3>
        <div class="about-text" v-html="AuthorArticles.about"></div>
      </b-container>
    </div>
    <!-- </b-row> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      loadImg: true,
    };
  },
  head() {
    return {
      title: "ResultOnlineBd " + this.AuthorArticles.authorsname,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "what you need to know About  " + this.AuthorArticles.about,
        },
      ],
    };
  },
  async fetch() {
    var self = this;
    await self.$axios
      .$get(process.env.baseUrl + `/channel/${self.$route.params.authorName}`)
      .then(function (posts) {
        self.$store.dispatch(
          "authorProfile/FetchAuthorArticles",
          posts.results
        );
        self.nextLink = posts.next;
      });

    self.loadImg = false;
  },
  computed: mapState({
    AuthorArticles: (state) => state.authorProfile.AuthorArticles,
  }),

  data() {
    return {
      showLatestDiv: true,
      showAboutDiv: false,
      Loading: false,
      nextLink: "",
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
    },
    async loadData() {
      if (this.nextLink != null) {
        var self = this;
        await self.$axios.$get(self.nextLink).then(function (posts) {
          posts.results.List.forEach((element) => {
            self.$store.dispatch("authorProfile/AddMore", element);
          });

          self.nextLink = posts.next;
        });
      } else {
        alert("null");
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
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
  margin-left: 15px;
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

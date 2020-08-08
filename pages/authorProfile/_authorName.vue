<template>
  <div class="author-profile">
    <div>
      <b-img
        v-if="$fetchState.pending"
        :blank="true"
        class="w-100 rounded"
        blank-color="gray"
        height="300"
      ></b-img>

      <b-card
        v-else
        overlay
        :img-src="`http://cdn.resultonlinebd.com/media/${AuthorArticles.coverImg}`"
        img-alt="Card Image"
        text-variant="white"
        class="rounded"
        img-height="300"
      >
        <div class="d-flex justify-content-center">
          <div>
            <b-img
              v-if="loadImg"
              :blank="true"
              blank-color="#777"
              class="logo mt-4"
            ></b-img>

            <b-img
              v-else
              :src="
                'http://cdn.resultonlinebd.com/media/' +
                AuthorArticles.authorsprofilrimg
              "
              class="logo"
            ></b-img>
          </div>
          <div>
            <div class="vl"></div>
          </div>
          <div class="pl-3 pt-4">
            <h3 class="text-dark">
              {{ AuthorArticles.authorsname }}
            </h3>
            <div class="d-flex" style="cursor: pointer;">
              <div class="mr-4 pt-1">
                <b-img
                  height="20"
                  width="20"
                  src="~/assets/user/icons/web.png"
                ></b-img>
              </div>
              <div class="h4">
                <b-icon icon="reply" variant="dark"></b-icon>
              </div>
            </div>
          </div>
        </div>
      </b-card>
    </div>
    <b-tabs :no-nav-style="true" class="pt-2" content-class="mt-0 mb-0">
      <b-tab title-link-class="text-dark" active @click="goLatest()">
        <template v-slot:title>
          <b-img
            src="~assets/user/icons/fresh.svg"
            style="height: 20px; width: 20px;"
          ></b-img>
          Fresh
        </template>
        <div class="latest-under-line"></div>
      </b-tab>
      <b-tab title-link-class="text-dark" @click="goAbout()">
        <template v-slot:title>
          <b-img
            src="~assets/user/icons/about.svg"
            style="height: 22px; width: 22px;"
          ></b-img>
          About
        </template>
        <div class="about-under-line"></div>
      </b-tab>
      <hr class="line" />
    </b-tabs>
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
          <div v-if="a.is_active">
            <AuthorSmallCard
              :ArticleCover="'http://cdn.resultonlinebd.com/media/' + a.photo"
              :ArticleTitle="a.title"
              :ArticlePublish="a.release_date"
              :ArticleSlug="a.slug"
              :ArticleView="a.view"
              :article="a.channel__slug_channel"
            />
          </div>
        </b-col>
      </b-row>

      <div class="myPagination">
        <div class="text-center mt-5 mb-3">
          <b-button variant="dark" @click="loadData">Load More</b-button>
        </div>
      </div>
    </div>
    <div v-show="showAboutDiv">
      <b-container>
        <h3>{{ AuthorArticles.authorsname }}</h3>
        <div class="about-text" v-html="AuthorArticles.about"></div>
      </b-container>
    </div>
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
      loadImg: true,
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
.logo {
  height: 150px;
  width: 150px;
  border-radius: 10px;
  padding: 5px;
}
.vl {
  border-left: 3px solid rgb(230, 233, 230);
  height: 92%;
  margin-top: 6px;
}
a {
  color: black !important;
  text-decoration: none;
}
.about-text {
  text-align: justify;
}
</style>

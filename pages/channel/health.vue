<template>
  <div class="health-post">
    <b-row>
      <!-- sideBar Start -->
      <b-col cols="12" sm="12" md="3" lg="3" xl="3">
        <div class="channel-side-bar mb-4">
          <div class="d-flex channel-side-bar-title">
            <b-icon
              v-b-toggle.sidebar-backdrop
              class="ml-2 p-1 my-auto menu-logo"
              scale="2"
              style="cursor: pointer;"
              icon=" list"
            ></b-icon>
            <h5 class="mx-auto my-auto">
              Health
            </h5>
          </div>
          <!--  -->
          <FixedChannelSideBar />

          <b-list-group class="channel-side-bar-list-group">
            <b-button
              variant="light"
              class="main-tag-button channel-side-bar-list-item"
              v-for="(item, index) in mainTagList.results"
              :key="index"
              @click="showMainTagPosts(item)"
            >
              <b-img
                :src="item.tag_icon"
                class="shadow-sm channel-side-bar-list-item-icon"
              ></b-img>
              {{ item.tag_name }}</b-button
            >
          </b-list-group>

          <div class="text-center">
            <h6
              v-if="mainTagList.next != null"
              @click="loadMoreMainTagListItem"
              style="text-decoration: underline; cursor: pointer;"
              class="ml-2 mt-4"
            >
              See More
            </h6>
            <h6
              v-else-if="mainTagList.previous != null"
              @click="loadLessMainTagListItem"
              style="text-decoration: underline; cursor: pointer;"
              class="ml-2 mt-4"
            >
              See Less
            </h6>
          </div>
        </div>
      </b-col>
      <!-- Side Bar End -->

      <b-col cols="12" sm="12" md="9" lg="9" xl="9">
        <!-- Cover Start -->
        <ChannelCover ChannelCoverTitle="Health" />
        <!-- Cover End -->

        <!--Tab start -->
        <b-tabs :no-nav-style="true" content-class="mt-0 mb-0">
          <b-tab title-link-class="text-dark" active @click="goLatest()">
            <template v-slot:title>
              <b-img
                src="~/assets/user/tabs/r.png"
                style="height: 30px; width: 30px;"
              ></b-img>
              Fresh
            </template>
            <div class="latest-under-line"></div>
          </b-tab>
          <b-tab title-link-class="text-dark" @click="goAbout()">
            <template v-slot:title>
              <b-img
                src="~/assets/user/tabs/a.png"
                style="height: 30px; width: 30px;"
              ></b-img>
              About
            </template>
            <div class="about-under-line"></div>
          </b-tab>
          <hr class="line" />
        </b-tabs>
        <!--Tab End -->
        <!-- Latest Div Start -->
        <div v-show="showLatestDiv">
          <!-- Sub Tags Start -->
          <div
            class="d-flex justify-content-between justify-content-lg-between justify-content-xl-between flex-wrap mt-2 mb-4"
          >
            <b-button
              variant="light"
              v-for="(item, index) in subTagList"
              :key="index"
              @click="showSubTagPosts(item)"
              class="sub-tag"
            >
              {{ item.tag_name }}
            </b-button>
          </div>
          <!-- Sub Tags End -->

          <VclChannelCommonCard v-if="$fetchState.pending" />
          <h4 v-else-if="$fetchState.error">
            Error while fetching posts: {{ $fetchState.error.message }}
          </h4>
          <b-row v-else>
            <b-col
              v-if="!dataLoading"
              cols="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              class="text-center"
            >
              <b-spinner
                style="width: 3rem; height: 3rem;"
                label="Large Spinner"
              ></b-spinner>
            </b-col>

            <b-col
              v-else
              md="4"
              lg="4"
              xs="12"
              sm="6"
              xl="4"
              v-for="(article, index) in HealthArticles"
              :key="index"
            >
              <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
              <ChannelCommonCard :article="article" :data-index="index" />
              <!-- </nuxt-link> -->
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
        <!-- Latest Div End -->

        <!-- About Div Start -->
        <div v-show="showAboutDiv">
          <h3>this is abour apge of health</h3>
          <h5 class="text-muted">Every body should know</h5>
        </div>
        <!-- About Div End -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "channel",
  head() {
    return {
      title: this.seoObject.Channel_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.seoObject.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.seoObject.meta_keyword,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: this.seoObject.Channel_title,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.seoObject.Channel_title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.seoObject.description,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.seoObject.Channel_title,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article.text",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.seoObject.description,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.seoObject.meta_image,
        },
      ],
    };
  },
  async fetch() {
    var self = this;

    await self.$axios
      .$get(process.env.baseUrl + "/s/all/Health")
      .then(function (posts) {
        self.seoObject = posts;
      })
      .catch(function (error) {
        console.log(error);
      });

    // Main Tag List Fetch
    await this.$axios
      .$get(process.env.channelMainTag + `health`)
      .then(function (posts) {
        self.mainTagList = posts;
      })
      .catch(function (error) {
        console.log("No Net" + error);
      })
      .finally(function () {});

    // Sub Tag List Fetch
    await this.$axios
      .$get(process.env.baseUrl + "/Tag_creator?search=Health")
      .then(function (posts) {
        self.subTagList = posts.results;
      })
      .catch(function (error) {
        console.log("No Net" + error);
      })
      .finally(function () {});

    // Channel Home Page Articles Fetch
    await this.$axios
      .$get(process.env.channelUrl + `Health`)
      .then((posts) =>
        this.$store.dispatch("health/FetchHealthArticles", posts.results)
      );
  },
  computed: mapState({
    HealthArticles: (state) => state.health.HealthArticles,
    TagArticlesNextLink: (state) => state.health.TagArticlesNextLink,
  }),
  data() {
    return {
      seoObject: {},
      mainTagList: [],
      subTagList: [],
      showLatestDiv: true,
      showAboutDiv: false,
      dataLoading: true,
      subTagSelected: false,
      mainTagSelected: false,
      parentSelected: true,
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
    async loadMoreMainTagListItem() {
      var self = this;
      await this.$axios
        .$get(this.mainTagList.next)
        .then(function (posts) {
          posts.results.forEach((element) => {
            self.mainTagList.results.push(element);
          });
          self.mainTagList.next = posts.next;
          self.mainTagList.previous = posts.previous;
        })
        .catch(function (error) {
          console.log("No Net" + error);
        })
        .finally(function () {});
    },
    async loadLessMainTagListItem() {
      var self = this;
      await self.$axios
        .$get(self.mainTagList.previous)
        .then(function (posts) {
          self.mainTagList = posts;
        })
        .catch(function (error) {
          console.log("No Net" + error);
        })
        .finally(function () {});
    },
    // show Main tag articles
    async showMainTagPosts(item) {
      this.dataLoading = false;
      var self = this;
      await this.$axios
        .$get(item.tag_content_link)
        .then(function (posts) {
          self.$store.dispatch("health/FetchHealthArticles", posts.results);
          self.$store.dispatch("health/SetTagNextDataLink", posts.next);
        })
        .catch(function (error) {
          console.log("No Net" + error);
        })
        .finally(function () {});
      this.dataLoading = true;
      this.mainTagSelected = true;
      this.parentSelected = false;
    },
    // show sub tag articles
    async showSubTagPosts(item) {
      this.dataLoading = false;
      var self = this;
      await this.$axios
        .$get(item.tag_target_link)
        .then(function (posts) {
          self.$store.dispatch("health/FetchHealthArticles", posts.results);
          self.$store.dispatch("health/SetTagNextDataLink", posts.next);
        })
        .catch(function (error) {
          console.log("No Net" + error);
        })
        .finally(function () {});
      this.dataLoading = true;
      this.subTagSelected = true;
      (this.parentSelected = false), (this.mainTagSelected = false);
    },
    async loadData() {
      // load home Articles
      if (this.parentSelected) {
        try {
          await this.$store.dispatch("health/FetchMoreHealthArticles");
        } catch (e) {
          alert("No more data" + e);
        }
      }
      // load main tag articles
      else if (this.mainTagSelected) {
        if (this.TagArticlesNextLink == null) {
          alert("null");
        } else {
          var self = this;
          await this.$axios
            .$get(self.TagArticlesNextLink)
            .then(function (posts) {
              posts.results.forEach((element) => {
                self.$store.dispatch("health/SetMoreTagArticles", element);
              });
              self.$store.dispatch("health/SetTagNextDataLink", posts.next);
            })
            .catch(function (error) {
              console.log("No Net" + error);
            })
            .finally(function () {});
        }
      }

      // load sub tag articles
      else if (this.subTagSelected) {
        if (this.TagArticlesNextLink == null) {
          alert("null");
        } else {
          var self = this;
          await this.$axios
            .$get(self.TagArticlesNextLink)
            .then(function (posts) {
              posts.results.forEach((element) => {
                self.$store.dispatch("health/SetMoreTagArticles", element);
              });
              self.$store.dispatch("health/SetTagNextDataLink", posts.next);
            })
            .catch(function (error) {
              console.log("No Net" + error);
            })
            .finally(function () {});
        }
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
/* .health-post{

} */

a {
  color: black !important;
  text-decoration: none;
}
</style>

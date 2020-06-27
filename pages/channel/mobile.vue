<template>
  <div class="mobile-post">
    <b-row>
      <!-- sideBar Start -->
      <b-col cols="12" sm="12" md="3" lg="3" xl="3">
        <div class=" channel-side-bar mb-4">
          <div class="d-flex  channel-side-bar-title">
            <b-icon
              v-b-toggle.sidebar-backdrop
              class="ml-2 p-1 my-auto  menu-logo"
              scale="2"
              style="cursor:pointer;"
              icon=" list"
            ></b-icon>
            <h5 class="mx-auto my-auto">
              Mobile Phone
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
              style="text-decoration: underline;;cursor:pointer;"
              class="ml-2 mt-4"
            >
              See More
            </h6>
            <h6
              v-else-if="mainTagList.previous != null"
              @click="loadLessMainTagListItem"
              style="text-decoration: underline;;cursor:pointer;"
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
        <ChannelCover ChannelCoverTitle="Mobile Phone" />
        <!-- Cover End -->

        <!--Tab start -->
        <b-tabs :no-nav-style="true" content-class="mt-0 mb-0">
          <b-tab
            title="Fresh"
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
        <!--Tab End -->

        <!-- Latest Div Start -->
        <div v-show="showLatestDiv">
          <!-- Mobile Brand Logo List Start -->
          <b-row>
            <b-col v-if="!brandLogoLoaded" md="12" lg="12">
              <div class="spinner-warper">
                <moon-loader
                  color="#000000"
                  class="spinner"
                  :size="60"
                ></moon-loader>
              </div>
            </b-col>

            <b-col v-else cols="12" sm="12" md="12" lg="12" xl="12">
              <vue-scroll :ops="ops">
                <b-list-group horizontal>
                  <b-list-group-item
                    class="brand-list"
                    v-for="i in subTagList"
                    :key="i.id"
                  >
                    <b-img
                      :src="i.Brand_profile"
                      class="logo shadow"
                      alt="Kitten"
                      @click="showSubTagPosts(i)"
                    ></b-img>
                  </b-list-group-item>
                </b-list-group>
              </vue-scroll>
            </b-col>
          </b-row>
          <!-- Mobile Brand Logo List End -->

          <!-- small mobile card start -->
          <b-row class="mt-4 mb-4">
            <VclChannelCommonCard v-if="$fetchState.pending" />
            <b-col
              v-else
              v-for="(article, index) in MobileArticles.slice(0, 1)"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              lg="4"
              xl="4"
              class="mb-1"
            >
              <nuxt-link prefetch :to="`/detailPost/${article.slug}`">
                <ChannelCommonCard :article="article" :data-index="index" />
              </nuxt-link>
            </b-col>
          </b-row>
          <!-- small mobile card end -->

          <!-- big mobile card start -->
          <b-row class="mb-4">
            <b-col
              cols="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              v-for="(article, index) in MobileArticles.slice(1, 2)"
              :key="index"
            >
              <div>
                <nuxt-link prefetch :to="`/detailPost/${article.slug}`">
                  <b-card
                    img-height="300"
                    overlay
                    :img-src="article.photo"
                    img-alt="card Image"
                    text-variant="white"
                    img-fluid
                  >
                    <b-card-text
                      style="margin-top:200px;"
                      text-tag="h4"
                      class="text"
                      >{{ article.title }}</b-card-text
                    >
                  </b-card>
                </nuxt-link>
              </div>
            </b-col>
          </b-row>
          <!-- big Mobile Card End -->

          <!-- medium mobile card start -->
          <b-row>
            <b-col
              class="mb-3"
              v-for="(article, index) in MobileArticles"
              :key="index"
              cols="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
            >
              <b-row>
                <b-col md="6" lg="6">
                  <b-img
                    class="image"
                    height="200"
                    :src="article.photo"
                    style="width:inherit;"
                  ></b-img>
                </b-col>
                <b-col md="6" lg="6" class="mx-auto mt-5">
                  <h6>{{ article.release_date }}</h6>
                  <h5>{{ article.title }}</h5>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <!-- medium mobile card end -->

          <!-- pagination start -->
          <div class="myPagination">
            <div class="text-center mt-5 mb-3">
              <b-button variant="dark" @click="loadData">Load More</b-button>
            </div>
          </div>
          <!-- pagination end -->

          <!-- Sub Tags Start -->
          <!-- <div
            class="d-flex justify-content-between justify-content-lg-between justify-content-xl-between  flex-wrap mt-2 mb-4"
          >
            <b-button
              variant="light"
              v-for="(item, index) in subTagList"
              :key="index"
              @click="showSubTagPosts(item)"
              class="sub-tag"
            >
              {{ item.Channel }}
            </b-button>
          </div> -->
          <!-- Sub Tags End -->

          <!-- <VclChannelCommonCard v-if="$fetchState.pending" />
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
              v-for="(article, index) in MobileArticles"
              :key="index"
            >
              <nuxt-link prefetch :to="`/detailPost/${article.slug}`">
                <ChannelCommonCard :article="article" :data-index="index" />
              </nuxt-link>
            </b-col>
          </b-row> -->
          <!-- Pagination Start -->
          <!-- <div class="myPagination">
            <div class="text-center mt-5 mb-3">
              <b-button variant="dark" @click="loadData">Load More</b-button>
            </div>
          </div> -->
          <!-- Pagination End -->
        </div>
        <!-- Latest Div End -->

        <!-- About Div Start -->
        <div v-show="showAboutDiv">
          <h3>this is abour apge of mobile</h3>
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
      title: "Mobile Phone page - ResultOnlineBd",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Here you can find all the latest information about technology and different mobile cool stuffs."
        }
      ]
    };
  },
  data() {
    return {
      mainTagList: [],
      subTagList: [],
      brandLogoLoaded: false,
      showLatestDiv: true,
      showAboutDiv: false,
      dataLoading: true,
      subTagSelected: false,
      mainTagSelected: false,
      parentSelected: true,
      ops: {
        vuescroll: {
          mode: "slide",
          zooming: false
        },
        scrollPanel: {
          initialScrollY: 0,
          initialScrollX: 0,
          scrollingX: true,
          scrollingY: false,
          speed: 200
        },
        rail: {
          keepShow: false
        },
        bar: {
          keepShow: false,
          disable: true
        }
      }
    };
  },
  async fetch() {
    var self = this;

    // Main Tag List Fetch
    await this.$axios
      .$get(process.env.channelMainTag + `mobile`)
      .then(function(posts) {
        self.mainTagList = posts;
      })
      .catch(function(error) {
        console.log("No Net" + error);
      })
      .finally(function() {});

    // Sub Tag List Fetch
    await this.$axios
      .$get(process.env.baseUrl + "/listBrand")
      .then(function(posts) {
        self.subTagList = posts.results;
      })
      .catch(function(error) {
        console.log("No Net" + error);
      })
      .finally(function() {});
    this.brandLogoLoaded = true;

    // Channel Home Page Articles Fetch
    await this.$axios
      .$get(process.env.channelUrl + `Mobile phone`)
      .then(posts =>
        this.$store.dispatch("mobile/FetchMobileArticles", posts.results)
      );
  },
  computed: mapState({
    MobileArticles: state => state.mobile.MobileArticles,
    TagArticlesNextLink: state => state.mobile.TagArticlesNextLink
  }),

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
        .then(function(posts) {
          posts.results.forEach(element => {
            self.mainTagList.results.push(element);
          });
          self.mainTagList.next = posts.next;
          self.mainTagList.previous = posts.previous;
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});
    },
    async loadLessMainTagListItem() {
      var self = this;
      await self.$axios
        .$get(self.mainTagList.previous)
        .then(function(posts) {
          self.mainTagList = posts;
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});
    },
    // show Main tag articles
    async showMainTagPosts(item) {
      this.dataLoading = false;
      var self = this;
      await this.$axios
        .$get(item.tag_content_link)
        .then(function(posts) {
          self.$store.dispatch("mobile/FetchMobileArticles", posts.results);
          self.$store.dispatch("mobile/SetTagNextDataLink", posts.next);
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});
      this.dataLoading = true;
      this.mainTagSelected = true;
      this.parentSelected = false;
    },
    // show sub tag articles
    async showSubTagPosts(item) {
      this.dataLoading = false;
      var self = this;
      await this.$axios
        .$get(item.ChannelDataUrl)
        .then(function(posts) {
          self.$store.dispatch("mobile/FetchMobileArticles", posts.results);
          self.$store.dispatch("mobile/SetTagNextDataLink", posts.next);
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});
      this.dataLoading = true;
      this.subTagSelected = true;
      (this.parentSelected = false), (this.mainTagSelected = false);
    },
    async loadData() {
      // load home Articles
      if (this.parentSelected) {
        try {
          await this.$store.dispatch("mobile/FetchMoreMobileArticles");
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
            .then(function(posts) {
              posts.results.forEach(element => {
                self.$store.dispatch("mobile/SetMoreTagArticles", element);
              });
              self.$store.dispatch("mobile/SetTagNextDataLink", posts.next);
            })
            .catch(function(error) {
              console.log("No Net" + error);
            })
            .finally(function() {});
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
            .then(function(posts) {
              posts.results.forEach(element => {
                self.$store.dispatch("mobile/SetMoreTagArticles", element);
              });
              self.$store.dispatch("mobile/SetTagNextDataLink", posts.next);
            })
            .catch(function(error) {
              console.log("No Net" + error);
            })
            .finally(function() {});
        }
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
/* .mobile-post{

} */
.spinner-warper {
  text-align: center !important;
}
.spinner {
  top: 20%;
  left: 45%;
}
.brand-list {
  border: none !important;
}
.logo {
  height: 80px;
  width: 120px;
  cursor: pointer;
}
a {
  color: black !important;
  text-decoration: none;
}
</style>

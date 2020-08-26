<template>
  <div class="mobile-post">
    <b-row no-gutters>
      <!-- sideBar Start -->
      <b-col class="pr-2" cols="12" sm="12" md="3" lg="3" xl="3">
        <FixedChannelSideBar />
        <div class="mb-4 channel-side-bar-sticky">
          <div class="d-flex channel-side-bar-title">
            <b-icon
              v-b-toggle.sidebar-backdrop
              class="ml-3 p-1 my-auto menu-logo"
              scale="2"
              style="cursor: pointer;"
              icon="chevron-right"
            ></b-icon>
            <h5 class="mx-auto my-auto">
              Mobile Phone
            </h5>
          </div>

          <b-list-group
            class="channel-side-bar channel-side-bar-list-group"
            v-bind:style="{
              height: heightOfScreen + 'px',
              overflowY: 'scroll'
            }"
          >
            <button
              class="main-tag-button channel-side-bar-list-item btn btn-light"
              v-for="(item, index) in mainTagList.results"
              :key="index"
              @click="showMainTagPosts(item)"
              type="button"
            >
              <b-img
                :src="item.tag_icon"
                :alt="item.tag_name"
                class="shadow channel-side-bar-list-item-icon"
              ></b-img>
              {{ item.tag_name }}
            </button>
          </b-list-group>

          <div class="text-center py-3">
            <div
              v-if="mainTagList.next != null"
              @click="loadMoreMainTagListItem"
              class="more-button"
            >
              <b-icon
                icon="chevron-down"
                variant="dark"
                class="more-button-icon"
              ></b-icon>
            </div>

            <div
              v-else-if="mainTagList.previous != null"
              @click="loadLessMainTagListItem"
              class="more-button"
            >
              <b-icon
                icon="chevron-up"
                variant="dark"
                class="more-button-icon"
              ></b-icon>
            </div>
          </div>
        </div>
      </b-col>
      <!-- Side Bar End -->

      <b-col cols="12" sm="12" md="9" lg="9" xl="9">
        <!-- Cover Start -->
        <div class="channel-cover">
          <b-card
            overlay
            img-height="80"
            img-src="~/assets/user/icons/channel-cover-mobile.jpg"
            text-variant="white"
            img-alt="mobile Phone"
          >
            <b-card-text text-tag="h2" class="channel-cover-title">
              Mobile Phone</b-card-text
            >
          </b-card>
        </div>
        <!-- Cover End -->

        <!--Tab start -->
        <b-tabs :no-nav-style="true" class="pt-2" content-class="mt-0 mb-0">
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

        <!-- Latest Div Start -->
        <div v-show="showLatestDiv">
          <!-- Mobile Brand Logo List Start -->
          <div class="d-flex justify-content-start flex-wrap mt-2 mb-4">
            <vs-button
              flat
              v-for="(item, index) in subTagList"
              :key="index"
              :color="item.tag_creator__tagNameBG"
              @click="showSubTagPosts(item)"
              class="sub-tag"
              >{{ item.tag_creator__tag_name }}
            </vs-button>
          </div>
          <!-- Mobile Brand Logo List End -->

          <!-- showing MainTag data start -->
          <div v-if="mainTagSelected">
            <b-row class="">
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
                cols="12"
                sm="6"
                md="4"
                lg="4"
                xl="4"
                class="mb-1"
                v-for="(article, index) in MobileArticles"
                :key="index"
              >
                <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
                <MobileCards :article="article" :data-index="index" />
                <!-- </nuxt-link> -->
              </b-col>
            </b-row>
          </div>
          <!-- showing MainTag data end -->

          <!-- showing BrandList Data start -->
          <div v-else-if="subTagSelected">
            <b-row class="mt-4">
              <b-col
                cols="12"
                sm="6"
                md="4"
                lg="4"
                xl="4"
                class="mb-1"
                v-for="(article, index) in MobileArticles"
                :key="index"
              >
                <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
                <MobileCards :article="article" :data-index="index" />
                <!-- </nuxt-link> -->
              </b-col>
            </b-row>
          </div>
          <!-- showing Brand List Data End -->

          <!-- showing home page data start -->
          <div v-else-if="parentSelected">
            <div v-if="$fetchState.pending">
              <VclChannelCommonCard />
            </div>

            <div v-else>
              <!-- small mobile card start -->
              <b-row class="mt-4 mb-4">
                <b-col
                  v-for="(article, index) in TopCards"
                  :key="index"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="4"
                  xl="4"
                  class="mb-1"
                >
                  <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
                  <MobileCards :article="article" :data-index="index" />
                  <!-- </nuxt-link> -->
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
                  v-for="(article, index) in BigCard"
                  :key="index"
                >
                  <div>
                    <nuxt-link prefetch :to="`/m/${article.slug}`">
                      <b-card
                        img-height="300"
                        overlay
                        :img-src="article.photo"
                        :img-alt="article.Seoimgalt"
                        text-variant="black"
                        img-fluid
                      >
                        <b-card-text
                          style="margin-top: 200px;"
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

              <!-- bottom mobile card start -->
              <b-row>
                <b-col
                  class="mb-1"
                  v-for="(article, index) in MobileArticles"
                  :key="index"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="4"
                  xl="4"
                >
                  <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
                  <MobileCards :article="article" :data-index="index" />
                  <!-- </nuxt-link> -->
                </b-col>
              </b-row>
              <!-- medium mobile card end -->
            </div>
          </div>
          <!-- showing home page data end -->

          <!-- pagination start -->
          <div class="myPagination">
            <div class="d-flex justify-content-center">
              <vs-button
                :loading="loadMoreLoading"
                color="#343a40"
                flat
                @click="loadData"
                ><strong>Load More</strong></vs-button
              >
            </div>
          </div>
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
import { state } from "../../store/authorProfile";
export default {
  layout: "default",
  head() {
    return {
      title: this.seoObject.Channel_title,
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
          content: this.seoObject.Channel_title
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.seoObject.Channel_title
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.seoObject.description
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.seoObject.Channel_title
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
  data() {
    return {
      loadMoreLoading: false,
      seoObject: {},
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

    await self.$axios
      .$get(process.env.baseUrl + "/s/all/mobile")
      .then(function(posts) {
        self.seoObject = posts;
      })
      .catch(function(error) {
        console.log(error);
      });
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

    // Channel Home Page Articles Fetch
    await this.$axios
      .$get(process.env.channelUrl + `Mobile`)
      .then(posts =>
        this.$store.dispatch("mobile/FetchMobileArticles", posts.results)
      );
  },
  computed: mapState({
    TopCards: state => state.mobile.MobileArticles.slice(0, 1),
    BigCard: state => state.mobile.MobileArticles.slice(0, 1),
    MobileArticles: state => state.mobile.MobileArticles,
    TagArticlesNextLink: state => state.mobile.TagArticlesNextLink,
    heightOfScreen() {
      if (process.browser) {
        return (
          (window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight) - 145
        );
      }
    }
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
      this.parentSelected = false;
      this.mainTagSelected = true;
      this.dataLoading = false;
      var self = this;
      await self.$axios
        .$get(process.env.baseUrl + `/Listsub_Tag/${item.query_slug}`)
        .then(function(posts) {
          self.subTagList = posts.results.List;
        })
        .catch(function(error) {
          console.log("No Net subtag" + error);
        })
        .finally(function() {});
      await self.$axios
        .$get(process.env.baseUrl + `/channelpagetag/${item.query_slug}`)
        .then(function(posts) {
          posts.results.List.forEach(element => {
            element.photo = process.env.baseUrl + "/media/" + element.photo;
          });
          self.$store.dispatch(
            "mobile/FetchMobileArticles",
            posts.results.List
          );
          self.$store.dispatch("mobile/SetTagNextDataLink", posts.next);
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});

      this.dataLoading = true;
    },
    // show sub tag articles
    async showSubTagPosts(item) {
      this.subTagSelected = true;
      this.dataLoading = false;
      var self = this;
      await this.$axios
        .$get(process.env.baseUrl + "/targetData/" + item.tag_creator__tagSlug)
        .then(function(posts) {
          posts.results.List.forEach(element => {
            element.photo = process.env.baseUrl + "/media/" + element.photo;
          });

          self.$store.dispatch(
            "mobile/FetchMobileArticles",
            posts.results.List
          );
          self.$store.dispatch("mobile/SetTagNextDataLink", posts.next);
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});
      this.dataLoading = true;
      (this.parentSelected = false), (this.mainTagSelected = false);
    },
    async loadData() {
      // load home Articles
      this.loadMoreLoading = true;
      if (this.parentSelected) {
        try {
          await this.$store.dispatch("mobile/FetchMoreMobileArticles");
        } catch (e) {
          // alert("No more data" + e);
        }
      }
      // load main tag articles
      else if (this.mainTagSelected) {
        if (this.TagArticlesNextLink == null) {
          // alert("null");
        } else {
          var self = this;

          await this.$axios
            .$get(self.TagArticlesNextLink)
            .then(function(posts) {
              posts.results.List.forEach(element => {
                element.photo = process.env.baseUrl + "/media/" + element.photo;
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
          // alert("null");
        } else {
          var self = this;
          await this.$axios
            .$get(self.TagArticlesNextLink)
            .then(function(posts) {
              posts.results.forEach(element => {
                element.photo = process.env.baseUrl + "/media/" + element.photo;

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
      this.loadMoreLoading = false;
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
  height: 49px;
  width: 72px;
  cursor: pointer;
}
a {
  color: black !important;
  text-decoration: none;
}
</style>

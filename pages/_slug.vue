<template>
  <div class="detail-post">
    <div class="add-top mb-2  pt-1">
      <b-card no-body>
        <ins
          class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-3003235812345626"
          data-ad-slot="9798864203"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </b-card>
    </div>
    <b-row class="mobile-row">
      <b-col class="mobile-colmun" cols="12" sm="12" md="8" lg="8" xl="8">
        <div>
          <div v-if="DetailArticle.is_active">
            <VclDetailCard v-if="notCompleted" />
            <b-card
              v-else
              class="mb-2 details-main-image"
              no-body
              :img-src="DetailArticle.photo"
              :img-alt="DetailArticle.Seoimgalt"
              text-variant="white"
              img-height="375"
            ></b-card>
            <span style="font-size: 18px;" class="text-muted">
              {{ DetailArticle.contentowners.authorsname }} |
              {{ DetailArticle.release_date }}
            </span>
            <div class="d-flex float-right mr-2">
              <b-img
                alt="png"
                class=""
                style="width: 20px; height: 20px;"
                :src="require('~/assets/user/detailPage/fire.png')"
              ></b-img>
              <p class="text-muted mr-3">{{ DetailArticle.view }}</p>
              <b-icon
                class="mr-3 custom-home-card  h4"
                @click="active2 = !active2"
                icon="reply"
              ></b-icon>
              <b-icon
                class=" custom-home-card h5"
                :icon="icon"
                :variant="iconColor"
                @click="setFavourite(6000, '#4a5153')"
              ></b-icon>
            </div>
            <b-card-text class="mt-4" text-tag="h4">{{
              DetailArticle.title
            }}</b-card-text>

            <div class="secreat">
              <div v-if="!DetailArticle.contentlock">
                <div v-html="DetailArticle.details" class="details mt-4"></div>
              </div>
              <div v-else-if="DetailArticle.contentlock">
                <div class="paragraph">
                  <div
                    class="details first"
                    v-html="
                      DetailArticle.details.slice(
                        0,
                        (DetailArticle.details.length *
                          DetailArticle.Persentase) /
                          100
                      )
                    "
                  ></div>
                  <div
                    class="noselect details-bg second"
                    v-html="
                      DetailArticle.details.slice(
                        (DetailArticle.details.length *
                          DetailArticle.Persentase) /
                          100,
                        DetailArticle.details.length
                      )
                    "
                  ></div>
                </div>
                <div class="text-center mt-4 mb-4 unlimited">
                  <h5 class="details">
                    <strong>Want to get full access?</strong>
                  </h5>
                  <p class="details">
                    Then please visit the link below for full article
                  </p>
                  <br />
                  <b-button
                    class="get-bytton"
                    variant="dark"
                    :href="DetailArticle.contentlink"
                  >
                    Get Full Article
                  </b-button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </b-col>
      <b-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        class="order-md-last order-lg-last order-xl-last mobile-colmun"
      >
        <div class="tags d-flex mt-4 mb-3">
          <p class="text-dark mr-2 my-auto " style="font-size: 1rem;">Tags:</p>
          <vs-button
            size="small"
            style="font-size: 14px;"
            v-for="(i, index) in DetailArticle.tag_creator"
            :color="i.tagNameBG"
            :key="index"
            :to="`/tagPage/${i.tagSlug}`"
            flat
          >
            {{ i.tag_name }}
          </vs-button>
          <!-- <b-badge
                  class="custom-badge ml-2"
                  v-for="(i, index) in DetailArticle.tag_creator"
                  :key="index"
                  :variant="i.tagNameBG"
                >
                  <nuxt-link :to="`/tagPage/${i.tagSlug}`">
                    <div class="tag-text">{{ i.tag_name }}</div>
                  </nuxt-link></b-badge
                > -->
        </div>

        <div v-if="!DetailArticle.contentlock">
          <div v-if="showRateDiv" class="rate-section d-flex mb-4">
            <div class="mt-2"><h6>Please Rate us:</h6></div>
            <div class="ml-3">
              <client-only>
                <div>
                  <star-rating
                    :star-size="35"
                    :show-rating="false"
                    v-model="rating"
                    @rating-selected="setRating"
                    :glow="2"
                  ></star-rating>
                </div>
              </client-only>
            </div>
          </div>
        </div>

        <div v-if="!DetailArticle.contentlock">
          <h6 class="mt-3">Total Star : {{ DetailArticle.reviewcount }}</h6>
        </div>
        <div v-if="reviewLoading" class="pt-3">
          <b-row class="mobile-row">
            <b-col class="mobile-colmun" cols="12" sm="12" md="7" lg="7" xl="7">
              <VclStar />
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col class="mobile-colmun" cols="12" sm="12" md="4" lg="4" xl="4">
        <div class="pt-2 pl-2 latest-home-card-detailpage">
          <VclRelatedCard v-if="$fetchState.pending" />

          <b-list-group v-else>
            <b-list-group-item
              v-for="(i, index) in RelatedArticles"
              :key="index"
              class="custom-list-item"
            >
              <div v-if="i.is_active">
                <nuxt-link prefetch :to="`/${i.slug}`">
                  <div class="d-flex">
                    <div>
                      <b-img-lazy
                        blank-color="#bbb"
                        class="custom-latest-image"
                        :src="i.photo"
                        :alt="i.Seoimgalt"
                      ></b-img-lazy>
                    </div>
                    <div class="ml-2">
                      <h5 class="related-card-title">
                        {{
                          i.title.length > 33
                            ? i.title.slice(0, 29) + ".."
                            : i.title
                        }}
                      </h5>
                      <div class="mt-2 related-date-channel">
                        <span class="text-dark"
                          >{{ i.contentowners.authorsname }} |</span
                        >
                        <span class="text-muted">{{ i.release_date }}</span>
                      </div>
                    </div>
                  </div>
                </nuxt-link>

                <hr v-if="index < 3" class="mb-1" />
              </div>
            </b-list-group-item>
          </b-list-group>
        </div>
        <div class="add-right pt-4">
          <!-- <b-card no-body>
            <ins
              class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-3003235812345626"
              data-ad-slot="9798864203"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </b-card> -->
        </div>
      </b-col>
    </b-row>
    <hr />
    <div class="recommended">
      <div class="d-flex mb-3">
        <b-img
          alt="recomanded logo"
          style="background-color: #343a40; padding: 5px;"
          height="40"
          width="40"
          class="rounded"
          :src="require('~/assets/user/detailPage/1.png')"
        >
        </b-img>
        <h5 style="color: #222;" class="ml-2 mt-2">
          <strong>Recommended</strong>
        </h5>
      </div>
      <VclChannelCommonCard v-if="$fetchState.pending" />
      <h4 v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </h4>
      <div v-else>
        <b-row class="hide-in-mobile">
          <b-col
            class=""
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            v-for="(article, index) in RecommendedArticles"
            :key="index"
          >
            <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
            <ChannelCommonCard :article="article" :data-index="index" />
            <!-- </nuxt-link> -->
          </b-col>
        </b-row>
        <b-row no-gutters class="mobile-row  hide-in-dekstop">
          <b-col
            class="mobile-colmun"
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            v-for="(article, index) in RecommendedArticles.slice(0, 1)"
            :key="article.id"
          >
            <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
            <ChannelCommonCard :article="article" :data-index="index" />
            <!-- </nuxt-link> -->
          </b-col>
          <b-col
            class="p-3"
            cols="6"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            v-for="(article, index) in RecommendedArticles.slice(
              1,
              RecommendedArticles.length
            )"
            :key="article.id"
          >
            <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
            <ChannelCommonCard :article="article" :data-index="index" />
            <!-- </nuxt-link> -->
          </b-col>
        </b-row>
      </div>
    </div>
    <hr />
    <div class="high-rated mb-4">
      <div class="d-flex mb-3">
        <b-img
          alt="high rated  logo"
          style="background-color: #343a40; padding: 5px;"
          height="40"
          width="40"
          class="rounded"
          :src="require('~/assets/user/detailPage/2.png')"
        >
        </b-img>
        <h5 style="color: #222;" class="ml-2 mt-2">
          <strong>High Rated</strong>
        </h5>
      </div>
      <VclChannelCommonCard v-if="$fetchState.pending" />
      <h4 v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </h4>
      <div v-else>
        <b-row class="hide-in-mobile">
          <b-col
            class=""
            cols="12"
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
        <b-row no-gutters class="mobile-row  hide-in-dekstop">
          <b-col
            class="mobile-colmun"
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            v-for="(article, index) in HighRatedArticles.slice(0, 1)"
            :key="article.id"
          >
            <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
            <ChannelCommonCard :article="article" :data-index="index" />
            <!-- </nuxt-link> -->
          </b-col>
          <b-col
            class="p-3"
            cols="6"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            v-for="(article, index) in HighRatedArticles.slice(
              1,
              HighRatedArticles.length
            )"
            :key="article.id"
          >
            <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
            <ChannelCommonCard :article="article" :data-index="index" />
            <!-- </nuxt-link> -->
          </b-col>
        </b-row>
      </div>
      <!-- pagination Start -->
      <div class="myPagination">
        <div class="text-center mt-2 mb-2">
          <span v-if="!loadedHighRated"
            ><b-spinner
              style="width: 2rem; height: 2rem;"
              label="Loading..."
            ></b-spinner
          ></span>
          <div
            v-else-if="loadedHighRated"
            @click="loadDataHighRated"
            class="more-button"
          >
            <b-icon
              icon="chevron-down"
              variant="dark"
              class="more-button-icon"
            ></b-icon>
          </div>
        </div>
      </div>
      <!-- pagination End -->
    </div>
    <div>
      <vs-dialog width="470px" not-center v-model="active2">
        <template #header>
          <h6 class="pt-3">Share this article</h6>
        </template>
        <ShareModal :pathUrl="`/${this.$route.params.slug}`" />
      </vs-dialog>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import VclStar from "@/components/user/vue-content-loading-cards/VclStar.vue";
export default {
  layout: "detail",
  components: { VclStar },
  data() {
    return {
      styleObject: {
        height: "100px"
      },
      rating: 0,
      loadedRecommended: true,
      loadedHighRated: true,
      showRateDiv: true,
      showRateThanksDiv: false,
      reviewLoading: false,
      icon: "star",
      toogle: false,
      holde: true,
      articleView: 0,
      notCompleted: true,
      active2: false,
      iconColor: "dark"
      // author: ""
    };
  },
  head() {
    return {
      script: [{ type: "application/ld+json", json: this.schema }],
      title: this.DetailArticle.SeoTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.DetailArticle.SeoMetaDes
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.DetailArticle.SeoMetaDes
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: this.DetailArticle.SeoTitle
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.DetailArticle.SeoTitle
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.DetailArticle.SeoMetaDes
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.DetailArticle.SeoTitle
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
          content: this.DetailArticle.SeoMetaDes
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.DetailArticle.photo
        }
      ]
    };
  },
  async fetch() {
    var self = this;
    await self.$axios
      .$get(process.env.baseUrl + `/count/${self.$route.params.slug}`)
      .then(function(posts) {
        // console.log("1st get ", posts.view);
        self.articleView = posts.view;
        // self.author = posts.contentowners.authorsname;
      });

    await self.$axios
      .$put(
        process.env.baseUrl + `/count/${self.$route.params.slug}`,
        {
          view: self.articleView + 1
        },
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY`
          }
        }
      )
      .then(function(e) {
        // console.log("2nd ", e.view);
      });

    await self.$axios
      .$get(process.env.baseUrl + `/count/${self.$route.params.slug}`)
      .then(function(posts) {
        // if (self.hold) {
        // console.log("3rd", posts.view);
        self.$store.dispatch("detailPage/FetchDetailArticle", posts);
        self.notCompleted = false;
        // }
      });

    await self.$axios
      .$get(
        process.env.baseUrl +
          `/dtl_rlt?search=${self.DetailArticle.channel.channelname}`
      )
      .then(posts =>
        self.$store.dispatch("detailPage/FetchRelatedArticles", posts.results)
      );

    await self.$axios
      .$get(
        process.env.baseUrl +
          `/recommended_data?search=${self.DetailArticle.channel.slug_channel}`
      )
      .then(posts =>
        self.$store.dispatch(
          "detailPage/FetchRecommendedArticles",
          posts.results
        )
      );
    await self.$axios
      .$get(process.env.baseUrl + `/high_ratetd`)
      .then(posts =>
        self.$store.dispatch("detailPage/FetchHighRatedArticles", posts.results)
      );
  },
  computed: mapState({
    DetailArticle: state => state.detailPage.DetailArticle,
    // details: state =>
    //   state.detailPage.DetailArticle.details
    //     .replace(/(^\s*)|(\s*$)/gi, "")
    //     .replace(/[ ]{2,}/gi, " ")
    //     .replace(/\n /, "\n")
    //     .split(" "),
    RecommendedArticles: state => state.detailPage.RecommendedArticles,
    HighRatedArticles: state => state.detailPage.HighRatedArticles,
    RelatedArticles: state => state.detailPage.RelatedArticles,
    // author: state => state.detailPage.DetailArticle.contentowners.authorsname,
    schema() {
      return {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://google.com/article"
        },
        headline: this.DetailArticle.title,
        image: [this.DetailArticle.photo],
        datePublished: this.DetailArticle.release_date,
        author: {
          "@type": "Person"
          // name: this.DetailArticle.contentowners.authorsname
        },
        publisher: {
          "@type": "Organization",
          name: "Google",
          logo: {
            "@type": "ImageObject",
            url: "https://google.com/logo.jpg"
          }
        }
      };
    }
  }),
  methods: {
    setFavourite(duration, color) {
      if (process.browser) {
        this.toogle = !this.toogle;
        if (this.toogle) {
          localStorage.setItem(
            this.DetailArticle.slug,
            JSON.stringify(this.DetailArticle.title)
          );
          this.icon = "star-fill";
          this.iconColor = "warning";
          const noti = this.$vs.notification({
            duration,
            color,

            progress: "auto",
            title: "Added",
            text:
              "This article Successfully added to Favourite.Check Favourite Section"
          });
        } else if (!this.toogle) {
          for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            if (key == this.DetailArticle.slug) {
              // console.log("found");
              localStorage.removeItem(this.DetailArticle.slug);
              break;
            }
          }
          const noti = this.$vs.notification({
            duration: 6000,
            color: "#dc3545",

            progress: "auto",
            title: "Removed",
            text:
              "This article Successfully Removed from Favourite.Click again to added!"
          });

          this.icon = "star";
          this.iconColor = "dark";
        }
      }
    },
    checkLocal() {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        if (key == this.DetailArticle.slug) {
          // console.log("found");
          this.toogle = true;
          this.icon = "star-fill";
          this.iconColor = "warning";
          break;
        }
      }
    },

    async setRating(rating) {
      var self = this;
      self.showRateDiv = false;
      self.reviewLoading = true;
      await this.$axios
        .$put(process.env.baseUrl + `/count/${this.$route.params.slug}`, {
          reviewcount: this.DetailArticle.reviewcount + this.rating
        })
        .then(function(res) {})
        .catch(error => {
          console.log(error);
        });

      self.$bvToast.show("my-toast-details");
      setTimeout(function() {
        self.reviewLoading = false;
      }, 1000);

      if (process.browser) {
        var existing = localStorage.getItem("ReviewedArticles");
        existing = existing ? existing.split(",") : [];
        existing.push(this.DetailArticle.slug);
        localStorage.setItem("ReviewedArticles", existing.toString());
      }

      // localStorage
    },
    async loadDataRecommended() {
      this.loadedRecommended = false;
      try {
        await this.$store.dispatch("detailPage/FetchMoreRecommendedArticles");
      } catch (e) {
        // alert("No more data" + e);
      }
      this.loadedRecommended = true;
    },
    async loadDataHighRated() {
      this.loadedHighRated = false;
      try {
        await this.$store.dispatch("detailPage/FetchMoreHighRatedArticles");
      } catch (e) {
        // alert("No more data" + e);
      }
      this.loadedHighRated = true;
    },
    checkLocalStorage() {
      if (process.browser) {
        if (localStorage.getItem("ReviewedArticles") == null) {
          this.showRateDiv = true;
        } else {
          var existingArticles = localStorage.getItem("ReviewedArticles");
          var arr = existingArticles.split(",");
          // console.log(arr);
          for (const iterator of arr) {
            if (iterator == this.$route.params.slug) {
              this.showRateDiv = false;
              break;
            }
          }
        }
      }
    }
  },
  mounted() {
    (adsbygoogle = window.adsbygoogle || []).push({});
    this.checkLocal();
    this.checkLocalStorage();
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  }
};
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"); */
/* .secreat {
  visibility: hidden;
} */

.custom-badge {
  border-radius: 30px;
  font-size: 14px;
}
.tag-text {
  margin: 5px;
}

.custom-home-card {
  cursor: pointer;
}

.get-bytton {
  color: #eee !important;
}
.tags {
  cursor: pointer;
}
.more-button {
  /* background: white; */
  border: 1px solid #dadce0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  height: 36px;
  line-height: 20px;
  padding: 7px 11px;
  position: relative;
  text-align: center;
  width: 100px;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}
.related-date-channel {
  font-size: 14px;
}
.rate-section {
  font-size: 1.125rem;
  color: #333745;
  line-height: 1.7;
  font-family: "Roboto", sans-serif;
}
.more-button-icon {
  left: 12px;
  margin-top: 0;

  height: 20px;
  width: 20px;

  align-self: center;
}
a {
  color: black !important;
  text-decoration: none;
}
.paragraph,
p {
  display: inline;
}
.paragraph .first .second {
  display: inline;
}
/* hr {
  border: 1px solid black;
} */
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.premimum-details {
  font-size: 1.125rem;
  color: #333745;
  line-height: 1.7;
  /* font-family: "Roboto", sans-serif; */
  opacity: 0.3;
}
.details {
  font-size: 1.125rem;
  color: #333745;
  line-height: 1.7;
  /* font-family: "Roboto", sans-serif; */
}
.details-bg {
  background: -webkit-linear-gradient(#e0dfdf, #eee);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.125rem;
  color: #1b1e21;
  line-height: 1.7;
  /* font-family: "Roboto", sans-serif; */
}
.custom-card-text-title {
  margin-top: 0px !important;
  color: #1b1e21;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: -0.5px;
}

.custom-latest-image {
  width: 100px;
  height: 64px;
  margin-left: 2px;
  border-radius: 5px;
}
.custom-list-item {
  border: none !important;
  margin-bottom: 13px;
  cursor: pointer;
  padding: 0px !important;
}

/* .custom-latest-text {
  margin-left: 5px;
  text-align: left;
  font-size: 16px;
} */
.latest-home-card-detailpage {
  background: #fff;
  box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
.related-card-title {
  color: rgb(27, 30, 33);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: -0.5px;
  /* font-family: "Roboto", sans-serif; */
}

/* Channel Tabs Start */

.tags,
a {
  color: white !important;
}
/* Channel Tabs End */
</style>

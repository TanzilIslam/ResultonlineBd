<template>
  <div class="detail-post">
    <b-row>
      <b-col cols="12" sm="12" md="8" lg="8" xl="8">
        <VclDetailCard v-if="$fetchState.pending" />
        <h4 v-else-if="$fetchState.error">
          Error while fetching posts: {{ $fetchState.error.message }}
        </h4>
        <div v-else>
          <b-card
            class="mb-2 mr-2"
            no-body
            :img-src="DetailArticle.photo"
            img-alt="card Image"
            text-variant="white"
            img-height="375"
          ></b-card>
          <span style="font-size:18px" class="text-muted">
            {{ DetailArticle.contentowners.authorsname }} |
            {{ DetailArticle.release_date }}
          </span>
          <div class="d-flex float-right mb-4">
            <b-img
              class=""
              style="width:20px;height:20px;"
              :src="require('~/assets/user/detailPage/fire.png')"
            ></b-img>
            <b-card-text text-tag="p" class="text-muted ">{{
              DetailArticle.view
            }}</b-card-text>
          </div>
          <b-card-text class="mt-4" text-tag="h4">{{
            DetailArticle.title
          }}</b-card-text>
          <!-- <h1>{{ details.length }} || {{ DetailArticle.details.length }}</h1> -->
          <div class="secreat">
            <div v-if="!DetailArticle.contentlock">
              <div v-html="DetailArticle.details" class="details mt-4"></div>

              <!-- <p class="details mt-4">
                {{ DetailArticle.details }}
              </p> -->
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

                <!-- <p class="details">
                  {{
                    DetailArticle.details.slice(
                      0,
                      (DetailArticle.details.length *
                        DetailArticle.Persentase) /
                        100
                    )
                  }}
                </p> -->
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
                <!-- <p class="noselect details-bg">
                  {{
                    DetailArticle.details.slice(
                      (DetailArticle.details.length *
                        DetailArticle.Persentase) /
                        100,
                      DetailArticle.details.length
                    )
                  }}
                </p> -->
              </div>
              <div class="text-center mt-4 mb-4 unlimited">
                <h5 class="details"><strong>get unlimited access</strong></h5>
                <p class="details">
                  You've read all of your free stories this month. Become a
                  member to keep reading.simple
                </p>
                <b-button
                  class="get-bytton"
                  variant="success"
                  :href="DetailArticle.contentlink"
                >
                  Get Full Article
                </b-button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </b-col>
      <b-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        class="order-md-last order-lg-last order-xl-last"
      >
        <div class="tags  mt-4 mb-3">
          <b-badge variant="primary">#Css3</b-badge>
          <b-badge variant="success">#NodeJs</b-badge>
          <b-badge variant="danger">#angular</b-badge>
          <b-badge variant="warning">#JavaScript</b-badge>
          <b-badge variant="info">#Django</b-badge>
          <b-badge variant="dark">#Bitcoin</b-badge>
        </div>
        <div v-if="rated" class="rate-section d-flex mb-4">
          <div class="mt-3"><h6>Please Rate us:</h6></div>
          <div class="ml-3">
            <!-- <h3 class="mb-1 ml-2" style="color:#1b1e21">3.6</h3> -->
            <client-only>
              <div @click="$bvToast.show('my-toast')">
                <star-rating
                  :star-size="40"
                  :show-rating="false"
                  v-model="rating"
                  @rating-selected="setRating"
                  :glow="2"
                ></star-rating>
              </div>
            </client-only>

            <h6 class="mt-3 ml-2">
              3.6 | {{ DetailArticle.reviewcount }} reviews
            </h6>
          </div>
        </div>
        <div v-else-if="!rated">
          <b-alert class="detail" show variant="dark"
            >Thanks for giving rating : {{ rating }}</b-alert
          >
          <div>
            <!-- <b-button @click="$bvToast.show('my-toast')">Show toast</b-button> -->

            <b-toast
              id="my-toast"
              toaster="b-toaster-bottom-center"
              variant="warning"
              solid
              auto-hide-delay="3000"
            >
              <template v-slot:toast-title>
                <div class="d-flex flex-grow-1  align-items-baseline">
                  <b-img
                    blank
                    blank-color="#ff5555"
                    class="mr-2"
                    width="12"
                    height="12"
                  ></b-img>
                  <strong class="mr-auto">Submitted!</strong>
                  <small class="text-muted mr-2">3 seconds ago</small>
                </div>
              </template>
              Reviwe Successfully Submitted!
            </b-toast>
          </div>
          <!-- <h6></h6> -->
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="4" lg="4" xl="4">
        <div class="pl-2 latest-home-card">
          <!-- <div>v-if="$fetchState.pending"  v-else </div> -->
          <VclRelatedCard v-if="$fetchState.pending" />
          <b-list-group v-else>
            <b-list-group-item
              v-for="(i, index) in RelatedArticles"
              :key="index"
              class="custom-list-item"
            >
              <nuxt-link prefetch :to="`/detailPost/${i.slug}`">
                <div @click="setview(i)" class="d-flex">
                  <div>
                    <b-img-lazy
                      blank-color="#bbb"
                      class="custom-latest-image"
                      :src="i.photo"
                    ></b-img-lazy>
                  </div>
                  <div class="ml-2">
                    <h5 class="related-card-title">
                      {{
                        i.title.length > 30
                          ? i.title.slice(0, 26) + ".."
                          : i.title
                      }}
                    </h5>
                    <div class="mt-2 related-date-channel">
                      <span>{{ i.contentowners.authorsname }} |</span>
                      <span class="text-muted">{{ i.release_date }}</span>
                    </div>
                  </div>
                </div>
              </nuxt-link>
              <hr class=" mb-1" />
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
    </b-row>
    <hr />
    <div class="recommended">
      <div class="d-flex  mb-3">
        <b-img
          style="background-color: #343a40; padding:5px"
          height="48"
          width="48"
          class="rounded"
          :src="require('~/assets/user/detailPage/1.png')"
        >
        </b-img>
        <h5 style="color:#222;" class="ml-2 mt-2">
          <strong>Recommended</strong>
        </h5>
      </div>
      <VclChannelCommonCard v-if="$fetchState.pending" />
      <h4 v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </h4>
      <div v-else>
        <b-row>
          <b-col
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            v-for="(article, index) in RecommendedArticles"
            :key="index"
          >
            <nuxt-link prefetch :to="`/detailPost/${article.slug}`">
              <ChannelCommonCard :article="article" :data-index="index" />
            </nuxt-link>
          </b-col>
        </b-row>
      </div>
      <!-- pagination Start -->
      <div class="myPagination">
        <div class="text-center mt-2 mb-2">
          <span v-if="!loadedRecommended"
            ><b-spinner
              style="width: 2rem; height: 2rem;"
              label="Loading..."
            ></b-spinner
          ></span>
          <div
            v-else-if="loadedRecommended"
            @click="loadDataRecommended"
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
    <hr />
    <div class="high-rated mb-4">
      <div class="d-flex  mb-3">
        <b-img
          style="background-color: #343a40; padding:5px"
          height="48"
          width="48"
          class="rounded"
          :src="require('~/assets/user/detailPage/2.png')"
        >
        </b-img>
        <h5 style="color:#222;" class="ml-2 mt-2">
          <strong>High Rated</strong>
        </h5>
      </div>
      <VclChannelCommonCard v-if="$fetchState.pending" />
      <h4 v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </h4>
      <div v-else>
        <b-row>
          <b-col
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            v-for="(article, index) in HighRatedArticles"
            :key="index"
          >
            <nuxt-link prefetch :to="`/detailPost/${article.slug}`">
              <ChannelCommonCard :article="article" :data-index="index" />
            </nuxt-link>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "detail",
  components: {},
  data() {
    return {
      rating: 0,
      loadedRecommended: true,
      loadedHighRated: true,
      rated: true
    };
  },
  head() {
    return {
      title: this.DetailArticle.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.DetailArticle.details
        }
      ]
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href:
      //       "https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap"
      //   }
      // ]
    };
  },
  async fetch() {
    var self = this;
    await this.$axios
      .$get(process.env.baseUrl + `/count/${this.$route.params.slug}`)
      .then(function(posts) {
        self.$store.dispatch("detailPage/FetchDetailArticle", posts);
      });

    await this.$axios
      .$get(
        process.env.baseUrl +
          `/dtl_rlt?search=${this.DetailArticle.channel.channelname}`
      )
      .then(posts =>
        this.$store.dispatch("detailPage/FetchRelatedArticles", posts.results)
      );

    await this.$axios
      .$get(process.env.baseUrl + `/recommended_data`)
      .then(posts =>
        this.$store.dispatch(
          "detailPage/FetchRecommendedArticles",
          posts.results
        )
      );
    await this.$axios
      .$get(process.env.baseUrl + `/high_ratetd`)
      .then(posts =>
        this.$store.dispatch("detailPage/FetchHighRatedArticles", posts.results)
      );

    // code for translate
    // this.$axios.setHeader("Content-Type", "application/x-www-form-urlencoded", [
    //   "post"
    // ]);
    // await this.$axios({
    //   method: "POST",
    //   url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    //   headers: {
    //     "content-type": "application/x-www-form-urlencoded",
    //     "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    //     "x-rapidapi-key": "5b2201df96mshfeee16372bdbe7bp1366cbjsnc71f0c228f94",
    //     "accept-encoding": "application/gzip",
    //     useQueryString: true,
    //     Authorizationtion: "5b2201df96mshfeee16372bdbe7bp1366cbjsnc71f0c228f94"
    //   },
    //   data: {
    //     source: "en",
    //     q: "Hello, world!",
    //     target: "es"
    //   }
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // this.$axios.setToken("5b2201df96mshfeee16372bdbe7bp1366cbjsnc71f0c228f94");
    // this.$axios.setHeader(
    //   "x-rapidapi-key",
    //   "5b2201df96mshfeee16372bdbe7bp1366cbjsnc71f0c228f94"
    // );
    // this.$axios
    //   .$post(
    //     "https://google-translate1.p.rapidapi.com/language/translate/v2",
    //     {
    //       source: "en",
    //       q: "Hello, world!",
    //       target: "es"
    //     },
    //     {
    //       headers: {
    //         "content-type": "application/x-www-form-urlencoded",
    //         "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    //         "x-rapidapi-key":
    //           "5b2201df96mshfeee16372bdbe7bp1366cbjsnc71f0c228f94",
    //         "accept-encoding": "application/gzip",
    //         useQueryString: true
    //       }
    //     }
    //   )
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // this.$axios.setHeader(
    //   "Authorization",
    //   "Bearer 5b2201df96mshfeee16372bdbe7bp1366cbjsnc71f0c228f94"
    // );
    // await this.$axios
    //   .$post(
    //     `https://google-translate1.p.rapidapi.com/language/translate/v2`,
    //     {
    //       source: "en",
    //       q: "Hello, world!",
    //       target: "es"
    //     },
    //     {
    //       "content-type": "application/x-www-form-urlencoded",
    //       "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    //       "x-rapidapi-key":
    //         "5b2201df96mshfeee16372bdbe7bp1366cbjsnc71f0c228f94",
    //       "accept-encoding": "application/gzip",
    //       useQueryString: true,
    //       Authorizationtion:
    //         "Bearer 5b2201df96mshfeee16372bdbe7bp1366cbjsnc71f0c228f94"
    //     }
    //   )
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  computed: mapState({
    DetailArticle: state => state.detailPage.DetailArticle,
    details: state =>
      state.detailPage.DetailArticle.details
        .replace(/(^\s*)|(\s*$)/gi, "")
        .replace(/[ ]{2,}/gi, " ")
        .replace(/\n /, "\n")
        .split(" "),
    RecommendedArticles: state => state.detailPage.RecommendedArticles,
    HighRatedArticles: state => state.detailPage.HighRatedArticles,
    RelatedArticles: state => state.detailPage.RelatedArticles
  }),
  methods: {
    // getRandomColor() {
    //   var letters = "0123456789ABCDEF";
    //   var color = "#";
    //   for (let index = 0; index < 6; index++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    //   }

    //   console.log(color);
    // },
    // getRndInteger() {
    //   console.log(Math.floor(Math.random() * (10 - 0)) + 0);
    // },
    async setRating(rating) {
      this.rated = false;
      // console.log(process.env.baseUrl + this.rating);
      await this.$axios
        .$put(process.env.baseUrl + `/count/${this.$route.params.slug}`, {
          reviewcount: this.DetailArticle.reviewcount + this.rating
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });

      // await this.$axios
      //   .$put("https://jsonplaceholder.typicode.com/posts/1", {
      //     userId: 2,
      //     id: 2,
      //     title: "Tanzil",
      //     body: "test put"
      //   })
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });

      // if (rating == 1) {
      //   alert("Good");
      // } else if (rating == 2) {
      //   alert("Better");
      // } else if (rating == 3) {
      //   alert("Best");
      // } else if (rating == 4) {
      //   alert("Very Good");
      // } else if (rating == 5) {
      //   alert("This is awsome");
      // }
      // console.log(this.rating);
    },
    async loadDataRecommended() {
      this.loadedRecommended = false;
      try {
        await this.$store.dispatch("detailPage/FetchMoreRecommendedArticles");
      } catch (e) {
        alert("No more data" + e);
      }
      this.loadedRecommended = true;
    },
    async loadDataHighRated() {
      this.loadedHighRated = false;
      try {
        await this.$store.dispatch("detailPage/FetchMoreHighRatedArticles");
      } catch (e) {
        alert("No more data" + e);
      }
      this.loadedHighRated = true;
    },
    async setview(article) {
      try {
        await this.$axios.$put(process.env.baseUrl + `/count/${article.slug}`, {
          view: article.view + 1
        });
        // this.$store.dispatch("countView/setViewcount", this.article.slug);
      } catch (e) {
        alert("No more data" + e);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  }
  // beforeRouteEnter(to, from, next) {
  //   next(vm => {
  //     vm.$axios
  //       .$put(process.env.baseUrl + `/count/${vm.$route.params.slug}`, {
  //         view: vm.DetailArticle.view + 1
  //       })
  //       .then(res => {})
  //       .catch(error => {});});
  // }
};
</script>

<style  scoped>
/* .secreat {
  visibility: hidden;
} */

.get-bytton {
  color: #eee !important;
}
.tags {
  font-size: 20px;
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
  font-family: "Roboto", sans-serif;
  opacity: 0.3;
}
.details {
  font-size: 1.125rem;
  color: #333745;
  line-height: 1.7;
  font-family: "Roboto", sans-serif;
}
.details-bg {
  background: -webkit-linear-gradient(#e0dfdf, #eee);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.125rem;
  color: #1b1e21;
  line-height: 1.7;
  font-family: "Roboto", sans-serif;
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
  margin-bottom: 9px;
  cursor: pointer;
  padding: 0px !important;
}

/* .custom-latest-text {
  margin-left: 5px;
  text-align: left;
  font-size: 16px;
} */
.latest-home-card {
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
  font-family: "Roboto", sans-serif;
}

/* Channel Tabs Start */
.all-under-line {
  height: 3px;
  width: 51px;
  background-color: black;
}
.top-under-line {
  height: 3px;
  width: 60px;
  background-color: black;
  margin-left: 49px;
}
.high-rated-under-line {
  height: 3px;
  width: 114px;
  background-color: black;
  margin-left: 107px;
}
.line {
  margin-top: 0px;
  padding-top: 0px;
}
/* Channel Tabs End */
</style>
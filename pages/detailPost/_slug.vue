<template>
  <div class="detail-post">
    <b-row no-gutters>
      <b-col cols="12" sm="12" md="9" lg="9" xl="9">
        <VclDetailCard v-if="$fetchState.pending" />
        <h4 v-else-if="$fetchState.error">
          Error while fetching posts: {{ $fetchState.error.message }}
        </h4>
        <div v-else>
          <b-card
            class="mb-2"
            no-body
            :img-src="DetailArticle.photo"
            img-alt="card Image"
            text-variant="white"
            img-height="479"
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
              <p class="details mt-4">
                {{ DetailArticle.details }}
              </p>
            </div>
            <div v-else-if="DetailArticle.contentlock">
              <div class="paragraph">
                <p class="details">
                  {{
                    DetailArticle.details.slice(
                      0,
                      (DetailArticle.details.length *
                        DetailArticle.Persentase) /
                        100
                    )
                  }}
                </p>
                <p class="noselect details-bg">
                  {{
                    DetailArticle.details.slice(
                      (DetailArticle.details.length *
                        DetailArticle.Persentase) /
                        100,
                      DetailArticle.details.length
                    )
                  }}
                </p>
              </div>
              <div class="text-center mt-4 mb-4 unlimited">
                <h5 class="details"><strong>get unlimited access</strong></h5>
                <p class="details">
                  You've read all of your free stories this month. Become a
                  member to keep reading.simple
                </p>
                <b-button variant="success" :href="DetailArticle.contentlink">
                  <span>Get Full Article</span>
                </b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex mt-4 mb-4">
          <h5 class="mr-4 mt-3">Please Rate us:</h5>
          <client-only>
            <star-rating
              :show-rating="false"
              v-model="rating"
              @rating-selected="setRating"
              :glow="2"
            ></star-rating>
          </client-only>
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="3" lg="3" xl="3">
        <div class="ml-2 latest-home-card">
          <b-list-group>
            <b-list-group-item class="custom-list-item" v-for="i in 4" :key="i">
              <div class="d-flex">
                <div>
                  <b-img
                    class="custom-latest-image"
                    :src="require('~/assets/user/dummyImages/1.jpg')"
                  ></b-img>
                </div>
                <div class="custom-latest-text">
                  <p class="mb-2">
                    <strong> This is a common title of details page</strong>
                  </p>
                  <div class="mt-2">
                    <span>Technology |</span>
                    <span class="text-muted">2010-11-22</span>
                  </div>
                </div>
              </div>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
    </b-row>
    <div>
      <!--Tab start -->
      <b-tabs :no-nav-style="true" content-class="mt-0 mb-0">
        <b-tab title="All" title-link-class="text-dark" active @click="goAll"
          ><div class="all-under-line"></div>
        </b-tab>
        <b-tab title="Top" title-link-class="text-dark" @click="goTop">
          <div class="top-under-line"></div>
        </b-tab>
        <b-tab
          title="High Rated"
          title-link-class="text-dark"
          @click="goHighRated"
        >
          <div class="high-rated-under-line"></div>
        </b-tab>
        <hr class="line" />
      </b-tabs>
      <!--Tab End -->
    </div>
    <div class="all" v-show="showAllDiv">
      <b-row v-if="$fetchState.pending">
        <b-col cols="12" sm="12" md="5" lg="5" xl="5"> <VclHomeCard /></b-col
      ></b-row>

      <h4 v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </h4>
      <b-row v-else>
        <b-col cols="12" sm="12" md="5" lg="5" xl="5">
          <HomeCard
            v-for="(article, index) in HomeArticles"
            :key="index"
            :article="article"
            :data-index="index"
          /> </b-col
      ></b-row>
    </div>
    <div class="top" v-show="showTopDiv">
      <VclChannelCommonCard v-if="$fetchState.pending" />
      <h4 v-else-if="$fetchState.error">
        Error while fetching posts: {{ $fetchState.error.message }}
      </h4>
      <div v-else>
        <b-row>
          <b-col
            sm="6"
            md="4"
            lg="4"
            xl="4"
            v-for="(article, index) in TopArticles"
            :key="index"
          >
            <nuxt-link prefetch :to="`/detailPost/${article.slug}`">
              <ChannelCommonCard :article="article" :data-index="index" />
            </nuxt-link>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="high-rated" v-show="showHighRatedDiv">High Rated</div>
    <!-- <b-row>
      <b-col md="6" lg="6" xl="6" sm="12" xs="12">
        <VclDetailCard v-if="$fetchState.pending" />
        <h4 v-else-if="$fetchState.error">
          Error while fetching posts: {{ $fetchState.error.message }}
        </h4>
        <div v-else>
          <b-card
            no-body
            :img-src="DetailArticle.photo"
            img-alt="card Image"
            text-variant="white"
            img-height="370"
          ></b-card>
          <b-card-text
            style="font-size:18px"
            text-tag="p"
            class="text-muted mt-3"
          >
            {{ DetailArticle.channel.channelname }} |
            {{ DetailArticle.release_date }}</b-card-text
          >
          <b-card-text text-tag="h4">{{ DetailArticle.title }}</b-card-text>
          <b-card-text text-tag="p" class="details mt-4">
            {{ DetailArticle.details }}</b-card-text
          >
        </div>
        <div class="d-flex">
          <h5 class="mr-4 mt-3">Please Rate us:</h5>
          <client-only>
            <star-rating
              :show-rating="false"
              v-model="rating"
              @rating-selected="setRating"
              :glow="2"
            ></star-rating>
          </client-only>
        </div>
      </b-col>
      <b-col sm="12" md="6" lg="6" xl="6">
        <b-row v-for="i in 2" :key="i">
          <b-card no-body class="mb-3" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  height="173"
                  width="170"
                  :src="require('~/assets/user/dummyImages/1.jpg')"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Beautifull Bangladesh">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-row>
      </b-col>
      <b-col sm="12" md="9" lg="9" xl="9">
        <hr />
        <b-row>
          <b-col sm="12" md="3" lg="3" xl="3" v-for="i in 3" :key="i">
            <b-card no-body>
              <b-card-img
                :src="require('~/assets/user/dummyImages/1.jpg')"
                top
                height="165"
                width=" 205"
                style="border-radius: 10px;"
              ></b-card-img>
              <b-card-text class="text-muted mt-3 ml-2" text-tag="p"
                >12-2-2020</b-card-text
              >
              <b-card-text class="custom-card-text-title ml-2"
                >This is a common Title</b-card-text
              >
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row> -->
    <!-- pagination Start -->
    <div class="myPagination">
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
    </div>
    <!-- pagination End -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      rating: 0,
      Loading: false,
      showAllDiv: true,
      showTopDiv: false,
      showHighRatedDiv: false,
      loaded: true
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
    await this.$axios
      .$get(process.env.baseUrl + `/details/${this.$route.params.slug}`)
      .then(posts =>
        this.$store.dispatch("detailPage/FetchDetailArticle", posts)
      );
    await this.$axios
      .$get(process.env.baseUrl)
      .then(posts =>
        this.$store.dispatch("detailPage/FetchHomeArticles", posts.results)
      );
    await this.$axios
      .$get(process.env.baseUrl + `/TopContent`)
      .then(posts =>
        this.$store.dispatch("detailPage/FetchTopArticles", posts.results)
      );
  },
  computed: mapState({
    DetailArticle: state => state.detailPage.DetailArticle,
    details: state =>
      state.detailPage.DetailArticle.details
        .replace(/(^\s*)|(\s*$)/gi, "")
        .replace(/[ ]{2,}/gi, " ")
        .replace(/\n /, "\n")
        .split(" "),
    HomeArticles: state => state.detailPage.HomeArticles,
    TopArticles: state => state.detailPage.TopArticles
  }),
  methods: {
    setRating(rating) {
      if (rating == 1) {
        alert("Good");
        this.rating = null;
      } else if (rating == 2) {
        alert("Better");
      } else if (rating == 3) {
        alert("Best");
      } else if (rating == 4) {
        alert("Very Good");
      } else if (rating == 5) {
        alert("This is awsome");
      }
    },
    goAll() {
      var self = this;
      self.showAllDiv = true;
      self.showTopDiv = false;
      self.showHighRatedDiv = false;
    },
    goTop() {
      var self = this;
      self.showAllDiv = false;
      self.showTopDiv = true;
      self.showHighRatedDiv = false;
    },
    goHighRated() {
      var self = this;
      self.showAllDiv = false;
      self.showTopDiv = false;
      self.showHighRatedDiv = true;
    },
    async loadData() {
      if (this.showAllDiv == true) {
        this.loaded = false;
        try {
          await this.$store.dispatch("detailPage/FetchMoreHomeArticles");
        } catch (e) {
          alert("No more data" + e);
        }
        this.loaded = true;
      } else if (this.showTopDiv == true) {
        this.loaded = false;
        try {
          await this.$store.dispatch("detailPage/FetchMoreTopArticles");
        } catch (e) {
          alert("No more data" + e);
        }
        this.loaded = true;
      } else if (this.showHighRatedDiv == true) {
        alert("High Rated");
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

<style  scoped>
/* .secreat {
  visibility: hidden;
} */
a {
  color: black !important;
  text-decoration: none;
}
.paragraph,
p {
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
  width: 80px;
  height: 80px;
  margin-left: 2px;
  border-radius: 5px;
}
.custom-list-item {
  border: none !important;
  margin-bottom: 53px;
  cursor: pointer;
  padding: 0px !important;
}

.custom-latest-text {
  margin-left: 5px;
  text-align: left;
  font-size: 16px;
}
/* .latest-home-card { */
/* background: #fff; */
/* box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px; */
/* } */

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
<template>
  <div class="blog-detail">
    <b-row no-gutters>
      <b-col cols="12" sm="12" md="8" lg="8" xl="8">
        <VclDetailCard v-if="$fetchState.pending" />
        <h4 v-else-if="$fetchState.error">
          Error while fetching posts: {{ $fetchState.error.message }}
        </h4>
        <div v-else>
          <b-card
            class="mb-2"
            no-body
            :img-src="DetailArticle.post_img"
            img-alt="card Image"
            text-variant="white"
            img-height="375"
          ></b-card>
          <span style="font-size:18px" class="text-muted">
            {{ DetailArticle.catagry_select.cat_name }}
            <!-- |
            {{ DetailArticle.release_date }} -->
          </span>
          <!-- <div class="d-flex float-right mb-4">
            <b-img
              class=""
              style="width:20px;height:20px;"
              :src="require('~/assets/user/detailPage/fire.png')"
            ></b-img>
            <b-card-text text-tag="p" class="text-muted ">{{
              DetailArticle.view
            }}</b-card-text>
          </div> -->
          <b-card-text class="mt-4" text-tag="h4">{{
            DetailArticle.title
          }}</b-card-text>

          <div v-html="DetailArticle.decribe_post" class="mt-3 details"></div>
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
      </b-col>
      <b-col cols="12" sm="12" md="4" lg="4" xl="4">
        <div class="ml-2 latest-home-card">
          <!-- <div>v-if="$fetchState.pending"  v-else </div> -->
          <VclRelatedCard v-if="$fetchState.pending" />
          <b-list-group v-else>
            <b-list-group-item
              v-for="(i, index) in RelatedArticles"
              :key="index"
              class="custom-list-item"
            >
              <nuxt-link prefetch :to="`/blogDetail/${i.blog_slug}`">
                <div class="d-flex">
                  <div>
                    <b-img-lazy
                      blank-color="#bbb"
                      class="custom-latest-image"
                      :src="i.post_img"
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
                      <span>{{ i.catagry_select.cat_name }} |</span>
                      <span class="text-muted">{{ i.created_at }}</span>
                    </div>
                  </div>
                </div>
              </nuxt-link>
              <hr />
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
            <nuxt-link prefetch :to="`/blogDetail/${article.blog_slug}`">
              <div class="channel-common-card">
                <b-card no-body class="custom-channel-common-card">
                  <b-card-img-lazy
                    blank-color="#bbb"
                    :src="article.post_img"
                    top
                    height="165"
                    style="border-radius: 10px;"
                  ></b-card-img-lazy>
                  <b-card-text
                    class="text-muted custom-card-text-date"
                    text-tag="p"
                    >{{ article.created_at }}</b-card-text
                  >
                  <b-card-text text-tag="h6" class="custom-card-text-title">{{
                    article.title
                  }}</b-card-text>
                </b-card>
              </div>
            </nuxt-link>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-toast
      toaster="b-toaster-bottom-center"
      id="my-toast"
      variant="dark"
      solid
    >
      <template v-slot:toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img
            blank
            blank-color="black"
            class="mr-2"
            width="12"
            height="12"
          ></b-img>
          <strong class="mr-auto">End!</strong>
          <!-- <small class="text-muted mr-2">42 seconds ago</small> -->
        </div>
      </template>
      No more data are available
    </b-toast>
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
      rated: true,
      DetailArticle: {},
      RelatedArticles: [],
      RecommendedArticles: [],
      recommendedNextData: ""
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
    };
  },
  async fetch() {
    var self = this;
    // details data
    await self.$axios
      .$get(
        process.env.baseUrl +
          `/blog/api/v1/details/${self.$route.params.blogSlug}`
      )
      .then(posts => (self.DetailArticle = posts));

    // related data
    await self.$axios
      .$get(process.env.baseUrl + `/blog/api/v1/cover`)
      .then(posts => (self.RelatedArticles = posts.results));

    // recomanded data

    await self.$axios
      .$get(process.env.baseUrl + "/blog/api/v1/recommended")
      .then(function(posts) {
        self.RecommendedArticles = posts.results;
        // self.this.recommendedNextData = posts.next;
      })
      .catch(function(error) {
        console.log("No Net" + error);
      })
      .finally(function() {});
  },
  // computed: mapState({
  //   DetailArticle: state => state.detailPage.DetailArticle,
  //   details: state =>
  //     state.detailPage.DetailArticle.details
  //       .replace(/(^\s*)|(\s*$)/gi, "")
  //       .replace(/[ ]{2,}/gi, " ")
  //       .replace(/\n /, "\n")
  //       .split(" "),
  //   RecommendedArticles: state => state.detailPage.RecommendedArticles,
  //   HighRatedArticles: state => state.detailPage.HighRatedArticles,
  //   RelatedArticles: state => state.detailPage.RelatedArticles
  // }),
  methods: {
    async loadDataRecommended() {
      if (this.recommendedNextData != null) {
        this.loadedRecommended = false;
        var self = this;
        await self.$axios
          .$get(process.env.baseUrl)
          .then(function(posts) {
            posts.results.forEach(element => {
              self.RecommendedArticles.push(element);
            });
            self.recommendedNextData = posts.next;
          })
          .catch(function(error) {
            console.log("No Net" + error);
          })
          .finally(function() {});
        self.loadedRecommended = true;
      } else {
        this.$bvToast.show("my-toast");
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

.custom-channel-common-card {
  border: none !important;
  cursor: pointer;
  background-color: #fafafa;
  margin-bottom: 30px;
}
.custom-card-text-date {
  margin-top: 10px;
  font-weight: 400;
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 0px !important;
}
.custom-card-text-title {
  margin-top: 0px !important;
  color: rgb(27, 30, 33);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: -0.5px;
}

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
  margin-bottom: 2px;
  cursor: pointer;
  padding: 0px !important;
}

/* .custom-latest-text {
  margin-left: 5px;
  text-align: left;
  font-size: 16px;
} */
/* .latest-home-card { */
/* background: #fff; */
/* box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px; */
/* } */
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
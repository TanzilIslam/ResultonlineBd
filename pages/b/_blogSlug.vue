<template>
  <div class="blog-detail">
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
    <b-row no-gutters>
      <b-col cols="12" sm="12" md="8" lg="8" xl="8">
        <VclDetailCard v-if="$fetchState.pending" />
        <h4 v-else-if="$fetchState.error">
          Error while fetching posts: {{ $fetchState.error.message }}
        </h4>
        <div v-else>
          <div v-if="DetailArticle.is_active">
            <b-card
              class="mb-2 mr-2"
              no-body
              :img-src="DetailArticle.photo"
              img-alt="card Image"
              text-variant="white"
              img-height="375"
            ></b-card>
            <div class="d-flex">
              <div style="font-size: 18px;" class="text-muted">
                {{ DetailArticle.catagry_select.cat_name }} |
                {{ DetailArticle.created_at }}
              </div>
              <div class="ml-auto mr-2">
                <b-icon
                  class="h4"
                  style="cursor:pointer;"
                  @click="active2 = !active2"
                  icon="reply"
                ></b-icon>
              </div>
            </div>
            <b-card-text class="mt-4" text-tag="h4">{{
              DetailArticle.title
            }}</b-card-text>

            <div v-html="DetailArticle.details" class="mt-3 details"></div>
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
      </b-col>
      <b-col cols="12" sm="12" md="4" lg="4" xl="4">
        <div class="ml-2 latest-home-card">
          <!-- <div>v-if="$fetchState.pending"  v-else </div> -->
          <VclRelatedCard v-if="$fetchState.pending" />
          <b-list-group style="background-color: white;" v-else>
            <b-list-group-item
              v-for="(i, index) in RelatedArticles"
              :key="index"
              class="custom-list-item"
            >
              <div v-if="i.is_active">
                <nuxt-link prefetch :to="`/b/${i.slug}`">
                  <div class="d-flex">
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
                        <span>{{ i.catagry_select.cat_name }} |</span>
                        <span class="text-muted">{{ i.created_at }}</span>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
                <hr class="p-0 m-0" v-if="index < 3" />
              </div>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
    </b-row>
    <hr />
    <div class="recommended">
      <div class="d-flex mb-3">
        <b-img
          style="background-color: #343a40; padding: 5px;"
          height="42"
          width="42"
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
            <div v-if="article.is_active">
              <nuxt-link prefetch :to="`/b/${article.slug}`">
                <div class="channel-common-card">
                  <b-card no-body class="custom-channel-common-card">
                    <b-card-img-lazy
                      blank-color="#bbb"
                      :src="article.photo"
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
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <vs-dialog width="470px" not-center v-model="active2">
      <template #header>
        <h6 class="pt-3">Share this article</h6>
      </template>
      <ShareModal :pathUrl="`/b/${this.$route.params.blogSlug}`" />
    </vs-dialog>
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
      recommendedNextData: "",
      active2: false
    };
  },
  head() {
    return {
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
        self.RecommendedArticles = posts;
        // self.this.recommendedNextData = posts.next;
      })
      .catch(function(error) {
        console.log("No Net" + error);
      })
      .finally(function() {});
  },
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
        // this.$bvToast.show("my-toast");
      }
    }
  },
  mounted() {
    (adsbygoogle = window.adsbygoogle || []).push({});
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  }
};
</script>

<style scoped>
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
  /* font-family: "Roboto", sans-serif; */
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
  margin-bottom: 5px;
  cursor: pointer;
  /* padding: 0px !important; */
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

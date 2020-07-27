<template>
  <div class="home">
    <Carousel />
    <Breadcrumb :allActive="true" />

    <b-row>
      <!-- Channel start -->
      <b-col class="home-sidebar" cols="12" sm="12" md="3" lg="3" xl="3">
        <SideBar />
        <div class="pt-2 mb-3">
          <b-row class="m-1">
            <b-col
              class="pt-1"
              cols="3"
              sm="3"
              md="6"
              lg="6"
              xl="6"
              v-for="(i, index) in footerList"
              :key="index"
            >
              <!-- <nuxt-link :to="i.link"> -->
              <p class="mb-3 footer-name link-hover">{{ i.name }}</p>

              <!-- </nuxt-link -->
            </b-col>
            <b-col class="pt-1" cols="12" sm="12" md="12" lg="12" xl="12">
              <div class="d-flex justify-content-start social-icon">
                <b-img
                  class="footer-name social-icons"
                  :src="require('~/assets/user/footer/facebook-circled.png')"
                ></b-img>

                <b-img
                  class="footer-name social-icons"
                  :src="require('~/assets/user/footer/images.jpeg')"
                ></b-img>
                <b-img
                  class="footer-name social-icons"
                  :src="require('~/assets/user/footer/download.png')"
                ></b-img>
              </div>
              <div class="pt-3 footer-name">© 2020 · NuxtIt</div>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <!-- channel end -->

      <!-- latest start -->
      <b-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        xl="4"
        class="order-md-last order-lg-last order-xl-last home-latest"
      >
        <div class="latest-home-card mb-4">
          <h5 class="custom-latest-title ml-2">Fresh</h5>
          <hr class="custom-latest-hr" />
          <b-list-group>
            <moon-loader
              v-if="$fetchState.pending"
              color="#000000"
              class="spinner"
              :size="40"
            ></moon-loader>
            <h4 v-else-if="$fetchState.error">
              Error while fetching posts: {{ $fetchState.error.message }}
            </h4>
            <b-list-group-item
              v-else
              v-for="(article, index) in LatestArticles"
              :key="index"
              :data-index="index"
              class="custom-list-item"
            >
              <nuxt-link prefetch :to="`/detailPost/${article.slug}`">
                <div @click="setview(article)" class="d-flex">
                  <div class="custom-latest-text mr-3">
                    {{ article.title }}
                    <p class="mt-4 text-muted">{{ article.release_date }}</p>
                  </div>
                  <div class="ml-auto">
                    <b-img
                      class="custom-latest-image"
                      :src="article.photo"
                    ></b-img>
                  </div>
                </div>
              </nuxt-link>
              <hr class="custom-latest-item-hr" />
            </b-list-group-item>
          </b-list-group>
        </div>

        <div class="blog pt-3">
          <div class="latest-home-card">
            <h5 class="custom-latest-title ml-2">Blog</h5>
            <hr class="custom-latest-hr" />
            <div class="mb-4" v-for="(i, index) in blog" :key="index">
              <nuxt-link :to="`/blogDetail/${i.slug}`">
                <b-card class="pl-2 pr-2" no-body style="border: none;">
                  <b-card-img
                    height="160"
                    :src="i.photo"
                    style="border-radius: 10px;"
                  ></b-card-img>
                  <b-card-text
                    text-tag="p"
                    class="custom-card-text-title pt-2 pb-4 pl-1"
                  >
                    {{ i.title }}
                  </b-card-text>
                </b-card>
                <hr class="mx-3 my-0" v-if="index == 0" />
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="qanda mb-4 latest-home-card">
          <h5 class="custom-latest-title ml-2">Q and A</h5>
          <hr class="custom-latest-hr" />
          <b-row>
            <b-col
              cols="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              v-for="(j, index) in qandA"
              :key="index"
            >
              <div class="pl-2 pr-2 mb-3">
                <nuxt-link prefetch :to="`/qandADetail/${j.slug}`">
                  <b-card class="pl-2 pt-2" no-body>
                    <div @click="setViewQandA(j.view, j.slug)">
                      <h6>
                        <strong>{{ j.title }}</strong>
                      </h6>
                      <p>
                        {{ j.details.slice(0, 40) + "..." }}
                      </p>
                    </div>
                  </b-card>
                </nuxt-link>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <!-- latest end -->

      <!-- home card start -->
      <b-col cols="12" sm="12" md="5" lg="5" class="index-home-card" xl="5">
        <div id="myDIV" class="sticky">
          <div class="home-cards">
            <VclHomeCard v-if="$fetchState.pending" />
            <h4 v-else-if="$fetchState.error">
              Error while fetching posts: {{ $fetchState.error.message }}
            </h4>
            <HomeCard
              v-else
              v-for="(article, index) in HomeArticles"
              :key="index"
              :article="article"
              :data-index="index"
            />
            <VclHomeCard v-if="showCl" />
            <!-- <moon-loader
              v-if="!loaded"
              color="#000000"
              class="spinner-bottom"
              :size="40"
            ></moon-loader> -->
          </div>
        </div>
      </b-col>
      <!-- home card end -->
    </b-row>
    <div>
      <!-- toast start -->
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
      <!-- tost end -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MoonLoader } from "@saeris/vue-spinners";
import vuescroll from "vuescroll";
import axios from "axios";
export default {
  layout: "default",
  components: { MoonLoader, vuescroll },
  head() {
    return {
      title: "ResultOnlineBd - Home Page",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Here you can find all the latest information about technology,mobile phones,educations etc.",
        },
      ],
    };
  },
  data() {
    return {
      loading: false,
      showCl: false,
      nextUrl: "",
      footerList: [
        {
          name: "Terms",
          link: "",
        },
        {
          name: "Privacy",
          link: "",
        },
        {
          name: "Get In Touch",
          link: "",
        },
        {
          name: "About Us",
          link: "",
        },
      ],
      blog: [],
      qandA: [],
    };
  },
  async fetch() {
    var self = this;
    var tokenStr1 =
      "dhhdofhofhwefieo90zSeheoip.Nwwuhehewuheo#ddofhh$$iohdoishNb<annsiasias>abssbuis<snosoiasnios>";
    // var tokenStr2 =
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY";
    // self.$axios.setHeader(
    //   "Authorization",
    //   `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY${tokenStr1}`
    // );
    await self.$axios
      .$get(process.env.baseUrl, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY`,
        },
      })
      .then(function (posts) {
        self.$store.dispatch("home/FetchHomeArticles", posts.results);
        self.nextUrl = posts.next;
      })
      .catch(function (error) {
        console.log("No Net" + error);
      })
      .finally(function () {});
    await this.$axios
      .$get(process.env.baseUrl + `/latestdata`)
      .then((posts) => this.$store.dispatch("home/FetchLatestArticles", posts));

    // blog
    await this.$axios
      .$get(process.env.baseUrl + `/blog/api/v1/home_card`)
      .then((posts) => (this.blog = posts));

    // qand a
    await this.$axios
      .$get(process.env.baseUrl + `/q&a/api/v1/qanda_home`)
      .then((posts) => (this.qandA = posts));
  },
  computed: mapState({
    HomeArticles: (state) => state.home.HomeArticles,
    LatestArticles: (state) => state.home.LatestArticles,
  }),
  methods: {
    scroll() {
      window.onscroll = () => {
        // this.lazyload();
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;

        let bottomOfWindowTwo =
          window.innerHeight + document.documentElement.scrollTop >=
          document.body.offsetHeight;

        const scrollY = window.scrollY;
        const visible = document.documentElement.clientHeight;
        const pageHeight = document.documentElement.scrollHeight;

        let bottomOfWindowThree = visible + scrollY >= pageHeight;
        if (bottomOfWindowTwo) {
          if (this.$route.path === "/") {
            this.showCl = true;
            this.loadData();
          }
        }
      };
    },
    async loadData() {
      if (this.nextUrl != null) {
        var self = this;
        self.$axios.setHeader(
          "Authorization",
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY"
        );
        await this.$axios
          .$get(self.nextUrl)
          .then(function (posts) {
            posts.results.forEach((element) => {
              self.$store.dispatch("home/More", element);
            });
            self.nextUrl = posts.next;
            self.loaded = true;
          })
          .catch(function (error) {
            console.log("No Net" + error);
          })
          .finally(function () {});

        self.showCl = false;
      } else {
        this.$bvToast.show("my-toast");
        this.showCl = false;
      }
    },
    async setview(article) {
      try {
        await this.$axios.$put(process.env.baseUrl + `/count/${article.slug}`, {
          view: article.view + 1,
        });
        // this.$store.dispatch("countView/setViewcount", this.article.slug);
      } catch (e) {
        alert("No more data" + e);
      }
    },
    async setviewqAndA(view, slug) {
      await this.$axios
        .$put(process.env.baseUrl + `/q&a/api/v1/dtls/${slug}`, {
          view: view + 1,
        })
        .then(function (response) {})
        .catch(function (e) {
          console.log(e);
        });
    },
  },
  mounted() {
    // this.check();
    this.scroll();
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
/* .myDIV {
  padding-bottom: 20px;
} */
/* .sticky {
  position: sticky;
  top: 0px;
  padding-bottom: 20px;
} */

p.link-hover :hover {
  display: none;
  background-color: #cfbebe !important;
  border-radius: 8px;
}
.footer-name {
  cursor: pointer;
  color: #757575;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
}
/* .home{

} */
.latest-home-card {
  background: #fff;
  box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
.custom-latest-title {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 20px;
  color: rgb(20, 23, 24);
  padding: 0 12px;
  /* border-bottom: 1px solid #eee; */
}
.custom-latest-hr {
  margin-top: 0px;
  margin-left: 10px;
  margin-right: 10px;
}
.custom-latest-item-hr {
  margin: 0px;
}
.custom-list-item {
  border: none !important;
  margin-bottom: 5px;
  cursor: pointer;
}
.custom-latest-image {
  width: 80px;
  height: 80px;
  left: 10px;
  top: 10px;
  border-radius: 8px;
}
.custom-latest-text {
  margin-left: 20px;
  margin-top: 10px;
  text-align: left;
  line-height: 20px;
  font-size: 14px;
}

.spinner {
  align-self: center;
  margin-bottom: 10px;
}
.spinner-bottom {
  margin: 10px;
  left: 37%;
}
a {
  color: black !important;
  text-decoration: none !important;
}
.social-icons {
  height: 25px;
  width: 25px;
  margin-right: 25px;
  cursor: pointer;
}
.custom-card-text-title {
  margin-top: 0px !important;
  color: rgb(27, 30, 33);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: -0.5px;
}
</style>

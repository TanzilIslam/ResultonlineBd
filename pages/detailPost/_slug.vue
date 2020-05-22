<template>
  <div class="detail-post">
    <b-row>
      <b-col cols="12" sm="12" md="9" lg="9" xl="9">
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
          <div>
            <b-row>
              <b-col cols="6" sm="6" md="11" lg="10" xl="10">
                <b-card-text
                  style="font-size:18px"
                  text-tag="p"
                  class="text-muted mt-3"
                >
                  {{ DetailArticle.channel.channelname }} |
                  {{ DetailArticle.release_date }} -
                </b-card-text>
              </b-col>
              <b-col cols="6" sm="6" md="1" lg="2" xl="2">
                <div class="d-flex mt-3">
                  -
                  <b-img
                    class=""
                    style="width:20px;height:20px;"
                    :src="require('~/assets/user/detailPage/fire.png')"
                  ></b-img>
                  <b-card-text text-tag="p" class="text-muted ">{{
                    DetailArticle.view
                  }}</b-card-text>
                </div>
              </b-col>
            </b-row>
          </div>
          <b-card-text class="mt-4" text-tag="h4">{{
            DetailArticle.title
          }}</b-card-text>
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
      <b-col cols="12" sm="12" md="3" lg="3" xl="3"> </b-col>
    </b-row>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      rating: 0,
      Loading: false
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
    await this.$axios
      .$get(process.env.baseUrl + `/details/${this.$route.params.slug}`)
      .then(posts =>
        this.$store.dispatch("detailPage/FetchDetailArticle", posts)
      );
  },
  computed: mapState({
    DetailArticle: state => state.detailPage.DetailArticle
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
hr {
  border: 1px solid black;
}
.details {
  font-size: 1.125rem;
  color: #333745;
  line-height: 1.7;
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
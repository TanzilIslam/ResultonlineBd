<template>
  <div class="detail-post">
    <b-row>
      <b-col md="6" lg="6" xl="6" sm="12" xs="12">
        <VclDetailCard v-if="$fetchState.pending" />
        <p v-else-if="$fetchState.error">
          Error while fetching posts: {{ $fetchState.error.message }}
        </p>
        <b-card
          v-else
          no-body
          :img-src="detailCard.photo"
          img-alt="card Image"
          text-variant="white"
          img-height="370"
        ></b-card>
        <p style="font-size:18px" class="text-muted mt-3">
          {{ detailCard.channel.channelname }} | {{ detailCard.release_date }}
        </p>
        <h4>{{ detailCard.title }}</h4>
        <p class="details mt-4">{{ detailCard.details }}</p>
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
          <!-- <b-img
            class="cards"
            :src="require('~/assets/user/dummyImages/1.jpg')"
          ></b-img>
          <div class="float-right"> -->

          <!-- </div> -->
        </b-row>
      </b-col>
      <b-col sm="12" md="9" lg="9" xl="9">
        <hr />
        <!-- <nuxt-link prefetch :to="`/detailPost/${a.slug}`"> -->
        <b-row >
          <b-col sm="12" md="3" lg="3" xl="3" v-for="i in 3" :key="i">
      <b-card no-body>
      <b-card-img
        :src="require('~/assets/user/dummyImages/1.jpg')"
        top
        height="165"
        width=" 205"
        style="border-radius: 10px;"
      ></b-card-img>
      <b-card-text class="text-muted mt-3 ml-2" text-tag="p">12-2-2020</b-card-text>
      <b-card-text class="custom-card-text-title ml-2">This is a common Title</b-card-text>
    </b-card>
          </b-col>
        </b-row>
        <!-- </nuxt-link> -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      rating: 0
    };
  },
  head() {
    return {
      title: this.detailCard.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "What you need to know about " + this.detailCard.title
        }
      ]
    };
  },
  async fetch() {
    var details = await this.$axios
      .$get(process.env.baseUrl + "/details/" + this.$route.params.slug)
      .then(item => this.$store.dispatch("setDetailArticle", item));
  },
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
  computed: {
    detailCard() {
      return this.$store.getters.getdetailArticle;
    }
  }
};
</script>

<style scoped>
hr {
  border: 1px solid black;
}
/* .sub {
  font-size: 20px;
} */
/* .title {
  text-align: center;
  margin-top: 140px;
} */
.cards {
}
/* b-card,
img {
  height: 350px;
} */
/* .margin {
  margin-top: 70px;
  font-family: "Roboto", sans-serif;
} */
.details {
  text-align: justify;
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
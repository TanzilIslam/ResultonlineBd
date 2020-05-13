<template>
  <div class="detail-post">
    <b-row class="margin">
      <b-col md="6" lg="6" sm="12" xs="12">
        <!-- <div v-if="loading">
          <vlcD />
        </div> -->
        <div>
          <b-card
            no-body
            :img-src="detailCard.photo"
            img-alt="card Image"
            text-variant="white"
          ></b-card>
          <p style="font-size:18px" class="text-muted sub">
            {{ detailCard.channel.channelname }} | {{ detailCard.release_date }}
          </p>
          <h5>{{ detailCard.title }}</h5>
          <p class="details">{{ detailCard.details }}</p>
          <!-- <span class="float-left">
            Please Rate us:
            <span class="">
              <star-rating
                :show-rating="false"
                v-model="rating"
                @rating-selected="setRating"
                :glow="2"
              ></star-rating>
            </span>
          </span> -->
        </div>
      </b-col>
      <!-- <b-col md="6" lg="6" sm="12">
        <b-row v-for="i in 2" :key="i" class="ml-1 mb-2">
          <b-img
            class="cards"
            :src="require('../../assets/user/carousel/articleCover.jpg')"
          ></b-img>
          <div class="float-right">
            <h5 class="ml-4 mt-3">Beautifull Bangladesh</h5>
            <h6 class="ml-4 mt-3">
              some thing need to explore while we are alive
            </h6>
            <h6 class="ml-4 mt-1">in the world and we should stay.</h6>
          </div>
        </b-row>
      </b-col> -->
      <!-- <SmallCardTwo /> -->
    </b-row>
  </div>
</template>

<script>
export default {
  components: {},
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
  computed: {
    detailCard() {
      return this.$store.getters.getdetailArticle;
    }
  }
};
</script>

<style scoped>
/* .hr {
  border: 2px solid black;
}
.sub {
  font-size: 20px;
}
.title {
  text-align: center;
  margin-top: 140px;
}
.cards {
  height: 170px;
  width: 170px;
  border-radius: 7px;
}
b-card,
img {
  height: 350px;
}
.margin {
  margin-top: 70px;
  font-family: "Roboto", sans-serif;
}
.details {
  text-align: justify;
} */
</style>
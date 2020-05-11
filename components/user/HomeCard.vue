<template>
  <div class="home-card">
    <!-- <div v-show="loading">
      <VclHomeCard />
    </div> -->
    <div>
      <!-- <div class="custom-home-card rounded" v-for="article in HomeArticle" :key="article.id">
        <b-card no-body style="max-width: 40rem;" class="mb-4">
          <div class="d-flex">
            <div class="ml-3 mt-3 mb-2">
              <b-card-img
                class="rounded-circle p-1 img-logo"
                :src="article.contentowners.authorsprofilrimg"
              ></b-card-img>
            </div>
            <div class="mt-4 ml-3 mb-2">
              <b-card-text>
                <div>
                  <b-link :to="{ path: '/authorProfile/' +  article.contentowners.authorsname }">
                    <h5 class="custome-home-card-title">{{ article.contentowners.authorsname }}</h5>
                  </b-link>
                  <p class="text-muted">{{ article.release_date }}</p>
                </div>
              </b-card-text>
            </div>
          </div>
          <h5 class="ml-4">{{ article.title }}</h5>
          <b-link :to="{ path: './postDetails/' + article.slug }">
            <b-card-img :src="article.photo" bottom height="230" width="280"></b-card-img>
          </b-link>
        </b-card>
      </div>
    </div> -->
    </div>
  </div>
</template>

<script>
// import { HTTP } from "@/api/index.js";
// import VclHomeCard from "./VclHomeCard";

export default {
  name: "HomeCard",
  // components: { VclHomeCard },
  data() {
    return {
      loading: true
    };
  },
  methods: {}
  // mounted() {
  //   var self = this;
  //   HTTP.get("/")
  //     .then(function(response) {
  //       self.$store.dispatch("setHomeArticle", response.data.results);
  //       self.loading = false;
  //     })
  //     .catch(function(error) {
  //       console.log("No Net" + error);
  //     })
  //     .finally(function() {});
  // },
  // computed: {
  //   HomeArticle() {
  //     var self = this;
  //     return self.$store.getters.getHomeArticle;
  //   }
  // }
};
</script>

<style scoped>
/* .home-card {

} */
.custom-home-card {
  cursor: pointer;
}
.img-logo {
  width: 70px !important;
  height: 70px !important;
}
a {
  color: black !important;
  text-decoration: none !important;
}
</style>

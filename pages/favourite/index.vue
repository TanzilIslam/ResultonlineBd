<template>
  <div class="favourite">
    <div class="d-flex pt-3 mb-3">
      <b-img
        style="background-color: #343a40; padding: 5px;"
        height="48"
        width="48"
        class="rounded"
        :src="require('~/assets/user/detailPage/1.png')"
      >
      </b-img>
      <h5 style="color: #222;" class="ml-2 mt-2">
        <strong>Favourite</strong>
      </h5>
    </div>
    <VclChannelCommonCard v-if="$fetchState.pending" />
    <b-row v-else>
      <b-col
        cols="12"
        sm="6"
        md="3"
        lg="3"
        xl="3"
        v-for="(article, index) in data"
        :key="index"
      >
        <!-- <nuxt-link prefetch :to="`/detailPost/${article.slug}`"> -->
        <ChannelCommonCard :article="article" :data-index="index" />
        <!-- </nuxt-link> -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      slugs: [],
      pending: true,
    };
  },

  async fetch() {
    await this.getValue();
    await this.getData();
    // this.pending = false;
    // console.log(this.data);
  },
  methods: {
    async getData() {
      for (const iterator of this.slugs) {
        var self = this;
        await self.$axios
          .$get(process.env.baseUrl + `/count/${iterator}`)
          .then(function (posts) {
            self.data.push(posts);
          })
          .catch(function (e) {
            console.log(e);
          });
      }
    },
    getValue() {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        if (key != "ReviewedArticles") {
          // this.data = JSON.parse(key, value);
          this.slugs.push(key);
          // this.slugs.push(JSON.parse(key));
        }
      }
    },
  },
  // mounted() {
  //   this.getValue();
  // }
};
</script>

<style  scoped>
a {
  color: black !important;
  text-decoration: none;
}
</style>
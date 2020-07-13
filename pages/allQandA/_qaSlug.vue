<template>
  <div>
    <div class="cover mt-2 mb-3">
      <b-card class="latest-home-card">
        <!-- <nuxt-link prefetch :to="`/allQandA/${i.q_slug}`"> -->
        <b-card-text text-tag="h2" class="channel-cover-title">
          <b-img
            class="shawdo-sm rounded mr-1"
            height="50"
            width="50"
            :src="'http://cdn.resultonlinebd.com/media/' + data.q_icon"
          ></b-img>
          {{ data.publisher }}</b-card-text
        >
        <!-- </nuxt-link> -->
      </b-card>
    </div>

    <b-row>
      <b-col
        v-for="(j, index) in data.List"
        :key="index"
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
        class="mb-3"
      >
        <nuxt-link prefetch :to="`/qandADetail/${j.q_slug}`">
          <b-card no-body class="card-body">
            <div @click="setView(j.post_views, j.q_slug)">
              <h4>
                <strong>{{ j.qname }}</strong>
              </h4>
              <p class="text-muted">
                {{ j.created_at }}
                <b-icon icon="clock-fill" class="ml-1"></b-icon>
              </p>
              <p>
                {{ j.decribe_post.slice(0, 40) }}
              </p>
            </div>
          </b-card>
        </nuxt-link>
      </b-col>
    </b-row>
    <!-- Pagination Start End -->
    <div class="myPagination">
      <div class="text-center mt-5 mb-3">
        <b-button variant="dark" @click="loadData">Load More</b-button>
      </div>
    </div>
    <!-- Pagination End -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      next: ""
    };
  },
  async fetch() {
    var self = this;
    await self.$axios
      .$get(
        process.env.baseUrl +
          `/q&a/api/v1/q_channel/${self.$route.params.qaSlug}`
      )
      .then(function(posts) {
        console.log(self.data);

        self.data = posts.results;
        self.next = posts.next;
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {});
  },
  methods: {
    async loadData() {
      if (this.next != null) {
        var self = this;
        await self.$axios
          .$get(self.next)
          .then(function(posts) {
            posts.results.List.forEach(element => {
              self.data.List.push(element);
            });
            self.next = posts.next;
          })
          .catch(function(error) {
            console.log("No Net" + error);
          })
          .finally(function() {});
      } else {
        alert("Null");
      }
    },
    async setView(view, slug) {
      this.$axios
        .$put(process.env.baseUrl + `/q&a/api/v1/dtls/${slug}`, {
          post_views: view + 1
        })
        .then(function(response) {})
        .catch(function(e) {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
.channel-cover-title {
  margin-top: 20px;
  text-align: center !important;
  color: rgb(0, 0, 0) !important;
}
a {
  color: black !important;
  text-decoration: none !important;
}
.card-body {
  border-radius: 8px;
}
.latest-home-card {
  background: #fff;
  box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 160px;
}
</style>
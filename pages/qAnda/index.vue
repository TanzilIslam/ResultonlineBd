<template>
  <div class="question-and-answere">
    <div v-for="(i, index) in data" :key="index">
      <div class="cover mt-2 mb-3">
        <b-card img-height="160" text-variant="black" class="latest-home-card">
          <nuxt-link prefetch :to="`/allQandA/${i.q_slug}`">
            <b-card-text text-tag="h2" class="channel-cover-title">
              <b-img
                class="shawdo-sm rounded mr-2"
                height="50"
                width="50"
                :src="i.q_icon"
              ></b-img>
              {{ i.q_name }}</b-card-text
            >
          </nuxt-link>
        </b-card>
      </div>
      <b-row>
        <b-col
          v-for="(j, index) in i.List"
          :key="index"
          cols="12"
          sm="10"
          md="10"
          lg="10"
          xl="10"
          class="mb-3"
        >
          <nuxt-link prefetch :to="`/qandADetail/${j.q_slug}`">
            <b-card no-body class="card-body">
              <div class="d-flex ">
                <div>
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
                <div class="ml-auto">
                  <b-img
                    :src="'http://cdn.resultonlinebd.com' + j.post_img"
                    class="rounded"
                    height="100"
                    width="100"
                  ></b-img>
                </div>
              </div>
            </b-card>
          </nuxt-link>
        </b-col>
      </b-row>
    </div>

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
      .$get(process.env.baseUrl + "/q&a/api/v1/")
      .then(function(posts) {
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
            posts.results.forEach(element => {
              self.data.push(element);
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
    }
  }
};
</script>

<style scoped>
/* .question-and-answere{

} */
.channel-cover-title {
  margin-top: 10px;
  text-align: center !important;
  color: black !important;
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
}
</style>
<template>
  <div class="question-and-answere">
    <!-- tags -->
    <div
      class="tags flex-wrap d-flex  justify-content-between"
      style="padding-top:35px;padding-bottom:35px;"
    >
      <div
        variant="light"
        v-for="(item, index) in subTagList"
        :key="index"
        @click="showSubTagPosts(item)"
        class="qa-tags"
      >
        {{ item.shot_list_name }}
      </div>
    </div>

    <!-- root data -->
    <div v-if="!selectedData">
      <div v-for="(i, index) in data" :key="index">
        <div class="cover mt-2 mb-3">
          <b-card class="latest-home-card">
            <nuxt-link prefetch :to="`/allQandA/${i.q_slug}`">
              <b-card-text text-tag="h2" class="channel-cover-title">
                <b-img
                  class="shawdo-sm rounded mr-1"
                  height="50"
                  width="50"
                  :src="i.q_icon"
                ></b-img>
                {{ i.publisher }}</b-card-text
              >
            </nuxt-link>
          </b-card>
        </div>
        <b-row>
          <b-col
            v-for="(j, index) in i.List"
            :key="index"
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            class="mb-3"
          >
            <nuxt-link prefetch :to="`/qandADetail/${j.q_slug}`">
              <b-card no-body class="card-body">
                <div @click="setView(j.post_views, j.q_slug)">
                  <h6>
                    <strong>{{ j.qname.slice(0, 40) + ".." }}</strong>
                  </h6>
                  <p class="text-muted">
                    {{ j.created_at }}
                    <b-icon icon="clock-fill" class="ml-1"></b-icon>
                  </p>
                  <p>
                    {{ j.decribe_post.slice(0, 40) + ".." }}
                  </p>
                </div>
              </b-card>
            </nuxt-link>
          </b-col>
        </b-row>
      </div>
    </div>

    <!-- selected Data -->
    <div v-else>
      <b-row>
        <b-col
          v-for="(j, index) in subTagData"
          :key="index"
          cols="12"
          sm="6"
          md="3"
          lg="3"
          xl="3"
          class="mb-3"
        >
          <nuxt-link prefetch :to="`/qandADetail/${j.q_slug}`">
            <b-card no-body class="card-body">
              <div @click="setView(j.post_views, j.q_slug)">
                <h6>
                  <strong>{{ j.qname.slice(0, 40) + ".." }}</strong>
                </h6>
                <p class="text-muted">
                  {{ j.created_at }}
                  <b-icon icon="clock-fill" class="ml-1"></b-icon>
                </p>
                <p>
                  {{ j.decribe_post.slice(0, 40) + ".." }}
                </p>
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
      next: "",
      subTagList: [],
      selectedData: false,
      subTagData: []
    };
  },
  async fetch() {
    var self = this;
    await self.$axios
      .$get(process.env.baseUrl + "/q&a/api/v1/short_list")
      .then(function(posts) {
        self.subTagList = posts.results;
      })
      .catch(function(error) {
        console.log(error);
      });

    await self.$axios
      .$get(process.env.baseUrl + "/q&a/api/v1/")
      .then(function(posts) {
        self.data = posts.results;
        self.next = posts.next;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    async loadData() {
      if (this.next != null) {
        var self = this;
        await self.$axios
          .$get(self.next)
          .then(function(posts) {
            posts.results.forEach(element => {
              if (!self.selectedData) {
                self.data.push(element);
              } else {
                self.subTagData.push(element);
              }
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
    async showSubTagPosts(item) {
      var self = this;
      await self.$axios
        .$get(item.shot_list_data)
        .then(function(posts) {
          // console.log(posts);
          // self.data = "";
          self.subTagData = posts.results;
          self.next = posts.next;
          self.selectedData = true;
          // subtag
        })
        .catch(function(error) {
          console.log("No Net" + error);
        });
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
/* .question-and-answere{

} */
.channel-cover-title {
  /* margin: auto; */
  margin-top: 20px;
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
  height: 140px;
}
.qa-tags {
  cursor: pointer;
  background-color: #ebebeb;
  border-radius: 6px;
  height: 40px;
  padding: 7px 30px;
}
</style>

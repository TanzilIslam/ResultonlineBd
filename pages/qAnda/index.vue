<template>
  <div class="question-and-answere">
    <!-- tags -->

    <h5 class="pt-4"><strong> #shortList</strong></h5>
    <div
      class="tags flex-wrap d-flex justify-content-between"
      style="padding-bottom: 20px;"
    >
      <div
        v-for="(item, index) in subTagList"
        :key="index"
        @click="showSubTagPosts(item)"
      >
        <div v-if="item.is_active" class="qa-tags my-2">
          {{ item.shot_list_name }}
        </div>
      </div>
    </div>

    <!-- root data -->
    <b-row>
      <b-col
        class="order-md-last order-lg-last order-xl-last"
        cols="12"
        sm="12"
        md="3"
        lg="3"
        xl="3"
      >
        <div style="background-color: #f8f9fa; padding: 10px; margin-top: 7px;">
          <h2 class="side-bar-title">All</h2>
          <hr />
          <b-list-group>
            <b-list-group-item
              v-for="(i, index) in fastCheck"
              :key="index"
              class="p-0 m-0 list-item mb-4"
            >
              <div v-if="i.is_active">
                <nuxt-link prefetch :to="`/q/${i.slug}`">
                  <div @click="setView(i.view, i.slug)">
                    <h4 class="list-title">
                      {{ i.title }}
                    </h4>
                    <p class="text-muted sub-title">
                      {{ i.catagry.publisher }}
                    </p>
                  </div>
                </nuxt-link>
              </div>
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="9" lg="9" xl="9">
        <div v-if="!selectedData">
          <div v-for="(i, index) in data" :key="index">
            <div v-if="i.is_active" class="cover mt-2 mb-3">
              <!-- <b-row> -->
              <!-- <b-col cols="12" sm="12" md="9" lg="9" xl="9"> -->
              <b-card class="latest-home-card">
                <nuxt-link prefetch :to="`/allQandA/${i.q_slug}`">
                  <b-card-text text-tag="h2" class="channel-cover-title">
                    <!-- <b-img
                      class="shawdo-sm rounded mr-1"
                      height="50"
                      width="50"
                      :src="i.q_icon"
                    ></b-img> -->
                    {{ i.publisher }}</b-card-text
                  >
                </nuxt-link>
              </b-card>
              <!-- </b-col> -->
              <!-- </b-row> -->
            </div>
            <b-row>
              <b-col
                v-for="(j, index) in i.List"
                :key="index"
                cols="12"
                sm="6"
                md="4"
                lg="4"
                xl="4"
                class="mb-3"
              >
                <div v-if="j.is_active">
                  <nuxt-link prefetch :to="`/q/${j.slug}`">
                    <b-card no-body class="card-body">
                      <div @click="setView(j.view, j.slug)">
                        <h6>
                          <strong>{{ j.title.slice(0, 20) + ".." }}</strong>
                        </h6>
                        <p class="text-muted">
                          {{ j.created_at }}
                          <b-icon icon="clock-fill" class="ml-1"></b-icon>
                        </p>
                        <p>
                          {{ j.details.slice(0, 40) + ".." }}
                        </p>
                      </div>
                    </b-card>
                  </nuxt-link>
                </div>
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
              md="4"
              lg="4"
              xl="4"
              class="mb-3"
            >
              <div v-if="j.is_active">
                <nuxt-link prefetch :to="`/q/${j.slug}`">
                  <b-card no-body class="card-body">
                    <div @click="setView(j.view, j.slug)">
                      <h6>
                        <strong>{{ j.title.slice(0, 40) + ".." }}</strong>
                      </h6>
                      <p class="text-muted">
                        {{ j.created_at }}
                        <b-icon icon="clock-fill" class="ml-1"></b-icon>
                      </p>
                      <p>
                        {{ j.details.slice(0, 40) + ".." }}
                      </p>
                    </div>
                  </b-card>
                </nuxt-link>
              </div>
            </b-col>
          </b-row>
        </div>
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
      next: "",
      subTagList: [],
      selectedData: false,
      subTagData: [],
      fastCheck: [],
    };
  },
  async fetch() {
    var self = this;
    await self.$axios
      .$get(process.env.baseUrl + "/q&a/api/v1/short_list")
      .then(function (posts) {
        self.subTagList = posts.results;
      })
      .catch(function (error) {
        console.log(error);
      });

    await self.$axios
      .$get(process.env.baseUrl + "/q&a/api/v1/")
      .then(function (posts) {
        self.data = posts.results;
        self.next = posts.next;
      })
      .catch(function (error) {
        console.log(error);
      });

    await self.$axios
      .$get(process.env.baseUrl + "/q&a/api/v1/qna_fast_check")
      .then(function (posts) {
        self.fastCheck = posts;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    async loadData() {
      if (this.next != null) {
        var self = this;
        await self.$axios
          .$get(self.next)
          .then(function (posts) {
            posts.results.forEach((element) => {
              if (!self.selectedData) {
                self.data.push(element);
              } else {
                self.subTagData.push(element);
              }
            });
            self.next = posts.next;
          })
          .catch(function (error) {
            console.log("No Net" + error);
          })
          .finally(function () {});
      } else {
        alert("Null");
      }
    },
    async showSubTagPosts(item) {
      var self = this;
      await self.$axios
        .$get(item.shot_list_data)
        .then(function (posts) {
          // console.log(posts);
          // self.data = "";
          self.subTagData = posts.results;
          self.next = posts.next;
          self.selectedData = true;
          // subtag
        })
        .catch(function (error) {
          console.log("No Net" + error);
        });
    },
    async setView(view, slug) {
      this.$axios
        .$put(process.env.baseUrl + `/q&a/api/v1/dtls/${slug}`, {
          view: view + 1,
        })
        .then(function (response) {})
        .catch(function (e) {
          console.log("setview " + e);
        });
    },
  },
};
</script>

<style scoped>
/* .question-and-answere{

} */

.side-bar-title {
  font-size: 1rem;

  font-weight: 500;
  color: #856368;
}
.channel-cover-title {
  /* margin: auto; */
  /* margin-top: 20px; */
  text-align: center !important;
  color: black !important;
  font-size: 25px;
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
  /* box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05); */
  border-radius: 5px;
  height: 80px;
}
.qa-tags {
  cursor: pointer;
  background-color: #ffffff;
  border-radius: 8px;
  height: 40px;
  padding: 7px 30px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 6px 8px, rgba(0, 0, 0, 0.3) 0px 1px 2px;
}
.list-title {
  font-size: 0.875rem;
  line-height: 1.4;
  color: #202131;
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  font-weight: 600;
}
.sub-title {
  font-size: 0.75rem;
}
.list-item {
  background: transparent;
  border: none;
}
</style>

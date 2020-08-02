<template>
  <div>
    <div class="pt-4" style="margin-bottom: 260px;" v-if="nodata">
      <h4>
        Your search <strong>{{ this.$route.params.key }}</strong> did not match
        any results.
      </h4>
      <h4>Suggestions:</h4>
      <ul>
        <li>Make sure that all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>Try more general keywords.</li>
      </ul>
    </div>
    <div v-else>
      <div v-if="$fetchState.pending">
        <div class="pt-2" style="margin-bottom: 200px; text-align: center;">
          <b-spinner
            style="width: 3rem; height: 3rem;"
            label="Loading..."
          ></b-spinner>
        </div>
      </div>
      <div v-else>
        <b-row>
          <b-col cols="12" sm="6" md="12" lg="12" xl="12">
            <b-list-group>
              <b-list-group-item
                v-for="(i, index) in searched"
                :key="index"
                class="mb-4 py-4"
              >
                <div v-if="i.targetUrl.url == 'count/'">
                  <nuxt-link :to="`${dGeneral}${i.slug}`">
                    <div
                      @click="setView(i.view, i.targetUrl.url, i.slug)"
                      class="d-flex"
                    >
                      <div class="image-section mr-4">
                        <b-img
                          height="102"
                          width="102"
                          class="rounded"
                          :src="`http://cdn.resultonlinebd.com/media/${i.photo}`"
                        ></b-img>
                      </div>
                      <div class="text-section">
                        <h1 class="text-title pb-3">
                          {{ i.title }}
                        </h1>
                        <p class="text-description">
                          {{ i.details.slice(0, 30) }}
                        </p>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
                <div v-else-if="i.targetUrl.url == 'q&a/api/v1/dtls/'">
                  <nuxt-link :to="`${dQandA}${i.slug}`">
                    <div
                      @click="setView(i.view, i.targetUrl.url, i.slug)"
                      class="d-flex"
                    >
                      <div class="image-section mr-4">
                        <!-- <b-img
                      height="102"
                      width="102"
                      class="rounded"
                      :src="`http://cdn.resultonlinebd.com/media/${i.photo}`"
                    ></b-img> -->
                      </div>
                      <div class="text-section">
                        <h1 class="text-title pb-3">
                          {{ i.title }}
                        </h1>
                        <p class="text-description">
                          {{ i.details.slice(0, 30) }}
                        </p>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div v-else-if="i.targetUrl.url == 'blog/api/v1/details/'">
                  <nuxt-link :to="`${dBlog}${i.slug}`">
                    <div class="d-flex">
                      <div class="image-section mr-4">
                        <b-img
                          height="102"
                          width="102"
                          class="rounded"
                          :src="`http://cdn.resultonlinebd.com/media/${i.photo}`"
                        ></b-img>
                      </div>
                      <div class="text-section">
                        <h1 class="text-title pb-3">
                          {{ i.title }}
                        </h1>
                        <p class="text-description">
                          {{ i.details.slice(0, 30) }}
                        </p>
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </div>
    </div>

    <!-- Pagination Start End -->
    <div v-if="showPag" class="myPagination">
      <div class="text-center mt-5 mb-3">
        <b-button variant="dark" @click="loadData">Load More</b-button>
      </div>
    </div>
    <!-- Pagination End -->
  </div>
</template>

<script>
import { VclFacebook } from "vue-content-loading";

export default {
  components: { VclFacebook },
  data() {
    return {
      searched: [],
      next: "",
      dGeneral: "/detailPost/",
      dQandA: "/qandADetail/",
      dBlog: "/blogDetail/",
      nodata: false,
      showPag: false,
    };
  },
  async fetch() {
    var self = this;
    await self.$axios
      .$get(process.env.baseUrl + "/serach/" + self.$route.params.key)
      .then(function (posts) {
        self.searched = posts.results;
        if (posts.next != null) {
          self.next = posts.next;
          self.showPag = true;
        }
      })
      .catch(function (e) {
        self.nodata = true;
      });
  },
  computed: {},
  methods: {
    async loadData() {
      if (this.next != null) {
        var self = this;
        await self.$axios
          .$get(self.next)
          .then(function (posts) {
            posts.results.forEach((element) => {
              self.searched.push(element);
            });
            self.next = posts.next;
          })
          .catch(function (error) {
            console.log("No Net" + error);
          })
          .finally(function () {});
      } else {
        alert("no more data");
      }
    },

    async setView(viwes, url, slug) {
      await this.$axios
        .$put(process.env.baseUrl + `/${url}${slug}`, {
          view: viwes + 1,
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
.list-group-item + .list-group-item {
  border-top-width: 1px !important;
}
a {
  color: black;
  text-decoration: none;
}
.text-title {
  font-size: 24px;
  font-weight: 900;
  font-family: "ars-maquette-web", sans-serif;
}
.text-description {
  font-size: 12px;
  line-height: 1.5;
  font-family: "ars-maquette-web", sans-serif;
}
.content-loading {
  height: 150px;
}
</style>
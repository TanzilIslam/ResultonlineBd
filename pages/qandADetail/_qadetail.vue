<template>
  <div class="qa-details">
    <div class="text-center pt-4" v-if="$fetchState.pending">
      <h4>Loading...</h4>
    </div>
    <b-row v-else class="pt-4">
      <b-col class="mb-3" cols="12" sm="12" md="9" lg="9" xl="9">
        <div>
          <div class="question mb-4">
            <b-card no-body>
              <div class="m-4">
                <div class="d-flex w-100">
                  <div>
                    <h4>
                      <strong>{{ data.title }}</strong>
                    </h4>
                  </div>

                  <div class="ml-auto">
                    <div class="d-flex">
                      <b-icon icon="eye-fill" class="mt-1 ml-2 mr-1"></b-icon>
                      {{ data.view }}
                      <b-icon icon="reply" class="mt-1 ml-4"></b-icon>
                    </div>
                  </div>
                </div>
                <p class="text-muted">
                  {{ data.catagry.publisher }}
                </p>
                <p>{{ data.details }}</p>
              </div>
            </b-card>
          </div>
          <div class="answer pt-4">
            <h4>
              <b-icon
                icon="award-fill"
                class="mr-1"
                style="height: 30px;width:30px;"
              ></b-icon>
              <strong>Solution</strong>
            </h4>
            <b-card no-body>
              <div class="m-4">
                <div v-html="data.awnsr_qna"></div>
              </div>
            </b-card>
          </div>
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="3" lg="3" xl="3">
        <b-card no-body>
          <b-list-group>
            <h5 class="mb-3 pt-3 ml-3" style="color:#71839f;">
              Suggested Topics
            </h5>
            <b-list-group-item
              class="qa-list-item"
              v-for="(i, index) in relatedData"
              :key="index"
            >
              <nuxt-link prefetch :to="`/qandADetail/${i.slug}`">
                <div @click="setView(i.view, i.slug)">
                  {{ i.title }}
                </div>
              </nuxt-link>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      relatedData: []
    };
  },
  async fetch() {
    var self = this;
    await self.$axios
      .$get(
        process.env.baseUrl + `/q&a/api/v1/dtls/${self.$route.params.qadetail}`
      )
      .then(function(posts) {
        self.data = posts;
      })
      .catch(function(e) {
        console.log(e);
      });

    await self.$axios
      .$get(
        process.env.baseUrl +
          `/q&a/api/v1/q_related_data/${self.data.catagry.publisher}`
      )
      .then(function(posts) {
        self.relatedData = posts;
      })
      .catch(function(e) {
        console.log(e);
      });
  },
  methods: {
    async setView(view, slug) {
      this.$axios
        .$put(process.env.baseUrl + `/q&a/api/v1/dtls/${slug}`, {
          view: view + 1
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
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

.qa-list-item {
  border: none;
  font-size: 0.875rem;
  line-height: 1.25;
  font-weight: 500;
}
a {
  color: black;
  text-decoration: none;
}
.qa-details {
  font-family: "Inter", sans-serif;
}
</style>
<template>
  <div class="qa-details">
    <div class="text-center pt-4" v-if="$fetchState.pending">
      <h4>Loading...</h4>
    </div>
    <b-row v-else class="pt-4">
      <b-col class="mb-3" cols="12" sm="12" md="9" lg="9" xl="9">
        <div v-if="data.is_active">
          <div class="question mb-4">
            <!-- <h4> -->
            <div class="d-flex">
              <div class="image-holder">
                <b-img
                  class="mr-2"
                  height="30"
                  width="30"
                  alt="question logo"
                  src="~/assets/user/icons/qa.svg"
                >
                </b-img>
              </div>

              <h4><strong>Question</strong></h4>
            </div>

            <!-- </h4> -->
            <b-card no-body>
              <div class="m-4">
                <div class="d-flex w-100">
                  <div>
                    <h4>
                      <strong>{{ data.title }}</strong>
                    </h4>
                  </div>

                  <div class="ml-auto">
                    <div class="d-flex pt-1">
                      <b-icon
                        icon="eye-fill"
                        class=" ml-2 mr-1 my-auto"
                      ></b-icon>
                      {{ data.view }}
                      <b-icon
                        icon="reply"
                        style="cursor:pointer;"
                        @click="active2 = !active2"
                        class="mt-1 ml-4 h5 my-auto"
                      ></b-icon>
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
            <!-- <h4> -->
            <div class="d-flex">
              <!-- <div class="d-flex"> -->
              <div class="image-holder">
                <b-img
                  class="mr-2"
                  height="30"
                  width="30"
                  alt="answare logo"
                  src="~/assets/user/icons/ans.svg"
                >
                </b-img>
              </div>

              <h4><strong>Answere</strong></h4>
            </div>

            <!-- </h4> -->
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
            <h5 class="mb-3 pt-3 ml-3" style="color: #71839f;">
              Suggested Topics
            </h5>
            <b-list-group-item
              class="qa-list-item"
              v-for="(i, index) in relatedData"
              :key="index"
            >
              <div v-if="i.is_active">
                <nuxt-link prefetch :to="`/q/${i.slug}`">
                  <div>
                    {{ i.title }}
                  </div>
                </nuxt-link>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>
    <vs-dialog width="470px" not-center v-model="active2">
      <template #header>
        <h6 class="pt-3">Share this Question and Answere</h6>
      </template>
      <ShareModal
        :pathUrl="`/q&a/api/v1/dtls/${this.$route.params.qadetail}`"
      />
    </vs-dialog>
  </div>
</template>

<script>
export default {
  layout: "notKeepAlive",
  data() {
    return {
      data: {},
      relatedData: [],
      active2: false,
      articleView: 0
    };
  },
  async fetch() {
    var self = this;
    await self.$axios
      .$get(
        process.env.baseUrl + `/q&a/api/v1/dtls/${self.$route.params.qadetail}`
      )
      .then(function(posts) {
        // console.log("1st get ", posts.view);
        self.articleView = posts.view;
      });

    await self.$axios
      .$put(
        process.env.baseUrl + `/q&a/api/v1/dtls/${self.$route.params.qadetail}`,
        {
          view: self.articleView + 1
        },
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY`
          }
        }
      )
      .then(function(e) {
        // console.log("2nd ", e.view);
      });

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
        self.relatedData = posts.results;
      })
      .catch(function(e) {
        console.log(e);
      });
  },
  methods: {}
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
.image-holder {
  padding-left: 8px;
  padding-top: 4px;
  border-radius: 5px;
  margin-right: 8px;
  margin-bottom: 4px;
  /* text-align: center; */
  /* padding: 8px; */
  background-color: #e4e6eb;
}
</style>

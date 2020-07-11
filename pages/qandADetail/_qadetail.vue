<template>
  <div class="qa-details">
    <b-row class="pt-4">
      <b-col class="mb-3" cols="12" sm="12" md="9" lg="9" xl="9">
        <div>
          <div class="question mb-4">
            <b-card no-body>
              <div class="m-4">
                <h4>
                  <strong>{{ data.qname }}</strong>
                </h4>
                <p class="text-muted">
                  {{ data.catagry_select.q_name }}
                </p>
                <p>{{ data.decribe_post }}</p>
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
            <b-list-group-item class="qa-list-item" v-for="i in 10" :key="i">
              Multi tasking for software engineers, good or evil?
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
      suggested: []
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
  }
};
</script>

<style scoped>
.qa-list-item {
  border: none;
  font-size: 0.875rem;
  line-height: 1.25;
  font-weight: 500;
}
.qa-details {
  font-family: "Roboto", sans-serif;
}
</style>
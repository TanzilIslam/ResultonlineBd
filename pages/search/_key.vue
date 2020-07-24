<template>
  <div>
    <div v-if="$fetchState.pending"></div>
    <div v-else>
      <b-row>
        <b-col cols="12" sm="6" md="12" lg="12" xl="12">
          <b-list-group>
            <b-list-group-item
              v-for="(i, index) in searched"
              :key="index"
              class="mb-4"
            >
              <div class="d-flex">
                <div class="image-section mr-4">
                  <b-img
                    v-if="i.photo"
                    height="102"
                    width="102"
                    class="rounded"
                    :src="i.photo"
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
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searched: [],
      next: "",
    };
  },
  async fetch() {
    var self = this;
    self.$axios
      .$get(process.env.baseUrl + "/serach/" + self.$route.params.key)
      .then(function (posts) {
        // self.searched = posts.results;
        // self.next = posts.next;

        posts.results.forEach((element) => {
          element[0].forEach((e) => {
            console.log(e.title);
          });
        });
      })
      .catch(function (e) {
        console.log(e);
      });
  },
};
</script>

<style scoped>
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
</style>
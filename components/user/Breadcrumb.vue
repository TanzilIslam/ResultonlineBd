<template>
  <div class="breadcrumb">
    <b-container>
      <b-row>
        <b-col class="text-center" sm="12" xs="12" lg="12" md="12">
          <b-button
            variant="outline-dark"
            class="b-button ml-2"
            v-bind:class="{ active: allActive }"
            @click="loadAll()"
          >
            <b-icon icon="window" scale="1" variant=" light ? dark "></b-icon>ALL
          </b-button>
          <b-button
            variant="outline-dark"
            class="b-button ml-2"
            v-bind:class="{ active: topActive }"
            @click="loadTop()"
          >
            <b-icon icon="graph-up" scale="1" variant=" light ? dark "></b-icon>#Top
          </b-button>
          <b-button
            variant="outline-dark"
            class="b-button ml-2"
            v-bind:class="{ active: trendingActive }"
            @click="loadTrending()"
          >
            <b-icon icon="credit-card" scale="1" variant=" light ? dark "></b-icon>#Trending
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    allActive: {
      type: Boolean,
      default: false
    },
    topActive: {
      type: Boolean,
      default: false
    },
    trendingActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    loadAll() {
      this.$router.push("/");
    },
    loadTop() {
      this.$router.push("/TopPosts");
    },
    loadTrending() {
      this.$router.push("/TrendingPosts");
    }
  }
};
</script>

<style scoped>
.breadcrumb {
  background: none;
}
.b-button {
  border-radius: 15px;
  font-size: 12px;
  height: 30px;
  text-align: center;
}
</style>
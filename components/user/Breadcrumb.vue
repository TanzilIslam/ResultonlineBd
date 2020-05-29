<template>
  <div class="breadcrumb">
    <b-container>
      <b-row>
        <b-col class="text-center">
          <b-button
            variant="outline-dark"
            class="b-button"
            v-bind:class="{ active: allActive }"
            @click="loadAll()"
          >
            <b-icon
              class="ml-2 mr-2"
              icon="window"
              scale="1"
              variant=" light ? dark "
            ></b-icon
            ><span class="mr-2">ALL</span>
          </b-button>
          <b-button
            variant="outline-dark"
            class="b-button ml-2"
            v-bind:class="{ active: topActive }"
            @click="loadTop()"
          >
            <b-icon
              class="ml-2 mr-2"
              icon="graph-up"
              scale="1"
              variant=" light ? dark "
            ></b-icon
            ><span class="mr-2">Top</span>
          </b-button>
          <b-button
            variant="outline-dark"
            class="b-button ml-2"
            v-bind:class="{ active: highRatedActive }"
            @click="loadhighRated()"
          >
            <b-icon
              class="ml-2 mr-2"
              icon="credit-card"
              scale="1"
              variant=" light ? dark "
            ></b-icon
            ><span class="mr-2">High Rated</span>
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
    highRatedActive: {
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
      this.$router.push("/top");
    },
    loadhighRated() {
      this.$router.push("/high-rated");
    }
  }
};
</script>

<style scoped>
.breadcrumb {
  background: none;
}
.b-button {
  margin-bottom: 5px;
  border-radius: 15px;
  font-size: 14px;
  height: 30px;
  text-align: center !important;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.5px;
}
</style>
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
              class="mr-2"
              icon="window"
              scale="1"
              variant=" light ? dark "
            ></b-icon
            >ALL
          </b-button>
          <b-button
            variant="outline-dark"
            class="b-button ml-2"
            v-bind:class="{ active: topActive }"
            @click="loadTop()"
          >
            <b-icon
              class="mr-2"
              icon="graph-up"
              scale="1"
              variant=" light ? dark "
            ></b-icon
            >Top
          </b-button>
          <b-button
            variant="outline-dark"
            class="b-button ml-2"
            v-bind:class="{ active: highRatedActive }"
            @click="loadhighRated()"
          >
            <b-icon
              class="mr-2"
              icon="credit-card"
              scale="1"
              variant=" light ? dark "
            ></b-icon
            >High Rated
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
  border-radius: 15px;
  font-size: 13px;
  height: 30px;
  text-align: center !important;
}
</style>
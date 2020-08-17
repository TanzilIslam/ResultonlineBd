<template>
  <div class="breadcrumbs py-3">
    <!-- <b-container> -->

    <div class="d-flex justify-content-center">
      <div
        variant="outline-dark"
        class="b-button btn btn-outline-dark d-flex"
        v-bind:class="{ active: allActive }"
        @click="loadAll()"
      >
        <b-img
          alt="logo of all catagory articles"
          class="rounded"
          height="20"
          width="20"
          src="~assets/user/icons/all.svg"
        ></b-img>
        <span class="mx-md-2 mx-lg-2 mx-xl-2">ALL</span>
      </div>
      <div
        class="b-button ml-2 btn btn-outline-dark d-flex"
        v-bind:class="{ active: topActive }"
        @click="loadTop()"
      >
        <b-img
          alt="logo of top articles"
          class="rounded"
          height="20"
          width="20"
          src="~assets/user/icons/top.svg"
        ></b-img
        ><span class="mx-md-2 mx-lg-2 mx-xl-2">Top</span>
      </div>
      <div
        class="b-button ml-2 btn btn-outline-dark d-flex"
        v-bind:class="{ active: highRatedActive }"
        @click="loadhighRated()"
      >
        <b-img
          alt="logo of high rated articles"
          class="rounded"
          height="20"
          width="20"
          src="~assets/user/icons/high-rated.svg"
        ></b-img>
        <p class="mx-md-2 mx-lg-2 mx-xl-2">High Rated</p>
      </div>
    </div>
    <!-- </b-container> -->
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
/* @media (max-width: 424px) {
  .b-button {
    font-size: 13px !important;
  }
}
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

.b-button:focus,
.b-button.focus {
  border-color: none;
} */

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
.b-button:focus,
.b-button.focus {
  border-color: none;
}
.breadcrumb {
  background: none;
}
@media (max-width: 342px) {
}
</style>

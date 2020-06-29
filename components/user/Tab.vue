<template>
  <div>
    <b-tabs :no-nav-style="true" content-class="mt-0 mb-0">
      <b-tab title-link-class="text-dark" active @click="goLatest()">
        <template v-slot:title>
          <b-img
            src="~/assets/user/tabs/r.png"
            style="height:30px;width:30px;"
          ></b-img>
          Fresh
        </template>
        <div class="latest-under-line"></div>
      </b-tab>
      <b-tab title-link-class="text-dark" @click="goAbout()">
        <template v-slot:title>
          <b-img
            src="~/assets/user/tabs/a.png"
            style="height:30px;width:30px;"
          ></b-img>
          About
        </template>
        <div class="about-under-line"></div>
      </b-tab>
      <hr class="line" />
    </b-tabs>
  </div>
</template>

<script>
export default {
  methods: {
    goLatest() {},
    goAbout() {}
  }
};
</script>

<style>
</style>
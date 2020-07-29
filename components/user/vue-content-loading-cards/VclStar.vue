<template>
  <div class="vcl-home-card">
    <vue-content-loading
      class="custom-vcl-home-card"
      :width="380"
      :height="130"
    >
      <rect x="5" y="10" rx="4" ry="4" width="124" height="20"></rect>

      <circle cx="160" cy="20" r="20" />
      <circle cx="205" cy="20" r="20" />
      <circle cx="250" cy="20" r="20" />
      <circle cx="300" cy="20" r="20" />
      <circle cx="350" cy="20" r="20" />
      <rect x="145" y="60" rx="4" ry="4" width="200" height="20"></rect>
    </vue-content-loading>
  </div>
</template>

<script>
import VueContentLoading from "vue-content-loading";

export default {
  name: "VclHomeCard",
  components: { VueContentLoading },
};
</script>

<style scoped>
.custom-vcl-home-card {
  margin-top: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}
/* .vcl-home-card {
} */
</style>
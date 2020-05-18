<template>
  <div class="vcl-home-card">
    <b-card class="mb-4 rounded" no-body v-for="i of 6" :key="i">
      <vue-content-loading
        class="custom-vcl-home-card"
        :width="300"
        :height="260"
      >
        <circle cx="30" cy="20" r="20" />
        <rect x="60" y="10" rx="4" ry="4" width="64" height="10" />
        <rect x="60" y="30" rx="4" ry="4" width="60" height="8" />
        <rect x="15" y="70" rx="4" ry="4" width="170" height="10" />
        <rect x="0" y="90" rx="4" ry="4" width="300" height="150" />
        <rect x="15" y="250" rx="4" ry="4" width="30" height="10" />
      </vue-content-loading>
    </b-card>
  </div>
</template>

<script>
import VueContentLoading from "vue-content-loading";

export default {
  name: "VclHomeCard",
  components: { VueContentLoading }
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
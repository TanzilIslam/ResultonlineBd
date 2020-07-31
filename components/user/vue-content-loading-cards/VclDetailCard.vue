<template>
  <div class="vcl-detail-page">
    <vue-content-loading class="vcl" :width="300" :height="270">
      <rect x="0" y="0" rx="4" ry="4" width="300" height="142" />
      <rect x="0" y="150" rx="4" ry="4" width="140" height="10" />
      <rect x="0" y="170" rx="4" ry="4" width="300" height="10" />
      <!-- <rect x="0" y="185" rx="4" ry="4" width="300" height="10" />
      <rect x="0" y="200" rx="4" ry="4" width="300" height="10" />
      <rect x="0" y="215" rx="4" ry="4" width="300" height="10" />
      <rect x="0" y="230" rx="4" ry="4" width="300" height="10" />
      <rect x="0" y="245" rx="4" ry="4" width="300" height="10" />
      <rect x="0" y="260" rx="4" ry="4" width="300" height="10" /> -->
    </vue-content-loading>
  </div>
</template>

<script>
import VueContentLoading from "vue-content-loading";

export default {
  name: "VclDetailCard",
  components: { VueContentLoading },
};
</script>

<style scoped>
.vcl-detail-page {
  margin-bottom: 10px;
}
</style>
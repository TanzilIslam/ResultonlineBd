<template>
  <div class="vlcD">
    <vue-content-loading class="vcl" :width="300" :height="270">
      <!-- <circle cx="30" cy="30" r="20" /> -->
      <!-- <rect x="60" y="20" rx="4" ry="4" width="64" height="10" /> -->
      <!-- <rect x="60" y="40" rx="4" ry="4" width="60" height="8" /> -->

      <!-- <rect x="15" y="70" rx="4" ry="4" width="170" height="10" /> -->
      <rect x="0" y="0" rx="4" ry="4" width="300" height="130" />
      <rect x="0" y="135" rx="4" ry="4" width="80" height="10" />
      <!-- <rect x="0" y="147" rx="4" ry="4" width="80" height="10" /> -->
      <rect x="0" y="150" rx="4" ry="4" width="140" height="10" />
      <rect x="0" y="170" rx="4" ry="4" width="300" height="5" />

      <rect x="0" y="180" rx="4" ry="4" width="280" height="5" />
      <rect x="0" y="193" rx="4" ry="4" width="300" height="5" />
      <rect x="0" y="201" rx="4" ry="4" width="280" height="5" />
      <rect x="0" y="209" rx="4" ry="4" width="300" height="5" />

      <rect x="0" y="217" rx="4" ry="4" width="280" height="5" />

      <!-- <rect x="0" y="190" rx="4" ry="4" width="270" height="5" />
            <rect x="0" y="199" rx="4" ry="4" width="300" height="5" />
            <rect x="0" y="208" rx="4" ry="4" width="280" height="5" />
            <rect x="0" y="215" rx="4" ry="4" width="300" height="5" />
           -->
    </vue-content-loading>
  </div>
</template>

<script>
import VueContentLoading from "vue-content-loading";

export default {
  name: "VclDetailCard",
  components: { VueContentLoading }
};
</script>

<style scoped>
.vcl {
  /* border: 1px solid black; */
  border-radius: 5px;
  /* box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.3); */
  margin-bottom: 10px;
}
</style>
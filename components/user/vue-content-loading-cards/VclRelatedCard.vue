<template>
  <div class="vcl-related-card">
    <b-list-group>
      <b-list-group-item class="list" v-for="i in 3" :key="i">
        <vcl-facebook></vcl-facebook>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { VclFacebook } from "vue-content-loading";
export default {
  components: { VclFacebook }
};
</script>

<style scoped>
/* .vcl-related-card {
  
} */
.list {
  border: none;
}
</style>
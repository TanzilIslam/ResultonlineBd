<template>
  <div class="pb-2 vcl-related-card">
    <vcl-facebook
      v-for="i in 3"
      :width="cWidth"
      :key="i"
      :height="120"
      :rtl="alignVc"
    ></vcl-facebook>

    <!-- <b-list-group>
      <b-list-group-item class="list" >
       
      </b-list-group-item>
    </b-list-group> -->
  </div>
</template>

<script>
import { VclFacebook } from "vue-content-loading";
export default {
  components: { VclFacebook },
  props: {
    cWidth: {
      type: Number,
      default: "390",
    },
    alignVc: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/* .vcl-related-card {
  
} */
.list {
  border: none;
  /* padding-left: 15px; */
}
</style>
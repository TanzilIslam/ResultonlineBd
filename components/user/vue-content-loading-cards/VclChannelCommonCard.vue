<template>
  <div class="vcl-channel-common-card">
    <b-row>
      <b-col md="4" lg="4" xs="12" sm="6" xl="4" v-for="i in 3" :key="i">
        <vcl-twitch class="custom-vcl-channel-common-card"></vcl-twitch>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { VclTwitch } from "vue-content-loading";

export default {
  name: "VclChannelCommonCard",
  components: { VclTwitch },
};
</script>

<style scoped>
/* .vcl-channel-common-card{

} */
.custom-vcl-channel-common-card {
  /* border: 1px solid black; */
  border-radius: 5px;
  /* box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.3); */
  margin-bottom: 20px;
}
</style>
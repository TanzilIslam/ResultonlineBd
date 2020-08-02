<template>
  <div class="author-vcl-card">
    <b-row>
      <b-col md="3" lg="3" xs="12" sm="6" xl="3" v-for="i in 3" :key="i">
        <vcl-twitch class="custom-author-vcl-card"></vcl-twitch>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { VclTwitch } from "vue-content-loading";

export default {
  name: "AuthorVclCard",
  components: { VclTwitch },
};
</script>

<style scoped>
/* .author-vcl-card{

} */
.custom-author-vcl-card {
  /* border: 1px solid black; */
  border-radius: 5px;
  /* box-shadow: 0px 0px 0px 2px rgba(0,0,0,0.3); */
  margin-bottom: 20px;
}
</style>
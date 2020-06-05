<template>
  <div @click="setview" class="channel-common-card">
    <b-card no-body class="custom-channel-common-card">
      <b-card-img-lazy
        blank-color="#bbb"
        :src="article.photo"
        top
        height="165"
        style="border-radius: 10px;"
      ></b-card-img-lazy>
      <b-card-text class="text-muted custom-card-text-date" text-tag="p">{{
        article.release_date
      }}</b-card-text>
      <b-card-text text-tag="h6" class="custom-card-text-title">{{
        article.title
      }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ChannelCommonCard",
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    setview() {
      try {
        this.$axios.$put(process.env.baseUrl + `/count/${this.article.slug}`, {
          view: this.article.view + 1
        });
        // this.$store.dispatch("countView/setViewcount", this.article.slug);
      } catch (e) {
        alert("No more data" + e);
      }
    }
  }
};
</script>

<style  scoped>
/* .channel-common-card{

} */
.custom-channel-common-card {
  border: none !important;
  cursor: pointer;
  background-color: #fafafa;
  margin-bottom: 30px;
}
.custom-card-text-date {
  margin-top: 10px;
  font-weight: 400;
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 0px !important;
}
.custom-card-text-title {
  margin-top: 0px !important;
  color: rgb(27, 30, 33);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: -0.5px;
}
/* .custom-channel-common-card img {
  border-top-left-radius: 15px;
 border-top-right-radius: 15px;
} */
</style>
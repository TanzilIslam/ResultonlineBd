<template>
  <div class="author-small-card">
    <b-card no-body style="width:260px;" class="custom-author-small-card">
      <b-card-img-lazy
        :src="ArticleCover"
        blank-color="#bbb"
        top
        height="165"
        style="border-radius: 10px;"
      ></b-card-img-lazy>
      <b-card-text class="text-muted custom-card-text-date" text-tag="p">{{
        ArticlePublish
      }}</b-card-text>
      <b-card-text text-tag="h6" class="custom-card-text-title">{{
        ArticleTitle
      }}</b-card-text>
      <!-- <div>ArticleTitle.length > 25
          ? ArticleTitle.substr(0, 25) + " .."
          : ArticleTitle </div> -->
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    ArticleCover: {
      type: String,
      default: ""
    },
    ArticlePublish: {
      type: String,
      default: "2101-11-22"
    },
    ArticleTitle: {
      type: String,
      default: "This is the Title"
    }
  }
};
</script>

<style  scoped>
/* .author-small-card {
} */
.custom-author-small-card {
  border: none !important;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
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
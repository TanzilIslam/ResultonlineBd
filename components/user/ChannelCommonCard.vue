<template>
  <div class="channel-common-card">
    <b-card no-body style="width: 260px" class="custom-channel-common-card">
      <b-card-img
        :src="ArticleCover"
        top
        height="165"
        style="border-radius: 10px;"
      ></b-card-img>
      <b-card-text class="text-muted custom-card-text-date" text-tag="p">{{
        ArticlePublish
      }}</b-card-text>
      <b-card-text text-tag="h6" class="custom-card-text-title">{{
        ArticleTitle.length > 40
          ? ArticleTitle.substr(0, 39)
          : ArticleTitle + " ..."
      }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ChannelCommonCard",
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
/* .channel-common-card{

} */
.custom-channel-common-card {
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
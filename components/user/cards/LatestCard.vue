<template>
  <div class="latest-home-card">
    <h5 class="custom-latest-title">Latest</h5>
    <b-list-group>
      <b-list-group-item class="custom-list-item">
        <div class="d-flex">
          <div>
            <b-img class="custom-latest-image" :src="article.photo"></b-img>
          </div>
          <div class="custom-latest-text">
            {{ article.title }}
            <p class="mt-4 text-muted">{{ article.release_date }}</p>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  name: "LatestHomeCard",
  data() {
    return {};
  }
};
</script>

<style scoped>
.latest-home-card {
  background: #fff;
  box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
.custom-latest-title {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 20px;
  color: rgb(20, 23, 24);
  padding: 0 12px;
  border-bottom: 1px solid #eee;
}
.custom-list-item {
  border: none !important;
  margin-bottom: 5px;
  cursor: pointer;
}
.custom-latest-image {
  width: 80px;
  height: 80px;
  left: 10px;
  top: 10px;
}
.custom-latest-text {
  margin-left: 20px;
  margin-top: 10px;
  text-align: left;
  line-height: 20px;
  font-size: 14px;
}
</style>
<template>
  <div class="latest-home-card">
    <div>
      <h5 class="custom-latest-title">Latest</h5>
      <b-list-group>
        <b-list-group-item class="custom-list-item" v-for="i in 6" :key="i">
          <div class="d-flex">
            <div>
              <b-img-lazy
                class="custom-latest-image"
                v-bind="mainProps"
                :src="require('~/assets/user/latestCard/logo.png')"
                alt="Image 1"
              ></b-img-lazy>
            </div>
            <div class="custom-latest-text">
              This is a sample title for latest div.This will show on right
              <p class="mt-4 text-muted">2012-7-90</p>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestHomeCard",
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "#bbb"
      }
    };
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
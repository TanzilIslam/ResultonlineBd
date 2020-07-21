<template>
  <div class="myCarousel">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#fafafa"
      img-width="1024"
      style="text-shadow: 1px 1px 2px #333; "
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        class="cover-img "
        img-alt="Blank image"
        v-for="(i, index) in data"
        :key="index"
        :img-src="i.Cover_img"
        img-width="1024"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
      data: []
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  mounted() {
    this.$axios
      .$get(process.env.baseUrl + `/Coverimgapi`)
      .then(posts => (this.data = posts));
  }
};
</script>

<style scoped>
.myCarousel {
  margin-bottom: 10px;
}
.cover-img {
  border-radius: 10px;
}
/* .carousel-inner > .carousel-item > img {
  border-radius: 10px !important;
} */
</style>
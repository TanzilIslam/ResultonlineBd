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
      img-height="200"
      style="text-shadow: 1px 1px 2px #333; "
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        class="cover-img rounded"
        :img-src="i.Cover_img"
        img-alt="Blank image"
        img-height="200"
        v-for="(i, index) in data"
        :key="index"
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
  height: 300px;
  border-radius: 10px !important;
}
</style>
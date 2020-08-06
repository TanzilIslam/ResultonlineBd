<template>
  <div class="myCarousel">
    <b-row class="pt-2" v-if="loadingImg">
      <b-col cols="12" sm="12" md="12" lg="12" xl="12">
        <vue-content-loading :width="300" :height="65">
          <rect x="0" y="0" rx="0" ry="0" width="300" height="60" />
        </vue-content-loading>
      </b-col>
    </b-row>

    <b-carousel
      v-else
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#fafafa"
      img-width="1024"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        class="cover-img"
        img-alt="Blank image"
        v-for="(i, index) in data"
        :key="index"
        :img-src="i.Cover_img"
        img-width="1024"
      >
        <a :href="i.url" class="c-txt-link">
          <div class="c-txt">
            {{ i.title }}
          </div>
        </a>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import VueContentLoading from "vue-content-loading";

export default {
  components: {
    VueContentLoading,
  },
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
      data: [],
      loadingImg: true,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  async mounted() {
    await this.$axios
      .$get(process.env.baseUrl + `/Coverimgapi`)
      .then((posts) => (this.data = posts));
    this.loadingImg = false;
  },
};
</script>

<style scoped>
.myCarousel {
  margin-bottom: 10px;
}
.c-txt-link {
  text-decoration: none;
  color: white;
  /* font-family: ProximaNova-Bold, helvetica, Arial, sans-serif; */
}
.c-txt {
  font-family: "Cambay";
  font-weight: 500;
  font-size: 22px;
}
</style>
<template>
  <div>
    <div v-if="$fetchState.pending" class="text-center pt-4">
      Loading...
    </div>
    <div v-else>
      <h4 class="pt-2 mb-3">{{ $route.params.blogPost }}</h4>
      <b-row>
        <b-col
          class="mb-2"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
          v-for="(i, index) in allBlogPost"
          :key="index"
        >
          <nuxt-link prefetch :to="`/blogDetail/${i.blog_slug}`">
            <b-card class="cover-card-two" no-body img-top>
              <b-card-img
                width="436"
                height="280"
                :src="i.post_img"
                class="card-image-bottom"
              ></b-card-img>
              <b-card-text text-tag="p" class="card-title-small mt-4">
                {{ i.title }}
              </b-card-text>
              <b-card-text text-tag="p" class="des">
                {{ i.decribe_post.slice(0, 80) }}
              </b-card-text>
            </b-card>
          </nuxt-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allBlogPost: []
    };
  },
  async fetch() {
    await this.$axios
      .$get(
        process.env.baseUrl +
          `/blog/api/v1/filter?search=${this.$route.params.blogPost}`
      )
      .then(posts => (this.allBlogPost = posts.results));
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(18, 20, 22) !important;
}
.cover-card-two {
  border: none;
  /* width: 93% !important; */
}
.card-image-bottom {
  border-radius: 10px !important;
}
.card-title-small {
  color: rgb(18, 20, 22);
  font-size: 14px;
  font-family: ProximaNova-Bold, helvetica, Arial, sans-serif;
  margin: 5px 0px 0px;
  line-height: 1.29;
  font-weight: bold;
}
.des {
  color: rgb(79, 70, 70) !important;
  font-size: 14px;
  line-height: 18px;
  margin: 0px;
  padding-right: 10px;
  font-weight: normal !important;
}
</style>
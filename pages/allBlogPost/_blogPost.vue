<template>
  <div>
    {{ allBlog }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      allBlog: []
    };
  },
  async fetch() {
    await this.$axios
      .$get(
        process.env.baseUrl +
          `/blog/api/v1/filter?search=${this.$route.params.blogPost}`
      )
      .then(posts => (this.allBlog = posts.results));
  }
};
</script>

<style>
</style>
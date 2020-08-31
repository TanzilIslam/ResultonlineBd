<template>
  <div>
    <div class="d-flex justify-content-around pt-4 pb-2">
      <p @click="commingSoon">QandA</p>
      <p @click="commingSoon">Blog</p>
      <p><nuxt-link to="/favourite"> Favourite</nuxt-link></p>
    </div>
    <SideBar />
  </div>
</template>

<script>
export default {
  methods: {
    commingSoon() {
      const noti = this.$vs.notification({
        duration: 4000,
        color: "#4a5153",

        progress: "auto",
        title: "Comming Soon",
        text: "This section is now under construct.We will launch it very soon!"
      });
    }
  }
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>

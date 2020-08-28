<template>
  <div class="pt-4">
    <b-card no-body>
      <b-tabs card vertical nav-wrapper-class="w-25">
        <b-tab title="Terms" active
          ><div v-html="pageData.Terms">
            <!-- <h4><strong>Terms</strong></h4> -->
          </div></b-tab
        >
        <b-tab title="Privacy"
          ><div v-html="pageData.Privacy">
            <!-- <h4><strong>Privacy</strong></h4> -->
          </div></b-tab
        >
        <b-tab title="Get in Touch"
          ><div v-html="pageData.GetinTouch">
            <!-- <h4><strong>Get In Touch</strong></h4> -->
          </div></b-tab
        >
        <b-tab title="About Us"
          ><div v-html="pageData.AboutUs">
            <!-- <h4><strong>About Us</strong></h4> -->
          </div></b-tab
        >
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageData: {}
    };
  },
  async fetch() {
    var self = this;
    await self.$axios.$get(process.env.baseUrl + "/t").then(function(data) {
      self.pageData = data.data;
    });
  }
};
</script>

<style scopde>
a {
  color: black;
}
a:hover {
  color: black !important;
}
.nav-link.active {
  background-color: #e2e6ea;
  border-radius: 8px !important;
}
</style>

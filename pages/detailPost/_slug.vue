<template>
  <div>
    <b-row class="home-main-row">
      <!-- Channel start -->
      <b-col class="home-sidebar" cols="12" sm="12" md="3" lg="3" xl="3">
        <div class="side-bar-sticky">
          <div class="side-bar-scroll">
            <div class="scrollbox-content">
              <SideBar />
            </div>
          </div>
          <div class="home-footer">
            <b-row no-gutters class="m-1">
              <p class="mb-3 footer-name link-hover mr-2">
                <span class="mr-2">Terms</span> <span>Privacy</span>
              </p>
              <p class="mb-3 footer-name link-hover">
                <span class="mr-2">Get In Touch</span> <span>About Us</span>
              </p>
              <b-col class="pt-1" cols="12" sm="12" md="12" lg="12" xl="12">
                <div class="d-flex justify-content-start social-icon">
                  <b-img
                    class="footer-name social-icons"
                    :src="require('~/assets/user/footer/facebook-circled.png')"
                  ></b-img>

                  <b-img
                    class="footer-name social-icons"
                    :src="require('~/assets/user/footer/images.jpeg')"
                  ></b-img>
                  <b-img
                    class="footer-name social-icons"
                    :src="require('~/assets/user/footer/download.png')"
                  ></b-img>
                </div>
                <div class="pt-3 footer-name">© 2020 · NuxtIt</div>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-name {
  cursor: pointer;
  color: #757575;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
}
.social-icons {
  height: 25px;
  width: 25px;
  margin-right: 25px;
  cursor: pointer;
}
</style>

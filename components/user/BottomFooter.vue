<template>
  <div class="footer" style="background-color:#fafafa;">
    <b-container>
      <b-row no-gutters>
        <b-col cols="12" sm="12" md="3" lg="3" xl="3">
          <div
            class="d-flex   justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start first-section  mt-4"
          >
            <b-img
              height="25"
              width="25"
              :src="require('~/assets/user/navbar/r.png')"
              alt="Kitten"
            ></b-img>
            <!-- <h5><strong>Resultonlinebd</strong></h5> -->
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="4" lg="4" xl="4">
          <div class="d-flex justify-content-center social-icon mt-4">
            <b-img
              class="social-icons"
              :src="require('../../assets/user/footer/facebook.png')"
            ></b-img>

            <b-img
              class="social-icons"
              :src="require('../../assets/user/footer/instagram.png')"
            ></b-img>
            <b-img
              class="social-icons"
              :src="require('../../assets/user/footer/twitter.png')"
            ></b-img>
          </div>
        </b-col>
        <b-col cols="12" sm="12" md="5" lg="5" xl="5">
          <div
            class="d-flex justify-content-center justify-content-md-end justify-content-lg-end justify-content-xl-end last-section mt-4"
          >
            <h5>Terms</h5>
            <h5>Privacy</h5>
            <h5>Get In Touch</h5>
            <h5>About Us</h5>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.last-section,
h5 {
  color: #4a4a4a !important;
  font-size: 16px;
  height: 36px;
  min-width: 64px;
  margin-right: 15px;
  cursor: pointer;
}
/* 
.first-section {
  margin-right: 20px;
} */
.social-icons {
  height: 25px;
  width: 25px;
  margin-right: 25px;
  cursor: pointer;
}
</style>
<template>
  <div class="footer" style="background-color: #000000;">
    <b-container>
      <div class="d-flex justify-content-center pt-2">
        <div class="">
          <b-img
            alt="footer reolib logo"
            height="20"
            width="22"
            class="rounded"
            src="~/assets/user/icons/footerLogo.png"
          ></b-img>
        </div>
        <div class="line ml-2 mr-2"></div>
        <div class="mr-5 pt-1">
          <p style="color: white;font-size:12px">
            ©2020 ReoLib.All Rights Reserved
          </p>
        </div>
        <div class="ml-5">
          <b-img
            alt="footer facebook logo"
            class="social-icons"
            :src="require('~/assets/user/icons/fb.png')"
          ></b-img>

          <b-img
            alt="footer instagram logo"
            class="social-icons"
            :src="require('~/assets/user/icons/insta.png')"
          ></b-img>
          <b-img
            alt="footer twitter logo"
            class="social-icons"
            :src="require('~/assets/user/icons/tw.png')"
          ></b-img>
          <b-img
            alt="footer pinterest logo"
            class="social-icons"
            :src="require('~/assets/user/icons/pin.png')"
          ></b-img>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.line {
  border-left: 2px solid rgb(255, 255, 255);
  height: 20px;
  margin-top: 4px;
}
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
  height: 20px;
  width: 21px;
  margin-right: 25px;
  cursor: pointer;
}
.logo {
  height: 50px;
  width: 110px;
  border-radius: 4px;
  margin-left: -7px;
}
</style>

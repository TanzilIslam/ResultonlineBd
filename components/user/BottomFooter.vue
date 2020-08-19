<template>
  <div class="footer" style="background-color: #000000;">
    <b-container>
      <div class="d-flex justify-content-between pt-2">
        <div>
          <b-img
            height="20"
            width="22"
            class="rounded"
            src="~/assets/user/icons/footerLogo.png"
          ></b-img>
          |
        </div>
        <div>
          <p style="color: white;font-size:12px">
            ©2020 ReoLib.All Rights Reserved
          </p>
        </div>
        <div>
          <b-img
            class="social-icons"
            :src="require('~/assets/user/icons/fb.png')"
          ></b-img>

          <b-img
            class="social-icons"
            :src="require('~/assets/user/icons/insta.png')"
          ></b-img>
          <b-img
            class="social-icons"
            :src="require('~/assets/user/icons/tw.png')"
          ></b-img>
          <b-img
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

<template>
  <div class="blog-page">
    <b-row no-gutters class="mt-2 mb-4">
      <b-col cols="12" sm="6" md="3" lg="3" xl="3" v-for="i in 4" :key="i">
        <b-card
          overlay
          img-src="https://demo.mythemeshop.com/wordx/files/2014/03/war-desert-guns-gunshow-163523-292x400.jpeg"
          img-alt="Card Image"
          text-variant="white"
          img-height="400"
          class="cover-card"
        >
          <b-card-text text-tag="p" class="cover-title">
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="12" class="mt-4 mb-3">
        <h5><strong>The ResultOnlineBd Blog</strong></h5>
        <h5 class="mb-3">
          Understand the impact of the outbreak on your travel plans
        </h5>
      </b-col>
      <b-col cols="12" sm="12" md="4" lg="4" xl="4" v-for="i in 2" :key="i">
        <b-card
          class="cover-card"
          no-body
          img-src="https://img.theculturetrip.com/450x300/wp-content/uploads/2020/05/chinatown_4.gif"
          img-top
        >
          <b-card-text class="card-title-one">
            Some quick example text to build on the card and make up the bulk of
            the card's content.
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="12" sm="12" md="4" lg="4" xl="4">
        <div class="mb-3" v-for="i in 2" :key="i">
          <div class="d-flex">
            <div class="img-card">
              <b-card
                no-body
                img-src="https://img.theculturetrip.com/320x213/wp-content/uploads/2020/06/dfmpgk-1.jpg"
                img-height="136"
                img-width="205"
                class="cover-card"
              ></b-card>
            </div>
            <div class="card-title-two ml-2">
              <h6>
                <strong
                  >Understanding the Meaning of Ubuntu: A Proudly South African
                  Philosophy</strong
                >
              </h6>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row no-gutters class="mt-4">
      <b-col
        cols="12"
        md="12"
        lg="12"
        xl="12"
        class="mb-2 mt-4 bottom-section-title"
        ><h5><strong>Culture Trip Original Series</strong></h5>
        <h6 class="mb-3" style="font-size:20px;">
          Top travel stories from around the world
        </h6></b-col
      >

      <b-col
        class="mb-4"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        xl="4"
        v-for="i in 6"
        :key="i"
      >
        <b-card
          style="margin-bottom:50px;"
          class="cover-card-two"
          no-body
          img-src=""
          img-top
        >
          <b-card-img
            width="390"
            height="260"
            src="https://img.theculturetrip.com/450x300/wp-content/uploads/2020/05/chinatown_4.gif"
            class="card-image-bottom"
          ></b-card-img>
          <b-card-text text-tag="p" class="card-title-small mt-4">
            <strong>Beyond Hollywood</strong>
          </b-card-text>
          <b-card-text text-tag="h5" class="card-des">
            Travel to Pakistan, Scandinavia, Ghana and Hong Kong through the
            cultural meaning of film
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
/* .blog-page{

} */
.cover-title {
  line-height: 1.2;
  font-size: 24px;
  position: absolute;
  bottom: 5px;
  font-family: "Cambay";
  font-weight: 700;
}
.cover-card {
  border-radius: 0px !important;
  border: none;
}
.card-title-one {
  color: rgb(18, 20, 22);
  font-size: 18px;
  font-family: ProximaNova-Bold, helvetica, Arial, sans-serif;
  margin: 5px 0px 0px;
  line-height: 1.22;
  font-weight: bold;
}
.img-card {
  width: 100% !important;
}
.card-title-two {
  color: rgb(18, 20, 22);
  font-size: 14px;
  /* font-family: ProximaNova-Bold, helvetica, Arial, sans-serif; */
  /* margin: 5px 0px 0px; */
  line-height: 1.29;
}
.bottom-section-title {
  color: rgb(18, 20, 22);
  font-family: ProximaNova-Bold, helvetica, Arial, sans-serif;
  font-size: 24px;
  line-height: 30px;
  margin: 0px;
}
.cover-card-two {
  border: none;
  width: 93% !important;
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
}
.card-des {
  color: rgb(18, 20, 22);
  font-size: 14px;
  line-height: 18px;
  margin: 0px;
  padding-right: 10px;
}
</style>
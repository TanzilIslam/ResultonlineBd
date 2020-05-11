<template>
  <div class="home">
    <b-row>
      <b-col sm="12" md="3" lg="3" xl="3">
        <SideBar />
      </b-col>
      <b-col sm="12" md="5" lg="5" xl="5">
        <HomeCard />
      </b-col>
      <b-col sm="12" md="4" lg="4" xl="4">
        <LatestCard />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: "home page - ResultOnlineBd",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Here you can find all the latest information about technology,mobile phones,educations etc."
        }
      ]
    };
  }
};
</script>

<style scoped>
/* .home{

} */
</style>

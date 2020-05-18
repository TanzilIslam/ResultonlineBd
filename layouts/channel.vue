<template>
  <div>
    <NavBar />
    <b-container>
      <b-row>
        <b-col sm="12" md="3" lg="3" xl="3"><SideBar /></b-col>
        <b-col sm="12" md="9" lg="9" xl="9">
          <nuxt />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
</script>

<style scoped>
/* body {
  font-family: "Roboto", sans-serif;
} */
</style>

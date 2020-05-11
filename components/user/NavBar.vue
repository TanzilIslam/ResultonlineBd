<template>
  <div class="custom-navbar">
    <b-navbar class="fixed-top custom-mynav">
      <b-container class="pl-2 pr-3">
        <b-navbar-brand to="/">
          <img
            :src="require('~/assets/user/navbar/r.png')"
            class="logo"
            alt="Kitten"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="item">
            <b-nav-item to="/" href="#">Home</b-nav-item>
            <b-nav-item to="/job" href="#">Job</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-form> -->
            <b-input-group class="search-bar">
              <b-form-input placeholder="Search Here..."> </b-form-input>
              <b-input-group-append>
                <b-button variant="dark" style="width:70px;" size="md">
                  <b-icon variant="light" scale="1" icon="search"></b-icon>
                </b-button>
              </b-input-group-append>
            </b-input-group>
            <!-- </b-nav-form> -->
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.custom-mynav {
  height: 49px;
  background-color: black !important;
}
.custom-navbar {
  margin-bottom: 55px;
}
.mysearch {
  font-size: 10px !important;
}
.logo {
  height: 40px;
  width: 45px;
  border-radius: 4px;
}
.item,
a {
  color: white !important;
  font-size: 17px;
}
/* .custom-navbar {

/* } */
/* .search-bar{

}  */
</style>
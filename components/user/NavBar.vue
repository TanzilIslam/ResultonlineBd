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
        <b-navbar-nav class="item ml-4">
          <b-nav-item to="/" href="#">Home</b-nav-item>
          <b-nav-item to="/qAnda" class="ml-1" href="#">Q&A</b-nav-item>
          <b-nav-item to="/blog" class="ml-1" href="#">Blog</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form> -->
          <b-input-group class="search-bar">
            <b-form-input
              @click="showDropdown = true"
              placeholder="Search Here..."
            >
            </b-form-input>
            <b-input-group-append>
              <b-button variant="dark" style="width:70px;" size="md">
                <b-icon variant="light" scale="1" icon="search"></b-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>

          <div class="ml-4" v-if="showDropdown">
            <div class="d-flex w-100">
              <div class="c-dropdown">
                <b-form-select
                  class="my-select"
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </div>
              <div class="ml-3 clos-icon">
                <b-icon
                  icon="x"
                  @click="showDropdown = false"
                  variant="light"
                  scale="2"
                  class="mt-2"
                  style="cursor:pointer;"
                ></b-icon>
              </div>
            </div>
          </div>
          <!-- </b-nav-form> -->
        </b-navbar-nav>
        <!-- </b-collapse> -->
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showDropdown: false,
      selected: null,
      options: [
        { value: null, text: "All" },
        { value: "programming", text: "Programming" },
        { value: "mobile", text: "Mobile Phone" },
        { value: "celebrityAndMovie", text: "Celebrity & Movie" },
        { value: "gaming", text: "Gaming" },
        { value: "history", text: "History" },
        { value: "health", text: "Health" },
        { value: "technology", text: "Technology" },
        { value: "designLibrary", text: "Design Library" }
      ]
    };
  }
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
  height: 63px;
  width: 110px;
  border-radius: 4px;
  margin-left: -7px;
}
.item,
a {
  color: white !important;
  font-size: 17px;
}
a {
  border: none !important;
  outline: none !important;
  outline-style: none !important;
}
.my-select {
  width: auto;
}

/* .custom-navbar {

/* } */
/* .search-bar{

}  */
</style>
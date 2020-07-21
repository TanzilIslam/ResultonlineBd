<template>
  <div class="custom-navbar">
    <!-- <b-navbar class="fixed-top custom-mynav"> -->

    <nav class="navbar fixed-top navbar-expand-sm custom-mynav">
      <b-container class="pl-2 pr-3">
        <b-navbar-brand class="" to="/">
          <b-img
            :src="require('~/assets/user/navbar/r.png')"
            class="logo"
            alt="Kitten"
          ></b-img>
        </b-navbar-brand>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar5"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbar5">
          <b-navbar-nav class="ml-4 mr-2 item">
            <b-nav-item to="/" class="mt-1" href="#">Home</b-nav-item>
            <b-nav-item to="/qAnda" class="mt-1 ml-1" href="#">Q&A</b-nav-item>
            <b-nav-item to="/blog" class="ml-1 mt-1" href="#">Blog</b-nav-item>
          </b-navbar-nav>

          <form class="mx-2 d-inline w-100">
            <div>
              <b-input-group size="sm">
                <b-form-input placeholder="Search Here..."></b-form-input>
                <b-input-group-append>
                  <b-button variant="light"
                    ><b-icon icon="search"></b-icon
                  ></b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </form>
          <b-nav-item class="ml-2 mt-1" to="/favourite" href="#"
            >Favourite</b-nav-item
          >
        </div>
      </b-container>
    </nav>
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
.navbar .container,
.navbar .container-fluid,
.navbar .container-sm,
.navbar .container-md,
.navbar .container-lg,
.navbar .container-xl {
  justify-content: flex-start;
}
.custom-mynav {
  height: 50px;
  background-color: #242729 !important;
}
.custom-navbar {
  margin-bottom: 55px;
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
</style>
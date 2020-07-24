 <template>
  <div class="custom-navbar">
    <b-navbar
      type="dark"
      id="my-nav"
      class="fixed-top custom-mynav"
      toggleable="sm"
    >
      <b-container class="pl-2 pr-3">
        <b-navbar-brand to="/"
          ><b-img
            :src="require('~/assets/user/navbar/r.png')"
            class="logo"
          ></b-img>
        </b-navbar-brand>
        <b-navbar-toggle target="sidebar-backdrop"></b-navbar-toggle>

        <b-sidebar
          id="sidebar-backdrop"
          backdrop
          shadow
          backdrop-variant="light"
        >
          <div class="px-3 py-2">
            <b-navbar-nav class="Side-bar-item mb-2">
              <b-nav-item to="/" class="mt-1" href="#">Home</b-nav-item>
              <b-nav-item to="/qAnda" class="mt-1" href="#">Q&A</b-nav-item>
              <b-nav-item to="/blog" class="mt-1" href="#">Blog</b-nav-item>
              <b-nav-item class="mt-1" to="/favourite" href="#"
                >Favourite</b-nav-item
              >
            </b-navbar-nav>

            <form class="d-inline w-100">
              <div>
                <b-input-group size="sm">
                  <b-form-input
                    v-model="keyword"
                    @keyup.enter="search"
                    placeholder="Search Here..."
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button @click="search" variant="dark"
                      ><b-icon icon="search"></b-icon
                    ></b-button>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </form>
          </div>
        </b-sidebar>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-4 mr-2 item">
            <b-nav-item to="/" class="mt-1" href="#">Home</b-nav-item>
            <b-nav-item to="/qAnda" class="mt-1 ml-1" href="#">Q&A</b-nav-item>
            <b-nav-item to="/blog" class="ml-1 mt-1" href="#">Blog</b-nav-item>
          </b-navbar-nav>

          <form @submit.prevent="search" class="mx-2 mr-2 d-inline w-100">
            <div>
              <b-input-group size="sm">
                <b-form-input
                  style="color: #e4e6e8;"
                  v-model="keyword"
                  placeholder="Search Here..."
                ></b-form-input>
                <b-input-group-append>
                  <b-button class="icon-button" @click="search">
                    <b-icon icon="search" variant="light"></b-icon>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </div>
          </form>

          <b-navbar-nav>
            <b-nav-item class="mt-1" to="/favourite" href="#"
              >Favourite</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    async search() {
      if (this.keyword != "") {
        this.$router.push("/search/" + this.keyword);
      }
    },
  },
};
</script>

<style scoped>
.logo {
  height: 63px;
  width: 110px;
  border-radius: 4px;
  margin-left: -7px;
}
.custom-mynav {
  height: 50px;
  background-color: #242729 !important;
}
.item,
a {
  color: white !important;
  font-size: 17px;
}
@media (min-width: 0px) and (max-width: 575px) {
  .custom-mynav {
    height: 70px;
  }
  .Side-bar-item,
  a {
    color: rgb(0, 0, 0) !important;
    font-size: 17px;
  }
  .custom-navbar {
    margin-bottom: 75px !important;
  }
}
a {
  border: none !important;
  outline: none !important;
  outline-style: none !important;
}
.custom-navbar {
  margin-bottom: 55px;
}
.form-control {
  border-color: #3b4045;
  background-color: #3b4045;
  box-shadow: none;
}
.icon-button {
  border-color: #3b4045;
  background-color: #3b4045;
  box-shadow: none;
}

.form-control::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #e4e6e8 !important;
  opacity: 1; /* Firefox */
}
</style>
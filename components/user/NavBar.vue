 <template>
  <div class="custom-navbar">
    <b-navbar
      type="dark"
      id="my-nav"
      class="fixed-top custom-mynav"
      toggleable="md"
    >
      <b-container class="pl-2 pr-3">
        <b-navbar-brand to="/" class="brand-logo"
          ><b-img
            :src="require('~/assets/user/icons/brand.png')"
            class="logo"
          ></b-img>
        </b-navbar-brand>

        <b-navbar-toggle v-if="show" target="sidebar-forNav"></b-navbar-toggle>

        <b-navbar-brand v-if="show" to="/" class="brand-logo-sm-device"
          ><b-img
            :src="require('~/assets/user/icons/brand.png')"
            class="logo"
          ></b-img>
        </b-navbar-brand>

        <b-navbar-brand
          class="search-logo-sm-device"
          v-bind:class="{ range: showSearch }"
        >
          <div v-if="!show" class="d-flex">
            <div class="d-flex w-100">
              <div class="w-100">
                <form @keyup.enter.prevent="searchinfo">
                  <autocomplete
                    :search="searchData"
                    placeholder="Search Here..."
                    :get-result-value="getResultValue"
                    @submit="handleSubmit"
                  ></autocomplete>
                </form>
              </div>
              <div class="btn icon-button" @click="searchinfo">
                <b-icon icon="search" variant="light"></b-icon>
              </div>
            </div>

            <div class="pl-4">
              <b-icon
                variant="light"
                scale="2"
                icon="x"
                @click="customMethod"
              ></b-icon>
            </div>
          </div>

          <b-icon
            v-if="show"
            icon="search"
            variant="light"
            @click="show = false"
          ></b-icon>
        </b-navbar-brand>

        <b-sidebar id="sidebar-forNav" backdrop shadow backdrop-variant="light">
          <div class="px-3">
            <b-navbar-nav class="Side-bar-item mb-2">
              <b-nav-item to="/" class="mt-1" href="#">Home</b-nav-item>
              <b-nav-item to="/qAnda" class="mt-1" href="#">Q&A</b-nav-item>
              <b-nav-item to="/blog" class="mt-1" href="#">Blog</b-nav-item>
              <b-nav-item class="mt-1" to="/favourite" href="#"
                >Favourite</b-nav-item
              >
            </b-navbar-nav>
          </div>
        </b-sidebar>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-4 mr-2 item">
            <b-nav-item to="/" class="my-auto" href="#">Home</b-nav-item>
            <b-nav-item to="/qAnda" class="my-auto ml-1" href="#"
              >Q&A</b-nav-item
            >
            <b-nav-item to="/blog" class="my-auto mt-1" href="#"
              >Blog</b-nav-item
            >
          </b-navbar-nav>

          <div class="d-flex w-100">
            <div class="w-100">
              <form @keyup.enter.prevent="searchinfo">
                <autocomplete
                  :search="searchData"
                  placeholder="Search Here..."
                  :get-result-value="getResultValue"
                  @submit="handleSubmit"
                ></autocomplete>
              </form>
            </div>
            <div class="btn icon-button" @click="searchinfo">
              <b-icon icon="search" variant="light"></b-icon>
            </div>
          </div>

          <b-navbar-nav>
            <b-nav-item class="my-auto" to="/favourite" href="#"
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
      show: true,
      countries: [],
      suggested: "",
    };
  },
  methods: {
    searchinfo() {
      if (this.keyword != "") {
        this.$router.push("/search/" + this.keyword);
      }
    },
    customMethod() {
      this.show = true;
      this.showSearch = true;
    },
    searchData(input) {
      return new Promise((resolve) => {
        if (input.length < 2) {
          return resolve([]);
        }

        fetch(process.env.baseUrl + "/serach/" + input)
          .then((response) => response.json())
          .then((data) => {
            resolve(data.results);
          })
          .catch((e) => console.log());
        this.keyword = input;
      });
    },

    getResultValue(result) {
      return result.title;
    },
    handleSubmit(result) {
      event.preventDefault();
      try {
        this.$router.push("/search/" + result.title);
      } catch (error) {
        console.log(this.keyword);
        this.$router.push("/search/" + this.keyword);
      }
    },
  },
  computed: {
    showSearch() {
      if (this.show == false) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.logo {
  height: 34px;
  width: 93px;
  border-radius: 4px;
  margin-left: -7px;
}
.custom-mynav {
  height: 50px;
  background-color: #242729 !important;
  padding-right: 0px !important;
}
.item,
a {
  color: white !important;
  font-size: 17px;
}

@media (min-width: 768px) {
  .brand-logo-sm-device {
    display: none !important;
  }
  .search-logo-sm-device {
    display: none !important;
  }
}
@media (min-width: 0px) and (max-width: 767px) {
  .range {
    width: inherit !important;
  }

  .navbar {
    padding: 0px !important;
  }
  .custom-mynav {
    height: 55px;
  }
  .Side-bar-item,
  a {
    color: rgb(0, 0, 0) !important;
    font-size: 17px;
  }
  .custom-navbar {
    margin-bottom: 75px !important;
  }

  .brand-logo {
    display: none !important;
  }
  button:focus {
    outline: none !important;
    outline: none !important;
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
  height: 34px;
  margin-left: -6px;
}
.icon-button-two {
  border-color: #3b4045;
  background-color: #3b4045;
  box-shadow: none;
  /* height: 34px; */
  margin-left: -6px;
}

.form-control::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #e4e6e8 !important;
  opacity: 1; /* Firefox */
}
</style>
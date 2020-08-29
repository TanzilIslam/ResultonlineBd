<template>
  <div class="custom-navbar">
    <b-navbar type="dark" id="my-nav" class="fixed-top dekstop-nav">
      <b-container>
        <b-navbar-brand to="/" class="brand-logo"
          ><b-img
            itemprop="image"
            alt="result online bd logo"
            :src="require('~/assets/user/icons/brand.png')"
            class="logo"
          ></b-img>
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <div class="d-flex w-100 justify-content-center">
            <div class="w-75">
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

          <b-navbar-nav class="mr-4">
            <b-img
              style="cursor:pointer;"
              height="25"
              width="25"
              class="rounded"
              alt="right menu logo"
              src="~/assets/user/icons/menu.svg"
              @click="showRightMenu"
            ></b-img>
          </b-navbar-nav>
        </b-collapse>
        <div class="d-flex justify-content-end ">
          <div v-if="showRightMenuCard" class="right-menu text-right">
            <p><nuxt-link to="/">Home</nuxt-link></p>
            <p @click="commingSoon">QandA</p>
            <p @click="commingSoon">Blog</p>
            <p><nuxt-link to="/favourite"> Favourite</nuxt-link></p>
          </div>
        </div>
      </b-container>
    </b-navbar>

    <div type="dark" id="my-nav" class="fixed-top  mobile-nav">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <b-navbar-toggle v-if="show" target="sidebar-forNav">
            <template v-slot:default="{ expanded }">
              <b-img
                style="cursor:pointer;"
                height="20"
                width="20"
                class="rounded"
                alt="right menu"
                src="~/assets/user/icons/menu.svg"
              ></b-img>
            </template>
          </b-navbar-toggle>
        </div>
        <div v-if="show" class="brand-logo-sm-device ">
          <b-img
            itemprop="image"
            alt="result online bd logo"
            :src="require('~/assets/user/icons/brand.png')"
            class="mobile-logo"
          ></b-img>
        </div>
        <div>
          <b-icon
            v-if="show"
            icon="search"
            variant="light"
            class="mr-3"
            style="height:17px;width:17px;"
            @click="show = false"
          ></b-icon>
        </div>
      </div>

      <div v-if="!show" class="d-flex w-100 pl-2 pr-2 pt-1">
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
        <div class="pl-2 pt-1">
          <b-icon
            variant="light"
            class="h4"
            icon="x"
            @click="customMethod"
          ></b-icon>
        </div>
      </div>

      <b-sidebar id="sidebar-forNav" backdrop shadow backdrop-variant="light">
        <div class="px-3">
          <b-navbar-nav class="Side-bar-item mb-2">
            <!-- <b-nav-item to="/" class="mt-1" href="#">Home</b-nav-item> -->
            <b-nav-item @click="commingSoon" class="mt-1" href="#"
              >Q&A</b-nav-item
            >
            <b-nav-item @click="commingSoon" class="mt-1" href="#"
              >Blog</b-nav-item
            >
            <b-nav-item class="mt-1" to="/favourite" href="#"
              >Favourite</b-nav-item
            >
          </b-navbar-nav>
        </div>
      </b-sidebar>
    </div>
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
      showRightMenuCard: false,
      toogle: false
    };
  },
  methods: {
    showRightMenu() {
      this.toogle = !this.toogle;
      if (this.toogle) {
        // console.log("show");
        this.showRightMenuCard = true;
      } else if (!this.toogle) {
        // console.log("hide");
        this.showRightMenuCard = false;
      }
    },
    commingSoon() {
      const noti = this.$vs.notification({
        duration: 4000,
        color: "#4a5153",

        progress: "auto",
        title: "Comming Soon",
        text: "This section is now under construct.We will launch it very soon!"
      });
    },
    searchinfo() {
      if (this.keyword != "") {
        this.$router.push("/search/" + this.keyword);
      }
    },
    customMethod() {
      this.show = true;
      // this.showSearch = true;
    },
    searchData(input) {
      return new Promise(resolve => {
        if (input.length < 2) {
          return resolve([]);
        }

        fetch(process.env.baseUrl + "/serach/" + input)
          .then(response => response.json())
          .then(data => {
            resolve(data.results);
          })
          .catch(e => console.log());
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
    }
  },
  computed: {
    // showSearch() {
    //   if (this.show == false) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  },
  mounted() {}
};
</script>

<style scoped>
@media (max-width: 767px) {
  .dekstop-nav {
    display: none !important;
  }

  .custom-navbar {
    margin-bottom: 46px !important;
  }
}
.mobile-nav {
  height: 44px;
  background-color: #242729 !important;
  padding-right: 0px !important;
}

.custom-navbar {
  margin-bottom: 55px;
}
.right-menu a {
  color: black !important;
  text-decoration: none;
}
.right-menu p {
  cursor: pointer;
}
.right-menu {
  z-index: 9;
  position: fixed;
  /* right: 10px; */
  top: 55px;
  background-color: white !important;
  padding: 10px;

  box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
.logo {
  height: 64px;
  width: 110px;
  border-radius: 4px;
  margin-left: -10px;
}
.mobile-logo {
  height: 50px;
  width: 90px;
  border-radius: 4px;
}
.dekstop-nav {
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
  .mobile-nav {
    display: none !important;
  }
}
@media (min-width: 0px) and (max-width: 767px) {
  /* .range {
    width: inherit !important;
  } */

  .navbar {
    padding: 0px !important;
  }
  .dekstop-nav {
    height: 55px;
  }
  .Side-bar-item,
  a {
    color: rgb(0, 0, 0) !important;
    font-size: 17px;
  }
  /* .custom-navbar {
    margin-bottom: 75px !important;
  } */
  /* 
  .brand-logo {
    display: none !important;
  } */
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
/* .custom-navbar {
  margin-bottom: 55px;
} */
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

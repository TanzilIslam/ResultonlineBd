<template>
  <div v-if="article.is_active" class="home-card">
    <div class="rounded">
      <b-card no-body class="mb-4">
        <div class="d-flex">
          <div class="ml-3 mt-3 mb-2">
            <b-card-img-lazy
              blank-color="#bbb"
              class="rounded-circle p-1 img-logo"
              :src="article.contentowners.authorsprofilrimg"
            ></b-card-img-lazy>
          </div>

          <div class="mt-4 ml-3 mb-2 w-100">
            <div class="d-flex">
              <div class="">
                <nuxt-link
                  prefetch
                  :to="`/authorProfile/${article.contentowners.authorsname}`"
                >
                  <h5>
                    {{ article.contentowners.authorsname }}
                  </h5>
                </nuxt-link>
              </div>

              <div class="ml-auto">
                <b-icon
                  class="mr-2 custom-home-card"
                  @click="$bvModal.show(article.slug)"
                  icon="reply"
                ></b-icon>
                <b-icon
                  class="mr-4 custom-home-card"
                  :icon="icon"
                  @click="setFavourite()"
                ></b-icon>
              </div>
            </div>

            <b-card-text text-tag="p" class="text-muted"
              >{{ article.release_date }}
              <!-- <b-icon icon="clock-fill" variant="gray"></b-icon> -->
            </b-card-text>
          </div>
        </div>

        <h5 class="ml-4 py-3">{{ article.title }}</h5>
        <nuxt-link prefetch :to="`/${article.slug}`">
          <div @click="setview">
            <b-card-img-lazy
              blank-color="#bbb"
              :src="article.photo"
              bottom
              height="230"
              width="280"
            >
            </b-card-img-lazy>
          </div>
        </nuxt-link>
      </b-card>
    </div>
    <div>
      <b-modal
        :id="article.slug"
        content-class="shadow"
        title="BootstrapVue"
        centered
      >
        <p class="my-2">
          <!-- hide-backdrop -->
          We've added the utility class <code>'shadow'</code>
          to the modal content for added effect.
        </p>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icon: "star",
      toogle: false,
    };
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.checkLocal();
  },
  methods: {
    checkLocal() {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        if (key == this.article.slug) {
          // console.log("found");
          this.toogle = true;
          this.icon = "star-fill";
          break;
        }
      }
    },
    setview() {
      try {
        this.$axios.$put(process.env.baseUrl + `/count/${this.article.slug}`, {
          view: this.article.view + 1,
        });
        // this.$store.dispatch("countView/setViewcount", this.article.slug);
      } catch (e) {
        alert("No more data" + e);
      }
    },
    setFavourite() {
      if (process.browser) {
        this.toogle = !this.toogle;
        if (this.toogle) {
          // var addToLocalStorageObject = function(name, key, value) {
          //   var existing = localStorage.getItem(name);
          //   existing = existing ? JSON.parse(existing) : {};
          //   existing[key] = value;
          //   localStorage.setItem(name, JSON.stringify(existing));
          // };
          // addToLocalStorageObject(
          //   "FavouriteArticles",
          //   this.article.slug,
          //   this.article
          // );

          localStorage.setItem(
            this.article.slug,
            JSON.stringify(this.article.title)
          );
          this.icon = "star-fill";
          this.$bvToast.toast(`Successfully added to Favourite!`, {
            title: "Done",
            autoHideDelay: 2000,
            solid: true,
            static: true,
          });
        } else if (!this.toogle) {
          // var existingTwo = localStorage.getItem("FavouriteArticles");
          // var newVar = JSON.parse(existingTwo);
          // // var ob = {};
          // for (var key in newVar) {
          //   if (newVar.hasOwnProperty(key)) {
          //     var element = newVar[key];
          //     if (element.slug === this.article.slug) {
          //       element = "";
          //       console.log(element);
          //       break;
          //     }
          //   }
          // }
          for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            if (key == this.article.slug) {
              // console.log("found");
              localStorage.removeItem(this.article.slug);
              break;
            }
          }

          this.icon = "star";
        }
      }
    },
  },
};
</script>

<style scoped>
/* .home-card {

} */

.toast-warper {
  position: absolute;
  right: 2px;
  top: 51px;
}
.custom-home-card {
  cursor: pointer;
}
.img-logo {
  width: 70px !important;
  height: 70px !important;
}
a {
  color: black !important;
  text-decoration: none !important;
}
</style>

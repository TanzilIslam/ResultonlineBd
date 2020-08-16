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
                  class="mr-2 h4 custom-home-card"
                  @click="active2 = !active2"
                  icon="reply"
                ></b-icon>
                <b-icon
                  class="mr-4 h5 custom-home-card"
                  :icon="icon"
                  @click="openNotification(6000, '#4a5153')"
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
        <div v-if="article.channel.channelname == 'Mobile phone'">
          <nuxt-link prefetch :to="`/m/${article.slug}`">
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
        </div>
        <div v-else>
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
        </div>
      </b-card>
    </div>
    <div>
      <vs-dialog width="470px" not-center v-model="active2">
        <template #header>
          <h6 class="pt-3">Share this article</h6>
        </template>

        <div>
          <div class="text-center">
            <b-img
              class=""
              @click="shareToFb"
              style="cursor: pointer;"
              height="40"
              width="40"
              src="~/assets/user/icons/fb.svg"
            >
            </b-img>
            <b-input-group size="sm" class="pt-4">
              <b-form-input :value="place"></b-form-input>
              <b-input-group-append>
                <!-- <b-icon icon="clipboard"></b-icon> -->

                <!-- <b-button variant="outline-light"> -->
                <b-img
                  style="cursor: pointer;"
                  height="31"
                  width="31"
                  src="~/assets/user/icons/copy.png"
                  @click="copyLink"
                  class="rounded "
                ></b-img>
                <!-- </b-button> -->
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
      </vs-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icon: "star",
      toogle: false,
      copyText: "",
      value2: "",
      popupActivo2: false,
      isCopy: "Copy",
      active2: false,
      place: `http://test.resultonlinebd.com/${this.article.slug}`
    };
  },
  props: {
    article: {
      type: Object,
      required: true
    }
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
      // try {
      //   this.$axios.$put(process.env.baseUrl + `/count/${this.article.slug}`, {
      //     view: this.article.view + 1,
      //   });
      // } catch (e) {
      //   alert("No more data" + e);
      // }
    },
    copyLink() {
      navigator.clipboard.writeText(this.place);
      this.isCopy = "Copied";
    },
    openNotification(duration, color) {
      if (process.browser) {
        this.toogle = !this.toogle;
        if (this.toogle) {
          localStorage.setItem(
            this.article.slug,
            JSON.stringify(this.article.title)
          );
          this.icon = "star-fill";

          const noti = this.$vs.notification({
            duration,
            color,

            progress: "auto",
            title: "Added",
            text:
              "This article Successfully added to Favourite.Check Favourite Section"
          });
        } else if (!this.toogle) {
          for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            if (key == this.article.slug) {
              // console.log("found");
              localStorage.removeItem(this.article.slug);
              break;
            }
          }
          const noti = this.$vs.notification({
            duration: 6000,
            color: "#dc3545",

            progress: "auto",
            title: "Removed",
            text:
              "This article Successfully Removed from Favourite.Click again to added!"
          });
          this.icon = "star";
        }
      }
    },
    shareToFb() {
      window.open(
        "https://www.facebook.com/dialog/share?app_id=2141341249515400&display=popup&href=http://test.resultonlinebd.com/" +
          this.article.slug,
        "_blank"
      );
    }
  }
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

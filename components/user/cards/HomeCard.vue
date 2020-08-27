<template>
  <div
    v-if="article.is_active"
    class="home-card"
    itemscope
    itemtype="https://schema.org/Article"
    itemprop="articleBody"
  >
    <div class="rounded">
      <b-card no-body class="mb-4">
        <div class="d-flex">
          <div class="ml-3 mt-3 mb-2">
            <b-card-img-lazy
              itemprop="image"
              :alt="article.contentowners.authorsname"
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
                  <h5 itemprop="author">
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
                  :variant="iconColor"
                  @click="openNotification(6000, '#4a5153')"
                ></b-icon>
              </div>
            </div>

            <b-card-text itemprop="dateCreated" text-tag="p" class="text-muted"
              >{{ article.release_date }}
              <!-- <b-icon icon="clock-fill" variant="gray"></b-icon> -->
            </b-card-text>
          </div>
        </div>

        <h5 itemprop="name" class="ml-4 py-3">{{ article.title }}</h5>
        <div v-if="article.channel.channelname == 'Mobile phone'">
          <nuxt-link prefetch :to="`/m/${article.slug}`">
            <div>
              <b-card-img-lazy
                itemprop="image"
                :alt="article.Seoimgalt"
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
            <div>
              <b-card-img-lazy
                itemprop="image"
                :alt="article.Seoimgalt"
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
        <div v-if="article.channel.channelname == 'Mobile phone'">
          <ShareModal :pathUrl="`/m/${this.article.slug}`" />
        </div>
        <div v-else>
          <ShareModal :pathUrl="`/${this.article.slug}`" />
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
      active2: false,
      iconColor: "dark"
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
          this.iconColor = "warning";
          break;
        }
      }
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
          this.iconColor = "warning";

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
          this.iconColor = "dark";
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

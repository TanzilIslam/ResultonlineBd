<template>
  <div>
    <div v-if="article.is_active" class="channel-common-card">
      <b-card no-body class="custom-channel-common-card">
        <div>
          <!-- <div v-if="article.channel.channelname == 'Mobile phone'"> -->
          <nuxt-link prefetch :to="`/m/${article.slug}`">
            <b-card-img-lazy
              :alt="article.Seoimgalt"
              blank-color="#bbb"
              :src="article.photo"
              top
              height="165"
              style="border-radius: 10px;"
            ></b-card-img-lazy>
          </nuxt-link>
          <!-- </div> -->
        </div>

        <div class="d-flex w-100">
          <b-card-text class="text-muted custom-card-text-date" text-tag="p">{{
            article.release_date
          }}</b-card-text>
          <div class="ml-auto pt-2">
            <p>
              <b-icon
                :icon="icon"
                :variant="iconColor"
                @click="setFavourite(6000, '#4a5153')"
                class="mr-2"
              ></b-icon>
              <b-icon
                icon="reply"
                @click="active2 = !active2"
                class="mr-2"
              ></b-icon>
            </p>
          </div>
        </div>

        <div>
          <!-- <div v-if="article.channel.channelname == 'Mobile phone'"> -->
          <nuxt-link prefetch :to="`/m/${article.slug}`">
            <b-card-text text-tag="h5" class="custom-card-text-title">{{
              article.title
            }}</b-card-text>
          </nuxt-link>
          <!-- </div> -->
        </div>
      </b-card>
    </div>
    <vs-dialog width="470px" not-center v-model="active2">
      <template #header>
        <h6 class="pt-3">Share this article</h6>
      </template>
      <ShareModal :pathUrl="`/m/${this.article.slug}`" />
    </vs-dialog>
  </div>
</template>

<script>
export default {
  name: "ChannelCommonCard",
  data() {
    return {
      icon: "star",
      toogle: false,
      active2: false,
      iconColor: "dark"
    };
  },
  mounted() {
    this.checkLocal();
  },
  props: {
    article: {
      type: Object,
      required: true
    }
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
    setFavourite(duration, color) {
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

          this.icon = "star";
          this.iconColor = "dark";
        }
      }
    },
    copyLink() {
      navigator.clipboard.writeText(this.place);
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
/* .channel-common-card{

} */
.custom-channel-common-card {
  border: none !important;
  cursor: pointer;
  background-color: #ffffff;
  margin-bottom: 30px;
}
.custom-card-text-date {
  margin-top: 10px;
  font-weight: 400;
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 0px !important;
}
.custom-card-text-title {
  margin-top: 0px !important;
  color: rgb(27, 30, 33);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: -0.5px;
}
a {
  color: black;
  text-decoration: none;
}
.toast-warper {
  position: absolute;
  right: 2px;
  bottom: 23px;
}
</style>

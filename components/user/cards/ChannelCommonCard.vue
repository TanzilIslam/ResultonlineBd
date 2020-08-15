<template>
  <div v-if="article.is_active" class="channel-common-card">
    <b-card no-body class="custom-channel-common-card">
      <div @click="setview">
        <div v-if="article.channel.channelname == 'Mobile phone'">
          <nuxt-link prefetch :to="`/m/${article.slug}`">
            <b-card-img-lazy
              blank-color="#bbb"
              :src="article.photo"
              top
              height="165"
              style="border-radius: 10px;"
            ></b-card-img-lazy>
          </nuxt-link>
        </div>
        <div v-else>
          <nuxt-link prefetch :to="`/${article.slug}`">
            <b-card-img-lazy
              blank-color="#bbb"
              :src="article.photo"
              top
              height="165"
              style="border-radius: 10px;"
            ></b-card-img-lazy>
          </nuxt-link>
        </div>
      </div>

      <div class="d-flex w-100">
        <b-card-text class="text-muted custom-card-text-date" text-tag="p">{{
          article.release_date
        }}</b-card-text>
        <div class="ml-auto pt-2">
          <p>
            <b-icon :icon="icon" @click="setFavourite()" class="mr-2"></b-icon>
            <b-icon icon="reply" class="mr-2"></b-icon>
          </p>
        </div>
      </div>

      <div @click="setview">
        <div v-if="article.channel.channelname == 'Mobile phone'">
          <nuxt-link prefetch :to="`/m/${article.slug}`">
            <b-card-text text-tag="h5" class="custom-card-text-title">{{
              article.title
            }}</b-card-text>
          </nuxt-link>
        </div>
        <div v-else>
          <nuxt-link prefetch :to="`/${article.slug}`">
            <b-card-text text-tag="h5" class="custom-card-text-title">{{
              article.title
            }}</b-card-text>
          </nuxt-link>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ChannelCommonCard",
  data() {
    return {
      icon: "star",
      toogle: false
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
    setview() {
      // try {
      //   this.$axios.$put(process.env.baseUrl + `/count/${this.article.slug}`, {
      //     view: this.article.view + 1
      //   });
      // } catch (e) {
      //   alert("No more data" + e);
      // }
    },
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
    setFavourite() {
      if (process.browser) {
        this.toogle = !this.toogle;
        if (this.toogle) {
          localStorage.setItem(
            this.article.slug,
            JSON.stringify(this.article.title)
          );
          this.icon = "star-fill";
          this.$bvToast.toast(`Successfully added to Favourite!`, {
            title: "Done",
            autoHideDelay: 2000,
            solid: true,
            static: true
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

          this.icon = "star";
        }
      }
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
  /* font-weight: 400; */
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: -0.5px;
  /* font-weight: bold; */
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

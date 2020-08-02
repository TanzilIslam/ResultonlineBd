<template>
  <div class="author-small-card">
    <b-card no-body class="custom-author-small-card">
      <div @click="setview">
        <nuxt-link prefetch :to="`/detailPost/${ArticleSlug}`">
          <b-card-img-lazy
            :src="ArticleCover"
            blank-color="#bbb"
            top
            height="165"
            style="border-radius: 10px;"
          ></b-card-img-lazy>
        </nuxt-link>
      </div>
      <div class="d-flex w-100">
        <b-card-text class="text-muted custom-card-text-date" text-tag="p"
          >{{ ArticlePublish }} |</b-card-text
        >
        <div class="ml-auto pt-2">
          <p>
            <b-icon :icon="icon" @click="setFavourite()" class="mr-2"></b-icon>
            <b-icon icon="reply" class="mr-2"></b-icon>
          </p>
        </div>
      </div>
      <div @click="setview">
        <nuxt-link prefetch :to="`/${ArticleSlug}`">
          <b-card-text text-tag="h6" class="custom-card-text-title">{{
            ArticleTitle
          }}</b-card-text>
        </nuxt-link>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    ArticleCover: {
      type: String,
      default: "",
    },
    ArticlePublish: {
      type: String,
      default: "2101-11-22",
    },
    ArticleTitle: {
      type: String,
      default: "This is the Title",
    },
    ArticleSlug: {
      type: String,
    },
    ArticleView: {
      type: Number,
    },
  },
  data() {
    return {
      icon: "star",
      toogle: false,
    };
  },
  methods: {
    setview() {
      try {
        this.$axios.$put(process.env.baseUrl + `/count/${this.ArticleSlug}`, {
          view: this.ArticleView + 1,
        });
        // this.$store.dispatch("countView/setViewcount", this.article.slug);
      } catch (e) {
        alert("No more data" + e);
      }
    },
    checkLocal() {
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        if (key == this.ArticleSlug) {
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
            this.ArticleSlug,
            JSON.stringify(this.ArticleTitle)
          );
          this.icon = "star-fill";
          this.$bvToast.toast(`Successfully added to Favourite!`, {
            title: "Done",
            autoHideDelay: 2000,
            solid: true,
            static: true,
          });
        } else if (!this.toogle) {
          for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            if (key == this.ArticleSlug) {
              // console.log("found");
              localStorage.removeItem(this.ArticleSlug);
              break;
            }
          }

          this.icon = "star";
        }
      }
    },
  },
  mounted() {
    this.checkLocal();
  },
};
</script>

<style  scoped>
/* .author-small-card {
} */

.custom-author-small-card {
  border: none !important;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
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
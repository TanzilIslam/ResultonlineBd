<template>
  <div>
    <b-row>
      <b-col
        cols="12"
        sm="12"
        md="10"
        lg="10"
        xl="10"
        offset-lg="1"
        offset-md="1"
        offset-xl="1"
      >
        <!-- Cover Start -->
        <div>
          <b-card
            style="height: 80px;"
            :bg-variant="datas.tagNameBG"
            text-variant="white"
          >
            <b-card-text text-tag="h2" class="text-center">
              {{ this.$route.params.tag }}</b-card-text
            >
          </b-card>
        </div>
        <!-- Cover End -->

        <b-row>
          <b-col
            cols="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
            v-for="(article, index) in datas.List"
            :key="index"
            class="py-3"
          >
            <div v-if="article.is_active">
              <div v-if="article.channel__slug_channel == 'Mobile'">
                <nuxt-link prefetch :to="`/m/${article.slug}`">
                  <div @click="setview(article.view, article.slug)">
                    <b-card no-body class="custom-author-small-card">
                      <b-card-img-lazy
                        :src="imgpath + article.photo"
                        blank-color="#bbb"
                        top
                        height="165"
                        style="border-radius: 10px;"
                      ></b-card-img-lazy>
                      <!-- <b-card-text class="text-muted custom-card-text-date" text-tag="p">{{
        ArticlePublish
      }}</b-card-text> -->
                      <b-card-text text-tag="h5" class="custom-card-text-title">
                        {{ article.title }}
                      </b-card-text>
                    </b-card>
                  </div>
                </nuxt-link>
              </div>
              <div v-else>
                <nuxt-link prefetch :to="`/${article.slug}`">
                  <div @click="setview(article.view, article.slug)">
                    <b-card no-body class="custom-author-small-card">
                      <b-card-img-lazy
                        :src="imgpath + article.photo"
                        blank-color="#bbb"
                        top
                        height="165"
                        style="border-radius: 10px;"
                      ></b-card-img-lazy>
                      <!-- <b-card-text class="text-muted custom-card-text-date" text-tag="p">{{
        ArticlePublish
      }}</b-card-text> -->
                      <b-card-text text-tag="h5" class="custom-card-text-title">
                        {{ article.title }}
                      </b-card-text>
                    </b-card>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-container> </b-container>

    <!-- Pagination Start End -->
    <div class="myPagination">
      <div class="text-center mt-5 mb-3">
        <b-button variant="dark" @click="loadData">Load More</b-button>
      </div>
    </div>
    <!-- Pagination End -->
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      datas: [],
      next: "",
      imgpath: "http://cdn.resultonlinebd.com/media/"
    };
  },

  async fetch() {
    var self = this;
    await self.$axios
      .$get(process.env.baseUrl + `/tagPage/${self.$route.params.tag}`)
      .then(function(posts) {
        self.datas = posts.results;
        self.next = posts.next;
      })
      .catch(function(e) {
        console.log(e);
      });
  },
  methods: {
    async setview(view, slug) {
      // try {
      //   await this.$axios.$put(process.env.baseUrl + `/count/${slug}`, {
      //     view: view + 1
      //   });
      // } catch (e) {
      //   console.log(e);
      // }
    },
    async loadData() {
      if (this.next != null) {
        var self = this;
        await self.$axios
          .$get(self.next)
          .then(function(posts) {
            posts.results.List.forEach(element => {
              self.datas.List.push(element);
            });
            self.next = posts.next;
          })
          .catch(function(error) {
            console.log("No Net" + error);
          })
          .finally(function() {});
      } else {
        alert("Null");
      }
    }
  }
};
</script>

<style scoped>
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
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: -0.5px;
}
a {
  color: black !important;
  text-decoration: none !important;
}
</style>

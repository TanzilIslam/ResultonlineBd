<template>
  <div>
    <div v-if="$fetchState.pending" class="pt-2">
      <VclChannelCommonCard />
    </div>
    <div v-else>
      <h4 class="pt-2 mb-3">
        <b-img
          height="40"
          width="40"
          class="rounded mr-2"
          :src="'http://cdn.resultonlinebd.com/media/' + allBlogPost.cat_icon"
        ></b-img
        >{{ allBlogPost.cat_name }}
      </h4>
      <b-row>
        <b-col
          class="mb-2"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
          v-for="(i, index) in allBlogPost.List"
          :key="index"
        >
          <div v-if="i.is_active">
            <nuxt-link prefetch :to="`/b/${i.slug}`">
              <b-card class="cover-card-two" no-body img-top>
                <b-card-img
                  width="436"
                  height="280"
                  :src="'http://cdn.resultonlinebd.com/media/' + i.photo"
                  class="card-image-bottom"
                ></b-card-img>
                <b-card-text text-tag="p" class="card-title-small mt-4">
                  {{ i.title }}
                </b-card-text>
                <b-card-text text-tag="p" class="des">
                  {{ i.details.slice(0, 80) }}
                </b-card-text>
              </b-card>
            </nuxt-link>
          </div>
        </b-col>
      </b-row>
      <!-- Pagination Start End -->
      <div class="myPagination">
        <div class="text-center mt-5 mb-3">
          <b-button variant="dark" @click="loadData">Load More</b-button>
        </div>
      </div>
      <!-- Pagination End -->
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      allBlogPost: [],
      nextDataLink: "",
      icon: ""
    };
  },
  async fetch() {
    var self = this;
    await self.$axios
      .$get(
        process.env.baseUrl +
          `/blog/api/v1/blog_channel/${this.$route.params.blogPost}`
      )
      .then(function(posts) {
        // posts.results.forEach(element => {

        //   element.catagry_select.forEach(elements => {
        //     self.icon = elements.cat_icon;
        //   });
        // });

        self.allBlogPost = posts.results;
        self.nextDataLink = posts.next;
      })
      .catch(function(error) {
        console.log("No Net" + error);
      })
      .finally(function() {});
  },
  methods: {
    async loadData() {
      if (this.nextDataLink != null) {
        var self = this;
        await self.$axios
          .$get(self.nextDataLink)
          .then(function(posts) {
            posts.results.List.forEach(element => {
              self.allBlogPost.List.push(element);
            });
            self.nextDataLink = posts.next;
          })
          .catch(function(error) {
            console.log("No Net" + error);
          })
          .finally(function() {});
      } else {
        alert("Null");
      }
    }
  },
  computed: {
    // icon() {
    //   return this.allBlogPost.catagry_select.cat_icon;
    // }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(18, 20, 22) !important;
}
.cover-card-two {
  border: none;
  /* width: 93% !important; */
}
.card-image-bottom {
  border-radius: 10px !important;
}
.card-title-small {
  color: rgb(18, 20, 22);
  font-size: 14px;
  font-family: ProximaNova-Bold, helvetica, Arial, sans-serif;
  margin: 5px 0px 0px;
  line-height: 1.29;
  font-weight: bold;
}
.des {
  color: rgb(79, 70, 70) !important;
  font-size: 14px;
  line-height: 18px;
  margin: 0px;
  padding-right: 10px;
  font-weight: normal !important;
}
</style>

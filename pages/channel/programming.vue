<template>
  <div class="programming-post">
    <b-row>
      <!-- sideBar Start -->
      <b-col cols="12" sm="12" md="3" lg="3" xl="3">
        <div class="channel-side-bar mb-4">
          <h5 class="text-center channel-side-bar-title">
            <b-icon class="mr-2" icon="code" scale="2"></b-icon> Programming
          </h5>
          <b-list-group class="channel-side-bar-list-group">
            <b-list-group-item
              class="channel-side-bar-list-item"
              v-for="(item, index) in subCatagoryList.results"
              :key="index"
              @click="showSubData(item)"
            >
              <b-img
                :src="item.tag_icon"
                class="channel-side-bar-list-item-icon"
              ></b-img>
              <span class="channel-side-bar-list-item-name">{{
                item.tag_name
              }}</span>
            </b-list-group-item>
          </b-list-group>
          <h6
            @click="loadMoreSubCatagoryListItem"
            style="text-decoration: underline;;cursor:pointer;"
            class="ml-4 mt-4"
          >
            See More
          </h6>
        </div>
      </b-col>
      <!-- Side Bar End -->
      <b-col cols="12" sm="12" md="9" lg="9" xl="9">
        <!-- Cover Start -->
        <ChannelCover ChannelCoverTitle="Programming" />
        <!-- Cover End -->

        <!--Tab start -->
        <b-tabs :no-nav-style="true" content-class="mt-0 mb-0">
          <b-tab
            title="Latest"
            title-link-class="text-dark"
            active
            @click="goLatest()"
          >
            <div class="latest-under-line"></div>
          </b-tab>
          <b-tab title="About" title-link-class="text-dark" @click="goAbout()">
            <div class="about-under-line"></div>
          </b-tab>
          <hr class="line" />
        </b-tabs>
        <!--Tab End -->

        <!-- Latest Div Start -->
        <div v-show="showLatestDiv">
          <VclChannelCommonCard v-if="$fetchState.pending" />
          <h4 v-else-if="$fetchState.error">
            Error while fetching posts: {{ $fetchState.error.message }}
          </h4>
          <b-row v-else>
            <b-col
              v-if="!tagManagerloaded"
              cols="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              class="text-center"
            >
              <b-spinner
                style="width: 3rem; height: 3rem;"
                label="Large Spinner"
              ></b-spinner>
            </b-col>

            <b-col
              v-else
              md="4"
              lg="4"
              xs="12"
              sm="6"
              xl="4"
              v-for="(article, index) in ProgrammingArticles"
              :key="index"
            >
              <nuxt-link prefetch :to="`/detailPost/${article.slug}`">
                <ChannelCommonCard :article="article" :data-index="index" />
              </nuxt-link>
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
        <!-- Latest Div End -->

        <!-- About Div Start -->
        <div v-show="showAboutDiv">
          <h3>this is abour apge of programming</h3>
          <h5 class="text-muted">Every body should know</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            esse. Veniam nesciunt repellendus cupiditate! Voluptates rerum
            debitis minima eius. Cum possimus ipsa adipisci, minus asperiores
            molestiae odio molestias ea tempore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            aut nulla tenetur, quae qui, veritatis itaque perspiciatis inventore
            aspernatur sed eius ad enim blanditiis. Placeat laboriosam mollitia
            cum libero vitae.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero a
            esse harum sapiente obcaecati eveniet eum placeat repellat nulla!
            Dolores, fuga harum. In dolorem aspernatur possimus dignissimos
            culpa quam facilis.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            quaerat dolores possimus voluptatum vero voluptates animi aliquid
            quis consequatur exercitationem fugit molestiae veniam ad eaque
            libero, atque nobis ut quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            suscipit! Inventore rerum recusandae, incidunt ipsam esse totam quia
            atque quisquam sed. Facilis, laboriosam reprehenderit in
            necessitatibus voluptatibus aliquam maxime exercitationem?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nobis
            consectetur at? Saepe inventore consequuntur repellendus error?
            Eaque, id mollitia. Nesciunt consequatur eius ex voluptates quaerat
            provident autem non blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            architecto eos amet, vel ipsa ea molestiae non enim similique quidem
            numquam dolorem! Suscipit, explicabo in vero architecto beatae
            soluta excepturi.
          </p>
        </div>
        <!-- About Div End -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "channel",
  head() {
    return {
      title: "Programming page - ResultOnlineBd",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Here you can find all the latest information about technology and different programming cool stuffs."
        }
      ]
    };
  },
  async fetch() {
    var self = this;
    // subCatagory List
    await this.$axios
      .$get(process.env.channelSubCatagoryList + `programming`)
      .then(function(posts) {
        self.subCatagoryList = posts;
      })
      .catch(function(error) {
        console.log("No Net" + error);
      })
      .finally(function() {});

    // channel home page
    await this.$axios
      .$get(process.env.channelUrl + `Programming`)
      .then(posts =>
        this.$store.dispatch(
          "programming/FetchProgrammingArticles",
          posts.results
        )
      );
  },
  computed: mapState({
    ProgrammingArticles: state => state.programming.ProgrammingArticles,
    SubArticles: state => state.programming.SubArticles
  }),
  data() {
    return {
      showLatestDiv: true,
      showAboutDiv: false,
      subCatagoryList: [],
      tagManagerloaded: true,
      isActive: false,
      catagorySelected: false
    };
  },
  methods: {
    goLatest() {
      var self = this;
      self.showLatestDiv = true;
      self.showAboutDiv = false;
    },
    goAbout() {
      var self = this;
      self.showLatestDiv = false;
      self.showAboutDiv = true;
    },
    async loadMoreSubCatagoryListItem() {
      var self = this;
      await this.$axios
        .$get(this.subCatagoryList.next)
        .then(function(posts) {
          posts.results.forEach(element => {
            self.subCatagoryList.results.push(element);
          });
          self.subCatagoryList.next = posts.next;
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});
    },
    async showSubData(item) {
      this.tagManagerloaded = false;
      var self = this;
      await this.$axios
        .$get(item.tag_content_link)
        .then(function(posts) {
          self.$store.dispatch(
            "programming/FetchProgrammingArticles",
            posts.results
          );
          self.$store.dispatch("programming/FetchSubArticles", posts.next);
        })
        .catch(function(error) {
          console.log("No Net" + error);
        })
        .finally(function() {});
      this.tagManagerloaded = true;
      this.catagorySelected = true;
    },
    async loadData() {
      if (!this.catagorySelected) {
        try {
          await this.$store.dispatch(
            "programming/FetchMoreProgrammingArticles"
          );
        } catch (e) {
          alert("No more data" + e);
        }
      } else if (this.catagorySelected) {
        if (this.SubArticles == null) {
          alert("null");
        } else {
          var self = this;
          await this.$axios
            .$get(self.SubArticles)
            .then(function(posts) {
              posts.results.forEach(element => {
                self.$store.dispatch("programming/SetSubMoreArticles", element);
              });
              self.$store.dispatch("programming/FetchSubArticles", posts.next);
            })
            .catch(function(error) {
              console.log("No Net" + error);
            })
            .finally(function() {});
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  }
};
</script>

<style scoped>
/* .programming-post{

} */

/* sidebar start */

.channel-side-bar {
  overflow: hidden;
  background: #fff;
  margin-bottom: 6px;
}

.channel-side-bar-title {
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  background-color: #343a40;
  color: white;
}
.channel-side-bar-list-group {
  overflow: auto;
}

.channel-side-bar-list-item {
  font-size: 16px;
  border: none !important;
  margin-bottom: 0px;
  cursor: pointer;
}
.channel-side-bar-list-item-icon {
  height: 30px;
  width: 30px;
}
.channel-side-bar-list-item-name {
  margin-left: 15px;
}
.activeItem {
}
/* Side Bar end */
a {
  color: black !important;
  text-decoration: none;
}
</style>

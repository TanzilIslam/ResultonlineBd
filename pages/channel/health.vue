<template>
  <div class="celebrity-post">
    <!-- Cover Start -->
    <ChannelCover ChannelCoverTitle="Health" />
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
      <b-row>
        <b-col
          md="4"
          lg="4"
          xs="12"
          sm="6"
          xl="4"
          v-for="(article, index) in HealthArticles"
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
      <h3>this is abour apge of Celebrity</h3>
      <h5 class="text-muted">Every body should know</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, esse.
        Veniam nesciunt repellendus cupiditate! Voluptates rerum debitis minima
        eius. Cum possimus ipsa adipisci, minus asperiores molestiae odio
        molestias ea tempore!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut
        nulla tenetur, quae qui, veritatis itaque perspiciatis inventore
        aspernatur sed eius ad enim blanditiis. Placeat laboriosam mollitia cum
        libero vitae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero a esse
        harum sapiente obcaecati eveniet eum placeat repellat nulla! Dolores,
        fuga harum. In dolorem aspernatur possimus dignissimos culpa quam
        facilis.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
        quaerat dolores possimus voluptatum vero voluptates animi aliquid quis
        consequatur exercitationem fugit molestiae veniam ad eaque libero, atque
        nobis ut quo.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        suscipit! Inventore rerum recusandae, incidunt ipsam esse totam quia
        atque quisquam sed. Facilis, laboriosam reprehenderit in necessitatibus
        voluptatibus aliquam maxime exercitationem?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nobis
        consectetur at? Saepe inventore consequuntur repellendus error? Eaque,
        id mollitia. Nesciunt consequatur eius ex voluptates quaerat provident
        autem non blanditiis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        architecto eos amet, vel ipsa ea molestiae non enim similique quidem
        numquam dolorem! Suscipit, explicabo in vero architecto beatae soluta
        excepturi.
      </p>
    </div>
    <!-- About Div End -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "channel",
  head() {
    return {
      title: "Celebrity page - ResultOnlineBd",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Here you can find all the latest information about HealthArticles "
        }
      ]
    };
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("FetchHealthArticles");
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch data at this time.Please try again."
      });
    } finally {
    }
  },
  computed: mapState({
    HealthArticles: state => state.HealthArticles
  }),
  data() {
    return {
      showLatestDiv: true,
      showAboutDiv: false,
      currentPage: 2
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
    async loadData() {
      try {
        let moreData = await this.$axios
          .$get(
            process.env.baseUrl +
              "/channeldel?page=" +
              this.currentPage +
              "&search=Programming"
          )
          .then(item =>
            item.results.forEach(element => {
              this.$store.dispatch("FetchMoreHealthArticles", element);
            })
          );
        this.currentPage = this.currentPage + 1;
      } catch (e) {
        alert("No more data");
      }
    }
  }
};
</script>

<style scoped>
/* .health-post{

} */
a {
  color: black !important;
  text-decoration: none;
}
</style>

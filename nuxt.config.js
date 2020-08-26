const axios = require("axios");
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || "",
    // meta: [
    //   { charset: "utf-8" },
    //   { name: "viewport", content: "width=device-width, initial-scale=1" },
    //   {
    //     hid: "description",
    //     name: "description",
    //     content: process.env.npm_package_description || ""
    //   }
    // ],
    link: [
      { rel: "png", type: "image/x-icon", href: "/favicon.ico" }
      // { rel: "stylesheet", href: "https://unpkg.com/vuesax@4.0.1-alpha.16/dist/vuesax.min.css" }
      // {
      //   rel: "stylesheet",
      //   href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
      // }
      // { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#ff0000", height: "3px" },
  /*
   ** Global CSS
   */
  css: ["~/assets/user/styles/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~plugins/component-registration.js",
    { src: "~plugins/ga.js", mode: "client" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/sitemap"
  ],
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  sitemap: {
    hostname: "http://test.resultonlinebd.com",
    gzip: true,
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'
    //   routes: async () => {
    //      let baseUrl = process.env.BASE_URL || `http://cdn.resultonlinebd.com`
    //   const { data } = await axios.get(`${baseUrl}/all/`)
    //   return data.data.map((post) => `/count/${post.slug}`)
    // }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    baseUrl: process.env.BASE_URL || `http://cdn.resultonlinebd.com`,
    channelUrl: `http://cdn.resultonlinebd.com/channel_Dataapi?search=`,
    channelPagination: `http://cdn.resultonlinebd.com/channel_Dataapi?page=`,
    channelMainTag: `http://cdn.resultonlinebd.com/tagmanager?search=`
  },
  server: {
    host: "0"
  }
};

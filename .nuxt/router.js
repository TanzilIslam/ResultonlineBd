import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _21b262ed = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _755794dc = () => interopDefault(import('..\\pages\\favourite\\index.vue' /* webpackChunkName: "pages/favourite/index" */))
const _4e28c2d6 = () => interopDefault(import('..\\pages\\high-rated\\index.vue' /* webpackChunkName: "pages/high-rated/index" */))
const _1db71e4a = () => interopDefault(import('..\\pages\\qAnda\\index.vue' /* webpackChunkName: "pages/qAnda/index" */))
const _2a116331 = () => interopDefault(import('..\\pages\\t\\index.vue' /* webpackChunkName: "pages/t/index" */))
const _443398f0 = () => interopDefault(import('..\\pages\\top\\index.vue' /* webpackChunkName: "pages/top/index" */))
const _31c30890 = () => interopDefault(import('..\\pages\\u\\index.vue' /* webpackChunkName: "pages/u/index" */))
const _9bffe8da = () => interopDefault(import('..\\pages\\channel\\celebrity.vue' /* webpackChunkName: "pages/channel/celebrity" */))
const _5662d1ed = () => interopDefault(import('..\\pages\\channel\\designlibrary.vue' /* webpackChunkName: "pages/channel/designlibrary" */))
const _2f593daf = () => interopDefault(import('..\\pages\\channel\\gaming.vue' /* webpackChunkName: "pages/channel/gaming" */))
const _3f242d5c = () => interopDefault(import('..\\pages\\channel\\health.vue' /* webpackChunkName: "pages/channel/health" */))
const _2ef1f3c4 = () => interopDefault(import('..\\pages\\channel\\history.vue' /* webpackChunkName: "pages/channel/history" */))
const _eac5aebc = () => interopDefault(import('..\\pages\\channel\\mobile.vue' /* webpackChunkName: "pages/channel/mobile" */))
const _7a9a8cee = () => interopDefault(import('..\\pages\\channel\\programming.vue' /* webpackChunkName: "pages/channel/programming" */))
const _5b8737e8 = () => interopDefault(import('..\\pages\\channel\\technology.vue' /* webpackChunkName: "pages/channel/technology" */))
const _b841da5e = () => interopDefault(import('..\\pages\\allBlogPost\\_blogPost.vue' /* webpackChunkName: "pages/allBlogPost/_blogPost" */))
const _45ed775d = () => interopDefault(import('..\\pages\\allQandA\\_qaSlug.vue' /* webpackChunkName: "pages/allQandA/_qaSlug" */))
const _c68158ec = () => interopDefault(import('..\\pages\\authorProfile\\_authorName.vue' /* webpackChunkName: "pages/authorProfile/_authorName" */))
const _1c411206 = () => interopDefault(import('..\\pages\\b\\_blogSlug.vue' /* webpackChunkName: "pages/b/_blogSlug" */))
const _50f34196 = () => interopDefault(import('..\\pages\\detailPost\\_slug.vue' /* webpackChunkName: "pages/detailPost/_slug" */))
const _1b018760 = () => interopDefault(import('..\\pages\\m\\_slug.vue' /* webpackChunkName: "pages/m/_slug" */))
const _cd836bfc = () => interopDefault(import('..\\pages\\q\\_qadetail.vue' /* webpackChunkName: "pages/q/_qadetail" */))
const _1531f1ca = () => interopDefault(import('..\\pages\\search\\_key.vue' /* webpackChunkName: "pages/search/_key" */))
const _4d0ed921 = () => interopDefault(import('..\\pages\\tagPage\\_tag.vue' /* webpackChunkName: "pages/tagPage/_tag" */))
const _0abf370f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _090895c7 = () => interopDefault(import('..\\pages\\_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _21b262ed,
    name: "blog"
  }, {
    path: "/favourite",
    component: _755794dc,
    name: "favourite"
  }, {
    path: "/high-rated",
    component: _4e28c2d6,
    name: "high-rated"
  }, {
    path: "/qAnda",
    component: _1db71e4a,
    name: "qAnda"
  }, {
    path: "/t",
    component: _2a116331,
    name: "t"
  }, {
    path: "/top",
    component: _443398f0,
    name: "top"
  }, {
    path: "/u",
    component: _31c30890,
    name: "u"
  }, {
    path: "/channel/celebrity",
    component: _9bffe8da,
    name: "channel-celebrity"
  }, {
    path: "/channel/designlibrary",
    component: _5662d1ed,
    name: "channel-designlibrary"
  }, {
    path: "/channel/gaming",
    component: _2f593daf,
    name: "channel-gaming"
  }, {
    path: "/channel/health",
    component: _3f242d5c,
    name: "channel-health"
  }, {
    path: "/channel/history",
    component: _2ef1f3c4,
    name: "channel-history"
  }, {
    path: "/channel/mobile",
    component: _eac5aebc,
    name: "channel-mobile"
  }, {
    path: "/channel/programming",
    component: _7a9a8cee,
    name: "channel-programming"
  }, {
    path: "/channel/technology",
    component: _5b8737e8,
    name: "channel-technology"
  }, {
    path: "/allBlogPost/:blogPost?",
    component: _b841da5e,
    name: "allBlogPost-blogPost"
  }, {
    path: "/allQandA/:qaSlug?",
    component: _45ed775d,
    name: "allQandA-qaSlug"
  }, {
    path: "/authorProfile/:authorName?",
    component: _c68158ec,
    name: "authorProfile-authorName"
  }, {
    path: "/b/:blogSlug?",
    component: _1c411206,
    name: "b-blogSlug"
  }, {
    path: "/detailPost/:slug?",
    component: _50f34196,
    name: "detailPost-slug"
  }, {
    path: "/m/:slug?",
    component: _1b018760,
    name: "m-slug"
  }, {
    path: "/q/:qadetail?",
    component: _cd836bfc,
    name: "q-qadetail"
  }, {
    path: "/search/:key?",
    component: _1531f1ca,
    name: "search-key"
  }, {
    path: "/tagPage/:tag?",
    component: _4d0ed921,
    name: "tagPage-tag"
  }, {
    path: "/",
    component: _0abf370f,
    name: "index"
  }, {
    path: "/:slug",
    component: _090895c7,
    name: "slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

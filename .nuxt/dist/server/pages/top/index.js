exports.ids = [25];
exports.modules = {

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4728472b", content, true, context)
};

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b8c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b8c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b8c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b8c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b8c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6b8c179a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "a[data-v-6b8c179a]{color:#000!important;text-decoration:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/top/index.vue?vue&type=template&id=6b8c179a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"top"},[_c('Carousel'),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"topActive":true}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"top-container\" data-v-6b8c179a>","</div>",[_c('VclChannelCommonCard')],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/top/index.vue?vue&type=template&id=6b8c179a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/top/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var topvue_type_script_lang_js_ = ({
  layout: "default",

  data() {
    return {
      loaded: true,
      seoObject: {}
    };
  },

  head() {
    return {
      title: this.seoObject.page_title,
      meta: [{
        hid: "description",
        name: "description",
        content: this.seoObject.description
      }, {
        hid: "keywords",
        name: "keywords",
        content: this.seoObject.meta_keyword
      }, {
        hid: "twitter:card",
        name: "twitter:card",
        content: this.seoObject.page_title
      }, {
        hid: "twitter:title",
        name: "twitter:title",
        content: this.seoObject.page_title
      }, {
        hid: "twitter:description",
        name: "twitter:description",
        content: this.seoObject.description
      }, {
        hid: "og:title",
        property: "og:title",
        content: this.seoObject.page_title
      }, {
        hid: "og:type",
        property: "og:type",
        content: "article.text"
      }, {
        hid: "og:url",
        property: "og:url",
        content: ""
      }, {
        hid: "og:description",
        name: "og:description",
        content: this.seoObject.description
      }, {
        hid: "og:image",
        name: "og:image",
        content: this.seoObject.meta_image
      }]
    };
  },

  async fetch() {// var self = this;
    // await self.$axios
    //   .$get(process.env.baseUrl + "/s/all/")
    //   .then(function(posts) {
    //     self.seoObject = posts;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // await self.$axios
    //   .$get(process.env.baseUrl + `/TopContent`)
    //   .then(posts =>
    //     self.$store.dispatch("top/FetchTopArticles", posts.results)
    //   );
  },

  computed: Object(external_vuex_["mapState"])({
    TopArticles: state => state.top.TopArticles
  }),
  methods: {
    async loadData() {// try {
      //   await this.$store.dispatch("top/FetchMoreTopArticles");
      // } catch (e) {
      // }
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  }

});
// CONCATENATED MODULE: ./pages/top/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_topvue_type_script_lang_js_ = (topvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/top/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_topvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b8c179a",
  "2ec6e977"
  
)

/* harmony default export */ var pages_top = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
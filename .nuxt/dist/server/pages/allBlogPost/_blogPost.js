exports.ids = [2];
exports.modules = {

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0ddb6d6b", content, true, context)
};

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blogPost_vue_vue_type_style_index_0_id_06e5d7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blogPost_vue_vue_type_style_index_0_id_06e5d7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blogPost_vue_vue_type_style_index_0_id_06e5d7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blogPost_vue_vue_type_style_index_0_id_06e5d7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blogPost_vue_vue_type_style_index_0_id_06e5d7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blogPost_vue_vue_type_style_index_0_id_06e5d7d2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "a[data-v-06e5d7d2]{text-decoration:none;color:#121416!important}.cover-card-two[data-v-06e5d7d2]{border:none}.card-image-bottom[data-v-06e5d7d2]{border-radius:10px!important}.card-title-small[data-v-06e5d7d2]{color:#121416;font-size:14px;font-family:ProximaNova-Bold,helvetica,Arial,sans-serif;margin:5px 0 0;line-height:1.29;font-weight:700}.des[data-v-06e5d7d2]{color:#4f4646!important;font-size:14px;line-height:18px;margin:0;padding-right:10px;font-weight:400!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/allBlogPost/_blogPost.vue?vue&type=template&id=06e5d7d2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.$fetchState.pending)?_vm._ssrNode("<div class=\"pt-2\" data-v-06e5d7d2>","</div>",[_c('VclChannelCommonCard')],1):_vm._ssrNode("<div data-v-06e5d7d2>","</div>",[_vm._ssrNode("<h4 class=\"pt-2 mb-3\" data-v-06e5d7d2>","</h4>",[_c('b-img',{staticClass:"rounded mr-2",attrs:{"height":"40","width":"40","src":'http://cdn.resultonlinebd.com/media/' + _vm.allBlogPost.cat_icon}}),_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.allBlogPost.cat_name)+"\n    "))],2),_vm._ssrNode(" "),_c('b-row',_vm._l((_vm.allBlogPost.List),function(i,index){return _c('b-col',{key:index,staticClass:"mb-2",attrs:{"cols":"12","sm":"6","md":"4","lg":"4","xl":"4"}},[(i.is_active)?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/b/" + (i.slug))}},[_c('b-card',{staticClass:"cover-card-two",attrs:{"no-body":"","img-top":""}},[_c('b-card-img',{staticClass:"card-image-bottom",attrs:{"width":"436","height":"280","src":'http://cdn.resultonlinebd.com/media/' + i.photo}}),_vm._v(" "),_c('b-card-text',{staticClass:"card-title-small mt-4",attrs:{"text-tag":"p"}},[_vm._v("\n                "+_vm._s(i.title)+"\n              ")]),_vm._v(" "),_c('b-card-text',{staticClass:"des",attrs:{"text-tag":"p"}},[_vm._v("\n                "+_vm._s(i.details.slice(0, 80))+"\n              ")])],1)],1)],1):_vm._e()])}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"myPagination\" data-v-06e5d7d2>","</div>",[_vm._ssrNode("<div class=\"text-center mt-5 mb-3\" data-v-06e5d7d2>","</div>",[_c('b-button',{attrs:{"variant":"dark"},on:{"click":_vm.loadData}},[_vm._v("Load More")])],1)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/allBlogPost/_blogPost.vue?vue&type=template&id=06e5d7d2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/allBlogPost/_blogPost.vue?vue&type=script&lang=js&
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
//
//
//
//
/* harmony default export */ var _blogPostvue_type_script_lang_js_ = ({
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
    await self.$axios.$get("http://cdn.resultonlinebd.com" + `/blog/api/v1/blog_channel/${this.$route.params.blogPost}`).then(function (posts) {
      // posts.results.forEach(element => {
      //   element.catagry_select.forEach(elements => {
      //     self.icon = elements.cat_icon;
      //   });
      // });
      self.allBlogPost = posts.results;
      self.nextDataLink = posts.next; // console.log(self.allBlogPost);
    }).catch(function (error) {
      console.log("No Net" + error);
    }).finally(function () {});
  },

  methods: {
    async loadData() {
      if (this.nextDataLink != null) {
        var self = this;
        await self.$axios.$get(self.nextDataLink).then(function (posts) {
          posts.results.List.forEach(element => {
            self.allBlogPost.List.push(element);
          });
          self.nextDataLink = posts.next;
        }).catch(function (error) {
          console.log("No Net" + error);
        }).finally(function () {});
      } else {// alert("Null");
      }
    }

  },
  computed: {// icon() {
    //   return this.allBlogPost.catagry_select.cat_icon;
    // }
  }
});
// CONCATENATED MODULE: ./pages/allBlogPost/_blogPost.vue?vue&type=script&lang=js&
 /* harmony default export */ var allBlogPost_blogPostvue_type_script_lang_js_ = (_blogPostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/allBlogPost/_blogPost.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(194)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  allBlogPost_blogPostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "06e5d7d2",
  "39c421b4"
  
)

/* harmony default export */ var _blogPost = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_blogPost.js.map
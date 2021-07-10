exports.ids = [3];
exports.modules = {

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2fe39dcc", content, true, context)
};

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qaSlug_vue_vue_type_style_index_0_id_0d9c57be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qaSlug_vue_vue_type_style_index_0_id_0d9c57be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qaSlug_vue_vue_type_style_index_0_id_0d9c57be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qaSlug_vue_vue_type_style_index_0_id_0d9c57be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qaSlug_vue_vue_type_style_index_0_id_0d9c57be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qaSlug_vue_vue_type_style_index_0_id_0d9c57be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".channel-cover-title[data-v-0d9c57be]{text-align:center!important;color:#000!important;font-size:25px}a[data-v-0d9c57be]{color:#000!important;text-decoration:none!important}.card-body[data-v-0d9c57be]{border-radius:8px}.latest-home-card[data-v-0d9c57be]{background:#fff;box-shadow:0 5px .9rem -.8rem rgba(0,0,0,.8),0 0 0 1px rgba(0,0,0,.05);border-radius:5px;height:80px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/allQandA/_qaSlug.vue?vue&type=template&id=0d9c57be&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.data.is_active)?_vm._ssrNode("<div class=\"cover mt-2 mb-3\" data-v-0d9c57be>","</div>",[_c('b-card',{staticClass:"latest-home-card"},[_c('b-card-text',{staticClass:"channel-cover-title",attrs:{"text-tag":"h2"}},[_vm._v("\n        "+_vm._s(_vm.data.publisher))])],1)],1):_vm._e(),_vm._ssrNode(" "),_c('b-row',_vm._l((_vm.data.List),function(j,index){return _c('b-col',{key:index,staticClass:"mb-3",attrs:{"cols":"12","sm":"6","md":"3","lg":"3","xl":"3"}},[(j.is_active)?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/q/" + (j.slug))}},[_c('b-card',{staticClass:"card-body",attrs:{"no-body":""}},[_c('div',[_c('h6',[_c('strong',[_vm._v(_vm._s(j.title))])]),_vm._v(" "),_c('p',{staticClass:"text-muted"},[_vm._v("\n                "+_vm._s(j.created_at)+"\n                "),_c('b-icon',{staticClass:"ml-1",attrs:{"icon":"clock-fill"}})],1),_vm._v(" "),_c('p',[_vm._v("\n                "+_vm._s(j.details.slice(0, 40) + "..")+"\n              ")])])])],1)],1):_vm._e()])}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"myPagination\" data-v-0d9c57be>","</div>",[_vm._ssrNode("<div class=\"text-center mt-5 mb-3\" data-v-0d9c57be>","</div>",[_c('b-button',{attrs:{"variant":"dark"},on:{"click":_vm.loadData}},[_vm._v("Load More")])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/allQandA/_qaSlug.vue?vue&type=template&id=0d9c57be&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/allQandA/_qaSlug.vue?vue&type=script&lang=js&
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
//
/* harmony default export */ var _qaSlugvue_type_script_lang_js_ = ({
  layout: "default",

  data() {
    return {
      data: [],
      next: ""
    };
  },

  async fetch() {
    var self = this;
    await self.$axios.$get("http://cdn.resultonlinebd.com" + `/q&a/api/v1/channel/${self.$route.params.qaSlug}`).then(function (posts) {
      self.data = posts.results;
      self.next = posts.next;
    }).catch(function (error) {
      console.log(error);
    }).finally(function () {});
  },

  methods: {
    async loadData() {
      if (this.next != null) {
        var self = this;
        await self.$axios.$get(self.next).then(function (posts) {
          posts.results.List.forEach(element => {
            self.data.List.push(element);
          });
          self.next = posts.next;
        }).catch(function (error) {
          console.log("No Net" + error);
        }).finally(function () {});
      } else {// alert("Null");
      }
    },

    async setView(view, slug) {
      this.$axios.$put("http://cdn.resultonlinebd.com" + `/q&a/api/v1/dtls/${slug}`, {
        view: view + 1
      }).then(function (response) {}).catch(function (e) {
        console.log(e);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/allQandA/_qaSlug.vue?vue&type=script&lang=js&
 /* harmony default export */ var allQandA_qaSlugvue_type_script_lang_js_ = (_qaSlugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/allQandA/_qaSlug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  allQandA_qaSlugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0d9c57be",
  "65b0177c"
  
)

/* harmony default export */ var _qaSlug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_qaSlug.js.map
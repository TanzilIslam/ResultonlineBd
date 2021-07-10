exports.ids = [22];
exports.modules = {

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5ab66b54", content, true, context)
};

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_key_vue_vue_type_style_index_0_id_92520540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_key_vue_vue_type_style_index_0_id_92520540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_key_vue_vue_type_style_index_0_id_92520540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_key_vue_vue_type_style_index_0_id_92520540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_key_vue_vue_type_style_index_0_id_92520540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_key_vue_vue_type_style_index_0_id_92520540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".list-group-item+.list-group-item[data-v-92520540]{border-top-width:1px!important}a[data-v-92520540]{color:#000;text-decoration:none}.text-title[data-v-92520540]{font-size:18px;font-weight:700}.text-description[data-v-92520540]{font-size:12px;line-height:1.5}.content-loading[data-v-92520540]{height:150px}.search-card[data-v-92520540]{padding-left:15px}.text-section[data-v-92520540]{padding-top:5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/search/_key.vue?vue&type=template&id=92520540&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.nodata)?_vm._ssrNode("<div class=\"pt-4\" style=\"margin-bottom: 260px;\" data-v-92520540>","</div>",[_vm._ssrNode("<h4 data-v-92520540>\n      Your search <strong data-v-92520540>"+_vm._ssrEscape(_vm._s(this.$route.params.key))+"</strong> did not match\n      any results.\n    </h4> <h4 data-v-92520540>Suggestions:</h4> <ul data-v-92520540><li data-v-92520540>Make sure that all words are spelled correctly.</li> <li data-v-92520540>Try different keywords.</li> <li data-v-92520540>Try more general keywords.</li></ul>")],2):_vm._ssrNode("<div data-v-92520540>","</div>",[(_vm.$fetchState.pending)?_vm._ssrNode("<div data-v-92520540>","</div>",[_vm._ssrNode("<div class=\"pt-2\" style=\"margin-bottom: 200px; text-align: center;\" data-v-92520540>","</div>",[_c('b-spinner',{staticStyle:{"width":"3rem","height":"3rem"},attrs:{"label":"Loading..."}})],1)]):_vm._ssrNode("<div data-v-92520540>","</div>",[_c('b-row',[_c('b-col',{staticClass:"mx-auto",attrs:{"cols":"12","sm":"12","md":"8","lg":"8","xl":"8"}},[_c('b-list-group',_vm._l((_vm.searched),function(i,index){return _c('b-list-group-item',{key:index,staticClass:"mb-4 search-card shadow-sm",staticStyle:{"border-radius":"8px"}},[(i.is_active)?_c('div',[(i.targetUrl.url == 'count/')?_c('div',[(i.channel__slug_channel == 'Mobile')?_c('div',[_c('nuxt-link',{attrs:{"to":("/m/" + (i.slug))}},[_c('div',{staticClass:"d-flex",on:{"click":function($event){return _vm.setView(i.view, i.targetUrl.url, i.slug)}}},[_c('div',{staticClass:"image-section mr-4"},[_c('b-img',{staticClass:"rounded",attrs:{"height":"80","width":"80","src":("http://cdn.resultonlinebd.com/media/" + (i.photo))}})],1),_vm._v(" "),_c('div',{staticClass:"text-section"},[_c('h1',{staticClass:"text-title pb-3"},[_vm._v("\n                            "+_vm._s(i.title)+"\n                          ")]),_vm._v(" "),_c('p',{staticClass:"text-description"},[_vm._v("\n                            "+_vm._s(i.details.slice(0, 30))+"\n                          ")])])])])],1):_c('div',[_c('nuxt-link',{attrs:{"to":("" + _vm.dGeneral + (i.slug))}},[_c('div',{staticClass:"d-flex",on:{"click":function($event){return _vm.setView(i.view, i.targetUrl.url, i.slug)}}},[_c('div',{staticClass:"image-section mr-4"},[_c('b-img',{staticClass:"rounded",attrs:{"height":"80","width":"80","src":("http://cdn.resultonlinebd.com/media/" + (i.photo))}})],1),_vm._v(" "),_c('div',{staticClass:"text-section"},[_c('h1',{staticClass:"text-title pb-3"},[_vm._v("\n                            "+_vm._s(i.title)+"\n                          ")]),_vm._v(" "),_c('p',{staticClass:"text-description"},[_vm._v("\n                            "+_vm._s(i.details.slice(0, 30))+"\n                          ")])])])])],1)]):(i.targetUrl.url == 'q&a/api/v1/dtls/')?_c('div',[_c('nuxt-link',{attrs:{"to":("" + _vm.dQandA + (i.slug))}},[_c('div',{staticClass:"d-flex",on:{"click":function($event){return _vm.setView(i.view, i.targetUrl.url, i.slug)}}},[_c('div',{staticClass:"text-section"},[_c('h1',{staticClass:"text-title pb-3"},[_vm._v("\n                          "+_vm._s(i.title)+"\n                        ")]),_vm._v(" "),_c('p',{staticClass:"text-description"},[_vm._v("\n                          "+_vm._s(i.details.slice(0, 30))+"\n                        ")])])])])],1):(i.targetUrl.url == 'blog/api/v1/details/')?_c('div',[_c('nuxt-link',{attrs:{"to":("" + _vm.dBlog + (i.slug))}},[_c('div',{staticClass:"d-flex"},[_c('div',{staticClass:"image-section mr-4"},[_c('b-img',{staticClass:"rounded",attrs:{"height":"80","width":"80","src":("http://cdn.resultonlinebd.com/media/" + (i.photo))}})],1),_vm._v(" "),_c('div',{staticClass:"text-section"},[_c('h1',{staticClass:"text-title pb-3"},[_vm._v("\n                          "+_vm._s(i.title)+"\n                        ")]),_vm._v(" "),_c('p',{staticClass:"text-description"},[_vm._v("\n                          "+_vm._s(i.details.slice(0, 30))+"\n                        ")])])])])],1):_vm._e()]):_vm._e()])}),1)],1)],1)],1)]),_vm._ssrNode(" "),(_vm.showPag)?_vm._ssrNode("<div class=\"myPagination\" data-v-92520540>","</div>",[_vm._ssrNode("<div class=\"text-center mt-5 mb-3\" data-v-92520540>","</div>",[_c('b-button',{attrs:{"variant":"dark"},on:{"click":_vm.loadData}},[_vm._v("Load More")])],1)]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/search/_key.vue?vue&type=template&id=92520540&scoped=true&

// EXTERNAL MODULE: external "vue-content-loading"
var external_vue_content_loading_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search/_key.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _keyvue_type_script_lang_js_ = ({
  layout: "notKeepAlive",
  components: {
    VclFacebook: external_vue_content_loading_["VclFacebook"]
  },

  data() {
    return {
      searched: [],
      next: "",
      dGeneral: "/",
      dQandA: "/q/",
      dBlog: "/b/",
      nodata: false,
      showPag: false
    };
  },

  async fetch() {
    var self = this;
    await self.$axios.$get("http://cdn.resultonlinebd.com" + "/serach/" + self.$route.params.key).then(function (posts) {
      self.searched = posts.results;

      if (posts.next != null) {
        self.next = posts.next;
        self.showPag = true;
      }
    }).catch(function (e) {
      console.log(e);
      self.nodata = true;
    });
  },

  computed: {},
  methods: {
    async loadData() {
      if (this.next != null) {
        var self = this;
        await self.$axios.$get(self.next).then(function (posts) {
          posts.results.forEach(element => {
            self.searched.push(element);
          });
          self.next = posts.next;
        }).catch(function (error) {
          console.log("No Net" + error);
        }).finally(function () {});
      } else {// alert("no more data");
      }
    },

    async setView(viwes, url, slug) {// await this.$axios
      //   .$put(process.env.baseUrl + `/${url}${slug}`, {
      //     view: viwes + 1
      //   })
      //   .then(function(response) {})
      //   .catch(function(e) {
      //     console.log("setview " + e);
      //   });
    }

  }
});
// CONCATENATED MODULE: ./pages/search/_key.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_keyvue_type_script_lang_js_ = (_keyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/search/_key.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(213)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_keyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "92520540",
  "fd0f2880"
  
)

/* harmony default export */ var _key = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_key.js.map
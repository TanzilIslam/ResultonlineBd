exports.ids = [21];
exports.modules = {

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4f3bb673", content, true, context)
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2744a0c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2744a0c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2744a0c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2744a0c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2744a0c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2744a0c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".side-bar-title[data-v-2744a0c6]{font-size:1rem;font-weight:500;color:#856368}.channel-cover-title[data-v-2744a0c6]{text-align:center!important;color:#000!important;font-size:25px}a[data-v-2744a0c6]{color:#000!important;text-decoration:none!important}.card-body[data-v-2744a0c6]{border-radius:8px}.latest-home-card[data-v-2744a0c6]{background:#fff;border-radius:5px;height:80px}.qa-tags[data-v-2744a0c6]{cursor:pointer;background-color:#fff;border-radius:8px;height:40px;padding:7px 30px;box-shadow:0 6px 8px rgba(0,0,0,.03),0 1px 2px rgba(0,0,0,.3)}.list-title[data-v-2744a0c6]{font-size:.875rem;line-height:1.4;color:#202131;font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-weight:600}.sub-title[data-v-2744a0c6]{font-size:.75rem}.list-item[data-v-2744a0c6]{background:transparent;border:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/qAnda/index.vue?vue&type=template&id=2744a0c6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"question-and-answere"},[_vm._ssrNode("<h5 class=\"pt-4\" data-v-2744a0c6><strong data-v-2744a0c6> #shortList</strong></h5> <div class=\"tags flex-wrap d-flex justify-content-between\" style=\"padding-bottom: 20px;\" data-v-2744a0c6>"+(_vm._ssrList((_vm.subTagList),function(item,index){return ("<div data-v-2744a0c6>"+((item.is_active)?("<div class=\"qa-tags my-2\" data-v-2744a0c6>"+_vm._ssrEscape("\n        "+_vm._s(item.shot_list_name)+"\n      ")+"</div>"):"<!---->")+"</div>")}))+"</div> "),_c('b-row',[_c('b-col',{staticClass:"order-md-last order-lg-last order-xl-last",attrs:{"cols":"12","sm":"12","md":"3","lg":"3","xl":"3"}},[_c('div',{staticStyle:{"background-color":"#f8f9fa","padding":"10px","margin-top":"7px"}},[_c('h2',{staticClass:"side-bar-title"},[_vm._v("All")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('b-list-group',_vm._l((_vm.fastCheck),function(i,index){return _c('b-list-group-item',{key:index,staticClass:"p-0 m-0 list-item mb-4"},[(i.is_active)?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/q/" + (i.slug))}},[_c('div',{on:{"click":function($event){return _vm.setView(i.view, i.slug)}}},[_c('h4',{staticClass:"list-title"},[_vm._v("\n                    "+_vm._s(i.title)+"\n                  ")]),_vm._v(" "),_c('p',{staticClass:"text-muted sub-title"},[_vm._v("\n                    "+_vm._s(i.catagry.publisher)+"\n                  ")])])])],1):_vm._e()])}),1)],1)]),_vm._v(" "),_c('b-col',{attrs:{"cols":"12","sm":"12","md":"9","lg":"9","xl":"9"}},[(!_vm.selectedData)?_c('div',_vm._l((_vm.data),function(i,index){return _c('div',{key:index},[(i.is_active)?_c('div',{staticClass:"cover mt-2 mb-3"},[_c('b-card',{staticClass:"latest-home-card"},[_c('nuxt-link',{attrs:{"prefetch":"","to":("/allQandA/" + (i.q_slug))}},[_c('b-card-text',{staticClass:"channel-cover-title",attrs:{"text-tag":"h2"}},[_vm._v("\n                  "+_vm._s(i.publisher))])],1)],1)],1):_vm._e(),_vm._v(" "),_c('b-row',_vm._l((i.List),function(j,index){return _c('b-col',{key:index,staticClass:"mb-3",attrs:{"cols":"12","sm":"6","md":"4","lg":"4","xl":"4"}},[(j.is_active)?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/q/" + (j.slug))}},[_c('b-card',{staticClass:"card-body",attrs:{"no-body":""}},[_c('div',{on:{"click":function($event){return _vm.setView(j.view, j.slug)}}},[_c('h6',[_c('strong',[_vm._v(_vm._s(j.title))])]),_vm._v(" "),_c('p',{staticClass:"text-muted"},[_vm._v("\n                        "+_vm._s(j.created_at)+"\n                        "),_c('b-icon',{staticClass:"ml-1",attrs:{"icon":"clock-fill"}})],1),_vm._v(" "),_c('p',[_vm._v("\n                        "+_vm._s(j.details.slice(0, 40) + "..")+"\n                      ")])])])],1)],1):_vm._e()])}),1)],1)}),0):_c('div',[_c('b-row',_vm._l((_vm.subTagData),function(j,index){return _c('b-col',{key:index,staticClass:"mb-3",attrs:{"cols":"12","sm":"6","md":"4","lg":"4","xl":"4"}},[(j.is_active)?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/q/" + (j.slug))}},[_c('b-card',{staticClass:"card-body",attrs:{"no-body":""}},[_c('div',{on:{"click":function($event){return _vm.setView(j.view, j.slug)}}},[_c('h6',[_c('strong',[_vm._v(_vm._s(j.title))])]),_vm._v(" "),_c('p',{staticClass:"text-muted"},[_vm._v("\n                      "+_vm._s(j.created_at)+"\n                      "),_c('b-icon',{staticClass:"ml-1",attrs:{"icon":"clock-fill"}})],1),_vm._v(" "),_c('p',[_vm._v("\n                      "+_vm._s(j.details.slice(0, 40) + "..")+"\n                    ")])])])],1)],1):_vm._e()])}),1)],1)])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"myPagination\" data-v-2744a0c6>","</div>",[_vm._ssrNode("<div class=\"text-center mt-5 mb-3\" data-v-2744a0c6>","</div>",[_c('b-button',{attrs:{"variant":"dark"},on:{"click":_vm.loadData}},[_vm._v("Load More")])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/qAnda/index.vue?vue&type=template&id=2744a0c6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/qAnda/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var qAndavue_type_script_lang_js_ = ({
  layout: "default",

  data() {
    return {
      data: [],
      next: "",
      subTagList: [],
      selectedData: false,
      subTagData: [],
      fastCheck: [],
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

  async fetch() {
    var self = this; //seo

    var self = this;
    await self.$axios.$get("http://cdn.resultonlinebd.com" + "/s/h/qandaPage").then(function (posts) {
      self.seoObject = posts;
    }).catch(function (error) {
      console.log(error);
    });
    await self.$axios.$get("http://cdn.resultonlinebd.com" + "/q&a/api/v1/short_list").then(function (posts) {
      self.subTagList = posts.results;
    }).catch(function (error) {
      console.log(error);
    });
    await self.$axios.$get("http://cdn.resultonlinebd.com" + "/q&a/api/v1/").then(function (posts) {
      self.data = posts.results;
      self.next = posts.next;
    }).catch(function (error) {
      console.log(error);
    });
    await self.$axios.$get("http://cdn.resultonlinebd.com" + "/q&a/api/v1/qna_fast_check").then(function (posts) {
      self.fastCheck = posts;
    }).catch(function (error) {
      console.log(error);
    });
  },

  methods: {
    async loadData() {
      if (this.next != null) {
        var self = this;
        await self.$axios.$get(self.next).then(function (posts) {
          posts.results.forEach(element => {
            if (!self.selectedData) {
              self.data.push(element);
            } else {
              self.subTagData.push(element);
            }
          });
          self.next = posts.next;
        }).catch(function (error) {
          console.log("No Net" + error);
        }).finally(function () {});
      } else {// alert("Null");
      }
    },

    async showSubTagPosts(item) {
      var self = this;
      await self.$axios.$get(item.shot_list_data).then(function (posts) {
        // console.log(posts);
        // self.data = "";
        self.subTagData = posts.results;
        self.next = posts.next;
        self.selectedData = true; // subtag
      }).catch(function (error) {
        console.log("No Net" + error);
      });
    },

    async setView(view, slug) {// this.$axios
      //   .$put(process.env.baseUrl + `/q&a/api/v1/dtls/${slug}`, {
      //     view: view + 1
      //   })
      //   .then(function(response) {})
      //   .catch(function(e) {
      //     console.log("setview " + e);
      //   });
    }

  }
});
// CONCATENATED MODULE: ./pages/qAnda/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_qAndavue_type_script_lang_js_ = (qAndavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/qAnda/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_qAndavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2744a0c6",
  "4998611d"
  
)

/* harmony default export */ var qAnda = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
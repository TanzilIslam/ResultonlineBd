exports.ids = [24];
exports.modules = {

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(216);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4c7718e8", content, true, context)
};

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_4f6e5628_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_4f6e5628_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_4f6e5628_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_4f6e5628_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_4f6e5628_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_4f6e5628_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".custom-author-small-card[data-v-4f6e5628]{border:none!important;cursor:pointer;background-color:#fff;margin-bottom:30px}.custom-card-text-date[data-v-4f6e5628]{margin-top:10px;font-weight:400;font-size:15px;text-transform:uppercase;margin-bottom:0!important}.custom-card-text-title[data-v-4f6e5628]{margin-top:0!important;color:#1b1e21;font-weight:400;font-size:17px;line-height:1.4;letter-spacing:-.5px}a[data-v-4f6e5628]{color:#000!important;text-decoration:none!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/tagPage/_tag.vue?vue&type=template&id=4f6e5628&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-row',[_c('b-col',{attrs:{"cols":"12","sm":"12","md":"10","lg":"10","xl":"10","offset-lg":"1","offset-md":"1","offset-xl":"1"}},[_c('div',[_c('b-card',{staticStyle:{"height":"80px"},attrs:{"bg-variant":_vm.datas.tagNameBG,"text-variant":"white"}},[_c('b-card-text',{staticClass:"text-center",attrs:{"text-tag":"h2"}},[_vm._v("\n            "+_vm._s(this.$route.params.tag))])],1)],1),_vm._v(" "),_c('b-row',_vm._l((_vm.datas.List),function(article,index){return _c('b-col',{key:index,staticClass:"py-3",attrs:{"cols":"12","sm":"6","md":"3","lg":"3","xl":"3"}},[(article.is_active)?_c('div',[(article.channel__slug_channel == 'Mobile')?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/m/" + (article.slug))}},[_c('div',{on:{"click":function($event){return _vm.setview(article.view, article.slug)}}},[_c('b-card',{staticClass:"custom-author-small-card",attrs:{"no-body":""}},[_c('b-card-img-lazy',{staticStyle:{"border-radius":"10px"},attrs:{"alt":article.Seoimgalt,"src":_vm.imgpath + article.photo,"blank-color":"#bbb","top":"","height":"165"}}),_vm._v(" "),_c('b-card-text',{staticClass:"custom-card-text-title",attrs:{"text-tag":"h5"}},[_vm._v("\n                      "+_vm._s(article.title)+"\n                    ")])],1)],1)])],1):_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/" + (article.slug))}},[_c('div',{on:{"click":function($event){return _vm.setview(article.view, article.slug)}}},[_c('b-card',{staticClass:"custom-author-small-card",attrs:{"no-body":""}},[_c('b-card-img-lazy',{staticStyle:{"border-radius":"10px"},attrs:{"alt":article.Seoimgalt,"src":_vm.imgpath + article.photo,"blank-color":"#bbb","top":"","height":"165"}}),_vm._v(" "),_c('b-card-text',{staticClass:"custom-card-text-title",attrs:{"text-tag":"h5"}},[_vm._v("\n                      "+_vm._s(article.title)+"\n                    ")])],1)],1)])],1)]):_vm._e()])}),1)],1)],1),_vm._ssrNode(" "),_c('b-container'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"myPagination \" data-v-4f6e5628>","</div>",[_vm._ssrNode("<div class=\"d-flex justify-content-center\" data-v-4f6e5628>","</div>",[_c('vs-button',{attrs:{"loading":_vm.loadMoreLoading,"color":"#343a40","flat":""},on:{"click":_vm.loadData}},[_c('strong',[_vm._v("Load More")])])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/tagPage/_tag.vue?vue&type=template&id=4f6e5628&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tagPage/_tag.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _tagvue_type_script_lang_js_ = ({
  layout: "default",

  data() {
    return {
      loadMoreLoading: false,
      datas: [],
      seoObject: {},
      next: "",
      imgpath: "http://cdn.resultonlinebd.com/media/"
    };
  },

  head() {
    return {
      title: this.seoObject.tag_name,
      meta: [{
        hid: "description",
        name: "description",
        content: `Top articles of ${this.seoObject.tag_name}`
      }, {
        hid: "keywords",
        name: "keywords",
        content: this.seoObject.tag_name
      }, {
        hid: "twitter:card",
        name: "twitter:card",
        content: this.seoObject.tag_name
      }, {
        hid: "twitter:title",
        name: "twitter:title",
        content: this.seoObject.tag_name
      }, {
        hid: "twitter:description",
        name: "twitter:description",
        content: `Top articles of ${this.seoObject.tag_name}`
      }, {
        hid: "og:title",
        property: "og:title",
        content: this.seoObject.tag_name
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
        content: `Top articles of ${this.seoObject.tag_name}`
      } // {
      //   hid: "og:image",
      //   name: "og:image",
      //   content: this.seoObject.meta_image
      // }
      ]
    };
  },

  async fetch() {
    var self = this;
    await self.$axios.$get("http://cdn.resultonlinebd.com" + `/tagPage/${self.$route.params.tag}`).then(function (posts) {
      self.datas = posts.results;
      self.next = posts.next;
      self.seoObject = posts.results;
    }).catch(function (e) {
      console.log(e);
    });
  },

  methods: {
    async setview(view, slug) {// try {
      //   await this.$axios.$put(process.env.baseUrl + `/count/${slug}`, {
      //     view: view + 1
      //   });
      // } catch (e) {
      //   console.log(e);
      // }
    },

    async loadData() {
      this.loadMoreLoading = true;

      if (this.next != null) {
        var self = this;
        await self.$axios.$get(self.next).then(function (posts) {
          posts.results.List.forEach(element => {
            self.datas.List.push(element);
          });
          self.next = posts.next;
        }).catch(function (error) {
          console.log("No Net" + error);
        }).finally(function () {});
      } else {// alert("Null");
      }

      this.loadMoreLoading = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/tagPage/_tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var tagPage_tagvue_type_script_lang_js_ = (_tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/tagPage/_tag.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(215)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tagPage_tagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4f6e5628",
  "100263d2"
  
)

/* harmony default export */ var _tag = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_tag.js.map
exports.ids = [20];
exports.modules = {

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("1134fbca", content, true, context)
};

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/qa.5f49154.svg";

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ans.33473ae.svg";

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qadetail_vue_vue_type_style_index_0_id_696c7142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qadetail_vue_vue_type_style_index_0_id_696c7142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qadetail_vue_vue_type_style_index_0_id_696c7142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qadetail_vue_vue_type_style_index_0_id_696c7142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qadetail_vue_vue_type_style_index_0_id_696c7142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_qadetail_vue_vue_type_style_index_0_id_696c7142_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]);
// Module
exports.push([module.i, ".qa-list-item[data-v-696c7142]{border:none;font-size:.875rem;line-height:1.25;font-weight:500}a[data-v-696c7142]{color:#000;text-decoration:none}.qa-details[data-v-696c7142]{font-family:\"Inter\",sans-serif}.image-holder[data-v-696c7142]{padding-left:8px;padding-top:4px;border-radius:5px;margin-right:8px;margin-bottom:4px;background-color:#e4e6eb}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/q/_qadetail.vue?vue&type=template&id=696c7142&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qa-details"},[(_vm.$fetchState.pending)?_vm._ssrNode("<div class=\"text-center pt-4\" data-v-696c7142>","</div>",[_vm._ssrNode("<h4 data-v-696c7142>Loading...</h4>")],2):_c('b-row',{staticClass:"pt-4"},[_c('b-col',{staticClass:"mb-3",attrs:{"cols":"12","sm":"12","md":"9","lg":"9","xl":"9"}},[(_vm.data.is_active)?_c('div',[_c('div',{staticClass:"question mb-4"},[_c('div',{staticClass:"d-flex"},[_c('div',{staticClass:"image-holder"},[_c('b-img',{staticClass:"mr-2",attrs:{"height":"30","width":"30","alt":"question logo","src":__webpack_require__(209)}})],1),_vm._v(" "),_c('h4',[_c('strong',[_vm._v("Question")])])]),_vm._v(" "),_c('b-card',{attrs:{"no-body":""}},[_c('div',{staticClass:"m-4"},[_c('div',{staticClass:"d-flex w-100"},[_c('div',[_c('h4',[_c('strong',[_vm._v(_vm._s(_vm.data.title))])])]),_vm._v(" "),_c('div',{staticClass:"ml-auto"},[_c('div',{staticClass:"d-flex pt-1"},[_c('b-icon',{staticClass:" ml-2 mr-1 my-auto",attrs:{"icon":"eye-fill"}}),_vm._v("\n                    "+_vm._s(_vm.data.view)+"\n                    "),_c('b-icon',{staticClass:"mt-1 ml-4 h5 my-auto",staticStyle:{"cursor":"pointer"},attrs:{"icon":"reply"},on:{"click":function($event){_vm.active2 = !_vm.active2}}})],1)])]),_vm._v(" "),_c('p',{staticClass:"text-muted"},[_vm._v("\n                "+_vm._s(_vm.data.catagry.publisher)+"\n              ")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.data.details))])])])],1),_vm._v(" "),_c('div',{staticClass:"answer pt-4"},[_c('div',{staticClass:"d-flex"},[_c('div',{staticClass:"image-holder"},[_c('b-img',{staticClass:"mr-2",attrs:{"height":"30","width":"30","alt":"answare logo","src":__webpack_require__(210)}})],1),_vm._v(" "),_c('h4',[_c('strong',[_vm._v("Answere")])])]),_vm._v(" "),_c('b-card',{attrs:{"no-body":""}},[_c('div',{staticClass:"m-4"},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.data.awnsr_qna)}})])])],1)]):_vm._e()]),_vm._v(" "),_c('b-col',{attrs:{"cols":"12","sm":"12","md":"3","lg":"3","xl":"3"}},[_c('b-card',{attrs:{"no-body":""}},[_c('b-list-group',[_c('h5',{staticClass:"mb-3 pt-3 ml-3",staticStyle:{"color":"#71839f"}},[_vm._v("\n            Suggested Topics\n          ")]),_vm._v(" "),_vm._l((_vm.relatedData),function(i,index){return _c('b-list-group-item',{key:index,staticClass:"qa-list-item"},[(i.is_active)?_c('div',[_c('nuxt-link',{attrs:{"prefetch":"","to":("/q/" + (i.slug))}},[_c('div',[_vm._v("\n                  "+_vm._s(i.title)+"\n                ")])])],1):_vm._e()])})],2)],1)],1)],1),_vm._ssrNode(" "),_c('vs-dialog',{attrs:{"width":"470px","not-center":""},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('h6',{staticClass:"pt-3"},[_vm._v("Share this Question and Answere")])]},proxy:true}]),model:{value:(_vm.active2),callback:function ($$v) {_vm.active2=$$v},expression:"active2"}},[_vm._v(" "),_c('ShareModal',{attrs:{"pathUrl":("/q&a/api/v1/dtls/" + (this.$route.params.qadetail))}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/q/_qadetail.vue?vue&type=template&id=696c7142&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/q/_qadetail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _qadetailvue_type_script_lang_js_ = ({
  layout: "detail",

  data() {
    return {
      data: {},
      relatedData: [],
      active2: false,
      articleView: 0
    };
  },

  async fetch() {
    var self = this;
    await self.$axios.$get("http://cdn.resultonlinebd.com" + `/q&a/api/v1/dtls/${self.$route.params.qadetail}`).then(function (posts) {
      // console.log("1st get ", posts.view);
      self.articleView = posts.view;
    });
    await self.$axios.$put("http://cdn.resultonlinebd.com" + `/q&a/api/v1/dtls/${self.$route.params.qadetail}`, {
      view: self.articleView + 1
    }, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjdXN0b21fdmFsdWUifQ.Gn4_F3IujZkyYR3gygA0TZuVeprhDDiDCWE1LvvCKsY`
      }
    }).then(function (e) {// console.log("2nd ", e.view);
    });
    await self.$axios.$get("http://cdn.resultonlinebd.com" + `/q&a/api/v1/dtls/${self.$route.params.qadetail}`).then(function (posts) {
      self.data = posts;
    }).catch(function (e) {
      console.log(e);
    });
    await self.$axios.$get("http://cdn.resultonlinebd.com" + `/q&a/api/v1/q_related_data/${self.data.catagry.publisher}`).then(function (posts) {
      self.relatedData = posts.results;
    }).catch(function (e) {
      console.log(e);
    });
  },

  methods: {}
});
// CONCATENATED MODULE: ./pages/q/_qadetail.vue?vue&type=script&lang=js&
 /* harmony default export */ var q_qadetailvue_type_script_lang_js_ = (_qadetailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/q/_qadetail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(211)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  q_qadetailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "696c7142",
  "a365cbfe"
  
)

/* harmony default export */ var _qadetail = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_qadetail.js.map
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_pages_Products_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Products.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Products.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      data: {
        name: ""
      },
      addModal: false,
      editModal: false,
      isAdding: false,
      products: [],
      users: [],
      editData: {
        name: ""
      },
      index: -1,
      showDeleteModal: false,
      isDeleting: false,
      deleteItem: {},
      deletingIndex: -1
    };
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.callApi("get", "/app/get_users");

              case 2:
                res = _context.sent;

                if (res.status == 200) {
                  _this.users = res.data;
                } else {
                  _this.swr();
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getUserId: function getUserId(user_id) {
      var valObj = this.users.filter(function (elem) {
        if (elem.id == user_id) {
          return elem.name;
        }
      });

      if (valObj.length > 0) {
        return valObj[0].name;
      }
    },
    addProduct: function addProduct() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.data.name.trim() == "")) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", _this2.error("product name is required"));

              case 2:
                _context2.next = 4;
                return _this2.callApi("post", "app/create_product", _this2.data);

              case 4:
                res = _context2.sent;
                res.data.user = {
                  id: res.data.user_id,
                  name: _this2.getUserId(res.data.user_id)
                };

                if (res.status === 201) {
                  _this2.products.unshift(res.data); //añade los elementos pasados al inicio del array


                  _this2.success("Product has beeen added successfully");

                  _this2.addModal = false;
                  _this2.data.name = "";
                } else {
                  if (res.status == 422) {
                    if (res.data.errors.name) {
                      _this2.error(res.data.errors.name[0]);
                    }
                  } else {
                    _this2.swr();
                  }
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    editProduct: function editProduct() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.editData.name.trim() == "")) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", _this3.error("Product name is required"));

              case 2:
                console.log(_this3.editData);
                _context3.next = 5;
                return _this3.callApi("post", "app/edit_product", _this3.editData);

              case 5:
                res = _context3.sent;

                if (res.status === 200) {
                  _this3.products[_this3.index].name = _this3.editData.name;

                  _this3.success("Product has beeen edited successfully");

                  _this3.editModal = false;
                } else {
                  if (res.status == 422) {
                    if (res.data.errors.name) {
                      _this3.error(res.data.errors.name[0]);
                    }
                  } else {
                    _this3.swr();
                  }
                }

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    showEditModal: function showEditModal(product, index) {
      var obj = {
        id: product.id,
        name: product.name
      };
      this.editData = obj;
      this.editModal = true;
      this.index = index;
    },
    deleteProduct: function deleteProduct() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                /*  if (!confirm("Are you sure you want to delete this product ?")) {
                    return;
                }
                  // product.isDeleting =true
                this.$set(product, "isDeleting", true);
                 */
                _this4.isDeleting = true;
                _context4.next = 3;
                return _this4.callApi("post", "app/delete_product", _this4.deleteItem);

              case 3:
                res = _context4.sent;

                if (res.status === 200) {
                  _this4.products.splice(_this4.deletingIndex, 1);

                  _this4.success("Tag has been deleted successfully");
                } else {
                  _this4.swr();
                }

                _this4.isDeleting = false;
                _this4.showDeleteModal = false;

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    showDeletingModal: function showDeletingModal(product, i) {
      this.deleteItem = product;
      this.deletingIndex = i;
      this.showDeleteModal = true;
    }
  },
  created: function created() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5.callApi("get", "/app/get_products");

            case 2:
              res = _context5.sent;

              _this5.getUsers();

              localStorage.removeItem("products");

              if (res.status == 200) {
                _this5.products = res.data;
                localStorage.setItem("products", JSON.stringify(_this5.products));
              } else {
                _this5.swr();
              }

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/admin/pages/Products.vue":
/*!***********************************************!*\
  !*** ./resources/js/admin/pages/Products.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_vue_vue_type_template_id_04bc1c2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=04bc1c2d& */ "./resources/js/admin/pages/Products.vue?vue&type=template&id=04bc1c2d&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/Products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_04bc1c2d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Products_vue_vue_type_template_id_04bc1c2d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/Products.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/Products.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/admin/pages/Products.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Products.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/Products.vue?vue&type=template&id=04bc1c2d&":
/*!******************************************************************************!*\
  !*** ./resources/js/admin/pages/Products.vue?vue&type=template&id=04bc1c2d& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_04bc1c2d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_04bc1c2d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_04bc1c2d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=template&id=04bc1c2d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Products.vue?vue&type=template&id=04bc1c2d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Products.vue?vue&type=template&id=04bc1c2d&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/Products.vue?vue&type=template&id=04bc1c2d& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "content" }, [
      _c(
        "div",
        { staticClass: "container-fluid" },
        [
          _c(
            "div",
            {
              staticClass:
                "_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20",
            },
            [
              _c(
                "p",
                { staticClass: "_title0" },
                [
                  _vm._v(
                    "\n                    Products\n                    "
                  ),
                  _c(
                    "Button",
                    {
                      on: {
                        click: function ($event) {
                          _vm.addModal = true
                        },
                      },
                    },
                    [
                      _c("Icon", { attrs: { type: "md-add" } }),
                      _vm._v("Add Product"),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "_overflow _table_div" }, [
                _c(
                  "table",
                  { staticClass: "_table" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._l(_vm.products, function (product, i) {
                      return _vm.products.length
                        ? _c("tr", { key: i }, [
                            _c("td", [_vm._v(_vm._s(product.id))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "_table_name" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(product.name) +
                                  "\n                            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "_table_stock" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(product.stock) +
                                  "\n                            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(product.user.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(product.created_at))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "Button",
                                  {
                                    attrs: { type: "info", size: "small" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.showEditModal(product, i)
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Edit\n                                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "Button",
                                  {
                                    attrs: {
                                      type: "error",
                                      size: "small",
                                      loading: product.isDeleting,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.showDeletingModal(product, i)
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Delete\n                                "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ])
                        : _vm._e()
                    }),
                  ],
                  2
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "Modal",
            {
              attrs: {
                title: "Add Producto",
                "mask-closable": false,
                closable: false,
              },
              model: {
                value: _vm.addModal,
                callback: function ($$v) {
                  _vm.addModal = $$v
                },
                expression: "addModal",
              },
            },
            [
              _c("Input", {
                attrs: { placeholder: "Add produc name" },
                model: {
                  value: _vm.data.name,
                  callback: function ($$v) {
                    _vm.$set(_vm.data, "name", $$v)
                  },
                  expression: "data.name",
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "footer" }, slot: "footer" },
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "default" },
                      on: {
                        click: function ($event) {
                          _vm.addModal = false
                        },
                      },
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      attrs: {
                        type: "primary",
                        disabled: _vm.isAdding,
                        loading: _vm.isAdding,
                      },
                      on: { click: _vm.addProduct },
                    },
                    [_vm._v(_vm._s(_vm.isAdding ? "Adding.." : "Add Product"))]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Modal",
            {
              attrs: {
                title: "Edit Product",
                "mask-closable": false,
                closable: false,
              },
              model: {
                value: _vm.editModal,
                callback: function ($$v) {
                  _vm.editModal = $$v
                },
                expression: "editModal",
              },
            },
            [
              _c("Input", {
                attrs: { placeholder: "Edit produc name" },
                model: {
                  value: _vm.editData.name,
                  callback: function ($$v) {
                    _vm.$set(_vm.editData, "name", $$v)
                  },
                  expression: "editData.name",
                },
              }),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "footer" }, slot: "footer" },
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "default" },
                      on: {
                        click: function ($event) {
                          _vm.editModal = false
                        },
                      },
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      attrs: {
                        type: "primary",
                        disabled: _vm.isAdding,
                        loading: _vm.isAdding,
                      },
                      on: { click: _vm.editProduct },
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.isAdding ? "Editing.." : "Edit Product")
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Modal",
            {
              attrs: { width: "360" },
              model: {
                value: _vm.showDeleteModal,
                callback: function ($$v) {
                  _vm.showDeleteModal = $$v
                },
                expression: "showDeleteModal",
              },
            },
            [
              _c(
                "p",
                {
                  staticStyle: { color: "#f60", "text-align": "center" },
                  attrs: { slot: "header" },
                  slot: "header",
                },
                [
                  _c("Icon", { attrs: { type: "ios-information-circle" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("Delete confirmation")]),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticStyle: { "text-align": "center" } }, [
                _c("p", [_vm._v("Are you sure you want to delete product?")]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { slot: "footer" }, slot: "footer" },
                [
                  _c(
                    "Button",
                    {
                      attrs: {
                        type: "error",
                        size: "large",
                        long: "",
                        loading: _vm.isDeleting,
                        disabled: _vm.isDeleting,
                      },
                      on: { click: _vm.deleteProduct },
                    },
                    [_vm._v("Delete")]
                  ),
                ],
                1
              ),
            ]
          ),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Stock")]),
      _vm._v(" "),
      _c("th", [_vm._v("User_id")]),
      _vm._v(" "),
      _c("th", [_vm._v("Create at")]),
      _vm._v(" "),
      _c("th", [_vm._v("Action")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
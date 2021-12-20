"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_pages_stock_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/stock.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/stock.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      editModal: false,
      isAdding: false,
      products: [],
      editData: {},
      index: -1,
      deletingIndex: -1,
      amount: 0,
      EntranceType: "In",
      temp: 0,
      OriginalStock: 0
    };
  },
  methods: {
    getUserId: function getUserId(user_id) {
      //
      var valObj = this.products.filter(function (elem) {
        if (elem.id == user_id) return elem.name;
      });

      if (valObj.length > 0) {
        return valObj[0].name;
      }
    },
    editStock: function editStock() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.editData.name.trim() == "")) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", _this.error("Product name is required"));

              case 2:
                _context.next = 4;
                return _this.callApi("post", "app/edit_product_stock", _this.editData);

              case 4:
                res = _context.sent;

                if (res.status === 200) {
                  _this.products[_this.index].name = _this.editData.name;

                  _this.success("Product has beeen edited successfully");

                  _this.editProductStockItem(_this.editData);

                  _this.editModal = false;
                } else {
                  if (res.status == 422) {
                    if (res.data.errors.name) {
                      _this.error(res.data.errors.name[0]);
                    }
                  } else {
                    _this.swr();
                  }
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    showEditModal: function showEditModal(product, index) {
      var obj = {
        id: product.id,
        name: product.name,
        stock: product.stock
      };
      this.OriginalStock = product.stock;
      this.editData = obj;
      this.editModal = true;
      this.index = index;
      this.amount = 0;
    },
    recalculateStock: function recalculateStock(event) {
      var newStock = 0;

      if (event != null) {
        newStock = event;
      }

      if (this.EntranceType.trim() == "Out") {
        newStock = parseFloat(newStock) * -1;
      }

      if (parseFloat(this.OriginalStock) + parseFloat(newStock) < 0) {
        this.error("maximum stock to retire " + this.OriginalStock);
        this.editData.stock = this.OriginalStock;
        return;
      }

      this.editData.stock = parseFloat(this.OriginalStock) + parseFloat(newStock);
    },
    LimpiarAmount: function LimpiarAmount() {
      this.amount = 0;
      this.editData.stock = this.OriginalStock;
    },
    editProductStockItem: function editProductStockItem(producItem) {
      //find the index of this id's object from local storage
      var objIndex = this.products.findIndex(function (obj) {
        return obj.id === producItem.id;
      });
      this.products[objIndex].stock = producItem.stock;
      localStorage.setItem("products", JSON.stringify(this.products));
      this.products = JSON.parse(localStorage.getItem("products"));
    }
  },
  created: function created() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (localStorage.getItem("products")) {
                try {
                  _this2.products = JSON.parse(localStorage.getItem("products"));
                } catch (e) {
                  localStorage.removeItem("products");
                }
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/admin/pages/stock.vue":
/*!********************************************!*\
  !*** ./resources/js/admin/pages/stock.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stock_vue_vue_type_template_id_5097ba3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock.vue?vue&type=template&id=5097ba3d& */ "./resources/js/admin/pages/stock.vue?vue&type=template&id=5097ba3d&");
/* harmony import */ var _stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/stock.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stock_vue_vue_type_template_id_5097ba3d___WEBPACK_IMPORTED_MODULE_0__.render,
  _stock_vue_vue_type_template_id_5097ba3d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/stock.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/stock.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/admin/pages/stock.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./stock.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/stock.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/stock.vue?vue&type=template&id=5097ba3d&":
/*!***************************************************************************!*\
  !*** ./resources/js/admin/pages/stock.vue?vue&type=template&id=5097ba3d& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_vue_vue_type_template_id_5097ba3d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_vue_vue_type_template_id_5097ba3d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stock_vue_vue_type_template_id_5097ba3d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./stock.vue?vue&type=template&id=5097ba3d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/stock.vue?vue&type=template&id=5097ba3d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/stock.vue?vue&type=template&id=5097ba3d&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/stock.vue?vue&type=template&id=5097ba3d& ***!
  \******************************************************************************************************************************************************************************************************************/
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
              _c("p", { staticClass: "_title0" }, [
                _vm._v("List stock products"),
              ]),
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
                                      "\n                                    Edit Stock\n                                "
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
                title: "Edit Stock",
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
              _c(
                "div",
                { staticClass: "space" },
                [
                  _c("Input", {
                    attrs: { placeholder: "Edit produc name", disabled: "" },
                    model: {
                      value: _vm.editData.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.editData, "name", $$v)
                      },
                      expression: "editData.name",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "space" },
                [
                  _c("InputNumber", {
                    attrs: { placeholder: "Edit product stock", disabled: "" },
                    model: {
                      value: _vm.editData.stock,
                      callback: function ($$v) {
                        _vm.$set(_vm.editData, "stock", $$v)
                      },
                      expression: "editData.stock",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "space" },
                [
                  _c(
                    "RadioGroup",
                    {
                      on: { "on-change": _vm.LimpiarAmount },
                      model: {
                        value: _vm.EntranceType,
                        callback: function ($$v) {
                          _vm.EntranceType = $$v
                        },
                        expression: "EntranceType",
                      },
                    },
                    [
                      _c("Radio", { attrs: { label: "In" } }),
                      _vm._v(" "),
                      _c("Radio", { attrs: { label: "Out" } }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "space" },
                [
                  _c("InputNumber", {
                    on: {
                      "on-change": function ($event) {
                        return _vm.recalculateStock($event)
                      },
                    },
                    model: {
                      value: _vm.amount,
                      callback: function ($$v) {
                        _vm.amount = $$v
                      },
                      expression: "amount",
                    },
                  }),
                ],
                1
              ),
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
                      on: { click: _vm.editStock },
                    },
                    [_vm._v(_vm._s(_vm.isAdding ? "Editing.." : "Edit Stock"))]
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
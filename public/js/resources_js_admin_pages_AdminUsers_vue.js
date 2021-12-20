"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_admin_pages_AdminUsers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/AdminUsers.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/AdminUsers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        name: "",
        email: "",
        password: "",
        role_id: -1
      },
      addModal: false,
      editModal: false,
      isAdding: false,
      users: [],
      editData: {
        name: ""
      },
      index: -1,
      showDeleteModal: false,
      isDeleting: false,
      deleteItem: {},
      deletingIndex: -1,
      roles: []
    };
  },
  methods: {
    getRoles: function getRoles() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.callApi("get", "/app/get_roles");

              case 2:
                res = _context.sent;

                if (res.status == 200) {
                  _this.roles = res.data;
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
    getRoleId: function getRoleId(role_id) {
      //
      var valObj = this.roles.filter(function (elem) {
        if (elem.id == role_id) return elem.name;
      });

      if (valObj.length > 0) {
        return valObj[0].name;
      }
    },
    adduser: function adduser() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this2.data.name.trim() == "")) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", _this2.error("user name is required"));

              case 2:
                if (!(_this2.data.email.trim() == "")) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", _this2.error("email name is required"));

              case 4:
                if (!(_this2.data.password.trim() == "")) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", _this2.error("password name is required"));

              case 6:
                if (!(_this2.data.role_id < 0)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", _this2.error("role name is required"));

              case 8:
                _context2.next = 10;
                return _this2.callApi("post", "app/create_user", _this2.data);

              case 10:
                res = _context2.sent;
                res.data.role = {
                  id: res.data.role_id,
                  name: _this2.getRoleId(res.data.role_id)
                };

                if (res.status === 201) {
                  _this2.users.unshift(res.data); //añade los elementos pasados al inicio del array


                  _this2.success("user has beeen added successfully");

                  _this2.addModal = false;
                  _this2.data.name = "";
                  _this2.data.email = "";
                  _this2.data.password = "";
                  _this2.data.role_id = "";
                } else {
                  if (res.status == 422) {
                    for (i in res.data.errors) {
                      _this2.error(res.data.errors[i][0]);
                    }
                  } else {
                    _this2.swr();
                  }
                }

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    edituser: function edituser() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.editData.name.trim() == "")) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", _this3.error("user name is required"));

              case 2:
                if (!(_this3.editData.email.trim() == "")) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", _this3.error("email name is required"));

              case 4:
                if (!(_this3.editData.password == undefined || _this3.editData.password == "")) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", _this3.error("password name is required"));

              case 6:
                if (!(_this3.editData.role_id < 0)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", _this3.error("role name is required"));

              case 8:
                _context3.next = 10;
                return _this3.callApi("post", "app/edit_user", _this3.editData);

              case 10:
                res = _context3.sent;
                _this3.editData.role = {
                  id: _this3.editData.role_id,
                  name: _this3.getRoleId(_this3.editData.role_id)
                };

                if (res.status === 200) {
                  _this3.users[_this3.index] = _this3.editData;

                  _this3.success("user has beeen edited successfully");

                  _this3.editModal = false;
                } else {
                  if (res.status == 422) {
                    for (i in res.data.errors) {
                      _this3.error(res.data.errors[i][0]);
                    }
                  } else {
                    _this3.swr();
                  }
                }

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    showEditModal: function showEditModal(user, index) {
      var obj = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role_id: user.role_id,
        created_at: user.created_at
      };
      this.editData = obj;
      this.editModal = true;
      this.index = index;
    },
    showAddModal: function showAddModal() {
      this.addModal = true;
    },
    deleteuser: function deleteuser() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                /*  if (!confirm("Are you sure you want to delete this user ?")) {
                    return;
                }
                  // user.isDeleting =true
                this.$set(user, "isDeleting", true);
                 */
                _this4.isDeleting = true;
                _context4.next = 3;
                return _this4.callApi("post", "app/delete_user", _this4.deleteItem);

              case 3:
                res = _context4.sent;

                if (res.status === 200) {
                  _this4.users.splice(_this4.deletingIndex, 1);

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
    showDeletingModal: function showDeletingModal(user, i) {
      this.deleteItem = user;
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
              return _this5.callApi("get", "/app/get_users");

            case 2:
              res = _context5.sent;

              _this5.getRoles();

              if (res.status == 200) {
                _this5.users = res.data;
              } else {
                _this5.swr();
              }

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/admin/pages/AdminUsers.vue":
/*!*************************************************!*\
  !*** ./resources/js/admin/pages/AdminUsers.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminUsers_vue_vue_type_template_id_94d0f7fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminUsers.vue?vue&type=template&id=94d0f7fc& */ "./resources/js/admin/pages/AdminUsers.vue?vue&type=template&id=94d0f7fc&");
/* harmony import */ var _AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminUsers.vue?vue&type=script&lang=js& */ "./resources/js/admin/pages/AdminUsers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminUsers_vue_vue_type_template_id_94d0f7fc___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminUsers_vue_vue_type_template_id_94d0f7fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/pages/AdminUsers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/admin/pages/AdminUsers.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/admin/pages/AdminUsers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/AdminUsers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/pages/AdminUsers.vue?vue&type=template&id=94d0f7fc&":
/*!********************************************************************************!*\
  !*** ./resources/js/admin/pages/AdminUsers.vue?vue&type=template&id=94d0f7fc& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_94d0f7fc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_94d0f7fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_94d0f7fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminUsers.vue?vue&type=template&id=94d0f7fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/AdminUsers.vue?vue&type=template&id=94d0f7fc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/AdminUsers.vue?vue&type=template&id=94d0f7fc&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/admin/pages/AdminUsers.vue?vue&type=template&id=94d0f7fc& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                  _vm._v("\n                    users\n                    "),
                  _c(
                    "Button",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.showAddModal()
                        },
                      },
                    },
                    [
                      _c("Icon", { attrs: { type: "md-add" } }),
                      _vm._v("Add Admin"),
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
                    _vm._l(_vm.users, function (user, i) {
                      return _vm.users.length
                        ? _c("tr", { key: i }, [
                            _c("td", [_vm._v(_vm._s(user.id))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "_table_name" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(user.name) +
                                  "\n                            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "_table_email" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(user.email) +
                                  "\n                            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.role.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.created_at))]),
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
                                        return _vm.showEditModal(user, i)
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
                                      loading: user.isDeleting,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.showDeletingModal(user, i)
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
                title: "Add Admin",
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
              _c(
                "div",
                { staticClass: "space" },
                [
                  _c("Input", {
                    attrs: { type: "text", placeholder: "name" },
                    model: {
                      value: _vm.data.name,
                      callback: function ($$v) {
                        _vm.$set(_vm.data, "name", $$v)
                      },
                      expression: "data.name",
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
                  _c("Input", {
                    attrs: { type: "email", placeholder: "email" },
                    model: {
                      value: _vm.data.email,
                      callback: function ($$v) {
                        _vm.$set(_vm.data, "email", $$v)
                      },
                      expression: "data.email",
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
                  _c("Input", {
                    attrs: { type: "password", placeholder: "password" },
                    model: {
                      value: _vm.data.password,
                      callback: function ($$v) {
                        _vm.$set(_vm.data, "password", $$v)
                      },
                      expression: "data.password",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "space" }, [
                _c(
                  "div",
                  { staticClass: "_input_field" },
                  [
                    _c(
                      "Select",
                      {
                        attrs: { placeholder: "Select role" },
                        model: {
                          value: _vm.data.role_id,
                          callback: function ($$v) {
                            _vm.$set(_vm.data, "role_id", $$v)
                          },
                          expression: "data.role_id",
                        },
                      },
                      _vm._l(_vm.roles, function (r, i) {
                        return _c(
                          "Option",
                          { key: i, attrs: { value: r.id } },
                          [_vm._v(_vm._s(r.name))]
                        )
                      }),
                      1
                    ),
                  ],
                  1
                ),
              ]),
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
                      on: { click: _vm.adduser },
                    },
                    [_vm._v(_vm._s(_vm.isAdding ? "Adding.." : "Add user"))]
                  ),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "Modal",
            {
              attrs: {
                title: "Edit User",
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
                    attrs: { type: "text", placeholder: "name" },
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
                  _c("Input", {
                    attrs: { type: "email", placeholder: "email" },
                    model: {
                      value: _vm.editData.email,
                      callback: function ($$v) {
                        _vm.$set(_vm.editData, "email", $$v)
                      },
                      expression: "editData.email",
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
                  _c("Input", {
                    attrs: { type: "password", placeholder: "password" },
                    model: {
                      value: _vm.editData.password,
                      callback: function ($$v) {
                        _vm.$set(_vm.editData, "password", $$v)
                      },
                      expression: "editData.password",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "space" }, [
                _c(
                  "div",
                  { staticClass: "_input_field" },
                  [
                    _c(
                      "Select",
                      {
                        attrs: { placeholder: "Select role" },
                        model: {
                          value: _vm.editData.role_id,
                          callback: function ($$v) {
                            _vm.$set(_vm.editData, "role_id", $$v)
                          },
                          expression: "editData.role_id",
                        },
                      },
                      _vm._l(_vm.roles, function (r, i) {
                        return _c(
                          "Option",
                          { key: i, attrs: { value: r.id } },
                          [_vm._v(_vm._s(r.name))]
                        )
                      }),
                      1
                    ),
                  ],
                  1
                ),
              ]),
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
                      on: { click: _vm.edituser },
                    },
                    [_vm._v(_vm._s(_vm.isAdding ? "Editing.." : "Edit user"))]
                  ),
                ],
                1
              ),
            ]
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
                _c("p", [_vm._v("Are you sure you want to delete tag?")]),
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
                      on: { click: _vm.deleteuser },
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
      _c("th", [_vm._v("Email")]),
      _vm._v(" "),
      _c("th", [_vm._v("Role")]),
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
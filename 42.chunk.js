(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([[42],{

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_TodoList)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(703);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(682);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/ListGroup.js + 13 modules
var ListGroup = __webpack_require__(396);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js + 2 modules
var Button = __webpack_require__(754);
// EXTERNAL MODULE: ./src/state/todos/types.js
var types = __webpack_require__(702);
;// CONCATENATED MODULE: ./src/state/todos/actions.js

function addTodo(title, parentUid) {
  return {
    type: types/* ADD_TODO */.Tl,
    payload: {
      title: title,
      parentUid: parentUid
    }
  };
}
function removeTodo(uid) {
  return {
    type: types/* REMOVE_TODO */.uz,
    payload: uid
  };
}
function actions_markTodo(uid, isDone) {
  return {
    type: types/* MARK_TODO */.zi,
    payload: {
      uid: uid,
      isDone: isDone
    }
  };
}
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 13 modules
var Form = __webpack_require__(151);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Modal.js + 47 modules
var Modal = __webpack_require__(971);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Row.js
var Row = __webpack_require__(51);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Col.js
var Col = __webpack_require__(555);
;// CONCATENATED MODULE: ./src/components/DeleteItemModal.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var DeleteItemModal = function DeleteItemModal(_ref) {
  var todo = _ref.todo,
      onDelete = _ref.onDelete,
      onHide = _ref.onHide,
      rest = _objectWithoutProperties(_ref, ["todo", "onDelete", "onHide"]);

  return /*#__PURE__*/react.createElement(Modal/* default */.Z, _extends({}, rest, {
    animation: false,
    onHide: onHide,
    centered: true
  }), /*#__PURE__*/react.createElement(Modal/* default.Header */.Z.Header, null, /*#__PURE__*/react.createElement(Modal/* default.Title */.Z.Title, null, "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442?")), /*#__PURE__*/react.createElement(Modal/* default.Footer */.Z.Footer, null, /*#__PURE__*/react.createElement(Container.default, null, /*#__PURE__*/react.createElement(Row/* default */.Z, null, /*#__PURE__*/react.createElement(Col/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    className: "w-100",
    variant: "primary",
    onClick: function onClick() {
      onHide === null || onHide === void 0 ? void 0 : onHide.call(undefined);
      onDelete === null || onDelete === void 0 ? void 0 : onDelete.call(undefined, todo.uid);
    },
    "data-testid": "delete-todo"
  }, "\u0414\u0430")), /*#__PURE__*/react.createElement(Col/* default */.Z, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    className: "w-100",
    variant: "secondary",
    onClick: function onClick() {
      return onHide === null || onHide === void 0 ? void 0 : onHide.call(undefined);
    },
    "data-testid": "not-delete-todo"
  }, "\u041D\u0435\u0442"))))));
};

_c = DeleteItemModal;
DeleteItemModal.propTypes = {
  todo: (prop_types_default()).object,
  onDelete: (prop_types_default()).func,
  onHide: (prop_types_default()).func
};
DeleteItemModal.defaultProps = {
  todo: {},
  onDelete: function onDelete() {},
  onHide: function onHide() {}
};
/* harmony default export */ const components_DeleteItemModal = (DeleteItemModal);

var _c;

$RefreshReg$(_c, "DeleteItemModal");
;// CONCATENATED MODULE: ./src/containers/DeleteItemModal.js



var mapDispatchToProps = {
  onDelete: function onDelete(uid) {
    return removeTodo(uid);
  }
};
/* harmony default export */ const containers_DeleteItemModal = ((0,es/* connect */.$j)(null, mapDispatchToProps)(components_DeleteItemModal));
;// CONCATENATED MODULE: ./src/components/TodoItem.js
var _s2 = $RefreshSig$();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var TodoItem = function TodoItem(_ref) {
  _s2();

  var todo = _ref.todo,
      markTodo = _ref.markTodo;

  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Container.default, {
    className: "d-flex justify-content-start"
  }, /*#__PURE__*/react.createElement(Form/* default.Check */.Z.Check, {
    "data-testid": "item",
    type: "checkbox",
    id: todo.uid,
    label: todo.title,
    value: todo.isDone || false,
    className: todo.isDone ? 'marked' : '',
    onClick: function onClick() {
      markTodo === null || markTodo === void 0 ? void 0 : markTodo.call(undefined, todo.uid, !todo.isDone);
    }
  }), todo.isDone && /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "pl-2 link-primary",
    "data-testid": "delete-link",
    onClick: function onClick(e) {
      e.preventDefault();
      setShow(true);
    }
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")), /*#__PURE__*/react.createElement(containers_DeleteItemModal, {
    todo: todo,
    show: show,
    onHide: function onHide() {
      return setShow(false);
    }
  }));
};

_s2(TodoItem, "NKb1ZOdhT+qUsWLXSgjSS2bk2C4=");

TodoItem_c = TodoItem;
TodoItem.propTypes = {
  todo: (prop_types_default()).object,
  markTodo: (prop_types_default()).func
};
TodoItem.defaultProps = {
  todo: {},
  markTodo: function markTodo() {}
};
/* harmony default export */ const components_TodoItem = (TodoItem);

var TodoItem_c;

$RefreshReg$(TodoItem_c, "TodoItem");
;// CONCATENATED MODULE: ./src/containers/TodoItem.js



var TodoItem_mapDispatchToProps = {
  markTodo: function markTodo(uid, isDone) {
    return actions_markTodo(uid, isDone);
  }
};
/* harmony default export */ const containers_TodoItem = ((0,es/* connect */.$j)(null, TodoItem_mapDispatchToProps)(components_TodoItem));
;// CONCATENATED MODULE: ./src/components/AddItemModal.js
var AddItemModal_s2 = $RefreshSig$();

function AddItemModal_extends() { AddItemModal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AddItemModal_extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || AddItemModal_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return AddItemModal_arrayLikeToArray(arr); }

function AddItemModal_slicedToArray(arr, i) { return AddItemModal_arrayWithHoles(arr) || AddItemModal_iterableToArrayLimit(arr, i) || AddItemModal_unsupportedIterableToArray(arr, i) || AddItemModal_nonIterableRest(); }

function AddItemModal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function AddItemModal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AddItemModal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AddItemModal_arrayLikeToArray(o, minLen); }

function AddItemModal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function AddItemModal_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function AddItemModal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AddItemModal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = AddItemModal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function AddItemModal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var AddItemModal = function AddItemModal(_ref) {
  AddItemModal_s2();

  var todos = _ref.todos,
      onCreate = _ref.onCreate,
      rest = AddItemModal_objectWithoutProperties(_ref, ["todos", "onCreate"]);

  var _useState = (0,react.useState)([]),
      _useState2 = AddItemModal_slicedToArray(_useState, 2),
      parents = _useState2[0],
      setParents = _useState2[1];

  var _useState3 = (0,react.useState)(),
      _useState4 = AddItemModal_slicedToArray(_useState3, 2),
      parent = _useState4[0],
      setParent = _useState4[1];

  var _useState5 = (0,react.useState)(''),
      _useState6 = AddItemModal_slicedToArray(_useState5, 2),
      title = _useState6[0],
      setTitle = _useState6[1];

  (0,react.useEffect)(function () {
    setParents([{
      title: 'Не выбрано'
    }].concat(_toConsumableArray(todos.filter(function (todo) {
      return getParentCount(todos, todo.uid) < 2;
    }))));
  }, [todos]);
  return /*#__PURE__*/react.createElement(Modal/* default */.Z, AddItemModal_extends({}, rest, {
    animation: false,
    centered: true
  }), /*#__PURE__*/react.createElement(Modal/* default.Header */.Z.Header, null, /*#__PURE__*/react.createElement(Modal/* default.Title */.Z.Title, null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442")), /*#__PURE__*/react.createElement(Modal/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement(Form/* default */.Z, {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {
    controlId: "parent-todo",
    "data-testid": "select-parent"
  }, /*#__PURE__*/react.createElement(Form/* default.Row */.Z.Row, null, /*#__PURE__*/react.createElement(Col/* default */.Z, null, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "\u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442")), /*#__PURE__*/react.createElement(Col/* default */.Z, null, /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {
    as: "select",
    value: parent,
    onChange: function onChange(e) {
      setParent(e.target.value);
    }
  }, parents.map(function (todo, i) {
    var _todo$uid;

    return /*#__PURE__*/react.createElement("option", {
      value: todo.uid,
      key: (_todo$uid = todo.uid) !== null && _todo$uid !== void 0 ? _todo$uid : i
    }, todo.title);
  }))))), /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {
    controlId: "title"
  }, /*#__PURE__*/react.createElement(Form/* default.Row */.Z.Row, null, /*#__PURE__*/react.createElement(Col/* default */.Z, null, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A")), /*#__PURE__*/react.createElement(Col/* default */.Z, null, /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {
    type: "input'",
    defaultValue: "",
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    }
  })))))), /*#__PURE__*/react.createElement(Modal/* default.Footer */.Z.Footer, null, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "primary",
    className: "w-100",
    onClick: function onClick() {
      var _rest$onHide;

      (_rest$onHide = rest.onHide) === null || _rest$onHide === void 0 ? void 0 : _rest$onHide.call();
      onCreate === null || onCreate === void 0 ? void 0 : onCreate.call(undefined, title, parent);
      setParent(undefined);
    },
    "data-testid": "add-todo"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")));
};

AddItemModal_s2(AddItemModal, "X4Z2UVnKNJnwvmaSNbnVcq9zBi4=");

AddItemModal_c = AddItemModal;

function getParentCount(todos, uid) {
  var _todos$find;

  var parentUid = (_todos$find = todos.find(function (todo) {
    return todo.uid === uid;
  })) === null || _todos$find === void 0 ? void 0 : _todos$find.parentUid;

  if (parentUid) {
    return 1 + getParentCount(todos, parentUid);
  } else {
    return 0;
  }
}

AddItemModal.propTypes = {
  todos: (prop_types_default()).array,
  onCreate: (prop_types_default()).func
};
AddItemModal.defaultProps = {
  todos: [],
  onCreate: function onCreate() {}
};
/* harmony default export */ const components_AddItemModal = (AddItemModal);

var AddItemModal_c;

$RefreshReg$(AddItemModal_c, "AddItemModal");
;// CONCATENATED MODULE: ./src/containers/AddItemModal.js




var mapStateToProps = function mapStateToProps(state) {
  return {
    todos: state.todos
  };
};

var AddItemModal_mapDispatchToProps = {
  onCreate: function onCreate(title, parentUid) {
    return addTodo(title, parentUid);
  }
};
/* harmony default export */ const containers_AddItemModal = ((0,es/* connect */.$j)(mapStateToProps, AddItemModal_mapDispatchToProps)(components_AddItemModal));
;// CONCATENATED MODULE: ./src/components/TodoList.js
var TodoList_s2 = $RefreshSig$();

function TodoList_slicedToArray(arr, i) { return TodoList_arrayWithHoles(arr) || TodoList_iterableToArrayLimit(arr, i) || TodoList_unsupportedIterableToArray(arr, i) || TodoList_nonIterableRest(); }

function TodoList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TodoList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TodoList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TodoList_arrayLikeToArray(o, minLen); }

function TodoList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function TodoList_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function TodoList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var TodoList = function TodoList(_ref) {
  TodoList_s2();

  var todos = _ref.todos;

  var _useState = (0,react.useState)(false),
      _useState2 = TodoList_slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  return /*#__PURE__*/react.createElement(Container.default, {
    className: "d-flex flex-column justify-content-between h-100"
  }, /*#__PURE__*/react.createElement(ListGroup/* default */.Z, {
    "data-testid": "todo-list",
    as: "ul"
  }, getTodoList(todos, getTodoChildren(todos, undefined))), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    "data-testid": "add-item",
    variant: "primary",
    className: "mt-3",
    onClick: function onClick() {
      return setShow(true);
    }
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442"), /*#__PURE__*/react.createElement(containers_AddItemModal, {
    show: show,
    onHide: function onHide() {
      return setShow(false);
    },
    "data-testid": "modal"
  }));
};

TodoList_s2(TodoList, "NKb1ZOdhT+qUsWLXSgjSS2bk2C4=");

TodoList_c = TodoList;

function getTodoList(todos, children) {
  return sortTodos(children).map(function (todo, i) {
    var _todo$uid, _todo$uid2, _todo$uid3;

    var childs = todo.uid && getTodoChildren(todos, todo.uid);
    return /*#__PURE__*/react.createElement("div", {
      key: (_todo$uid = todo.uid) !== null && _todo$uid !== void 0 ? _todo$uid : i,
      "data-testid": (_todo$uid2 = todo.uid) !== null && _todo$uid2 !== void 0 ? _todo$uid2 : i
    }, /*#__PURE__*/react.createElement(ListGroup/* default.Item */.Z.Item, {
      as: "li",
      key: (_todo$uid3 = todo.uid) !== null && _todo$uid3 !== void 0 ? _todo$uid3 : i
    }, /*#__PURE__*/react.createElement(containers_TodoItem, {
      isDone: todo.isDone,
      todo: todo
    })), childs && /*#__PURE__*/react.createElement("div", {
      className: "ml-3"
    }, getTodoList(todos, childs)));
  });
}

function sortTodos(todos) {
  return todos.sort(function (a, b) {
    return a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1;
  });
}

function getTodoChildren(todos, uid) {
  return todos.filter(function (todo) {
    return todo.parentUid === uid;
  });
}

TodoList.propTypes = {
  todos: (prop_types_default()).array
};
TodoList.defaultProps = {
  todos: []
};
/* harmony default export */ const components_TodoList = (TodoList);

var TodoList_c;

$RefreshReg$(TodoList_c, "TodoList");
;// CONCATENATED MODULE: ./src/containers/TodoList.js



var TodoList_mapStateToProps = function mapStateToProps(state) {
  return {
    todos: state.todos
  };
};

/* harmony default export */ const containers_TodoList = ((0,es/* connect */.$j)(TodoList_mapStateToProps, null)(components_TodoList));

/***/ })

}]);
//# sourceMappingURL=42.chunk.js.map
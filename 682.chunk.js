(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([[682],{

/***/ 184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(122);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(756);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(294);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(792);





var defaultProps = {
  fluid: false
};
var Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(_ref, ["bsPrefix", "fluid", "as", "className"]);

  var prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useBootstrapPrefix */ .vE)(bsPrefix, 'container');
  var suffix = typeof fluid === 'string' ? "-" + fluid : '-fluid';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, fluid ? "" + prefix + suffix : prefix)
  }));
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ 792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vE": () => (/* binding */ useBootstrapPrefix)
/* harmony export */ });
/* unused harmony exports createBootstrapComponent, ThemeConsumer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(294);


var ThemeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;

function ThemeProvider(_ref) {
  var prefixes = _ref.prefixes,
      children = _ref.children;
  var copiedPrefixes = useMemo(function () {
    return _extends({}, prefixes);
  }, [prefixes]);
  return /*#__PURE__*/React.createElement(Provider, {
    value: copiedPrefixes
  }, children);
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  var Wrapped = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
    var props = _extends({}, _ref2);

    props[forwardRefAs] = ref;
    var bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      bsPrefix: bsPrefix
    }));
  });
  Wrapped.displayName = "Bootstrap(" + (Component.displayName || Component.name) + ")";
  return Wrapped;
}


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ThemeProvider)));

/***/ })

}]);
//# sourceMappingURL=682.chunk.js.map
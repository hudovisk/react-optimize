(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-optimize", ["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["react-optimize"] = factory(require("prop-types"), require("react"));
	else
		root["react-optimize"] = factory(root["prop-types"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Experiment.js":
/*!***************************!*\
  !*** ./src/Experiment.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _OptimizeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptimizeContext */ \"./src/OptimizeContext.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Experiment = /*#__PURE__*/function (_React$Component) {\n  _inherits(Experiment, _React$Component);\n\n  var _super = _createSuper(Experiment);\n\n  function Experiment() {\n    var _this;\n\n    _classCallCheck(this, Experiment);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      variant: null\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"updateVariantTimeout\", null);\n\n    _defineProperty(_assertThisInitialized(_this), \"updateVariant\", function (value) {\n      clearTimeout(_this.updateVariantTimeout); // if experiment not active, render original\n\n      var newVariant = value === undefined || value === null ? \"0\" : value;\n\n      if (newVariant !== _this.state.variant) {\n        _this.setState({\n          variant: newVariant\n        });\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"implementExperiment\", function (value) {\n      var sections = value.split(\"-\");\n      var variant = sections[_this.props.indexSectionPosition];\n\n      _this.updateVariant(variant);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"updateVariantFromGlobalState\", function () {\n      var value = typeof window !== \"undefined\" && window.google_optimize ? window.google_optimize.get(_this.props.id) : null;\n\n      if (_this.props.asMtvExperiment && value.length > 1) {\n        _this.implementExperiment(value);\n      } else {\n        _this.updateVariant(value);\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"setupOptimizeCallback\", function () {\n      _this.updateVariantTimeout = setTimeout(_this.updateVariantFromGlobalState, _this.props.timeout);\n      var oldHideEnd = window.dataLayer.hide.end;\n\n      window.dataLayer.hide.end = function () {\n        _this.updateVariantFromGlobalState();\n\n        oldHideEnd && oldHideEnd();\n      };\n\n      window.gtag && window.gtag(\"event\", \"optimize.callback\", {\n        name: _this.props.id,\n        callback: _this.updateVariant\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Experiment, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (!this.props.id) {\n        throw new Error(\"Please specify the experiment id\");\n      } // Delayed init\n\n\n      if (typeof window !== \"undefined\" && !window.google_optimize) {\n        if (!window.dataLayer) {\n          window.dataLayer = [];\n        }\n\n        if (!window.dataLayer.hide) {\n          window.dataLayer.hide = {\n            start: Date.now()\n          };\n        }\n\n        this.setupOptimizeCallback();\n      } else {\n        // Google Optimize already loaded, or we're doing server-side rendering\n        this.updateVariantFromGlobalState();\n      }\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      clearTimeout(this.updateVariantTimeout);\n      typeof window !== \"undefined\" && window.gtag && window.gtag(\"event\", \"optimize.callback\", {\n        name: this.props.id,\n        callback: this.updateVariant,\n        remove: true\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptimizeContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: this.state.variant\n      }, this.state.variant === null ? this.props.loader : this.props.children);\n    }\n  }]);\n\n  return Experiment;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n_defineProperty(Experiment, \"defaultProps\", {\n  loader: null,\n  timeout: 3000,\n  asMtvExperiment: false\n});\n\n_defineProperty(Experiment, \"propTypes\", {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  loader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,\n  timeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,\n  asMtvExperiment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  indexSectionPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Experiment);\n\n//# sourceURL=webpack://react-optimize/./src/Experiment.js?");

/***/ }),

/***/ "./src/OptimizeContext.js":
/*!********************************!*\
  !*** ./src/OptimizeContext.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar OptimizeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\n/* harmony default export */ __webpack_exports__[\"default\"] = (OptimizeContext);\n\n//# sourceURL=webpack://react-optimize/./src/OptimizeContext.js?");

/***/ }),

/***/ "./src/Variant.js":
/*!************************!*\
  !*** ./src/Variant.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _OptimizeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptimizeContext */ \"./src/OptimizeContext.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Variant = /*#__PURE__*/function (_React$Component) {\n  _inherits(Variant, _React$Component);\n\n  var _super = _createSuper(Variant);\n\n  function Variant() {\n    _classCallCheck(this, Variant);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Variant, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OptimizeContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Consumer, null, function (value) {\n        return value === _this.props.id ? _this.props.children : null;\n      });\n    }\n  }]);\n\n  return Variant;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n_defineProperty(Variant, \"propTypes\", {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Variant);\n\n//# sourceURL=webpack://react-optimize/./src/Variant.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Experiment, Variant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Experiment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Experiment */ \"./src/Experiment.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Experiment\", function() { return _Experiment__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Variant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Variant */ \"./src/Variant.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Variant\", function() { return _Variant__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack://react-optimize/./src/index.js?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://react-optimize/external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://react-optimize/external_%22react%22?");

/***/ })

/******/ });
});
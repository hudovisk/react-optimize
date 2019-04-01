(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("react-optimize", [], factory);
	else if(typeof exports === 'object')
		exports["react-optimize"] = factory();
	else
		root["react-optimize"] = factory();
})(window, function() {
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Experiment, Variant, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Experiment\", function() { return Experiment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Variant\", function() { return Variant; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar OptimizeContext = React.createContext();\nvar Experiment =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Experiment, _React$Component);\n\n  function Experiment() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Experiment);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Experiment)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      variant: null\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"updateVariant\", function (value) {\n      // if experiment not active, render original\n      _this.setState({\n        variant: value === undefined || value === null ? \"0\" : value\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"delayedInitialization\", function () {\n      var value = window.google_optimize && window.google_optimize.get(_this.props.id);\n\n      _this.updateVariant(value);\n    });\n\n    return _this;\n  }\n\n  _createClass(Experiment, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      if (!this.props.id) {\n        throw new Error(\"Please specify the experiment id\");\n      } // Delayed init\n\n\n      var hideEnd = window.dataLayer && window.dataLayer.hide && window.dataLayer.hide.end;\n\n      if (hideEnd) {\n        window.dataLayer.hide.end = function () {\n          _this2.delayedInitialization();\n\n          hideEnd();\n        };\n      } else {\n        this.delayedInitialization();\n      }\n\n      window.gtag && window.gtag(\"event\", \"optimize.callback\", {\n        name: this.props.id,\n        callback: this.updateVariant\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      window.gtag && window.gtag(\"event\", \"optimize.callback\", {\n        name: this.props.id,\n        callback: this.updateVariant,\n        remove: true\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(OptimizeContext.Provider, {\n        value: this.state.variant\n      }, this.state.variant === null ? this.props.loader : this.props.children);\n    }\n  }]);\n\n  return Experiment;\n}(React.Component);\n\n_defineProperty(Experiment, \"defaultProps\", {\n  loader: null\n});\n\nvar Variant =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(Variant, _React$Component2);\n\n  function Variant() {\n    _classCallCheck(this, Variant);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Variant).apply(this, arguments));\n  }\n\n  _createClass(Variant, [{\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return React.createElement(OptimizeContext.Consumer, null, function (value) {\n        return value === _this3.props.id ? _this3.props.children : null;\n      });\n    }\n  }]);\n\n  return Variant;\n}(React.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Experiment: Experiment,\n  Variant: Variant\n});\n\n//# sourceURL=webpack://react-optimize/./src/index.js?");

/***/ })

/******/ });
});
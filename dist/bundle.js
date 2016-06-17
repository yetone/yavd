/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _VNode = __webpack_require__(2);
	
	var _VNode2 = _interopRequireDefault(_VNode);
	
	var _VElement = __webpack_require__(3);
	
	var _VElement2 = _interopRequireDefault(_VElement);
	
	var _VComment = __webpack_require__(4);
	
	var _VComment2 = _interopRequireDefault(_VComment);
	
	var _VText = __webpack_require__(5);
	
	var _VText2 = _interopRequireDefault(_VText);
	
	var _diff = __webpack_require__(10);
	
	var _diff2 = _interopRequireDefault(_diff);
	
	var _patch = __webpack_require__(13);
	
	var _patch2 = _interopRequireDefault(_patch);
	
	var _utils = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (typeof window !== 'undefined') {
	    var VD = window.VD = {};
	    VD.VNode = _VNode2.default;
	    VD.VElement = _VElement2.default;
	    VD.VComment = _VComment2.default;
	    VD.VText = _VText2.default;
	    VD.transformToVNode = _utils.transformToVNode;
	    VD.diff = _diff2.default;
	    VD.patch = _patch2.default;
	} /**
	   * Created by yetone on 16/6/14.
	   */

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by yetone on 16/6/14.
	 */
	
	var VNode = function () {
	  function VNode() {
	    _classCallCheck(this, VNode);
	  }
	
	  _createClass(VNode, [{
	    key: "toString",
	    value: function toString() {}
	  }]);
	
	  return VNode;
	}();
	
	exports.default = VNode;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Created by yetone on 16/6/14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */
	
	exports.processStyle = processStyle;
	
	var _VNode2 = __webpack_require__(2);
	
	var _VNode3 = _interopRequireDefault(_VNode2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var enableStyleEncode = false;
	
	function processStyle(style) {
	    if (!enableStyleEncode) {
	        return style;
	    }
	    return style.split(';').map(function (piece) {
	        return piece.trim().split(':');
	    }).filter(function (pairs) {
	        return pairs.length === 2;
	    }).reduce(function (acc, cur) {
	        var _cur = _slicedToArray(cur, 2);
	
	        var k = _cur[0];
	        var v = _cur[1];
	
	        return _extends({}, acc, _defineProperty({}, k.trim(), v.trim()));
	    }, {});
	}
	
	var VElement = function (_VNode) {
	    _inherits(VElement, _VNode);
	
	    function VElement(tagName) {
	        var properties = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        var children = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	        var key = arguments[3];
	        var namespace = arguments[4];
	
	        _classCallCheck(this, VElement);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VElement).call(this));
	
	        _this.tagName = tagName;
	        _this.properties = properties;
	        _this.children = children;
	        _this.key = key;
	        _this.namespace = namespace;
	
	        var style = _this.properties.style;
	
	        if (typeof style === 'string') {
	            _this.properties.style = processStyle(style);
	        }
	
	        _this.count = _this.children.reduce(function (count, child) {
	            child.parent = _this;
	            return count + (child.count || 0) + 1;
	        }, 0);
	        return _this;
	    }
	
	    _createClass(VElement, [{
	        key: 'pushChild',
	        value: function pushChild(child) {
	            var count = child.count || 0;
	            this.changeCount(count + 1);
	            child.parent = this;
	            this.children.push(child);
	        }
	    }, {
	        key: 'changeCount',
	        value: function changeCount(count) {
	            if (this.parent) {
	                this.parent.changeCount(count);
	            }
	            this.count += count;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var el = document.createElement(this.tagName);
	            Object.keys(this.properties).forEach(function (propName) {
	                var v = _this2.properties[propName];
	                el.setAttribute(propName, v);
	            });
	            this.children.forEach(function (child) {
	                el.appendChild(child.render());
	            });
	            return el;
	        }
	    }]);
	
	    return VElement;
	}(_VNode3.default);
	
	exports.default = VElement;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VNode2 = __webpack_require__(2);
	
	var _VNode3 = _interopRequireDefault(_VNode2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yetone on 16/6/14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var VComment = function (_VNode) {
	    _inherits(VComment, _VNode);
	
	    function VComment(data, key) {
	        _classCallCheck(this, VComment);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VComment).call(this));
	
	        _this.data = data;
	        _this.key = key;
	        return _this;
	    }
	
	    _createClass(VComment, [{
	        key: 'render',
	        value: function render() {
	            return document.createComment(this.data);
	        }
	    }]);
	
	    return VComment;
	}(_VNode3.default);
	
	exports.default = VComment;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _VNode2 = __webpack_require__(2);
	
	var _VNode3 = _interopRequireDefault(_VNode2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yetone on 16/6/14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var VText = function (_VNode) {
	    _inherits(VText, _VNode);
	
	    function VText(data, key) {
	        _classCallCheck(this, VText);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VText).call(this));
	
	        _this.data = data;
	        _this.key = key;
	        return _this;
	    }
	
	    _createClass(VText, [{
	        key: 'render',
	        value: function render() {
	            return document.createTextNode(this.data);
	        }
	    }]);
	
	    return VText;
	}(_VNode3.default);
	
	exports.default = VText;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by yetone on 16/6/14.
	                                                                                                                                                                                                                                                                   */
	
	exports.transformToVNode = transformToVNode;
	
	var _VElement = __webpack_require__(3);
	
	var _VElement2 = _interopRequireDefault(_VElement);
	
	var _VText = __webpack_require__(5);
	
	var _VText2 = _interopRequireDefault(_VText);
	
	var _VComment = __webpack_require__(4);
	
	var _VComment2 = _interopRequireDefault(_VComment);
	
	var _utils = __webpack_require__(7);
	
	var _htmlParser = __webpack_require__(9);
	
	var _htmlParser2 = _interopRequireDefault(_htmlParser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function transformNodeToVNode(node) {
	    var res = void 0;
	    var properties = void 0;
	    var children = (0, _utils.toArray)(node.childNodes).map(transformNodeToVNode);
	    if (node instanceof HTMLElement) {
	        properties = (0, _utils.toArray)(node.attributes).reduce(function (prev, curr) {
	            return _extends({}, prev, _defineProperty({}, curr.name, curr.value));
	        }, {});
	        res = new _VElement2.default(node.tagName.toLowerCase(), properties, children);
	    } else if (node instanceof Text) {
	        res = new _VText2.default(node.data);
	    } else if (node instanceof Comment) {
	        res = new _VComment2.default(node.data);
	    }
	    return res;
	}
	
	function transformStrToVNode(str) {
	    return _htmlParser2.default.parse(str);
	}
	
	function transformToVNode(nodeOrStr) {
	    if (nodeOrStr instanceof Node) {
	        return transformNodeToVNode(nodeOrStr);
	    }
	    return transformStrToVNode(nodeOrStr);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isArray = undefined;
	exports.isVElement = isVElement;
	exports.isVText = isVText;
	exports.isVComment = isVComment;
	exports.getType = getType;
	exports.toArray = toArray;
	exports.objExtend = objExtend;
	exports.setAttr = setAttr;
	
	var _VElement = __webpack_require__(3);
	
	var _VElement2 = _interopRequireDefault(_VElement);
	
	var _VText = __webpack_require__(5);
	
	var _VText2 = _interopRequireDefault(_VText);
	
	var _VComment = __webpack_require__(4);
	
	var _VComment2 = _interopRequireDefault(_VComment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isVElement(obj) {
	    return obj instanceof _VElement2.default;
	} /**
	   * Created by yetone on 16/6/14.
	   */
	
	
	function isVText(obj) {
	    return obj instanceof _VText2.default;
	}
	
	function isVComment(obj) {
	    return obj instanceof _VComment2.default;
	}
	
	var toString = Object.prototype.toString;
	
	function getType(obj) {
	    return toString.call(obj).slice(8, -1);
	}
	
	function _isArray(obj) {
	    return getType(obj) === 'Array';
	}
	
	var isArray = exports.isArray = Array.isArray || _isArray;
	
	function toArray(obj) {
	    return Array.prototype.slice.call(obj);
	}
	
	function objExtend(obj, rest) {
	    var filter = arguments.length <= 2 || arguments[2] === undefined ? function () {
	        return true;
	    } : arguments[2];
	
	    Object.keys(rest).filter(filter).forEach(function (k) {
	        obj[k] = rest[k];
	    });
	}
	
	function setAttr(node, key, value) {
	    switch (key) {
	        case 'style':
	            node.style.cssText = value;
	            break;
	        case 'value':
	            var tagName = node.tagName || '';
	            tagName = tagName.toLowerCase();
	            if (['input', 'textarea'].indexOf(tagName) + 1) {
	                node.value = value;
	            } else {
	                // if it is not a input or textarea, use `setAttribute` to set
	                node.setAttribute(key, value);
	            }
	            break;
	        default:
	            node.setAttribute(key, value);
	            break;
	    }
	}

/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yetone on 16/6/14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _VText = __webpack_require__(5);
	
	var _VText2 = _interopRequireDefault(_VText);
	
	var _VComment = __webpack_require__(4);
	
	var _VComment2 = _interopRequireDefault(_VComment);
	
	var _VElement = __webpack_require__(3);
	
	var _VElement2 = _interopRequireDefault(_VElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HTMLParser = function () {
	    function HTMLParser() {
	        _classCallCheck(this, HTMLParser);
	
	        this.TAG_START = '<';
	        this.TAG_END = '>';
	        this.QUOTES = ['"', "'"];
	        this.SPACE = ' ';
	        this.EQUAL = '=';
	        this.BACKSLASH = '\\';
	        this.SLASH = '/';
	        this.BANG = '!';
	        this.SELF_TAG_NAMES = ['img', 'link', 'br', 'hr', 'col', 'area', 'meta', 'frame', 'input', 'param'];
	
	        this.init();
	    }
	
	    _createClass(HTMLParser, [{
	        key: 'init',
	        value: function init() {
	            this.inStr = false;
	            this.inTag = false;
	            this.inBeginTag = false;
	            this.inComment = false;
	            this.depth = 0;
	            this.quote = void 0;
	            this.pIdx = 0;
	            this.cIdx = 0;
	            this.ve = void 0;
	            this.rootVe = void 0;
	            this.prev = void 0;
	            this.str = void 0;
	            this.stack = [];
	            this.spaceCount = 0;
	        }
	    }, {
	        key: 'getToken',
	        value: function getToken() {
	            return this.str.substr(this.pIdx + 1, this.cIdx - this.pIdx - 1);
	        }
	    }, {
	        key: 'getCommentData',
	        value: function getCommentData(v) {
	            v = v.substr(1);
	            var l = v.length;
	            if (v.charAt(0) === '-' && v.charAt(1) === '-') {
	                if (v.charAt(l - 2) === '-' && v.charAt(l - 1) === '-') {
	                    return v.substr(2, l - 4);
	                } else {
	                    return v.substr(2);
	                }
	            }
	            return v;
	        }
	    }, {
	        key: 'pushProp',
	        value: function pushProp(token) {
	            var l = token.length;
	            var idx = token.indexOf('=');
	            var k = void 0,
	                v = void 0;
	            if (idx < 0) {
	                k = token;
	                v = '';
	            } else {
	                k = token.substr(0, idx);
	                v = token.substr(idx + 2, l - k.length - 3);
	            }
	            if (k === 'style') {
	                v = (0, _VElement.processStyle)(v);
	            }
	            this.ve.properties[k] = v;
	        }
	    }, {
	        key: 'pushChild',
	        value: function pushChild(v) {
	            if (!this.ve) {
	                return;
	            }
	            this.ve.pushChild(v);
	        }
	    }, {
	        key: 'pushVe',
	        value: function pushVe(ve) {
	            this.stack.push(ve);
	            this.depth++;
	            this.ve = ve;
	            if (!this.rootVe) {
	                this.rootVe = ve;
	            }
	        }
	    }, {
	        key: 'popVe',
	        value: function popVe() {
	            this.stack.pop();
	            this.depth--;
	            this.ve = this.stack[this.depth - 1];
	        }
	    }, {
	        key: 'newElement',
	        value: function newElement(tagName) {
	            var ve = new _VElement2.default(tagName);
	            this.pushChild(ve);
	            this.pushVe(ve);
	        }
	    }, {
	        key: 'parse',
	        value: function parse(str) {
	            str = str.trim();
	            this.str = str;
	            var idx = 0;
	            var char = str.charAt(idx);
	            var token = void 0;
	            var next = void 0;
	            var nextIsSlash = void 0;
	            var prevIsSlash = void 0;
	            var nextIsBang = void 0;
	            while (char) {
	                this.cIdx = idx;
	                if (!this.inStr) {
	                    if (char === this.TAG_START) {
	                        token = this.getToken();
	                        next = str.charAt(idx + 1);
	                        nextIsSlash = next === this.SLASH;
	                        nextIsBang = next === this.BANG;
	
	                        if (token && !this.inComment) {
	                            this.pushChild(new _VText2.default(token));
	                        }
	
	                        if (nextIsBang) {
	                            this.inComment = true;
	                        } else {
	                            this.inTag = true;
	                            if (!nextIsSlash) {
	                                this.inBeginTag = true;
	                            }
	                        }
	                        this.pIdx = idx;
	                    }
	                    if (char === this.TAG_END) {
	                        token = this.getToken();
	                        if (this.inComment) {
	                            this.pushChild(new _VComment2.default(this.getCommentData(token)));
	                            this.inComment = false;
	                        } else if (this.inTag) {
	                            if (this.inBeginTag) {
	                                prevIsSlash = this.prev === this.SLASH;
	                                if (token) {
	                                    if (this.spaceCount !== 0 && !prevIsSlash) {
	                                        this.pushProp(token);
	                                    } else if (!prevIsSlash) {
	                                        this.newElement(token);
	                                    } else {
	                                        this.popVe();
	                                    }
	                                    if (!prevIsSlash && this.ve && this.SELF_TAG_NAMES.indexOf(this.ve.tagName.toLowerCase()) >= 0) {
	                                        this.popVe();
	                                    }
	                                } else if (this.ve && this.SELF_TAG_NAMES.indexOf(this.ve.tagName.toLowerCase()) >= 0) {
	                                    this.popVe();
	                                }
	                            } else {
	                                this.popVe();
	                            }
	                            this.inTag = false;
	                            this.inBeginTag = false;
	                            this.spaceCount = 0;
	                        }
	                        this.pIdx = idx;
	                    }
	                    if (this.inBeginTag && char === this.SPACE) {
	                        token = this.getToken();
	                        if (token) {
	                            if (this.spaceCount === 0) {
	                                this.newElement(token);
	                            } else {
	                                this.pushProp(token);
	                            }
	                        }
	                        this.spaceCount++;
	                        this.pIdx = idx;
	                    }
	                    if (this.inBeginTag && char === this.SLASH && this.spaceCount === 0 && str.charAt(idx + 1) === this.TAG_END) {
	                        token = this.getToken();
	                        this.newElement(token);
	                    }
	                    if (this.inBeginTag && [this.SPACE, this.SLASH, this.TAG_END].indexOf(char) < 0 && this.QUOTES.indexOf(this.prev) >= 0) {
	                        this.pushProp(this.getToken());
	                        this.pIdx = idx - 1;
	                    }
	                }
	                if (this.QUOTES.indexOf(char) >= 0) {
	                    if (this.quote === void 0) {
	                        this.quote = char;
	                        this.inStr = true;
	                    } else if (this.quote === char) {
	                        this.quote = void 0;
	                        this.inStr = false;
	                    }
	                }
	                this.prev = char;
	                char = str.charAt(++idx);
	            }
	            var r = this.rootVe;
	            this.init();
	            return r;
	        }
	    }]);
	
	    return HTMLParser;
	}();
	
	exports.default = new HTMLParser();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TYPES = undefined;
	exports.default = diff;
	
	var _listDiff = __webpack_require__(11);
	
	var _listDiff2 = _interopRequireDefault(_listDiff);
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by yetone on 16/6/17.
	 */
	
	var TYPES = exports.TYPES = {
	    REPLACE: 0,
	    REORDER: 1,
	    PROPS: 2
	};
	
	function diff(oldVN, newVN) {
	    var idx = 0;
	    var patches = {};
	    walk(oldVN, newVN, idx, patches);
	    return patches;
	}
	
	function walk(oldVN, newVN, idx, patches) {
	    var currentPatch = [];
	    if (!newVN) {
	        // pass
	    } else if ((0, _utils.isVElement)(oldVN) && (0, _utils.isVElement)(newVN)) {
	            if (oldVN.tagName === newVN.tagName && oldVN.key === newVN.key) {
	                // Diff props
	                var propsPatches = diffProps(oldVN, newVN);
	                if (propsPatches) {
	                    currentPatch.push({ type: TYPES.PROPS, props: propsPatches });
	                }
	                // Diff children. If the node has a `ignore` property, do not diff children
	                if (!isIgnoreChildren(newVN)) {
	                    diffChildren(oldVN.children, newVN.children, idx, patches, currentPatch);
	                }
	            } else {
	                currentPatch.push({ type: TYPES.REPLACE, node: newVN });
	            }
	        } else {
	            if (oldVN.constructor === newVN.constructor) {
	                if (oldVN.data !== newVN.data) {
	                    currentPatch.push({ type: TYPES.REPLACE, node: newVN, data: true });
	                }
	            } else {
	                currentPatch.push({ type: TYPES.REPLACE, node: newVN });
	            }
	        }
	
	    if (currentPatch.length) {
	        patches[idx] = currentPatch;
	    }
	}
	
	function diffProps(oldVN, newVN) {
	    var count = 0;
	    var oldProps = oldVN.properties;
	    var newProps = newVN.properties;
	
	    var value = void 0;
	    var propsPatches = {};
	
	    // Find out different properties
	    Object.getOwnPropertyNames(oldProps).forEach(function (key) {
	        value = oldProps[key];
	        if (newProps[key] !== value) {
	            count++;
	            propsPatches[key] = newProps[key];
	        }
	    });
	
	    // Find out new property
	    Object.getOwnPropertyNames(newProps).forEach(function (key) {
	        value = newProps[key];
	        if (!oldProps.hasOwnProperty(key)) {
	            count++;
	            propsPatches[key] = newProps[key];
	        }
	    });
	
	    // If properties all are identical
	    if (count === 0) {
	        return null;
	    }
	
	    return propsPatches;
	}
	
	function diffChildren(oldChildren, newChildren, idx, patches, currentPatch) {
	    var diffs = (0, _listDiff2.default)(oldChildren, newChildren, 'key');
	    var reorderPatch = void 0;
	    newChildren = diffs.children;
	
	    if (diffs.moves.length) {
	        reorderPatch = {
	            type: TYPES.REORDER,
	            moves: diffs.moves
	        };
	        currentPatch.push(reorderPatch);
	    }
	
	    var leftVN = null;
	    var currentIdx = idx;
	    oldChildren.forEach(function (child, i) {
	        var newChild = newChildren[i];
	        var count = leftVN ? leftVN.count || 0 : 0;
	        currentIdx = currentIdx + count + 1;
	        walk(child, newChild, currentIdx, patches);
	        leftVN = child;
	    });
	}
	
	function isIgnoreChildren(vn) {
	    return vn.properties && vn.properties.hasOwnProperty('ignore');
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12).diff


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Diff two list in O(N).
	 * @param {Array} oldList - Original List
	 * @param {Array} newList - List After certain insertions, removes, or moves
	 * @return {Object} - {moves: <Array>}
	 *                  - moves is a list of actions that telling how to remove and insert
	 */
	function diff (oldList, newList, key) {
	  var oldMap = makeKeyIndexAndFree(oldList, key)
	  var newMap = makeKeyIndexAndFree(newList, key)
	
	  var newFree = newMap.free
	
	  var oldKeyIndex = oldMap.keyIndex
	  var newKeyIndex = newMap.keyIndex
	
	  var moves = []
	
	  // a simulate list to manipulate
	  var children = []
	  var i = 0
	  var item
	  var itemKey
	  var freeIndex = 0
	
	  // fist pass to check item in old list: if it's removed or not
	  while (i < oldList.length) {
	    item = oldList[i]
	    itemKey = getItemKey(item, key)
	    if (itemKey) {
	      if (!newKeyIndex.hasOwnProperty(itemKey)) {
	        children.push(null)
	      } else {
	        var newItemIndex = newKeyIndex[itemKey]
	        children.push(newList[newItemIndex])
	      }
	    } else {
	      var freeItem = newFree[freeIndex++]
	      children.push(freeItem || null)
	    }
	    i++
	  }
	
	  var simulateList = children.slice(0)
	
	  // remove items no longer exist
	  i = 0
	  while (i < simulateList.length) {
	    if (simulateList[i] === null) {
	      remove(i)
	      removeSimulate(i)
	    } else {
	      i++
	    }
	  }
	
	  // i is cursor pointing to a item in new list
	  // j is cursor pointing to a item in simulateList
	  var j = i = 0
	  while (i < newList.length) {
	    item = newList[i]
	    itemKey = getItemKey(item, key)
	
	    var simulateItem = simulateList[j]
	    var simulateItemKey = getItemKey(simulateItem, key)
	
	    if (simulateItem) {
	      if (itemKey === simulateItemKey) {
	        j++
	      } else {
	        // new item, just inesrt it
	        if (!oldKeyIndex.hasOwnProperty(itemKey)) {
	          insert(i, item)
	        } else {
	          // if remove current simulateItem make item in right place
	          // then just remove it
	          var nextItemKey = getItemKey(simulateList[j + 1], key)
	          if (nextItemKey === itemKey) {
	            remove(i)
	            removeSimulate(j)
	            j++ // after removing, current j is right, just jump to next one
	          } else {
	            // else insert item
	            insert(i, item)
	          }
	        }
	      }
	    } else {
	      insert(i, item)
	    }
	
	    i++
	  }
	
	  function remove (index) {
	    var move = {index: index, type: 0}
	    moves.push(move)
	  }
	
	  function insert (index, item) {
	    var move = {index: index, item: item, type: 1}
	    moves.push(move)
	  }
	
	  function removeSimulate (index) {
	    simulateList.splice(index, 1)
	  }
	
	  return {
	    moves: moves,
	    children: children
	  }
	}
	
	/**
	 * Convert list to key-item keyIndex object.
	 * @param {Array} list
	 * @param {String|Function} key
	 */
	function makeKeyIndexAndFree (list, key) {
	  var keyIndex = {}
	  var free = []
	  for (var i = 0, len = list.length; i < len; i++) {
	    var item = list[i]
	    var itemKey = getItemKey(item, key)
	    if (itemKey) {
	      keyIndex[itemKey] = i
	    } else {
	      free.push(item)
	    }
	  }
	  return {
	    keyIndex: keyIndex,
	    free: free
	  }
	}
	
	function getItemKey (item, key) {
	  if (!item || !key) return void 666
	  return typeof key === 'string'
	    ? item[key]
	    : key(item)
	}
	
	exports.makeKeyIndexAndFree = makeKeyIndexAndFree // exports for test
	exports.diff = diff


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = patch;
	
	var _diff = __webpack_require__(10);
	
	var _utils = __webpack_require__(7);
	
	/**
	 * Created by yetone on 16/6/17.
	 */
	
	function patch(node, patches) {
	    var walker = { idx: 0 };
	    walk(node, walker, patches);
	}
	
	function walk(node, walker, patches) {
	    var currentPatches = patches[walker.idx];
	
	    (0, _utils.toArray)(node.childNodes).forEach(function (child) {
	        walker.idx++;
	        walk(child, walker, patches);
	    });
	
	    if (currentPatches) {
	        applyPatches(node, currentPatches);
	    }
	}
	
	function applyPatches(node, patches) {
	    var newNode = void 0;
	    patches.forEach(function (patch) {
	        switch (patch.type) {
	            case _diff.TYPES.REPLACE:
	                if (patch.data) {
	                    node.data = patch.node.data;
	                } else {
	                    newNode = patch.node.render();
	                    node.parentNode.replaceChild(newNode, node);
	                }
	                break;
	            case _diff.TYPES.REORDER:
	                reorderChildren(node, patch.moves);
	                break;
	            case _diff.TYPES.PROPS:
	                setProps(node, patch.props);
	                break;
	            default:
	                throw new Error('Unknown patch type ' + patch.type);
	        }
	    });
	}
	
	function setProps(node, props) {
	    var value = void 0;
	    Object.getOwnPropertyNames(props).forEach(function (key) {
	        value = props[key];
	        if (value === void 0) {
	            node.removeAttribute();
	        } else {
	            (0, _utils.setAttr)(node, key, value);
	        }
	    });
	}
	
	function reorderChildren(node, moves) {
	    var childNodes = node.childNodes;
	    var staticNodes = (0, _utils.toArray)(childNodes);
	    var maps = {};
	
	    staticNodes.forEach(function (node) {
	        if (node.nodeType === 1) {
	            var key = node.getAttribute('key');
	            if (key) {
	                maps[key] = node;
	            }
	        }
	    });
	
	    moves.forEach(function (move) {
	        var insertNode = void 0;
	        var idx = move.idx;
	        if (move.type === 0) {
	            // remove item
	            if (staticNodes[idx] === childNodes[idx]) {
	                // maybe have been removed for inserting
	                node.removeChild(childNodes[idx]);
	            }
	            staticNodes.splice(idx, 1);
	        } else if (move.type === 1) {
	            // insert item
	            insertNode = maps[move.item.key] ? maps[move.item.key] // reuse old item
	            : move.item.render();
	            staticNodes.splice(idx, 0, insertNode);
	            node.insertBefore(insertNode, childNodes[idx] || null);
	        }
	    });
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
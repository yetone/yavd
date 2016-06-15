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
	
	var _utils = __webpack_require__(7);
	
	window.transformToVNode = _utils.transformToVNode; /**
	                                                    * Created by yetone on 16/6/14.
	                                                    */

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _VNode2 = __webpack_require__(3);
	
	var _VNode3 = _interopRequireDefault(_VNode2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yetone on 16/6/14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var VElement = function (_VNode) {
	    _inherits(VElement, _VNode);
	
	    function VElement(tagName) {
	        var attributes = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        var children = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
	        _classCallCheck(this, VElement);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VElement).call(this));
	
	        _this.tagName = tagName.toUpperCase();
	        _this.attributes = attributes;
	        _this.children = children;
	        return _this;
	    }
	
	    return VElement;
	}(_VNode3.default);
	
	exports.default = VElement;

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _VNode2 = __webpack_require__(3);
	
	var _VNode3 = _interopRequireDefault(_VNode2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yetone on 16/6/14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var VText = function (_VNode) {
	    _inherits(VText, _VNode);
	
	    function VText(data) {
	        _classCallCheck(this, VText);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VText).call(this));
	
	        _this.data = data;
	        return _this;
	    }
	
	    return VText;
	}(_VNode3.default);
	
	exports.default = VText;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _VNode2 = __webpack_require__(3);
	
	var _VNode3 = _interopRequireDefault(_VNode2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yetone on 16/6/14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var VComment = function (_VNode) {
	    _inherits(VComment, _VNode);
	
	    function VComment(data) {
	        _classCallCheck(this, VComment);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VComment).call(this));
	
	        _this.data = data;
	        return _this;
	    }
	
	    return VComment;
	}(_VNode3.default);
	
	exports.default = VComment;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getType = getType;
	exports.toArray = toArray;
	exports.objExtend = objExtend;
	/**
	 * Created by yetone on 16/6/14.
	 */
	
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by yetone on 16/6/14.
	                                                                                                                                                                                                                                                                   */
	
	exports.transformToVNode = transformToVNode;
	exports.diff = diff;
	
	var _VElement = __webpack_require__(2);
	
	var _VElement2 = _interopRequireDefault(_VElement);
	
	var _VText = __webpack_require__(4);
	
	var _VText2 = _interopRequireDefault(_VText);
	
	var _VComment = __webpack_require__(5);
	
	var _VComment2 = _interopRequireDefault(_VComment);
	
	var _utils = __webpack_require__(6);
	
	var _htmlParser = __webpack_require__(8);
	
	var _htmlParser2 = _interopRequireDefault(_htmlParser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function transformNodeToVNode(node) {
	    var res = void 0;
	    var attributes = void 0;
	    var children = (0, _utils.toArray)(node.childNodes).map(transformNodeToVNode);
	    if (node instanceof HTMLElement) {
	        attributes = (0, _utils.toArray)(node.attributes).reduce(function (prev, curr) {
	            return _extends({}, prev, _defineProperty({}, curr.name, curr.value));
	        }, {});
	        res = new _VElement2.default(node.tagName, attributes, children);
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
	
	function diff(oldVn, newVn) {}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yetone on 16/6/14.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _VText = __webpack_require__(4);
	
	var _VText2 = _interopRequireDefault(_VText);
	
	var _VComment = __webpack_require__(5);
	
	var _VComment2 = _interopRequireDefault(_VComment);
	
	var _VElement = __webpack_require__(2);
	
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
	        this.SELF_TAG_NAMES = ['img'];
	
	        this.init();
	    }
	
	    _createClass(HTMLParser, [{
	        key: 'init',
	        value: function init() {
	            this.inStr = false;
	            this.inTag = false;
	            this.inBeginTag = false;
	            this.inAttr = false;
	            this.inComment = false;
	            this.depth = 0;
	            this.quote = void 0;
	            this.pIdx = 0;
	            this.cIdx = 0;
	            this.ve = void 0;
	            this.rootVe = void 0;
	            this.prev = void 0;
	            this.str = void 0;
	            this.curTagName = void 0;
	            this.curAttrName = void 0;
	            this.stack = [];
	            this.spaceCount = 0;
	        }
	    }, {
	        key: 'getToken',
	        value: function getToken() {
	            return this.str.substr(this.pIdx + 1, this.cIdx - this.pIdx - 1);
	        }
	    }, {
	        key: 'getAttrValue',
	        value: function getAttrValue(v) {
	            var l = v.length;
	            var s = v.charAt(0);
	            if (this.QUOTES.indexOf(s) >= 0) {
	                return v.substr(1, l - 2);
	            }
	            return v;
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
	        key: 'pushAttr',
	        value: function pushAttr(v) {
	            if (!this.curAttrName) {
	                return;
	            }
	            this.ve.attributes[this.curAttrName] = typeof v === 'string' ? this.getAttrValue(v) : v;
	            this.curAttrName = void 0;
	            this.inAttr = false;
	        }
	    }, {
	        key: 'pushChild',
	        value: function pushChild(v) {
	            if (!this.ve) {
	                return;
	            }
	            this.ve.children.push(v);
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
	        key: 'parse',
	        value: function parse(str) {
	            str = str.trim();
	            this.str = str;
	            var idx = 0;
	            var char = str.charAt(idx);
	            var token = void 0;
	            var ve = void 0;
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
	
	                        if (token) {
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
	                        if (this.inTag) {
	                            if (this.inBeginTag) {
	                                prevIsSlash = this.prev === this.SLASH;
	                                if (token) {
	                                    if (this.curAttrName) {
	                                        this.pushAttr(token);
	                                    } else if (this.spaceCount !== 0 && !prevIsSlash) {
	                                        this.curAttrName = token;
	                                        this.pushAttr(true);
	                                    } else if (!prevIsSlash) {
	                                        ve = new _VElement2.default(token);
	                                        this.pushChild(ve);
	                                        this.pushVe(ve);
	                                    } else {
	                                        this.popVe();
	                                    }
	                                }
	                            } else {
	                                this.popVe();
	                            }
	                            this.inTag = false;
	                            this.inBeginTag = false;
	                            this.spaceCount = 0;
	                        } else if (this.inComment) {
	                            this.pushChild(new _VComment2.default(this.getCommentData(token)));
	                        }
	                        this.pIdx = idx;
	                    }
	                    if (this.inBeginTag && char === this.SPACE) {
	                        token = this.getToken();
	                        if (token) {
	                            if (this.spaceCount === 0) {
	                                ve = new _VElement2.default(token);
	                                this.pushChild(ve);
	                                this.pushVe(ve);
	                            } else if (!this.curAttrName) {
	                                this.curAttrName = token;
	                                this.pushAttr(true);
	                            } else {
	                                this.pushAttr(token);
	                            }
	                        }
	                        this.spaceCount++;
	                        this.pIdx = idx;
	                    }
	                    if (char === this.EQUAL) {
	                        token = this.getToken();
	                        if (token && this.inTag) {
	                            this.curAttrName = token;
	                            this.inAttr = true;
	                        }
	                        this.pIdx = idx;
	                    }
	                }
	                if (this.QUOTES.indexOf(char) >= 0 && this.prev !== this.BACKSLASH && !this.inAttr) {
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
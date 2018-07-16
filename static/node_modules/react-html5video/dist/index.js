module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Overlay = exports.Fullscreen = exports.PlayPause = exports.Captions = exports.Volume = exports.Seek = exports.Time = exports.DefaultPlayer = exports.apiHelpers = exports.default = undefined;

	var _video = __webpack_require__(2);

	var _video2 = _interopRequireDefault(_video);

	var _api = __webpack_require__(96);

	var apiHelpers = _interopRequireWildcard(_api);

	var _DefaultPlayer = __webpack_require__(107);

	var _DefaultPlayer2 = _interopRequireDefault(_DefaultPlayer);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _video2.default;
	exports.apiHelpers = apiHelpers;
	exports.DefaultPlayer = _DefaultPlayer2.default;
	exports.Time = _DefaultPlayer.Time;
	exports.Seek = _DefaultPlayer.Seek;
	exports.Volume = _DefaultPlayer.Volume;
	exports.Captions = _DefaultPlayer.Captions;
	exports.PlayPause = _DefaultPlayer.PlayPause;
	exports.Fullscreen = _DefaultPlayer.Fullscreen;
	exports.Overlay = _DefaultPlayer.Overlay;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _extends2 = __webpack_require__(88);

	var _extends3 = _interopRequireDefault(_extends2);

	var _assign = __webpack_require__(89);

	var _assign2 = _interopRequireDefault(_assign);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(94);

	var _constants = __webpack_require__(95);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultMapStateToProps = function defaultMapStateToProps() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    return (0, _assign2.default)({
	        video: (0, _extends3.default)({}, state)
	    });
	}; /**
	    * This is a HoC that finds a single
	    * <video> in a component and makes
	    * all its PROPERTIES available as props.
	    */


	var defaultMapVideoElToProps = function defaultMapVideoElToProps(videoEl) {
	    return {
	        videoEl: videoEl
	    };
	};

	var defaultMergeProps = function defaultMergeProps() {
	    var stateProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var videoElProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var ownProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    return (0, _assign2.default)({}, stateProps, videoElProps, ownProps);
	};

	exports.default = function (BaseComponent) {
	    var mapStateToProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMapStateToProps;
	    var mapVideoElToProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultMapVideoElToProps;
	    var mergeProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultMergeProps;
	    return function (_Component) {
	        (0, _inherits3.default)(Video, _Component);

	        function Video(props) {
	            (0, _classCallCheck3.default)(this, Video);

	            var _this = (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || (0, _getPrototypeOf2.default)(Video)).call(this, props));

	            _this.updateState = _this.updateState.bind(_this);
	            _this.state = {};
	            return _this;
	        }

	        (0, _createClass3.default)(Video, [{
	            key: 'updateState',
	            value: function updateState() {
	                var _this2 = this;

	                this.setState(_constants.PROPERTIES.reduce(function (p, c) {
	                    p[c] = _this2.videoEl && _this2.videoEl[c];
	                    return p;
	                }, {}));
	            }
	        }, {
	            key: 'bindEventsToUpdateState',
	            value: function bindEventsToUpdateState() {
	                var _this3 = this;

	                _constants.EVENTS.forEach(function (event) {
	                    _this3.videoEl.addEventListener(event.toLowerCase(), _this3.updateState);
	                });

	                _constants.TRACKEVENTS.forEach(function (event) {
	                    // TODO: JSDom does not have this method on
	                    // `textTracks`. Investigate so we can test this without this check.
	                    _this3.videoEl.textTracks.addEventListener && _this3.videoEl.textTracks.addEventListener(event.toLowerCase(), _this3.updateState);
	                });

	                // If <source> elements are used instead of a src attribute then
	                // errors for unsupported format do not bubble up to the <video>.
	                // Do this manually by listening to the last <source> error event
	                // to force an update.
	                // https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
	                var sources = this.videoEl.getElementsByTagName('source');
	                if (sources.length) {
	                    var lastSource = sources[sources.length - 1];
	                    lastSource.addEventListener('error', this.updateState);
	                }
	            }
	        }, {
	            key: 'unbindEvents',
	            value: function unbindEvents() {
	                var _this4 = this;

	                _constants.EVENTS.forEach(function (event) {
	                    _this4.videoEl.removeEventListener(event.toLowerCase(), _this4.updateState);
	                });

	                _constants.TRACKEVENTS.forEach(function (event) {
	                    // TODO: JSDom does not have this method on
	                    // `textTracks`. Investigate so we can test this without this check.
	                    _this4.videoEl.textTracks.removeEventListener && _this4.videoEl.textTracks.removeEventListener(event.toLowerCase(), _this4.updateState);
	                });

	                var sources = this.videoEl.getElementsByTagName('source');
	                if (sources.length) {
	                    var lastSource = sources[sources.length - 1];
	                    lastSource.removeEventListener('error', this.updateState);
	                }
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                this.unbindEvents();
	            }

	            // Stop `this.el` from being null briefly on every render,
	            // see: https://github.com/mderrick/react-html5video/pull/65

	        }, {
	            key: 'setRef',
	            value: function setRef(el) {
	                this.el = (0, _reactDom.findDOMNode)(el);
	            }
	        }, {
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	                this.videoEl = this.el.getElementsByTagName('video')[0];
	                this.bindEventsToUpdateState();
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                var stateProps = mapStateToProps(this.state, this.props);
	                var videoElProps = mapVideoElToProps(this.videoEl, this.state, this.props);
	                return _react2.default.createElement(
	                    'div',
	                    { ref: this.setRef.bind(this) },
	                    _react2.default.createElement(BaseComponent, mergeProps(stateProps, videoElProps, this.props))
	                );
	            }
	        }]);
	        return Video;
	    }(_react.Component);
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(4), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = __webpack_require__(16).Object.getPrototypeOf;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(6);
	var $getPrototypeOf = __webpack_require__(8);

	__webpack_require__(14)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(9);
	var toObject = __webpack_require__(6);
	var IE_PROTO = __webpack_require__(10)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(11)('keys');
	var uid = __webpack_require__(13);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(15);
	var core = __webpack_require__(16);
	var fails = __webpack_require__(25);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12);
	var core = __webpack_require__(16);
	var ctx = __webpack_require__(17);
	var hide = __webpack_require__(19);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(18);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(20);
	var createDesc = __webpack_require__(28);
	module.exports = __webpack_require__(24) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(21);
	var IE8_DOM_DEFINE = __webpack_require__(23);
	var toPrimitive = __webpack_require__(27);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(24) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(24) && !__webpack_require__(25)(function () {
	  return Object.defineProperty(__webpack_require__(26)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(25)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(22);
	var document = __webpack_require__(12).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(22);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(31);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(33);
	var $Object = __webpack_require__(16).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(15);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(24), 'Object', { defineProperty: __webpack_require__(20).f });


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(35);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(36);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(65);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(37), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(38);
	__webpack_require__(60);
	module.exports = __webpack_require__(64).f('iterator');


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(39)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(41)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40);
	var defined = __webpack_require__(7);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(42);
	var $export = __webpack_require__(15);
	var redefine = __webpack_require__(43);
	var hide = __webpack_require__(19);
	var has = __webpack_require__(9);
	var Iterators = __webpack_require__(44);
	var $iterCreate = __webpack_require__(45);
	var setToStringTag = __webpack_require__(58);
	var getPrototypeOf = __webpack_require__(8);
	var ITERATOR = __webpack_require__(59)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(46);
	var descriptor = __webpack_require__(28);
	var setToStringTag = __webpack_require__(58);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(19)(IteratorPrototype, __webpack_require__(59)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(21);
	var dPs = __webpack_require__(47);
	var enumBugKeys = __webpack_require__(56);
	var IE_PROTO = __webpack_require__(10)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(26)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(57).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(20);
	var anObject = __webpack_require__(21);
	var getKeys = __webpack_require__(48);

	module.exports = __webpack_require__(24) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(49);
	var enumBugKeys = __webpack_require__(56);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(9);
	var toIObject = __webpack_require__(50);
	var arrayIndexOf = __webpack_require__(53)(false);
	var IE_PROTO = __webpack_require__(10)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(51);
	var defined = __webpack_require__(7);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(52);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(50);
	var toLength = __webpack_require__(54);
	var toAbsoluteIndex = __webpack_require__(55);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(40);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(12).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(20).f;
	var has = __webpack_require__(9);
	var TAG = __webpack_require__(59)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(11)('wks');
	var uid = __webpack_require__(13);
	var Symbol = __webpack_require__(12).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	var global = __webpack_require__(12);
	var hide = __webpack_require__(19);
	var Iterators = __webpack_require__(44);
	var TO_STRING_TAG = __webpack_require__(59)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(62);
	var step = __webpack_require__(63);
	var Iterators = __webpack_require__(44);
	var toIObject = __webpack_require__(50);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(41)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 62 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(59);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(67);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	module.exports = __webpack_require__(16).Symbol;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(12);
	var has = __webpack_require__(9);
	var DESCRIPTORS = __webpack_require__(24);
	var $export = __webpack_require__(15);
	var redefine = __webpack_require__(43);
	var META = __webpack_require__(68).KEY;
	var $fails = __webpack_require__(25);
	var shared = __webpack_require__(11);
	var setToStringTag = __webpack_require__(58);
	var uid = __webpack_require__(13);
	var wks = __webpack_require__(59);
	var wksExt = __webpack_require__(64);
	var wksDefine = __webpack_require__(69);
	var enumKeys = __webpack_require__(70);
	var isArray = __webpack_require__(73);
	var anObject = __webpack_require__(21);
	var toIObject = __webpack_require__(50);
	var toPrimitive = __webpack_require__(27);
	var createDesc = __webpack_require__(28);
	var _create = __webpack_require__(46);
	var gOPNExt = __webpack_require__(74);
	var $GOPD = __webpack_require__(76);
	var $DP = __webpack_require__(20);
	var $keys = __webpack_require__(48);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(72).f = $propertyIsEnumerable;
	  __webpack_require__(71).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(42)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(13)('meta');
	var isObject = __webpack_require__(22);
	var has = __webpack_require__(9);
	var setDesc = __webpack_require__(20).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(25)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(12);
	var core = __webpack_require__(16);
	var LIBRARY = __webpack_require__(42);
	var wksExt = __webpack_require__(64);
	var defineProperty = __webpack_require__(20).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(48);
	var gOPS = __webpack_require__(71);
	var pIE = __webpack_require__(72);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(52);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(50);
	var gOPN = __webpack_require__(75).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(49);
	var hiddenKeys = __webpack_require__(56).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(72);
	var createDesc = __webpack_require__(28);
	var toIObject = __webpack_require__(50);
	var toPrimitive = __webpack_require__(27);
	var has = __webpack_require__(9);
	var IE8_DOM_DEFINE = __webpack_require__(23);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(24) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(69)('asyncIterator');


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(69)('observable');


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(81);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(85);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(35);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	module.exports = __webpack_require__(16).Object.setPrototypeOf;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(15);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(84).set });


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(22);
	var anObject = __webpack_require__(21);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(17)(Function.call, __webpack_require__(76).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(87);
	var $Object = __webpack_require__(16).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(15);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(46) });


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(89);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(91);
	module.exports = __webpack_require__(16).Object.assign;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(15);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(92) });


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(48);
	var gOPS = __webpack_require__(71);
	var pIE = __webpack_require__(72);
	var toObject = __webpack_require__(6);
	var IObject = __webpack_require__(51);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(25)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = require("react-dom");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var EVENTS = exports.EVENTS = ['abort', 'canPlay', 'canPlayThrough', 'durationChange', 'emptied', 'encrypted', 'ended', 'error', 'loadedData', 'loadedMetadata', 'loadStart', 'pause', 'play', 'playing', 'progress', 'rateChange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeUpdate', 'volumeChange', 'waiting'];

	var TRACKEVENTS = exports.TRACKEVENTS = ['change', 'addTrack', 'removeTrack'];

	var METHODS = exports.METHODS = ['addTextTrack', 'canPlayType', 'load', 'play', 'pause'];

	var PROPERTIES = exports.PROPERTIES = ['audioTracks', 'autoPlay', 'buffered', 'controller', 'controls', 'currentSrc', 'currentTime', 'defaultMuted', 'defaultPlaybackRate', 'duration', 'ended', 'error', 'loop', 'mediaGroup', 'muted', 'networkState', 'paused', 'playbackRate', 'played', 'preload', 'readyState', 'seekable', 'seeking', 'src', 'startDate', 'textTracks', 'videoTracks', 'volume'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getPercentagePlayed = exports.getPercentageBuffered = exports.toggleTracks = exports.hideTracks = exports.showTrack = exports.toggleFullscreen = exports.toggleMute = exports.unmute = exports.mute = exports.setVolume = exports.setCurrentTime = exports.togglePause = undefined;

	var _toConsumableArray2 = __webpack_require__(97);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * These are custom helper methods that are not native
	 * to the HTMLMediaElement API. Pass in the native
	 * Video element, state and optional desired value to
	 * set. To be primarily used in `mapVideoElToProps`.
	 */
	var togglePause = exports.togglePause = function togglePause(videoEl, _ref) {
	    var paused = _ref.paused;

	    if (paused) {
	        videoEl.play();
	    } else {
	        videoEl.pause();
	    }
	};

	var setCurrentTime = exports.setCurrentTime = function setCurrentTime(videoEl, state, value) {
	    videoEl.currentTime = value;
	};

	var setVolume = exports.setVolume = function setVolume(videoEl, state, value) {
	    videoEl.muted = false;
	    videoEl.volume = value;
	};

	var mute = exports.mute = function mute(videoEl) {
	    videoEl.muted = true;
	};

	var unmute = exports.unmute = function unmute(videoEl) {
	    videoEl.muted = false;
	};

	var toggleMute = exports.toggleMute = function toggleMute(videoEl, _ref2) {
	    var volume = _ref2.volume,
	        muted = _ref2.muted;

	    if (muted || volume <= 0) {
	        if (volume <= 0) {
	            videoEl.volume = 1;
	        }
	        videoEl.muted = false;
	    } else {
	        videoEl.muted = true;
	    }
	};

	var toggleFullscreen = exports.toggleFullscreen = function toggleFullscreen(videoEl) {
	    videoEl.requestFullScreen = videoEl.requestFullscreen || videoEl.msRequestFullscreen || videoEl.mozRequestFullScreen || videoEl.webkitRequestFullscreen;
	    document.exitFullscreen = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
	    var fullscreenElement = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
	    if (fullscreenElement === videoEl) {
	        document.exitFullscreen();
	    } else {
	        videoEl.requestFullScreen();
	    }
	};

	var showTrack = exports.showTrack = function showTrack(_ref3, track) {
	    var textTracks = _ref3.textTracks;

	    hideTracks({ textTracks: textTracks });
	    track.mode = track.SHOWING || 'showing';
	};

	var hideTracks = exports.hideTracks = function hideTracks(_ref4) {
	    var textTracks = _ref4.textTracks;

	    for (var i = 0; i < textTracks.length; i++) {
	        textTracks[i].mode = textTracks[i].DISABLED || 'disabled';
	    }
	};

	var toggleTracks = exports.toggleTracks = function () {
	    var previousTrack = void 0;
	    return function (_ref5) {
	        var textTracks = _ref5.textTracks;

	        var currentTrack = [].concat((0, _toConsumableArray3.default)(textTracks)).filter(function (track) {
	            return track.mode === track.SHOWING || track.mode === 'showing';
	        })[0];
	        if (currentTrack) {
	            hideTracks({ textTracks: textTracks });
	            previousTrack = currentTrack;
	        } else {
	            showTrack({ textTracks: textTracks }, previousTrack || textTracks[0]);
	        }
	    };
	}();

	/**
	 * Custom getter methods that are commonly used
	 * across video layouts. To be primarily used in
	 * `mapStateToProps`
	 */
	var getPercentageBuffered = exports.getPercentageBuffered = function getPercentageBuffered(_ref6) {
	    var buffered = _ref6.buffered,
	        duration = _ref6.duration;
	    return buffered && buffered.length && buffered.end(buffered.length - 1) / duration * 100 || 0;
	};

	var getPercentagePlayed = exports.getPercentagePlayed = function getPercentagePlayed(_ref7) {
	    var currentTime = _ref7.currentTime,
	        duration = _ref7.duration;
	    return currentTime / duration * 100;
	};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(98);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(38);
	__webpack_require__(100);
	module.exports = __webpack_require__(16).Array.from;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(17);
	var $export = __webpack_require__(15);
	var toObject = __webpack_require__(6);
	var call = __webpack_require__(101);
	var isArrayIter = __webpack_require__(102);
	var toLength = __webpack_require__(54);
	var createProperty = __webpack_require__(103);
	var getIterFn = __webpack_require__(104);

	$export($export.S + $export.F * !__webpack_require__(106)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(21);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(44);
	var ITERATOR = __webpack_require__(59)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(20);
	var createDesc = __webpack_require__(28);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(105);
	var ITERATOR = __webpack_require__(59)('iterator');
	var Iterators = __webpack_require__(44);
	module.exports = __webpack_require__(16).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(52);
	var TAG = __webpack_require__(59)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(59)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Overlay = exports.Fullscreen = exports.PlayPause = exports.Captions = exports.Volume = exports.Seek = exports.Time = exports.DefaultPlayer = exports.default = undefined;

	var _extends2 = __webpack_require__(88);

	var _extends3 = _interopRequireDefault(_extends2);

	var _objectWithoutProperties2 = __webpack_require__(108);

	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(109);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _video = __webpack_require__(2);

	var _video2 = _interopRequireDefault(_video);

	var _copy = __webpack_require__(110);

	var _copy2 = _interopRequireDefault(_copy);

	var _api = __webpack_require__(96);

	var _DefaultPlayer = __webpack_require__(111);

	var _DefaultPlayer2 = _interopRequireDefault(_DefaultPlayer);

	var _Time = __webpack_require__(115);

	var _Time2 = _interopRequireDefault(_Time);

	var _Seek = __webpack_require__(118);

	var _Seek2 = _interopRequireDefault(_Seek);

	var _Volume = __webpack_require__(121);

	var _Volume2 = _interopRequireDefault(_Volume);

	var _Captions = __webpack_require__(126);

	var _Captions2 = _interopRequireDefault(_Captions);

	var _PlayPause = __webpack_require__(130);

	var _PlayPause2 = _interopRequireDefault(_PlayPause);

	var _Fullscreen = __webpack_require__(135);

	var _Fullscreen2 = _interopRequireDefault(_Fullscreen);

	var _Overlay = __webpack_require__(139);

	var _Overlay2 = _interopRequireDefault(_Overlay);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DefaultPlayer = function DefaultPlayer(_ref) {
	    var copy = _ref.copy,
	        video = _ref.video,
	        style = _ref.style,
	        controls = _ref.controls,
	        children = _ref.children,
	        className = _ref.className,
	        onSeekChange = _ref.onSeekChange,
	        onVolumeChange = _ref.onVolumeChange,
	        onVolumeClick = _ref.onVolumeClick,
	        onCaptionsClick = _ref.onCaptionsClick,
	        onPlayPauseClick = _ref.onPlayPauseClick,
	        onFullscreenClick = _ref.onFullscreenClick,
	        onCaptionsItemClick = _ref.onCaptionsItemClick,
	        restProps = (0, _objectWithoutProperties3.default)(_ref, ['copy', 'video', 'style', 'controls', 'children', 'className', 'onSeekChange', 'onVolumeChange', 'onVolumeClick', 'onCaptionsClick', 'onPlayPauseClick', 'onFullscreenClick', 'onCaptionsItemClick']);

	    return _react2.default.createElement(
	        'div',
	        { className: [_DefaultPlayer2.default.component, className].join(' '),
	            style: style },
	        _react2.default.createElement(
	            'video',
	            (0, _extends3.default)({
	                className: _DefaultPlayer2.default.video
	            }, restProps),
	            children
	        ),
	        _react2.default.createElement(_Overlay2.default, (0, _extends3.default)({
	            onClick: onPlayPauseClick
	        }, video)),
	        controls && controls.length && !video.error ? _react2.default.createElement(
	            'div',
	            { className: _DefaultPlayer2.default.controls },
	            controls.map(function (control, i) {
	                switch (control) {
	                    case 'Seek':
	                        return _react2.default.createElement(_Seek2.default, (0, _extends3.default)({
	                            key: i,
	                            ariaLabel: copy.seek,
	                            className: _DefaultPlayer2.default.seek,
	                            onChange: onSeekChange
	                        }, video));
	                    case 'PlayPause':
	                        return _react2.default.createElement(_PlayPause2.default, (0, _extends3.default)({
	                            key: i,
	                            ariaLabelPlay: copy.play,
	                            ariaLabelPause: copy.pause,
	                            onClick: onPlayPauseClick
	                        }, video));
	                    case 'Fullscreen':
	                        return _react2.default.createElement(_Fullscreen2.default, (0, _extends3.default)({
	                            key: i,
	                            ariaLabel: copy.fullscreen,
	                            onClick: onFullscreenClick
	                        }, video));
	                    case 'Time':
	                        return _react2.default.createElement(_Time2.default, (0, _extends3.default)({
	                            key: i
	                        }, video));
	                    case 'Volume':
	                        return _react2.default.createElement(_Volume2.default, (0, _extends3.default)({
	                            key: i,
	                            onClick: onVolumeClick,
	                            onChange: onVolumeChange,
	                            ariaLabelMute: copy.mute,
	                            ariaLabelUnmute: copy.unmute,
	                            ariaLabelVolume: copy.volume
	                        }, video));
	                    case 'Captions':
	                        return video.textTracks && video.textTracks.length ? _react2.default.createElement(_Captions2.default, (0, _extends3.default)({
	                            key: i,
	                            onClick: onCaptionsClick,
	                            ariaLabel: copy.captions,
	                            onItemClick: onCaptionsItemClick
	                        }, video)) : null;
	                    default:
	                        return null;
	                }
	            })
	        ) : null
	    );
	};

	var controls = ['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen', 'Captions'];

	DefaultPlayer.defaultProps = {
	    copy: _copy2.default,
	    controls: controls,
	    video: {}
	};

	DefaultPlayer.propTypes = {
	    copy: _propTypes2.default.object.isRequired,
	    controls: _propTypes2.default.arrayOf(_propTypes2.default.oneOf(controls)),
	    video: _propTypes2.default.object.isRequired
	};

	var connectedPlayer = (0, _video2.default)(DefaultPlayer, function (_ref2) {
	    var networkState = _ref2.networkState,
	        readyState = _ref2.readyState,
	        error = _ref2.error,
	        restState = (0, _objectWithoutProperties3.default)(_ref2, ['networkState', 'readyState', 'error']);
	    return {
	        video: (0, _extends3.default)({
	            readyState: readyState,
	            networkState: networkState,
	            error: error || networkState === 3,
	            // TODO: This is not pretty. Doing device detection to remove
	            // spinner on iOS devices for a quick and dirty win. We should see if
	            // we can use the same readyState check safely across all browsers.
	            loading: readyState < (/iPad|iPhone|iPod/.test(navigator.userAgent) ? 1 : 4),
	            percentagePlayed: (0, _api.getPercentagePlayed)(restState),
	            percentageBuffered: (0, _api.getPercentageBuffered)(restState)
	        }, restState)
	    };
	}, function (videoEl, state) {
	    return {
	        onFullscreenClick: function onFullscreenClick() {
	            return (0, _api.toggleFullscreen)(videoEl.parentElement);
	        },
	        onVolumeClick: function onVolumeClick() {
	            return (0, _api.toggleMute)(videoEl, state);
	        },
	        onCaptionsClick: function onCaptionsClick() {
	            return (0, _api.toggleTracks)(state);
	        },
	        onPlayPauseClick: function onPlayPauseClick() {
	            return (0, _api.togglePause)(videoEl, state);
	        },
	        onCaptionsItemClick: function onCaptionsItemClick(track) {
	            return (0, _api.showTrack)(state, track);
	        },
	        onVolumeChange: function onVolumeChange(e) {
	            return (0, _api.setVolume)(videoEl, state, e.target.value);
	        },
	        onSeekChange: function onSeekChange(e) {
	            return (0, _api.setCurrentTime)(videoEl, state, e.target.value * state.duration / 100);
	        }
	    };
	});

	exports.default = connectedPlayer;
	exports.DefaultPlayer = DefaultPlayer;
	exports.Time = _Time2.default;
	exports.Seek = _Seek2.default;
	exports.Volume = _Volume2.default;
	exports.Captions = _Captions2.default;
	exports.PlayPause = _PlayPause2.default;
	exports.Fullscreen = _Fullscreen2.default;
	exports.Overlay = _Overlay2.default;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var copy = {
	    play: 'Play video',
	    pause: 'Pause video',
	    mute: 'Mute video',
	    unmute: 'Unmute video',
	    volume: 'Change volume',
	    fullscreen: 'View video fullscreen',
	    seek: 'Seek video',
	    captions: 'Toggle captions'
	};

	exports.default = copy;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"component":"rh5v-DefaultPlayer_component","video":"rh5v-DefaultPlayer_video","controls":"rh5v-DefaultPlayer_controls","seek":"rh5v-DefaultPlayer_seek"};

/***/ }),
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _Time = __webpack_require__(116);

	var _Time2 = _interopRequireDefault(_Time);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var formatTime = function formatTime(seconds) {
	    var date = new Date(Date.UTC(1970, 1, 1, 0, 0, 0, 0));
	    seconds = isNaN(seconds) || seconds > 86400 ? 0 : Math.floor(seconds);
	    date.setSeconds(seconds);
	    var duration = date.toISOString().substr(11, 8).replace(/^0{1,2}:?0{0,1}/, '');
	    return duration;
	};

	exports.default = function (_ref) {
	    var currentTime = _ref.currentTime,
	        duration = _ref.duration,
	        className = _ref.className;

	    return _react2.default.createElement(
	        'div',
	        { className: [_Time2.default.component, className].join(' ') },
	        _react2.default.createElement(
	            'span',
	            { className: _Time2.default.current },
	            formatTime(currentTime)
	        ),
	        '/',
	        _react2.default.createElement(
	            'span',
	            { className: _Time2.default.duration },
	            formatTime(duration)
	        )
	    );
	};

/***/ }),
/* 116 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"component":"rh5v-Time_component","current":"rh5v-Time_current","duration":"rh5v-Time_duration"};

/***/ }),
/* 117 */,
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _Seek = __webpack_require__(119);

	var _Seek2 = _interopRequireDefault(_Seek);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var onChange = _ref.onChange,
	        percentagePlayed = _ref.percentagePlayed,
	        percentageBuffered = _ref.percentageBuffered,
	        className = _ref.className,
	        ariaLabel = _ref.ariaLabel;

	    return _react2.default.createElement(
	        'div',
	        { className: [_Seek2.default.component, className].join(' ') },
	        _react2.default.createElement(
	            'div',
	            { className: _Seek2.default.track },
	            _react2.default.createElement('div', {
	                className: _Seek2.default.buffer,
	                style: {
	                    width: (percentageBuffered || 0) + '%'
	                } }),
	            _react2.default.createElement('div', {
	                className: _Seek2.default.fill,
	                style: {
	                    width: (percentagePlayed || 0) + '%'
	                } }),
	            _react2.default.createElement('input', {
	                min: '0',
	                step: 1,
	                max: '100',
	                type: 'range',
	                orient: 'horizontal',
	                onChange: onChange,
	                'aria-label': ariaLabel,
	                className: _Seek2.default.input,
	                value: percentagePlayed || 0 })
	        )
	    );
	};

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"component":"rh5v-Seek_component","track":"rh5v-Seek_track","buffer":"rh5v-Seek_buffer","fill":"rh5v-Seek_fill","input":"rh5v-Seek_input"};

/***/ }),
/* 120 */,
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _Volume = __webpack_require__(122);

	var _Volume2 = _interopRequireDefault(_Volume);

	var _volume_off = __webpack_require__(124);

	var _volume_off2 = _interopRequireDefault(_volume_off);

	var _volume_up = __webpack_require__(125);

	var _volume_up2 = _interopRequireDefault(_volume_up);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var onChange = _ref.onChange,
	        onClick = _ref.onClick,
	        volume = _ref.volume,
	        muted = _ref.muted,
	        className = _ref.className,
	        ariaLabelMute = _ref.ariaLabelMute,
	        ariaLabelUnmute = _ref.ariaLabelUnmute,
	        ariaLabelVolume = _ref.ariaLabelVolume;

	    var volumeValue = muted || !volume ? 0 : +volume;
	    var isSilent = muted || volume <= 0;
	    return _react2.default.createElement(
	        'div',
	        { className: [_Volume2.default.component, className].join(' ') },
	        _react2.default.createElement(
	            'button',
	            {
	                'aria-label': isSilent ? ariaLabelUnmute : ariaLabelMute,
	                className: _Volume2.default.button,
	                onClick: onClick,
	                type: 'button' },
	            isSilent ? _react2.default.createElement(_volume_off2.default, {
	                height: 20,
	                width: 20,
	                className: _Volume2.default.icon,
	                fill: '#fff' }) : _react2.default.createElement(_volume_up2.default, {
	                height: 20,
	                width: 20,
	                className: _Volume2.default.icon,
	                fill: '#fff' })
	        ),
	        _react2.default.createElement(
	            'div',
	            { className: _Volume2.default.slider },
	            _react2.default.createElement(
	                'div',
	                { className: _Volume2.default.track },
	                _react2.default.createElement('div', {
	                    className: _Volume2.default.fill,
	                    style: {
	                        height: volumeValue * 100 + '%'
	                    } }),
	                _react2.default.createElement('input', {
	                    min: '0',
	                    step: 0.1,
	                    max: '1',
	                    type: 'range',
	                    orient: 'vertical',
	                    onChange: onChange,
	                    'aria-label': ariaLabelVolume,
	                    className: _Volume2.default.input,
	                    value: volumeValue })
	            )
	        )
	    );
	};

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"component":"rh5v-Volume_component","button":"rh5v-Volume_button","icon":"rh5v-Volume_icon","slider":"rh5v-Volume_slider","track":"rh5v-Volume_track","fill":"rh5v-Volume_fill","input":"rh5v-Volume_input"};

/***/ }),
/* 123 */,
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(88);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SVG = function (_React$Component) {
	  (0, _inherits3.default)(SVG, _React$Component);

	  function SVG() {
	    (0, _classCallCheck3.default)(this, SVG);
	    return (0, _possibleConstructorReturn3.default)(this, (SVG.__proto__ || (0, _getPrototypeOf2.default)(SVG)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(SVG, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "svg",
	        (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
	        _react2.default.createElement("path", { d: "M12 3.984v4.219L9.891 6.094zM4.266 3L21 19.734 19.734 21l-2.063-2.063c-1.078.844-2.297 1.5-3.656 1.828v-2.063c.844-.234 1.594-.656 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016H2.999v-6h4.734L2.999 4.264zm14.718 9c0-3.188-2.063-5.859-4.969-6.703V3.234c4.031.891 6.984 4.5 6.984 8.766a8.87 8.87 0 0 1-1.031 4.172l-1.5-1.547A6.901 6.901 0 0 0 18.984 12zM16.5 12c0 .234 0 .422-.047.609l-2.438-2.438V7.968c1.5.75 2.484 2.25 2.484 4.031z" })
	      );
	    }
	  }]);
	  return SVG;
	}(_react2.default.Component);

	exports.default = SVG;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(88);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SVG = function (_React$Component) {
	  (0, _inherits3.default)(SVG, _React$Component);

	  function SVG() {
	    (0, _classCallCheck3.default)(this, SVG);
	    return (0, _possibleConstructorReturn3.default)(this, (SVG.__proto__ || (0, _getPrototypeOf2.default)(SVG)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(SVG, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "svg",
	        (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
	        _react2.default.createElement("path", { d: "M14.016 3.234C18.047 4.125 21 7.734 21 12s-2.953 7.875-6.984 8.766v-2.063c2.906-.844 4.969-3.516 4.969-6.703s-2.063-5.859-4.969-6.703V3.234zM16.5 12a4.451 4.451 0 0 1-2.484 4.031V7.968c1.5.75 2.484 2.25 2.484 4.031zM3 9h3.984L12 3.984v16.031l-5.016-5.016H3v-6z" })
	      );
	    }
	  }]);
	  return SVG;
	}(_react2.default.Component);

	exports.default = SVG;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(97);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _Captions = __webpack_require__(127);

	var _Captions2 = _interopRequireDefault(_Captions);

	var _closed_caption = __webpack_require__(129);

	var _closed_caption2 = _interopRequireDefault(_closed_caption);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var textTracks = _ref.textTracks,
	        onClick = _ref.onClick,
	        onItemClick = _ref.onItemClick,
	        className = _ref.className,
	        ariaLabel = _ref.ariaLabel;

	    return _react2.default.createElement(
	        'div',
	        { className: [_Captions2.default.component, className].join(' ') },
	        _react2.default.createElement(
	            'button',
	            {
	                type: 'button',
	                onClick: onClick,
	                'aria-label': ariaLabel,
	                className: _Captions2.default.button },
	            _react2.default.createElement(_closed_caption2.default, {
	                className: _Captions2.default.icon,
	                fill: '#fff' })
	        ),
	        _react2.default.createElement(
	            'ul',
	            { className: _Captions2.default.trackList },
	            textTracks && [].concat((0, _toConsumableArray3.default)(textTracks)).map(function (track) {
	                return _react2.default.createElement(
	                    'li',
	                    {
	                        key: track.language,
	                        className: track.mode === track.SHOWING || track.mode == 'showing' ? _Captions2.default.activeTrackItem : _Captions2.default.trackItem,
	                        onClick: onItemClick.bind(undefined, track) },
	                    track.label
	                );
	            })
	        )
	    );
	};

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"component":"rh5v-Captions_component","button":"rh5v-Captions_button","icon":"rh5v-Captions_icon","trackList":"rh5v-Captions_trackList","trackItem":"rh5v-Captions_trackItem","activeTrackItem":"rh5v-Captions_activeTrackItem rh5v-Captions_trackItem"};

/***/ }),
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(88);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SVG = function (_React$Component) {
	  (0, _inherits3.default)(SVG, _React$Component);

	  function SVG() {
	    (0, _classCallCheck3.default)(this, SVG);
	    return (0, _possibleConstructorReturn3.default)(this, (SVG.__proto__ || (0, _getPrototypeOf2.default)(SVG)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(SVG, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "svg",
	        (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
	        _react2.default.createElement("path", { d: "M18 11.016V9.985a.96.96 0 0 0-.984-.984h-3c-.563 0-1.031.422-1.031.984v4.031c0 .563.469.984 1.031.984h3a.96.96 0 0 0 .984-.984v-1.031h-1.5v.516h-2.016v-3H16.5v.516H18zm-6.984 0V9.985c0-.563-.469-.984-1.031-.984h-3a.96.96 0 0 0-.984.984v4.031a.96.96 0 0 0 .984.984h3c.563 0 1.031-.422 1.031-.984v-1.031h-1.5v.516H7.5v-3h2.016v.516h1.5zm7.968-7.032C20.062 3.984 21 4.922 21 6v12c0 1.078-.938 2.016-2.016 2.016H5.015c-1.125 0-2.016-.938-2.016-2.016V6c0-1.078.891-2.016 2.016-2.016h13.969z" })
	      );
	    }
	  }]);
	  return SVG;
	}(_react2.default.Component);

	exports.default = SVG;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _PlayPause = __webpack_require__(131);

	var _PlayPause2 = _interopRequireDefault(_PlayPause);

	var _play_arrow = __webpack_require__(133);

	var _play_arrow2 = _interopRequireDefault(_play_arrow);

	var _pause = __webpack_require__(134);

	var _pause2 = _interopRequireDefault(_pause);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var onClick = _ref.onClick,
	        paused = _ref.paused,
	        className = _ref.className,
	        ariaLabelPlay = _ref.ariaLabelPlay,
	        ariaLabelPause = _ref.ariaLabelPause;

	    return _react2.default.createElement(
	        'div',
	        { className: [_PlayPause2.default.component, className].join(' ') },
	        _react2.default.createElement(
	            'button',
	            {
	                className: _PlayPause2.default.button,
	                onClick: onClick,
	                'aria-label': paused ? ariaLabelPlay : ariaLabelPause,
	                type: 'button' },
	            paused ? _react2.default.createElement(_play_arrow2.default, {
	                className: _PlayPause2.default.icon,
	                fill: '#fff' }) : _react2.default.createElement(_pause2.default, {
	                className: _PlayPause2.default.icon,
	                fill: '#fff' })
	        )
	    );
	};

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"component":"rh5v-PlayPause_component","button":"rh5v-PlayPause_button","icon":"rh5v-PlayPause_icon"};

/***/ }),
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(88);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SVG = function (_React$Component) {
	  (0, _inherits3.default)(SVG, _React$Component);

	  function SVG() {
	    (0, _classCallCheck3.default)(this, SVG);
	    return (0, _possibleConstructorReturn3.default)(this, (SVG.__proto__ || (0, _getPrototypeOf2.default)(SVG)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(SVG, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "svg",
	        (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
	        _react2.default.createElement("path", { d: "M8.016 5.016L18.985 12 8.016 18.984V5.015z" })
	      );
	    }
	  }]);
	  return SVG;
	}(_react2.default.Component);

	exports.default = SVG;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(88);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SVG = function (_React$Component) {
	  (0, _inherits3.default)(SVG, _React$Component);

	  function SVG() {
	    (0, _classCallCheck3.default)(this, SVG);
	    return (0, _possibleConstructorReturn3.default)(this, (SVG.__proto__ || (0, _getPrototypeOf2.default)(SVG)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(SVG, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "svg",
	        (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
	        _react2.default.createElement("path", { d: "M14.016 5.016H18v13.969h-3.984V5.016zM6 18.984V5.015h3.984v13.969H6z" })
	      );
	    }
	  }]);
	  return SVG;
	}(_react2.default.Component);

	exports.default = SVG;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _Fullscreen = __webpack_require__(136);

	var _Fullscreen2 = _interopRequireDefault(_Fullscreen);

	var _fullscreen = __webpack_require__(138);

	var _fullscreen2 = _interopRequireDefault(_fullscreen);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var onClick = _ref.onClick,
	        className = _ref.className,
	        ariaLabel = _ref.ariaLabel;

	    return _react2.default.createElement(
	        'div',
	        { className: [_Fullscreen2.default.component, className].join(' ') },
	        _react2.default.createElement(
	            'button',
	            {
	                type: 'button',
	                onClick: onClick,
	                'aria-label': ariaLabel,
	                className: _Fullscreen2.default.button },
	            _react2.default.createElement(_fullscreen2.default, {
	                fill: '#fff',
	                className: _Fullscreen2.default.icon })
	        )
	    );
	};

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"component":"rh5v-Fullscreen_component","button":"rh5v-Fullscreen_button","icon":"rh5v-Fullscreen_icon"};

/***/ }),
/* 137 */,
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(88);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SVG = function (_React$Component) {
	  (0, _inherits3.default)(SVG, _React$Component);

	  function SVG() {
	    (0, _classCallCheck3.default)(this, SVG);
	    return (0, _possibleConstructorReturn3.default)(this, (SVG.__proto__ || (0, _getPrototypeOf2.default)(SVG)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(SVG, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "svg",
	        (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
	        _react2.default.createElement("path", { d: "M14.016 5.016h4.969v4.969h-1.969v-3h-3V5.016zm3 12v-3h1.969v4.969h-4.969v-1.969h3zm-12-7.032V5.015h4.969v1.969h-3v3H5.016zm1.968 4.032v3h3v1.969H5.015v-4.969h1.969z" })
	      );
	    }
	  }]);
	  return SVG;
	}(_react2.default.Component);

	exports.default = SVG;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	var _Overlay = __webpack_require__(140);

	var _Overlay2 = _interopRequireDefault(_Overlay);

	var _play_arrow = __webpack_require__(133);

	var _play_arrow2 = _interopRequireDefault(_play_arrow);

	var _spin = __webpack_require__(142);

	var _spin2 = _interopRequireDefault(_spin);

	var _report = __webpack_require__(143);

	var _report2 = _interopRequireDefault(_report);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Overlay = function (_Component) {
	    (0, _inherits3.default)(Overlay, _Component);

	    function Overlay() {
	        (0, _classCallCheck3.default)(this, Overlay);
	        return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || (0, _getPrototypeOf2.default)(Overlay)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Overlay, [{
	        key: 'renderContent',
	        value: function renderContent() {
	            var _props = this.props,
	                error = _props.error,
	                paused = _props.paused,
	                loading = _props.loading;

	            var iconProps = {
	                className: _Overlay2.default.icon,
	                height: 40,
	                width: 40,
	                fill: '#fff'
	            };
	            if (error) {
	                return _react2.default.createElement(
	                    'span',
	                    { className: _Overlay2.default.inner },
	                    _react2.default.createElement(_report2.default, iconProps)
	                );
	            } else if (loading) {
	                return _react2.default.createElement(
	                    'span',
	                    { className: _Overlay2.default.inner },
	                    _react2.default.createElement(_spin2.default, iconProps)
	                );
	            } else if (paused) {
	                return _react2.default.createElement(
	                    'span',
	                    { className: _Overlay2.default.inner },
	                    _react2.default.createElement(_play_arrow2.default, iconProps)
	                );
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props,
	                className = _props2.className,
	                onClick = _props2.onClick;

	            return _react2.default.createElement(
	                'div',
	                { className: [_Overlay2.default.component, className].join(' '),
	                    onClick: onClick },
	                this.renderContent()
	            );
	        }
	    }]);
	    return Overlay;
	}(_react.Component);

	exports.default = Overlay;

/***/ }),
/* 140 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"component":"rh5v-Overlay_component","inner":"rh5v-Overlay_inner","icon":"rh5v-Overlay_icon"};

/***/ }),
/* 141 */,
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(88);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SVG = function (_React$Component) {
	  (0, _inherits3.default)(SVG, _React$Component);

	  function SVG() {
	    (0, _classCallCheck3.default)(this, SVG);
	    return (0, _possibleConstructorReturn3.default)(this, (SVG.__proto__ || (0, _getPrototypeOf2.default)(SVG)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(SVG, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "svg",
	        (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", className: "uil-ring-alt" }, this.props),
	        _react2.default.createElement("path", { fill: "none", className: "bk", d: "M0 0h100v100H0z" }),
	        _react2.default.createElement("circle", { cx: "50", cy: "50", r: "40", stroke: "#757575", fill: "none", strokeWidth: "10", strokeLinecap: "round" }),
	        _react2.default.createElement(
	          "circle",
	          { cx: "50", cy: "50", r: "40", stroke: "#fff", fill: "none", strokeWidth: "6", strokeLinecap: "round" },
	          _react2.default.createElement("animate", { attributeName: "stroke-dashoffset", dur: "2s", repeatCount: "indefinite", from: "0", to: "502" }),
	          _react2.default.createElement("animate", { attributeName: "stroke-dasharray", dur: "2s", repeatCount: "indefinite", values: "150.6 100.4;1 250;150.6 100.4" })
	        )
	      );
	    }
	  }]);
	  return SVG;
	}(_react2.default.Component);

	exports.default = SVG;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(88);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(3);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(29);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(30);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(34);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(80);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(93);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SVG = function (_React$Component) {
	  (0, _inherits3.default)(SVG, _React$Component);

	  function SVG() {
	    (0, _classCallCheck3.default)(this, SVG);
	    return (0, _possibleConstructorReturn3.default)(this, (SVG.__proto__ || (0, _getPrototypeOf2.default)(SVG)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(SVG, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "svg",
	        (0, _extends3.default)({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" }, this.props),
	        _react2.default.createElement("path", { d: "M12.984 12.984v-6h-1.969v6h1.969zM12 17.297c.703 0 1.313-.609 1.313-1.313s-.609-1.266-1.313-1.266-1.313.563-1.313 1.266.609 1.313 1.313 1.313zM15.75 3L21 8.25v7.5L15.75 21h-7.5L3 15.75v-7.5L8.25 3h7.5z" })
	      );
	    }
	  }]);
	  return SVG;
	}(_react2.default.Component);

	exports.default = SVG;

/***/ })
/******/ ]);
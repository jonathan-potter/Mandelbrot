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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _javascriptConfig = __webpack_require__(1);
	
	var _javascriptEquationsFractal = __webpack_require__(59);
	
	var _javascriptEquationsFractal2 = _interopRequireDefault(_javascriptEquationsFractal);
	
	var _javascriptRenderer = __webpack_require__(60);
	
	var _javascriptRenderer2 = _interopRequireDefault(_javascriptRenderer);
	
	var _hashSubscriber = __webpack_require__(64);
	
	var _hashSubscriber2 = _interopRequireDefault(_hashSubscriber);
	
	__webpack_require__(65);
	
	__webpack_require__(66);
	
	__webpack_require__(67);
	
	__webpack_require__(68);
	
	var canvas = document.getElementById('mandelbrot');
	
	var renderer = _javascriptRenderer2['default'].create({
	  canvas: canvas,
	  equation: _javascriptEquationsFractal.Mandelbrot,
	  getConfig: _javascriptConfig.getConfig,
	  setConfig: _javascriptConfig.setConfig
	});
	
	_hashSubscriber2['default'].subscribe(['iterations'], function () {
	  _javascriptEquationsFractal2['default'].MAX_ITERATIONS = (0, _javascriptConfig.getConfig)().iterations;
	  renderer.render();
	});
	
	_hashSubscriber2['default'].subscribe(['super_samples', 'x_min', 'x_max', 'y_min', 'y_max'], function () {
	  renderer.render();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashObjectAssign = __webpack_require__(2);
	
	var _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);
	
	var _javascriptToolsParseLocationHash = __webpack_require__(26);
	
	var _javascriptToolsParseLocationHash2 = _interopRequireDefault(_javascriptToolsParseLocationHash);
	
	var _javascriptToolsSetLocationHash = __webpack_require__(27);
	
	var _javascriptToolsSetLocationHash2 = _interopRequireDefault(_javascriptToolsSetLocationHash);
	
	var DEFAULT_CONFIG = {
	  iterations: 256,
	  super_samples: 1,
	  x_min: -2.0,
	  x_max: 0.5,
	  y_min: -1.25,
	  y_max: 1.25,
	  render_fps: 10.0
	};
	
	var Config = {
	  currentConfig: {},
	  getConfig: function getConfig() {
	    var locationHash = arguments.length <= 0 || arguments[0] === undefined ? (0, _javascriptToolsParseLocationHash2['default'])() : arguments[0];
	
	    Config.currentConfig = (0, _lodashObjectAssign2['default'])({}, DEFAULT_CONFIG, locationHash);
	
	    return Config.currentConfig;
	  },
	  setConfig: function setConfig(configChanges) {
	    var newConfig = (0, _lodashObjectAssign2['default'])({}, Config.getConfig(), configChanges);
	
	    (0, _javascriptToolsSetLocationHash2['default'])(newConfig);
	  }
	};
	
	exports['default'] = Config;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var assignWith = __webpack_require__(3),
	    baseAssign = __webpack_require__(19),
	    createAssigner = __webpack_require__(21);
	
	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it's invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});
	
	module.exports = assign;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(4);
	
	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);
	
	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}
	
	module.exports = assignWith;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    isArrayLike = __webpack_require__(10),
	    isObject = __webpack_require__(8),
	    shimKeys = __webpack_require__(14);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(6);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(7),
	    isObjectLike = __webpack_require__(9);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(11),
	    isLength = __webpack_require__(13);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(12);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(15),
	    isArray = __webpack_require__(16),
	    isIndex = __webpack_require__(17),
	    isLength = __webpack_require__(13),
	    keysIn = __webpack_require__(18);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(10),
	    isObjectLike = __webpack_require__(9);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(5),
	    isLength = __webpack_require__(13),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(15),
	    isArray = __webpack_require__(16),
	    isIndex = __webpack_require__(17),
	    isLength = __webpack_require__(13),
	    isObject = __webpack_require__(8);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(20),
	    keys = __webpack_require__(4);
	
	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(22),
	    isIterateeCall = __webpack_require__(24),
	    restParam = __webpack_require__(25);
	
	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;
	
	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(23);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(10),
	    isIndex = __webpack_require__(17),
	    isObject = __webpack_require__(8);
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	exports['default'] = function () {
	  var query = arguments.length <= 0 || arguments[0] === undefined ? window.location.hash : arguments[0];
	
	  var keyValuePairs;
	  if (query.length > 0) {
	    keyValuePairs = query.slice(1).split('&');
	  } else {
	    keyValuePairs = [];
	  }
	
	  return keyValuePairs.reduce(function (hash, keyValuePair) {
	    var _keyValuePair$split = keyValuePair.split('=');
	
	    var _keyValuePair$split2 = _slicedToArray(_keyValuePair$split, 2);
	
	    var key = _keyValuePair$split2[0];
	    var value = _keyValuePair$split2[1];
	
	    if (value && isNaN(value)) {
	      hash[key] = value;
	    } else {
	      hash[key] = parseFloat(value);
	    }
	
	    return hash;
	  }, {});
	};
	
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashCollectionMap = __webpack_require__(28);
	
	var _lodashCollectionMap2 = _interopRequireDefault(_lodashCollectionMap);
	
	exports['default'] = function (query) {
	  var keyValuePairs = (0, _lodashCollectionMap2['default'])(query, function (value, key) {
	    return [key, value].join('=');
	  });
	
	  window.location.replace('#' + keyValuePairs.join('&'));
	};
	
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(29),
	    baseCallback = __webpack_require__(30),
	    baseMap = __webpack_require__(53),
	    isArray = __webpack_require__(16);
	
	/**
	 * Creates an array of values by running each element in `collection` through
	 * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	 * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	 * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	 * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	 * `sum`, `uniq`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @alias collect
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function timesThree(n) {
	 *   return n * 3;
	 * }
	 *
	 * _.map([1, 2], timesThree);
	 * // => [3, 6]
	 *
	 * _.map({ 'a': 1, 'b': 2 }, timesThree);
	 * // => [3, 6] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // using the `_.property` callback shorthand
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee, thisArg) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  iteratee = baseCallback(iteratee, thisArg, 3);
	  return func(collection, iteratee);
	}
	
	module.exports = map;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(31),
	    baseMatchesProperty = __webpack_require__(44),
	    bindCallback = __webpack_require__(22),
	    identity = __webpack_require__(23),
	    property = __webpack_require__(51);
	
	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}
	
	module.exports = baseCallback;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(32),
	    getMatchData = __webpack_require__(41),
	    toObject = __webpack_require__(40);
	
	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];
	
	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || (key in toObject(object)));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(33),
	    toObject = __webpack_require__(40);
	
	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(34),
	    isObject = __webpack_require__(8),
	    isObjectLike = __webpack_require__(9);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(35),
	    equalByTag = __webpack_require__(37),
	    equalObjects = __webpack_require__(38),
	    isArray = __webpack_require__(16),
	    isTypedArray = __webpack_require__(39);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(36);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 37 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(4);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(13),
	    isObjectLike = __webpack_require__(9);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(8);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(42),
	    pairs = __webpack_require__(43);
	
	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(8);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(4),
	    toObject = __webpack_require__(40);
	
	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);
	
	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}
	
	module.exports = pairs;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(45),
	    baseIsEqual = __webpack_require__(33),
	    baseSlice = __webpack_require__(46),
	    isArray = __webpack_require__(16),
	    isKey = __webpack_require__(47),
	    isStrictComparable = __webpack_require__(42),
	    last = __webpack_require__(48),
	    toObject = __webpack_require__(40),
	    toPath = __webpack_require__(49);
	
	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');
	
	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(40);
	
	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(16),
	    toObject = __webpack_require__(40);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}
	
	module.exports = isKey;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(50),
	    isArray = __webpack_require__(16);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = toPath;


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}
	
	module.exports = baseToString;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(12),
	    basePropertyDeep = __webpack_require__(52),
	    isKey = __webpack_require__(47);
	
	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(45),
	    toPath = __webpack_require__(49);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(54),
	    isArrayLike = __webpack_require__(10);
	
	/**
	 * The base implementation of `_.map` without support for callback shorthands
	 * and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];
	
	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}
	
	module.exports = baseMap;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(55),
	    createBaseEach = __webpack_require__(58);
	
	/**
	 * The base implementation of `_.forEach` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(56),
	    keys = __webpack_require__(4);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(57);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(40);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(11),
	    isLength = __webpack_require__(13),
	    toObject = __webpack_require__(40);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    var length = collection ? getLength(collection) : 0;
	    if (!isLength(length)) {
	      return eachFunc(collection, iteratee);
	    }
	    var index = fromRight ? length : -1,
	        iterable = toObject(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = Fractal;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _javascriptConfig = __webpack_require__(1);
	
	var _javascriptConfig2 = _interopRequireDefault(_javascriptConfig);
	
	function Fractal(_x, _x2) {
	  var _again = true;
	
	  _function: while (_again) {
	    var pixel = _x,
	        iteration = _x2;
	    c = z = real = imaginary = undefined;
	    _again = false;
	
	    if (iteration >= Fractal.MAX_ITERATIONS) {
	      return 0;
	    }
	    /* the base equation for the mandelbrot set is  */
	    /* f(z) = z^2 + c */
	
	    var c = pixel.c;
	    var z = pixel.z;
	    var real = z.real * z.real - z.imaginary * z.imaginary + c.real;
	    var imaginary = 2 * z.real * z.imaginary + c.imaginary;
	
	    pixel.z.real = real;
	    pixel.z.imaginary = imaginary;
	
	    if (real * real + imaginary * imaginary > 4) {
	      return iteration || 0;
	    }
	
	    _x = pixel;
	    _x2 = ++iteration || 1;
	    _again = true;
	    continue _function;
	  }
	}
	
	Fractal.MAX_ITERATIONS = _javascriptConfig2['default'].getConfig().iterations;
	
	function Mandelbrot(x, y) {
	  return colorize(Fractal({
	    c: { real: x, imaginary: y },
	    z: { real: 0, imaginary: 0 }
	  }));
	}
	
	function Julia(x, y) {
	  return colorize(Fractal({
	    c: { real: -0.835, imaginary: 0.2321 },
	    z: { real: x, imaginary: y }
	  }));
	}
	
	function colorize(iterations) {
	  return 256 / Fractal.MAX_ITERATIONS * iterations;
	}
	
	exports.Mandelbrot = Mandelbrot;
	exports.Julia = Julia;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _application = __webpack_require__(61);
	
	var _application2 = _interopRequireDefault(_application);

	exports['default'] = _application2['default'];
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _renderer = __webpack_require__(62);
	
	var _renderer2 = _interopRequireDefault(_renderer);
	
	var _viewport = __webpack_require__(63);
	
	var _viewport2 = _interopRequireDefault(_viewport);
	
	var _lodashObjectAssign = __webpack_require__(2);
	
	var _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);
	
	var APPLICATION_PROTOTYPE = {
	  status: { activelyRendering: false },
	  init: function init(_ref) {
	    var canvas = _ref.canvas;
	    var getConfig = _ref.getConfig;
	    var equation = _ref.equation;
	    var setConfig = _ref.setConfig;
	
	    (0, _lodashObjectAssign2['default'])(this, { canvas: canvas, getConfig: getConfig, equation: equation, setConfig: setConfig });
	
	    this.viewport = _viewport2['default'].create({
	      applicationStatus: this.status,
	      canvas: this.canvas,
	      getConfig: this.getConfig,
	      setConfig: this.setConfig
	    });
	
	    this.renderer = _renderer2['default'].create({
	      applicationStatus: this.status,
	      canvas: this.canvas,
	      getConfig: this.getConfig,
	      equation: this.equation,
	      viewport: this.viewport
	    });
	
	    this.render();
	  },
	  render: function render() {
	    this.renderer.render({});
	  }
	};
	
	exports['default'] = {
	  create: function create(_ref2) {
	    var canvas = _ref2.canvas;
	    var getConfig = _ref2.getConfig;
	    var equation = _ref2.equation;
	    var setConfig = _ref2.setConfig;
	
	    var application = Object.create(APPLICATION_PROTOTYPE);
	
	    application.init({ canvas: canvas, getConfig: getConfig, equation: equation, setConfig: setConfig });
	
	    return application;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashObjectAssign = __webpack_require__(2);
	
	var _lodashObjectAssign2 = _interopRequireDefault(_lodashObjectAssign);
	
	/* these values are constant for a particular render */
	var CONFIG = undefined,
	    SUPER_SAMPLES = undefined,
	    DX = undefined,
	    DY = undefined,
	    TOP_LEFT = undefined;
	var RENDERER_PROTOTYPE = {
	  init: function init(_ref) {
	    var applicationStatus = _ref.applicationStatus;
	    var canvas = _ref.canvas;
	    var equation = _ref.equation;
	    var getConfig = _ref.getConfig;
	    var viewport = _ref.viewport;
	
	    (0, _lodashObjectAssign2['default'])(this, { applicationStatus: applicationStatus, canvas: canvas, equation: equation, getConfig: getConfig, viewport: viewport });
	
	    this.context = this.canvas.getContext("2d");
	  },
	  render: function render() {
	    var _this = this;
	
	    CONFIG = this.getConfig();
	    SUPER_SAMPLES = CONFIG.super_samples;
	
	    this.viewport.update();
	    DX = this.viewport.delta().x;
	    DY = this.viewport.delta().y;
	    TOP_LEFT = this.viewport.topLeft();
	
	    /* eslint-disable no-console */
	    new Promise(function (resolve) {
	      _this.applicationStatus.activelyRendering = true;
	      console.time('render timer');
	      requestAnimationFrame(_this.renderRows.bind(_this, _this.equation, 0, resolve));
	    }).then(function () {
	      _this.applicationStatus.activelyRendering = false;
	      console.timeEnd('render timer');
	    });
	    /* eslint-enable no-console */
	  },
	  renderRows: function renderRows(equation, y_index, resolve) {
	    var timestamp = new Date().getTime();
	
	    while (y_index < this.canvas.height && new Date().getTime() - timestamp < 1000.0 / CONFIG.render_fps) {
	      this.renderRow(equation, y_index++);
	    }
	
	    if (y_index < this.canvas.height) {
	      requestAnimationFrame(this.renderRows.bind(this, equation, y_index, resolve));
	    } else {
	      requestAnimationFrame(resolve);
	    }
	  },
	  renderRow: function renderRow(equation, y_index) {
	    var imageData = new ImageData(this.canvas.width, 1);
	
	    for (var x_index = 0; x_index < this.canvas.width; x_index++) {
	      var value = this.renderPixel(x_index, y_index, equation);
	
	      var dataIndex = x_index * 4;
	      imageData.data[dataIndex + 0] = 255;
	      imageData.data[dataIndex + 1] = 255;
	      imageData.data[dataIndex + 2] = 255;
	      imageData.data[dataIndex + 3] = value;
	    }
	
	    this.context.putImageData(imageData, 0, y_index);
	  },
	  renderPixel: function renderPixel(x_index, y_index, equation) {
	    var superSampledValue = 0;
	
	    for (var sample = 0; sample < SUPER_SAMPLES; sample++) {
	      var x = TOP_LEFT.x + (x_index + Math.random()) * DX;
	      var y = TOP_LEFT.y + (y_index + Math.random()) * DY;
	
	      superSampledValue += equation(x, y);
	    }
	
	    return superSampledValue / SUPER_SAMPLES;
	  }
	};
	
	exports['default'] = {
	  create: function create(_ref2) {
	    var applicationStatus = _ref2.applicationStatus;
	    var canvas = _ref2.canvas;
	    var equation = _ref2.equation;
	    var getConfig = _ref2.getConfig;
	    var viewport = _ref2.viewport;
	
	    var renderer = Object.create(RENDERER_PROTOTYPE);
	
	    renderer.init({ applicationStatus: applicationStatus, canvas: canvas, equation: equation, getConfig: getConfig, viewport: viewport });
	
	    return renderer;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var HIGHLIGHT_COLOR = 'white';
	var ZOOM_SIZE = 0.1;
	
	var VIEWPORT_PROTOTYPE = {
	  update: function update() {
	    var currentConfig = this.getConfig();
	
	    this.setBounds({
	      x: { min: currentConfig.x_min, max: currentConfig.x_max },
	      y: { min: currentConfig.y_min, max: currentConfig.y_max }
	    });
	
	    this.growToAspectRatio();
	  },
	  init: function init(_ref) {
	    var applicationStatus = _ref.applicationStatus;
	    var canvas = _ref.canvas;
	    var getConfig = _ref.getConfig;
	    var setConfig = _ref.setConfig;
	
	    this.applicationStatus = applicationStatus;
	    this.getConfig = getConfig;
	    this.setConfig = setConfig;
	    this.bindToCanvas(canvas);
	  },
	  xBounds: { min: 0, max: 0 },
	  yBounds: { min: 0, max: 0 },
	  setBounds: function setBounds(bounds) {
	    this.xBounds = bounds.x;
	    this.yBounds = bounds.y;
	  },
	  locationHash: function locationHash() {
	    return {
	      x_min: this.xBounds.min,
	      x_max: this.xBounds.max,
	      y_min: this.yBounds.min,
	      y_max: this.yBounds.max
	    };
	  },
	  center: function center() {
	    return {
	      x: (this.xBounds.max + this.xBounds.min) / 2,
	      y: (this.yBounds.max + this.yBounds.min) / 2
	    };
	  },
	  range: function range() {
	    return {
	      x: this.xBounds.max - this.xBounds.min,
	      y: this.yBounds.max - this.yBounds.min
	    };
	  },
	  delta: function delta() {
	    return {
	      x: this.range().x / this.width,
	      y: this.range().y / this.height
	    };
	  },
	  topLeft: function topLeft() {
	    return {
	      x: this.xBounds.min,
	      y: this.yBounds.min
	    };
	  },
	  canvasSize: function canvasSize() {
	    return {
	      x: this.canvas.offsetWidth,
	      y: this.canvas.offsetHeight
	    };
	  },
	  canvasClickLocation: function canvasClickLocation(event) {
	    var currentCanvasSize = this.canvasSize();
	
	    return {
	      x: event.offsetX / currentCanvasSize.x * this.width,
	      y: event.offsetY / currentCanvasSize.y * this.height
	    };
	  },
	  cartesianClickLocation: function cartesianClickLocation(canvasClickLocation) {
	    var range = this.range();
	    var topLeft = this.topLeft();
	
	    return {
	      x: topLeft.x + range.x * canvasClickLocation.x / this.width,
	      y: topLeft.y + range.y * canvasClickLocation.y / this.height
	    };
	  },
	  zoomToLocation: function zoomToLocation(location) {
	    var range = this.range();
	
	    this.setBounds({
	      x: {
	        min: location.x - range.x * ZOOM_SIZE * 0.5,
	        max: location.x + range.x * ZOOM_SIZE * 0.5
	      },
	      y: {
	        min: location.y - range.y * ZOOM_SIZE * 0.5,
	        max: location.y + range.y * ZOOM_SIZE * 0.5
	      }
	    });
	
	    this.setConfig(this.locationHash());
	  },
	  bindToCanvas: function bindToCanvas(canvas) {
	    var _this = this;
	
	    this.canvas = canvas;
	    this.canvas.width = this.canvas.offsetWidth;
	    this.canvas.height = this.canvas.offsetHeight;
	
	    this.width = this.canvas.width;
	    this.height = this.canvas.height;
	
	    this.canvas.addEventListener('click', function (event) {
	      if (!_this.applicationStatus.activelyRendering) {
	        var canvasClickLocation = _this.canvasClickLocation(event);
	        var cartesianClickLocation = _this.cartesianClickLocation(canvasClickLocation);
	
	        _this.highlightZoomBox(canvasClickLocation);
	        _this.zoomToLocation(cartesianClickLocation);
	      }
	    });
	  },
	  highlightZoomBox: function highlightZoomBox(location) {
	    var context = this.canvas.getContext('2d');
	    var canvasSize = this.canvasSize();
	
	    context.beginPath();
	    context.lineWidth = 1;
	    context.strokeStyle = HIGHLIGHT_COLOR;
	
	    context.rect(location.x - canvasSize.x * ZOOM_SIZE * 0.5, location.y - canvasSize.y * ZOOM_SIZE * 0.5, canvasSize.x * ZOOM_SIZE, canvasSize.y * ZOOM_SIZE);
	
	    context.stroke();
	  },
	  growToAspectRatio: function growToAspectRatio() {
	    var canvasAspectRatio = this.canvas.width / this.canvas.height;
	
	    var range = this.range();
	    var center = this.center();
	    var currentAspectRatio = range.x / range.y;
	
	    var newDistanceFromCenter;
	    var xBounds = this.xBounds;
	    var yBounds = this.yBounds;
	    if (currentAspectRatio > canvasAspectRatio) {
	      /* height needs expansion */
	      var verticalEdgeToCenterDistance = yBounds.min - center.y;
	
	      newDistanceFromCenter = verticalEdgeToCenterDistance * (currentAspectRatio / canvasAspectRatio);
	      yBounds = {
	        min: center.y + newDistanceFromCenter,
	        max: center.y - newDistanceFromCenter
	      };
	    } else {
	      /* width needs expansion */
	      var horizontalEdgeToCenterDistance = xBounds.min - center.x;
	
	      newDistanceFromCenter = horizontalEdgeToCenterDistance * (canvasAspectRatio / currentAspectRatio);
	      xBounds = {
	        min: center.x + newDistanceFromCenter,
	        max: center.x - newDistanceFromCenter
	      };
	    }
	
	    this.setBounds({
	      x: xBounds,
	      y: yBounds
	    });
	  }
	};
	
	exports['default'] = {
	  create: function create(_ref2) {
	    var applicationStatus = _ref2.applicationStatus;
	    var canvas = _ref2.canvas;
	    var getConfig = _ref2.getConfig;
	    var setConfig = _ref2.setConfig;
	
	    var viewport = Object.create(VIEWPORT_PROTOTYPE);
	
	    viewport.init({ applicationStatus: applicationStatus, canvas: canvas, getConfig: getConfig, setConfig: setConfig });
	
	    return viewport;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports =
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
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		var _javascriptGetHashParams = __webpack_require__(1);
		
		var _javascriptGetHashParams2 = _interopRequireDefault(_javascriptGetHashParams);
		
		var _javascriptHashChangeHandler = __webpack_require__(2);
		
		var _javascriptHashChangeHandler2 = _interopRequireDefault(_javascriptHashChangeHandler);
		
		var _javascriptKeysWithChangedValues = __webpack_require__(27);
		
		var _javascriptKeysWithChangedValues2 = _interopRequireDefault(_javascriptKeysWithChangedValues);
		
		var _javascriptSubscribe = __webpack_require__(60);
		
		var _javascriptSubscribe2 = _interopRequireDefault(_javascriptSubscribe);
		
		var _javascriptSubscription = __webpack_require__(61);
		
		var _javascriptSubscription2 = _interopRequireDefault(_javascriptSubscription);
		
		var _javascriptSubscriptionsByProperty = __webpack_require__(63);
		
		var _javascriptSubscriptionsByProperty2 = _interopRequireDefault(_javascriptSubscriptionsByProperty);
		
		var _javascriptSubscriptionsByUUID = __webpack_require__(64);
		
		var _javascriptSubscriptionsByUUID2 = _interopRequireDefault(_javascriptSubscriptionsByUUID);
		
		var _javascriptUnsubscribe = __webpack_require__(65);
		
		var _javascriptUnsubscribe2 = _interopRequireDefault(_javascriptUnsubscribe);
		
		var subscriptionsByProperty = (0, _javascriptSubscriptionsByProperty2['default'])();
		
		/* probably should migrate this to a factory at some point to avoid possible singleton issues */
		exports['default'] = {
		  ensureInitialization: function ensureInitialization() {
		    if (!this.initialized) {
		      this.init();
		      this.initialized = true;
		    }
		  },
		  init: function init() {
		    return window.addEventListener('hashchange', function (event) {
		      (0, _javascriptHashChangeHandler2['default'])({
		        event: event,
		        getHashParams: _javascriptGetHashParams2['default'],
		        keysWithChangedValues: _javascriptKeysWithChangedValues2['default'],
		        subscriptionsByProperty: subscriptionsByProperty,
		        subscriptionsByUUID: _javascriptSubscriptionsByUUID2['default']
		      });
		    });
		  },
		  subscribe: function subscribe(properties, callback) {
		    this.ensureInitialization();
		
		    return (0, _javascriptSubscribe2['default'])({
		      Subscription: _javascriptSubscription2['default'],
		      subscriptionsByUUID: _javascriptSubscriptionsByUUID2['default'],
		      subscriptionsByProperty: subscriptionsByProperty,
		      properties: properties,
		      callback: callback
		    });
		  },
		  unsubscribe: function unsubscribe(subscriptionUUID) {
		    (0, _javascriptUnsubscribe2['default'])({
		      subscriptionUUID: subscriptionUUID,
		      subscriptionsByUUID: _javascriptSubscriptionsByUUID2['default'],
		      subscriptionsByProperty: subscriptionsByProperty
		    });
		  }
		};
		module.exports = exports['default'];
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
		
		exports['default'] = function (url) {
		  var _url$split = url.split('#');
		
		  var _url$split2 = _slicedToArray(_url$split, 2);
		
		  var _ = _url$split2[0];
		  var urlHash = _url$split2[1];
		
		  urlHash = urlHash || '';
		  return urlHash.split('&').reduce(function (hash, keyValuePair) {
		    var _keyValuePair$split = keyValuePair.split('=');
		
		    var _keyValuePair$split2 = _slicedToArray(_keyValuePair$split, 2);
		
		    var key = _keyValuePair$split2[0];
		    var value = _keyValuePair$split2[1];
		
		    if (value || !isNaN(value)) {
		      if (isNaN(value)) {
		        hash[key] = value;
		      } else {
		        hash[key] = parseFloat(value);
		      }
		    } else if (key.length > 0) {
		      hash[key] = true;
		    }
		
		    return hash;
		  }, {});
		};
		
		module.exports = exports['default'];
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		var _lodashArrayIntersection = __webpack_require__(3);
		
		var _lodashArrayIntersection2 = _interopRequireDefault(_lodashArrayIntersection);
		
		var _lodashArrayFlatten = __webpack_require__(20);
		
		var _lodashArrayFlatten2 = _interopRequireDefault(_lodashArrayFlatten);
		
		var _lodashArrayIntersection3 = _interopRequireDefault(_lodashArrayIntersection);
		
		/* needs subscription sets to be defined somewhere */
		/* an event with a subscription set will only fire once */
		/* for all of the changes in the set. */
		
		exports['default'] = function (_ref) {
		  var getHashParams = _ref.getHashParams;
		  var subscriptionsByProperty = _ref.subscriptionsByProperty;
		  var subscriptionsByUUID = _ref.subscriptionsByUUID;
		  var keysWithChangedValues = _ref.keysWithChangedValues;
		  var event = _ref.event;
		
		  /* get the new params object */
		  /* get the old params object */
		  var oldParams = getHashParams(event.oldURL);
		  var newParams = getHashParams(event.newURL);
		
		  var subscribedKeys = Object.keys(subscriptionsByProperty.subscriptions);
		
		  /* identify the keys with changed values */
		  var keysWithChanges = keysWithChangedValues(oldParams, newParams);
		
		  var keysWithSubscribedEvents = (0, _lodashArrayIntersection2['default'])(keysWithChanges, subscribedKeys);
		
		  // keysWithSubscribedEvents.
		  /* loop through all of the subscribedEvent names looking */
		  /* for differences between newParams and oldParams */
		  var subscriptionUUIDs = keysWithSubscribedEvents.map(function (key) {
		    return Object.keys(subscriptionsByProperty.subscriptions[key]);
		  });
		
		  subscriptionUUIDs = (0, _lodashArrayIntersection3['default'])((0, _lodashArrayFlatten2['default'])(subscriptionUUIDs));
		
		  /* trigger events for each of the events found */
		
		  var subscriptions = subscriptionUUIDs.map(function (subscriptionUUID) {
		    return subscriptionsByUUID[subscriptionUUID];
		  });
		
		  subscriptions.forEach(function (subscription) {
		    subscription.callback(newParams);
		  });
		};
		
		module.exports = exports['default'];
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseIndexOf = __webpack_require__(4),
		    cacheIndexOf = __webpack_require__(6),
		    createCache = __webpack_require__(8),
		    isArrayLike = __webpack_require__(15),
		    restParam = __webpack_require__(19);
		
		/**
		 * Creates an array of unique values that are included in all of the provided
		 * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
		 * for equality comparisons.
		 *
		 * @static
		 * @memberOf _
		 * @category Array
		 * @param {...Array} [arrays] The arrays to inspect.
		 * @returns {Array} Returns the new array of shared values.
		 * @example
		 * _.intersection([1, 2], [4, 2], [2, 1]);
		 * // => [2]
		 */
		var intersection = restParam(function(arrays) {
		  var othLength = arrays.length,
		      othIndex = othLength,
		      caches = Array(length),
		      indexOf = baseIndexOf,
		      isCommon = true,
		      result = [];
		
		  while (othIndex--) {
		    var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
		    caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
		  }
		  var array = arrays[0],
		      index = -1,
		      length = array ? array.length : 0,
		      seen = caches[0];
		
		  outer:
		  while (++index < length) {
		    value = array[index];
		    if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
		      var othIndex = othLength;
		      while (--othIndex) {
		        var cache = caches[othIndex];
		        if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
		          continue outer;
		        }
		      }
		      if (seen) {
		        seen.push(value);
		      }
		      result.push(value);
		    }
		  }
		  return result;
		});
		
		module.exports = intersection;
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		var indexOfNaN = __webpack_require__(5);
		
		/**
		 * The base implementation of `_.indexOf` without support for binary searches.
		 *
		 * @private
		 * @param {Array} array The array to search.
		 * @param {*} value The value to search for.
		 * @param {number} fromIndex The index to search from.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */
		function baseIndexOf(array, value, fromIndex) {
		  if (value !== value) {
		    return indexOfNaN(array, fromIndex);
		  }
		  var index = fromIndex - 1,
		      length = array.length;
		
		  while (++index < length) {
		    if (array[index] === value) {
		      return index;
		    }
		  }
		  return -1;
		}
		
		module.exports = baseIndexOf;
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		/**
		 * Gets the index at which the first occurrence of `NaN` is found in `array`.
		 *
		 * @private
		 * @param {Array} array The array to search.
		 * @param {number} fromIndex The index to search from.
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
		 */
		function indexOfNaN(array, fromIndex, fromRight) {
		  var length = array.length,
		      index = fromIndex + (fromRight ? 0 : -1);
		
		  while ((fromRight ? index-- : ++index < length)) {
		    var other = array[index];
		    if (other !== other) {
		      return index;
		    }
		  }
		  return -1;
		}
		
		module.exports = indexOfNaN;
	
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(7);
		
		/**
		 * Checks if `value` is in `cache` mimicking the return signature of
		 * `_.indexOf` by returning `0` if the value is found, else `-1`.
		 *
		 * @private
		 * @param {Object} cache The cache to search.
		 * @param {*} value The value to search for.
		 * @returns {number} Returns `0` if `value` is found, else `-1`.
		 */
		function cacheIndexOf(cache, value) {
		  var data = cache.data,
		      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
		
		  return result ? 0 : -1;
		}
		
		module.exports = cacheIndexOf;
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		/**
		 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
		 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
		 * @example
		 *
		 * _.isObject({});
		 * // => true
		 *
		 * _.isObject([1, 2, 3]);
		 * // => true
		 *
		 * _.isObject(1);
		 * // => false
		 */
		function isObject(value) {
		  // Avoid a V8 JIT bug in Chrome 19-20.
		  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
		  var type = typeof value;
		  return !!value && (type == 'object' || type == 'function');
		}
		
		module.exports = isObject;
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(9),
		    getNative = __webpack_require__(11);
		
		/** Native method references. */
		var Set = getNative(global, 'Set');
		
		/* Native method references for those with the same name as other `lodash` methods. */
		var nativeCreate = getNative(Object, 'create');
		
		/**
		 * Creates a `Set` cache object to optimize linear searches of large arrays.
		 *
		 * @private
		 * @param {Array} [values] The values to cache.
		 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
		 */
		function createCache(values) {
		  return (nativeCreate && Set) ? new SetCache(values) : null;
		}
		
		module.exports = createCache;
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(10),
		    getNative = __webpack_require__(11);
		
		/** Native method references. */
		var Set = getNative(global, 'Set');
		
		/* Native method references for those with the same name as other `lodash` methods. */
		var nativeCreate = getNative(Object, 'create');
		
		/**
		 *
		 * Creates a cache object to store unique values.
		 *
		 * @private
		 * @param {Array} [values] The values to cache.
		 */
		function SetCache(values) {
		  var length = values ? values.length : 0;
		
		  this.data = { 'hash': nativeCreate(null), 'set': new Set };
		  while (length--) {
		    this.push(values[length]);
		  }
		}
		
		// Add functions to the `Set` cache.
		SetCache.prototype.push = cachePush;
		
		module.exports = SetCache;
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(7);
		
		/**
		 * Adds `value` to the cache.
		 *
		 * @private
		 * @name push
		 * @memberOf SetCache
		 * @param {*} value The value to cache.
		 */
		function cachePush(value) {
		  var data = this.data;
		  if (typeof value == 'string' || isObject(value)) {
		    data.set.add(value);
		  } else {
		    data.hash[value] = true;
		  }
		}
		
		module.exports = cachePush;
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isNative = __webpack_require__(12);
		
		/**
		 * Gets the native function at `key` of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {string} key The key of the method to get.
		 * @returns {*} Returns the function if it's native, else `undefined`.
		 */
		function getNative(object, key) {
		  var value = object == null ? undefined : object[key];
		  return isNative(value) ? value : undefined;
		}
		
		module.exports = getNative;
	
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isFunction = __webpack_require__(13),
		    isObjectLike = __webpack_require__(14);
		
		/** Used to detect host constructors (Safari > 5). */
		var reIsHostCtor = /^\[object .+?Constructor\]$/;
		
		/** Used for native method references. */
		var objectProto = Object.prototype;
		
		/** Used to resolve the decompiled source of functions. */
		var fnToString = Function.prototype.toString;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/** Used to detect if a method is native. */
		var reIsNative = RegExp('^' +
		  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
		  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
		);
		
		/**
		 * Checks if `value` is a native function.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
		 * @example
		 *
		 * _.isNative(Array.prototype.push);
		 * // => true
		 *
		 * _.isNative(_);
		 * // => false
		 */
		function isNative(value) {
		  if (value == null) {
		    return false;
		  }
		  if (isFunction(value)) {
		    return reIsNative.test(fnToString.call(value));
		  }
		  return isObjectLike(value) && reIsHostCtor.test(value);
		}
		
		module.exports = isNative;
	
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(7);
		
		/** `Object#toString` result references. */
		var funcTag = '[object Function]';
		
		/** Used for native method references. */
		var objectProto = Object.prototype;
		
		/**
		 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var objToString = objectProto.toString;
		
		/**
		 * Checks if `value` is classified as a `Function` object.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
		 * @example
		 *
		 * _.isFunction(_);
		 * // => true
		 *
		 * _.isFunction(/abc/);
		 * // => false
		 */
		function isFunction(value) {
		  // The use of `Object#toString` avoids issues with the `typeof` operator
		  // in older versions of Chrome and Safari which return 'function' for regexes
		  // and Safari 8 which returns 'object' for typed array constructors.
		  return isObject(value) && objToString.call(value) == funcTag;
		}
		
		module.exports = isFunction;
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports) {
	
		/**
		 * Checks if `value` is object-like.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
		 */
		function isObjectLike(value) {
		  return !!value && typeof value == 'object';
		}
		
		module.exports = isObjectLike;
	
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getLength = __webpack_require__(16),
		    isLength = __webpack_require__(18);
		
		/**
		 * Checks if `value` is array-like.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
		 */
		function isArrayLike(value) {
		  return value != null && isLength(getLength(value));
		}
		
		module.exports = isArrayLike;
	
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseProperty = __webpack_require__(17);
		
		/**
		 * Gets the "length" property value of `object`.
		 *
		 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
		 * that affects Safari on at least iOS 8.1-8.3 ARM64.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {*} Returns the "length" value.
		 */
		var getLength = baseProperty('length');
		
		module.exports = getLength;
	
	
	/***/ },
	/* 17 */
	/***/ function(module, exports) {
	
		/**
		 * The base implementation of `_.property` without support for deep paths.
		 *
		 * @private
		 * @param {string} key The key of the property to get.
		 * @returns {Function} Returns the new function.
		 */
		function baseProperty(key) {
		  return function(object) {
		    return object == null ? undefined : object[key];
		  };
		}
		
		module.exports = baseProperty;
	
	
	/***/ },
	/* 18 */
	/***/ function(module, exports) {
	
		/**
		 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
		 * of an array-like value.
		 */
		var MAX_SAFE_INTEGER = 9007199254740991;
		
		/**
		 * Checks if `value` is a valid array-like length.
		 *
		 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
		 */
		function isLength(value) {
		  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
		}
		
		module.exports = isLength;
	
	
	/***/ },
	/* 19 */
	/***/ function(module, exports) {
	
		/** Used as the `TypeError` message for "Functions" methods. */
		var FUNC_ERROR_TEXT = 'Expected a function';
		
		/* Native method references for those with the same name as other `lodash` methods. */
		var nativeMax = Math.max;
		
		/**
		 * Creates a function that invokes `func` with the `this` binding of the
		 * created function and arguments from `start` and beyond provided as an array.
		 *
		 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
		 *
		 * @static
		 * @memberOf _
		 * @category Function
		 * @param {Function} func The function to apply a rest parameter to.
		 * @param {number} [start=func.length-1] The start position of the rest parameter.
		 * @returns {Function} Returns the new function.
		 * @example
		 *
		 * var say = _.restParam(function(what, names) {
		 *   return what + ' ' + _.initial(names).join(', ') +
		 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
		 * });
		 *
		 * say('hello', 'fred', 'barney', 'pebbles');
		 * // => 'hello fred, barney, & pebbles'
		 */
		function restParam(func, start) {
		  if (typeof func != 'function') {
		    throw new TypeError(FUNC_ERROR_TEXT);
		  }
		  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
		  return function() {
		    var args = arguments,
		        index = -1,
		        length = nativeMax(args.length - start, 0),
		        rest = Array(length);
		
		    while (++index < length) {
		      rest[index] = args[start + index];
		    }
		    switch (start) {
		      case 0: return func.call(this, rest);
		      case 1: return func.call(this, args[0], rest);
		      case 2: return func.call(this, args[0], args[1], rest);
		    }
		    var otherArgs = Array(start + 1);
		    index = -1;
		    while (++index < start) {
		      otherArgs[index] = args[index];
		    }
		    otherArgs[start] = rest;
		    return func.apply(this, otherArgs);
		  };
		}
		
		module.exports = restParam;
	
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseFlatten = __webpack_require__(21),
		    isIterateeCall = __webpack_require__(25);
		
		/**
		 * Flattens a nested array. If `isDeep` is `true` the array is recursively
		 * flattened, otherwise it's only flattened a single level.
		 *
		 * @static
		 * @memberOf _
		 * @category Array
		 * @param {Array} array The array to flatten.
		 * @param {boolean} [isDeep] Specify a deep flatten.
		 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
		 * @returns {Array} Returns the new flattened array.
		 * @example
		 *
		 * _.flatten([1, [2, 3, [4]]]);
		 * // => [1, 2, 3, [4]]
		 *
		 * // using `isDeep`
		 * _.flatten([1, [2, 3, [4]]], true);
		 * // => [1, 2, 3, 4]
		 */
		function flatten(array, isDeep, guard) {
		  var length = array ? array.length : 0;
		  if (guard && isIterateeCall(array, isDeep, guard)) {
		    isDeep = false;
		  }
		  return length ? baseFlatten(array, isDeep) : [];
		}
		
		module.exports = flatten;
	
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		var arrayPush = __webpack_require__(22),
		    isArguments = __webpack_require__(23),
		    isArray = __webpack_require__(24),
		    isArrayLike = __webpack_require__(15),
		    isObjectLike = __webpack_require__(14);
		
		/**
		 * The base implementation of `_.flatten` with added support for restricting
		 * flattening and specifying the start index.
		 *
		 * @private
		 * @param {Array} array The array to flatten.
		 * @param {boolean} [isDeep] Specify a deep flatten.
		 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
		 * @param {Array} [result=[]] The initial result value.
		 * @returns {Array} Returns the new flattened array.
		 */
		function baseFlatten(array, isDeep, isStrict, result) {
		  result || (result = []);
		
		  var index = -1,
		      length = array.length;
		
		  while (++index < length) {
		    var value = array[index];
		    if (isObjectLike(value) && isArrayLike(value) &&
		        (isStrict || isArray(value) || isArguments(value))) {
		      if (isDeep) {
		        // Recursively flatten arrays (susceptible to call stack limits).
		        baseFlatten(value, isDeep, isStrict, result);
		      } else {
		        arrayPush(result, value);
		      }
		    } else if (!isStrict) {
		      result[result.length] = value;
		    }
		  }
		  return result;
		}
		
		module.exports = baseFlatten;
	
	
	/***/ },
	/* 22 */
	/***/ function(module, exports) {
	
		/**
		 * Appends the elements of `values` to `array`.
		 *
		 * @private
		 * @param {Array} array The array to modify.
		 * @param {Array} values The values to append.
		 * @returns {Array} Returns `array`.
		 */
		function arrayPush(array, values) {
		  var index = -1,
		      length = values.length,
		      offset = array.length;
		
		  while (++index < length) {
		    array[offset + index] = values[index];
		  }
		  return array;
		}
		
		module.exports = arrayPush;
	
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isArrayLike = __webpack_require__(15),
		    isObjectLike = __webpack_require__(14);
		
		/** Used for native method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/** Native method references. */
		var propertyIsEnumerable = objectProto.propertyIsEnumerable;
		
		/**
		 * Checks if `value` is classified as an `arguments` object.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
		 * @example
		 *
		 * _.isArguments(function() { return arguments; }());
		 * // => true
		 *
		 * _.isArguments([1, 2, 3]);
		 * // => false
		 */
		function isArguments(value) {
		  return isObjectLike(value) && isArrayLike(value) &&
		    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
		}
		
		module.exports = isArguments;
	
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getNative = __webpack_require__(11),
		    isLength = __webpack_require__(18),
		    isObjectLike = __webpack_require__(14);
		
		/** `Object#toString` result references. */
		var arrayTag = '[object Array]';
		
		/** Used for native method references. */
		var objectProto = Object.prototype;
		
		/**
		 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var objToString = objectProto.toString;
		
		/* Native method references for those with the same name as other `lodash` methods. */
		var nativeIsArray = getNative(Array, 'isArray');
		
		/**
		 * Checks if `value` is classified as an `Array` object.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
		 * @example
		 *
		 * _.isArray([1, 2, 3]);
		 * // => true
		 *
		 * _.isArray(function() { return arguments; }());
		 * // => false
		 */
		var isArray = nativeIsArray || function(value) {
		  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
		};
		
		module.exports = isArray;
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isArrayLike = __webpack_require__(15),
		    isIndex = __webpack_require__(26),
		    isObject = __webpack_require__(7);
		
		/**
		 * Checks if the provided arguments are from an iteratee call.
		 *
		 * @private
		 * @param {*} value The potential iteratee value argument.
		 * @param {*} index The potential iteratee index or key argument.
		 * @param {*} object The potential iteratee object argument.
		 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
		 */
		function isIterateeCall(value, index, object) {
		  if (!isObject(object)) {
		    return false;
		  }
		  var type = typeof index;
		  if (type == 'number'
		      ? (isArrayLike(object) && isIndex(index, object.length))
		      : (type == 'string' && index in object)) {
		    var other = object[index];
		    return value === value ? (value === other) : (other !== other);
		  }
		  return false;
		}
		
		module.exports = isIterateeCall;
	
	
	/***/ },
	/* 26 */
	/***/ function(module, exports) {
	
		/** Used to detect unsigned integer values. */
		var reIsUint = /^\d+$/;
		
		/**
		 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
		 * of an array-like value.
		 */
		var MAX_SAFE_INTEGER = 9007199254740991;
		
		/**
		 * Checks if `value` is a valid array-like index.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
		 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
		 */
		function isIndex(value, length) {
		  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
		  length = length == null ? MAX_SAFE_INTEGER : length;
		  return value > -1 && value % 1 == 0 && value < length;
		}
		
		module.exports = isIndex;
	
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		var _lodashArrayUnique = __webpack_require__(28);
		
		var _lodashArrayUnique2 = _interopRequireDefault(_lodashArrayUnique);
		
		exports['default'] = function (oldParams, newParams) {
		  var oldKeys = Object.keys(oldParams);
		  var newKeys = Object.keys(newParams);
		
		  var allKeys = (0, _lodashArrayUnique2['default'])(oldKeys.concat(newKeys));
		
		  return allKeys.filter(function (key) {
		    var oldValue = oldParams[key];
		    var newValue = newParams[key];
		
		    /* handle NaN */
		    if (oldValue !== oldValue && newValue !== newValue) {
		      /* both oldValue and newValue equal NaN */
		      return false;
		    }
		
		    return oldValue !== newValue;
		  });
		};
		
		module.exports = exports['default'];
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(29);
	
	
	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseCallback = __webpack_require__(30),
		    baseUniq = __webpack_require__(58),
		    isIterateeCall = __webpack_require__(25),
		    sortedUniq = __webpack_require__(59);
		
		/**
		 * Creates a duplicate-free version of an array, using
		 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
		 * for equality comparisons, in which only the first occurence of each element
		 * is kept. Providing `true` for `isSorted` performs a faster search algorithm
		 * for sorted arrays. If an iteratee function is provided it's invoked for
		 * each element in the array to generate the criterion by which uniqueness
		 * is computed. The `iteratee` is bound to `thisArg` and invoked with three
		 * arguments: (value, index, array).
		 *
		 * If a property name is provided for `iteratee` the created `_.property`
		 * style callback returns the property value of the given element.
		 *
		 * If a value is also provided for `thisArg` the created `_.matchesProperty`
		 * style callback returns `true` for elements that have a matching property
		 * value, else `false`.
		 *
		 * If an object is provided for `iteratee` the created `_.matches` style
		 * callback returns `true` for elements that have the properties of the given
		 * object, else `false`.
		 *
		 * @static
		 * @memberOf _
		 * @alias unique
		 * @category Array
		 * @param {Array} array The array to inspect.
		 * @param {boolean} [isSorted] Specify the array is sorted.
		 * @param {Function|Object|string} [iteratee] The function invoked per iteration.
		 * @param {*} [thisArg] The `this` binding of `iteratee`.
		 * @returns {Array} Returns the new duplicate-value-free array.
		 * @example
		 *
		 * _.uniq([2, 1, 2]);
		 * // => [2, 1]
		 *
		 * // using `isSorted`
		 * _.uniq([1, 1, 2], true);
		 * // => [1, 2]
		 *
		 * // using an iteratee function
		 * _.uniq([1, 2.5, 1.5, 2], function(n) {
		 *   return this.floor(n);
		 * }, Math);
		 * // => [1, 2.5]
		 *
		 * // using the `_.property` callback shorthand
		 * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
		 * // => [{ 'x': 1 }, { 'x': 2 }]
		 */
		function uniq(array, isSorted, iteratee, thisArg) {
		  var length = array ? array.length : 0;
		  if (!length) {
		    return [];
		  }
		  if (isSorted != null && typeof isSorted != 'boolean') {
		    thisArg = iteratee;
		    iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
		    isSorted = false;
		  }
		  iteratee = iteratee == null ? iteratee : baseCallback(iteratee, thisArg, 3);
		  return (isSorted)
		    ? sortedUniq(array, iteratee)
		    : baseUniq(array, iteratee);
		}
		
		module.exports = uniq;
	
	
	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseMatches = __webpack_require__(31),
		    baseMatchesProperty = __webpack_require__(47),
		    bindCallback = __webpack_require__(54),
		    identity = __webpack_require__(55),
		    property = __webpack_require__(56);
		
		/**
		 * The base implementation of `_.callback` which supports specifying the
		 * number of arguments to provide to `func`.
		 *
		 * @private
		 * @param {*} [func=_.identity] The value to convert to a callback.
		 * @param {*} [thisArg] The `this` binding of `func`.
		 * @param {number} [argCount] The number of arguments to provide to `func`.
		 * @returns {Function} Returns the callback.
		 */
		function baseCallback(func, thisArg, argCount) {
		  var type = typeof func;
		  if (type == 'function') {
		    return thisArg === undefined
		      ? func
		      : bindCallback(func, thisArg, argCount);
		  }
		  if (func == null) {
		    return identity;
		  }
		  if (type == 'object') {
		    return baseMatches(func);
		  }
		  return thisArg === undefined
		    ? property(func)
		    : baseMatchesProperty(func, thisArg);
		}
		
		module.exports = baseCallback;
	
	
	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseIsMatch = __webpack_require__(32),
		    getMatchData = __webpack_require__(44),
		    toObject = __webpack_require__(43);
		
		/**
		 * The base implementation of `_.matches` which does not clone `source`.
		 *
		 * @private
		 * @param {Object} source The object of property values to match.
		 * @returns {Function} Returns the new function.
		 */
		function baseMatches(source) {
		  var matchData = getMatchData(source);
		  if (matchData.length == 1 && matchData[0][2]) {
		    var key = matchData[0][0],
		        value = matchData[0][1];
		
		    return function(object) {
		      if (object == null) {
		        return false;
		      }
		      return object[key] === value && (value !== undefined || (key in toObject(object)));
		    };
		  }
		  return function(object) {
		    return baseIsMatch(object, matchData);
		  };
		}
		
		module.exports = baseMatches;
	
	
	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseIsEqual = __webpack_require__(33),
		    toObject = __webpack_require__(43);
		
		/**
		 * The base implementation of `_.isMatch` without support for callback
		 * shorthands and `this` binding.
		 *
		 * @private
		 * @param {Object} object The object to inspect.
		 * @param {Array} matchData The propery names, values, and compare flags to match.
		 * @param {Function} [customizer] The function to customize comparing objects.
		 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
		 */
		function baseIsMatch(object, matchData, customizer) {
		  var index = matchData.length,
		      length = index,
		      noCustomizer = !customizer;
		
		  if (object == null) {
		    return !length;
		  }
		  object = toObject(object);
		  while (index--) {
		    var data = matchData[index];
		    if ((noCustomizer && data[2])
		          ? data[1] !== object[data[0]]
		          : !(data[0] in object)
		        ) {
		      return false;
		    }
		  }
		  while (++index < length) {
		    data = matchData[index];
		    var key = data[0],
		        objValue = object[key],
		        srcValue = data[1];
		
		    if (noCustomizer && data[2]) {
		      if (objValue === undefined && !(key in object)) {
		        return false;
		      }
		    } else {
		      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
		      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
		        return false;
		      }
		    }
		  }
		  return true;
		}
		
		module.exports = baseIsMatch;
	
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseIsEqualDeep = __webpack_require__(34),
		    isObject = __webpack_require__(7),
		    isObjectLike = __webpack_require__(14);
		
		/**
		 * The base implementation of `_.isEqual` without support for `this` binding
		 * `customizer` functions.
		 *
		 * @private
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @param {Function} [customizer] The function to customize comparing values.
		 * @param {boolean} [isLoose] Specify performing partial comparisons.
		 * @param {Array} [stackA] Tracks traversed `value` objects.
		 * @param {Array} [stackB] Tracks traversed `other` objects.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 */
		function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
		  if (value === other) {
		    return true;
		  }
		  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
		    return value !== value && other !== other;
		  }
		  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
		}
		
		module.exports = baseIsEqual;
	
	
	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {
	
		var equalArrays = __webpack_require__(35),
		    equalByTag = __webpack_require__(37),
		    equalObjects = __webpack_require__(38),
		    isArray = __webpack_require__(24),
		    isTypedArray = __webpack_require__(42);
		
		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]',
		    arrayTag = '[object Array]',
		    objectTag = '[object Object]';
		
		/** Used for native method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/**
		 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var objToString = objectProto.toString;
		
		/**
		 * A specialized version of `baseIsEqual` for arrays and objects which performs
		 * deep comparisons and tracks traversed objects enabling objects with circular
		 * references to be compared.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} [customizer] The function to customize comparing objects.
		 * @param {boolean} [isLoose] Specify performing partial comparisons.
		 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
		 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */
		function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
		  var objIsArr = isArray(object),
		      othIsArr = isArray(other),
		      objTag = arrayTag,
		      othTag = arrayTag;
		
		  if (!objIsArr) {
		    objTag = objToString.call(object);
		    if (objTag == argsTag) {
		      objTag = objectTag;
		    } else if (objTag != objectTag) {
		      objIsArr = isTypedArray(object);
		    }
		  }
		  if (!othIsArr) {
		    othTag = objToString.call(other);
		    if (othTag == argsTag) {
		      othTag = objectTag;
		    } else if (othTag != objectTag) {
		      othIsArr = isTypedArray(other);
		    }
		  }
		  var objIsObj = objTag == objectTag,
		      othIsObj = othTag == objectTag,
		      isSameTag = objTag == othTag;
		
		  if (isSameTag && !(objIsArr || objIsObj)) {
		    return equalByTag(object, other, objTag);
		  }
		  if (!isLoose) {
		    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
		        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
		
		    if (objIsWrapped || othIsWrapped) {
		      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
		    }
		  }
		  if (!isSameTag) {
		    return false;
		  }
		  // Assume cyclic values are equal.
		  // For more information on detecting circular references see https://es5.github.io/#JO.
		  stackA || (stackA = []);
		  stackB || (stackB = []);
		
		  var length = stackA.length;
		  while (length--) {
		    if (stackA[length] == object) {
		      return stackB[length] == other;
		    }
		  }
		  // Add `object` and `other` to the stack of traversed objects.
		  stackA.push(object);
		  stackB.push(other);
		
		  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
		
		  stackA.pop();
		  stackB.pop();
		
		  return result;
		}
		
		module.exports = baseIsEqualDeep;
	
	
	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {
	
		var arraySome = __webpack_require__(36);
		
		/**
		 * A specialized version of `baseIsEqualDeep` for arrays with support for
		 * partial deep comparisons.
		 *
		 * @private
		 * @param {Array} array The array to compare.
		 * @param {Array} other The other array to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} [customizer] The function to customize comparing arrays.
		 * @param {boolean} [isLoose] Specify performing partial comparisons.
		 * @param {Array} [stackA] Tracks traversed `value` objects.
		 * @param {Array} [stackB] Tracks traversed `other` objects.
		 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
		 */
		function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
		  var index = -1,
		      arrLength = array.length,
		      othLength = other.length;
		
		  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
		    return false;
		  }
		  // Ignore non-index properties.
		  while (++index < arrLength) {
		    var arrValue = array[index],
		        othValue = other[index],
		        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
		
		    if (result !== undefined) {
		      if (result) {
		        continue;
		      }
		      return false;
		    }
		    // Recursively compare arrays (susceptible to call stack limits).
		    if (isLoose) {
		      if (!arraySome(other, function(othValue) {
		            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
		          })) {
		        return false;
		      }
		    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
		      return false;
		    }
		  }
		  return true;
		}
		
		module.exports = equalArrays;
	
	
	/***/ },
	/* 36 */
	/***/ function(module, exports) {
	
		/**
		 * A specialized version of `_.some` for arrays without support for callback
		 * shorthands and `this` binding.
		 *
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} predicate The function invoked per iteration.
		 * @returns {boolean} Returns `true` if any element passes the predicate check,
		 *  else `false`.
		 */
		function arraySome(array, predicate) {
		  var index = -1,
		      length = array.length;
		
		  while (++index < length) {
		    if (predicate(array[index], index, array)) {
		      return true;
		    }
		  }
		  return false;
		}
		
		module.exports = arraySome;
	
	
	/***/ },
	/* 37 */
	/***/ function(module, exports) {
	
		/** `Object#toString` result references. */
		var boolTag = '[object Boolean]',
		    dateTag = '[object Date]',
		    errorTag = '[object Error]',
		    numberTag = '[object Number]',
		    regexpTag = '[object RegExp]',
		    stringTag = '[object String]';
		
		/**
		 * A specialized version of `baseIsEqualDeep` for comparing objects of
		 * the same `toStringTag`.
		 *
		 * **Note:** This function only supports comparing values with tags of
		 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {string} tag The `toStringTag` of the objects to compare.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */
		function equalByTag(object, other, tag) {
		  switch (tag) {
		    case boolTag:
		    case dateTag:
		      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
		      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
		      return +object == +other;
		
		    case errorTag:
		      return object.name == other.name && object.message == other.message;
		
		    case numberTag:
		      // Treat `NaN` vs. `NaN` as equal.
		      return (object != +object)
		        ? other != +other
		        : object == +other;
		
		    case regexpTag:
		    case stringTag:
		      // Coerce regexes to strings and treat strings primitives and string
		      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
		      return object == (other + '');
		  }
		  return false;
		}
		
		module.exports = equalByTag;
	
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
		var keys = __webpack_require__(39);
		
		/** Used for native method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/**
		 * A specialized version of `baseIsEqualDeep` for objects with support for
		 * partial deep comparisons.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} [customizer] The function to customize comparing values.
		 * @param {boolean} [isLoose] Specify performing partial comparisons.
		 * @param {Array} [stackA] Tracks traversed `value` objects.
		 * @param {Array} [stackB] Tracks traversed `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */
		function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
		  var objProps = keys(object),
		      objLength = objProps.length,
		      othProps = keys(other),
		      othLength = othProps.length;
		
		  if (objLength != othLength && !isLoose) {
		    return false;
		  }
		  var index = objLength;
		  while (index--) {
		    var key = objProps[index];
		    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
		      return false;
		    }
		  }
		  var skipCtor = isLoose;
		  while (++index < objLength) {
		    key = objProps[index];
		    var objValue = object[key],
		        othValue = other[key],
		        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
		
		    // Recursively compare objects (susceptible to call stack limits).
		    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
		      return false;
		    }
		    skipCtor || (skipCtor = key == 'constructor');
		  }
		  if (!skipCtor) {
		    var objCtor = object.constructor,
		        othCtor = other.constructor;
		
		    // Non `Object` object instances with different constructors are not equal.
		    if (objCtor != othCtor &&
		        ('constructor' in object && 'constructor' in other) &&
		        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
		          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
		      return false;
		    }
		  }
		  return true;
		}
		
		module.exports = equalObjects;
	
	
	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getNative = __webpack_require__(11),
		    isArrayLike = __webpack_require__(15),
		    isObject = __webpack_require__(7),
		    shimKeys = __webpack_require__(40);
		
		/* Native method references for those with the same name as other `lodash` methods. */
		var nativeKeys = getNative(Object, 'keys');
		
		/**
		 * Creates an array of the own enumerable property names of `object`.
		 *
		 * **Note:** Non-object values are coerced to objects. See the
		 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
		 * for more details.
		 *
		 * @static
		 * @memberOf _
		 * @category Object
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 * @example
		 *
		 * function Foo() {
		 *   this.a = 1;
		 *   this.b = 2;
		 * }
		 *
		 * Foo.prototype.c = 3;
		 *
		 * _.keys(new Foo);
		 * // => ['a', 'b'] (iteration order is not guaranteed)
		 *
		 * _.keys('hi');
		 * // => ['0', '1']
		 */
		var keys = !nativeKeys ? shimKeys : function(object) {
		  var Ctor = object == null ? undefined : object.constructor;
		  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
		      (typeof object != 'function' && isArrayLike(object))) {
		    return shimKeys(object);
		  }
		  return isObject(object) ? nativeKeys(object) : [];
		};
		
		module.exports = keys;
	
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isArguments = __webpack_require__(23),
		    isArray = __webpack_require__(24),
		    isIndex = __webpack_require__(26),
		    isLength = __webpack_require__(18),
		    keysIn = __webpack_require__(41);
		
		/** Used for native method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/**
		 * A fallback implementation of `Object.keys` which creates an array of the
		 * own enumerable property names of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */
		function shimKeys(object) {
		  var props = keysIn(object),
		      propsLength = props.length,
		      length = propsLength && object.length;
		
		  var allowIndexes = !!length && isLength(length) &&
		    (isArray(object) || isArguments(object));
		
		  var index = -1,
		      result = [];
		
		  while (++index < propsLength) {
		    var key = props[index];
		    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
		      result.push(key);
		    }
		  }
		  return result;
		}
		
		module.exports = shimKeys;
	
	
	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isArguments = __webpack_require__(23),
		    isArray = __webpack_require__(24),
		    isIndex = __webpack_require__(26),
		    isLength = __webpack_require__(18),
		    isObject = __webpack_require__(7);
		
		/** Used for native method references. */
		var objectProto = Object.prototype;
		
		/** Used to check objects for own properties. */
		var hasOwnProperty = objectProto.hasOwnProperty;
		
		/**
		 * Creates an array of the own and inherited enumerable property names of `object`.
		 *
		 * **Note:** Non-object values are coerced to objects.
		 *
		 * @static
		 * @memberOf _
		 * @category Object
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 * @example
		 *
		 * function Foo() {
		 *   this.a = 1;
		 *   this.b = 2;
		 * }
		 *
		 * Foo.prototype.c = 3;
		 *
		 * _.keysIn(new Foo);
		 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
		 */
		function keysIn(object) {
		  if (object == null) {
		    return [];
		  }
		  if (!isObject(object)) {
		    object = Object(object);
		  }
		  var length = object.length;
		  length = (length && isLength(length) &&
		    (isArray(object) || isArguments(object)) && length) || 0;
		
		  var Ctor = object.constructor,
		      index = -1,
		      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
		      result = Array(length),
		      skipIndexes = length > 0;
		
		  while (++index < length) {
		    result[index] = (index + '');
		  }
		  for (var key in object) {
		    if (!(skipIndexes && isIndex(key, length)) &&
		        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
		      result.push(key);
		    }
		  }
		  return result;
		}
		
		module.exports = keysIn;
	
	
	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isLength = __webpack_require__(18),
		    isObjectLike = __webpack_require__(14);
		
		/** `Object#toString` result references. */
		var argsTag = '[object Arguments]',
		    arrayTag = '[object Array]',
		    boolTag = '[object Boolean]',
		    dateTag = '[object Date]',
		    errorTag = '[object Error]',
		    funcTag = '[object Function]',
		    mapTag = '[object Map]',
		    numberTag = '[object Number]',
		    objectTag = '[object Object]',
		    regexpTag = '[object RegExp]',
		    setTag = '[object Set]',
		    stringTag = '[object String]',
		    weakMapTag = '[object WeakMap]';
		
		var arrayBufferTag = '[object ArrayBuffer]',
		    float32Tag = '[object Float32Array]',
		    float64Tag = '[object Float64Array]',
		    int8Tag = '[object Int8Array]',
		    int16Tag = '[object Int16Array]',
		    int32Tag = '[object Int32Array]',
		    uint8Tag = '[object Uint8Array]',
		    uint8ClampedTag = '[object Uint8ClampedArray]',
		    uint16Tag = '[object Uint16Array]',
		    uint32Tag = '[object Uint32Array]';
		
		/** Used to identify `toStringTag` values of typed arrays. */
		var typedArrayTags = {};
		typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
		typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
		typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
		typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
		typedArrayTags[uint32Tag] = true;
		typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
		typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
		typedArrayTags[dateTag] = typedArrayTags[errorTag] =
		typedArrayTags[funcTag] = typedArrayTags[mapTag] =
		typedArrayTags[numberTag] = typedArrayTags[objectTag] =
		typedArrayTags[regexpTag] = typedArrayTags[setTag] =
		typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
		
		/** Used for native method references. */
		var objectProto = Object.prototype;
		
		/**
		 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */
		var objToString = objectProto.toString;
		
		/**
		 * Checks if `value` is classified as a typed array.
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
		 * @example
		 *
		 * _.isTypedArray(new Uint8Array);
		 * // => true
		 *
		 * _.isTypedArray([]);
		 * // => false
		 */
		function isTypedArray(value) {
		  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
		}
		
		module.exports = isTypedArray;
	
	
	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(7);
		
		/**
		 * Converts `value` to an object if it's not one.
		 *
		 * @private
		 * @param {*} value The value to process.
		 * @returns {Object} Returns the object.
		 */
		function toObject(value) {
		  return isObject(value) ? value : Object(value);
		}
		
		module.exports = toObject;
	
	
	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isStrictComparable = __webpack_require__(45),
		    pairs = __webpack_require__(46);
		
		/**
		 * Gets the propery names, values, and compare flags of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the match data of `object`.
		 */
		function getMatchData(object) {
		  var result = pairs(object),
		      length = result.length;
		
		  while (length--) {
		    result[length][2] = isStrictComparable(result[length][1]);
		  }
		  return result;
		}
		
		module.exports = getMatchData;
	
	
	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(7);
		
		/**
		 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` if suitable for strict
		 *  equality comparisons, else `false`.
		 */
		function isStrictComparable(value) {
		  return value === value && !isObject(value);
		}
		
		module.exports = isStrictComparable;
	
	
	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {
	
		var keys = __webpack_require__(39),
		    toObject = __webpack_require__(43);
		
		/**
		 * Creates a two dimensional array of the key-value pairs for `object`,
		 * e.g. `[[key1, value1], [key2, value2]]`.
		 *
		 * @static
		 * @memberOf _
		 * @category Object
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the new array of key-value pairs.
		 * @example
		 *
		 * _.pairs({ 'barney': 36, 'fred': 40 });
		 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
		 */
		function pairs(object) {
		  object = toObject(object);
		
		  var index = -1,
		      props = keys(object),
		      length = props.length,
		      result = Array(length);
		
		  while (++index < length) {
		    var key = props[index];
		    result[index] = [key, object[key]];
		  }
		  return result;
		}
		
		module.exports = pairs;
	
	
	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseGet = __webpack_require__(48),
		    baseIsEqual = __webpack_require__(33),
		    baseSlice = __webpack_require__(49),
		    isArray = __webpack_require__(24),
		    isKey = __webpack_require__(50),
		    isStrictComparable = __webpack_require__(45),
		    last = __webpack_require__(51),
		    toObject = __webpack_require__(43),
		    toPath = __webpack_require__(52);
		
		/**
		 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
		 *
		 * @private
		 * @param {string} path The path of the property to get.
		 * @param {*} srcValue The value to compare.
		 * @returns {Function} Returns the new function.
		 */
		function baseMatchesProperty(path, srcValue) {
		  var isArr = isArray(path),
		      isCommon = isKey(path) && isStrictComparable(srcValue),
		      pathKey = (path + '');
		
		  path = toPath(path);
		  return function(object) {
		    if (object == null) {
		      return false;
		    }
		    var key = pathKey;
		    object = toObject(object);
		    if ((isArr || !isCommon) && !(key in object)) {
		      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
		      if (object == null) {
		        return false;
		      }
		      key = last(path);
		      object = toObject(object);
		    }
		    return object[key] === srcValue
		      ? (srcValue !== undefined || (key in object))
		      : baseIsEqual(srcValue, object[key], undefined, true);
		  };
		}
		
		module.exports = baseMatchesProperty;
	
	
	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {
	
		var toObject = __webpack_require__(43);
		
		/**
		 * The base implementation of `get` without support for string paths
		 * and default values.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array} path The path of the property to get.
		 * @param {string} [pathKey] The key representation of path.
		 * @returns {*} Returns the resolved value.
		 */
		function baseGet(object, path, pathKey) {
		  if (object == null) {
		    return;
		  }
		  if (pathKey !== undefined && pathKey in toObject(object)) {
		    path = [pathKey];
		  }
		  var index = 0,
		      length = path.length;
		
		  while (object != null && index < length) {
		    object = object[path[index++]];
		  }
		  return (index && index == length) ? object : undefined;
		}
		
		module.exports = baseGet;
	
	
	/***/ },
	/* 49 */
	/***/ function(module, exports) {
	
		/**
		 * The base implementation of `_.slice` without an iteratee call guard.
		 *
		 * @private
		 * @param {Array} array The array to slice.
		 * @param {number} [start=0] The start position.
		 * @param {number} [end=array.length] The end position.
		 * @returns {Array} Returns the slice of `array`.
		 */
		function baseSlice(array, start, end) {
		  var index = -1,
		      length = array.length;
		
		  start = start == null ? 0 : (+start || 0);
		  if (start < 0) {
		    start = -start > length ? 0 : (length + start);
		  }
		  end = (end === undefined || end > length) ? length : (+end || 0);
		  if (end < 0) {
		    end += length;
		  }
		  length = start > end ? 0 : ((end - start) >>> 0);
		  start >>>= 0;
		
		  var result = Array(length);
		  while (++index < length) {
		    result[index] = array[index + start];
		  }
		  return result;
		}
		
		module.exports = baseSlice;
	
	
	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isArray = __webpack_require__(24),
		    toObject = __webpack_require__(43);
		
		/** Used to match property names within property paths. */
		var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
		    reIsPlainProp = /^\w*$/;
		
		/**
		 * Checks if `value` is a property name and not a property path.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {Object} [object] The object to query keys on.
		 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
		 */
		function isKey(value, object) {
		  var type = typeof value;
		  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
		    return true;
		  }
		  if (isArray(value)) {
		    return false;
		  }
		  var result = !reIsDeepProp.test(value);
		  return result || (object != null && value in toObject(object));
		}
		
		module.exports = isKey;
	
	
	/***/ },
	/* 51 */
	/***/ function(module, exports) {
	
		/**
		 * Gets the last element of `array`.
		 *
		 * @static
		 * @memberOf _
		 * @category Array
		 * @param {Array} array The array to query.
		 * @returns {*} Returns the last element of `array`.
		 * @example
		 *
		 * _.last([1, 2, 3]);
		 * // => 3
		 */
		function last(array) {
		  var length = array ? array.length : 0;
		  return length ? array[length - 1] : undefined;
		}
		
		module.exports = last;
	
	
	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseToString = __webpack_require__(53),
		    isArray = __webpack_require__(24);
		
		/** Used to match property names within property paths. */
		var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
		
		/** Used to match backslashes in property paths. */
		var reEscapeChar = /\\(\\)?/g;
		
		/**
		 * Converts `value` to property path array if it's not one.
		 *
		 * @private
		 * @param {*} value The value to process.
		 * @returns {Array} Returns the property path array.
		 */
		function toPath(value) {
		  if (isArray(value)) {
		    return value;
		  }
		  var result = [];
		  baseToString(value).replace(rePropName, function(match, number, quote, string) {
		    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
		  });
		  return result;
		}
		
		module.exports = toPath;
	
	
	/***/ },
	/* 53 */
	/***/ function(module, exports) {
	
		/**
		 * Converts `value` to a string if it's not one. An empty string is returned
		 * for `null` or `undefined` values.
		 *
		 * @private
		 * @param {*} value The value to process.
		 * @returns {string} Returns the string.
		 */
		function baseToString(value) {
		  return value == null ? '' : (value + '');
		}
		
		module.exports = baseToString;
	
	
	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {
	
		var identity = __webpack_require__(55);
		
		/**
		 * A specialized version of `baseCallback` which only supports `this` binding
		 * and specifying the number of arguments to provide to `func`.
		 *
		 * @private
		 * @param {Function} func The function to bind.
		 * @param {*} thisArg The `this` binding of `func`.
		 * @param {number} [argCount] The number of arguments to provide to `func`.
		 * @returns {Function} Returns the callback.
		 */
		function bindCallback(func, thisArg, argCount) {
		  if (typeof func != 'function') {
		    return identity;
		  }
		  if (thisArg === undefined) {
		    return func;
		  }
		  switch (argCount) {
		    case 1: return function(value) {
		      return func.call(thisArg, value);
		    };
		    case 3: return function(value, index, collection) {
		      return func.call(thisArg, value, index, collection);
		    };
		    case 4: return function(accumulator, value, index, collection) {
		      return func.call(thisArg, accumulator, value, index, collection);
		    };
		    case 5: return function(value, other, key, object, source) {
		      return func.call(thisArg, value, other, key, object, source);
		    };
		  }
		  return function() {
		    return func.apply(thisArg, arguments);
		  };
		}
		
		module.exports = bindCallback;
	
	
	/***/ },
	/* 55 */
	/***/ function(module, exports) {
	
		/**
		 * This method returns the first argument provided to it.
		 *
		 * @static
		 * @memberOf _
		 * @category Utility
		 * @param {*} value Any value.
		 * @returns {*} Returns `value`.
		 * @example
		 *
		 * var object = { 'user': 'fred' };
		 *
		 * _.identity(object) === object;
		 * // => true
		 */
		function identity(value) {
		  return value;
		}
		
		module.exports = identity;
	
	
	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseProperty = __webpack_require__(17),
		    basePropertyDeep = __webpack_require__(57),
		    isKey = __webpack_require__(50);
		
		/**
		 * Creates a function that returns the property value at `path` on a
		 * given object.
		 *
		 * @static
		 * @memberOf _
		 * @category Utility
		 * @param {Array|string} path The path of the property to get.
		 * @returns {Function} Returns the new function.
		 * @example
		 *
		 * var objects = [
		 *   { 'a': { 'b': { 'c': 2 } } },
		 *   { 'a': { 'b': { 'c': 1 } } }
		 * ];
		 *
		 * _.map(objects, _.property('a.b.c'));
		 * // => [2, 1]
		 *
		 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
		 * // => [1, 2]
		 */
		function property(path) {
		  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
		}
		
		module.exports = property;
	
	
	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseGet = __webpack_require__(48),
		    toPath = __webpack_require__(52);
		
		/**
		 * A specialized version of `baseProperty` which supports deep paths.
		 *
		 * @private
		 * @param {Array|string} path The path of the property to get.
		 * @returns {Function} Returns the new function.
		 */
		function basePropertyDeep(path) {
		  var pathKey = (path + '');
		  path = toPath(path);
		  return function(object) {
		    return baseGet(object, path, pathKey);
		  };
		}
		
		module.exports = basePropertyDeep;
	
	
	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {
	
		var baseIndexOf = __webpack_require__(4),
		    cacheIndexOf = __webpack_require__(6),
		    createCache = __webpack_require__(8);
		
		/** Used as the size to enable large array optimizations. */
		var LARGE_ARRAY_SIZE = 200;
		
		/**
		 * The base implementation of `_.uniq` without support for callback shorthands
		 * and `this` binding.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {Function} [iteratee] The function invoked per iteration.
		 * @returns {Array} Returns the new duplicate free array.
		 */
		function baseUniq(array, iteratee) {
		  var index = -1,
		      indexOf = baseIndexOf,
		      length = array.length,
		      isCommon = true,
		      isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
		      seen = isLarge ? createCache() : null,
		      result = [];
		
		  if (seen) {
		    indexOf = cacheIndexOf;
		    isCommon = false;
		  } else {
		    isLarge = false;
		    seen = iteratee ? [] : result;
		  }
		  outer:
		  while (++index < length) {
		    var value = array[index],
		        computed = iteratee ? iteratee(value, index, array) : value;
		
		    if (isCommon && value === value) {
		      var seenIndex = seen.length;
		      while (seenIndex--) {
		        if (seen[seenIndex] === computed) {
		          continue outer;
		        }
		      }
		      if (iteratee) {
		        seen.push(computed);
		      }
		      result.push(value);
		    }
		    else if (indexOf(seen, computed, 0) < 0) {
		      if (iteratee || isLarge) {
		        seen.push(computed);
		      }
		      result.push(value);
		    }
		  }
		  return result;
		}
		
		module.exports = baseUniq;
	
	
	/***/ },
	/* 59 */
	/***/ function(module, exports) {
	
		/**
		 * An implementation of `_.uniq` optimized for sorted arrays without support
		 * for callback shorthands and `this` binding.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {Function} [iteratee] The function invoked per iteration.
		 * @returns {Array} Returns the new duplicate free array.
		 */
		function sortedUniq(array, iteratee) {
		  var seen,
		      index = -1,
		      length = array.length,
		      resIndex = -1,
		      result = [];
		
		  while (++index < length) {
		    var value = array[index],
		        computed = iteratee ? iteratee(value, index, array) : value;
		
		    if (!index || seen !== computed) {
		      seen = computed;
		      result[++resIndex] = value;
		    }
		  }
		  return result;
		}
		
		module.exports = sortedUniq;
	
	
	/***/ },
	/* 60 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (_ref) {
		  var Subscription = _ref.Subscription;
		  var subscriptionsByUUID = _ref.subscriptionsByUUID;
		  var subscriptionsByProperty = _ref.subscriptionsByProperty;
		  var properties = _ref.properties;
		  var callback = _ref.callback;
		
		  /* make a subscription */
		  var subscription = Subscription({ properties: properties, callback: callback });
		
		  /* add the subscription to the subscriptionsByUUID object */
		  subscriptionsByUUID[subscription.uuid] = subscription;
		
		  /* add references to the subscription to each of the */
		  /* subscribed properties */
		  properties.forEach(function (property) {
		    subscriptionsByProperty.add({ property: property, subscription: subscription });
		  });
		
		  return subscription.uuid;
		};
		
		module.exports = exports['default'];
	
	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		var _nodeUuid = __webpack_require__(62);
		
		var _nodeUuid2 = _interopRequireDefault(_nodeUuid);
		
		var SUBSCRIPTION_PROTOTYPE = {
		  properties: [],
		  callback: function callback() {},
		  guid: null
		};
		
		exports['default'] = function (_ref) {
		  var properties = _ref.properties;
		  var callback = _ref.callback;
		
		  var subscription = Object.create(SUBSCRIPTION_PROTOTYPE);
		
		  subscription.properties = properties;
		  subscription.callback = callback;
		  subscription.uuid = _nodeUuid2['default'].v4();
		
		  return subscription;
		};
		
		exports.SUBSCRIPTION_PROTOTYPE = SUBSCRIPTION_PROTOTYPE;
	
	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_RESULT__;//     uuid.js
		//
		//     Copyright (c) 2010-2012 Robert Kieffer
		//     MIT License - http://opensource.org/licenses/mit-license.php
		
		(function() {
		  var _global = this;
		
		  // Unique ID creation requires a high quality random # generator.  We feature
		  // detect to determine the best RNG source, normalizing to a function that
		  // returns 128-bits of randomness, since that's what's usually required
		  var _rng;
		
		  // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
		  //
		  // Moderately fast, high quality
		  if (typeof(_global.require) == 'function') {
		    try {
		      var _rb = _global.require('crypto').randomBytes;
		      _rng = _rb && function() {return _rb(16);};
		    } catch(e) {}
		  }
		
		  if (!_rng && _global.crypto && crypto.getRandomValues) {
		    // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
		    //
		    // Moderately fast, high quality
		    var _rnds8 = new Uint8Array(16);
		    _rng = function whatwgRNG() {
		      crypto.getRandomValues(_rnds8);
		      return _rnds8;
		    };
		  }
		
		  if (!_rng) {
		    // Math.random()-based (RNG)
		    //
		    // If all else fails, use Math.random().  It's fast, but is of unspecified
		    // quality.
		    var  _rnds = new Array(16);
		    _rng = function() {
		      for (var i = 0, r; i < 16; i++) {
		        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
		        _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
		      }
		
		      return _rnds;
		    };
		  }
		
		  // Buffer class to use
		  var BufferClass = typeof(_global.Buffer) == 'function' ? _global.Buffer : Array;
		
		  // Maps for number <-> hex string conversion
		  var _byteToHex = [];
		  var _hexToByte = {};
		  for (var i = 0; i < 256; i++) {
		    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
		    _hexToByte[_byteToHex[i]] = i;
		  }
		
		  // **`parse()` - Parse a UUID into it's component bytes**
		  function parse(s, buf, offset) {
		    var i = (buf && offset) || 0, ii = 0;
		
		    buf = buf || [];
		    s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
		      if (ii < 16) { // Don't overflow!
		        buf[i + ii++] = _hexToByte[oct];
		      }
		    });
		
		    // Zero out remaining bytes if string was short
		    while (ii < 16) {
		      buf[i + ii++] = 0;
		    }
		
		    return buf;
		  }
		
		  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
		  function unparse(buf, offset) {
		    var i = offset || 0, bth = _byteToHex;
		    return  bth[buf[i++]] + bth[buf[i++]] +
		            bth[buf[i++]] + bth[buf[i++]] + '-' +
		            bth[buf[i++]] + bth[buf[i++]] + '-' +
		            bth[buf[i++]] + bth[buf[i++]] + '-' +
		            bth[buf[i++]] + bth[buf[i++]] + '-' +
		            bth[buf[i++]] + bth[buf[i++]] +
		            bth[buf[i++]] + bth[buf[i++]] +
		            bth[buf[i++]] + bth[buf[i++]];
		  }
		
		  // **`v1()` - Generate time-based UUID**
		  //
		  // Inspired by https://github.com/LiosK/UUID.js
		  // and http://docs.python.org/library/uuid.html
		
		  // random #'s we need to init node and clockseq
		  var _seedBytes = _rng();
		
		  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
		  var _nodeId = [
		    _seedBytes[0] | 0x01,
		    _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
		  ];
		
		  // Per 4.2.2, randomize (14 bit) clockseq
		  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;
		
		  // Previous uuid creation time
		  var _lastMSecs = 0, _lastNSecs = 0;
		
		  // See https://github.com/broofa/node-uuid for API details
		  function v1(options, buf, offset) {
		    var i = buf && offset || 0;
		    var b = buf || [];
		
		    options = options || {};
		
		    var clockseq = options.clockseq != null ? options.clockseq : _clockseq;
		
		    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
		    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
		    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
		    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
		    var msecs = options.msecs != null ? options.msecs : new Date().getTime();
		
		    // Per 4.2.1.2, use count of uuid's generated during the current clock
		    // cycle to simulate higher resolution clock
		    var nsecs = options.nsecs != null ? options.nsecs : _lastNSecs + 1;
		
		    // Time since last uuid creation (in msecs)
		    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;
		
		    // Per 4.2.1.2, Bump clockseq on clock regression
		    if (dt < 0 && options.clockseq == null) {
		      clockseq = clockseq + 1 & 0x3fff;
		    }
		
		    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
		    // time interval
		    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
		      nsecs = 0;
		    }
		
		    // Per 4.2.1.2 Throw error if too many uuids are requested
		    if (nsecs >= 10000) {
		      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
		    }
		
		    _lastMSecs = msecs;
		    _lastNSecs = nsecs;
		    _clockseq = clockseq;
		
		    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
		    msecs += 12219292800000;
		
		    // `time_low`
		    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
		    b[i++] = tl >>> 24 & 0xff;
		    b[i++] = tl >>> 16 & 0xff;
		    b[i++] = tl >>> 8 & 0xff;
		    b[i++] = tl & 0xff;
		
		    // `time_mid`
		    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
		    b[i++] = tmh >>> 8 & 0xff;
		    b[i++] = tmh & 0xff;
		
		    // `time_high_and_version`
		    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
		    b[i++] = tmh >>> 16 & 0xff;
		
		    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
		    b[i++] = clockseq >>> 8 | 0x80;
		
		    // `clock_seq_low`
		    b[i++] = clockseq & 0xff;
		
		    // `node`
		    var node = options.node || _nodeId;
		    for (var n = 0; n < 6; n++) {
		      b[i + n] = node[n];
		    }
		
		    return buf ? buf : unparse(b);
		  }
		
		  // **`v4()` - Generate random UUID**
		
		  // See https://github.com/broofa/node-uuid for API details
		  function v4(options, buf, offset) {
		    // Deprecated - 'format' argument, as supported in v1.2
		    var i = buf && offset || 0;
		
		    if (typeof(options) == 'string') {
		      buf = options == 'binary' ? new BufferClass(16) : null;
		      options = null;
		    }
		    options = options || {};
		
		    var rnds = options.random || (options.rng || _rng)();
		
		    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
		    rnds[6] = (rnds[6] & 0x0f) | 0x40;
		    rnds[8] = (rnds[8] & 0x3f) | 0x80;
		
		    // Copy bytes to buffer, if provided
		    if (buf) {
		      for (var ii = 0; ii < 16; ii++) {
		        buf[i + ii] = rnds[ii];
		      }
		    }
		
		    return buf || unparse(rnds);
		  }
		
		  // Export public API
		  var uuid = v4;
		  uuid.v1 = v1;
		  uuid.v4 = v4;
		  uuid.parse = parse;
		  uuid.unparse = unparse;
		  uuid.BufferClass = BufferClass;
		
		  if (typeof(module) != 'undefined' && module.exports) {
		    // Publish as node.js module
		    module.exports = uuid;
		  } else  if (true) {
		    // Publish as AMD module
		    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {return uuid;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		 
		
		  } else {
		    // Publish as global (in browsers)
		    var _previousRoot = _global.uuid;
		
		    // **`noConflict()` - (browser only) to reset global 'uuid' var**
		    uuid.noConflict = function() {
		      _global.uuid = _previousRoot;
		      return uuid;
		    };
		
		    _global.uuid = uuid;
		  }
		}).call(this);
	
	
	/***/ },
	/* 63 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		var SUBSCRIPTIONS_BY_PROPERTY_PROTOTYPE = {
		  add: function add(_ref) {
		    var property = _ref.property;
		    var subscription = _ref.subscription;
		
		    var currentSubscriptions = this.subscriptions[property];
		
		    if (!currentSubscriptions || Object.keys(currentSubscriptions).length === 0) {
		      this.subscriptions[property] = {};
		    }
		
		    /* useing object like a set here */
		    this.subscriptions[property][subscription.uuid] = true;
		  },
		
		  remove: function remove(_ref2) {
		    var property = _ref2.property;
		    var subscription = _ref2.subscription;
		
		    var currentSubscriptions = this.subscriptions[property];
		
		    if (!currentSubscriptions || Object.keys(currentSubscriptions).length === 0) {
		      this.subscriptions[property] = {};
		    }
		
		    delete this.subscriptions[property][subscription.uuid];
		  }
		
		};
		
		exports['default'] = function () {
		  var subscriptionsByProperty = Object.create(SUBSCRIPTIONS_BY_PROPERTY_PROTOTYPE);
		
		  subscriptionsByProperty.subscriptions = {};
		
		  return subscriptionsByProperty;
		};
		
		exports.SUBSCRIPTIONS_BY_PROPERTY_PROTOTYPE = SUBSCRIPTIONS_BY_PROPERTY_PROTOTYPE;
	
	/***/ },
	/* 64 */
	/***/ function(module, exports) {
	
		'use strict';
		
		/* singleton object used to hold subscription objects by their UUID */
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		exports['default'] = {};
		module.exports = exports['default'];
	
	/***/ },
	/* 65 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
		
		exports['default'] = function (_ref) {
		  var subscriptionUUID = _ref.subscriptionUUID;
		  var subscriptionsByUUID = _ref.subscriptionsByUUID;
		  var subscriptionsByProperty = _ref.subscriptionsByProperty;
		
		  var subscription = subscriptionsByUUID[subscriptionUUID];
		
		  if (subscription) {
		    /* remove the subscription from the subscriptionsByUUID object */
		    delete subscriptionsByUUID[subscriptionUUID];
		
		    /* remove references to the subscription from each of the subscribed properties */
		    subscription.properties.forEach(function (property) {
		      subscriptionsByProperty.remove({ property: property, subscription: subscription });
		    });
		  }
		};
		
		module.exports = exports['default'];
	
	/***/ }
	/******/ ]);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWM1ZmUwN2IxN2FlODZhMGE3YTUiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9nZXRIYXNoUGFyYW1zLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvaGFzaENoYW5nZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvYXJyYXkvaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2luZGV4T2ZOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY2FjaGVJbmRleE9mLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY2FjaGVQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9mdW5jdGlvbi9yZXN0UGFyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvYXJyYXkvZmxhdHRlbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRmxhdHRlbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNJdGVyYXRlZUNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2tleXNXaXRoQ2hhbmdlZFZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9hcnJheS91bmlxdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvYXJyYXkvdW5pcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9lcXVhbEJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2VxdWFsT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9zaGltS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9vYmplY3Qva2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL3RvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2dldE1hdGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L3BhaXJzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlU2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvYXJyYXkvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC90b1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2JpbmRDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC91dGlsaXR5L2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3V0aWxpdHkvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVByb3BlcnR5RGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlVW5pcS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9zb3J0ZWRVbmlxLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3Vic2NyaWJlLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL34vbm9kZS11dWlkL3V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdWJzY3JpcHRpb25zQnlQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3N1YnNjcmlwdGlvbnNCeVVVSUQuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC91bnN1YnNjcmliZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0EsYUFBWSxDQUFDOzs7Ozs7OztvREFFdUIsQ0FBMEI7Ozs7d0RBQzFCLENBQThCOzs7OzREQUM5QixFQUFrQzs7OztnREFDbEMsRUFBc0I7Ozs7bURBQ3RCLEVBQXlCOzs7OzhEQUN6QixFQUFvQzs7OzswREFDcEMsRUFBZ0M7Ozs7a0RBQ2hDLEVBQXdCOzs7O0FBRTVELEtBQUksdUJBQXVCLEdBQUcscURBQXlCLENBQUM7OztzQkFHekM7QUFDYix1QkFBb0Isa0NBQUc7QUFDckIsU0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDckIsV0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osV0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7TUFDekI7SUFDRjtBQUNELE9B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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMvREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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O09BQUUsdUJBQXVCLEdBQS9ELElBQWdFLENBQXhCLHVCQUF1Qjs7QUFDN0UsT0FBSSxZQUFZLEdBQUcsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7QUFFekQsT0FBSSxZQUFZLEVBQUU7O0FBRWhCLFlBQU8sbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7O0FBRzdDLGlCQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxFQUFJO0FBQzFDLDhCQUF1QixDQUFDLE1BQU0sQ0FBQyxFQUFDLFFBQVEsRUFBUixRQUFRLEVBQUUsWUFBWSxFQUFaLFlBQVksRUFBQyxDQUFDLENBQUM7TUFDMUQsQ0FBQyxDQUFDO0lBQ0o7RUFDRiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDljNWZlMDdiMTdhZTg2YTBhN2E1XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ2V0SGFzaFBhcmFtcyAgICAgICAgICAgZnJvbSAnamF2YXNjcmlwdC9nZXRIYXNoUGFyYW1zJztcbmltcG9ydCBoYXNoQ2hhbmdlSGFuZGxlciAgICAgICBmcm9tICdqYXZhc2NyaXB0L2hhc2hDaGFuZ2VIYW5kbGVyJztcbmltcG9ydCBrZXlzV2l0aENoYW5nZWRWYWx1ZXMgICBmcm9tICdqYXZhc2NyaXB0L2tleXNXaXRoQ2hhbmdlZFZhbHVlcyc7XG5pbXBvcnQgc3Vic2NyaWJlICAgICAgICAgICAgICAgZnJvbSAnamF2YXNjcmlwdC9zdWJzY3JpYmUnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiAgICAgICAgICAgIGZyb20gJ2phdmFzY3JpcHQvU3Vic2NyaXB0aW9uJztcbmltcG9ydCBTdWJzY3JpcHRpb25zQnlQcm9wZXJ0eSBmcm9tICdqYXZhc2NyaXB0L3N1YnNjcmlwdGlvbnNCeVByb3BlcnR5JztcbmltcG9ydCBzdWJzY3JpcHRpb25zQnlVVUlEICAgICBmcm9tICdqYXZhc2NyaXB0L3N1YnNjcmlwdGlvbnNCeVVVSUQnO1xuaW1wb3J0IHVuc3Vic2NyaWJlICAgICAgICAgICAgIGZyb20gJ2phdmFzY3JpcHQvdW5zdWJzY3JpYmUnO1xuXG5sZXQgc3Vic2NyaXB0aW9uc0J5UHJvcGVydHkgPSBTdWJzY3JpcHRpb25zQnlQcm9wZXJ0eSgpO1xuXG4vKiBwcm9iYWJseSBzaG91bGQgbWlncmF0ZSB0aGlzIHRvIGEgZmFjdG9yeSBhdCBzb21lIHBvaW50IHRvIGF2b2lkIHBvc3NpYmxlIHNpbmdsZXRvbiBpc3N1ZXMgKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZW5zdXJlSW5pdGlhbGl6YXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgaW5pdCgpIHtcbiAgICByZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICBoYXNoQ2hhbmdlSGFuZGxlcih7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBnZXRIYXNoUGFyYW1zLFxuICAgICAgICBrZXlzV2l0aENoYW5nZWRWYWx1ZXMsXG4gICAgICAgIHN1YnNjcmlwdGlvbnNCeVByb3BlcnR5LFxuICAgICAgICBzdWJzY3JpcHRpb25zQnlVVUlEXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgc3Vic2NyaWJlKHByb3BlcnRpZXMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lbnN1cmVJbml0aWFsaXphdGlvbigpO1xuXG4gICAgcmV0dXJuIHN1YnNjcmliZSh7XG4gICAgICBTdWJzY3JpcHRpb24sXG4gICAgICBzdWJzY3JpcHRpb25zQnlVVUlELFxuICAgICAgc3Vic2NyaXB0aW9uc0J5UHJvcGVydHksXG4gICAgICBwcm9wZXJ0aWVzLFxuICAgICAgY2FsbGJhY2tcbiAgICB9KTtcbiAgfSxcbiAgdW5zdWJzY3JpYmUoc3Vic2NyaXB0aW9uVVVJRCkge1xuICAgIHVuc3Vic2NyaWJlKHtcbiAgICAgIHN1YnNjcmlwdGlvblVVSUQsXG4gICAgICBzdWJzY3JpcHRpb25zQnlVVUlELFxuICAgICAgc3Vic2NyaXB0aW9uc0J5UHJvcGVydHlcbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vamF2YXNjcmlwdC9hcGkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh1cmwpID0+IHtcbiAgbGV0IFtfLCB1cmxIYXNoXSA9IHVybC5zcGxpdCgnIycpO1xuXG4gIHVybEhhc2ggPSB1cmxIYXNoIHx8ICcnO1xuICByZXR1cm4gdXJsSGFzaC5zcGxpdCgnJicpLnJlZHVjZSgoaGFzaCwga2V5VmFsdWVQYWlyKSA9PiB7XG4gICAgbGV0IFtrZXksIHZhbHVlXSA9IGtleVZhbHVlUGFpci5zcGxpdCgnPScpO1xuXG4gICAgaWYgKHZhbHVlIHx8ICFpc05hTih2YWx1ZSkpe1xuICAgICAgaWYoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIGhhc2hba2V5XSA9IHZhbHVlOyAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNoW2tleV0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleS5sZW5ndGggPiAwKSB7XG4gICAgICBoYXNoW2tleV0gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNoO1xuICB9LCB7fSk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qYXZhc2NyaXB0L2dldEhhc2hQYXJhbXMuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBpbnRlcnNlY3Rpb24gZnJvbSAnbG9kYXNoL2FycmF5L2ludGVyc2VjdGlvbic7XG5pbXBvcnQgZmxhdHRlbiBmcm9tICdsb2Rhc2gvYXJyYXkvZmxhdHRlbic7XG5pbXBvcnQgdW5pcXVlIGZyb20gJ2xvZGFzaC9hcnJheS9pbnRlcnNlY3Rpb24nO1xuXG4vKiBuZWVkcyBzdWJzY3JpcHRpb24gc2V0cyB0byBiZSBkZWZpbmVkIHNvbWV3aGVyZSAqL1xuLyogYW4gZXZlbnQgd2l0aCBhIHN1YnNjcmlwdGlvbiBzZXQgd2lsbCBvbmx5IGZpcmUgb25jZSAqL1xuLyogZm9yIGFsbCBvZiB0aGUgY2hhbmdlcyBpbiB0aGUgc2V0LiAqL1xuXG5leHBvcnQgZGVmYXVsdCAoe2dldEhhc2hQYXJhbXMsIHN1YnNjcmlwdGlvbnNCeVByb3BlcnR5LCBzdWJzY3JpcHRpb25zQnlVVUlELCBrZXlzV2l0aENoYW5nZWRWYWx1ZXMsIGV2ZW50fSkgPT4ge1xuICAvKiBnZXQgdGhlIG5ldyBwYXJhbXMgb2JqZWN0ICovXG4gIC8qIGdldCB0aGUgb2xkIHBhcmFtcyBvYmplY3QgKi9cbiAgbGV0IG9sZFBhcmFtcyA9IGdldEhhc2hQYXJhbXMoZXZlbnQub2xkVVJMKTtcbiAgbGV0IG5ld1BhcmFtcyA9IGdldEhhc2hQYXJhbXMoZXZlbnQubmV3VVJMKTtcblxuICBsZXQgc3Vic2NyaWJlZEtleXMgPSBPYmplY3Qua2V5cyhzdWJzY3JpcHRpb25zQnlQcm9wZXJ0eS5zdWJzY3JpcHRpb25zKTtcblxuICAvKiBpZGVudGlmeSB0aGUga2V5cyB3aXRoIGNoYW5nZWQgdmFsdWVzICovXG4gIGxldCBrZXlzV2l0aENoYW5nZXMgPSBrZXlzV2l0aENoYW5nZWRWYWx1ZXMob2xkUGFyYW1zLCBuZXdQYXJhbXMpO1xuXG4gIGxldCBrZXlzV2l0aFN1YnNjcmliZWRFdmVudHMgPSBpbnRlcnNlY3Rpb24oa2V5c1dpdGhDaGFuZ2VzLCBzdWJzY3JpYmVkS2V5cyk7XG5cbiAgLy8ga2V5c1dpdGhTdWJzY3JpYmVkRXZlbnRzLlxuICAvKiBsb29wIHRocm91Z2ggYWxsIG9mIHRoZSBzdWJzY3JpYmVkRXZlbnQgbmFtZXMgbG9va2luZyAqL1xuICAvKiBmb3IgZGlmZmVyZW5jZXMgYmV0d2VlbiBuZXdQYXJhbXMgYW5kIG9sZFBhcmFtcyAqL1xuICBsZXQgc3Vic2NyaXB0aW9uVVVJRHMgPSBrZXlzV2l0aFN1YnNjcmliZWRFdmVudHMubWFwKGtleSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHN1YnNjcmlwdGlvbnNCeVByb3BlcnR5LnN1YnNjcmlwdGlvbnNba2V5XSk7XG4gIH0pO1xuXG4gIHN1YnNjcmlwdGlvblVVSURzID0gdW5pcXVlKGZsYXR0ZW4oc3Vic2NyaXB0aW9uVVVJRHMpKTtcblxuICAvKiB0cmlnZ2VyIGV2ZW50cyBmb3IgZWFjaCBvZiB0aGUgZXZlbnRzIGZvdW5kICovXG5cbiAgbGV0IHN1YnNjcmlwdGlvbnMgPSBzdWJzY3JpcHRpb25VVUlEcy5tYXAoc3Vic2NyaXB0aW9uVVVJRCA9PiBzdWJzY3JpcHRpb25zQnlVVUlEW3N1YnNjcmlwdGlvblVVSURdKTtcblxuICBzdWJzY3JpcHRpb25zLmZvckVhY2goc3Vic2NyaXB0aW9uID0+IHsgc3Vic2NyaXB0aW9uLmNhbGxiYWNrKG5ld1BhcmFtcyk7IH0pO1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vamF2YXNjcmlwdC9oYXNoQ2hhbmdlSGFuZGxlci5qc1xuICoqLyIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VJbmRleE9mJyksXG4gICAgY2FjaGVJbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY2FjaGVJbmRleE9mJyksXG4gICAgY3JlYXRlQ2FjaGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jcmVhdGVDYWNoZScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNBcnJheUxpa2UnKSxcbiAgICByZXN0UGFyYW0gPSByZXF1aXJlKCcuLi9mdW5jdGlvbi9yZXN0UGFyYW0nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHVuaXF1ZSB2YWx1ZXMgdGhhdCBhcmUgaW5jbHVkZWQgaW4gYWxsIG9mIHRoZSBwcm92aWRlZFxuICogYXJyYXlzIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHsuLi5BcnJheX0gW2FycmF5c10gVGhlIGFycmF5cyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2Ygc2hhcmVkIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKiBfLmludGVyc2VjdGlvbihbMSwgMl0sIFs0LCAyXSwgWzIsIDFdKTtcbiAqIC8vID0+IFsyXVxuICovXG52YXIgaW50ZXJzZWN0aW9uID0gcmVzdFBhcmFtKGZ1bmN0aW9uKGFycmF5cykge1xuICB2YXIgb3RoTGVuZ3RoID0gYXJyYXlzLmxlbmd0aCxcbiAgICAgIG90aEluZGV4ID0gb3RoTGVuZ3RoLFxuICAgICAgY2FjaGVzID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgIGluZGV4T2YgPSBiYXNlSW5kZXhPZixcbiAgICAgIGlzQ29tbW9uID0gdHJ1ZSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlIChvdGhJbmRleC0tKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlzW290aEluZGV4XSA9IGlzQXJyYXlMaWtlKHZhbHVlID0gYXJyYXlzW290aEluZGV4XSkgPyB2YWx1ZSA6IFtdO1xuICAgIGNhY2hlc1tvdGhJbmRleF0gPSAoaXNDb21tb24gJiYgdmFsdWUubGVuZ3RoID49IDEyMCkgPyBjcmVhdGVDYWNoZShvdGhJbmRleCAmJiB2YWx1ZSkgOiBudWxsO1xuICB9XG4gIHZhciBhcnJheSA9IGFycmF5c1swXSxcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDAsXG4gICAgICBzZWVuID0gY2FjaGVzWzBdO1xuXG4gIG91dGVyOlxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmICgoc2VlbiA/IGNhY2hlSW5kZXhPZihzZWVuLCB2YWx1ZSkgOiBpbmRleE9mKHJlc3VsdCwgdmFsdWUsIDApKSA8IDApIHtcbiAgICAgIHZhciBvdGhJbmRleCA9IG90aExlbmd0aDtcbiAgICAgIHdoaWxlICgtLW90aEluZGV4KSB7XG4gICAgICAgIHZhciBjYWNoZSA9IGNhY2hlc1tvdGhJbmRleF07XG4gICAgICAgIGlmICgoY2FjaGUgPyBjYWNoZUluZGV4T2YoY2FjaGUsIHZhbHVlKSA6IGluZGV4T2YoYXJyYXlzW290aEluZGV4XSwgdmFsdWUsIDApKSA8IDApIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlZW4pIHtcbiAgICAgICAgc2Vlbi5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludGVyc2VjdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9hcnJheS9pbnRlcnNlY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaW5kZXhPZk5hTiA9IHJlcXVpcmUoJy4vaW5kZXhPZk5hTicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYmluYXJ5IHNlYXJjaGVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgaWYgKHZhbHVlICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBpbmRleE9mTmFOKGFycmF5LCBmcm9tSW5kZXgpO1xuICB9XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUluZGV4T2YuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGBOYU5gIGlzIGZvdW5kIGluIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgYE5hTmAsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gaW5kZXhPZk5hTihhcnJheSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDAgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICB2YXIgb3RoZXIgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKG90aGVyICE9PSBvdGhlcikge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZXhPZk5hTjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pbmRleE9mTmFOLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIGBjYWNoZWAgbWltaWNraW5nIHRoZSByZXR1cm4gc2lnbmF0dXJlIG9mXG4gKiBgXy5pbmRleE9mYCBieSByZXR1cm5pbmcgYDBgIGlmIHRoZSB2YWx1ZSBpcyBmb3VuZCwgZWxzZSBgLTFgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGAwYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSW5kZXhPZihjYWNoZSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBjYWNoZS5kYXRhLFxuICAgICAgcmVzdWx0ID0gKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc09iamVjdCh2YWx1ZSkpID8gZGF0YS5zZXQuaGFzKHZhbHVlKSA6IGRhdGEuaGFzaFt2YWx1ZV07XG5cbiAgcmV0dXJuIHJlc3VsdCA/IDAgOiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUluZGV4T2Y7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvY2FjaGVJbmRleE9mLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9TZXRDYWNoZScpLFxuICAgIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vZ2V0TmF0aXZlJyk7XG5cbi8qKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKGdsb2JhbCwgJ1NldCcpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYFNldGAgY2FjaGUgb2JqZWN0IHRvIG9wdGltaXplIGxpbmVhciBzZWFyY2hlcyBvZiBsYXJnZSBhcnJheXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7bnVsbHxPYmplY3R9IFJldHVybnMgdGhlIG5ldyBjYWNoZSBvYmplY3QgaWYgYFNldGAgaXMgc3VwcG9ydGVkLCBlbHNlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FjaGUodmFsdWVzKSB7XG4gIHJldHVybiAobmF0aXZlQ3JlYXRlICYmIFNldCkgPyBuZXcgU2V0Q2FjaGUodmFsdWVzKSA6IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2FjaGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQ2FjaGUuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2FjaGVQdXNoID0gcmVxdWlyZSgnLi9jYWNoZVB1c2gnKSxcbiAgICBnZXROYXRpdmUgPSByZXF1aXJlKCcuL2dldE5hdGl2ZScpO1xuXG4vKiogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShnbG9iYWwsICdTZXQnKTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZXMgPyB2YWx1ZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmRhdGEgPSB7ICdoYXNoJzogbmF0aXZlQ3JlYXRlKG51bGwpLCAnc2V0JzogbmV3IFNldCB9O1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB0aGlzLnB1c2godmFsdWVzW2xlbmd0aF0pO1xuICB9XG59XG5cbi8vIEFkZCBmdW5jdGlvbnMgdG8gdGhlIGBTZXRgIGNhY2hlLlxuU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBjYWNoZVB1c2g7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvU2V0Q2FjaGUuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgcHVzaFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gY2FjaGVQdXNoKHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIGRhdGEuc2V0LmFkZCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YS5oYXNoW3ZhbHVlXSA9IHRydWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZVB1c2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvY2FjaGVQdXNoLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc05hdGl2ZSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNOYXRpdmUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIHJldHVybiBpc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpID4gNSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZm5Ub1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZywgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc05hdGl2ZShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc05hdGl2ZShfKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHJldHVybiByZUlzTmF0aXZlLnRlc3QoZm5Ub1N0cmluZy5jYWxsKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgcmVJc0hvc3RDdG9yLnRlc3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTmF0aXZlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNOYXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaSB3aGljaCByZXR1cm4gJ2Z1bmN0aW9uJyBmb3IgcmVnZXhlc1xuICAvLyBhbmQgU2FmYXJpIDggd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLlxuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGZ1bmNUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzRnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc09iamVjdExpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldExlbmd0aCA9IHJlcXVpcmUoJy4vZ2V0TGVuZ3RoJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzQXJyYXlMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL2Jhc2VQcm9wZXJ0eScpO1xuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuICogdGhhdCBhZmZlY3RzIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldExlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXRMZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIGJhc2VkIG9uIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNMZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlXG4gKiBjcmVhdGVkIGZ1bmN0aW9uIGFuZCBhcmd1bWVudHMgZnJvbSBgc3RhcnRgIGFuZCBiZXlvbmQgcHJvdmlkZWQgYXMgYW4gYXJyYXkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGJhc2VkIG9uIHRoZSBbcmVzdCBwYXJhbWV0ZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9GdW5jdGlvbnMvcmVzdF9wYXJhbWV0ZXJzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBzYXkgPSBfLnJlc3RQYXJhbShmdW5jdGlvbih3aGF0LCBuYW1lcykge1xuICogICByZXR1cm4gd2hhdCArICcgJyArIF8uaW5pdGlhbChuYW1lcykuam9pbignLCAnKSArXG4gKiAgICAgKF8uc2l6ZShuYW1lcykgPiAxID8gJywgJiAnIDogJycpICsgXy5sYXN0KG5hbWVzKTtcbiAqIH0pO1xuICpcbiAqIHNheSgnaGVsbG8nLCAnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcycpO1xuICogLy8gPT4gJ2hlbGxvIGZyZWQsIGJhcm5leSwgJiBwZWJibGVzJ1xuICovXG5mdW5jdGlvbiByZXN0UGFyYW0oZnVuYywgc3RhcnQpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogKCtzdGFydCB8fCAwKSwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICByZXN0ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICByZXN0W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIHN3aXRjaCAoc3RhcnQpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCByZXN0KTtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCByZXN0KTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCBhcmdzWzFdLCByZXN0KTtcbiAgICB9XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgaW5kZXggPSAtMTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSByZXN0O1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzdFBhcmFtO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2Z1bmN0aW9uL3Jlc3RQYXJhbS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlRmxhdHRlbicpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJdGVyYXRlZUNhbGwnKTtcblxuLyoqXG4gKiBGbGF0dGVucyBhIG5lc3RlZCBhcnJheS4gSWYgYGlzRGVlcGAgaXMgYHRydWVgIHRoZSBhcnJheSBpcyByZWN1cnNpdmVseVxuICogZmxhdHRlbmVkLCBvdGhlcndpc2UgaXQncyBvbmx5IGZsYXR0ZW5lZCBhIHNpbmdsZSBsZXZlbC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgZmxhdHRlbi5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhIGNhbGxiYWNrIGZvciBmdW5jdGlvbnMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmZsYXR0ZW4oWzEsIFsyLCAzLCBbNF1dXSk7XG4gKiAvLyA9PiBbMSwgMiwgMywgWzRdXVxuICpcbiAqIC8vIHVzaW5nIGBpc0RlZXBgXG4gKiBfLmZsYXR0ZW4oWzEsIFsyLCAzLCBbNF1dXSwgdHJ1ZSk7XG4gKiAvLyA9PiBbMSwgMiwgMywgNF1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbihhcnJheSwgaXNEZWVwLCBndWFyZCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoYXJyYXksIGlzRGVlcCwgZ3VhcmQpKSB7XG4gICAgaXNEZWVwID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGxlbmd0aCA/IGJhc2VGbGF0dGVuKGFycmF5LCBpc0RlZXApIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9hcnJheS9mbGF0dGVuLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL2FycmF5UHVzaCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggYWRkZWQgc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmdcbiAqIGZsYXR0ZW5pbmcgYW5kIHNwZWNpZnlpbmcgdGhlIHN0YXJ0IGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgZmxhdHRlbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU3RyaWN0XSBSZXN0cmljdCBmbGF0dGVuaW5nIHRvIGFycmF5cy1saWtlIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBpc0RlZXAsIGlzU3RyaWN0LCByZXN1bHQpIHtcbiAgcmVzdWx0IHx8IChyZXN1bHQgPSBbXSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpICYmXG4gICAgICAgIChpc1N0cmljdCB8fCBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgICBpZiAoaXNEZWVwKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICAgIGJhc2VGbGF0dGVuKHZhbHVlLCBpc0RlZXAsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRmxhdHRlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2FycmF5UHVzaC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKSAmJlxuICAgIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJiAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNBcmd1bWVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2dldE5hdGl2ZScpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNBcnJheSA9IGdldE5hdGl2ZShBcnJheSwgJ2lzQXJyYXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcnJheVRhZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL2lzSW5kZXgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdCkpIHtcbiAgICB2YXIgb3RoZXIgPSBvYmplY3RbaW5kZXhdO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyAodmFsdWUgPT09IG90aGVyKSA6IChvdGhlciAhPT0gb3RoZXIpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0l0ZXJhdGVlQ2FsbDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0l0ZXJhdGVlQ2FsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXlxcZCskLztcblxuLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpID8gK3ZhbHVlIDogLTE7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHVuaXF1ZSBmcm9tICdsb2Rhc2gvYXJyYXkvdW5pcXVlJztcblxuZXhwb3J0IGRlZmF1bHQgKG9sZFBhcmFtcywgbmV3UGFyYW1zKSA9PiB7XG4gIGxldCBvbGRLZXlzID0gT2JqZWN0LmtleXMob2xkUGFyYW1zKTtcbiAgbGV0IG5ld0tleXMgPSBPYmplY3Qua2V5cyhuZXdQYXJhbXMpO1xuXG4gIGxldCBhbGxLZXlzID0gdW5pcXVlKG9sZEtleXMuY29uY2F0KG5ld0tleXMpKTtcblxuICByZXR1cm4gYWxsS2V5cy5maWx0ZXIoa2V5ID0+IHtcbiAgICBsZXQgb2xkVmFsdWUgPSBvbGRQYXJhbXNba2V5XTtcbiAgICBsZXQgbmV3VmFsdWUgPSBuZXdQYXJhbXNba2V5XTtcblxuICAgIC8qIGhhbmRsZSBOYU4gKi9cbiAgICBpZiAob2xkVmFsdWUgIT09IG9sZFZhbHVlICYmIG5ld1ZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgLyogYm90aCBvbGRWYWx1ZSBhbmQgbmV3VmFsdWUgZXF1YWwgTmFOICovXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9sZFZhbHVlICE9PSBuZXdWYWx1ZTtcbiAgfSk7XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qYXZhc2NyaXB0L2tleXNXaXRoQ2hhbmdlZFZhbHVlcy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi91bmlxJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvYXJyYXkvdW5pcXVlLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlVW5pcSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VVbmlxJyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0l0ZXJhdGVlQ2FsbCcpLFxuICAgIHNvcnRlZFVuaXEgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9zb3J0ZWRVbmlxJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGR1cGxpY2F0ZS1mcmVlIHZlcnNpb24gb2YgYW4gYXJyYXksIHVzaW5nXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpbiB3aGljaCBvbmx5IHRoZSBmaXJzdCBvY2N1cmVuY2Ugb2YgZWFjaCBlbGVtZW50XG4gKiBpcyBrZXB0LiBQcm92aWRpbmcgYHRydWVgIGZvciBgaXNTb3J0ZWRgIHBlcmZvcm1zIGEgZmFzdGVyIHNlYXJjaCBhbGdvcml0aG1cbiAqIGZvciBzb3J0ZWQgYXJyYXlzLiBJZiBhbiBpdGVyYXRlZSBmdW5jdGlvbiBpcyBwcm92aWRlZCBpdCdzIGludm9rZWQgZm9yXG4gKiBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IHRvIGdlbmVyYXRlIHRoZSBjcml0ZXJpb24gYnkgd2hpY2ggdW5pcXVlbmVzc1xuICogaXMgY29tcHV0ZWQuIFRoZSBgaXRlcmF0ZWVgIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZCB3aXRoIHRocmVlXG4gKiBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXgsIGFycmF5KS5cbiAqXG4gKiBJZiBhIHByb3BlcnR5IG5hbWUgaXMgcHJvdmlkZWQgZm9yIGBpdGVyYXRlZWAgdGhlIGNyZWF0ZWQgYF8ucHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBJZiBhIHZhbHVlIGlzIGFsc28gcHJvdmlkZWQgZm9yIGB0aGlzQXJnYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzUHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIGEgbWF0Y2hpbmcgcHJvcGVydHlcbiAqIHZhbHVlLCBlbHNlIGBmYWxzZWAuXG4gKlxuICogSWYgYW4gb2JqZWN0IGlzIHByb3ZpZGVkIGZvciBgaXRlcmF0ZWVgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNgIHN0eWxlXG4gKiBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlblxuICogb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyB1bmlxdWVcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1NvcnRlZF0gU3BlY2lmeSB0aGUgYXJyYXkgaXMgc29ydGVkLlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R8c3RyaW5nfSBbaXRlcmF0ZWVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGl0ZXJhdGVlYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZS12YWx1ZS1mcmVlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaXEoWzIsIDEsIDJdKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIC8vIHVzaW5nIGBpc1NvcnRlZGBcbiAqIF8udW5pcShbMSwgMSwgMl0sIHRydWUpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gdXNpbmcgYW4gaXRlcmF0ZWUgZnVuY3Rpb25cbiAqIF8udW5pcShbMSwgMi41LCAxLjUsIDJdLCBmdW5jdGlvbihuKSB7XG4gKiAgIHJldHVybiB0aGlzLmZsb29yKG4pO1xuICogfSwgTWF0aCk7XG4gKiAvLyA9PiBbMSwgMi41XVxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5wcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnVuaXEoW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH0sIHsgJ3gnOiAxIH1dLCAneCcpO1xuICogLy8gPT4gW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH1dXG4gKi9cbmZ1bmN0aW9uIHVuaXEoYXJyYXksIGlzU29ydGVkLCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoaXNTb3J0ZWQgIT0gbnVsbCAmJiB0eXBlb2YgaXNTb3J0ZWQgIT0gJ2Jvb2xlYW4nKSB7XG4gICAgdGhpc0FyZyA9IGl0ZXJhdGVlO1xuICAgIGl0ZXJhdGVlID0gaXNJdGVyYXRlZUNhbGwoYXJyYXksIGlzU29ydGVkLCB0aGlzQXJnKSA/IHVuZGVmaW5lZCA6IGlzU29ydGVkO1xuICAgIGlzU29ydGVkID0gZmFsc2U7XG4gIH1cbiAgaXRlcmF0ZWUgPSBpdGVyYXRlZSA9PSBudWxsID8gaXRlcmF0ZWUgOiBiYXNlQ2FsbGJhY2soaXRlcmF0ZWUsIHRoaXNBcmcsIDMpO1xuICByZXR1cm4gKGlzU29ydGVkKVxuICAgID8gc29ydGVkVW5pcShhcnJheSwgaXRlcmF0ZWUpXG4gICAgOiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvYXJyYXkvdW5pcS5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL2Jhc2VNYXRjaGVzJyksXG4gICAgYmFzZU1hdGNoZXNQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGJpbmRDYWxsYmFjayA9IHJlcXVpcmUoJy4vYmluZENhbGxiYWNrJyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuLi91dGlsaXR5L2lkZW50aXR5JyksXG4gICAgcHJvcGVydHkgPSByZXF1aXJlKCcuLi91dGlsaXR5L3Byb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2FsbGJhY2tgIHdoaWNoIHN1cHBvcnRzIHNwZWNpZnlpbmcgdGhlXG4gKiBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IFtmdW5jPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGEgY2FsbGJhY2suXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtudW1iZXJ9IFthcmdDb3VudF0gVGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGNhbGxiYWNrLlxuICovXG5mdW5jdGlvbiBiYXNlQ2FsbGJhY2soZnVuYywgdGhpc0FyZywgYXJnQ291bnQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgZnVuYztcbiAgaWYgKHR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0aGlzQXJnID09PSB1bmRlZmluZWRcbiAgICAgID8gZnVuY1xuICAgICAgOiBiaW5kQ2FsbGJhY2soZnVuYywgdGhpc0FyZywgYXJnQ291bnQpO1xuICB9XG4gIGlmIChmdW5jID09IG51bGwpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHR5cGUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gYmFzZU1hdGNoZXMoZnVuYyk7XG4gIH1cbiAgcmV0dXJuIHRoaXNBcmcgPT09IHVuZGVmaW5lZFxuICAgID8gcHJvcGVydHkoZnVuYylcbiAgICA6IGJhc2VNYXRjaGVzUHJvcGVydHkoZnVuYywgdGhpc0FyZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNhbGxiYWNrO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VDYWxsYmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9nZXRNYXRjaERhdGEnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2VzIG5vdCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHZhciBrZXkgPSBtYXRjaERhdGFbMF1bMF0sXG4gICAgICAgIHZhbHVlID0gbWF0Y2hEYXRhWzBdWzFdO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gdmFsdWUgJiYgKHZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiB0b09iamVjdChvYmplY3QpKSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VJc01hdGNoKG9iamVjdCwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlTWF0Y2hlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL2Jhc2VJc0VxdWFsJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5KSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBjdXN0b21pemVyLCB0cnVlKSA6IHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNNYXRjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYHRoaXNgIGJpbmRpbmdcbiAqIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzTG9vc2VdIFNwZWNpZnkgcGVyZm9ybWluZyBwYXJ0aWFsIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQV0gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tCXSBUcmFja3MgdHJhdmVyc2VkIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdCh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJhc2VJc0VxdWFsLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzRXF1YWwuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL2VxdWFsT2JqZWN0cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIG9iamVjdHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0E9W11dIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQj1bXV0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IGFycmF5VGFnLFxuICAgICAgb3RoVGFnID0gYXJyYXlUYWc7XG5cbiAgaWYgKCFvYmpJc0Fycikge1xuICAgIG9ialRhZyA9IG9ialRvU3RyaW5nLmNhbGwob2JqZWN0KTtcbiAgICBpZiAob2JqVGFnID09IGFyZ3NUYWcpIHtcbiAgICAgIG9ialRhZyA9IG9iamVjdFRhZztcbiAgICB9IGVsc2UgaWYgKG9ialRhZyAhPSBvYmplY3RUYWcpIHtcbiAgICAgIG9iaklzQXJyID0gaXNUeXBlZEFycmF5KG9iamVjdCk7XG4gICAgfVxuICB9XG4gIGlmICghb3RoSXNBcnIpIHtcbiAgICBvdGhUYWcgPSBvYmpUb1N0cmluZy5jYWxsKG90aGVyKTtcbiAgICBpZiAob3RoVGFnID09IGFyZ3NUYWcpIHtcbiAgICAgIG90aFRhZyA9IG9iamVjdFRhZztcbiAgICB9IGVsc2UgaWYgKG90aFRhZyAhPSBvYmplY3RUYWcpIHtcbiAgICAgIG90aElzQXJyID0gaXNUeXBlZEFycmF5KG90aGVyKTtcbiAgICB9XG4gIH1cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiAhKG9iaklzQXJyIHx8IG9iaklzT2JqKSkge1xuICAgIHJldHVybiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZyk7XG4gIH1cbiAgaWYgKCFpc0xvb3NlKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCwgb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZGV0ZWN0aW5nIGNpcmN1bGFyIHJlZmVyZW5jZXMgc2VlIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jSk8uXG4gIHN0YWNrQSB8fCAoc3RhY2tBID0gW10pO1xuICBzdGFja0IgfHwgKHN0YWNrQiA9IFtdKTtcblxuICB2YXIgbGVuZ3RoID0gc3RhY2tBLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKHN0YWNrQVtsZW5ndGhdID09IG9iamVjdCkge1xuICAgICAgcmV0dXJuIHN0YWNrQltsZW5ndGhdID09IG90aGVyO1xuICAgIH1cbiAgfVxuICAvLyBBZGQgYG9iamVjdGAgYW5kIGBvdGhlcmAgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICBzdGFja0EucHVzaChvYmplY3QpO1xuICBzdGFja0IucHVzaChvdGhlcik7XG5cbiAgdmFyIHJlc3VsdCA9IChvYmpJc0FyciA/IGVxdWFsQXJyYXlzIDogZXF1YWxPYmplY3RzKShvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKTtcblxuICBzdGFja0EucG9wKCk7XG4gIHN0YWNrQi5wb3AoKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNFcXVhbERlZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vYXJyYXlTb21lJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIGFycmF5cy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzTG9vc2VdIFNwZWNpZnkgcGVyZm9ybWluZyBwYXJ0aWFsIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQV0gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tCXSBUcmFja3MgdHJhdmVyc2VkIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzTG9vc2UgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XSxcbiAgICAgICAgcmVzdWx0ID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIoaXNMb29zZSA/IG90aFZhbHVlIDogYXJyVmFsdWUsIGlzTG9vc2UgPyBhcnJWYWx1ZSA6IG90aFZhbHVlLCBpbmRleCkgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKGlzTG9vc2UpIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9lcXVhbEFycmF5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheVNvbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtYmVycywgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzIGFuZCBib29sZWFuc1xuICAgICAgLy8gdG8gYDFgIG9yIGAwYCB0cmVhdGluZyBpbnZhbGlkIGRhdGVzIGNvZXJjZWQgdG8gYE5hTmAgYXMgbm90IGVxdWFsLlxuICAgICAgcmV0dXJuICtvYmplY3QgPT0gK290aGVyO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIFRyZWF0IGBOYU5gIHZzLiBgTmFOYCBhcyBlcXVhbC5cbiAgICAgIHJldHVybiAob2JqZWN0ICE9ICtvYmplY3QpXG4gICAgICAgID8gb3RoZXIgIT0gK290aGVyXG4gICAgICAgIDogb2JqZWN0ID09ICtvdGhlcjtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncyBwcmltaXRpdmVzIGFuZCBzdHJpbmdcbiAgICAgIC8vIG9iamVjdHMgYXMgZXF1YWwuIFNlZSBodHRwczovL2VzNS5naXRodWIuaW8vI3gxNS4xMC42LjQgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2VxdWFsQnlUYWcuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGtleXMgPSByZXF1aXJlKCcuLi9vYmplY3Qva2V5cycpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpbmcgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0JdIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciBvYmpQcm9wcyA9IGtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0ga2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzTG9vc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNMb29zZSA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHZhciBza2lwQ3RvciA9IGlzTG9vc2U7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV0sXG4gICAgICAgIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKGlzTG9vc2UgPyBvdGhWYWx1ZSA6IG9ialZhbHVlLCBpc0xvb3NlPyBvYmpWYWx1ZSA6IG90aFZhbHVlLCBrZXkpIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWQgPyBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikgOiByZXN1bHQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAoIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9lcXVhbE9iamVjdHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2dldE5hdGl2ZScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKSxcbiAgICBzaGltS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3NoaW1LZXlzJyk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IGdldE5hdGl2ZShPYmplY3QsICdrZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbnZhciBrZXlzID0gIW5hdGl2ZUtleXMgPyBzaGltS2V5cyA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgQ3RvciA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCkgfHxcbiAgICAgICh0eXBlb2Ygb2JqZWN0ICE9ICdmdW5jdGlvbicgJiYgaXNBcnJheUxpa2Uob2JqZWN0KSkpIHtcbiAgICByZXR1cm4gc2hpbUtleXMob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3Qob2JqZWN0KSA/IG5hdGl2ZUtleXMob2JqZWN0KSA6IFtdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL29iamVjdC9rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vaXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBmYWxsYmFjayBpbXBsZW1lbnRhdGlvbiBvZiBgT2JqZWN0LmtleXNgIHdoaWNoIGNyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlXG4gKiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gc2hpbUtleXMob2JqZWN0KSB7XG4gIHZhciBwcm9wcyA9IGtleXNJbihvYmplY3QpLFxuICAgICAgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBwcm9wc0xlbmd0aCAmJiBvYmplY3QubGVuZ3RoO1xuXG4gIHZhciBhbGxvd0luZGV4ZXMgPSAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgcHJvcHNMZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIGlmICgoYWxsb3dJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltS2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9zaGltS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDtcbiAgbGVuZ3RoID0gKGxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKSAmJiBsZW5ndGgpIHx8IDA7XG5cbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICBpbmRleCA9IC0xLFxuICAgICAgaXNQcm90byA9IHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCksXG4gICAgICBza2lwSW5kZXhlcyA9IGxlbmd0aCA+IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gKGluZGV4ICsgJycpO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShza2lwSW5kZXhlcyAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSkgJiZcbiAgICAgICAgIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L2tleXNJbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9XG50eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9IHR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3Nbb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzVHlwZWRBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBvYmplY3QgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgb2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL3RvT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHBhaXJzID0gcmVxdWlyZSgnLi4vb2JqZWN0L3BhaXJzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVyeSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBwYWlycyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICByZXN1bHRbbGVuZ3RoXVsyXSA9IGlzU3RyaWN0Q29tcGFyYWJsZShyZXN1bHRbbGVuZ3RoXVsxXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TWF0Y2hEYXRhLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc1N0cmljdENvbXBhcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHR3byBkaW1lbnNpb25hbCBhcnJheSBvZiB0aGUga2V5LXZhbHVlIHBhaXJzIGZvciBgb2JqZWN0YCxcbiAqIGUuZy4gYFtba2V5MSwgdmFsdWUxXSwgW2tleTIsIHZhbHVlMl1dYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnBhaXJzKHsgJ2Jhcm5leSc6IDM2LCAnZnJlZCc6IDQwIH0pO1xuICogLy8gPT4gW1snYmFybmV5JywgMzZdLCBbJ2ZyZWQnLCA0MF1dIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIHBhaXJzKG9iamVjdCkge1xuICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcHJvcHMgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICByZXN1bHRbaW5kZXhdID0gW2tleSwgb2JqZWN0W2tleV1dO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFpcnM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L3BhaXJzLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9iYXNlR2V0JyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL2Jhc2VJc0VxdWFsJyksXG4gICAgYmFzZVNsaWNlID0gcmVxdWlyZSgnLi9iYXNlU2xpY2UnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBsYXN0ID0gcmVxdWlyZSgnLi4vYXJyYXkvbGFzdCcpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpLFxuICAgIHRvUGF0aCA9IHJlcXVpcmUoJy4vdG9QYXRoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2VzIG5vdCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkocGF0aCksXG4gICAgICBpc0NvbW1vbiA9IGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSksXG4gICAgICBwYXRoS2V5ID0gKHBhdGggKyAnJyk7XG5cbiAgcGF0aCA9IHRvUGF0aChwYXRoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIga2V5ID0gcGF0aEtleTtcbiAgICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuICAgIGlmICgoaXNBcnIgfHwgIWlzQ29tbW9uKSAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICBvYmplY3QgPSBwYXRoLmxlbmd0aCA9PSAxID8gb2JqZWN0IDogYmFzZUdldChvYmplY3QsIGJhc2VTbGljZShwYXRoLCAwLCAtMSkpO1xuICAgICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGtleSA9IGxhc3QocGF0aCk7XG4gICAgICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlXG4gICAgICA/IChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gb2JqZWN0KSlcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9iamVjdFtrZXldLCB1bmRlZmluZWQsIHRydWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hdGNoZXNQcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBzdHJpbmcgcGF0aHNcbiAqIGFuZCBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheX0gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXRoS2V5XSBUaGUga2V5IHJlcHJlc2VudGF0aW9uIG9mIHBhdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoLCBwYXRoS2V5KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGF0aEtleSAhPT0gdW5kZWZpbmVkICYmIHBhdGhLZXkgaW4gdG9PYmplY3Qob2JqZWN0KSkge1xuICAgIHBhdGggPSBbcGF0aEtleV07XG4gIH1cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFtwYXRoW2luZGV4KytdXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlR2V0LmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBzdGFydCA9IHN0YXJ0ID09IG51bGwgPyAwIDogKCtzdGFydCB8fCAwKTtcbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IGxlbmd0aCkgPyBsZW5ndGggOiAoK2VuZCB8fCAwKTtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlU2xpY2UuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcblxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGlmICgodHlwZSA9PSAnc3RyaW5nJyAmJiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpKSB8fCB0eXBlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciByZXN1bHQgPSAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpO1xuICByZXR1cm4gcmVzdWx0IHx8IChvYmplY3QgIT0gbnVsbCAmJiB2YWx1ZSBpbiB0b09iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0tleS5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5sYXN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgcmV0dXJuIGxlbmd0aCA/IGFycmF5W2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxhc3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvYXJyYXkvbGFzdC5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9iYXNlVG9TdHJpbmcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcblxcXFxdfFxcXFwuKSo/KVxcMilcXF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBwcm9wZXJ0eSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdG9QYXRoKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGJhc2VUb1N0cmluZyh2YWx1ZSkucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1BhdGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvdG9QYXRoLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBpZiBpdCdzIG5vdCBvbmUuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZFxuICogZm9yIGBudWxsYCBvciBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9pZGVudGl0eScpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUNhbGxiYWNrYCB3aGljaCBvbmx5IHN1cHBvcnRzIGB0aGlzYCBiaW5kaW5nXG4gKiBhbmQgc3BlY2lmeWluZyB0aGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYmluZC5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtudW1iZXJ9IFthcmdDb3VudF0gVGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGNhbGxiYWNrLlxuICovXG5mdW5jdGlvbiBiaW5kQ2FsbGJhY2soZnVuYywgdGhpc0FyZywgYXJnQ291bnQpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gaWRlbnRpdHk7XG4gIH1cbiAgaWYgKHRoaXNBcmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmdW5jO1xuICB9XG4gIHN3aXRjaCAoYXJnQ291bnQpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNhc2UgNDogcmV0dXJuIGZ1bmN0aW9uKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBjYXNlIDU6IHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3RoZXIsIGtleSwgb2JqZWN0LCBzb3VyY2UpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmRDYWxsYmFjaztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iaW5kQ2FsbGJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBwcm92aWRlZCB0byBpdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdDtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3V0aWxpdHkvaWRlbnRpdHkuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIGF0IGBwYXRoYCBvbiBhXG4gKiBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsaXR5XG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW1xuICogICB7ICdhJzogeyAnYic6IHsgJ2MnOiAyIH0gfSB9LFxuICogICB7ICdhJzogeyAnYic6IHsgJ2MnOiAxIH0gfSB9XG4gKiBdO1xuICpcbiAqIF8ubWFwKG9iamVjdHMsIF8ucHJvcGVydHkoJ2EuYi5jJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5wbHVjayhfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJywgJ2MnXSkpLCAnYS5iLmMnKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eShwYXRoKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvdXRpbGl0eS9wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vYmFzZUdldCcpLFxuICAgIHRvUGF0aCA9IHJlcXVpcmUoJy4vdG9QYXRoJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHZhciBwYXRoS2V5ID0gKHBhdGggKyAnJyk7XG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgsIHBhdGhLZXkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVByb3BlcnR5RGVlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL2Jhc2VJbmRleE9mJyksXG4gICAgY2FjaGVJbmRleE9mID0gcmVxdWlyZSgnLi9jYWNoZUluZGV4T2YnKSxcbiAgICBjcmVhdGVDYWNoZSA9IHJlcXVpcmUoJy4vY3JlYXRlQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrIHNob3J0aGFuZHNcbiAqIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5kZXhPZiA9IGJhc2VJbmRleE9mLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgaXNMYXJnZSA9IGlzQ29tbW9uICYmIGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFLFxuICAgICAgc2VlbiA9IGlzTGFyZ2UgPyBjcmVhdGVDYWNoZSgpIDogbnVsbCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGlmIChzZWVuKSB7XG4gICAgaW5kZXhPZiA9IGNhY2hlSW5kZXhPZjtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGlzTGFyZ2UgPSBmYWxzZTtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSA6IHZhbHVlO1xuXG4gICAgaWYgKGlzQ29tbW9uICYmIHZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgdmFyIHNlZW5JbmRleCA9IHNlZW4ubGVuZ3RoO1xuICAgICAgd2hpbGUgKHNlZW5JbmRleC0tKSB7XG4gICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG4gICAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVyYXRlZSkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleE9mKHNlZW4sIGNvbXB1dGVkLCAwKSA8IDApIHtcbiAgICAgIGlmIChpdGVyYXRlZSB8fCBpc0xhcmdlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuaXE7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVVuaXEuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxYCBvcHRpbWl6ZWQgZm9yIHNvcnRlZCBhcnJheXMgd2l0aG91dCBzdXBwb3J0XG4gKiBmb3IgY2FsbGJhY2sgc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlXSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHNvcnRlZFVuaXEoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBzZWVuLFxuICAgICAgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgYXJyYXkpIDogdmFsdWU7XG5cbiAgICBpZiAoIWluZGV4IHx8IHNlZW4gIT09IGNvbXB1dGVkKSB7XG4gICAgICBzZWVuID0gY29tcHV0ZWQ7XG4gICAgICByZXN1bHRbKytyZXNJbmRleF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzb3J0ZWRVbmlxO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL3NvcnRlZFVuaXEuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1N1YnNjcmlwdGlvbiwgc3Vic2NyaXB0aW9uc0J5VVVJRCwgc3Vic2NyaXB0aW9uc0J5UHJvcGVydHksIHByb3BlcnRpZXMsIGNhbGxiYWNrfSkgPT4ge1xuICAvKiBtYWtlIGEgc3Vic2NyaXB0aW9uICovXG4gIGxldCBzdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24oe3Byb3BlcnRpZXMsIGNhbGxiYWNrfSk7XG5cbiAgLyogYWRkIHRoZSBzdWJzY3JpcHRpb24gdG8gdGhlIHN1YnNjcmlwdGlvbnNCeVVVSUQgb2JqZWN0ICovXG4gIHN1YnNjcmlwdGlvbnNCeVVVSURbc3Vic2NyaXB0aW9uLnV1aWRdID0gc3Vic2NyaXB0aW9uO1xuXG4gIC8qIGFkZCByZWZlcmVuY2VzIHRvIHRoZSBzdWJzY3JpcHRpb24gdG8gZWFjaCBvZiB0aGUgKi9cbiAgLyogc3Vic2NyaWJlZCBwcm9wZXJ0aWVzICovXG4gIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICBzdWJzY3JpcHRpb25zQnlQcm9wZXJ0eS5hZGQoe3Byb3BlcnR5LCBzdWJzY3JpcHRpb259KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHN1YnNjcmlwdGlvbi51dWlkO1xufTtcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2phdmFzY3JpcHQvc3Vic2NyaWJlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXVpZCBmcm9tICdub2RlLXV1aWQnO1xuXG5jb25zdCBTVUJTQ1JJUFRJT05fUFJPVE9UWVBFID0ge1xuICBwcm9wZXJ0aWVzOiBbXSxcbiAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHt9LFxuICBndWlkOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoe3Byb3BlcnRpZXMsIGNhbGxiYWNrfSkgPT4ge1xuICBsZXQgc3Vic2NyaXB0aW9uID0gT2JqZWN0LmNyZWF0ZShTVUJTQ1JJUFRJT05fUFJPVE9UWVBFKTtcblxuICBzdWJzY3JpcHRpb24ucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIHN1YnNjcmlwdGlvbi5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICBzdWJzY3JpcHRpb24udXVpZCA9IHV1aWQudjQoKTtcblxuICByZXR1cm4gc3Vic2NyaXB0aW9uO1xufTtcblxuZXhwb3J0IHsgU1VCU0NSSVBUSU9OX1BST1RPVFlQRSB9O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qYXZhc2NyaXB0L1N1YnNjcmlwdGlvbi5qc1xuICoqLyIsIi8vICAgICB1dWlkLmpzXG4vL1xuLy8gICAgIENvcHlyaWdodCAoYykgMjAxMC0yMDEyIFJvYmVydCBLaWVmZmVyXG4vLyAgICAgTUlUIExpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cbihmdW5jdGlvbigpIHtcbiAgdmFyIF9nbG9iYWwgPSB0aGlzO1xuXG4gIC8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBXZSBmZWF0dXJlXG4gIC8vIGRldGVjdCB0byBkZXRlcm1pbmUgdGhlIGJlc3QgUk5HIHNvdXJjZSwgbm9ybWFsaXppbmcgdG8gYSBmdW5jdGlvbiB0aGF0XG4gIC8vIHJldHVybnMgMTI4LWJpdHMgb2YgcmFuZG9tbmVzcywgc2luY2UgdGhhdCdzIHdoYXQncyB1c3VhbGx5IHJlcXVpcmVkXG4gIHZhciBfcm5nO1xuXG4gIC8vIE5vZGUuanMgY3J5cHRvLWJhc2VkIFJORyAtIGh0dHA6Ly9ub2RlanMub3JnL2RvY3MvdjAuNi4yL2FwaS9jcnlwdG8uaHRtbFxuICAvL1xuICAvLyBNb2RlcmF0ZWx5IGZhc3QsIGhpZ2ggcXVhbGl0eVxuICBpZiAodHlwZW9mKF9nbG9iYWwucmVxdWlyZSkgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgX3JiID0gX2dsb2JhbC5yZXF1aXJlKCdjcnlwdG8nKS5yYW5kb21CeXRlcztcbiAgICAgIF9ybmcgPSBfcmIgJiYgZnVuY3Rpb24oKSB7cmV0dXJuIF9yYigxNik7fTtcbiAgICB9IGNhdGNoKGUpIHt9XG4gIH1cblxuICBpZiAoIV9ybmcgJiYgX2dsb2JhbC5jcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIFdIQVRXRyBjcnlwdG8tYmFzZWQgUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICAgIC8vXG4gICAgLy8gTW9kZXJhdGVseSBmYXN0LCBoaWdoIHF1YWxpdHlcbiAgICB2YXIgX3JuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgIF9ybmcgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKF9ybmRzOCk7XG4gICAgICByZXR1cm4gX3JuZHM4O1xuICAgIH07XG4gIH1cblxuICBpZiAoIV9ybmcpIHtcbiAgICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gICAgLy9cbiAgICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAgIC8vIHF1YWxpdHkuXG4gICAgdmFyICBfcm5kcyA9IG5ldyBBcnJheSgxNik7XG4gICAgX3JuZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgICBfcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9ybmRzO1xuICAgIH07XG4gIH1cblxuICAvLyBCdWZmZXIgY2xhc3MgdG8gdXNlXG4gIHZhciBCdWZmZXJDbGFzcyA9IHR5cGVvZihfZ2xvYmFsLkJ1ZmZlcikgPT0gJ2Z1bmN0aW9uJyA/IF9nbG9iYWwuQnVmZmVyIDogQXJyYXk7XG5cbiAgLy8gTWFwcyBmb3IgbnVtYmVyIDwtPiBoZXggc3RyaW5nIGNvbnZlcnNpb25cbiAgdmFyIF9ieXRlVG9IZXggPSBbXTtcbiAgdmFyIF9oZXhUb0J5dGUgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgIF9ieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xuICAgIF9oZXhUb0J5dGVbX2J5dGVUb0hleFtpXV0gPSBpO1xuICB9XG5cbiAgLy8gKipgcGFyc2UoKWAgLSBQYXJzZSBhIFVVSUQgaW50byBpdCdzIGNvbXBvbmVudCBieXRlcyoqXG4gIGZ1bmN0aW9uIHBhcnNlKHMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIGkgPSAoYnVmICYmIG9mZnNldCkgfHwgMCwgaWkgPSAwO1xuXG4gICAgYnVmID0gYnVmIHx8IFtdO1xuICAgIHMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bMC05YS1mXXsyfS9nLCBmdW5jdGlvbihvY3QpIHtcbiAgICAgIGlmIChpaSA8IDE2KSB7IC8vIERvbid0IG92ZXJmbG93IVxuICAgICAgICBidWZbaSArIGlpKytdID0gX2hleFRvQnl0ZVtvY3RdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gWmVybyBvdXQgcmVtYWluaW5nIGJ5dGVzIGlmIHN0cmluZyB3YXMgc2hvcnRcbiAgICB3aGlsZSAoaWkgPCAxNikge1xuICAgICAgYnVmW2kgKyBpaSsrXSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIC8vICoqYHVucGFyc2UoKWAgLSBDb252ZXJ0IFVVSUQgYnl0ZSBhcnJheSAoYWxhIHBhcnNlKCkpIGludG8gYSBzdHJpbmcqKlxuICBmdW5jdGlvbiB1bnBhcnNlKGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIGkgPSBvZmZzZXQgfHwgMCwgYnRoID0gX2J5dGVUb0hleDtcbiAgICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xuICB9XG5cbiAgLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuICAvL1xuICAvLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuICAvLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxuXG4gIC8vIHJhbmRvbSAjJ3Mgd2UgbmVlZCB0byBpbml0IG5vZGUgYW5kIGNsb2Nrc2VxXG4gIHZhciBfc2VlZEJ5dGVzID0gX3JuZygpO1xuXG4gIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICB2YXIgX25vZGVJZCA9IFtcbiAgICBfc2VlZEJ5dGVzWzBdIHwgMHgwMSxcbiAgICBfc2VlZEJ5dGVzWzFdLCBfc2VlZEJ5dGVzWzJdLCBfc2VlZEJ5dGVzWzNdLCBfc2VlZEJ5dGVzWzRdLCBfc2VlZEJ5dGVzWzVdXG4gIF07XG5cbiAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgdmFyIF9jbG9ja3NlcSA9IChfc2VlZEJ5dGVzWzZdIDw8IDggfCBfc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcblxuICAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbiAgdmFyIF9sYXN0TVNlY3MgPSAwLCBfbGFzdE5TZWNzID0gMDtcblxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG4gIGZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gICAgdmFyIGIgPSBidWYgfHwgW107XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT0gbnVsbCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAgIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gICAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gICAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9IG51bGwgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gICAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9IG51bGwgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgICAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG4gICAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAgIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgICAvLyB0aW1lIGludGVydmFsXG4gICAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09IG51bGwpIHtcbiAgICAgIG5zZWNzID0gMDtcbiAgICB9XG5cbiAgICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gICAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgICB9XG5cbiAgICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gICAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICAgIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gICAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG4gICAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgICAvLyBgdGltZV9sb3dgXG4gICAgdmFyIHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICAgIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gICAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gICAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gICAgLy8gYHRpbWVfbWlkYFxuICAgIHZhciB0bWggPSAobXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwKSAmIDB4ZmZmZmZmZjtcbiAgICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICAgIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuICAgIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAgIC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuICAgIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAgIC8vIGBjbG9ja19zZXFfbG93YFxuICAgIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjtcblxuICAgIC8vIGBub2RlYFxuICAgIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyBuKyspIHtcbiAgICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmID8gYnVmIDogdW5wYXJzZShiKTtcbiAgfVxuXG4gIC8vICoqYHY0KClgIC0gR2VuZXJhdGUgcmFuZG9tIFVVSUQqKlxuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbiAgZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgICAvLyBEZXByZWNhdGVkIC0gJ2Zvcm1hdCcgYXJndW1lbnQsIGFzIHN1cHBvcnRlZCBpbiB2MS4yXG4gICAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgICBidWYgPSBvcHRpb25zID09ICdiaW5hcnknID8gbmV3IEJ1ZmZlckNsYXNzKDE2KSA6IG51bGw7XG4gICAgICBvcHRpb25zID0gbnVsbDtcbiAgICB9XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nKSgpO1xuXG4gICAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICAgIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgICBpZiAoYnVmKSB7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7IGlpKyspIHtcbiAgICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYnVmIHx8IHVucGFyc2Uocm5kcyk7XG4gIH1cblxuICAvLyBFeHBvcnQgcHVibGljIEFQSVxuICB2YXIgdXVpZCA9IHY0O1xuICB1dWlkLnYxID0gdjE7XG4gIHV1aWQudjQgPSB2NDtcbiAgdXVpZC5wYXJzZSA9IHBhcnNlO1xuICB1dWlkLnVucGFyc2UgPSB1bnBhcnNlO1xuICB1dWlkLkJ1ZmZlckNsYXNzID0gQnVmZmVyQ2xhc3M7XG5cbiAgaWYgKHR5cGVvZihtb2R1bGUpICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gUHVibGlzaCBhcyBub2RlLmpzIG1vZHVsZVxuICAgIG1vZHVsZS5leHBvcnRzID0gdXVpZDtcbiAgfSBlbHNlICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gUHVibGlzaCBhcyBBTUQgbW9kdWxlXG4gICAgZGVmaW5lKGZ1bmN0aW9uKCkge3JldHVybiB1dWlkO30pO1xuIFxuXG4gIH0gZWxzZSB7XG4gICAgLy8gUHVibGlzaCBhcyBnbG9iYWwgKGluIGJyb3dzZXJzKVxuICAgIHZhciBfcHJldmlvdXNSb290ID0gX2dsb2JhbC51dWlkO1xuXG4gICAgLy8gKipgbm9Db25mbGljdCgpYCAtIChicm93c2VyIG9ubHkpIHRvIHJlc2V0IGdsb2JhbCAndXVpZCcgdmFyKipcbiAgICB1dWlkLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgIF9nbG9iYWwudXVpZCA9IF9wcmV2aW91c1Jvb3Q7XG4gICAgICByZXR1cm4gdXVpZDtcbiAgICB9O1xuXG4gICAgX2dsb2JhbC51dWlkID0gdXVpZDtcbiAgfVxufSkuY2FsbCh0aGlzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L25vZGUtdXVpZC91dWlkLmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU1VCU0NSSVBUSU9OU19CWV9QUk9QRVJUWV9QUk9UT1RZUEUgPSB7XG4gIGFkZCh7cHJvcGVydHksIHN1YnNjcmlwdGlvbn0pIHtcbiAgICBsZXQgY3VycmVudFN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnNbcHJvcGVydHldO1xuICAgIFxuICAgIGlmICghY3VycmVudFN1YnNjcmlwdGlvbnMgfHwgT2JqZWN0LmtleXMoY3VycmVudFN1YnNjcmlwdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3Byb3BlcnR5XSA9IHt9O1xuICAgIH1cblxuICAgIC8qIHVzZWluZyBvYmplY3QgbGlrZSBhIHNldCBoZXJlICovXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3Byb3BlcnR5XVtzdWJzY3JpcHRpb24udXVpZF0gPSB0cnVlO1xuICB9LFxuXG4gIHJlbW92ZSh7cHJvcGVydHksIHN1YnNjcmlwdGlvbn0pIHtcbiAgICBsZXQgY3VycmVudFN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnNbcHJvcGVydHldO1xuXG4gICAgaWYgKCFjdXJyZW50U3Vic2NyaXB0aW9ucyB8fCBPYmplY3Qua2V5cyhjdXJyZW50U3Vic2NyaXB0aW9ucykubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbcHJvcGVydHldID0ge307XG4gICAgfVxuXG4gICAgZGVsZXRlIHRoaXMuc3Vic2NyaXB0aW9uc1twcm9wZXJ0eV1bc3Vic2NyaXB0aW9uLnV1aWRdO1xuICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgbGV0IHN1YnNjcmlwdGlvbnNCeVByb3BlcnR5ID0gT2JqZWN0LmNyZWF0ZShTVUJTQ1JJUFRJT05TX0JZX1BST1BFUlRZX1BST1RPVFlQRSk7XG5cbiAgc3Vic2NyaXB0aW9uc0J5UHJvcGVydHkuc3Vic2NyaXB0aW9ucyA9IHt9O1xuXG4gIHJldHVybiBzdWJzY3JpcHRpb25zQnlQcm9wZXJ0eTtcbn07XG5cbmV4cG9ydCB7IFNVQlNDUklQVElPTlNfQllfUFJPUEVSVFlfUFJPVE9UWVBFIH07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2phdmFzY3JpcHQvc3Vic2NyaXB0aW9uc0J5UHJvcGVydHkuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8qIHNpbmdsZXRvbiBvYmplY3QgdXNlZCB0byBob2xkIHN1YnNjcmlwdGlvbiBvYmplY3RzIGJ5IHRoZWlyIFVVSUQgKi9cblxuZXhwb3J0IGRlZmF1bHQge307XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2phdmFzY3JpcHQvc3Vic2NyaXB0aW9uc0J5VVVJRC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtzdWJzY3JpcHRpb25VVUlELCBzdWJzY3JpcHRpb25zQnlVVUlELCBzdWJzY3JpcHRpb25zQnlQcm9wZXJ0eX0pID0+IHtcbiAgbGV0IHN1YnNjcmlwdGlvbiA9IHN1YnNjcmlwdGlvbnNCeVVVSURbc3Vic2NyaXB0aW9uVVVJRF07XG5cbiAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgIC8qIHJlbW92ZSB0aGUgc3Vic2NyaXB0aW9uIGZyb20gdGhlIHN1YnNjcmlwdGlvbnNCeVVVSUQgb2JqZWN0ICovXG4gICAgZGVsZXRlIHN1YnNjcmlwdGlvbnNCeVVVSURbc3Vic2NyaXB0aW9uVVVJRF07XG5cbiAgICAvKiByZW1vdmUgcmVmZXJlbmNlcyB0byB0aGUgc3Vic2NyaXB0aW9uIGZyb20gZWFjaCBvZiB0aGUgc3Vic2NyaWJlZCBwcm9wZXJ0aWVzICovXG4gICAgc3Vic2NyaXB0aW9uLnByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb25zQnlQcm9wZXJ0eS5yZW1vdmUoe3Byb3BlcnR5LCBzdWJzY3JpcHRpb259KTtcbiAgICB9KTtcbiAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vamF2YXNjcmlwdC91bnN1YnNjcmliZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ },
/* 65 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 66 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 67 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 68 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWZhOWU5OWY3NDViZjY4NTE4ZTkiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9pbml0LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL29iamVjdC9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYXNzaWduV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9zaGltS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL29iamVjdC9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQ29weS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVBc3NpZ25lci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iaW5kQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvdXRpbGl0eS9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0l0ZXJhdGVlQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9mdW5jdGlvbi9yZXN0UGFyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC90b29scy9wYXJzZUxvY2F0aW9uSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3Rvb2xzL3NldExvY2F0aW9uSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9jb2xsZWN0aW9uL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQ2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hdGNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzRXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9lcXVhbEJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2VxdWFsT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL29iamVjdC9wYWlycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVNsaWNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzS2V5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2FycmF5L2xhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvdG9QYXRoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC91dGlsaXR5L3Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yT3duLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVCYXNlRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2VxdWF0aW9ucy9mcmFjdGFsLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvUmVuZGVyZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9SZW5kZXJlci9hcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L1JlbmRlcmVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvUmVuZGVyZXIvdmlld3BvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oYXNoLXN1YnNjcmliZXIvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL2RlcGVuZGVuY2llcy9za2VsZXRvbi9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9kZXBlbmRlbmNpZXMvc2tlbGV0b24vY3NzL3NrZWxldG9uLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3MvbWFuZGVsYnJvdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL2hlYWRlci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OzZDQ3RDcUMsQ0FBbUI7O3VEQUNuQixFQUE4Qjs7OzsrQ0FDOUIsRUFBcUI7Ozs7MkNBRS9CLEVBQWlCOzs7O3FCQUVyQyxFQUF5Qzs7cUJBQ3pDLEVBQXdDOztxQkFDeEMsRUFBb0I7O3FCQUNwQixFQUFnQjs7QUFFdkIsS0FBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FB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O0FBRUE7QUFDQTtBQUNBLEdBQUU7OztBQUdGLFFBQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBOztBQUVBLFFBQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXVDLGlEQUFpRDtBQUN4RixPQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLCtqcEk7Ozs7OztBQzMyRjNDLDBDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsMEM7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6ImJ1aWxkL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZWZhOWU5OWY3NDViZjY4NTE4ZTlcbiAqKi8iLCJpbXBvcnQgeyBnZXRDb25maWcsIHNldENvbmZpZyB9IGZyb20gJ2phdmFzY3JpcHQvY29uZmlnJztcbmltcG9ydCBGcmFjdGFsLCB7IE1hbmRlbGJyb3QgfSAgZnJvbSAnamF2YXNjcmlwdC9lcXVhdGlvbnMvZnJhY3RhbCc7XG5pbXBvcnQgQXBwbGljYXRpb24gICAgICAgICAgICAgIGZyb20gJ2phdmFzY3JpcHQvUmVuZGVyZXInO1xuXG5pbXBvcnQgSGFzaFN1YnNjcmliZXIgZnJvbSAnaGFzaC1zdWJzY3JpYmVyJztcblxuaW1wb3J0ICdkZXBlbmRlbmNpZXMvc2tlbGV0b24vY3NzL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICdkZXBlbmRlbmNpZXMvc2tlbGV0b24vY3NzL3NrZWxldG9uLmNzcyc7XG5pbXBvcnQgJ2Nzcy9tYW5kZWxicm90LmNzcyc7XG5pbXBvcnQgJ2Nzcy9oZWFkZXIuY3NzJztcblxubGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5kZWxicm90Jyk7XG5cbmxldCByZW5kZXJlciA9IEFwcGxpY2F0aW9uLmNyZWF0ZSh7XG4gIGNhbnZhczogY2FudmFzLFxuICBlcXVhdGlvbjogTWFuZGVsYnJvdCxcbiAgZ2V0Q29uZmlnOiBnZXRDb25maWcsXG4gIHNldENvbmZpZzogc2V0Q29uZmlnXG59KTtcblxuSGFzaFN1YnNjcmliZXIuc3Vic2NyaWJlKFsnaXRlcmF0aW9ucyddLCAoKSA9PiB7XG4gIEZyYWN0YWwuTUFYX0lURVJBVElPTlMgPSBnZXRDb25maWcoKS5pdGVyYXRpb25zO1xuICByZW5kZXJlci5yZW5kZXIoKTtcbn0pO1xuXG5IYXNoU3Vic2NyaWJlci5zdWJzY3JpYmUoWydzdXBlcl9zYW1wbGVzJywgJ3hfbWluJywgJ3hfbWF4JywgJ3lfbWluJywgJ3lfbWF4J10sICgpID0+IHtcbiAgcmVuZGVyZXIucmVuZGVyKCk7XG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vamF2YXNjcmlwdC9pbml0LmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYXNzaWduIGZyb20gJ2xvZGFzaC9vYmplY3QvYXNzaWduJztcbmltcG9ydCBwYXJzZUxvY2F0aW9uSGFzaCBmcm9tICdqYXZhc2NyaXB0L3Rvb2xzL3BhcnNlTG9jYXRpb25IYXNoJztcbmltcG9ydCBzZXRMb2NhdGlvbkhhc2ggZnJvbSAnamF2YXNjcmlwdC90b29scy9zZXRMb2NhdGlvbkhhc2gnO1xuXG52YXIgREVGQVVMVF9DT05GSUcgPSB7XG4gIGl0ZXJhdGlvbnM6IDI1NixcbiAgc3VwZXJfc2FtcGxlczogMSxcbiAgeF9taW46IC0yLjAsXG4gIHhfbWF4OiAgMC41LFxuICB5X21pbjogLTEuMjUsXG4gIHlfbWF4OiAgMS4yNSxcbiAgcmVuZGVyX2ZwczogMTAuMFxufTtcblxubGV0IENvbmZpZyA9IHtcbiAgY3VycmVudENvbmZpZzoge30sXG4gIGdldENvbmZpZyhsb2NhdGlvbkhhc2ggPSBwYXJzZUxvY2F0aW9uSGFzaCgpKSB7XG4gICAgQ29uZmlnLmN1cnJlbnRDb25maWcgPSBhc3NpZ24oe30sIERFRkFVTFRfQ09ORklHLCBsb2NhdGlvbkhhc2gpO1xuXG4gICAgcmV0dXJuIENvbmZpZy5jdXJyZW50Q29uZmlnO1xuICB9LFxuICBzZXRDb25maWcoY29uZmlnQ2hhbmdlcykge1xuICAgIGxldCBuZXdDb25maWcgPSBhc3NpZ24oe30sIENvbmZpZy5nZXRDb25maWcoKSwgY29uZmlnQ2hhbmdlcyk7XG5cbiAgICBzZXRMb2NhdGlvbkhhc2gobmV3Q29uZmlnKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qYXZhc2NyaXB0L2NvbmZpZy5qc1xuICoqLyIsInZhciBhc3NpZ25XaXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYXNzaWduV2l0aCcpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlQXNzaWduJyksXG4gICAgY3JlYXRlQXNzaWduZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jcmVhdGVBc3NpZ25lcicpO1xuXG4vKipcbiAqIEFzc2lnbnMgb3duIGVudW1lcmFibGUgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0KHMpIHRvIHRoZSBkZXN0aW5hdGlvblxuICogb2JqZWN0LiBTdWJzZXF1ZW50IHNvdXJjZXMgb3ZlcndyaXRlIHByb3BlcnR5IGFzc2lnbm1lbnRzIG9mIHByZXZpb3VzIHNvdXJjZXMuXG4gKiBJZiBgY3VzdG9taXplcmAgaXMgcHJvdmlkZWQgaXQncyBpbnZva2VkIHRvIHByb2R1Y2UgdGhlIGFzc2lnbmVkIHZhbHVlcy5cbiAqIFRoZSBgY3VzdG9taXplcmAgaXMgYm91bmQgdG8gYHRoaXNBcmdgIGFuZCBpbnZva2VkIHdpdGggZml2ZSBhcmd1bWVudHM6XG4gKiAob2JqZWN0VmFsdWUsIHNvdXJjZVZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlKS5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YCBhbmQgaXMgYmFzZWQgb25cbiAqIFtgT2JqZWN0LmFzc2lnbmBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5hc3NpZ24pLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgZXh0ZW5kXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgY3VzdG9taXplcmAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmFzc2lnbih7ICd1c2VyJzogJ2Jhcm5leScgfSwgeyAnYWdlJzogNDAgfSwgeyAndXNlcic6ICdmcmVkJyB9KTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnZnJlZCcsICdhZ2UnOiA0MCB9XG4gKlxuICogLy8gdXNpbmcgYSBjdXN0b21pemVyIGNhbGxiYWNrXG4gKiB2YXIgZGVmYXVsdHMgPSBfLnBhcnRpYWxSaWdodChfLmFzc2lnbiwgZnVuY3Rpb24odmFsdWUsIG90aGVyKSB7XG4gKiAgIHJldHVybiBfLmlzVW5kZWZpbmVkKHZhbHVlKSA/IG90aGVyIDogdmFsdWU7XG4gKiB9KTtcbiAqXG4gKiBkZWZhdWx0cyh7ICd1c2VyJzogJ2Jhcm5leScgfSwgeyAnYWdlJzogMzYgfSwgeyAndXNlcic6ICdmcmVkJyB9KTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnYmFybmV5JywgJ2FnZSc6IDM2IH1cbiAqL1xudmFyIGFzc2lnbiA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlLCBjdXN0b21pemVyKSB7XG4gIHJldHVybiBjdXN0b21pemVyXG4gICAgPyBhc3NpZ25XaXRoKG9iamVjdCwgc291cmNlLCBjdXN0b21pemVyKVxuICAgIDogYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L2Fzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBrZXlzID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXMnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uYXNzaWduYCBmb3IgY3VzdG9taXppbmcgYXNzaWduZWQgdmFsdWVzIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGFyZ3VtZW50IGp1Z2dsaW5nLCBtdWx0aXBsZSBzb3VyY2VzLCBhbmQgYHRoaXNgIGJpbmRpbmcgYGN1c3RvbWl6ZXJgXG4gKiBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYXNzaWduV2l0aChvYmplY3QsIHNvdXJjZSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHByb3BzID0ga2V5cyhzb3VyY2UpLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgcmVzdWx0ID0gY3VzdG9taXplcih2YWx1ZSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpO1xuXG4gICAgaWYgKChyZXN1bHQgPT09IHJlc3VsdCA/IChyZXN1bHQgIT09IHZhbHVlKSA6ICh2YWx1ZSA9PT0gdmFsdWUpKSB8fFxuICAgICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgICAgb2JqZWN0W2tleV0gPSByZXN1bHQ7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduV2l0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9hc3NpZ25XaXRoLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2dldE5hdGl2ZScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKSxcbiAgICBzaGltS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3NoaW1LZXlzJyk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IGdldE5hdGl2ZShPYmplY3QsICdrZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbnZhciBrZXlzID0gIW5hdGl2ZUtleXMgPyBzaGltS2V5cyA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgQ3RvciA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCkgfHxcbiAgICAgICh0eXBlb2Ygb2JqZWN0ICE9ICdmdW5jdGlvbicgJiYgaXNBcnJheUxpa2Uob2JqZWN0KSkpIHtcbiAgICByZXR1cm4gc2hpbUtleXMob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3Qob2JqZWN0KSA/IG5hdGl2ZUtleXMob2JqZWN0KSA6IFtdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL29iamVjdC9rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzTmF0aXZlID0gcmVxdWlyZSgnLi4vbGFuZy9pc05hdGl2ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgcmV0dXJuIGlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXROYXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSA+IDUpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZm5Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZuVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOYXRpdmUoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYXRpdmUoXyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICByZXR1cm4gcmVJc05hdGl2ZS50ZXN0KGZuVG9TdHJpbmcuY2FsbCh2YWx1ZSkpO1xuICB9XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIHJlSXNIb3N0Q3Rvci50ZXN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc05hdGl2ZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzTmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaSB3aGljaCByZXR1cm4gJ2Z1bmN0aW9uJyBmb3IgcmVnZXhlc1xuICAvLyBhbmQgU2FmYXJpIDggd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgY29uc3RydWN0b3JzLlxuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIG9ialRvU3RyaW5nLmNhbGwodmFsdWUpID09IGZ1bmNUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzRnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZSBbbGFuZ3VhZ2UgdHlwZV0oaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4OCkgb2YgYE9iamVjdGAuXG4gKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgLy8gQXZvaWQgYSBWOCBKSVQgYnVnIGluIENocm9tZSAxOS0yMC5cbiAgLy8gU2VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMjkxIGZvciBtb3JlIGRldGFpbHMuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzT2JqZWN0TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRMZW5ndGggPSByZXF1aXJlKCcuL2dldExlbmd0aCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aChnZXRMZW5ndGgodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0FycmF5TGlrZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9iYXNlUHJvcGVydHknKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYSBbSklUIGJ1Z10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mjc5MilcbiAqIHRoYXQgYWZmZWN0cyBTYWZhcmkgb24gYXQgbGVhc3QgaU9TIDguMS04LjMgQVJNNjQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuICovXG52YXIgZ2V0TGVuZ3RoID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzTGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vaXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBmYWxsYmFjayBpbXBsZW1lbnRhdGlvbiBvZiBgT2JqZWN0LmtleXNgIHdoaWNoIGNyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlXG4gKiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gc2hpbUtleXMob2JqZWN0KSB7XG4gIHZhciBwcm9wcyA9IGtleXNJbihvYmplY3QpLFxuICAgICAgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBwcm9wc0xlbmd0aCAmJiBvYmplY3QubGVuZ3RoO1xuXG4gIHZhciBhbGxvd0luZGV4ZXMgPSAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgcHJvcHNMZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIGlmICgoYWxsb3dJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltS2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9zaGltS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKSAmJlxuICAgIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJiAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNBcmd1bWVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2dldE5hdGl2ZScpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNBcnJheSA9IGdldE5hdGl2ZShBcnJheSwgJ2lzQXJyYXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IG5hdGl2ZUlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcnJheVRhZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL15cXGQrJC87XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSA/ICt2YWx1ZSA6IC0xO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNJbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0luZGV4JyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDtcbiAgbGVuZ3RoID0gKGxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKSAmJiBsZW5ndGgpIHx8IDA7XG5cbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICBpbmRleCA9IC0xLFxuICAgICAgaXNQcm90byA9IHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCksXG4gICAgICBza2lwSW5kZXhlcyA9IGxlbmd0aCA+IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gKGluZGV4ICsgJycpO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShza2lwSW5kZXhlcyAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSkgJiZcbiAgICAgICAgIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L2tleXNJbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZUNvcHkgPSByZXF1aXJlKCcuL2Jhc2VDb3B5JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFyZ3VtZW50IGp1Z2dsaW5nLFxuICogbXVsdGlwbGUgc291cmNlcywgYW5kIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBzb3VyY2UgPT0gbnVsbFxuICAgID8gb2JqZWN0XG4gICAgOiBiYXNlQ29weShzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VBc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQ29weShzb3VyY2UsIHByb3BzLCBvYmplY3QpIHtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIG9iamVjdFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ29weTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQ29weS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmluZENhbGxiYWNrID0gcmVxdWlyZSgnLi9iaW5kQ2FsbGJhY2snKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vaXNJdGVyYXRlZUNhbGwnKSxcbiAgICByZXN0UGFyYW0gPSByZXF1aXJlKCcuLi9mdW5jdGlvbi9yZXN0UGFyYW0nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYF8uYXNzaWduYCwgYF8uZGVmYXVsdHNgLCBvciBgXy5tZXJnZWAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiByZXN0UGFyYW0oZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG9iamVjdCA9PSBudWxsID8gMCA6IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbbGVuZ3RoIC0gMl0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQsXG4gICAgICAgIHRoaXNBcmcgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcblxuICAgIGlmICh0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjdXN0b21pemVyID0gYmluZENhbGxiYWNrKGN1c3RvbWl6ZXIsIHRoaXNBcmcsIDUpO1xuICAgICAgbGVuZ3RoIC09IDI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSB0eXBlb2YgdGhpc0FyZyA9PSAnZnVuY3Rpb24nID8gdGhpc0FyZyA6IHVuZGVmaW5lZDtcbiAgICAgIGxlbmd0aCAtPSAoY3VzdG9taXplciA/IDEgOiAwKTtcbiAgICB9XG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBc3NpZ25lcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVBc3NpZ25lci5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuLi91dGlsaXR5L2lkZW50aXR5Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlQ2FsbGJhY2tgIHdoaWNoIG9ubHkgc3VwcG9ydHMgYHRoaXNgIGJpbmRpbmdcbiAqIGFuZCBzcGVjaWZ5aW5nIHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiaW5kLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge251bWJlcn0gW2FyZ0NvdW50XSBUaGUgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG4gKi9cbmZ1bmN0aW9uIGJpbmRDYWxsYmFjayhmdW5jLCB0aGlzQXJnLCBhcmdDb3VudCkge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodGhpc0FyZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH1cbiAgc3dpdGNoIChhcmdDb3VudCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcbiAgICB9O1xuICAgIGNhc2UgNTogcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSkge1xuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgb3RoZXIsIGtleSwgb2JqZWN0LCBzb3VyY2UpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZENhbGxiYWNrO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2JpbmRDYWxsYmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IHByb3ZpZGVkIHRvIGl0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0O1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvdXRpbGl0eS9pZGVudGl0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vaXNJbmRleCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgcHJvdmlkZWQgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IG9iamVjdCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIG9iamVjdCBhcmd1bWVudC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgIDogKHR5cGUgPT0gJ3N0cmluZycgJiYgaW5kZXggaW4gb2JqZWN0KSkge1xuICAgIHZhciBvdGhlciA9IG9iamVjdFtpbmRleF07XG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/ICh2YWx1ZSA9PT0gb3RoZXIpIDogKG90aGVyICE9PSBvdGhlcik7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSXRlcmF0ZWVDYWxsO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzSXRlcmF0ZWVDYWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZVxuICogY3JlYXRlZCBmdW5jdGlvbiBhbmQgYXJndW1lbnRzIGZyb20gYHN0YXJ0YCBhbmQgYmV5b25kIHByb3ZpZGVkIGFzIGFuIGFycmF5LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBiYXNlZCBvbiB0aGUgW3Jlc3QgcGFyYW1ldGVyXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvRnVuY3Rpb25zL3Jlc3RfcGFyYW1ldGVycykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgc2F5ID0gXy5yZXN0UGFyYW0oZnVuY3Rpb24od2hhdCwgbmFtZXMpIHtcbiAqICAgcmV0dXJuIHdoYXQgKyAnICcgKyBfLmluaXRpYWwobmFtZXMpLmpvaW4oJywgJykgK1xuICogICAgIChfLnNpemUobmFtZXMpID4gMSA/ICcsICYgJyA6ICcnKSArIF8ubGFzdChuYW1lcyk7XG4gKiB9KTtcbiAqXG4gKiBzYXkoJ2hlbGxvJywgJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnKTtcbiAqIC8vID0+ICdoZWxsbyBmcmVkLCBiYXJuZXksICYgcGViYmxlcydcbiAqL1xuZnVuY3Rpb24gcmVzdFBhcmFtKGZ1bmMsIHN0YXJ0KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6ICgrc3RhcnQgfHwgMCksIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgcmVzdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgcmVzdFtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXJ0KSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgcmVzdCk7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgcmVzdCk7XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgYXJnc1sxXSwgcmVzdCk7XG4gICAgfVxuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIGluZGV4ID0gLTE7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gcmVzdDtcbiAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3RQYXJhbTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9mdW5jdGlvbi9yZXN0UGFyYW0uanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocXVlcnkgPSB3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICB2YXIga2V5VmFsdWVQYWlycztcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICBrZXlWYWx1ZVBhaXJzID0gcXVlcnkuc2xpY2UoMSkuc3BsaXQoJyYnKTtcbiAgfSBlbHNlIHtcbiAgICBrZXlWYWx1ZVBhaXJzID0gW107XG4gIH1cblxuICByZXR1cm4ga2V5VmFsdWVQYWlycy5yZWR1Y2UoKGhhc2gsIGtleVZhbHVlUGFpcikgPT4ge1xuICAgIGxldCBba2V5LCB2YWx1ZV0gPSBrZXlWYWx1ZVBhaXIuc3BsaXQoJz0nKTtcblxuICAgIGlmICh2YWx1ZSAmJiBpc05hTih2YWx1ZSkpIHtcbiAgICAgIGhhc2hba2V5XSA9IHZhbHVlOyAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGhhc2hba2V5XSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNoO1xuICB9LCB7fSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2phdmFzY3JpcHQvdG9vbHMvcGFyc2VMb2NhdGlvbkhhc2guanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL2NvbGxlY3Rpb24vbWFwJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gIHZhciBrZXlWYWx1ZVBhaXJzID0gbWFwKHF1ZXJ5LCAodmFsdWUsIGtleSkgPT4ge1xuICAgIHJldHVybiBba2V5LCB2YWx1ZV0uam9pbignPScpO1xuICB9KTtcblxuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnIycgKyBrZXlWYWx1ZVBhaXJzLmpvaW4oJyYnKSk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2phdmFzY3JpcHQvdG9vbHMvc2V0TG9jYXRpb25IYXNoLmpzXG4gKiovIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYXJyYXlNYXAnKSxcbiAgICBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlTWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHZhbHVlcyBieSBydW5uaW5nIGVhY2ggZWxlbWVudCBpbiBgY29sbGVjdGlvbmAgdGhyb3VnaFxuICogYGl0ZXJhdGVlYC4gVGhlIGBpdGVyYXRlZWAgaXMgYm91bmQgdG8gYHRoaXNBcmdgIGFuZCBpbnZva2VkIHdpdGggdGhyZWVcbiAqIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIElmIGEgcHJvcGVydHkgbmFtZSBpcyBwcm92aWRlZCBmb3IgYGl0ZXJhdGVlYCB0aGUgY3JlYXRlZCBgXy5wcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIElmIGEgdmFsdWUgaXMgYWxzbyBwcm92aWRlZCBmb3IgYHRoaXNBcmdgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNQcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgYSBtYXRjaGluZyBwcm9wZXJ0eVxuICogdmFsdWUsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBJZiBhbiBvYmplY3QgaXMgcHJvdmlkZWQgZm9yIGBpdGVyYXRlZWAgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc2Agc3R5bGVcbiAqIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGdpdmVuXG4gKiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBNYW55IGxvZGFzaCBtZXRob2RzIGFyZSBndWFyZGVkIHRvIHdvcmsgYXMgaXRlcmF0ZWVzIGZvciBtZXRob2RzIGxpa2VcbiAqIGBfLmV2ZXJ5YCwgYF8uZmlsdGVyYCwgYF8ubWFwYCwgYF8ubWFwVmFsdWVzYCwgYF8ucmVqZWN0YCwgYW5kIGBfLnNvbWVgLlxuICpcbiAqIFRoZSBndWFyZGVkIG1ldGhvZHMgYXJlOlxuICogYGFyeWAsIGBjYWxsYmFja2AsIGBjaHVua2AsIGBjbG9uZWAsIGBjcmVhdGVgLCBgY3VycnlgLCBgY3VycnlSaWdodGAsXG4gKiBgZHJvcGAsIGBkcm9wUmlnaHRgLCBgZXZlcnlgLCBgZmlsbGAsIGBmbGF0dGVuYCwgYGludmVydGAsIGBtYXhgLCBgbWluYCxcbiAqIGBwYXJzZUludGAsIGBzbGljZWAsIGBzb3J0QnlgLCBgdGFrZWAsIGB0YWtlUmlnaHRgLCBgdGVtcGxhdGVgLCBgdHJpbWAsXG4gKiBgdHJpbUxlZnRgLCBgdHJpbVJpZ2h0YCwgYHRydW5jYCwgYHJhbmRvbWAsIGByYW5nZWAsIGBzYW1wbGVgLCBgc29tZWAsXG4gKiBgc3VtYCwgYHVuaXFgLCBhbmQgYHdvcmRzYFxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgY29sbGVjdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZFxuICogIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGl0ZXJhdGVlYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gdGltZXNUaHJlZShuKSB7XG4gKiAgIHJldHVybiBuICogMztcbiAqIH1cbiAqXG4gKiBfLm1hcChbMSwgMl0sIHRpbWVzVGhyZWUpO1xuICogLy8gPT4gWzMsIDZdXG4gKlxuICogXy5tYXAoeyAnYSc6IDEsICdiJzogMiB9LCB0aW1lc1RocmVlKTtcbiAqIC8vID0+IFszLCA2XSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcgfVxuICogXTtcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ucHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5tYXAodXNlcnMsICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2Jhcm5leScsICdmcmVkJ11cbiAqL1xuZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5TWFwIDogYmFzZU1hcDtcbiAgaXRlcmF0ZWUgPSBiYXNlQ2FsbGJhY2soaXRlcmF0ZWUsIHRoaXNBcmcsIDMpO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2NvbGxlY3Rpb24vbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlNYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2JpbmRDYWxsYmFjaycpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9pZGVudGl0eScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNhbGxiYWNrYCB3aGljaCBzdXBwb3J0cyBzcGVjaWZ5aW5nIHRoZVxuICogbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbZnVuYz1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhIGNhbGxiYWNrLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJnQ291bnRdIFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gYmFzZUNhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGZ1bmM7XG4gIGlmICh0eXBlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGhpc0FyZyA9PT0gdW5kZWZpbmVkXG4gICAgICA/IGZ1bmNcbiAgICAgIDogYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KTtcbiAgfVxuICBpZiAoZnVuYyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGJhc2VNYXRjaGVzKGZ1bmMpO1xuICB9XG4gIHJldHVybiB0aGlzQXJnID09PSB1bmRlZmluZWRcbiAgICA/IHByb3BlcnR5KGZ1bmMpXG4gICAgOiBiYXNlTWF0Y2hlc1Byb3BlcnR5KGZ1bmMsIHRoaXNBcmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDYWxsYmFjaztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQ2FsbGJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vZ2V0TWF0Y2hEYXRhJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lcyBub3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICB2YXIga2V5ID0gbWF0Y2hEYXRhWzBdWzBdLFxuICAgICAgICB2YWx1ZSA9IG1hdGNoRGF0YVswXVsxXTtcblxuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHZhbHVlICYmICh2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gdG9PYmplY3Qob2JqZWN0KSkpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlSXNNYXRjaChvYmplY3QsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hdGNoZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9iYXNlSXNFcXVhbCcpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVyeSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSkgOiB1bmRlZmluZWQ7XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZCA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgY3VzdG9taXplciwgdHJ1ZSkgOiByZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzTWF0Y2guanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aXRob3V0IHN1cHBvcnQgZm9yIGB0aGlzYCBiaW5kaW5nXG4gKiBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0FdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQl0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3QodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiYXNlSXNFcXVhbCwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VJc0VxdWFsLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9lcXVhbE9iamVjdHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc1R5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyBvYmplY3RzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBPVtdXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0I9W11dIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBhcnJheVRhZyxcbiAgICAgIG90aFRhZyA9IGFycmF5VGFnO1xuXG4gIGlmICghb2JqSXNBcnIpIHtcbiAgICBvYmpUYWcgPSBvYmpUb1N0cmluZy5jYWxsKG9iamVjdCk7XG4gICAgaWYgKG9ialRhZyA9PSBhcmdzVGFnKSB7XG4gICAgICBvYmpUYWcgPSBvYmplY3RUYWc7XG4gICAgfSBlbHNlIGlmIChvYmpUYWcgIT0gb2JqZWN0VGFnKSB7XG4gICAgICBvYmpJc0FyciA9IGlzVHlwZWRBcnJheShvYmplY3QpO1xuICAgIH1cbiAgfVxuICBpZiAoIW90aElzQXJyKSB7XG4gICAgb3RoVGFnID0gb2JqVG9TdHJpbmcuY2FsbChvdGhlcik7XG4gICAgaWYgKG90aFRhZyA9PSBhcmdzVGFnKSB7XG4gICAgICBvdGhUYWcgPSBvYmplY3RUYWc7XG4gICAgfSBlbHNlIGlmIChvdGhUYWcgIT0gb2JqZWN0VGFnKSB7XG4gICAgICBvdGhJc0FyciA9IGlzVHlwZWRBcnJheShvdGhlcik7XG4gICAgfVxuICB9XG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgIShvYmpJc0FyciB8fCBvYmpJc09iaikpIHtcbiAgICByZXR1cm4gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcpO1xuICB9XG4gIGlmICghaXNMb29zZSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsIG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlciwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIC8vIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGRldGVjdGluZyBjaXJjdWxhciByZWZlcmVuY2VzIHNlZSBodHRwczovL2VzNS5naXRodWIuaW8vI0pPLlxuICBzdGFja0EgfHwgKHN0YWNrQSA9IFtdKTtcbiAgc3RhY2tCIHx8IChzdGFja0IgPSBbXSk7XG5cbiAgdmFyIGxlbmd0aCA9IHN0YWNrQS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChzdGFja0FbbGVuZ3RoXSA9PSBvYmplY3QpIHtcbiAgICAgIHJldHVybiBzdGFja0JbbGVuZ3RoXSA9PSBvdGhlcjtcbiAgICB9XG4gIH1cbiAgLy8gQWRkIGBvYmplY3RgIGFuZCBgb3RoZXJgIHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgc3RhY2tBLnB1c2gob2JqZWN0KTtcbiAgc3RhY2tCLnB1c2gob3RoZXIpO1xuXG4gIHZhciByZXN1bHQgPSAob2JqSXNBcnIgPyBlcXVhbEFycmF5cyA6IGVxdWFsT2JqZWN0cykob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG5cbiAgc3RhY2tBLnBvcCgpO1xuICBzdGFja0IucG9wKCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUlzRXF1YWxEZWVwLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBhcnJheVNvbWUgPSByZXF1aXJlKCcuL2FycmF5U29tZScpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyBhcnJheXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0FdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQl0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc0xvb3NlICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF0sXG4gICAgICAgIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKGlzTG9vc2UgPyBvdGhWYWx1ZSA6IGFyclZhbHVlLCBpc0xvb3NlID8gYXJyVmFsdWUgOiBvdGhWYWx1ZSwgaW5kZXgpIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChpc0xvb3NlKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxBcnJheXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlTb21lLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICAvLyBDb2VyY2UgZGF0ZXMgYW5kIGJvb2xlYW5zIHRvIG51bWJlcnMsIGRhdGVzIHRvIG1pbGxpc2Vjb25kcyBhbmQgYm9vbGVhbnNcbiAgICAgIC8vIHRvIGAxYCBvciBgMGAgdHJlYXRpbmcgaW52YWxpZCBkYXRlcyBjb2VyY2VkIHRvIGBOYU5gIGFzIG5vdCBlcXVhbC5cbiAgICAgIHJldHVybiArb2JqZWN0ID09ICtvdGhlcjtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBUcmVhdCBgTmFOYCB2cy4gYE5hTmAgYXMgZXF1YWwuXG4gICAgICByZXR1cm4gKG9iamVjdCAhPSArb2JqZWN0KVxuICAgICAgICA/IG90aGVyICE9ICtvdGhlclxuICAgICAgICA6IG9iamVjdCA9PSArb3RoZXI7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MgcHJpbWl0aXZlcyBhbmQgc3RyaW5nXG4gICAgICAvLyBvYmplY3RzIGFzIGVxdWFsLiBTZWUgaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4MTUuMTAuNi40IGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9lcXVhbEJ5VGFnLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBrZXlzID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXMnKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzTG9vc2VdIFNwZWNpZnkgcGVyZm9ybWluZyBwYXJ0aWFsIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQV0gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tCXSBUcmFja3MgdHJhdmVyc2VkIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikge1xuICB2YXIgb2JqUHJvcHMgPSBrZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc0xvb3NlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzTG9vc2UgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB2YXIgc2tpcEN0b3IgPSBpc0xvb3NlO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldLFxuICAgICAgICByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihpc0xvb3NlID8gb3RoVmFsdWUgOiBvYmpWYWx1ZSwgaXNMb29zZT8gb2JqVmFsdWUgOiBvdGhWYWx1ZSwga2V5KSA6IHVuZGVmaW5lZDtcblxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIDogcmVzdWx0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKCFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxPYmplY3RzLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID0gdHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID0gdHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID0gdHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID0gdHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID0gdHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tvYmpUb1N0cmluZy5jYWxsKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNUeXBlZEFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIG9iamVjdCBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IE9iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9PYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvdG9PYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vaXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgcGFpcnMgPSByZXF1aXJlKCcuLi9vYmplY3QvcGFpcnMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IHBhaXJzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHJlc3VsdFtsZW5ndGhdWzJdID0gaXNTdHJpY3RDb21wYXJhYmxlKHJlc3VsdFtsZW5ndGhdWzFdKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXRNYXRjaERhdGEuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzU3RyaWN0Q29tcGFyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvdG9PYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgdHdvIGRpbWVuc2lvbmFsIGFycmF5IG9mIHRoZSBrZXktdmFsdWUgcGFpcnMgZm9yIGBvYmplY3RgLFxuICogZS5nLiBgW1trZXkxLCB2YWx1ZTFdLCBba2V5MiwgdmFsdWUyXV1gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ucGFpcnMoeyAnYmFybmV5JzogMzYsICdmcmVkJzogNDAgfSk7XG4gKiAvLyA9PiBbWydiYXJuZXknLCAzNl0sIFsnZnJlZCcsIDQwXV0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24gcGFpcnMob2JqZWN0KSB7XG4gIG9iamVjdCA9IHRvT2JqZWN0KG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBwcm9wcyA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIHJlc3VsdFtpbmRleF0gPSBba2V5LCBvYmplY3Rba2V5XV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYWlycztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3QvcGFpcnMuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL2Jhc2VHZXQnKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vYmFzZUlzRXF1YWwnKSxcbiAgICBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL2Jhc2VTbGljZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vaXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGxhc3QgPSByZXF1aXJlKCcuLi9hcnJheS9sYXN0JyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0JyksXG4gICAgdG9QYXRoID0gcmVxdWlyZSgnLi90b1BhdGgnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXMgbm90IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheShwYXRoKSxcbiAgICAgIGlzQ29tbW9uID0gaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSxcbiAgICAgIHBhdGhLZXkgPSAocGF0aCArICcnKTtcblxuICBwYXRoID0gdG9QYXRoKHBhdGgpO1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBrZXkgPSBwYXRoS2V5O1xuICAgIG9iamVjdCA9IHRvT2JqZWN0KG9iamVjdCk7XG4gICAgaWYgKChpc0FyciB8fCAhaXNDb21tb24pICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgIG9iamVjdCA9IHBhdGgubGVuZ3RoID09IDEgPyBvYmplY3QgOiBiYXNlR2V0KG9iamVjdCwgYmFzZVNsaWNlKHBhdGgsIDAsIC0xKSk7XG4gICAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAga2V5ID0gbGFzdChwYXRoKTtcbiAgICAgIG9iamVjdCA9IHRvT2JqZWN0KG9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWVcbiAgICAgID8gKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBvYmplY3QpKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqZWN0W2tleV0sIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0cmluZyBwYXRoc1xuICogYW5kIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhdGhLZXldIFRoZSBrZXkgcmVwcmVzZW50YXRpb24gb2YgcGF0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgsIHBhdGhLZXkpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXRoS2V5ICE9PSB1bmRlZmluZWQgJiYgcGF0aEtleSBpbiB0b09iamVjdChvYmplY3QpKSB7XG4gICAgcGF0aCA9IFtwYXRoS2V5XTtcbiAgfVxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3BhdGhbaW5kZXgrK11dO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VHZXQuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHN0YXJ0ID0gc3RhcnQgPT0gbnVsbCA/IDAgOiAoK3N0YXJ0IHx8IDApO1xuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAtc3RhcnQgPiBsZW5ndGggPyAwIDogKGxlbmd0aCArIHN0YXJ0KTtcbiAgfVxuICBlbmQgPSAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gbGVuZ3RoKSA/IGxlbmd0aCA6ICgrZW5kIHx8IDApO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VTbGljZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxuXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKCh0eXBlID09ICdzdHJpbmcnICYmIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkpIHx8IHR5cGUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSk7XG4gIHJldHVybiByZXN1bHQgfHwgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIHRvT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzS2V5LmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogR2V0cyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmxhc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gbGFzdChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuICByZXR1cm4gbGVuZ3RoID8gYXJyYXlbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9hcnJheS9sYXN0LmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuL2Jhc2VUb1N0cmluZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxuXFxcXF18XFxcXC4pKj8pXFwyKVxcXS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIHByb3BlcnR5IHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiB0b1BhdGgodmFsdWUpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZVRvU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvUGF0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC90b1BhdGguanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGlmIGl0J3Mgbm90IG9uZS4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkXG4gKiBmb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiAodmFsdWUgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VUb1N0cmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzS2V5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgYXQgYHBhdGhgIG9uIGFcbiAqIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogeyAnYyc6IDIgfSB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogeyAnYyc6IDEgfSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iLmMnKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLnBsdWNrKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InLCAnYyddKSksICdhLmIuYycpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHBhdGgpIDogYmFzZVByb3BlcnR5RGVlcChwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC91dGlsaXR5L3Byb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9iYXNlR2V0JyksXG4gICAgdG9QYXRoID0gcmVxdWlyZSgnLi90b1BhdGgnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VQcm9wZXJ0eWAgd2hpY2ggc3VwcG9ydHMgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpIHtcbiAgdmFyIHBhdGhLZXkgPSAocGF0aCArICcnKTtcbiAgcGF0aCA9IHRvUGF0aChwYXRoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0KG9iamVjdCwgcGF0aCwgcGF0aEtleSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlUHJvcGVydHlEZWVwLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vYmFzZUVhY2gnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXBgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2sgc2hvcnRoYW5kc1xuICogYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IGlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pID8gQXJyYXkoY29sbGVjdGlvbi5sZW5ndGgpIDogW107XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWFwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VNYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL2Jhc2VGb3JPd24nKSxcbiAgICBjcmVhdGVCYXNlRWFjaCA9IHJlcXVpcmUoJy4vY3JlYXRlQmFzZUVhY2gnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JFYWNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fHN0cmluZ30gUmV0dXJucyBgY29sbGVjdGlvbmAuXG4gKi9cbnZhciBiYXNlRWFjaCA9IGNyZWF0ZUJhc2VFYWNoKGJhc2VGb3JPd24pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VFYWNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VFYWNoLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9iYXNlRm9yJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvck93bjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9yT3duLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JJbmAgYW5kIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlc1xuICogb3ZlciBgb2JqZWN0YCBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgaW52b2tpbmcgYGl0ZXJhdGVlYCBmb3JcbiAqIGVhY2ggcHJvcGVydHkuIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseVxuICogcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvci5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIGBfLmZvckluYCBvciBgXy5mb3JJblJpZ2h0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaXRlcmFibGUgPSB0b09iamVjdChvYmplY3QpLFxuICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMTtcblxuICAgIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2tleV0sIGtleSwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRm9yO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUJhc2VGb3IuanNcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdldExlbmd0aCA9IHJlcXVpcmUoJy4vZ2V0TGVuZ3RoJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBiYXNlRWFjaGAgb3IgYGJhc2VFYWNoUmlnaHRgIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGEgY29sbGVjdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUVhY2goZWFjaEZ1bmMsIGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbiA/IGdldExlbmd0aChjb2xsZWN0aW9uKSA6IDA7XG4gICAgaWYgKCFpc0xlbmd0aChsZW5ndGgpKSB7XG4gICAgICByZXR1cm4gZWFjaEZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMSxcbiAgICAgICAgaXRlcmFibGUgPSB0b09iamVjdChjb2xsZWN0aW9uKTtcblxuICAgIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVbaW5kZXhdLCBpbmRleCwgaXRlcmFibGUpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUVhY2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQmFzZUVhY2guanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQ29uZmlnIGZyb20gJ2phdmFzY3JpcHQvY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnJhY3RhbChwaXhlbCwgaXRlcmF0aW9uKSB7XG4gIGlmIChpdGVyYXRpb24gPj0gRnJhY3RhbC5NQVhfSVRFUkFUSU9OUykgeyByZXR1cm4gMDsgfVxuICAvKiB0aGUgYmFzZSBlcXVhdGlvbiBmb3IgdGhlIG1hbmRlbGJyb3Qgc2V0IGlzICAqL1xuICAvKiBmKHopID0gel4yICsgYyAqL1xuXG4gIHZhciBjID0gcGl4ZWwuYztcbiAgdmFyIHogPSBwaXhlbC56O1xuICB2YXIgcmVhbCA9IHoucmVhbCAqIHoucmVhbCAtIHouaW1hZ2luYXJ5ICogei5pbWFnaW5hcnkgKyBjLnJlYWw7XG4gIHZhciBpbWFnaW5hcnkgPSAyICogei5yZWFsICogei5pbWFnaW5hcnkgKyBjLmltYWdpbmFyeTtcblxuICBwaXhlbC56LnJlYWwgPSByZWFsO1xuICBwaXhlbC56LmltYWdpbmFyeSA9IGltYWdpbmFyeTtcblxuICBpZiAocmVhbCAqIHJlYWwgKyBpbWFnaW5hcnkgKiBpbWFnaW5hcnkgPiA0KSB7XG4gICAgcmV0dXJuIGl0ZXJhdGlvbiB8fCAwO1xuICB9XG5cbiAgcmV0dXJuIEZyYWN0YWwocGl4ZWwsICsraXRlcmF0aW9uIHx8IDEpO1xufVxuXG5GcmFjdGFsLk1BWF9JVEVSQVRJT05TID0gQ29uZmlnLmdldENvbmZpZygpLml0ZXJhdGlvbnM7XG5cbmZ1bmN0aW9uIE1hbmRlbGJyb3QoeCwgeSkge1xuICByZXR1cm4gY29sb3JpemUoRnJhY3RhbCh7XG4gICAgYzoge3JlYWw6IHgsIGltYWdpbmFyeTogeX0sXG4gICAgejoge3JlYWw6IDAsIGltYWdpbmFyeTogMH1cbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBKdWxpYSh4LCB5KSB7XG4gIHJldHVybiBjb2xvcml6ZShGcmFjdGFsKHtcbiAgICBjOiB7cmVhbDogLTAuODM1LCBpbWFnaW5hcnk6IDAuMjMyMX0sXG4gICAgejoge3JlYWw6IHgsIGltYWdpbmFyeTogeX1cbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBjb2xvcml6ZShpdGVyYXRpb25zKSB7XG4gIHJldHVybiAyNTYgLyBGcmFjdGFsLk1BWF9JVEVSQVRJT05TICogaXRlcmF0aW9ucztcbn1cblxuZXhwb3J0IHsgTWFuZGVsYnJvdCwgSnVsaWEgfTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vamF2YXNjcmlwdC9lcXVhdGlvbnMvZnJhY3RhbC5qc1xuICoqLyIsImltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL2FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgQXBwbGljYXRpb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2phdmFzY3JpcHQvUmVuZGVyZXIvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9yZW5kZXJlcic7IFxuaW1wb3J0IFZpZXdwb3J0IGZyb20gJy4vdmlld3BvcnQnO1xuXG5pbXBvcnQgYXNzaWduIGZyb20gJ2xvZGFzaC9vYmplY3QvYXNzaWduJztcblxubGV0IEFQUExJQ0FUSU9OX1BST1RPVFlQRSA9IHtcbiAgc3RhdHVzOiB7IGFjdGl2ZWx5UmVuZGVyaW5nOiBmYWxzZSB9LFxuICBpbml0KHtjYW52YXMsIGdldENvbmZpZywgZXF1YXRpb24sIHNldENvbmZpZ30pIHtcbiAgICBhc3NpZ24odGhpcywge2NhbnZhcywgZ2V0Q29uZmlnLCBlcXVhdGlvbiwgc2V0Q29uZmlnfSk7XG5cbiAgICB0aGlzLnZpZXdwb3J0ID0gVmlld3BvcnQuY3JlYXRlKHtcbiAgICAgIGFwcGxpY2F0aW9uU3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXMsXG4gICAgICBnZXRDb25maWc6IHRoaXMuZ2V0Q29uZmlnLFxuICAgICAgc2V0Q29uZmlnOiB0aGlzLnNldENvbmZpZ1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IFJlbmRlcmVyLmNyZWF0ZSh7XG4gICAgICBhcHBsaWNhdGlvblN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzLFxuICAgICAgZ2V0Q29uZmlnOiB0aGlzLmdldENvbmZpZyxcbiAgICAgIGVxdWF0aW9uOiB0aGlzLmVxdWF0aW9uLFxuICAgICAgdmlld3BvcnQ6IHRoaXMudmlld3BvcnRcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH0sXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih7fSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlKHtjYW52YXMsIGdldENvbmZpZywgZXF1YXRpb24sIHNldENvbmZpZ30pIHtcbiAgICB2YXIgYXBwbGljYXRpb24gPSBPYmplY3QuY3JlYXRlKEFQUExJQ0FUSU9OX1BST1RPVFlQRSk7XG5cbiAgICBhcHBsaWNhdGlvbi5pbml0KHtjYW52YXMsIGdldENvbmZpZywgZXF1YXRpb24sIHNldENvbmZpZ30pO1xuXG4gICAgcmV0dXJuIGFwcGxpY2F0aW9uO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qYXZhc2NyaXB0L1JlbmRlcmVyL2FwcGxpY2F0aW9uLmpzXG4gKiovIiwiaW1wb3J0IGFzc2lnbiBmcm9tICdsb2Rhc2gvb2JqZWN0L2Fzc2lnbic7XG5cbi8qIHRoZXNlIHZhbHVlcyBhcmUgY29uc3RhbnQgZm9yIGEgcGFydGljdWxhciByZW5kZXIgKi9cbmxldCBDT05GSUcsIFNVUEVSX1NBTVBMRVMsIERYLCBEWSwgVE9QX0xFRlQ7XG5jb25zdCBSRU5ERVJFUl9QUk9UT1RZUEUgPSB7XG4gIGluaXQoeyBhcHBsaWNhdGlvblN0YXR1cywgY2FudmFzLCBlcXVhdGlvbiwgZ2V0Q29uZmlnLCB2aWV3cG9ydCB9KSB7XG4gICAgYXNzaWduKHRoaXMsIHsgYXBwbGljYXRpb25TdGF0dXMsIGNhbnZhcywgZXF1YXRpb24sIGdldENvbmZpZywgdmlld3BvcnQgfSk7XG5cbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIH0sXG4gIHJlbmRlcigpIHtcbiAgICBDT05GSUcgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIFNVUEVSX1NBTVBMRVMgPSBDT05GSUcuc3VwZXJfc2FtcGxlcztcblxuICAgIHRoaXMudmlld3BvcnQudXBkYXRlKCk7XG4gICAgRFggPSB0aGlzLnZpZXdwb3J0LmRlbHRhKCkueDtcbiAgICBEWSA9IHRoaXMudmlld3BvcnQuZGVsdGEoKS55O1xuICAgIFRPUF9MRUZUID0gdGhpcy52aWV3cG9ydC50b3BMZWZ0KCk7XG4gICAgXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5hcHBsaWNhdGlvblN0YXR1cy5hY3RpdmVseVJlbmRlcmluZyA9IHRydWU7XG4gICAgICBjb25zb2xlLnRpbWUoJ3JlbmRlciB0aW1lcicpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyUm93cy5iaW5kKHRoaXMsIHRoaXMuZXF1YXRpb24sIDAsIHJlc29sdmUpKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuYXBwbGljYXRpb25TdGF0dXMuYWN0aXZlbHlSZW5kZXJpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUudGltZUVuZCgncmVuZGVyIHRpbWVyJyk7XG4gICAgfSk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIH0sXG4gIHJlbmRlclJvd3MoZXF1YXRpb24sIHlfaW5kZXgsIHJlc29sdmUpIHtcbiAgICBsZXQgdGltZXN0YW1wID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcblxuICAgIHdoaWxlKHlfaW5kZXggPCB0aGlzLmNhbnZhcy5oZWlnaHQgJiYgKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAtIHRpbWVzdGFtcCA8IDEwMDAuMCAvIENPTkZJRy5yZW5kZXJfZnBzKSB7XG4gICAgICB0aGlzLnJlbmRlclJvdyhlcXVhdGlvbiwgeV9pbmRleCsrKTtcbiAgICB9XG5cbiAgICBpZiAoeV9pbmRleCA8IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyUm93cy5iaW5kKHRoaXMsIGVxdWF0aW9uLCB5X2luZGV4LCByZXNvbHZlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNvbHZlKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlclJvdyhlcXVhdGlvbiwgeV9pbmRleCkge1xuICAgIHZhciBpbWFnZURhdGEgPSBuZXcgSW1hZ2VEYXRhKHRoaXMuY2FudmFzLndpZHRoLCAxKTtcblxuICAgIGZvciAodmFyIHhfaW5kZXggPSAwOyB4X2luZGV4IDwgdGhpcy5jYW52YXMud2lkdGg7IHhfaW5kZXgrKykge1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5yZW5kZXJQaXhlbCh4X2luZGV4LCB5X2luZGV4LCBlcXVhdGlvbik7XG5cbiAgICAgIGxldCBkYXRhSW5kZXggPSB4X2luZGV4ICogNDtcbiAgICAgIGltYWdlRGF0YS5kYXRhW2RhdGFJbmRleCArIDBdID0gMjU1O1xuICAgICAgaW1hZ2VEYXRhLmRhdGFbZGF0YUluZGV4ICsgMV0gPSAyNTU7XG4gICAgICBpbWFnZURhdGEuZGF0YVtkYXRhSW5kZXggKyAyXSA9IDI1NTtcbiAgICAgIGltYWdlRGF0YS5kYXRhW2RhdGFJbmRleCArIDNdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIHlfaW5kZXgpO1xuICB9LFxuICByZW5kZXJQaXhlbCh4X2luZGV4LCB5X2luZGV4LCBlcXVhdGlvbikge1xuICAgIGxldCBzdXBlclNhbXBsZWRWYWx1ZSA9IDA7XG5cbiAgICBmb3IgKGxldCBzYW1wbGUgPSAwOyBzYW1wbGUgPCBTVVBFUl9TQU1QTEVTOyBzYW1wbGUrKykge1xuICAgICAgdmFyIHggPSBUT1BfTEVGVC54ICsgKHhfaW5kZXggKyBNYXRoLnJhbmRvbSgpKSAqIERYO1xuICAgICAgdmFyIHkgPSBUT1BfTEVGVC55ICsgKHlfaW5kZXggKyBNYXRoLnJhbmRvbSgpKSAqIERZO1xuXG4gICAgICBzdXBlclNhbXBsZWRWYWx1ZSArPSBlcXVhdGlvbih4LCB5KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHN1cGVyU2FtcGxlZFZhbHVlIC8gU1VQRVJfU0FNUExFUztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGUoeyBhcHBsaWNhdGlvblN0YXR1cywgY2FudmFzLCBlcXVhdGlvbiwgZ2V0Q29uZmlnLCB2aWV3cG9ydCB9KSB7XG4gICAgdmFyIHJlbmRlcmVyID0gT2JqZWN0LmNyZWF0ZShSRU5ERVJFUl9QUk9UT1RZUEUpO1xuXG4gICAgcmVuZGVyZXIuaW5pdCh7IGFwcGxpY2F0aW9uU3RhdHVzLCBjYW52YXMsIGVxdWF0aW9uLCBnZXRDb25maWcsIHZpZXdwb3J0IH0pO1xuXG4gICAgcmV0dXJuIHJlbmRlcmVyO1xuICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9qYXZhc2NyaXB0L1JlbmRlcmVyL3JlbmRlcmVyLmpzXG4gKiovIiwiY29uc3QgSElHSExJR0hUX0NPTE9SID0gJ3doaXRlJztcbmNvbnN0IFpPT01fU0laRSA9IDAuMTtcblxuY29uc3QgVklFV1BPUlRfUFJPVE9UWVBFID0ge1xuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY3VycmVudENvbmZpZyA9IHRoaXMuZ2V0Q29uZmlnKCk7XG5cbiAgICB0aGlzLnNldEJvdW5kcyh7XG4gICAgICB4OiB7bWluOiBjdXJyZW50Q29uZmlnLnhfbWluLCBtYXg6IGN1cnJlbnRDb25maWcueF9tYXh9LFxuICAgICAgeToge21pbjogY3VycmVudENvbmZpZy55X21pbiwgbWF4OiBjdXJyZW50Q29uZmlnLnlfbWF4fVxuICAgIH0pO1xuXG4gICAgdGhpcy5ncm93VG9Bc3BlY3RSYXRpbygpO1xuICB9LFxuICBpbml0OiBmdW5jdGlvbiAoe2FwcGxpY2F0aW9uU3RhdHVzLCBjYW52YXMsIGdldENvbmZpZywgc2V0Q29uZmlnfSkge1xuICAgIHRoaXMuYXBwbGljYXRpb25TdGF0dXMgPSBhcHBsaWNhdGlvblN0YXR1cztcbiAgICB0aGlzLmdldENvbmZpZyA9IGdldENvbmZpZztcbiAgICB0aGlzLnNldENvbmZpZyA9IHNldENvbmZpZztcbiAgICB0aGlzLmJpbmRUb0NhbnZhcyhjYW52YXMpO1xuICB9LFxuICB4Qm91bmRzOiB7bWluOiAwLCBtYXg6IDB9LFxuICB5Qm91bmRzOiB7bWluOiAwLCBtYXg6IDB9LFxuICBzZXRCb3VuZHM6IGZ1bmN0aW9uIChib3VuZHMpIHtcbiAgICB0aGlzLnhCb3VuZHMgPSBib3VuZHMueDtcbiAgICB0aGlzLnlCb3VuZHMgPSBib3VuZHMueTtcbiAgfSxcbiAgbG9jYXRpb25IYXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHhfbWluOiB0aGlzLnhCb3VuZHMubWluLFxuICAgICAgeF9tYXg6IHRoaXMueEJvdW5kcy5tYXgsXG4gICAgICB5X21pbjogdGhpcy55Qm91bmRzLm1pbixcbiAgICAgIHlfbWF4OiB0aGlzLnlCb3VuZHMubWF4XG4gICAgfTtcbiAgfSxcbiAgY2VudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6ICh0aGlzLnhCb3VuZHMubWF4ICsgdGhpcy54Qm91bmRzLm1pbikgLyAyLFxuICAgICAgeTogKHRoaXMueUJvdW5kcy5tYXggKyB0aGlzLnlCb3VuZHMubWluKSAvIDJcbiAgICB9O1xuICB9LFxuICByYW5nZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLnhCb3VuZHMubWF4IC0gdGhpcy54Qm91bmRzLm1pbixcbiAgICAgIHk6IHRoaXMueUJvdW5kcy5tYXggLSB0aGlzLnlCb3VuZHMubWluXG4gICAgfTtcbiAgfSxcbiAgZGVsdGE6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdGhpcy5yYW5nZSgpLnggLyB0aGlzLndpZHRoLFxuICAgICAgeTogdGhpcy5yYW5nZSgpLnkgLyB0aGlzLmhlaWdodFxuICAgIH07XG4gIH0sXG4gIHRvcExlZnQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogdGhpcy54Qm91bmRzLm1pbixcbiAgICAgIHk6IHRoaXMueUJvdW5kcy5taW5cbiAgICB9O1xuICB9LFxuICBjYW52YXNTaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHRoaXMuY2FudmFzLm9mZnNldFdpZHRoLFxuICAgICAgeTogdGhpcy5jYW52YXMub2Zmc2V0SGVpZ2h0XG4gICAgfTtcbiAgfSxcbiAgY2FudmFzQ2xpY2tMb2NhdGlvbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGN1cnJlbnRDYW52YXNTaXplID0gdGhpcy5jYW52YXNTaXplKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogZXZlbnQub2Zmc2V0WCAvIGN1cnJlbnRDYW52YXNTaXplLnggKiB0aGlzLndpZHRoLFxuICAgICAgeTogZXZlbnQub2Zmc2V0WSAvIGN1cnJlbnRDYW52YXNTaXplLnkgKiB0aGlzLmhlaWdodFxuICAgIH07XG4gIH0sXG4gIGNhcnRlc2lhbkNsaWNrTG9jYXRpb246IGZ1bmN0aW9uIChjYW52YXNDbGlja0xvY2F0aW9uKSB7XG4gICAgdmFyIHJhbmdlID0gdGhpcy5yYW5nZSgpO1xuICAgIHZhciB0b3BMZWZ0ID0gdGhpcy50b3BMZWZ0KCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogdG9wTGVmdC54ICsgcmFuZ2UueCAqIGNhbnZhc0NsaWNrTG9jYXRpb24ueCAvIHRoaXMud2lkdGgsXG4gICAgICB5OiB0b3BMZWZ0LnkgKyByYW5nZS55ICogY2FudmFzQ2xpY2tMb2NhdGlvbi55IC8gdGhpcy5oZWlnaHRcbiAgICB9O1xuICB9LFxuICB6b29tVG9Mb2NhdGlvbjogZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gICAgdmFyIHJhbmdlID0gdGhpcy5yYW5nZSgpO1xuXG4gICAgdGhpcy5zZXRCb3VuZHMoe1xuICAgICAgeDoge1xuICAgICAgICBtaW46IGxvY2F0aW9uLnggLSAocmFuZ2UueCAqIFpPT01fU0laRSAqIDAuNSksXG4gICAgICAgIG1heDogbG9jYXRpb24ueCArIChyYW5nZS54ICogWk9PTV9TSVpFICogMC41KVxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgbWluOiBsb2NhdGlvbi55IC0gKHJhbmdlLnkgKiBaT09NX1NJWkUgKiAwLjUpLFxuICAgICAgICBtYXg6IGxvY2F0aW9uLnkgKyAocmFuZ2UueSAqIFpPT01fU0laRSAqIDAuNSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2V0Q29uZmlnKHRoaXMubG9jYXRpb25IYXNoKCkpO1xuICB9LFxuICBiaW5kVG9DYW52YXM6IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzLm9mZnNldFdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcblxuICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcblxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKCF0aGlzLmFwcGxpY2F0aW9uU3RhdHVzLmFjdGl2ZWx5UmVuZGVyaW5nKSB7XG4gICAgICAgIHZhciBjYW52YXNDbGlja0xvY2F0aW9uICAgID0gdGhpcy5jYW52YXNDbGlja0xvY2F0aW9uKGV2ZW50KTtcbiAgICAgICAgdmFyIGNhcnRlc2lhbkNsaWNrTG9jYXRpb24gPSB0aGlzLmNhcnRlc2lhbkNsaWNrTG9jYXRpb24oY2FudmFzQ2xpY2tMb2NhdGlvbik7XG5cbiAgICAgICAgdGhpcy5oaWdobGlnaHRab29tQm94KGNhbnZhc0NsaWNrTG9jYXRpb24pO1xuICAgICAgICB0aGlzLnpvb21Ub0xvY2F0aW9uKGNhcnRlc2lhbkNsaWNrTG9jYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBoaWdobGlnaHRab29tQm94OiBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIGNhbnZhc1NpemUgPSB0aGlzLmNhbnZhc1NpemUoKTtcblxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBISUdITElHSFRfQ09MT1I7XG5cbiAgICBjb250ZXh0LnJlY3QoXG4gICAgICBsb2NhdGlvbi54IC0gY2FudmFzU2l6ZS54ICogWk9PTV9TSVpFICogMC41LFxuICAgICAgbG9jYXRpb24ueSAtIGNhbnZhc1NpemUueSAqIFpPT01fU0laRSAqIDAuNSxcbiAgICAgIGNhbnZhc1NpemUueCAqIFpPT01fU0laRSxcbiAgICAgIGNhbnZhc1NpemUueSAqIFpPT01fU0laRVxuICAgICk7XG5cbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICB9LFxuICBncm93VG9Bc3BlY3RSYXRpbzogZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW52YXNBc3BlY3RSYXRpbyA9IHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0O1xuXG4gICAgdmFyIHJhbmdlID0gdGhpcy5yYW5nZSgpO1xuICAgIHZhciBjZW50ZXIgPSB0aGlzLmNlbnRlcigpO1xuICAgIHZhciBjdXJyZW50QXNwZWN0UmF0aW8gPSByYW5nZS54IC8gcmFuZ2UueTtcblxuICAgIHZhciBuZXdEaXN0YW5jZUZyb21DZW50ZXI7XG4gICAgdmFyIHhCb3VuZHMgPSB0aGlzLnhCb3VuZHM7XG4gICAgdmFyIHlCb3VuZHMgPSB0aGlzLnlCb3VuZHM7XG4gICAgaWYgKGN1cnJlbnRBc3BlY3RSYXRpbyA+IGNhbnZhc0FzcGVjdFJhdGlvKSB7XG4gICAgICAvKiBoZWlnaHQgbmVlZHMgZXhwYW5zaW9uICovXG4gICAgICB2YXIgdmVydGljYWxFZGdlVG9DZW50ZXJEaXN0YW5jZSA9IHlCb3VuZHMubWluIC0gY2VudGVyLnk7XG5cbiAgICAgIG5ld0Rpc3RhbmNlRnJvbUNlbnRlciA9IHZlcnRpY2FsRWRnZVRvQ2VudGVyRGlzdGFuY2UgKiAoY3VycmVudEFzcGVjdFJhdGlvIC8gY2FudmFzQXNwZWN0UmF0aW8pO1xuICAgICAgeUJvdW5kcyA9IHtcbiAgICAgICAgbWluOiBjZW50ZXIueSArIG5ld0Rpc3RhbmNlRnJvbUNlbnRlcixcbiAgICAgICAgbWF4OiBjZW50ZXIueSAtIG5ld0Rpc3RhbmNlRnJvbUNlbnRlclxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogd2lkdGggbmVlZHMgZXhwYW5zaW9uICovXG4gICAgICB2YXIgaG9yaXpvbnRhbEVkZ2VUb0NlbnRlckRpc3RhbmNlID0geEJvdW5kcy5taW4gLSBjZW50ZXIueDtcblxuICAgICAgbmV3RGlzdGFuY2VGcm9tQ2VudGVyID0gaG9yaXpvbnRhbEVkZ2VUb0NlbnRlckRpc3RhbmNlICogKGNhbnZhc0FzcGVjdFJhdGlvIC8gY3VycmVudEFzcGVjdFJhdGlvKTtcbiAgICAgIHhCb3VuZHMgPSB7XG4gICAgICAgIG1pbjogY2VudGVyLnggKyBuZXdEaXN0YW5jZUZyb21DZW50ZXIsXG4gICAgICAgIG1heDogY2VudGVyLnggLSBuZXdEaXN0YW5jZUZyb21DZW50ZXJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5zZXRCb3VuZHMoe1xuICAgICAgeDogeEJvdW5kcyxcbiAgICAgIHk6IHlCb3VuZHNcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGUoe2FwcGxpY2F0aW9uU3RhdHVzLCBjYW52YXMsIGdldENvbmZpZywgc2V0Q29uZmlnfSkge1xuICAgIHZhciB2aWV3cG9ydCA9IE9iamVjdC5jcmVhdGUoVklFV1BPUlRfUFJPVE9UWVBFKTtcblxuICAgIHZpZXdwb3J0LmluaXQoe2FwcGxpY2F0aW9uU3RhdHVzLCBjYW52YXMsIGdldENvbmZpZywgc2V0Q29uZmlnfSk7XG5cbiAgICByZXR1cm4gdmlld3BvcnQ7XG4gIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2phdmFzY3JpcHQvUmVuZGVyZXIvdmlld3BvcnQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9XG4vKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdHZhciBfamF2YXNjcmlwdEdldEhhc2hQYXJhbXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0dmFyIF9qYXZhc2NyaXB0R2V0SGFzaFBhcmFtczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qYXZhc2NyaXB0R2V0SGFzaFBhcmFtcyk7XG5cdFxuXHR2YXIgX2phdmFzY3JpcHRIYXNoQ2hhbmdlSGFuZGxlciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHR2YXIgX2phdmFzY3JpcHRIYXNoQ2hhbmdlSGFuZGxlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qYXZhc2NyaXB0SGFzaENoYW5nZUhhbmRsZXIpO1xuXHRcblx0dmFyIF9qYXZhc2NyaXB0S2V5c1dpdGhDaGFuZ2VkVmFsdWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNyk7XG5cdFxuXHR2YXIgX2phdmFzY3JpcHRLZXlzV2l0aENoYW5nZWRWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfamF2YXNjcmlwdEtleXNXaXRoQ2hhbmdlZFZhbHVlcyk7XG5cdFxuXHR2YXIgX2phdmFzY3JpcHRTdWJzY3JpYmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwKTtcblx0XG5cdHZhciBfamF2YXNjcmlwdFN1YnNjcmliZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qYXZhc2NyaXB0U3Vic2NyaWJlKTtcblx0XG5cdHZhciBfamF2YXNjcmlwdFN1YnNjcmlwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oNjEpO1xuXHRcblx0dmFyIF9qYXZhc2NyaXB0U3Vic2NyaXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2phdmFzY3JpcHRTdWJzY3JpcHRpb24pO1xuXHRcblx0dmFyIF9qYXZhc2NyaXB0U3Vic2NyaXB0aW9uc0J5UHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYzKTtcblx0XG5cdHZhciBfamF2YXNjcmlwdFN1YnNjcmlwdGlvbnNCeVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2phdmFzY3JpcHRTdWJzY3JpcHRpb25zQnlQcm9wZXJ0eSk7XG5cdFxuXHR2YXIgX2phdmFzY3JpcHRTdWJzY3JpcHRpb25zQnlVVUlEID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2NCk7XG5cdFxuXHR2YXIgX2phdmFzY3JpcHRTdWJzY3JpcHRpb25zQnlVVUlEMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2phdmFzY3JpcHRTdWJzY3JpcHRpb25zQnlVVUlEKTtcblx0XG5cdHZhciBfamF2YXNjcmlwdFVuc3Vic2NyaWJlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2NSk7XG5cdFxuXHR2YXIgX2phdmFzY3JpcHRVbnN1YnNjcmliZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qYXZhc2NyaXB0VW5zdWJzY3JpYmUpO1xuXHRcblx0dmFyIHN1YnNjcmlwdGlvbnNCeVByb3BlcnR5ID0gKDAsIF9qYXZhc2NyaXB0U3Vic2NyaXB0aW9uc0J5UHJvcGVydHkyWydkZWZhdWx0J10pKCk7XG5cdFxuXHQvKiBwcm9iYWJseSBzaG91bGQgbWlncmF0ZSB0aGlzIHRvIGEgZmFjdG9yeSBhdCBzb21lIHBvaW50IHRvIGF2b2lkIHBvc3NpYmxlIHNpbmdsZXRvbiBpc3N1ZXMgKi9cblx0ZXhwb3J0c1snZGVmYXVsdCddID0ge1xuXHQgIGVuc3VyZUluaXRpYWxpemF0aW9uOiBmdW5jdGlvbiBlbnN1cmVJbml0aWFsaXphdGlvbigpIHtcblx0ICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuXHQgICAgICB0aGlzLmluaXQoKTtcblx0ICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdCAgICB9XG5cdCAgfSxcblx0ICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuXHQgICAgcmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdCAgICAgICgwLCBfamF2YXNjcmlwdEhhc2hDaGFuZ2VIYW5kbGVyMlsnZGVmYXVsdCddKSh7XG5cdCAgICAgICAgZXZlbnQ6IGV2ZW50LFxuXHQgICAgICAgIGdldEhhc2hQYXJhbXM6IF9qYXZhc2NyaXB0R2V0SGFzaFBhcmFtczJbJ2RlZmF1bHQnXSxcblx0ICAgICAgICBrZXlzV2l0aENoYW5nZWRWYWx1ZXM6IF9qYXZhc2NyaXB0S2V5c1dpdGhDaGFuZ2VkVmFsdWVzMlsnZGVmYXVsdCddLFxuXHQgICAgICAgIHN1YnNjcmlwdGlvbnNCeVByb3BlcnR5OiBzdWJzY3JpcHRpb25zQnlQcm9wZXJ0eSxcblx0ICAgICAgICBzdWJzY3JpcHRpb25zQnlVVUlEOiBfamF2YXNjcmlwdFN1YnNjcmlwdGlvbnNCeVVVSUQyWydkZWZhdWx0J11cblx0ICAgICAgfSk7XG5cdCAgICB9KTtcblx0ICB9LFxuXHQgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKHByb3BlcnRpZXMsIGNhbGxiYWNrKSB7XG5cdCAgICB0aGlzLmVuc3VyZUluaXRpYWxpemF0aW9uKCk7XG5cdFxuXHQgICAgcmV0dXJuICgwLCBfamF2YXNjcmlwdFN1YnNjcmliZTJbJ2RlZmF1bHQnXSkoe1xuXHQgICAgICBTdWJzY3JpcHRpb246IF9qYXZhc2NyaXB0U3Vic2NyaXB0aW9uMlsnZGVmYXVsdCddLFxuXHQgICAgICBzdWJzY3JpcHRpb25zQnlVVUlEOiBfamF2YXNjcmlwdFN1YnNjcmlwdGlvbnNCeVVVSUQyWydkZWZhdWx0J10sXG5cdCAgICAgIHN1YnNjcmlwdGlvbnNCeVByb3BlcnR5OiBzdWJzY3JpcHRpb25zQnlQcm9wZXJ0eSxcblx0ICAgICAgcHJvcGVydGllczogcHJvcGVydGllcyxcblx0ICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG5cdCAgICB9KTtcblx0ICB9LFxuXHQgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiB1bnN1YnNjcmliZShzdWJzY3JpcHRpb25VVUlEKSB7XG5cdCAgICAoMCwgX2phdmFzY3JpcHRVbnN1YnNjcmliZTJbJ2RlZmF1bHQnXSkoe1xuXHQgICAgICBzdWJzY3JpcHRpb25VVUlEOiBzdWJzY3JpcHRpb25VVUlELFxuXHQgICAgICBzdWJzY3JpcHRpb25zQnlVVUlEOiBfamF2YXNjcmlwdFN1YnNjcmlwdGlvbnNCeVVVSUQyWydkZWZhdWx0J10sXG5cdCAgICAgIHN1YnNjcmlwdGlvbnNCeVByb3BlcnR5OiBzdWJzY3JpcHRpb25zQnlQcm9wZXJ0eVxuXHQgICAgfSk7XG5cdCAgfVxuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfc2xpY2VkVG9BcnJheSA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pWydyZXR1cm4nXSkgX2lbJ3JldHVybiddKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UnKTsgfSB9OyB9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKHVybCkge1xuXHQgIHZhciBfdXJsJHNwbGl0ID0gdXJsLnNwbGl0KCcjJyk7XG5cdFxuXHQgIHZhciBfdXJsJHNwbGl0MiA9IF9zbGljZWRUb0FycmF5KF91cmwkc3BsaXQsIDIpO1xuXHRcblx0ICB2YXIgXyA9IF91cmwkc3BsaXQyWzBdO1xuXHQgIHZhciB1cmxIYXNoID0gX3VybCRzcGxpdDJbMV07XG5cdFxuXHQgIHVybEhhc2ggPSB1cmxIYXNoIHx8ICcnO1xuXHQgIHJldHVybiB1cmxIYXNoLnNwbGl0KCcmJykucmVkdWNlKGZ1bmN0aW9uIChoYXNoLCBrZXlWYWx1ZVBhaXIpIHtcblx0ICAgIHZhciBfa2V5VmFsdWVQYWlyJHNwbGl0ID0ga2V5VmFsdWVQYWlyLnNwbGl0KCc9Jyk7XG5cdFxuXHQgICAgdmFyIF9rZXlWYWx1ZVBhaXIkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX2tleVZhbHVlUGFpciRzcGxpdCwgMik7XG5cdFxuXHQgICAgdmFyIGtleSA9IF9rZXlWYWx1ZVBhaXIkc3BsaXQyWzBdO1xuXHQgICAgdmFyIHZhbHVlID0gX2tleVZhbHVlUGFpciRzcGxpdDJbMV07XG5cdFxuXHQgICAgaWYgKHZhbHVlIHx8ICFpc05hTih2YWx1ZSkpIHtcblx0ICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuXHQgICAgICAgIGhhc2hba2V5XSA9IHZhbHVlO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGhhc2hba2V5XSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2UgaWYgKGtleS5sZW5ndGggPiAwKSB7XG5cdCAgICAgIGhhc2hba2V5XSA9IHRydWU7XG5cdCAgICB9XG5cdFxuXHQgICAgcmV0dXJuIGhhc2g7XG5cdCAgfSwge30pO1xuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cdFxuXHR2YXIgX2xvZGFzaEFycmF5SW50ZXJzZWN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdHZhciBfbG9kYXNoQXJyYXlJbnRlcnNlY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoQXJyYXlJbnRlcnNlY3Rpb24pO1xuXHRcblx0dmFyIF9sb2Rhc2hBcnJheUZsYXR0ZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcblx0XG5cdHZhciBfbG9kYXNoQXJyYXlGbGF0dGVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaEFycmF5RmxhdHRlbik7XG5cdFxuXHR2YXIgX2xvZGFzaEFycmF5SW50ZXJzZWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaEFycmF5SW50ZXJzZWN0aW9uKTtcblx0XG5cdC8qIG5lZWRzIHN1YnNjcmlwdGlvbiBzZXRzIHRvIGJlIGRlZmluZWQgc29tZXdoZXJlICovXG5cdC8qIGFuIGV2ZW50IHdpdGggYSBzdWJzY3JpcHRpb24gc2V0IHdpbGwgb25seSBmaXJlIG9uY2UgKi9cblx0LyogZm9yIGFsbCBvZiB0aGUgY2hhbmdlcyBpbiB0aGUgc2V0LiAqL1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKF9yZWYpIHtcblx0ICB2YXIgZ2V0SGFzaFBhcmFtcyA9IF9yZWYuZ2V0SGFzaFBhcmFtcztcblx0ICB2YXIgc3Vic2NyaXB0aW9uc0J5UHJvcGVydHkgPSBfcmVmLnN1YnNjcmlwdGlvbnNCeVByb3BlcnR5O1xuXHQgIHZhciBzdWJzY3JpcHRpb25zQnlVVUlEID0gX3JlZi5zdWJzY3JpcHRpb25zQnlVVUlEO1xuXHQgIHZhciBrZXlzV2l0aENoYW5nZWRWYWx1ZXMgPSBfcmVmLmtleXNXaXRoQ2hhbmdlZFZhbHVlcztcblx0ICB2YXIgZXZlbnQgPSBfcmVmLmV2ZW50O1xuXHRcblx0ICAvKiBnZXQgdGhlIG5ldyBwYXJhbXMgb2JqZWN0ICovXG5cdCAgLyogZ2V0IHRoZSBvbGQgcGFyYW1zIG9iamVjdCAqL1xuXHQgIHZhciBvbGRQYXJhbXMgPSBnZXRIYXNoUGFyYW1zKGV2ZW50Lm9sZFVSTCk7XG5cdCAgdmFyIG5ld1BhcmFtcyA9IGdldEhhc2hQYXJhbXMoZXZlbnQubmV3VVJMKTtcblx0XG5cdCAgdmFyIHN1YnNjcmliZWRLZXlzID0gT2JqZWN0LmtleXMoc3Vic2NyaXB0aW9uc0J5UHJvcGVydHkuc3Vic2NyaXB0aW9ucyk7XG5cdFxuXHQgIC8qIGlkZW50aWZ5IHRoZSBrZXlzIHdpdGggY2hhbmdlZCB2YWx1ZXMgKi9cblx0ICB2YXIga2V5c1dpdGhDaGFuZ2VzID0ga2V5c1dpdGhDaGFuZ2VkVmFsdWVzKG9sZFBhcmFtcywgbmV3UGFyYW1zKTtcblx0XG5cdCAgdmFyIGtleXNXaXRoU3Vic2NyaWJlZEV2ZW50cyA9ICgwLCBfbG9kYXNoQXJyYXlJbnRlcnNlY3Rpb24yWydkZWZhdWx0J10pKGtleXNXaXRoQ2hhbmdlcywgc3Vic2NyaWJlZEtleXMpO1xuXHRcblx0ICAvLyBrZXlzV2l0aFN1YnNjcmliZWRFdmVudHMuXG5cdCAgLyogbG9vcCB0aHJvdWdoIGFsbCBvZiB0aGUgc3Vic2NyaWJlZEV2ZW50IG5hbWVzIGxvb2tpbmcgKi9cblx0ICAvKiBmb3IgZGlmZmVyZW5jZXMgYmV0d2VlbiBuZXdQYXJhbXMgYW5kIG9sZFBhcmFtcyAqL1xuXHQgIHZhciBzdWJzY3JpcHRpb25VVUlEcyA9IGtleXNXaXRoU3Vic2NyaWJlZEV2ZW50cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHQgICAgcmV0dXJuIE9iamVjdC5rZXlzKHN1YnNjcmlwdGlvbnNCeVByb3BlcnR5LnN1YnNjcmlwdGlvbnNba2V5XSk7XG5cdCAgfSk7XG5cdFxuXHQgIHN1YnNjcmlwdGlvblVVSURzID0gKDAsIF9sb2Rhc2hBcnJheUludGVyc2VjdGlvbjNbJ2RlZmF1bHQnXSkoKDAsIF9sb2Rhc2hBcnJheUZsYXR0ZW4yWydkZWZhdWx0J10pKHN1YnNjcmlwdGlvblVVSURzKSk7XG5cdFxuXHQgIC8qIHRyaWdnZXIgZXZlbnRzIGZvciBlYWNoIG9mIHRoZSBldmVudHMgZm91bmQgKi9cblx0XG5cdCAgdmFyIHN1YnNjcmlwdGlvbnMgPSBzdWJzY3JpcHRpb25VVUlEcy5tYXAoZnVuY3Rpb24gKHN1YnNjcmlwdGlvblVVSUQpIHtcblx0ICAgIHJldHVybiBzdWJzY3JpcHRpb25zQnlVVUlEW3N1YnNjcmlwdGlvblVVSURdO1xuXHQgIH0pO1xuXHRcblx0ICBzdWJzY3JpcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuXHQgICAgc3Vic2NyaXB0aW9uLmNhbGxiYWNrKG5ld1BhcmFtcyk7XG5cdCAgfSk7XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBiYXNlSW5kZXhPZiA9IF9fd2VicGFja19yZXF1aXJlX18oNCksXG5cdCAgICBjYWNoZUluZGV4T2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpLFxuXHQgICAgY3JlYXRlQ2FjaGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLFxuXHQgICAgaXNBcnJheUxpa2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KSxcblx0ICAgIHJlc3RQYXJhbSA9IF9fd2VicGFja19yZXF1aXJlX18oMTkpO1xuXHRcblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdW5pcXVlIHZhbHVlcyB0aGF0IGFyZSBpbmNsdWRlZCBpbiBhbGwgb2YgdGhlIHByb3ZpZGVkXG5cdCAqIGFycmF5cyB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuXHQgKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQG1lbWJlck9mIF9cblx0ICogQGNhdGVnb3J5IEFycmF5XG5cdCAqIEBwYXJhbSB7Li4uQXJyYXl9IFthcnJheXNdIFRoZSBhcnJheXMgdG8gaW5zcGVjdC5cblx0ICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2Ygc2hhcmVkIHZhbHVlcy5cblx0ICogQGV4YW1wbGVcblx0ICogXy5pbnRlcnNlY3Rpb24oWzEsIDJdLCBbNCwgMl0sIFsyLCAxXSk7XG5cdCAqIC8vID0+IFsyXVxuXHQgKi9cblx0dmFyIGludGVyc2VjdGlvbiA9IHJlc3RQYXJhbShmdW5jdGlvbihhcnJheXMpIHtcblx0ICB2YXIgb3RoTGVuZ3RoID0gYXJyYXlzLmxlbmd0aCxcblx0ICAgICAgb3RoSW5kZXggPSBvdGhMZW5ndGgsXG5cdCAgICAgIGNhY2hlcyA9IEFycmF5KGxlbmd0aCksXG5cdCAgICAgIGluZGV4T2YgPSBiYXNlSW5kZXhPZixcblx0ICAgICAgaXNDb21tb24gPSB0cnVlLFxuXHQgICAgICByZXN1bHQgPSBbXTtcblx0XG5cdCAgd2hpbGUgKG90aEluZGV4LS0pIHtcblx0ICAgIHZhciB2YWx1ZSA9IGFycmF5c1tvdGhJbmRleF0gPSBpc0FycmF5TGlrZSh2YWx1ZSA9IGFycmF5c1tvdGhJbmRleF0pID8gdmFsdWUgOiBbXTtcblx0ICAgIGNhY2hlc1tvdGhJbmRleF0gPSAoaXNDb21tb24gJiYgdmFsdWUubGVuZ3RoID49IDEyMCkgPyBjcmVhdGVDYWNoZShvdGhJbmRleCAmJiB2YWx1ZSkgOiBudWxsO1xuXHQgIH1cblx0ICB2YXIgYXJyYXkgPSBhcnJheXNbMF0sXG5cdCAgICAgIGluZGV4ID0gLTEsXG5cdCAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMCxcblx0ICAgICAgc2VlbiA9IGNhY2hlc1swXTtcblx0XG5cdCAgb3V0ZXI6XG5cdCAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0ICAgIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuXHQgICAgaWYgKChzZWVuID8gY2FjaGVJbmRleE9mKHNlZW4sIHZhbHVlKSA6IGluZGV4T2YocmVzdWx0LCB2YWx1ZSwgMCkpIDwgMCkge1xuXHQgICAgICB2YXIgb3RoSW5kZXggPSBvdGhMZW5ndGg7XG5cdCAgICAgIHdoaWxlICgtLW90aEluZGV4KSB7XG5cdCAgICAgICAgdmFyIGNhY2hlID0gY2FjaGVzW290aEluZGV4XTtcblx0ICAgICAgICBpZiAoKGNhY2hlID8gY2FjaGVJbmRleE9mKGNhY2hlLCB2YWx1ZSkgOiBpbmRleE9mKGFycmF5c1tvdGhJbmRleF0sIHZhbHVlLCAwKSkgPCAwKSB7XG5cdCAgICAgICAgICBjb250aW51ZSBvdXRlcjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHNlZW4pIHtcblx0ICAgICAgICBzZWVuLnB1c2godmFsdWUpO1xuXHQgICAgICB9XG5cdCAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fSk7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGludGVyc2VjdGlvbjtcblxuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGluZGV4T2ZOYU4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYmluYXJ5IHNlYXJjaGVzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuXHQgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cblx0ICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG5cdCAgaWYgKHZhbHVlICE9PSB2YWx1ZSkge1xuXHQgICAgcmV0dXJuIGluZGV4T2ZOYU4oYXJyYXksIGZyb21JbmRleCk7XG5cdCAgfVxuXHQgIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG5cdCAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XG5cdCAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0ICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG5cdCAgICAgIHJldHVybiBpbmRleDtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIC0xO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuXG5cbi8qKiovIH0sXG4vKiA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGZpcnN0IG9jY3VycmVuY2Ugb2YgYE5hTmAgaXMgZm91bmQgaW4gYGFycmF5YC5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCBgTmFOYCwgZWxzZSBgLTFgLlxuXHQgKi9cblx0ZnVuY3Rpb24gaW5kZXhPZk5hTihhcnJheSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcblx0ICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuXHQgICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAwIDogLTEpO1xuXHRcblx0ICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuXHQgICAgdmFyIG90aGVyID0gYXJyYXlbaW5kZXhdO1xuXHQgICAgaWYgKG90aGVyICE9PSBvdGhlcikge1xuXHQgICAgICByZXR1cm4gaW5kZXg7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHJldHVybiAtMTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBpbmRleE9mTmFOO1xuXG5cbi8qKiovIH0sXG4vKiA2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRcblx0LyoqXG5cdCAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIGBjYWNoZWAgbWltaWNraW5nIHRoZSByZXR1cm4gc2lnbmF0dXJlIG9mXG5cdCAqIGBfLmluZGV4T2ZgIGJ5IHJldHVybmluZyBgMGAgaWYgdGhlIHZhbHVlIGlzIGZvdW5kLCBlbHNlIGAtMWAuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gc2VhcmNoLlxuXHQgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGAwYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGAtMWAuXG5cdCAqL1xuXHRmdW5jdGlvbiBjYWNoZUluZGV4T2YoY2FjaGUsIHZhbHVlKSB7XG5cdCAgdmFyIGRhdGEgPSBjYWNoZS5kYXRhLFxuXHQgICAgICByZXN1bHQgPSAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzT2JqZWN0KHZhbHVlKSkgPyBkYXRhLnNldC5oYXModmFsdWUpIDogZGF0YS5oYXNoW3ZhbHVlXTtcblx0XG5cdCAgcmV0dXJuIHJlc3VsdCA/IDAgOiAtMTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBjYWNoZUluZGV4T2Y7XG5cblxuLyoqKi8gfSxcbi8qIDcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuXHQgKiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcblx0ICpcblx0ICogQHN0YXRpY1xuXHQgKiBAbWVtYmVyT2YgX1xuXHQgKiBAY2F0ZWdvcnkgTGFuZ1xuXHQgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG5cdCAqIEBleGFtcGxlXG5cdCAqXG5cdCAqIF8uaXNPYmplY3Qoe30pO1xuXHQgKiAvLyA9PiB0cnVlXG5cdCAqXG5cdCAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcblx0ICogLy8gPT4gdHJ1ZVxuXHQgKlxuXHQgKiBfLmlzT2JqZWN0KDEpO1xuXHQgKiAvLyA9PiBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcblx0ICAvLyBBdm9pZCBhIFY4IEpJVCBidWcgaW4gQ2hyb21lIDE5LTIwLlxuXHQgIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuXHQgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXHQgIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuLyoqKi8gfSxcbi8qIDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHt2YXIgU2V0Q2FjaGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLFxuXHQgICAgZ2V0TmF0aXZlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cdFxuXHQvKiogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xuXHR2YXIgU2V0ID0gZ2V0TmF0aXZlKGdsb2JhbCwgJ1NldCcpO1xuXHRcblx0LyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cblx0dmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblx0XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgYFNldGAgY2FjaGUgb2JqZWN0IHRvIG9wdGltaXplIGxpbmVhciBzZWFyY2hlcyBvZiBsYXJnZSBhcnJheXMuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG5cdCAqIEByZXR1cm5zIHtudWxsfE9iamVjdH0gUmV0dXJucyB0aGUgbmV3IGNhY2hlIG9iamVjdCBpZiBgU2V0YCBpcyBzdXBwb3J0ZWQsIGVsc2UgYG51bGxgLlxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlQ2FjaGUodmFsdWVzKSB7XG5cdCAgcmV0dXJuIChuYXRpdmVDcmVhdGUgJiYgU2V0KSA/IG5ldyBTZXRDYWNoZSh2YWx1ZXMpIDogbnVsbDtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDYWNoZTtcblx0XG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuLyoqKi8gfSxcbi8qIDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHt2YXIgY2FjaGVQdXNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCksXG5cdCAgICBnZXROYXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcblx0XG5cdC8qKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG5cdHZhciBTZXQgPSBnZXROYXRpdmUoZ2xvYmFsLCAnU2V0Jyk7XG5cdFxuXHQvKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xuXHR2YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXHRcblx0LyoqXG5cdCAqXG5cdCAqIENyZWF0ZXMgYSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cblx0ICovXG5cdGZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuXHQgIHZhciBsZW5ndGggPSB2YWx1ZXMgPyB2YWx1ZXMubGVuZ3RoIDogMDtcblx0XG5cdCAgdGhpcy5kYXRhID0geyAnaGFzaCc6IG5hdGl2ZUNyZWF0ZShudWxsKSwgJ3NldCc6IG5ldyBTZXQgfTtcblx0ICB3aGlsZSAobGVuZ3RoLS0pIHtcblx0ICAgIHRoaXMucHVzaCh2YWx1ZXNbbGVuZ3RoXSk7XG5cdCAgfVxuXHR9XG5cdFxuXHQvLyBBZGQgZnVuY3Rpb25zIHRvIHRoZSBgU2V0YCBjYWNoZS5cblx0U2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBjYWNoZVB1c2g7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXHRcblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKVxuXG4vKioqLyB9LFxuLyogMTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdFxuXHQvKipcblx0ICogQWRkcyBgdmFsdWVgIHRvIHRoZSBjYWNoZS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQG5hbWUgcHVzaFxuXHQgKiBAbWVtYmVyT2YgU2V0Q2FjaGVcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG5cdCAqL1xuXHRmdW5jdGlvbiBjYWNoZVB1c2godmFsdWUpIHtcblx0ICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcblx0ICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzT2JqZWN0KHZhbHVlKSkge1xuXHQgICAgZGF0YS5zZXQuYWRkKHZhbHVlKTtcblx0ICB9IGVsc2Uge1xuXHQgICAgZGF0YS5oYXNoW3ZhbHVlXSA9IHRydWU7XG5cdCAgfVxuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGNhY2hlUHVzaDtcblxuXG4vKioqLyB9LFxuLyogMTEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpc05hdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXHRcblx0LyoqXG5cdCAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG5cdCAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cblx0ICovXG5cdGZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuXHQgIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG5cdCAgcmV0dXJuIGlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG4vKioqLyB9LFxuLyogMTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpc0Z1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyksXG5cdCAgICBpc09iamVjdExpa2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblx0XG5cdC8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpID4gNSkuICovXG5cdHZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXHRcblx0LyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cblx0dmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblx0XG5cdC8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cblx0dmFyIGZuVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cdFxuXHQvKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cblx0dmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cdFxuXHQvKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xuXHR2YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuXHQgIGZuVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csICdcXFxcJCYnKVxuXHQgIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuXHQpO1xuXHRcblx0LyoqXG5cdCAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBtZW1iZXJPZiBfXG5cdCAqIEBjYXRlZ29yeSBMYW5nXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuXHQgKiBAZXhhbXBsZVxuXHQgKlxuXHQgKiBfLmlzTmF0aXZlKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcblx0ICogLy8gPT4gdHJ1ZVxuXHQgKlxuXHQgKiBfLmlzTmF0aXZlKF8pO1xuXHQgKiAvLyA9PiBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcblx0ICBpZiAodmFsdWUgPT0gbnVsbCkge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0ICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcblx0ICAgIHJldHVybiByZUlzTmF0aXZlLnRlc3QoZm5Ub1N0cmluZy5jYWxsKHZhbHVlKSk7XG5cdCAgfVxuXHQgIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIHJlSXNIb3N0Q3Rvci50ZXN0KHZhbHVlKTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBpc05hdGl2ZTtcblxuXG4vKioqLyB9LFxuLyogMTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cdFxuXHQvKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG5cdHZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblx0XG5cdC8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG5cdHZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cdFxuXHQvKipcblx0ICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcblx0ICogb2YgdmFsdWVzLlxuXHQgKi9cblx0dmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cdFxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBtZW1iZXJPZiBfXG5cdCAqIEBjYXRlZ29yeSBMYW5nXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuXHQgKiBAZXhhbXBsZVxuXHQgKlxuXHQgKiBfLmlzRnVuY3Rpb24oXyk7XG5cdCAqIC8vID0+IHRydWVcblx0ICpcblx0ICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcblx0ICogLy8gPT4gZmFsc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcblx0ICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3Jcblx0ICAvLyBpbiBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaSB3aGljaCByZXR1cm4gJ2Z1bmN0aW9uJyBmb3IgcmVnZXhlc1xuXHQgIC8vIGFuZCBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBjb25zdHJ1Y3RvcnMuXG5cdCAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBmdW5jVGFnO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuLyoqKi8gfSxcbi8qIDE0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG5cdCAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG4vKioqLyB9LFxuLyogMTUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBnZXRMZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KSxcblx0ICAgIGlzTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cdFxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cblx0ICovXG5cdGZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG5cdCAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuLyoqKi8gfSxcbi8qIDE2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgYmFzZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cdFxuXHQvKipcblx0ICogR2V0cyB0aGUgXCJsZW5ndGhcIiBwcm9wZXJ0eSB2YWx1ZSBvZiBgb2JqZWN0YC5cblx0ICpcblx0ICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuXHQgKiB0aGF0IGFmZmVjdHMgU2FmYXJpIG9uIGF0IGxlYXN0IGlPUyA4LjEtOC4zIEFSTTY0LlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG5cdCAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuXHQgKi9cblx0dmFyIGdldExlbmd0aCA9IGJhc2VQcm9wZXJ0eSgnbGVuZ3RoJyk7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGdldExlbmd0aDtcblxuXG4vKioqLyB9LFxuLyogMTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuXHQgICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG5cdCAgfTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuLyoqKi8gfSxcbi8qIDE4ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcblx0ICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cblx0ICovXG5cdHZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblx0XG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuXHQgKlxuXHQgKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBpcyBiYXNlZCBvbiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtdG9sZW5ndGgpLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cblx0ICovXG5cdGZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG5cdCAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuLyoqKi8gfSxcbi8qIDE5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xuXHR2YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXHRcblx0LyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cblx0dmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXHRcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZVxuXHQgKiBjcmVhdGVkIGZ1bmN0aW9uIGFuZCBhcmd1bWVudHMgZnJvbSBgc3RhcnRgIGFuZCBiZXlvbmQgcHJvdmlkZWQgYXMgYW4gYXJyYXkuXG5cdCAqXG5cdCAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBiYXNlZCBvbiB0aGUgW3Jlc3QgcGFyYW1ldGVyXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvRnVuY3Rpb25zL3Jlc3RfcGFyYW1ldGVycykuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQG1lbWJlck9mIF9cblx0ICogQGNhdGVnb3J5IEZ1bmN0aW9uXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cblx0ICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG5cdCAqIEBleGFtcGxlXG5cdCAqXG5cdCAqIHZhciBzYXkgPSBfLnJlc3RQYXJhbShmdW5jdGlvbih3aGF0LCBuYW1lcykge1xuXHQgKiAgIHJldHVybiB3aGF0ICsgJyAnICsgXy5pbml0aWFsKG5hbWVzKS5qb2luKCcsICcpICtcblx0ICogICAgIChfLnNpemUobmFtZXMpID4gMSA/ICcsICYgJyA6ICcnKSArIF8ubGFzdChuYW1lcyk7XG5cdCAqIH0pO1xuXHQgKlxuXHQgKiBzYXkoJ2hlbGxvJywgJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnKTtcblx0ICogLy8gPT4gJ2hlbGxvIGZyZWQsIGJhcm5leSwgJiBwZWJibGVzJ1xuXHQgKi9cblx0ZnVuY3Rpb24gcmVzdFBhcmFtKGZ1bmMsIHN0YXJ0KSB7XG5cdCAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcblx0ICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcblx0ICB9XG5cdCAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogKCtzdGFydCB8fCAwKSwgMCk7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG5cdCAgICAgICAgaW5kZXggPSAtMSxcblx0ICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG5cdCAgICAgICAgcmVzdCA9IEFycmF5KGxlbmd0aCk7XG5cdFxuXHQgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0ICAgICAgcmVzdFtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuXHQgICAgfVxuXHQgICAgc3dpdGNoIChzdGFydCkge1xuXHQgICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgcmVzdCk7XG5cdCAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzLCBhcmdzWzBdLCByZXN0KTtcblx0ICAgICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXMsIGFyZ3NbMF0sIGFyZ3NbMV0sIHJlc3QpO1xuXHQgICAgfVxuXHQgICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG5cdCAgICBpbmRleCA9IC0xO1xuXHQgICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuXHQgICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG5cdCAgICB9XG5cdCAgICBvdGhlckFyZ3Nbc3RhcnRdID0gcmVzdDtcblx0ICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIG90aGVyQXJncyk7XG5cdCAgfTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSByZXN0UGFyYW07XG5cblxuLyoqKi8gfSxcbi8qIDIwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgYmFzZUZsYXR0ZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKSxcblx0ICAgIGlzSXRlcmF0ZWVDYWxsID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG5cdFxuXHQvKipcblx0ICogRmxhdHRlbnMgYSBuZXN0ZWQgYXJyYXkuIElmIGBpc0RlZXBgIGlzIGB0cnVlYCB0aGUgYXJyYXkgaXMgcmVjdXJzaXZlbHlcblx0ICogZmxhdHRlbmVkLCBvdGhlcndpc2UgaXQncyBvbmx5IGZsYXR0ZW5lZCBhIHNpbmdsZSBsZXZlbC5cblx0ICpcblx0ICogQHN0YXRpY1xuXHQgKiBAbWVtYmVyT2YgX1xuXHQgKiBAY2F0ZWdvcnkgQXJyYXlcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgZmxhdHRlbi5cblx0ICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGEgY2FsbGJhY2sgZm9yIGZ1bmN0aW9ucyBsaWtlIGBfLm1hcGAuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZsYXR0ZW5lZCBhcnJheS5cblx0ICogQGV4YW1wbGVcblx0ICpcblx0ICogXy5mbGF0dGVuKFsxLCBbMiwgMywgWzRdXV0pO1xuXHQgKiAvLyA9PiBbMSwgMiwgMywgWzRdXVxuXHQgKlxuXHQgKiAvLyB1c2luZyBgaXNEZWVwYFxuXHQgKiBfLmZsYXR0ZW4oWzEsIFsyLCAzLCBbNF1dXSwgdHJ1ZSk7XG5cdCAqIC8vID0+IFsxLCAyLCAzLCA0XVxuXHQgKi9cblx0ZnVuY3Rpb24gZmxhdHRlbihhcnJheSwgaXNEZWVwLCBndWFyZCkge1xuXHQgIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cdCAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKGFycmF5LCBpc0RlZXAsIGd1YXJkKSkge1xuXHQgICAgaXNEZWVwID0gZmFsc2U7XG5cdCAgfVxuXHQgIHJldHVybiBsZW5ndGggPyBiYXNlRmxhdHRlbihhcnJheSwgaXNEZWVwKSA6IFtdO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGZsYXR0ZW47XG5cblxuLyoqKi8gfSxcbi8qIDIxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgYXJyYXlQdXNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMiksXG5cdCAgICBpc0FyZ3VtZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpLFxuXHQgICAgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpLFxuXHQgICAgaXNBcnJheUxpa2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KSxcblx0ICAgIGlzT2JqZWN0TGlrZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggYWRkZWQgc3VwcG9ydCBmb3IgcmVzdHJpY3Rpbmdcblx0ICogZmxhdHRlbmluZyBhbmQgc3BlY2lmeWluZyB0aGUgc3RhcnQgaW5kZXguXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmbGF0dGVuLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGZsYXR0ZW4uXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU3RyaWN0XSBSZXN0cmljdCBmbGF0dGVuaW5nIHRvIGFycmF5cy1saWtlIG9iamVjdHMuXG5cdCAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHQ9W11dIFRoZSBpbml0aWFsIHJlc3VsdCB2YWx1ZS5cblx0ICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuXHQgKi9cblx0ZnVuY3Rpb24gYmFzZUZsYXR0ZW4oYXJyYXksIGlzRGVlcCwgaXNTdHJpY3QsIHJlc3VsdCkge1xuXHQgIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXHRcblx0ICB2YXIgaW5kZXggPSAtMSxcblx0ICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXHRcblx0ICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHQgICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuXHQgICAgaWYgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpICYmXG5cdCAgICAgICAgKGlzU3RyaWN0IHx8IGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSkpIHtcblx0ICAgICAgaWYgKGlzRGVlcCkge1xuXHQgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG5cdCAgICAgICAgYmFzZUZsYXR0ZW4odmFsdWUsIGlzRGVlcCwgaXNTdHJpY3QsIHJlc3VsdCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuXHQgICAgICB9XG5cdCAgICB9IGVsc2UgaWYgKCFpc1N0cmljdCkge1xuXHQgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcblxuXG4vKioqLyB9LFxuLyogMjIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuXHQgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuXHQgKi9cblx0ZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcblx0ICB2YXIgaW5kZXggPSAtMSxcblx0ICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcblx0ICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXHRcblx0ICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHQgICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcblx0ICB9XG5cdCAgcmV0dXJuIGFycmF5O1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG4vKioqLyB9LFxuLyogMjMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpc0FycmF5TGlrZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpLFxuXHQgICAgaXNPYmplY3RMaWtlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cdFxuXHQvKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xuXHR2YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXHRcblx0LyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG5cdHZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXHRcblx0LyoqIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cblx0dmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdFxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQG1lbWJlck9mIF9cblx0ICogQGNhdGVnb3J5IExhbmdcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG5cdCAqIEBleGFtcGxlXG5cdCAqXG5cdCAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG5cdCAqIC8vID0+IHRydWVcblx0ICpcblx0ICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuXHQgKiAvLyA9PiBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0ICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSkgJiZcblx0ICAgIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJiAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cbi8qKiovIH0sXG4vKiAyNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdldE5hdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpLFxuXHQgICAgaXNMZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KSxcblx0ICAgIGlzT2JqZWN0TGlrZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXHRcblx0LyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xuXHR2YXIgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nO1xuXHRcblx0LyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cblx0dmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblx0XG5cdC8qKlxuXHQgKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuXHQgKiBvZiB2YWx1ZXMuXG5cdCAqL1xuXHR2YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblx0XG5cdC8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG5cdHZhciBuYXRpdmVJc0FycmF5ID0gZ2V0TmF0aXZlKEFycmF5LCAnaXNBcnJheScpO1xuXHRcblx0LyoqXG5cdCAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQG1lbWJlck9mIF9cblx0ICogQGNhdGVnb3J5IExhbmdcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG5cdCAqIEBleGFtcGxlXG5cdCAqXG5cdCAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuXHQgKiAvLyA9PiB0cnVlXG5cdCAqXG5cdCAqIF8uaXNBcnJheShmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcblx0ICogLy8gPT4gZmFsc2Vcblx0ICovXG5cdHZhciBpc0FycmF5ID0gbmF0aXZlSXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuXHQgIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJyYXlUYWc7XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuLyoqKi8gfSxcbi8qIDI1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgaXNBcnJheUxpa2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KSxcblx0ICAgIGlzSW5kZXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KSxcblx0ICAgIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0XG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG5cdCAqIEBwYXJhbSB7Kn0gaW5kZXggVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBpbmRleCBvciBrZXkgYXJndW1lbnQuXG5cdCAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLCBlbHNlIGBmYWxzZWAuXG5cdCAqL1xuXHRmdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuXHQgIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0ICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcblx0ICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuXHQgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuXHQgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdCkpIHtcblx0ICAgIHZhciBvdGhlciA9IG9iamVjdFtpbmRleF07XG5cdCAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gKHZhbHVlID09PSBvdGhlcikgOiAob3RoZXIgIT09IG90aGVyKTtcblx0ICB9XG5cdCAgcmV0dXJuIGZhbHNlO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGlzSXRlcmF0ZWVDYWxsO1xuXG5cbi8qKiovIH0sXG4vKiAyNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xuXHR2YXIgcmVJc1VpbnQgPSAvXlxcZCskLztcblx0XG5cdC8qKlxuXHQgKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuXHQgKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuXHQgKi9cblx0dmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXHRcblx0LyoqXG5cdCAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG5cdCAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSA/ICt2YWx1ZSA6IC0xO1xuXHQgIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblx0ICByZXR1cm4gdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aDtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cbi8qKiovIH0sXG4vKiAyNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXHRcblx0dmFyIF9sb2Rhc2hBcnJheVVuaXF1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xuXHRcblx0dmFyIF9sb2Rhc2hBcnJheVVuaXF1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hBcnJheVVuaXF1ZSk7XG5cdFxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAob2xkUGFyYW1zLCBuZXdQYXJhbXMpIHtcblx0ICB2YXIgb2xkS2V5cyA9IE9iamVjdC5rZXlzKG9sZFBhcmFtcyk7XG5cdCAgdmFyIG5ld0tleXMgPSBPYmplY3Qua2V5cyhuZXdQYXJhbXMpO1xuXHRcblx0ICB2YXIgYWxsS2V5cyA9ICgwLCBfbG9kYXNoQXJyYXlVbmlxdWUyWydkZWZhdWx0J10pKG9sZEtleXMuY29uY2F0KG5ld0tleXMpKTtcblx0XG5cdCAgcmV0dXJuIGFsbEtleXMuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgIHZhciBvbGRWYWx1ZSA9IG9sZFBhcmFtc1trZXldO1xuXHQgICAgdmFyIG5ld1ZhbHVlID0gbmV3UGFyYW1zW2tleV07XG5cdFxuXHQgICAgLyogaGFuZGxlIE5hTiAqL1xuXHQgICAgaWYgKG9sZFZhbHVlICE9PSBvbGRWYWx1ZSAmJiBuZXdWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcblx0ICAgICAgLyogYm90aCBvbGRWYWx1ZSBhbmQgbmV3VmFsdWUgZXF1YWwgTmFOICovXG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0XG5cdCAgICByZXR1cm4gb2xkVmFsdWUgIT09IG5ld1ZhbHVlO1xuXHQgIH0pO1xuXHR9O1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAyOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcblxuXG4vKioqLyB9LFxuLyogMjkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBiYXNlQ2FsbGJhY2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKSxcblx0ICAgIGJhc2VVbmlxID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1OCksXG5cdCAgICBpc0l0ZXJhdGVlQ2FsbCA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpLFxuXHQgICAgc29ydGVkVW5pcSA9IF9fd2VicGFja19yZXF1aXJlX18oNTkpO1xuXHRcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIGFuIGFycmF5LCB1c2luZ1xuXHQgKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuXHQgKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGluIHdoaWNoIG9ubHkgdGhlIGZpcnN0IG9jY3VyZW5jZSBvZiBlYWNoIGVsZW1lbnRcblx0ICogaXMga2VwdC4gUHJvdmlkaW5nIGB0cnVlYCBmb3IgYGlzU29ydGVkYCBwZXJmb3JtcyBhIGZhc3RlciBzZWFyY2ggYWxnb3JpdGhtXG5cdCAqIGZvciBzb3J0ZWQgYXJyYXlzLiBJZiBhbiBpdGVyYXRlZSBmdW5jdGlvbiBpcyBwcm92aWRlZCBpdCdzIGludm9rZWQgZm9yXG5cdCAqIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgdG8gZ2VuZXJhdGUgdGhlIGNyaXRlcmlvbiBieSB3aGljaCB1bmlxdWVuZXNzXG5cdCAqIGlzIGNvbXB1dGVkLiBUaGUgYGl0ZXJhdGVlYCBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kIGludm9rZWQgd2l0aCB0aHJlZVxuXHQgKiBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXgsIGFycmF5KS5cblx0ICpcblx0ICogSWYgYSBwcm9wZXJ0eSBuYW1lIGlzIHByb3ZpZGVkIGZvciBgaXRlcmF0ZWVgIHRoZSBjcmVhdGVkIGBfLnByb3BlcnR5YFxuXHQgKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cblx0ICpcblx0ICogSWYgYSB2YWx1ZSBpcyBhbHNvIHByb3ZpZGVkIGZvciBgdGhpc0FyZ2AgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc1Byb3BlcnR5YFxuXHQgKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIGEgbWF0Y2hpbmcgcHJvcGVydHlcblx0ICogdmFsdWUsIGVsc2UgYGZhbHNlYC5cblx0ICpcblx0ICogSWYgYW4gb2JqZWN0IGlzIHByb3ZpZGVkIGZvciBgaXRlcmF0ZWVgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNgIHN0eWxlXG5cdCAqIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGdpdmVuXG5cdCAqIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBtZW1iZXJPZiBfXG5cdCAqIEBhbGlhcyB1bmlxdWVcblx0ICogQGNhdGVnb3J5IEFycmF5XG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1NvcnRlZF0gU3BlY2lmeSB0aGUgYXJyYXkgaXMgc29ydGVkLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtpdGVyYXRlZV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cblx0ICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBpdGVyYXRlZWAuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZS12YWx1ZS1mcmVlIGFycmF5LlxuXHQgKiBAZXhhbXBsZVxuXHQgKlxuXHQgKiBfLnVuaXEoWzIsIDEsIDJdKTtcblx0ICogLy8gPT4gWzIsIDFdXG5cdCAqXG5cdCAqIC8vIHVzaW5nIGBpc1NvcnRlZGBcblx0ICogXy51bmlxKFsxLCAxLCAyXSwgdHJ1ZSk7XG5cdCAqIC8vID0+IFsxLCAyXVxuXHQgKlxuXHQgKiAvLyB1c2luZyBhbiBpdGVyYXRlZSBmdW5jdGlvblxuXHQgKiBfLnVuaXEoWzEsIDIuNSwgMS41LCAyXSwgZnVuY3Rpb24obikge1xuXHQgKiAgIHJldHVybiB0aGlzLmZsb29yKG4pO1xuXHQgKiB9LCBNYXRoKTtcblx0ICogLy8gPT4gWzEsIDIuNV1cblx0ICpcblx0ICogLy8gdXNpbmcgdGhlIGBfLnByb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcblx0ICogXy51bmlxKFt7ICd4JzogMSB9LCB7ICd4JzogMiB9LCB7ICd4JzogMSB9XSwgJ3gnKTtcblx0ICogLy8gPT4gW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH1dXG5cdCAqL1xuXHRmdW5jdGlvbiB1bmlxKGFycmF5LCBpc1NvcnRlZCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcblx0ICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXHQgIGlmICghbGVuZ3RoKSB7XG5cdCAgICByZXR1cm4gW107XG5cdCAgfVxuXHQgIGlmIChpc1NvcnRlZCAhPSBudWxsICYmIHR5cGVvZiBpc1NvcnRlZCAhPSAnYm9vbGVhbicpIHtcblx0ICAgIHRoaXNBcmcgPSBpdGVyYXRlZTtcblx0ICAgIGl0ZXJhdGVlID0gaXNJdGVyYXRlZUNhbGwoYXJyYXksIGlzU29ydGVkLCB0aGlzQXJnKSA/IHVuZGVmaW5lZCA6IGlzU29ydGVkO1xuXHQgICAgaXNTb3J0ZWQgPSBmYWxzZTtcblx0ICB9XG5cdCAgaXRlcmF0ZWUgPSBpdGVyYXRlZSA9PSBudWxsID8gaXRlcmF0ZWUgOiBiYXNlQ2FsbGJhY2soaXRlcmF0ZWUsIHRoaXNBcmcsIDMpO1xuXHQgIHJldHVybiAoaXNTb3J0ZWQpXG5cdCAgICA/IHNvcnRlZFVuaXEoYXJyYXksIGl0ZXJhdGVlKVxuXHQgICAgOiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUpO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHVuaXE7XG5cblxuLyoqKi8gfSxcbi8qIDMwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgYmFzZU1hdGNoZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKSxcblx0ICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KSxcblx0ICAgIGJpbmRDYWxsYmFjayA9IF9fd2VicGFja19yZXF1aXJlX18oNTQpLFxuXHQgICAgaWRlbnRpdHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU1KSxcblx0ICAgIHByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nik7XG5cdFxuXHQvKipcblx0ICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2FsbGJhY2tgIHdoaWNoIHN1cHBvcnRzIHNwZWNpZnlpbmcgdGhlXG5cdCAqIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7Kn0gW2Z1bmM9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYSBjYWxsYmFjay5cblx0ICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFthcmdDb3VudF0gVGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNlQ2FsbGJhY2soZnVuYywgdGhpc0FyZywgYXJnQ291bnQpIHtcblx0ICB2YXIgdHlwZSA9IHR5cGVvZiBmdW5jO1xuXHQgIGlmICh0eXBlID09ICdmdW5jdGlvbicpIHtcblx0ICAgIHJldHVybiB0aGlzQXJnID09PSB1bmRlZmluZWRcblx0ICAgICAgPyBmdW5jXG5cdCAgICAgIDogYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KTtcblx0ICB9XG5cdCAgaWYgKGZ1bmMgPT0gbnVsbCkge1xuXHQgICAgcmV0dXJuIGlkZW50aXR5O1xuXHQgIH1cblx0ICBpZiAodHlwZSA9PSAnb2JqZWN0Jykge1xuXHQgICAgcmV0dXJuIGJhc2VNYXRjaGVzKGZ1bmMpO1xuXHQgIH1cblx0ICByZXR1cm4gdGhpc0FyZyA9PT0gdW5kZWZpbmVkXG5cdCAgICA/IHByb3BlcnR5KGZ1bmMpXG5cdCAgICA6IGJhc2VNYXRjaGVzUHJvcGVydHkoZnVuYywgdGhpc0FyZyk7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYmFzZUNhbGxiYWNrO1xuXG5cbi8qKiovIH0sXG4vKiAzMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGJhc2VJc01hdGNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMiksXG5cdCAgICBnZXRNYXRjaERhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ0KSxcblx0ICAgIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG5cdFxuXHQvKipcblx0ICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lcyBub3QgY2xvbmUgYHNvdXJjZWAuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG5cdCAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuXHQgIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG5cdCAgICB2YXIga2V5ID0gbWF0Y2hEYXRhWzBdWzBdLFxuXHQgICAgICAgIHZhbHVlID0gbWF0Y2hEYXRhWzBdWzFdO1xuXHRcblx0ICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcblx0ICAgICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG5cdCAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gdmFsdWUgJiYgKHZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiB0b09iamVjdChvYmplY3QpKSk7XG5cdCAgICB9O1xuXHQgIH1cblx0ICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG5cdCAgICByZXR1cm4gYmFzZUlzTWF0Y2gob2JqZWN0LCBtYXRjaERhdGEpO1xuXHQgIH07XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG5cblxuLyoqKi8gfSxcbi8qIDMyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgYmFzZUlzRXF1YWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKSxcblx0ICAgIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG5cdFxuXHQvKipcblx0ICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuXHQgKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG5cdCAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVyeSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIG9iamVjdHMuXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuXHQgIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG5cdCAgICAgIGxlbmd0aCA9IGluZGV4LFxuXHQgICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblx0XG5cdCAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG5cdCAgICByZXR1cm4gIWxlbmd0aDtcblx0ICB9XG5cdCAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcblx0ICB3aGlsZSAoaW5kZXgtLSkge1xuXHQgICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuXHQgICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcblx0ICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG5cdCAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG5cdCAgICAgICAgKSB7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9XG5cdCAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0ICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuXHQgICAgdmFyIGtleSA9IGRhdGFbMF0sXG5cdCAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcblx0ICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cdFxuXHQgICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG5cdCAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSkgOiB1bmRlZmluZWQ7XG5cdCAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBjdXN0b21pemVyLCB0cnVlKSA6IHJlc3VsdCkpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG5cblxuLyoqKi8gfSxcbi8qIDMzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgYmFzZUlzRXF1YWxEZWVwID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNCksXG5cdCAgICBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNyksXG5cdCAgICBpc09iamVjdExpa2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblx0XG5cdC8qKlxuXHQgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aXRob3V0IHN1cHBvcnQgZm9yIGB0aGlzYCBiaW5kaW5nXG5cdCAqIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG5cdCAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyB2YWx1ZXMuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzTG9vc2VdIFNwZWNpZnkgcGVyZm9ybWluZyBwYXJ0aWFsIGNvbXBhcmlzb25zLlxuXHQgKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cblx0ICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQl0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG5cdCAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuXHQgICAgcmV0dXJuIHRydWU7XG5cdCAgfVxuXHQgIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdCh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG5cdCAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcblx0ICB9XG5cdCAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJhc2VJc0VxdWFsLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG5cblxuLyoqKi8gfSxcbi8qIDM0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgZXF1YWxBcnJheXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KSxcblx0ICAgIGVxdWFsQnlUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KSxcblx0ICAgIGVxdWFsT2JqZWN0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpLFxuXHQgICAgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpLFxuXHQgICAgaXNUeXBlZEFycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG5cdFxuXHQvKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG5cdHZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG5cdCAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG5cdCAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblx0XG5cdC8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG5cdHZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cdFxuXHQvKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cblx0dmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cdFxuXHQvKipcblx0ICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcblx0ICogb2YgdmFsdWVzLlxuXHQgKi9cblx0dmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cdFxuXHQvKipcblx0ICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuXHQgKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG5cdCAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyBvYmplY3RzLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cblx0ICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQT1bXV0gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIG9iamVjdHMuXG5cdCAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0I9W11dIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG5cdCAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuXHQgICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuXHQgICAgICBvYmpUYWcgPSBhcnJheVRhZyxcblx0ICAgICAgb3RoVGFnID0gYXJyYXlUYWc7XG5cdFxuXHQgIGlmICghb2JqSXNBcnIpIHtcblx0ICAgIG9ialRhZyA9IG9ialRvU3RyaW5nLmNhbGwob2JqZWN0KTtcblx0ICAgIGlmIChvYmpUYWcgPT0gYXJnc1RhZykge1xuXHQgICAgICBvYmpUYWcgPSBvYmplY3RUYWc7XG5cdCAgICB9IGVsc2UgaWYgKG9ialRhZyAhPSBvYmplY3RUYWcpIHtcblx0ICAgICAgb2JqSXNBcnIgPSBpc1R5cGVkQXJyYXkob2JqZWN0KTtcblx0ICAgIH1cblx0ICB9XG5cdCAgaWYgKCFvdGhJc0Fycikge1xuXHQgICAgb3RoVGFnID0gb2JqVG9TdHJpbmcuY2FsbChvdGhlcik7XG5cdCAgICBpZiAob3RoVGFnID09IGFyZ3NUYWcpIHtcblx0ICAgICAgb3RoVGFnID0gb2JqZWN0VGFnO1xuXHQgICAgfSBlbHNlIGlmIChvdGhUYWcgIT0gb2JqZWN0VGFnKSB7XG5cdCAgICAgIG90aElzQXJyID0gaXNUeXBlZEFycmF5KG90aGVyKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcblx0ICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuXHQgICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXHRcblx0ICBpZiAoaXNTYW1lVGFnICYmICEob2JqSXNBcnIgfHwgb2JqSXNPYmopKSB7XG5cdCAgICByZXR1cm4gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcpO1xuXHQgIH1cblx0ICBpZiAoIWlzTG9vc2UpIHtcblx0ICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG5cdCAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cdFxuXHQgICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcblx0ICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCwgb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG5cdCAgICB9XG5cdCAgfVxuXHQgIGlmICghaXNTYW1lVGFnKSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXHQgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cblx0ICAvLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBkZXRlY3RpbmcgY2lyY3VsYXIgcmVmZXJlbmNlcyBzZWUgaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyNKTy5cblx0ICBzdGFja0EgfHwgKHN0YWNrQSA9IFtdKTtcblx0ICBzdGFja0IgfHwgKHN0YWNrQiA9IFtdKTtcblx0XG5cdCAgdmFyIGxlbmd0aCA9IHN0YWNrQS5sZW5ndGg7XG5cdCAgd2hpbGUgKGxlbmd0aC0tKSB7XG5cdCAgICBpZiAoc3RhY2tBW2xlbmd0aF0gPT0gb2JqZWN0KSB7XG5cdCAgICAgIHJldHVybiBzdGFja0JbbGVuZ3RoXSA9PSBvdGhlcjtcblx0ICAgIH1cblx0ICB9XG5cdCAgLy8gQWRkIGBvYmplY3RgIGFuZCBgb3RoZXJgIHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cblx0ICBzdGFja0EucHVzaChvYmplY3QpO1xuXHQgIHN0YWNrQi5wdXNoKG90aGVyKTtcblx0XG5cdCAgdmFyIHJlc3VsdCA9IChvYmpJc0FyciA/IGVxdWFsQXJyYXlzIDogZXF1YWxPYmplY3RzKShvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKTtcblx0XG5cdCAgc3RhY2tBLnBvcCgpO1xuXHQgIHN0YWNrQi5wb3AoKTtcblx0XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuLyoqKi8gfSxcbi8qIDM1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgYXJyYXlTb21lID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNik7XG5cdFxuXHQvKipcblx0ICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuXHQgKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuXHQgKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpbmcgYXJyYXlzLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cblx0ICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQV0gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIG9iamVjdHMuXG5cdCAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0JdIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuXHQgKi9cblx0ZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG5cdCAgdmFyIGluZGV4ID0gLTEsXG5cdCAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcblx0ICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXHRcblx0ICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzTG9vc2UgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblx0ICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG5cdCAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcblx0ICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcblx0ICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XSxcblx0ICAgICAgICByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihpc0xvb3NlID8gb3RoVmFsdWUgOiBhcnJWYWx1ZSwgaXNMb29zZSA/IGFyclZhbHVlIDogb3RoVmFsdWUsIGluZGV4KSA6IHVuZGVmaW5lZDtcblx0XG5cdCAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcblx0ICAgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgICAgIGNvbnRpbnVlO1xuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG5cdCAgICBpZiAoaXNMb29zZSkge1xuXHQgICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG5cdCAgICAgICAgICB9KSkge1xuXHQgICAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIGlmICghKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikpKSB7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG5cblxuLyoqKi8gfSxcbi8qIDM2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuXHQgKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcblx0ICogIGVsc2UgYGZhbHNlYC5cblx0ICovXG5cdGZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG5cdCAgdmFyIGluZGV4ID0gLTEsXG5cdCAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XG5cdCAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0ICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG5cdCAgICAgIHJldHVybiB0cnVlO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gZmFsc2U7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuXG5cbi8qKiovIH0sXG4vKiAzNyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xuXHR2YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcblx0ICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG5cdCAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG5cdCAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcblx0ICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuXHQgICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cdFxuXHQvKipcblx0ICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuXHQgKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuXHQgKlxuXHQgKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG5cdCAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cblx0ICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cblx0ICovXG5cdGZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnKSB7XG5cdCAgc3dpdGNoICh0YWcpIHtcblx0ICAgIGNhc2UgYm9vbFRhZzpcblx0ICAgIGNhc2UgZGF0ZVRhZzpcblx0ICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1iZXJzLCBkYXRlcyB0byBtaWxsaXNlY29uZHMgYW5kIGJvb2xlYW5zXG5cdCAgICAgIC8vIHRvIGAxYCBvciBgMGAgdHJlYXRpbmcgaW52YWxpZCBkYXRlcyBjb2VyY2VkIHRvIGBOYU5gIGFzIG5vdCBlcXVhbC5cblx0ICAgICAgcmV0dXJuICtvYmplY3QgPT0gK290aGVyO1xuXHRcblx0ICAgIGNhc2UgZXJyb3JUYWc6XG5cdCAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cdFxuXHQgICAgY2FzZSBudW1iZXJUYWc6XG5cdCAgICAgIC8vIFRyZWF0IGBOYU5gIHZzLiBgTmFOYCBhcyBlcXVhbC5cblx0ICAgICAgcmV0dXJuIChvYmplY3QgIT0gK29iamVjdClcblx0ICAgICAgICA/IG90aGVyICE9ICtvdGhlclxuXHQgICAgICAgIDogb2JqZWN0ID09ICtvdGhlcjtcblx0XG5cdCAgICBjYXNlIHJlZ2V4cFRhZzpcblx0ICAgIGNhc2Ugc3RyaW5nVGFnOlxuXHQgICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzIHByaW1pdGl2ZXMgYW5kIHN0cmluZ1xuXHQgICAgICAvLyBvYmplY3RzIGFzIGVxdWFsLiBTZWUgaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4MTUuMTAuNi40IGZvciBtb3JlIGRldGFpbHMuXG5cdCAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXHQgIH1cblx0ICByZXR1cm4gZmFsc2U7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcblxuXG4vKioqLyB9LFxuLyogMzggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBrZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG5cdFxuXHQvKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xuXHR2YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXHRcblx0LyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG5cdHZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXHRcblx0LyoqXG5cdCAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG5cdCAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIHZhbHVlcy5cblx0ICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG5cdCAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0FdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuXHQgKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tCXSBUcmFja3MgdHJhdmVyc2VkIGBvdGhlcmAgb2JqZWN0cy5cblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG5cdCAqL1xuXHRmdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikge1xuXHQgIHZhciBvYmpQcm9wcyA9IGtleXMob2JqZWN0KSxcblx0ICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuXHQgICAgICBvdGhQcm9wcyA9IGtleXMob3RoZXIpLFxuXHQgICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cdFxuXHQgIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc0xvb3NlKSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXHQgIHZhciBpbmRleCA9IG9iakxlbmd0aDtcblx0ICB3aGlsZSAoaW5kZXgtLSkge1xuXHQgICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcblx0ICAgIGlmICghKGlzTG9vc2UgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHZhciBza2lwQ3RvciA9IGlzTG9vc2U7XG5cdCAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcblx0ICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcblx0ICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuXHQgICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XSxcblx0ICAgICAgICByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihpc0xvb3NlID8gb3RoVmFsdWUgOiBvYmpWYWx1ZSwgaXNMb29zZT8gb2JqVmFsdWUgOiBvdGhWYWx1ZSwga2V5KSA6IHVuZGVmaW5lZDtcblx0XG5cdCAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cblx0ICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIDogcmVzdWx0KSkge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG5cdCAgfVxuXHQgIGlmICghc2tpcEN0b3IpIHtcblx0ICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuXHQgICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3Rvcjtcblx0XG5cdCAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cblx0ICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcblx0ICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcblx0ICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcblx0ICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIHRydWU7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cbi8qKiovIH0sXG4vKiAzOSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGdldE5hdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpLFxuXHQgICAgaXNBcnJheUxpa2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KSxcblx0ICAgIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KSxcblx0ICAgIHNoaW1LZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MCk7XG5cdFxuXHQvKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xuXHR2YXIgbmF0aXZlS2V5cyA9IGdldE5hdGl2ZShPYmplY3QsICdrZXlzJyk7XG5cdFxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG5cdCAqXG5cdCAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG5cdCAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3Qua2V5cylcblx0ICogZm9yIG1vcmUgZGV0YWlscy5cblx0ICpcblx0ICogQHN0YXRpY1xuXHQgKiBAbWVtYmVyT2YgX1xuXHQgKiBAY2F0ZWdvcnkgT2JqZWN0XG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cblx0ICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cblx0ICogQGV4YW1wbGVcblx0ICpcblx0ICogZnVuY3Rpb24gRm9vKCkge1xuXHQgKiAgIHRoaXMuYSA9IDE7XG5cdCAqICAgdGhpcy5iID0gMjtcblx0ICogfVxuXHQgKlxuXHQgKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuXHQgKlxuXHQgKiBfLmtleXMobmV3IEZvbyk7XG5cdCAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcblx0ICpcblx0ICogXy5rZXlzKCdoaScpO1xuXHQgKiAvLyA9PiBbJzAnLCAnMSddXG5cdCAqL1xuXHR2YXIga2V5cyA9ICFuYXRpdmVLZXlzID8gc2hpbUtleXMgOiBmdW5jdGlvbihvYmplY3QpIHtcblx0ICB2YXIgQ3RvciA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0LmNvbnN0cnVjdG9yO1xuXHQgIGlmICgodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0KSB8fFxuXHQgICAgICAodHlwZW9mIG9iamVjdCAhPSAnZnVuY3Rpb24nICYmIGlzQXJyYXlMaWtlKG9iamVjdCkpKSB7XG5cdCAgICByZXR1cm4gc2hpbUtleXMob2JqZWN0KTtcblx0ICB9XG5cdCAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBuYXRpdmVLZXlzKG9iamVjdCkgOiBbXTtcblx0fTtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG4vKioqLyB9LFxuLyogNDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpc0FyZ3VtZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpLFxuXHQgICAgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpLFxuXHQgICAgaXNJbmRleCA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpLFxuXHQgICAgaXNMZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KSxcblx0ICAgIGtleXNJbiA9IF9fd2VicGFja19yZXF1aXJlX18oNDEpO1xuXHRcblx0LyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cblx0dmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblx0XG5cdC8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xuXHR2YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblx0XG5cdC8qKlxuXHQgKiBBIGZhbGxiYWNrIGltcGxlbWVudGF0aW9uIG9mIGBPYmplY3Qua2V5c2Agd2hpY2ggY3JlYXRlcyBhbiBhcnJheSBvZiB0aGVcblx0ICogb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cblx0ICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cblx0ICovXG5cdGZ1bmN0aW9uIHNoaW1LZXlzKG9iamVjdCkge1xuXHQgIHZhciBwcm9wcyA9IGtleXNJbihvYmplY3QpLFxuXHQgICAgICBwcm9wc0xlbmd0aCA9IHByb3BzLmxlbmd0aCxcblx0ICAgICAgbGVuZ3RoID0gcHJvcHNMZW5ndGggJiYgb2JqZWN0Lmxlbmd0aDtcblx0XG5cdCAgdmFyIGFsbG93SW5kZXhlcyA9ICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcblx0ICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG5cdFxuXHQgIHZhciBpbmRleCA9IC0xLFxuXHQgICAgICByZXN1bHQgPSBbXTtcblx0XG5cdCAgd2hpbGUgKCsraW5kZXggPCBwcm9wc0xlbmd0aCkge1xuXHQgICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblx0ICAgIGlmICgoYWxsb3dJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuXHQgICAgICByZXN1bHQucHVzaChrZXkpO1xuXHQgICAgfVxuXHQgIH1cblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHNoaW1LZXlzO1xuXG5cbi8qKiovIH0sXG4vKiA0MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGlzQXJndW1lbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyksXG5cdCAgICBpc0FycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNCksXG5cdCAgICBpc0luZGV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNiksXG5cdCAgICBpc0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpLFxuXHQgICAgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRcblx0LyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cblx0dmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblx0XG5cdC8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xuXHR2YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblx0XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuXHQgKlxuXHQgKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cblx0ICpcblx0ICogQHN0YXRpY1xuXHQgKiBAbWVtYmVyT2YgX1xuXHQgKiBAY2F0ZWdvcnkgT2JqZWN0XG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cblx0ICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cblx0ICogQGV4YW1wbGVcblx0ICpcblx0ICogZnVuY3Rpb24gRm9vKCkge1xuXHQgKiAgIHRoaXMuYSA9IDE7XG5cdCAqICAgdGhpcy5iID0gMjtcblx0ICogfVxuXHQgKlxuXHQgKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuXHQgKlxuXHQgKiBfLmtleXNJbihuZXcgRm9vKTtcblx0ICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG5cdCAqL1xuXHRmdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG5cdCAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG5cdCAgICByZXR1cm4gW107XG5cdCAgfVxuXHQgIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuXHQgICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG5cdCAgfVxuXHQgIHZhciBsZW5ndGggPSBvYmplY3QubGVuZ3RoO1xuXHQgIGxlbmd0aCA9IChsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJlxuXHQgICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKSAmJiBsZW5ndGgpIHx8IDA7XG5cdFxuXHQgIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuXHQgICAgICBpbmRleCA9IC0xLFxuXHQgICAgICBpc1Byb3RvID0gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0LFxuXHQgICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpLFxuXHQgICAgICBza2lwSW5kZXhlcyA9IGxlbmd0aCA+IDA7XG5cdFxuXHQgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdCAgICByZXN1bHRbaW5kZXhdID0gKGluZGV4ICsgJycpO1xuXHQgIH1cblx0ICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG5cdCAgICBpZiAoIShza2lwSW5kZXhlcyAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSkgJiZcblx0ICAgICAgICAhKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG5cdCAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG5cdCAgICB9XG5cdCAgfVxuXHQgIHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuXG5cbi8qKiovIH0sXG4vKiA0MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGlzTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCksXG5cdCAgICBpc09iamVjdExpa2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblx0XG5cdC8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cblx0dmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcblx0ICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcblx0ICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG5cdCAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuXHQgICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuXHQgICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG5cdCAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcblx0ICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuXHQgICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG5cdCAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcblx0ICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuXHQgICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG5cdCAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXHRcblx0dmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcblx0ICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcblx0ICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcblx0ICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcblx0ICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuXHQgICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG5cdCAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcblx0ICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG5cdCAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuXHQgICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblx0XG5cdC8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cblx0dmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG5cdHR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxuXHR0eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG5cdHR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG5cdHR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cblx0dHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5cdHR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cblx0dHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxuXHR0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9XG5cdHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID0gdHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9XG5cdHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID1cblx0dHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPVxuXHR0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID0gdHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblx0XG5cdC8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG5cdHZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cdFxuXHQvKipcblx0ICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcblx0ICogb2YgdmFsdWVzLlxuXHQgKi9cblx0dmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cdFxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBtZW1iZXJPZiBfXG5cdCAqIEBjYXRlZ29yeSBMYW5nXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuXHQgKiBAZXhhbXBsZVxuXHQgKlxuXHQgKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG5cdCAqIC8vID0+IHRydWVcblx0ICpcblx0ICogXy5pc1R5cGVkQXJyYXkoW10pO1xuXHQgKiAvLyA9PiBmYWxzZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNUeXBlZEFycmF5KHZhbHVlKSB7XG5cdCAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW29ialRvU3RyaW5nLmNhbGwodmFsdWUpXTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuLyoqKi8gfSxcbi8qIDQzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXHRcblx0LyoqXG5cdCAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gb2JqZWN0IGlmIGl0J3Mgbm90IG9uZS5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cblx0ICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgb2JqZWN0LlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9PYmplY3QodmFsdWUpIHtcblx0ICByZXR1cm4gaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBPYmplY3QodmFsdWUpO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHRvT2JqZWN0O1xuXG5cbi8qKiovIH0sXG4vKiA0NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oNDUpLFxuXHQgICAgcGFpcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2KTtcblx0XG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBwcm9wZXJ5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cblx0ICovXG5cdGZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcblx0ICB2YXIgcmVzdWx0ID0gcGFpcnMob2JqZWN0KSxcblx0ICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblx0XG5cdCAgd2hpbGUgKGxlbmd0aC0tKSB7XG5cdCAgICByZXN1bHRbbGVuZ3RoXVsyXSA9IGlzU3RyaWN0Q29tcGFyYWJsZShyZXN1bHRbbGVuZ3RoXVsxXSk7XG5cdCAgfVxuXHQgIHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuXG5cbi8qKiovIH0sXG4vKiA0NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblx0XG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cblx0ICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuXHQgKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cblx0ICovXG5cdGZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuXHQgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG5cblxuLyoqKi8gfSxcbi8qIDQ2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIga2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oMzkpLFxuXHQgICAgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzKTtcblx0XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgdHdvIGRpbWVuc2lvbmFsIGFycmF5IG9mIHRoZSBrZXktdmFsdWUgcGFpcnMgZm9yIGBvYmplY3RgLFxuXHQgKiBlLmcuIGBbW2tleTEsIHZhbHVlMV0sIFtrZXkyLCB2YWx1ZTJdXWAuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQG1lbWJlck9mIF9cblx0ICogQGNhdGVnb3J5IE9iamVjdFxuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGtleS12YWx1ZSBwYWlycy5cblx0ICogQGV4YW1wbGVcblx0ICpcblx0ICogXy5wYWlycyh7ICdiYXJuZXknOiAzNiwgJ2ZyZWQnOiA0MCB9KTtcblx0ICogLy8gPT4gW1snYmFybmV5JywgMzZdLCBbJ2ZyZWQnLCA0MF1dIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG5cdCAqL1xuXHRmdW5jdGlvbiBwYWlycyhvYmplY3QpIHtcblx0ICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuXHRcblx0ICB2YXIgaW5kZXggPSAtMSxcblx0ICAgICAgcHJvcHMgPSBrZXlzKG9iamVjdCksXG5cdCAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aCxcblx0ICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblx0XG5cdCAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0ICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cdCAgICByZXN1bHRbaW5kZXhdID0gW2tleSwgb2JqZWN0W2tleV1dO1xuXHQgIH1cblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHBhaXJzO1xuXG5cbi8qKiovIH0sXG4vKiA0NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGJhc2VHZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KSxcblx0ICAgIGJhc2VJc0VxdWFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMyksXG5cdCAgICBiYXNlU2xpY2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KSxcblx0ICAgIGlzQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KSxcblx0ICAgIGlzS2V5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MCksXG5cdCAgICBpc1N0cmljdENvbXBhcmFibGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KSxcblx0ICAgIGxhc3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUxKSxcblx0ICAgIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MyksXG5cdCAgICB0b1BhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUyKTtcblx0XG5cdC8qKlxuXHQgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXMgbm90IGNsb25lIGBzcmNWYWx1ZWAuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG5cdCAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuXHQgIHZhciBpc0FyciA9IGlzQXJyYXkocGF0aCksXG5cdCAgICAgIGlzQ29tbW9uID0gaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSxcblx0ICAgICAgcGF0aEtleSA9IChwYXRoICsgJycpO1xuXHRcblx0ICBwYXRoID0gdG9QYXRoKHBhdGgpO1xuXHQgIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcblx0ICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuXHQgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICB9XG5cdCAgICB2YXIga2V5ID0gcGF0aEtleTtcblx0ICAgIG9iamVjdCA9IHRvT2JqZWN0KG9iamVjdCk7XG5cdCAgICBpZiAoKGlzQXJyIHx8ICFpc0NvbW1vbikgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuXHQgICAgICBvYmplY3QgPSBwYXRoLmxlbmd0aCA9PSAxID8gb2JqZWN0IDogYmFzZUdldChvYmplY3QsIGJhc2VTbGljZShwYXRoLCAwLCAtMSkpO1xuXHQgICAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgIH1cblx0ICAgICAga2V5ID0gbGFzdChwYXRoKTtcblx0ICAgICAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcblx0ICAgIH1cblx0ICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWVcblx0ICAgICAgPyAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIG9iamVjdCkpXG5cdCAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9iamVjdFtrZXldLCB1bmRlZmluZWQsIHRydWUpO1xuXHQgIH07XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcblxuXG4vKioqLyB9LFxuLyogNDggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RyaW5nIHBhdGhzXG5cdCAqIGFuZCBkZWZhdWx0IHZhbHVlcy5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuXHQgKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbcGF0aEtleV0gVGhlIGtleSByZXByZXNlbnRhdGlvbiBvZiBwYXRoLlxuXHQgKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCwgcGF0aEtleSkge1xuXHQgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0ICBpZiAocGF0aEtleSAhPT0gdW5kZWZpbmVkICYmIHBhdGhLZXkgaW4gdG9PYmplY3Qob2JqZWN0KSkge1xuXHQgICAgcGF0aCA9IFtwYXRoS2V5XTtcblx0ICB9XG5cdCAgdmFyIGluZGV4ID0gMCxcblx0ICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cdFxuXHQgIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuXHQgICAgb2JqZWN0ID0gb2JqZWN0W3BhdGhbaW5kZXgrK11dO1xuXHQgIH1cblx0ICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcblxuXG4vKioqLyB9LFxuLyogNDkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuXHQgIHZhciBpbmRleCA9IC0xLFxuXHQgICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFxuXHQgIHN0YXJ0ID0gc3RhcnQgPT0gbnVsbCA/IDAgOiAoK3N0YXJ0IHx8IDApO1xuXHQgIGlmIChzdGFydCA8IDApIHtcblx0ICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG5cdCAgfVxuXHQgIGVuZCA9IChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiBsZW5ndGgpID8gbGVuZ3RoIDogKCtlbmQgfHwgMCk7XG5cdCAgaWYgKGVuZCA8IDApIHtcblx0ICAgIGVuZCArPSBsZW5ndGg7XG5cdCAgfVxuXHQgIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcblx0ICBzdGFydCA+Pj49IDA7XG5cdFxuXHQgIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXHQgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdCAgICByZXN1bHRbaW5kZXhdID0gYXJyYXlbaW5kZXggKyBzdGFydF07XG5cdCAgfVxuXHQgIHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuXG5cbi8qKiovIH0sXG4vKiA1MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGlzQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KSxcblx0ICAgIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG5cdFxuXHQvKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG5cdHZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXG5cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuXHQgICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXHRcblx0LyoqXG5cdCAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuXHQgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXHQgIGlmICgodHlwZSA9PSAnc3RyaW5nJyAmJiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpKSB8fCB0eXBlID09ICdudW1iZXInKSB7XG5cdCAgICByZXR1cm4gdHJ1ZTtcblx0ICB9XG5cdCAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXHQgIHZhciByZXN1bHQgPSAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpO1xuXHQgIHJldHVybiByZXN1bHQgfHwgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIHRvT2JqZWN0KG9iamVjdCkpO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuXG5cbi8qKiovIH0sXG4vKiA1MSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBtZW1iZXJPZiBfXG5cdCAqIEBjYXRlZ29yeSBBcnJheVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG5cdCAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cblx0ICogQGV4YW1wbGVcblx0ICpcblx0ICogXy5sYXN0KFsxLCAyLCAzXSk7XG5cdCAqIC8vID0+IDNcblx0ICovXG5cdGZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcblx0ICB2YXIgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXHQgIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBsYXN0O1xuXG5cbi8qKiovIH0sXG4vKiA1MiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGJhc2VUb1N0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oNTMpLFxuXHQgICAgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuXHRcblx0LyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xuXHR2YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXG5cXFxcXXxcXFxcLikqPylcXDIpXFxdL2c7XG5cdFxuXHQvKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cblx0dmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXHRcblx0LyoqXG5cdCAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gcHJvcGVydHkgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cblx0ICovXG5cdGZ1bmN0aW9uIHRvUGF0aCh2YWx1ZSkge1xuXHQgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuXHQgICAgcmV0dXJuIHZhbHVlO1xuXHQgIH1cblx0ICB2YXIgcmVzdWx0ID0gW107XG5cdCAgYmFzZVRvU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcblx0ICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcblx0ICB9KTtcblx0ICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHRvUGF0aDtcblxuXG4vKioqLyB9LFxuLyogNTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGlmIGl0J3Mgbm90IG9uZS4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkXG5cdCAqIGZvciBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgdmFsdWVzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcblx0ICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcblxuXG4vKioqLyB9LFxuLyogNTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBpZGVudGl0eSA9IF9fd2VicGFja19yZXF1aXJlX18oNTUpO1xuXHRcblx0LyoqXG5cdCAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUNhbGxiYWNrYCB3aGljaCBvbmx5IHN1cHBvcnRzIGB0aGlzYCBiaW5kaW5nXG5cdCAqIGFuZCBzcGVjaWZ5aW5nIHRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiaW5kLlxuXHQgKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFthcmdDb3VudF0gVGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG5cdCAqL1xuXHRmdW5jdGlvbiBiaW5kQ2FsbGJhY2soZnVuYywgdGhpc0FyZywgYXJnQ291bnQpIHtcblx0ICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgcmV0dXJuIGlkZW50aXR5O1xuXHQgIH1cblx0ICBpZiAodGhpc0FyZyA9PT0gdW5kZWZpbmVkKSB7XG5cdCAgICByZXR1cm4gZnVuYztcblx0ICB9XG5cdCAgc3dpdGNoIChhcmdDb3VudCkge1xuXHQgICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcblx0ICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCB2YWx1ZSk7XG5cdCAgICB9O1xuXHQgICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG5cdCAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKTtcblx0ICAgIH07XG5cdCAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG5cdCAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG5cdCAgICB9O1xuXHQgICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKSB7XG5cdCAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKTtcblx0ICAgIH07XG5cdCAgfVxuXHQgIHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG5cdCAgfTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBiaW5kQ2FsbGJhY2s7XG5cblxuLyoqKi8gfSxcbi8qIDU1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgcHJvdmlkZWQgdG8gaXQuXG5cdCAqXG5cdCAqIEBzdGF0aWNcblx0ICogQG1lbWJlck9mIF9cblx0ICogQGNhdGVnb3J5IFV0aWxpdHlcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG5cdCAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG5cdCAqIEBleGFtcGxlXG5cdCAqXG5cdCAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnIH07XG5cdCAqXG5cdCAqIF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0O1xuXHQgKiAvLyA9PiB0cnVlXG5cdCAqL1xuXHRmdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuXHQgIHJldHVybiB2YWx1ZTtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuXG4vKioqLyB9LFxuLyogNTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBiYXNlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KSxcblx0ICAgIGJhc2VQcm9wZXJ0eURlZXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU3KSxcblx0ICAgIGlzS2V5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MCk7XG5cdFxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgYXQgYHBhdGhgIG9uIGFcblx0ICogZ2l2ZW4gb2JqZWN0LlxuXHQgKlxuXHQgKiBAc3RhdGljXG5cdCAqIEBtZW1iZXJPZiBfXG5cdCAqIEBjYXRlZ29yeSBVdGlsaXR5XG5cdCAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuXHQgKiBAZXhhbXBsZVxuXHQgKlxuXHQgKiB2YXIgb2JqZWN0cyA9IFtcblx0ICogICB7ICdhJzogeyAnYic6IHsgJ2MnOiAyIH0gfSB9LFxuXHQgKiAgIHsgJ2EnOiB7ICdiJzogeyAnYyc6IDEgfSB9IH1cblx0ICogXTtcblx0ICpcblx0ICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iLmMnKSk7XG5cdCAqIC8vID0+IFsyLCAxXVxuXHQgKlxuXHQgKiBfLnBsdWNrKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InLCAnYyddKSksICdhLmIuYycpO1xuXHQgKiAvLyA9PiBbMSwgMl1cblx0ICovXG5cdGZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcblx0ICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkocGF0aCkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuXG5cbi8qKiovIH0sXG4vKiA1NyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIGJhc2VHZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ4KSxcblx0ICAgIHRvUGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18oNTIpO1xuXHRcblx0LyoqXG5cdCAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuXHQgKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuXHQgIHZhciBwYXRoS2V5ID0gKHBhdGggKyAnJyk7XG5cdCAgcGF0aCA9IHRvUGF0aChwYXRoKTtcblx0ICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG5cdCAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgsIHBhdGhLZXkpO1xuXHQgIH07XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5RGVlcDtcblxuXG4vKioqLyB9LFxuLyogNTggKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBiYXNlSW5kZXhPZiA9IF9fd2VicGFja19yZXF1aXJlX18oNCksXG5cdCAgICBjYWNoZUluZGV4T2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpLFxuXHQgICAgY3JlYXRlQ2FjaGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHRcblx0LyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG5cdHZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2sgc2hvcnRoYW5kc1xuXHQgKiBhbmQgYHRoaXNgIGJpbmRpbmcuXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuXHQgKi9cblx0ZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlKSB7XG5cdCAgdmFyIGluZGV4ID0gLTEsXG5cdCAgICAgIGluZGV4T2YgPSBiYXNlSW5kZXhPZixcblx0ICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuXHQgICAgICBpc0NvbW1vbiA9IHRydWUsXG5cdCAgICAgIGlzTGFyZ2UgPSBpc0NvbW1vbiAmJiBsZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSxcblx0ICAgICAgc2VlbiA9IGlzTGFyZ2UgPyBjcmVhdGVDYWNoZSgpIDogbnVsbCxcblx0ICAgICAgcmVzdWx0ID0gW107XG5cdFxuXHQgIGlmIChzZWVuKSB7XG5cdCAgICBpbmRleE9mID0gY2FjaGVJbmRleE9mO1xuXHQgICAgaXNDb21tb24gPSBmYWxzZTtcblx0ICB9IGVsc2Uge1xuXHQgICAgaXNMYXJnZSA9IGZhbHNlO1xuXHQgICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG5cdCAgfVxuXHQgIG91dGVyOlxuXHQgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdCAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG5cdCAgICAgICAgY29tcHV0ZWQgPSBpdGVyYXRlZSA/IGl0ZXJhdGVlKHZhbHVlLCBpbmRleCwgYXJyYXkpIDogdmFsdWU7XG5cdFxuXHQgICAgaWYgKGlzQ29tbW9uICYmIHZhbHVlID09PSB2YWx1ZSkge1xuXHQgICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG5cdCAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuXHQgICAgICAgIGlmIChzZWVuW3NlZW5JbmRleF0gPT09IGNvbXB1dGVkKSB7XG5cdCAgICAgICAgICBjb250aW51ZSBvdXRlcjtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGl0ZXJhdGVlKSB7XG5cdCAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcblx0ICAgICAgfVxuXHQgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG5cdCAgICB9XG5cdCAgICBlbHNlIGlmIChpbmRleE9mKHNlZW4sIGNvbXB1dGVkLCAwKSA8IDApIHtcblx0ICAgICAgaWYgKGl0ZXJhdGVlIHx8IGlzTGFyZ2UpIHtcblx0ICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuXHQgICAgICB9XG5cdCAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcblxuXG4vKioqLyB9LFxuLyogNTkgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qKlxuXHQgKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxYCBvcHRpbWl6ZWQgZm9yIHNvcnRlZCBhcnJheXMgd2l0aG91dCBzdXBwb3J0XG5cdCAqIGZvciBjYWxsYmFjayBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cblx0ICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG5cdCAqL1xuXHRmdW5jdGlvbiBzb3J0ZWRVbmlxKGFycmF5LCBpdGVyYXRlZSkge1xuXHQgIHZhciBzZWVuLFxuXHQgICAgICBpbmRleCA9IC0xLFxuXHQgICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG5cdCAgICAgIHJlc0luZGV4ID0gLTEsXG5cdCAgICAgIHJlc3VsdCA9IFtdO1xuXHRcblx0ICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHQgICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuXHQgICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSA6IHZhbHVlO1xuXHRcblx0ICAgIGlmICghaW5kZXggfHwgc2VlbiAhPT0gY29tcHV0ZWQpIHtcblx0ICAgICAgc2VlbiA9IGNvbXB1dGVkO1xuXHQgICAgICByZXN1bHRbKytyZXNJbmRleF0gPSB2YWx1ZTtcblx0ICAgIH1cblx0ICB9XG5cdCAgcmV0dXJuIHJlc3VsdDtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSBzb3J0ZWRVbmlxO1xuXG5cbi8qKiovIH0sXG4vKiA2MCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKF9yZWYpIHtcblx0ICB2YXIgU3Vic2NyaXB0aW9uID0gX3JlZi5TdWJzY3JpcHRpb247XG5cdCAgdmFyIHN1YnNjcmlwdGlvbnNCeVVVSUQgPSBfcmVmLnN1YnNjcmlwdGlvbnNCeVVVSUQ7XG5cdCAgdmFyIHN1YnNjcmlwdGlvbnNCeVByb3BlcnR5ID0gX3JlZi5zdWJzY3JpcHRpb25zQnlQcm9wZXJ0eTtcblx0ICB2YXIgcHJvcGVydGllcyA9IF9yZWYucHJvcGVydGllcztcblx0ICB2YXIgY2FsbGJhY2sgPSBfcmVmLmNhbGxiYWNrO1xuXHRcblx0ICAvKiBtYWtlIGEgc3Vic2NyaXB0aW9uICovXG5cdCAgdmFyIHN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbih7IHByb3BlcnRpZXM6IHByb3BlcnRpZXMsIGNhbGxiYWNrOiBjYWxsYmFjayB9KTtcblx0XG5cdCAgLyogYWRkIHRoZSBzdWJzY3JpcHRpb24gdG8gdGhlIHN1YnNjcmlwdGlvbnNCeVVVSUQgb2JqZWN0ICovXG5cdCAgc3Vic2NyaXB0aW9uc0J5VVVJRFtzdWJzY3JpcHRpb24udXVpZF0gPSBzdWJzY3JpcHRpb247XG5cdFxuXHQgIC8qIGFkZCByZWZlcmVuY2VzIHRvIHRoZSBzdWJzY3JpcHRpb24gdG8gZWFjaCBvZiB0aGUgKi9cblx0ICAvKiBzdWJzY3JpYmVkIHByb3BlcnRpZXMgKi9cblx0ICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG5cdCAgICBzdWJzY3JpcHRpb25zQnlQcm9wZXJ0eS5hZGQoeyBwcm9wZXJ0eTogcHJvcGVydHksIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uIH0pO1xuXHQgIH0pO1xuXHRcblx0ICByZXR1cm4gc3Vic2NyaXB0aW9uLnV1aWQ7XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfSxcbi8qIDYxICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cdFxuXHR2YXIgX25vZGVVdWlkID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2Mik7XG5cdFxuXHR2YXIgX25vZGVVdWlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX25vZGVVdWlkKTtcblx0XG5cdHZhciBTVUJTQ1JJUFRJT05fUFJPVE9UWVBFID0ge1xuXHQgIHByb3BlcnRpZXM6IFtdLFxuXHQgIGNhbGxiYWNrOiBmdW5jdGlvbiBjYWxsYmFjaygpIHt9LFxuXHQgIGd1aWQ6IG51bGxcblx0fTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChfcmVmKSB7XG5cdCAgdmFyIHByb3BlcnRpZXMgPSBfcmVmLnByb3BlcnRpZXM7XG5cdCAgdmFyIGNhbGxiYWNrID0gX3JlZi5jYWxsYmFjaztcblx0XG5cdCAgdmFyIHN1YnNjcmlwdGlvbiA9IE9iamVjdC5jcmVhdGUoU1VCU0NSSVBUSU9OX1BST1RPVFlQRSk7XG5cdFxuXHQgIHN1YnNjcmlwdGlvbi5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcblx0ICBzdWJzY3JpcHRpb24uY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0ICBzdWJzY3JpcHRpb24udXVpZCA9IF9ub2RlVXVpZDJbJ2RlZmF1bHQnXS52NCgpO1xuXHRcblx0ICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuXHR9O1xuXHRcblx0ZXhwb3J0cy5TVUJTQ1JJUFRJT05fUFJPVE9UWVBFID0gU1VCU0NSSVBUSU9OX1BST1RPVFlQRTtcblxuLyoqKi8gfSxcbi8qIDYyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHR2YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187Ly8gICAgIHV1aWQuanNcblx0Ly9cblx0Ly8gICAgIENvcHlyaWdodCAoYykgMjAxMC0yMDEyIFJvYmVydCBLaWVmZmVyXG5cdC8vICAgICBNSVQgTGljZW5zZSAtIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0XG5cdChmdW5jdGlvbigpIHtcblx0ICB2YXIgX2dsb2JhbCA9IHRoaXM7XG5cdFxuXHQgIC8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBXZSBmZWF0dXJlXG5cdCAgLy8gZGV0ZWN0IHRvIGRldGVybWluZSB0aGUgYmVzdCBSTkcgc291cmNlLCBub3JtYWxpemluZyB0byBhIGZ1bmN0aW9uIHRoYXRcblx0ICAvLyByZXR1cm5zIDEyOC1iaXRzIG9mIHJhbmRvbW5lc3MsIHNpbmNlIHRoYXQncyB3aGF0J3MgdXN1YWxseSByZXF1aXJlZFxuXHQgIHZhciBfcm5nO1xuXHRcblx0ICAvLyBOb2RlLmpzIGNyeXB0by1iYXNlZCBSTkcgLSBodHRwOi8vbm9kZWpzLm9yZy9kb2NzL3YwLjYuMi9hcGkvY3J5cHRvLmh0bWxcblx0ICAvL1xuXHQgIC8vIE1vZGVyYXRlbHkgZmFzdCwgaGlnaCBxdWFsaXR5XG5cdCAgaWYgKHR5cGVvZihfZ2xvYmFsLnJlcXVpcmUpID09ICdmdW5jdGlvbicpIHtcblx0ICAgIHRyeSB7XG5cdCAgICAgIHZhciBfcmIgPSBfZ2xvYmFsLnJlcXVpcmUoJ2NyeXB0bycpLnJhbmRvbUJ5dGVzO1xuXHQgICAgICBfcm5nID0gX3JiICYmIGZ1bmN0aW9uKCkge3JldHVybiBfcmIoMTYpO307XG5cdCAgICB9IGNhdGNoKGUpIHt9XG5cdCAgfVxuXHRcblx0ICBpZiAoIV9ybmcgJiYgX2dsb2JhbC5jcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuXHQgICAgLy8gV0hBVFdHIGNyeXB0by1iYXNlZCBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG5cdCAgICAvL1xuXHQgICAgLy8gTW9kZXJhdGVseSBmYXN0LCBoaWdoIHF1YWxpdHlcblx0ICAgIHZhciBfcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5cdCAgICBfcm5nID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuXHQgICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKF9ybmRzOCk7XG5cdCAgICAgIHJldHVybiBfcm5kczg7XG5cdCAgICB9O1xuXHQgIH1cblx0XG5cdCAgaWYgKCFfcm5nKSB7XG5cdCAgICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG5cdCAgICAvL1xuXHQgICAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcblx0ICAgIC8vIHF1YWxpdHkuXG5cdCAgICB2YXIgIF9ybmRzID0gbmV3IEFycmF5KDE2KTtcblx0ICAgIF9ybmcgPSBmdW5jdGlvbigpIHtcblx0ICAgICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG5cdCAgICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG5cdCAgICAgICAgX3JuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHJldHVybiBfcm5kcztcblx0ICAgIH07XG5cdCAgfVxuXHRcblx0ICAvLyBCdWZmZXIgY2xhc3MgdG8gdXNlXG5cdCAgdmFyIEJ1ZmZlckNsYXNzID0gdHlwZW9mKF9nbG9iYWwuQnVmZmVyKSA9PSAnZnVuY3Rpb24nID8gX2dsb2JhbC5CdWZmZXIgOiBBcnJheTtcblx0XG5cdCAgLy8gTWFwcyBmb3IgbnVtYmVyIDwtPiBoZXggc3RyaW5nIGNvbnZlcnNpb25cblx0ICB2YXIgX2J5dGVUb0hleCA9IFtdO1xuXHQgIHZhciBfaGV4VG9CeXRlID0ge307XG5cdCAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuXHQgICAgX2J5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG5cdCAgICBfaGV4VG9CeXRlW19ieXRlVG9IZXhbaV1dID0gaTtcblx0ICB9XG5cdFxuXHQgIC8vICoqYHBhcnNlKClgIC0gUGFyc2UgYSBVVUlEIGludG8gaXQncyBjb21wb25lbnQgYnl0ZXMqKlxuXHQgIGZ1bmN0aW9uIHBhcnNlKHMsIGJ1Ziwgb2Zmc2V0KSB7XG5cdCAgICB2YXIgaSA9IChidWYgJiYgb2Zmc2V0KSB8fCAwLCBpaSA9IDA7XG5cdFxuXHQgICAgYnVmID0gYnVmIHx8IFtdO1xuXHQgICAgcy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1swLTlhLWZdezJ9L2csIGZ1bmN0aW9uKG9jdCkge1xuXHQgICAgICBpZiAoaWkgPCAxNikgeyAvLyBEb24ndCBvdmVyZmxvdyFcblx0ICAgICAgICBidWZbaSArIGlpKytdID0gX2hleFRvQnl0ZVtvY3RdO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0XG5cdCAgICAvLyBaZXJvIG91dCByZW1haW5pbmcgYnl0ZXMgaWYgc3RyaW5nIHdhcyBzaG9ydFxuXHQgICAgd2hpbGUgKGlpIDwgMTYpIHtcblx0ICAgICAgYnVmW2kgKyBpaSsrXSA9IDA7XG5cdCAgICB9XG5cdFxuXHQgICAgcmV0dXJuIGJ1Zjtcblx0ICB9XG5cdFxuXHQgIC8vICoqYHVucGFyc2UoKWAgLSBDb252ZXJ0IFVVSUQgYnl0ZSBhcnJheSAoYWxhIHBhcnNlKCkpIGludG8gYSBzdHJpbmcqKlxuXHQgIGZ1bmN0aW9uIHVucGFyc2UoYnVmLCBvZmZzZXQpIHtcblx0ICAgIHZhciBpID0gb2Zmc2V0IHx8IDAsIGJ0aCA9IF9ieXRlVG9IZXg7XG5cdCAgICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcblx0ICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuXHQgICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG5cdCAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcblx0ICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuXHQgICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG5cdCAgICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcblx0ICAgICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG5cdCAgfVxuXHRcblx0ICAvLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG5cdCAgLy9cblx0ICAvLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuXHQgIC8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cdFxuXHQgIC8vIHJhbmRvbSAjJ3Mgd2UgbmVlZCB0byBpbml0IG5vZGUgYW5kIGNsb2Nrc2VxXG5cdCAgdmFyIF9zZWVkQnl0ZXMgPSBfcm5nKCk7XG5cdFxuXHQgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuXHQgIHZhciBfbm9kZUlkID0gW1xuXHQgICAgX3NlZWRCeXRlc1swXSB8IDB4MDEsXG5cdCAgICBfc2VlZEJ5dGVzWzFdLCBfc2VlZEJ5dGVzWzJdLCBfc2VlZEJ5dGVzWzNdLCBfc2VlZEJ5dGVzWzRdLCBfc2VlZEJ5dGVzWzVdXG5cdCAgXTtcblx0XG5cdCAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcblx0ICB2YXIgX2Nsb2Nrc2VxID0gKF9zZWVkQnl0ZXNbNl0gPDwgOCB8IF9zZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuXHRcblx0ICAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblx0ICB2YXIgX2xhc3RNU2VjcyA9IDAsIF9sYXN0TlNlY3MgPSAwO1xuXHRcblx0ICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5cdCAgZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcblx0ICAgIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXHQgICAgdmFyIGIgPSBidWYgfHwgW107XG5cdFxuXHQgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFxuXHQgICAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPSBudWxsID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblx0XG5cdCAgICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuXHQgICAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cblx0ICAgIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuXHQgICAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cblx0ICAgIHZhciBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT0gbnVsbCA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XG5cdCAgICAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG5cdCAgICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXHQgICAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPSBudWxsID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXHRcblx0ICAgIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2Vjcylcblx0ICAgIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cdFxuXHQgICAgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXHQgICAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09IG51bGwpIHtcblx0ICAgICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcblx0ICAgIC8vIHRpbWUgaW50ZXJ2YWxcblx0ICAgIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PSBudWxsKSB7XG5cdCAgICAgIG5zZWNzID0gMDtcblx0ICAgIH1cblx0XG5cdCAgICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG5cdCAgICBpZiAobnNlY3MgPj0gMTAwMDApIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG5cdCAgICB9XG5cdFxuXHQgICAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuXHQgICAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuXHQgICAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7XG5cdFxuXHQgICAgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG5cdCAgICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblx0XG5cdCAgICAvLyBgdGltZV9sb3dgXG5cdCAgICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG5cdCAgICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuXHQgICAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcblx0ICAgIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcblx0ICAgIGJbaSsrXSA9IHRsICYgMHhmZjtcblx0XG5cdCAgICAvLyBgdGltZV9taWRgXG5cdCAgICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG5cdCAgICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuXHQgICAgYltpKytdID0gdG1oICYgMHhmZjtcblx0XG5cdCAgICAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXHQgICAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuXHQgICAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cdFxuXHQgICAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cdCAgICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cdFxuXHQgICAgLy8gYGNsb2NrX3NlcV9sb3dgXG5cdCAgICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cdFxuXHQgICAgLy8gYG5vZGVgXG5cdCAgICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuXHQgICAgZm9yICh2YXIgbiA9IDA7IG4gPCA2OyBuKyspIHtcblx0ICAgICAgYltpICsgbl0gPSBub2RlW25dO1xuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiBidWYgPyBidWYgOiB1bnBhcnNlKGIpO1xuXHQgIH1cblx0XG5cdCAgLy8gKipgdjQoKWAgLSBHZW5lcmF0ZSByYW5kb20gVVVJRCoqXG5cdFxuXHQgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcblx0ICBmdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuXHQgICAgLy8gRGVwcmVjYXRlZCAtICdmb3JtYXQnIGFyZ3VtZW50LCBhcyBzdXBwb3J0ZWQgaW4gdjEuMlxuXHQgICAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cdFxuXHQgICAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuXHQgICAgICBidWYgPSBvcHRpb25zID09ICdiaW5hcnknID8gbmV3IEJ1ZmZlckNsYXNzKDE2KSA6IG51bGw7XG5cdCAgICAgIG9wdGlvbnMgPSBudWxsO1xuXHQgICAgfVxuXHQgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFxuXHQgICAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZykoKTtcblx0XG5cdCAgICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cdCAgICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG5cdCAgICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cdFxuXHQgICAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cdCAgICBpZiAoYnVmKSB7XG5cdCAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgaWkrKykge1xuXHQgICAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICByZXR1cm4gYnVmIHx8IHVucGFyc2Uocm5kcyk7XG5cdCAgfVxuXHRcblx0ICAvLyBFeHBvcnQgcHVibGljIEFQSVxuXHQgIHZhciB1dWlkID0gdjQ7XG5cdCAgdXVpZC52MSA9IHYxO1xuXHQgIHV1aWQudjQgPSB2NDtcblx0ICB1dWlkLnBhcnNlID0gcGFyc2U7XG5cdCAgdXVpZC51bnBhcnNlID0gdW5wYXJzZTtcblx0ICB1dWlkLkJ1ZmZlckNsYXNzID0gQnVmZmVyQ2xhc3M7XG5cdFxuXHQgIGlmICh0eXBlb2YobW9kdWxlKSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHQgICAgLy8gUHVibGlzaCBhcyBub2RlLmpzIG1vZHVsZVxuXHQgICAgbW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuXHQgIH0gZWxzZSAgaWYgKHRydWUpIHtcblx0ICAgIC8vIFB1Ymxpc2ggYXMgQU1EIG1vZHVsZVxuXHQgICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9IGZ1bmN0aW9uKCkge3JldHVybiB1dWlkO30uY2FsbChleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fLCBleHBvcnRzLCBtb2R1bGUpLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG5cdCBcblx0XG5cdCAgfSBlbHNlIHtcblx0ICAgIC8vIFB1Ymxpc2ggYXMgZ2xvYmFsIChpbiBicm93c2Vycylcblx0ICAgIHZhciBfcHJldmlvdXNSb290ID0gX2dsb2JhbC51dWlkO1xuXHRcblx0ICAgIC8vICoqYG5vQ29uZmxpY3QoKWAgLSAoYnJvd3NlciBvbmx5KSB0byByZXNldCBnbG9iYWwgJ3V1aWQnIHZhcioqXG5cdCAgICB1dWlkLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcblx0ICAgICAgX2dsb2JhbC51dWlkID0gX3ByZXZpb3VzUm9vdDtcblx0ICAgICAgcmV0dXJuIHV1aWQ7XG5cdCAgICB9O1xuXHRcblx0ICAgIF9nbG9iYWwudXVpZCA9IHV1aWQ7XG5cdCAgfVxuXHR9KS5jYWxsKHRoaXMpO1xuXG5cbi8qKiovIH0sXG4vKiA2MyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHR2YXIgU1VCU0NSSVBUSU9OU19CWV9QUk9QRVJUWV9QUk9UT1RZUEUgPSB7XG5cdCAgYWRkOiBmdW5jdGlvbiBhZGQoX3JlZikge1xuXHQgICAgdmFyIHByb3BlcnR5ID0gX3JlZi5wcm9wZXJ0eTtcblx0ICAgIHZhciBzdWJzY3JpcHRpb24gPSBfcmVmLnN1YnNjcmlwdGlvbjtcblx0XG5cdCAgICB2YXIgY3VycmVudFN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnNbcHJvcGVydHldO1xuXHRcblx0ICAgIGlmICghY3VycmVudFN1YnNjcmlwdGlvbnMgfHwgT2JqZWN0LmtleXMoY3VycmVudFN1YnNjcmlwdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbcHJvcGVydHldID0ge307XG5cdCAgICB9XG5cdFxuXHQgICAgLyogdXNlaW5nIG9iamVjdCBsaWtlIGEgc2V0IGhlcmUgKi9cblx0ICAgIHRoaXMuc3Vic2NyaXB0aW9uc1twcm9wZXJ0eV1bc3Vic2NyaXB0aW9uLnV1aWRdID0gdHJ1ZTtcblx0ICB9LFxuXHRcblx0ICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShfcmVmMikge1xuXHQgICAgdmFyIHByb3BlcnR5ID0gX3JlZjIucHJvcGVydHk7XG5cdCAgICB2YXIgc3Vic2NyaXB0aW9uID0gX3JlZjIuc3Vic2NyaXB0aW9uO1xuXHRcblx0ICAgIHZhciBjdXJyZW50U3Vic2NyaXB0aW9ucyA9IHRoaXMuc3Vic2NyaXB0aW9uc1twcm9wZXJ0eV07XG5cdFxuXHQgICAgaWYgKCFjdXJyZW50U3Vic2NyaXB0aW9ucyB8fCBPYmplY3Qua2V5cyhjdXJyZW50U3Vic2NyaXB0aW9ucykubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1twcm9wZXJ0eV0gPSB7fTtcblx0ICAgIH1cblx0XG5cdCAgICBkZWxldGUgdGhpcy5zdWJzY3JpcHRpb25zW3Byb3BlcnR5XVtzdWJzY3JpcHRpb24udXVpZF07XG5cdCAgfVxuXHRcblx0fTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgc3Vic2NyaXB0aW9uc0J5UHJvcGVydHkgPSBPYmplY3QuY3JlYXRlKFNVQlNDUklQVElPTlNfQllfUFJPUEVSVFlfUFJPVE9UWVBFKTtcblx0XG5cdCAgc3Vic2NyaXB0aW9uc0J5UHJvcGVydHkuc3Vic2NyaXB0aW9ucyA9IHt9O1xuXHRcblx0ICByZXR1cm4gc3Vic2NyaXB0aW9uc0J5UHJvcGVydHk7XG5cdH07XG5cdFxuXHRleHBvcnRzLlNVQlNDUklQVElPTlNfQllfUFJPUEVSVFlfUFJPVE9UWVBFID0gU1VCU0NSSVBUSU9OU19CWV9QUk9QRVJUWV9QUk9UT1RZUEU7XG5cbi8qKiovIH0sXG4vKiA2NCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0Lyogc2luZ2xldG9uIG9iamVjdCB1c2VkIHRvIGhvbGQgc3Vic2NyaXB0aW9uIG9iamVjdHMgYnkgdGhlaXIgVVVJRCAqL1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzWydkZWZhdWx0J10gPSB7fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiA2NSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKF9yZWYpIHtcblx0ICB2YXIgc3Vic2NyaXB0aW9uVVVJRCA9IF9yZWYuc3Vic2NyaXB0aW9uVVVJRDtcblx0ICB2YXIgc3Vic2NyaXB0aW9uc0J5VVVJRCA9IF9yZWYuc3Vic2NyaXB0aW9uc0J5VVVJRDtcblx0ICB2YXIgc3Vic2NyaXB0aW9uc0J5UHJvcGVydHkgPSBfcmVmLnN1YnNjcmlwdGlvbnNCeVByb3BlcnR5O1xuXHRcblx0ICB2YXIgc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uc0J5VVVJRFtzdWJzY3JpcHRpb25VVUlEXTtcblx0XG5cdCAgaWYgKHN1YnNjcmlwdGlvbikge1xuXHQgICAgLyogcmVtb3ZlIHRoZSBzdWJzY3JpcHRpb24gZnJvbSB0aGUgc3Vic2NyaXB0aW9uc0J5VVVJRCBvYmplY3QgKi9cblx0ICAgIGRlbGV0ZSBzdWJzY3JpcHRpb25zQnlVVUlEW3N1YnNjcmlwdGlvblVVSURdO1xuXHRcblx0ICAgIC8qIHJlbW92ZSByZWZlcmVuY2VzIHRvIHRoZSBzdWJzY3JpcHRpb24gZnJvbSBlYWNoIG9mIHRoZSBzdWJzY3JpYmVkIHByb3BlcnRpZXMgKi9cblx0ICAgIHN1YnNjcmlwdGlvbi5wcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG5cdCAgICAgIHN1YnNjcmlwdGlvbnNCeVByb3BlcnR5LnJlbW92ZSh7IHByb3BlcnR5OiBwcm9wZXJ0eSwgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb24gfSk7XG5cdCAgICB9KTtcblx0ICB9XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuLyoqKi8gfVxuLyoqKioqKi8gXSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBZ09XTTFabVV3TjJJeE4yRmxPRFpoTUdFM1lUVWlMQ0ozWldKd1lXTnJPaTh2THk0dmFtRjJZWE5qY21sd2RDOWhjR2t1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YW1GMllYTmpjbWx3ZEM5blpYUklZWE5vVUdGeVlXMXpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMnBoZG1GelkzSnBjSFF2YUdGemFFTm9ZVzVuWlVoaGJtUnNaWEl1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5c2IyUmhjMmd2WVhKeVlYa3ZhVzUwWlhKelpXTjBhVzl1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dmJHOWtZWE5vTDJsdWRHVnlibUZzTDJKaGMyVkpibVJsZUU5bUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZiRzlrWVhOb0wybHVkR1Z5Ym1Gc0wybHVaR1Y0VDJaT1lVNHVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTlzYjJSaGMyZ3ZhVzUwWlhKdVlXd3ZZMkZqYUdWSmJtUmxlRTltTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dmJHOWtZWE5vTDJ4aGJtY3ZhWE5QWW1wbFkzUXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTlzYjJSaGMyZ3ZhVzUwWlhKdVlXd3ZZM0psWVhSbFEyRmphR1V1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5c2IyUmhjMmd2YVc1MFpYSnVZV3d2VTJWMFEyRmphR1V1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5c2IyUmhjMmd2YVc1MFpYSnVZV3d2WTJGamFHVlFkWE5vTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dmJHOWtZWE5vTDJsdWRHVnlibUZzTDJkbGRFNWhkR2wyWlM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5K0wyeHZaR0Z6YUM5c1lXNW5MMmx6VG1GMGFYWmxMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMzR2Ykc5a1lYTm9MMnhoYm1jdmFYTkdkVzVqZEdsdmJpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMMnh2WkdGemFDOXBiblJsY201aGJDOXBjMDlpYW1WamRFeHBhMlV1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5c2IyUmhjMmd2YVc1MFpYSnVZV3d2YVhOQmNuSmhlVXhwYTJVdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmZpOXNiMlJoYzJndmFXNTBaWEp1WVd3dloyVjBUR1Z1WjNSb0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZiRzlrWVhOb0wybHVkR1Z5Ym1Gc0wySmhjMlZRY205d1pYSjBlUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzlwYzB4bGJtZDBhQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJ4dlpHRnphQzltZFc1amRHbHZiaTl5WlhOMFVHRnlZVzB1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5c2IyUmhjMmd2WVhKeVlYa3ZabXhoZEhSbGJpNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMMnh2WkdGemFDOXBiblJsY201aGJDOWlZWE5sUm14aGRIUmxiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzloY25KaGVWQjFjMmd1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5c2IyUmhjMmd2YkdGdVp5OXBjMEZ5WjNWdFpXNTBjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJ4dlpHRnphQzlzWVc1bkwybHpRWEp5WVhrdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmZpOXNiMlJoYzJndmFXNTBaWEp1WVd3dmFYTkpkR1Z5WVhSbFpVTmhiR3d1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5c2IyUmhjMmd2YVc1MFpYSnVZV3d2YVhOSmJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlxWVhaaGMyTnlhWEIwTDJ0bGVYTlhhWFJvUTJoaGJtZGxaRlpoYkhWbGN5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMMnh2WkdGemFDOWhjbkpoZVM5MWJtbHhkV1V1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5c2IyUmhjMmd2WVhKeVlYa3ZkVzVwY1M1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5K0wyeHZaR0Z6YUM5cGJuUmxjbTVoYkM5aVlYTmxRMkZzYkdKaFkyc3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTlzYjJSaGMyZ3ZhVzUwWlhKdVlXd3ZZbUZ6WlUxaGRHTm9aWE11YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5c2IyUmhjMmd2YVc1MFpYSnVZV3d2WW1GelpVbHpUV0YwWTJndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmZpOXNiMlJoYzJndmFXNTBaWEp1WVd3dlltRnpaVWx6UlhGMVlXd3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTlzYjJSaGMyZ3ZhVzUwWlhKdVlXd3ZZbUZ6WlVselJYRjFZV3hFWldWd0xtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZiRzlrWVhOb0wybHVkR1Z5Ym1Gc0wyVnhkV0ZzUVhKeVlYbHpMbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMzR2Ykc5a1lYTm9MMmx1ZEdWeWJtRnNMMkZ5Y21GNVUyOXRaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzlsY1hWaGJFSjVWR0ZuTG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dmJHOWtZWE5vTDJsdWRHVnlibUZzTDJWeGRXRnNUMkpxWldOMGN5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMMnh2WkdGemFDOXZZbXBsWTNRdmEyVjVjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzl6YUdsdFMyVjVjeTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJ4dlpHRnphQzl2WW1wbFkzUXZhMlY1YzBsdUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZiRzlrWVhOb0wyeGhibWN2YVhOVWVYQmxaRUZ5Y21GNUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZiRzlrWVhOb0wybHVkR1Z5Ym1Gc0wzUnZUMkpxWldOMExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZiRzlrWVhOb0wybHVkR1Z5Ym1Gc0wyZGxkRTFoZEdOb1JHRjBZUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzlwYzFOMGNtbGpkRU52YlhCaGNtRmliR1V1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5c2IyUmhjMmd2YjJKcVpXTjBMM0JoYVhKekxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZiRzlrWVhOb0wybHVkR1Z5Ym1Gc0wySmhjMlZOWVhSamFHVnpVSEp2Y0dWeWRIa3Vhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTlzYjJSaGMyZ3ZhVzUwWlhKdVlXd3ZZbUZ6WlVkbGRDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMMnh2WkdGemFDOXBiblJsY201aGJDOWlZWE5sVTJ4cFkyVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTlzYjJSaGMyZ3ZhVzUwWlhKdVlXd3ZhWE5MWlhrdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmZpOXNiMlJoYzJndllYSnlZWGt2YkdGemRDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMMnh2WkdGemFDOXBiblJsY201aGJDOTBiMUJoZEdndWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmZpOXNiMlJoYzJndmFXNTBaWEp1WVd3dlltRnpaVlJ2VTNSeWFXNW5MbXB6SWl3aWQyVmljR0ZqYXpvdkx5OHVMMzR2Ykc5a1lYTm9MMmx1ZEdWeWJtRnNMMkpwYm1SRFlXeHNZbUZqYXk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5K0wyeHZaR0Z6YUM5MWRHbHNhWFI1TDJsa1pXNTBhWFI1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dmJHOWtZWE5vTDNWMGFXeHBkSGt2Y0hKdmNHVnlkSGt1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2Zmk5c2IyUmhjMmd2YVc1MFpYSnVZV3d2WW1GelpWQnliM0JsY25SNVJHVmxjQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzlpWVhObFZXNXBjUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzl6YjNKMFpXUlZibWx4TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDJwaGRtRnpZM0pwY0hRdmMzVmljMk55YVdKbExtcHpJaXdpZDJWaWNHRmphem92THk4dUwycGhkbUZ6WTNKcGNIUXZVM1ZpYzJOeWFYQjBhVzl1TG1weklpd2lkMlZpY0dGamF6b3ZMeTh1TDM0dmJtOWtaUzExZFdsa0wzVjFhV1F1YW5NaUxDSjNaV0p3WVdOck9pOHZMeTR2YW1GMllYTmpjbWx3ZEM5emRXSnpZM0pwY0hScGIyNXpRbmxRY205d1pYSjBlUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTlxWVhaaGMyTnlhWEIwTDNOMVluTmpjbWx3ZEdsdmJuTkNlVlZWU1VRdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmFtRjJZWE5qY21sd2RDOTFibk4xWW5OamNtbGlaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEhWQ1FVRmxPMEZCUTJZN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenM3T3pzN1FVTjBRMEVzWVVGQldTeERRVUZET3pzN096czdPenR2UkVGRmRVSXNRMEZCTUVJN096czdkMFJCUXpGQ0xFTkJRVGhDT3pzN096UkVRVU01UWl4RlFVRnJRenM3T3p0blJFRkRiRU1zUlVGQmMwSTdPenM3YlVSQlEzUkNMRVZCUVhsQ096czdPemhFUVVONlFpeEZRVUZ2UXpzN096c3dSRUZEY0VNc1JVRkJaME03T3pzN2EwUkJRMmhETEVWQlFYZENPenM3TzBGQlJUVkVMRXRCUVVrc2RVSkJRWFZDTEVkQlFVY3NjVVJCUVhsQ0xFTkJRVU03T3p0elFrRkhla003UVVGRFlpeDFRa0ZCYjBJc2EwTkJRVWM3UVVGRGNrSXNVMEZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3UVVGRGNrSXNWMEZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wRkJRMW9zVjBGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNN1RVRkRla0k3U1VGRFJqdEJRVU5FTEU5QlFVa3NhMEpCUVVjN1FVRkRUQ3haUVVGUExFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhaUVVGWkxFVkJRVVVzWlVGQlN5eEZRVUZKTzBGQlEzQkVMSEZFUVVGclFqdEJRVU5vUWl4alFVRkxMRVZCUVV3c1MwRkJTenRCUVVOTUxITkNRVUZoTzBGQlEySXNPRUpCUVhGQ08wRkJRM0pDTEdkRFFVRjFRaXhGUVVGMlFpeDFRa0ZCZFVJN1FVRkRka0lzTkVKQlFXMUNPMUZCUTNCQ0xFTkJRVU1zUTBGQlF6dE5RVU5LTEVOQlFVTXNRMEZCUXp0SlFVTktPMEZCUTBRc1dVRkJVeXh4UWtGQlF5eFZRVUZWTEVWQlFVVXNVVUZCVVN4RlFVRkZPMEZCUXpsQ0xGTkJRVWtzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hEUVVGRE96dEJRVVUxUWl4WlFVRlBMSE5EUVVGVk8wRkJRMllzYlVKQlFWazdRVUZEV2l3d1FrRkJiVUk3UVVGRGJrSXNPRUpCUVhWQ0xFVkJRWFpDTEhWQ1FVRjFRanRCUVVOMlFpeHBRa0ZCVlN4RlFVRldMRlZCUVZVN1FVRkRWaXhsUVVGUkxFVkJRVklzVVVGQlVUdE5RVU5VTEVOQlFVTXNRMEZCUXp0SlFVTktPMEZCUTBRc1kwRkJWeXgxUWtGQlF5eG5Ra0ZCWjBJc1JVRkJSVHRCUVVNMVFpdzJRMEZCV1R0QlFVTldMSFZDUVVGblFpeEZRVUZvUWl4blFrRkJaMEk3UVVGRGFFSXNNRUpCUVcxQ08wRkJRMjVDTERoQ1FVRjFRaXhGUVVGMlFpeDFRa0ZCZFVJN1RVRkRlRUlzUTBGQlF5eERRVUZETzBsQlEwbzdSVUZEUmpzN096czdPenRCUTJ4RVJDeGhRVUZaTEVOQlFVTTdPenM3T3pzN08zTkNRVVZGTEZWQlFVTXNSMEZCUnl4RlFVRkxPMjlDUVVOSUxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRPenM3TzA5QlFUVkNMRU5CUVVNN1QwRkJSU3hQUVVGUE96dEJRVVZtTEZWQlFVOHNSMEZCUnl4UFFVRlBMRWxCUVVrc1JVRkJSU3hEUVVGRE8wRkJRM2hDTEZWQlFVOHNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCUXl4SlFVRkpMRVZCUVVVc1dVRkJXU3hGUVVGTE95dENRVU53UXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF6czdPenRUUVVGeVF5eEhRVUZITzFOQlFVVXNTMEZCU3pzN1FVRkZaaXhUUVVGSkxFdEJRVXNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJRenRCUVVONlFpeFhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVObUxHRkJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkRia0lzVFVGQlRUdEJRVU5NTEdGQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVVUZETDBJN1RVRkRSaXhOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRla0lzVjBGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenROUVVOc1FqczdRVUZGUkN4WlFVRlBMRWxCUVVrc1EwRkJRenRKUVVOaUxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdSVUZEVWpzN096czdPenM3UVVOeVFrUXNZVUZCV1N4RFFVRkRPenM3T3pzN096dHZSRUZGV1N4RFFVRXlRanM3T3pzclEwRkRhRU1zUlVGQmMwSTdPenM3T3pzN096czdjMEpCVHpOQ0xGVkJRVU1zU1VGQk1rWXNSVUZCU3p0UFFVRXZSaXhoUVVGaExFZEJRV1FzU1VGQk1rWXNRMEZCTVVZc1lVRkJZVHRQUVVGRkxIVkNRVUYxUWl4SFFVRjJReXhKUVVFeVJpeERRVUV6UlN4MVFrRkJkVUk3VDBGQlJTeHRRa0ZCYlVJc1IwRkJOVVFzU1VGQk1rWXNRMEZCYkVRc2JVSkJRVzFDTzA5QlFVVXNjVUpCUVhGQ0xFZEJRVzVHTEVsQlFUSkdMRU5CUVRkQ0xIRkNRVUZ4UWp0UFFVRkZMRXRCUVVzc1IwRkJNVVlzU1VGQk1rWXNRMEZCVGl4TFFVRkxPenM3TzBGQlIzaEhMRTlCUVVrc1UwRkJVeXhIUVVGSExHRkJRV0VzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkROVU1zVDBGQlNTeFRRVUZUTEVkQlFVY3NZVUZCWVN4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6czdRVUZGTlVNc1QwRkJTU3hqUVVGakxFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4MVFrRkJkVUlzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXpzN08wRkJSM2hGTEU5QlFVa3NaVUZCWlN4SFFVRkhMSEZDUVVGeFFpeERRVUZETEZOQlFWTXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRenM3UVVGRmJFVXNUMEZCU1N4M1FrRkJkMElzUjBGQlJ5d3dRMEZCWVN4bFFVRmxMRVZCUVVVc1kwRkJZeXhEUVVGRExFTkJRVU03T3pzN08wRkJTemRGTEU5QlFVa3NhVUpCUVdsQ0xFZEJRVWNzZDBKQlFYZENMRU5CUVVNc1IwRkJSeXhEUVVGRExHRkJRVWNzUlVGQlNUdEJRVU14UkN4WlFVRlBMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEYUVVc1EwRkJReXhEUVVGRE96dEJRVVZJTEc5Q1FVRnBRaXhIUVVGSExEQkRRVUZQTEhGRFFVRlJMR2xDUVVGcFFpeERRVUZETEVOQlFVTXNRMEZCUXpzN096dEJRVWwyUkN4UFFVRkpMR0ZCUVdFc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc01FSkJRV2RDTzFsQlFVa3NiVUpCUVcxQ0xFTkJRVU1zWjBKQlFXZENMRU5CUVVNN1NVRkJRU3hEUVVGRExFTkJRVU03TzBGQlJYSkhMR2RDUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEhOQ1FVRlpMRVZCUVVrN1FVRkJSU3hwUWtGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVGRkxFTkJRVU1zUTBGQlF6dEZRVU01UlRzN096czdPenM3UVVOeVEwUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzV1VGQlZ5eFRRVUZUTzBGQlEzQkNMR05CUVdFc1RVRkJUVHRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJRenM3UVVGRlJEczdPenM3T3p0QlEzcEVRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZjc1RVRkJUVHRCUVVOcVFpeFpRVUZYTEVWQlFVVTdRVUZEWWl4WlFVRlhMRTlCUVU4N1FVRkRiRUlzWTBGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN08wRkRNVUpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1dVRkJWeXhOUVVGTk8wRkJRMnBDTEZsQlFWY3NUMEZCVHp0QlFVTnNRaXhaUVVGWExGRkJRVkU3UVVGRGJrSXNZMEZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN096czdPenM3UVVOMFFrRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZsQlFWY3NUMEZCVHp0QlFVTnNRaXhaUVVGWExFVkJRVVU3UVVGRFlpeGpRVUZoTEU5QlFVODdRVUZEY0VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096dEJRMnhDUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZsQlFWY3NSVUZCUlR0QlFVTmlMR05CUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRXNhVUpCUVdkQ08wRkJRMmhDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3T3pzN096czdRVU16UWtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WlFVRlhMRTFCUVUwN1FVRkRha0lzWTBGQllTeFpRVUZaTzBGQlEzcENPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3pzN096czdPenRCUTNCQ1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzV1VGQlZ5eE5RVUZOTzBGQlEycENPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeG5Ra0ZCWlR0QlFVTm1PMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN096czdPenM3TzBGRE5VSkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZjc1JVRkJSVHRCUVVOaU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk96dEJRVVZCT3pzN096czdPMEZEYmtKQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1dVRkJWeXhQUVVGUE8wRkJRMnhDTEZsQlFWY3NUMEZCVHp0QlFVTnNRaXhqUVVGaExFVkJRVVU3UVVGRFpqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96czdPenM3TzBGRFprRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3cwUkVGQk1rUTdRVUZETTBRN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3haUVVGWExFVkJRVVU3UVVGRFlpeGpRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096dEJReTlEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFpRVUZYTEVWQlFVVTdRVUZEWWl4alFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096dEJRM0pEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGbEJRVmNzUlVGQlJUdEJRVU5pTEdOQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN096czdPenRCUTFoQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3haUVVGWExFVkJRVVU3UVVGRFlpeGpRVUZoTEZGQlFWRTdRVUZEY2tJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPenM3T3pzN1FVTmtRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGbEJRVmNzVDBGQlR6dEJRVU5zUWl4alFVRmhMRVZCUVVVN1FVRkRaanRCUVVOQk96dEJRVVZCT3pzN096czdPMEZEWkVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFpRVUZYTEU5QlFVODdRVUZEYkVJc1kwRkJZU3hUUVVGVE8wRkJRM1JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdPenM3T3p0QlEySkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzV1VGQlZ5eEZRVUZGTzBGQlEySXNZMEZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN08wRkRia0pCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFpRVUZYTEZOQlFWTTdRVUZEY0VJc1dVRkJWeXhQUVVGUE8wRkJRMnhDTEdOQlFXRXNVMEZCVXp0QlFVTjBRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU1R0QlFVTktPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN096czdPenRCUTNwRVFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNXVUZCVnl4TlFVRk5PMEZCUTJwQ0xGbEJRVmNzVVVGQlVUdEJRVU51UWl4aFFVRlpMRTlCUVU4N1FVRkRia0lzWTBGQllTeE5RVUZOTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN08wRkRMMEpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZjc1RVRkJUVHRCUVVOcVFpeFpRVUZYTEZGQlFWRTdRVUZEYmtJc1dVRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWY3NUVUZCVFR0QlFVTnFRaXhqUVVGaExFMUJRVTA3UVVGRGJrSTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFJRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJMRTFCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN08wRkRlRU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1dVRkJWeXhOUVVGTk8wRkJRMnBDTEZsQlFWY3NUVUZCVFR0QlFVTnFRaXhqUVVGaExFMUJRVTA3UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96czdPenM3TzBGRGJrSkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzV1VGQlZ5eEZRVUZGTzBGQlEySXNZMEZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFTdzRRa0ZCTmtJc2EwSkJRV3RDTEVWQlFVVTdRVUZEYWtRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96czdPenM3TzBGRGFrTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGbEJRVmNzUlVGQlJUdEJRVU5pTEdOQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNNRUpCUVhsQ0xHdENRVUZyUWl4RlFVRkZPMEZCUXpkRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN096czdPenM3UVVOMlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNXVUZCVnl4RlFVRkZPMEZCUTJJc1dVRkJWeXhGUVVGRk8wRkJRMklzV1VGQlZ5eEZRVUZGTzBGQlEySXNZMEZCWVN4UlFVRlJPMEZCUTNKQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN096czdPenM3UVVNelFrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzV1VGQlZ5eEZRVUZGTzBGQlEySXNXVUZCVnl4UFFVRlBPMEZCUTJ4Q0xHTkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPenM3T3pzN1FVTjJRa0VzWVVGQldTeERRVUZET3pzN096czdPenM0UTBGRlRTeEZRVUZ4UWpzN096dHpRa0ZGZWtJc1ZVRkJReXhUUVVGVExFVkJRVVVzVTBGQlV5eEZRVUZMTzBGQlEzWkRMRTlCUVVrc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1FVRkRja01zVDBGQlNTeFBRVUZQTEVkQlFVY3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6czdRVUZGY2tNc1QwRkJTU3hQUVVGUExFZEJRVWNzYjBOQlFVOHNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZET3p0QlFVVTVReXhWUVVGUExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNZVUZCUnl4RlFVRkpPMEZCUXpOQ0xGTkJRVWtzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVNNVFpeFRRVUZKTEZGQlFWRXNSMEZCUnl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03T3p0QlFVYzVRaXhUUVVGSkxGRkJRVkVzUzBGQlN5eFJRVUZSTEVsQlFVa3NVVUZCVVN4TFFVRkxMRkZCUVZFc1JVRkJSVHM3UVVGRmJFUXNZMEZCVHl4TFFVRkxMRU5CUVVNN1RVRkRaRHM3UVVGRlJDeFpRVUZQTEZGQlFWRXNTMEZCU3l4UlFVRlJMRU5CUVVNN1NVRkRPVUlzUTBGQlF5eERRVUZETzBWQlEwbzdPenM3T3pzN08wRkRkRUpFT3pzN096czdPMEZEUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFpRVUZYTEUxQlFVMDdRVUZEYWtJc1dVRkJWeXhSUVVGUk8wRkJRMjVDTEZsQlFWY3NkVUpCUVhWQ08wRkJRMnhETEZsQlFWY3NSVUZCUlR0QlFVTmlMR05CUVdFc1RVRkJUVHRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkpPMEZCUTBvN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQldTeFRRVUZUTEVkQlFVY3NVMEZCVXl4SFFVRkhMRk5CUVZNN1FVRkROME1zV1VGQlZ5eFRRVUZUTEVkQlFVY3NVMEZCVXp0QlFVTm9RenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096dEJRM1JGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3haUVVGWExFVkJRVVU3UVVGRFlpeFpRVUZYTEVWQlFVVTdRVUZEWWl4WlFVRlhMRTlCUVU4N1FVRkRiRUlzWTBGQllTeFRRVUZUTzBGQlEzUkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096dEJRMnhEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WlFVRlhMRTlCUVU4N1FVRkRiRUlzWTBGQllTeFRRVUZUTzBGQlEzUkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96czdPenM3TzBGRE4wSkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZjc1QwRkJUenRCUVVOc1FpeFpRVUZYTEUxQlFVMDdRVUZEYWtJc1dVRkJWeXhUUVVGVE8wRkJRM0JDTEdOQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN08wRkRia1JCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNXVUZCVnl4RlFVRkZPMEZCUTJJc1dVRkJWeXhGUVVGRk8wRkJRMklzV1VGQlZ5eFRRVUZUTzBGQlEzQkNMRmxCUVZjc1VVRkJVVHRCUVVOdVFpeFpRVUZYTEUxQlFVMDdRVUZEYWtJc1dVRkJWeXhOUVVGTk8wRkJRMnBDTEdOQlFXRXNVVUZCVVR0QlFVTnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdPenM3T3p0QlF6TkNRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZjc1QwRkJUenRCUVVOc1FpeFpRVUZYTEU5QlFVODdRVUZEYkVJc1dVRkJWeXhUUVVGVE8wRkJRM0JDTEZsQlFWY3NVMEZCVXp0QlFVTndRaXhaUVVGWExGRkJRVkU3UVVGRGJrSXNXVUZCVnl4TlFVRk5PMEZCUTJwQ0xGbEJRVmNzVFVGQlRUdEJRVU5xUWl4alFVRmhMRkZCUVZFN1FVRkRja0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCT3pzN096czdPMEZEY2tkQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3haUVVGWExFMUJRVTA3UVVGRGFrSXNXVUZCVnl4TlFVRk5PMEZCUTJwQ0xGbEJRVmNzVTBGQlV6dEJRVU53UWl4WlFVRlhMRk5CUVZNN1FVRkRjRUlzV1VGQlZ5eFJRVUZSTzBGQlEyNUNMRmxCUVZjc1RVRkJUVHRCUVVOcVFpeFpRVUZYTEUxQlFVMDdRVUZEYWtJc1kwRkJZU3hSUVVGUk8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZsQlFWYzdRVUZEV0R0QlFVTkJPMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN096czdPenM3UVVOc1JFRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGbEJRVmNzVFVGQlRUdEJRVU5xUWl4WlFVRlhMRk5CUVZNN1FVRkRjRUlzWTBGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPenM3T3pzN1FVTjBRa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGbEJRVmNzVDBGQlR6dEJRVU5zUWl4WlFVRlhMRTlCUVU4N1FVRkRiRUlzV1VGQlZ5eFBRVUZQTzBGQlEyeENMR05CUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN08wRkRMME5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzV1VGQlZ5eFBRVUZQTzBGQlEyeENMRmxCUVZjc1QwRkJUenRCUVVOc1FpeFpRVUZYTEZOQlFWTTdRVUZEY0VJc1dVRkJWeXhUUVVGVE8wRkJRM0JDTEZsQlFWY3NVVUZCVVR0QlFVTnVRaXhaUVVGWExFMUJRVTA3UVVGRGFrSXNXVUZCVnl4TlFVRk5PMEZCUTJwQ0xHTkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96czdPenM3TzBGRGJFVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3haUVVGWExFOUJRVTg3UVVGRGJFSXNZMEZCWVN4TlFVRk5PMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN096czdPenM3UVVNMVEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZjc1QwRkJUenRCUVVOc1FpeGpRVUZoTEUxQlFVMDdRVUZEYmtJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN096czdPenRCUTNoRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1dVRkJWeXhQUVVGUE8wRkJRMnhDTEdOQlFXRXNUVUZCVFR0QlFVTnVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN096czdPenM3UVVNdlJFRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZjc1JVRkJSVHRCUVVOaUxHTkJRV0VzVVVGQlVUdEJRVU55UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96czdPenM3TzBGRGVrVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNXVUZCVnl4RlFVRkZPMEZCUTJJc1kwRkJZU3hQUVVGUE8wRkJRM0JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96czdPenM3TzBGRFlrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZsQlFWY3NUMEZCVHp0QlFVTnNRaXhqUVVGaExFMUJRVTA3UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096dEJRM0JDUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZsQlFWY3NSVUZCUlR0QlFVTmlMR05CUVdFc1VVRkJVVHRCUVVOeVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96czdPenM3TzBGRFpFRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZjc1QwRkJUenRCUVVOc1FpeGpRVUZoTEUxQlFVMDdRVUZEYmtJN1FVRkRRVHRCUVVOQkxHRkJRVmtzTWtKQlFUSkNPMEZCUTNaRE8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdPenM3T3p0QlEyaERRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WlFVRlhMRTlCUVU4N1FVRkRiRUlzV1VGQlZ5eEZRVUZGTzBGQlEySXNZMEZCWVN4VFFVRlRPMEZCUTNSQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdPenM3T3p0QlF6VkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1dVRkJWeXhQUVVGUE8wRkJRMnhDTEZsQlFWY3NUVUZCVFR0QlFVTnFRaXhaUVVGWExFOUJRVTg3UVVGRGJFSXNZMEZCWVN4RlFVRkZPMEZCUTJZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096dEJRelZDUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGbEJRVmNzVFVGQlRUdEJRVU5xUWl4WlFVRlhMRTlCUVU4N1FVRkRiRUlzV1VGQlZ5eFBRVUZQTzBGQlEyeENMR05CUVdFc1RVRkJUVHRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3T3pzN096czdRVU12UWtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFpRVUZYTEVWQlFVVTdRVUZEWWl4WlFVRlhMRTlCUVU4N1FVRkRiRUlzWTBGQllTeFJRVUZSTzBGQlEzSkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdPenM3T3p0QlF6TkNRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WlFVRlhMRTFCUVUwN1FVRkRha0lzWTBGQllTeEZRVUZGTzBGQlEyWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN08wRkRiRUpCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzV1VGQlZ5eEZRVUZGTzBGQlEySXNZMEZCWVN4TlFVRk5PMEZCUTI1Q08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVRzN096czdPenRCUXpOQ1FUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1dVRkJWeXhGUVVGRk8wRkJRMklzWTBGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3pzN096czdPMEZEV2tFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZjc1UwRkJVenRCUVVOd1FpeFpRVUZYTEVWQlFVVTdRVUZEWWl4WlFVRlhMRTlCUVU4N1FVRkRiRUlzWTBGQllTeFRRVUZUTzBGQlEzUkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN096czdPenM3UVVOMFEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzV1VGQlZ5eEZRVUZGTzBGQlEySXNZMEZCWVN4RlFVRkZPMEZCUTJZN1FVRkRRVHRCUVVOQkxHdENRVUZwUWp0QlFVTnFRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3T3pzN096dEJRMjVDUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3haUVVGWExHRkJRV0U3UVVGRGVFSXNZMEZCWVN4VFFVRlRPMEZCUTNSQ08wRkJRMEU3UVVGRFFUdEJRVU5CTEU5QlFVMHNUMEZCVHl4UFFVRlBMRk5CUVZNc1JVRkJSU3hGUVVGRk8wRkJRMnBETEU5QlFVMHNUMEZCVHl4UFFVRlBMRk5CUVZNc1JVRkJSVHRCUVVNdlFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN08wRkRPVUpCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFpRVUZYTEdGQlFXRTdRVUZEZUVJc1kwRkJZU3hUUVVGVE8wRkJRM1JDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPenM3T3pzN1FVTnNRa0U3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZjc1RVRkJUVHRCUVVOcVFpeFpRVUZYTEZOQlFWTTdRVUZEY0VJc1kwRkJZU3hOUVVGTk8wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN08wRkRNMFJCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3haUVVGWExFMUJRVTA3UVVGRGFrSXNXVUZCVnl4VFFVRlRPMEZCUTNCQ0xHTkJRV0VzVFVGQlRUdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3T3pzN096czdRVU0xUWtFc1lVRkJXU3hEUVVGRE96czdPenM3YzBKQlJVVXNWVUZCUXl4SlFVRnJSaXhGUVVGTE8wOUJRWFJHTEZsQlFWa3NSMEZCWWl4SlFVRnJSaXhEUVVGcVJpeFpRVUZaTzA5QlFVVXNiVUpCUVcxQ0xFZEJRV3hETEVsQlFXdEdMRU5CUVc1RkxHMUNRVUZ0UWp0UFFVRkZMSFZDUVVGMVFpeEhRVUV6UkN4SlFVRnJSaXhEUVVFNVF5eDFRa0ZCZFVJN1QwRkJSU3hWUVVGVkxFZEJRWFpGTEVsQlFXdEdMRU5CUVhKQ0xGVkJRVlU3VDBGQlJTeFJRVUZSTEVkQlFXcEdMRWxCUVd0R0xFTkJRVlFzVVVGQlVUczdPMEZCUlM5R0xFOUJRVWtzV1VGQldTeEhRVUZITEZsQlFWa3NRMEZCUXl4RlFVRkRMRlZCUVZVc1JVRkJWaXhWUVVGVkxFVkJRVVVzVVVGQlVTeEZRVUZTTEZGQlFWRXNSVUZCUXl4RFFVRkRMRU5CUVVNN096dEJRVWQ0UkN4elFrRkJiVUlzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1dVRkJXU3hEUVVGRE96czdPMEZCU1hSRUxHRkJRVlVzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCUXl4UlFVRlJMRVZCUVVzN1FVRkRMMElzTkVKQlFYVkNMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVU1zVVVGQlVTeEZRVUZTTEZGQlFWRXNSVUZCUlN4WlFVRlpMRVZCUVZvc1dVRkJXU3hGUVVGRExFTkJRVU1zUTBGQlF6dEpRVU4yUkN4RFFVRkRMRU5CUVVNN08wRkJSVWdzVlVGQlR5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRPMFZCUXpGQ096czdPenM3T3p0QlEyaENSQ3hoUVVGWkxFTkJRVU03T3pzN096czdPM0ZEUVVWSkxFVkJRVmM3T3pzN1FVRkZOVUlzUzBGQlRTeHpRa0ZCYzBJc1IwRkJSenRCUVVNM1FpeGhRVUZWTEVWQlFVVXNSVUZCUlR0QlFVTmtMRmRCUVZFc1JVRkJSU3h2UWtGQldTeEZRVUZGTzBGQlEzaENMRTlCUVVrc1JVRkJSU3hKUVVGSk8wVkJRMWdzUTBGQlF6czdjMEpCUldFc1ZVRkJReXhKUVVGelFpeEZRVUZMTzA5QlFURkNMRlZCUVZVc1IwRkJXQ3hKUVVGelFpeERRVUZ5UWl4VlFVRlZPMDlCUVVVc1VVRkJVU3hIUVVGeVFpeEpRVUZ6UWl4RFFVRlVMRkZCUVZFN08wRkJRMjVETEU5QlFVa3NXVUZCV1N4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1EwRkJRenM3UVVGRmVrUXNaVUZCV1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhWUVVGVkxFTkJRVU03UVVGRGNrTXNaVUZCV1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU03UVVGRGFrTXNaVUZCV1N4RFFVRkRMRWxCUVVrc1IwRkJSeXh6UWtGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXpzN1FVRkZPVUlzVlVGQlR5eFpRVUZaTEVOQlFVTTdSVUZEY2tJN08xTkJSVkVzYzBKQlFYTkNMRWRCUVhSQ0xITkNRVUZ6UWl4RE96czdPenM3UVVOd1FpOUNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVOQlFXZERPMEZCUTJoRExFMUJRVXM3UVVGRFREczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSGxDUVVGM1FpeFJRVUZSTzBGQlEyaERPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clFrRkJhVUlzVTBGQlV6dEJRVU14UWp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc2RVTkJRWE5ETEVWQlFVVTdRVUZEZUVNc2NVSkJRVzlDTzBGQlEzQkNPMEZCUTBFN1FVRkRRU3hOUVVGTE96dEJRVVZNTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMSE5EUVVGeFF6dEJRVU55UXpzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxHOUNRVUZ0UWl4UFFVRlBPMEZCUXpGQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2RVSkJRWE5DTEZOQlFWTTdRVUZETDBJN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlJ6dEJRVU5JTzBGQlEwRXNiVVJCUVhWQ0xHRkJRV0U3T3p0QlFVZHdReXhKUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4RlFVRkRPenM3T3pzN08wRkRkRkJFTEdGQlFWa3NRMEZCUXpzN096czdRVUZGWWl4TFFVRk5MRzFEUVVGdFF5eEhRVUZITzBGQlF6RkRMRTFCUVVjc1pVRkJReXhKUVVGM1FpeEZRVUZGTzFOQlFYcENMRkZCUVZFc1IwRkJWQ3hKUVVGM1FpeERRVUYyUWl4UlFVRlJPMU5CUVVVc1dVRkJXU3hIUVVGMlFpeEpRVUYzUWl4RFFVRmlMRmxCUVZrN08wRkJRM3BDTEZOQlFVa3NiMEpCUVc5Q0xFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenM3UVVGRmVFUXNVMEZCU1N4RFFVRkRMRzlDUVVGdlFpeEpRVUZKTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8wRkJRek5GTEZkQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzAxQlEyNURPenM3UVVGSFJDeFRRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN1NVRkRlRVE3TzBGQlJVUXNVMEZCVFN4clFrRkJReXhMUVVGM1FpeEZRVUZGTzFOQlFYcENMRkZCUVZFc1IwRkJWQ3hMUVVGM1FpeERRVUYyUWl4UlFVRlJPMU5CUVVVc1dVRkJXU3hIUVVGMlFpeExRVUYzUWl4RFFVRmlMRmxCUVZrN08wRkJRelZDTEZOQlFVa3NiMEpCUVc5Q0xFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenM3UVVGRmVFUXNVMEZCU1N4RFFVRkRMRzlDUVVGdlFpeEpRVUZKTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8wRkJRek5GTEZkQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzAxQlEyNURPenRCUVVWRUxGbEJRVThzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEZUVRN08wVkJSVVlzUTBGQlF6czdjMEpCUldFc1dVRkJUVHRCUVVOdVFpeFBRVUZKTEhWQ1FVRjFRaXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNiVU5CUVcxRExFTkJRVU1zUTBGQlF6czdRVUZGYWtZc01FSkJRWFZDTEVOQlFVTXNZVUZCWVN4SFFVRkhMRVZCUVVVc1EwRkJRenM3UVVGRk0wTXNWVUZCVHl4MVFrRkJkVUlzUTBGQlF6dEZRVU5vUXpzN1UwRkZVU3h0UTBGQmJVTXNSMEZCYmtNc2JVTkJRVzFETEVNN096czdPenRCUTJ4RE5VTXNZVUZCV1N4RFFVRkRPenM3T3pzN08zTkNRVWxGTEVWQlFVVTdPenM3T3pzN1FVTktha0lzWVVGQldTeERRVUZET3pzN096czdjMEpCUlVVc1ZVRkJReXhKUVVGblJTeEZRVUZMTzA5QlFYQkZMR2RDUVVGblFpeEhRVUZxUWl4SlFVRm5SU3hEUVVFdlJDeG5Ra0ZCWjBJN1QwRkJSU3h0UWtGQmJVSXNSMEZCZEVNc1NVRkJaMFVzUTBGQk4wTXNiVUpCUVcxQ08wOUJRVVVzZFVKQlFYVkNMRWRCUVM5RUxFbEJRV2RGTEVOQlFYaENMSFZDUVVGMVFqczdRVUZETjBVc1QwRkJTU3haUVVGWkxFZEJRVWNzYlVKQlFXMUNMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXpzN1FVRkZla1FzVDBGQlNTeFpRVUZaTEVWQlFVVTdPMEZCUldoQ0xGbEJRVThzYlVKQlFXMUNMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXpzN08wRkJSemRETEdsQ1FVRlpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eHJRa0ZCVVN4RlFVRkpPMEZCUXpGRExEaENRVUYxUWl4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRExGRkJRVkVzUlVGQlVpeFJRVUZSTEVWQlFVVXNXVUZCV1N4RlFVRmFMRmxCUVZrc1JVRkJReXhEUVVGRExFTkJRVU03VFVGRE1VUXNRMEZCUXl4RFFVRkRPMGxCUTBvN1JVRkRSaUlzSW1acGJHVWlPaUppZFc1a2JHVXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2xjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNibHh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzBzWEc0Z1hIUmNkRngwYVdRNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHeHZZV1JsWkRvZ1ptRnNjMlZjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1Ykc5aFpHVmtJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWd3S1R0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUhkbFluQmhZMnN2WW05dmRITjBjbUZ3SURsak5XWmxNRGRpTVRkaFpUZzJZVEJoTjJFMVhHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cGJYQnZjblFnWjJWMFNHRnphRkJoY21GdGN5QWdJQ0FnSUNBZ0lDQWdabkp2YlNBbmFtRjJZWE5qY21sd2RDOW5aWFJJWVhOb1VHRnlZVzF6Snp0Y2JtbHRjRzl5ZENCb1lYTm9RMmhoYm1kbFNHRnVaR3hsY2lBZ0lDQWdJQ0JtY205dElDZHFZWFpoYzJOeWFYQjBMMmhoYzJoRGFHRnVaMlZJWVc1a2JHVnlKenRjYm1sdGNHOXlkQ0JyWlhselYybDBhRU5vWVc1blpXUldZV3gxWlhNZ0lDQm1jbTl0SUNkcVlYWmhjMk55YVhCMEwydGxlWE5YYVhSb1EyaGhibWRsWkZaaGJIVmxjeWM3WEc1cGJYQnZjblFnYzNWaWMyTnlhV0psSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabkp2YlNBbmFtRjJZWE5qY21sd2RDOXpkV0p6WTNKcFltVW5PMXh1YVcxd2IzSjBJRk4xWW5OamNtbHdkR2x2YmlBZ0lDQWdJQ0FnSUNBZ0lHWnliMjBnSjJwaGRtRnpZM0pwY0hRdlUzVmljMk55YVhCMGFXOXVKenRjYm1sdGNHOXlkQ0JUZFdKelkzSnBjSFJwYjI1elFubFFjbTl3WlhKMGVTQm1jbTl0SUNkcVlYWmhjMk55YVhCMEwzTjFZbk5qY21sd2RHbHZibk5DZVZCeWIzQmxjblI1Snp0Y2JtbHRjRzl5ZENCemRXSnpZM0pwY0hScGIyNXpRbmxWVlVsRUlDQWdJQ0JtY205dElDZHFZWFpoYzJOeWFYQjBMM04xWW5OamNtbHdkR2x2Ym5OQ2VWVlZTVVFuTzF4dWFXMXdiM0owSUhWdWMzVmljMk55YVdKbElDQWdJQ0FnSUNBZ0lDQWdJR1p5YjIwZ0oycGhkbUZ6WTNKcGNIUXZkVzV6ZFdKelkzSnBZbVVuTzF4dVhHNXNaWFFnYzNWaWMyTnlhWEIwYVc5dWMwSjVVSEp2Y0dWeWRIa2dQU0JUZFdKelkzSnBjSFJwYjI1elFubFFjbTl3WlhKMGVTZ3BPMXh1WEc0dktpQndjbTlpWVdKc2VTQnphRzkxYkdRZ2JXbG5jbUYwWlNCMGFHbHpJSFJ2SUdFZ1ptRmpkRzl5ZVNCaGRDQnpiMjFsSUhCdmFXNTBJSFJ2SUdGMmIybGtJSEJ2YzNOcFlteGxJSE5wYm1kc1pYUnZiaUJwYzNOMVpYTWdLaTljYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ1pXNXpkWEpsU1c1cGRHbGhiR2w2WVhScGIyNG9LU0I3WEc0Z0lDQWdhV1lnS0NGMGFHbHpMbWx1YVhScFlXeHBlbVZrS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbWx1YVhRb0tUdGNiaUFnSUNBZ0lIUm9hWE11YVc1cGRHbGhiR2w2WldRZ1BTQjBjblZsTzF4dUlDQWdJSDFjYmlBZ2ZTeGNiaUFnYVc1cGRDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2QybHVaRzkzTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvSjJoaGMyaGphR0Z1WjJVbkxDQmxkbVZ1ZENBOVBpQjdYRzRnSUNBZ0lDQm9ZWE5vUTJoaGJtZGxTR0Z1Wkd4bGNpaDdYRzRnSUNBZ0lDQWdJR1YyWlc1MExGeHVJQ0FnSUNBZ0lDQm5aWFJJWVhOb1VHRnlZVzF6TEZ4dUlDQWdJQ0FnSUNCclpYbHpWMmwwYUVOb1lXNW5aV1JXWVd4MVpYTXNYRzRnSUNBZ0lDQWdJSE4xWW5OamNtbHdkR2x2Ym5OQ2VWQnliM0JsY25SNUxGeHVJQ0FnSUNBZ0lDQnpkV0p6WTNKcGNIUnBiMjV6UW5sVlZVbEVYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlLVHRjYmlBZ2ZTeGNiaUFnYzNWaWMyTnlhV0psS0hCeWIzQmxjblJwWlhNc0lHTmhiR3hpWVdOcktTQjdYRzRnSUNBZ2RHaHBjeTVsYm5OMWNtVkpibWwwYVdGc2FYcGhkR2x2YmlncE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhOMVluTmpjbWxpWlNoN1hHNGdJQ0FnSUNCVGRXSnpZM0pwY0hScGIyNHNYRzRnSUNBZ0lDQnpkV0p6WTNKcGNIUnBiMjV6UW5sVlZVbEVMRnh1SUNBZ0lDQWdjM1ZpYzJOeWFYQjBhVzl1YzBKNVVISnZjR1Z5ZEhrc1hHNGdJQ0FnSUNCd2NtOXdaWEowYVdWekxGeHVJQ0FnSUNBZ1kyRnNiR0poWTJ0Y2JpQWdJQ0I5S1R0Y2JpQWdmU3hjYmlBZ2RXNXpkV0p6WTNKcFltVW9jM1ZpYzJOeWFYQjBhVzl1VlZWSlJDa2dlMXh1SUNBZ0lIVnVjM1ZpYzJOeWFXSmxLSHRjYmlBZ0lDQWdJSE4xWW5OamNtbHdkR2x2YmxWVlNVUXNYRzRnSUNBZ0lDQnpkV0p6WTNKcGNIUnBiMjV6UW5sVlZVbEVMRnh1SUNBZ0lDQWdjM1ZpYzJOeWFYQjBhVzl1YzBKNVVISnZjR1Z5ZEhsY2JpQWdJQ0I5S1R0Y2JpQWdmVnh1ZlR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmFtRjJZWE5qY21sd2RDOWhjR2t1YW5OY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2gxY213cElEMCtJSHRjYmlBZ2JHVjBJRnRmTENCMWNteElZWE5vWFNBOUlIVnliQzV6Y0d4cGRDZ25JeWNwTzF4dVhHNGdJSFZ5YkVoaGMyZ2dQU0IxY214SVlYTm9JSHg4SUNjbk8xeHVJQ0J5WlhSMWNtNGdkWEpzU0dGemFDNXpjR3hwZENnbkppY3BMbkpsWkhWalpTZ29hR0Z6YUN3Z2EyVjVWbUZzZFdWUVlXbHlLU0E5UGlCN1hHNGdJQ0FnYkdWMElGdHJaWGtzSUhaaGJIVmxYU0E5SUd0bGVWWmhiSFZsVUdGcGNpNXpjR3hwZENnblBTY3BPMXh1WEc0Z0lDQWdhV1lnS0haaGJIVmxJSHg4SUNGcGMwNWhUaWgyWVd4MVpTa3BlMXh1SUNBZ0lDQWdhV1lvYVhOT1lVNG9kbUZzZFdVcEtTQjdYRzRnSUNBZ0lDQWdJR2hoYzJoYmEyVjVYU0E5SUhaaGJIVmxPeUFnWEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JvWVhOb1cydGxlVjBnUFNCd1lYSnpaVVpzYjJGMEtIWmhiSFZsS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0d0bGVTNXNaVzVuZEdnZ1BpQXdLU0I3WEc0Z0lDQWdJQ0JvWVhOb1cydGxlVjBnUFNCMGNuVmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCb1lYTm9PMXh1SUNCOUxDQjdmU2s3WEc1OU8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXFZWFpoYzJOeWFYQjBMMmRsZEVoaGMyaFFZWEpoYlhNdWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JtbHRjRzl5ZENCcGJuUmxjbk5sWTNScGIyNGdabkp2YlNBbmJHOWtZWE5vTDJGeWNtRjVMMmx1ZEdWeWMyVmpkR2x2YmljN1hHNXBiWEJ2Y25RZ1pteGhkSFJsYmlCbWNtOXRJQ2RzYjJSaGMyZ3ZZWEp5WVhrdlpteGhkSFJsYmljN1hHNXBiWEJ2Y25RZ2RXNXBjWFZsSUdaeWIyMGdKMnh2WkdGemFDOWhjbkpoZVM5cGJuUmxjbk5sWTNScGIyNG5PMXh1WEc0dktpQnVaV1ZrY3lCemRXSnpZM0pwY0hScGIyNGdjMlYwY3lCMGJ5QmlaU0JrWldacGJtVmtJSE52YldWM2FHVnlaU0FxTDF4dUx5b2dZVzRnWlhabGJuUWdkMmwwYUNCaElITjFZbk5qY21sd2RHbHZiaUJ6WlhRZ2QybHNiQ0J2Ym14NUlHWnBjbVVnYjI1alpTQXFMMXh1THlvZ1ptOXlJR0ZzYkNCdlppQjBhR1VnWTJoaGJtZGxjeUJwYmlCMGFHVWdjMlYwTGlBcUwxeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9lMmRsZEVoaGMyaFFZWEpoYlhNc0lITjFZbk5qY21sd2RHbHZibk5DZVZCeWIzQmxjblI1TENCemRXSnpZM0pwY0hScGIyNXpRbmxWVlVsRUxDQnJaWGx6VjJsMGFFTm9ZVzVuWldSV1lXeDFaWE1zSUdWMlpXNTBmU2tnUFQ0Z2UxeHVJQ0F2S2lCblpYUWdkR2hsSUc1bGR5QndZWEpoYlhNZ2IySnFaV04wSUNvdlhHNGdJQzhxSUdkbGRDQjBhR1VnYjJ4a0lIQmhjbUZ0Y3lCdlltcGxZM1FnS2k5Y2JpQWdiR1YwSUc5c1pGQmhjbUZ0Y3lBOUlHZGxkRWhoYzJoUVlYSmhiWE1vWlhabGJuUXViMnhrVlZKTUtUdGNiaUFnYkdWMElHNWxkMUJoY21GdGN5QTlJR2RsZEVoaGMyaFFZWEpoYlhNb1pYWmxiblF1Ym1WM1ZWSk1LVHRjYmx4dUlDQnNaWFFnYzNWaWMyTnlhV0psWkV0bGVYTWdQU0JQWW1wbFkzUXVhMlY1Y3loemRXSnpZM0pwY0hScGIyNXpRbmxRY205d1pYSjBlUzV6ZFdKelkzSnBjSFJwYjI1ektUdGNibHh1SUNBdktpQnBaR1Z1ZEdsbWVTQjBhR1VnYTJWNWN5QjNhWFJvSUdOb1lXNW5aV1FnZG1Gc2RXVnpJQ292WEc0Z0lHeGxkQ0JyWlhselYybDBhRU5vWVc1blpYTWdQU0JyWlhselYybDBhRU5vWVc1blpXUldZV3gxWlhNb2IyeGtVR0Z5WVcxekxDQnVaWGRRWVhKaGJYTXBPMXh1WEc0Z0lHeGxkQ0JyWlhselYybDBhRk4xWW5OamNtbGlaV1JGZG1WdWRITWdQU0JwYm5SbGNuTmxZM1JwYjI0b2EyVjVjMWRwZEdoRGFHRnVaMlZ6TENCemRXSnpZM0pwWW1Wa1MyVjVjeWs3WEc1Y2JpQWdMeThnYTJWNWMxZHBkR2hUZFdKelkzSnBZbVZrUlhabGJuUnpMbHh1SUNBdktpQnNiMjl3SUhSb2NtOTFaMmdnWVd4c0lHOW1JSFJvWlNCemRXSnpZM0pwWW1Wa1JYWmxiblFnYm1GdFpYTWdiRzl2YTJsdVp5QXFMMXh1SUNBdktpQm1iM0lnWkdsbVptVnlaVzVqWlhNZ1ltVjBkMlZsYmlCdVpYZFFZWEpoYlhNZ1lXNWtJRzlzWkZCaGNtRnRjeUFxTDF4dUlDQnNaWFFnYzNWaWMyTnlhWEIwYVc5dVZWVkpSSE1nUFNCclpYbHpWMmwwYUZOMVluTmpjbWxpWldSRmRtVnVkSE11YldGd0tHdGxlU0E5UGlCN1hHNGdJQ0FnY21WMGRYSnVJRTlpYW1WamRDNXJaWGx6S0hOMVluTmpjbWx3ZEdsdmJuTkNlVkJ5YjNCbGNuUjVMbk4xWW5OamNtbHdkR2x2Ym5OYmEyVjVYU2s3WEc0Z0lIMHBPMXh1WEc0Z0lITjFZbk5qY21sd2RHbHZibFZWU1VSeklEMGdkVzVwY1hWbEtHWnNZWFIwWlc0b2MzVmljMk55YVhCMGFXOXVWVlZKUkhNcEtUdGNibHh1SUNBdktpQjBjbWxuWjJWeUlHVjJaVzUwY3lCbWIzSWdaV0ZqYUNCdlppQjBhR1VnWlhabGJuUnpJR1p2ZFc1a0lDb3ZYRzVjYmlBZ2JHVjBJSE4xWW5OamNtbHdkR2x2Ym5NZ1BTQnpkV0p6WTNKcGNIUnBiMjVWVlVsRWN5NXRZWEFvYzNWaWMyTnlhWEIwYVc5dVZWVkpSQ0E5UGlCemRXSnpZM0pwY0hScGIyNXpRbmxWVlVsRVczTjFZbk5qY21sd2RHbHZibFZWU1VSZEtUdGNibHh1SUNCemRXSnpZM0pwY0hScGIyNXpMbVp2Y2tWaFkyZ29jM1ZpYzJOeWFYQjBhVzl1SUQwK0lIc2djM1ZpYzJOeWFYQjBhVzl1TG1OaGJHeGlZV05yS0c1bGQxQmhjbUZ0Y3lrN0lIMHBPMXh1ZlR0Y2JseHVYRzVjYmk4cUtpQlhSVUpRUVVOTElFWlBUMVJGVWlBcUtseHVJQ29xSUM0dmFtRjJZWE5qY21sd2RDOW9ZWE5vUTJoaGJtZGxTR0Z1Wkd4bGNpNXFjMXh1SUNvcUx5SXNJblpoY2lCaVlYTmxTVzVrWlhoUFppQTlJSEpsY1hWcGNtVW9KeTR1TDJsdWRHVnlibUZzTDJKaGMyVkpibVJsZUU5bUp5a3NYRzRnSUNBZ1kyRmphR1ZKYm1SbGVFOW1JRDBnY21WeGRXbHlaU2duTGk0dmFXNTBaWEp1WVd3dlkyRmphR1ZKYm1SbGVFOW1KeWtzWEc0Z0lDQWdZM0psWVhSbFEyRmphR1VnUFNCeVpYRjFhWEpsS0NjdUxpOXBiblJsY201aGJDOWpjbVZoZEdWRFlXTm9aU2NwTEZ4dUlDQWdJR2x6UVhKeVlYbE1hV3RsSUQwZ2NtVnhkV2x5WlNnbkxpNHZhVzUwWlhKdVlXd3ZhWE5CY25KaGVVeHBhMlVuS1N4Y2JpQWdJQ0J5WlhOMFVHRnlZVzBnUFNCeVpYRjFhWEpsS0NjdUxpOW1kVzVqZEdsdmJpOXlaWE4wVUdGeVlXMG5LVHRjYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1Z6SUdGdUlHRnljbUY1SUc5bUlIVnVhWEYxWlNCMllXeDFaWE1nZEdoaGRDQmhjbVVnYVc1amJIVmtaV1FnYVc0Z1lXeHNJRzltSUhSb1pTQndjbTkyYVdSbFpGeHVJQ29nWVhKeVlYbHpJSFZ6YVc1bklGdGdVMkZ0WlZaaGJIVmxXbVZ5YjJCZEtHaDBkSEE2THk5bFkyMWhMV2x1ZEdWeWJtRjBhVzl1WVd3dWIzSm5MMlZqYldFdE1qWXlMell1TUM4amMyVmpMWE5oYldWMllXeDFaWHBsY204cFhHNGdLaUJtYjNJZ1pYRjFZV3hwZEhrZ1kyOXRjR0Z5YVhOdmJuTXVYRzRnS2x4dUlDb2dRSE4wWVhScFkxeHVJQ29nUUcxbGJXSmxjazltSUY5Y2JpQXFJRUJqWVhSbFoyOXllU0JCY25KaGVWeHVJQ29nUUhCaGNtRnRJSHN1TGk1QmNuSmhlWDBnVzJGeWNtRjVjMTBnVkdobElHRnljbUY1Y3lCMGJ5QnBibk53WldOMExseHVJQ29nUUhKbGRIVnlibk1nZTBGeWNtRjVmU0JTWlhSMWNtNXpJSFJvWlNCdVpYY2dZWEp5WVhrZ2IyWWdjMmhoY21Wa0lIWmhiSFZsY3k1Y2JpQXFJRUJsZUdGdGNHeGxYRzRnS2lCZkxtbHVkR1Z5YzJWamRHbHZiaWhiTVN3Z01sMHNJRnMwTENBeVhTd2dXeklzSURGZEtUdGNiaUFxSUM4dklEMCtJRnN5WFZ4dUlDb3ZYRzUyWVhJZ2FXNTBaWEp6WldOMGFXOXVJRDBnY21WemRGQmhjbUZ0S0daMWJtTjBhVzl1S0dGeWNtRjVjeWtnZTF4dUlDQjJZWElnYjNSb1RHVnVaM1JvSUQwZ1lYSnlZWGx6TG14bGJtZDBhQ3hjYmlBZ0lDQWdJRzkwYUVsdVpHVjRJRDBnYjNSb1RHVnVaM1JvTEZ4dUlDQWdJQ0FnWTJGamFHVnpJRDBnUVhKeVlYa29iR1Z1WjNSb0tTeGNiaUFnSUNBZ0lHbHVaR1Y0VDJZZ1BTQmlZWE5sU1c1a1pYaFBaaXhjYmlBZ0lDQWdJR2x6UTI5dGJXOXVJRDBnZEhKMVpTeGNiaUFnSUNBZ0lISmxjM1ZzZENBOUlGdGRPMXh1WEc0Z0lIZG9hV3hsSUNodmRHaEpibVJsZUMwdEtTQjdYRzRnSUNBZ2RtRnlJSFpoYkhWbElEMGdZWEp5WVhselcyOTBhRWx1WkdWNFhTQTlJR2x6UVhKeVlYbE1hV3RsS0haaGJIVmxJRDBnWVhKeVlYbHpXMjkwYUVsdVpHVjRYU2tnUHlCMllXeDFaU0E2SUZ0ZE8xeHVJQ0FnSUdOaFkyaGxjMXR2ZEdoSmJtUmxlRjBnUFNBb2FYTkRiMjF0YjI0Z0ppWWdkbUZzZFdVdWJHVnVaM1JvSUQ0OUlERXlNQ2tnUHlCamNtVmhkR1ZEWVdOb1pTaHZkR2hKYm1SbGVDQW1KaUIyWVd4MVpTa2dPaUJ1ZFd4c08xeHVJQ0I5WEc0Z0lIWmhjaUJoY25KaGVTQTlJR0Z5Y21GNWMxc3dYU3hjYmlBZ0lDQWdJR2x1WkdWNElEMGdMVEVzWEc0Z0lDQWdJQ0JzWlc1bmRHZ2dQU0JoY25KaGVTQS9JR0Z5Y21GNUxteGxibWQwYUNBNklEQXNYRzRnSUNBZ0lDQnpaV1Z1SUQwZ1kyRmphR1Z6V3pCZE8xeHVYRzRnSUc5MWRHVnlPbHh1SUNCM2FHbHNaU0FvS3l0cGJtUmxlQ0E4SUd4bGJtZDBhQ2tnZTF4dUlDQWdJSFpoYkhWbElEMGdZWEp5WVhsYmFXNWtaWGhkTzF4dUlDQWdJR2xtSUNnb2MyVmxiaUEvSUdOaFkyaGxTVzVrWlhoUFppaHpaV1Z1TENCMllXeDFaU2tnT2lCcGJtUmxlRTltS0hKbGMzVnNkQ3dnZG1Gc2RXVXNJREFwS1NBOElEQXBJSHRjYmlBZ0lDQWdJSFpoY2lCdmRHaEpibVJsZUNBOUlHOTBhRXhsYm1kMGFEdGNiaUFnSUNBZ0lIZG9hV3hsSUNndExXOTBhRWx1WkdWNEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCallXTm9aU0E5SUdOaFkyaGxjMXR2ZEdoSmJtUmxlRjA3WEc0Z0lDQWdJQ0FnSUdsbUlDZ29ZMkZqYUdVZ1B5QmpZV05vWlVsdVpHVjRUMllvWTJGamFHVXNJSFpoYkhWbEtTQTZJR2x1WkdWNFQyWW9ZWEp5WVhselcyOTBhRWx1WkdWNFhTd2dkbUZzZFdVc0lEQXBLU0E4SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MGFXNTFaU0J2ZFhSbGNqdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdhV1lnS0hObFpXNHBJSHRjYmlBZ0lDQWdJQ0FnYzJWbGJpNXdkWE5vS0haaGJIVmxLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSEpsYzNWc2RDNXdkWE5vS0haaGJIVmxLVHRjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JuMHBPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdsdWRHVnljMlZqZEdsdmJqdGNibHh1WEc1Y2JpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJQ29xSUZkRlFsQkJRMHNnUms5UFZFVlNYRzRnS2lvZ0xpOStMMnh2WkdGemFDOWhjbkpoZVM5cGJuUmxjbk5sWTNScGIyNHVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F6WEc0Z0tpb2diVzlrZFd4bElHTm9kVzVyY3lBOUlEQmNiaUFxS2k4aUxDSjJZWElnYVc1a1pYaFBaazVoVGlBOUlISmxjWFZwY21Vb0p5NHZhVzVrWlhoUFprNWhUaWNwTzF4dVhHNHZLaXBjYmlBcUlGUm9aU0JpWVhObElHbHRjR3hsYldWdWRHRjBhVzl1SUc5bUlHQmZMbWx1WkdWNFQyWmdJSGRwZEdodmRYUWdjM1Z3Y0c5eWRDQm1iM0lnWW1sdVlYSjVJSE5sWVhKamFHVnpMbHh1SUNwY2JpQXFJRUJ3Y21sMllYUmxYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVmU0JoY25KaGVTQlVhR1VnWVhKeVlYa2dkRzhnYzJWaGNtTm9MbHh1SUNvZ1FIQmhjbUZ0SUhzcWZTQjJZV3gxWlNCVWFHVWdkbUZzZFdVZ2RHOGdjMlZoY21Ob0lHWnZjaTVjYmlBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCbWNtOXRTVzVrWlhnZ1ZHaGxJR2x1WkdWNElIUnZJSE5sWVhKamFDQm1jbTl0TGx4dUlDb2dRSEpsZEhWeWJuTWdlMjUxYldKbGNuMGdVbVYwZFhKdWN5QjBhR1VnYVc1a1pYZ2diMllnZEdobElHMWhkR05vWldRZ2RtRnNkV1VzSUdWc2MyVWdZQzB4WUM1Y2JpQXFMMXh1Wm5WdVkzUnBiMjRnWW1GelpVbHVaR1Y0VDJZb1lYSnlZWGtzSUhaaGJIVmxMQ0JtY205dFNXNWtaWGdwSUh0Y2JpQWdhV1lnS0haaGJIVmxJQ0U5UFNCMllXeDFaU2tnZTF4dUlDQWdJSEpsZEhWeWJpQnBibVJsZUU5bVRtRk9LR0Z5Y21GNUxDQm1jbTl0U1c1a1pYZ3BPMXh1SUNCOVhHNGdJSFpoY2lCcGJtUmxlQ0E5SUdaeWIyMUpibVJsZUNBdElERXNYRzRnSUNBZ0lDQnNaVzVuZEdnZ1BTQmhjbkpoZVM1c1pXNW5kR2c3WEc1Y2JpQWdkMmhwYkdVZ0tDc3JhVzVrWlhnZ1BDQnNaVzVuZEdncElIdGNiaUFnSUNCcFppQW9ZWEp5WVhsYmFXNWtaWGhkSUQwOVBTQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdsdVpHVjRPMXh1SUNBZ0lIMWNiaUFnZlZ4dUlDQnlaWFIxY200Z0xURTdYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ltRnpaVWx1WkdWNFQyWTdYRzVjYmx4dVhHNHZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUFxS2lCWFJVSlFRVU5MSUVaUFQxUkZVbHh1SUNvcUlDNHZmaTlzYjJSaGMyZ3ZhVzUwWlhKdVlXd3ZZbUZ6WlVsdVpHVjRUMll1YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBMFhHNGdLaW9nYlc5a2RXeGxJR05vZFc1cmN5QTlJREJjYmlBcUtpOGlMQ0l2S2lwY2JpQXFJRWRsZEhNZ2RHaGxJR2x1WkdWNElHRjBJSGRvYVdOb0lIUm9aU0JtYVhKemRDQnZZMk4xY25KbGJtTmxJRzltSUdCT1lVNWdJR2x6SUdadmRXNWtJR2x1SUdCaGNuSmhlV0F1WEc0Z0tseHVJQ29nUUhCeWFYWmhkR1ZjYmlBcUlFQndZWEpoYlNCN1FYSnlZWGw5SUdGeWNtRjVJRlJvWlNCaGNuSmhlU0IwYnlCelpXRnlZMmd1WEc0Z0tpQkFjR0Z5WVcwZ2UyNTFiV0psY24wZ1puSnZiVWx1WkdWNElGUm9aU0JwYm1SbGVDQjBieUJ6WldGeVkyZ2dabkp2YlM1Y2JpQXFJRUJ3WVhKaGJTQjdZbTl2YkdWaGJuMGdXMlp5YjIxU2FXZG9kRjBnVTNCbFkybG1lU0JwZEdWeVlYUnBibWNnWm5KdmJTQnlhV2RvZENCMGJ5QnNaV1owTGx4dUlDb2dRSEpsZEhWeWJuTWdlMjUxYldKbGNuMGdVbVYwZFhKdWN5QjBhR1VnYVc1a1pYZ2diMllnZEdobElHMWhkR05vWldRZ1lFNWhUbUFzSUdWc2MyVWdZQzB4WUM1Y2JpQXFMMXh1Wm5WdVkzUnBiMjRnYVc1a1pYaFBaazVoVGloaGNuSmhlU3dnWm5KdmJVbHVaR1Y0TENCbWNtOXRVbWxuYUhRcElIdGNiaUFnZG1GeUlHeGxibWQwYUNBOUlHRnljbUY1TG14bGJtZDBhQ3hjYmlBZ0lDQWdJR2x1WkdWNElEMGdabkp2YlVsdVpHVjRJQ3NnS0daeWIyMVNhV2RvZENBL0lEQWdPaUF0TVNrN1hHNWNiaUFnZDJocGJHVWdLQ2htY205dFVtbG5hSFFnUHlCcGJtUmxlQzB0SURvZ0t5dHBibVJsZUNBOElHeGxibWQwYUNrcElIdGNiaUFnSUNCMllYSWdiM1JvWlhJZ1BTQmhjbkpoZVZ0cGJtUmxlRjA3WEc0Z0lDQWdhV1lnS0c5MGFHVnlJQ0U5UFNCdmRHaGxjaWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR2x1WkdWNE8xeHVJQ0FnSUgxY2JpQWdmVnh1SUNCeVpYUjFjbTRnTFRFN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnYVc1a1pYaFBaazVoVGp0Y2JseHVYRzVjYmk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlDb3FJRmRGUWxCQlEwc2dSazlQVkVWU1hHNGdLaW9nTGk5K0wyeHZaR0Z6YUM5cGJuUmxjbTVoYkM5cGJtUmxlRTltVG1GT0xtcHpYRzRnS2lvZ2JXOWtkV3hsSUdsa0lEMGdOVnh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aWRtRnlJR2x6VDJKcVpXTjBJRDBnY21WeGRXbHlaU2duTGk0dmJHRnVaeTlwYzA5aWFtVmpkQ2NwTzF4dVhHNHZLaXBjYmlBcUlFTm9aV05yY3lCcFppQmdkbUZzZFdWZ0lHbHpJR2x1SUdCallXTm9aV0FnYldsdGFXTnJhVzVuSUhSb1pTQnlaWFIxY200Z2MybG5ibUYwZFhKbElHOW1YRzRnS2lCZ1h5NXBibVJsZUU5bVlDQmllU0J5WlhSMWNtNXBibWNnWURCZ0lHbG1JSFJvWlNCMllXeDFaU0JwY3lCbWIzVnVaQ3dnWld4elpTQmdMVEZnTGx4dUlDcGNiaUFxSUVCd2NtbDJZWFJsWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1kyRmphR1VnVkdobElHTmhZMmhsSUhSdklITmxZWEpqYUM1Y2JpQXFJRUJ3WVhKaGJTQjdLbjBnZG1Gc2RXVWdWR2hsSUhaaGJIVmxJSFJ2SUhObFlYSmphQ0JtYjNJdVhHNGdLaUJBY21WMGRYSnVjeUI3Ym5WdFltVnlmU0JTWlhSMWNtNXpJR0F3WUNCcFppQmdkbUZzZFdWZ0lHbHpJR1p2ZFc1a0xDQmxiSE5sSUdBdE1XQXVYRzRnS2k5Y2JtWjFibU4wYVc5dUlHTmhZMmhsU1c1a1pYaFBaaWhqWVdOb1pTd2dkbUZzZFdVcElIdGNiaUFnZG1GeUlHUmhkR0VnUFNCallXTm9aUzVrWVhSaExGeHVJQ0FnSUNBZ2NtVnpkV3gwSUQwZ0tIUjVjR1Z2WmlCMllXeDFaU0E5UFNBbmMzUnlhVzVuSnlCOGZDQnBjMDlpYW1WamRDaDJZV3gxWlNrcElEOGdaR0YwWVM1elpYUXVhR0Z6S0haaGJIVmxLU0E2SUdSaGRHRXVhR0Z6YUZ0MllXeDFaVjA3WEc1Y2JpQWdjbVYwZFhKdUlISmxjM1ZzZENBL0lEQWdPaUF0TVR0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JqWVdOb1pVbHVaR1Y0VDJZN1hHNWNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOXNiMlJoYzJndmFXNTBaWEp1WVd3dlkyRmphR1ZKYm1SbGVFOW1MbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTmx4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lMeW9xWEc0Z0tpQkRhR1ZqYTNNZ2FXWWdZSFpoYkhWbFlDQnBjeUIwYUdVZ1cyeGhibWQxWVdkbElIUjVjR1ZkS0doMGRIQnpPaTh2WlhNMUxtZHBkR2gxWWk1cGJ5OGplRGdwSUc5bUlHQlBZbXBsWTNSZ0xseHVJQ29nS0dVdVp5NGdZWEp5WVhsekxDQm1kVzVqZEdsdmJuTXNJRzlpYW1WamRITXNJSEpsWjJWNFpYTXNJR0J1WlhjZ1RuVnRZbVZ5S0RBcFlDd2dZVzVrSUdCdVpYY2dVM1J5YVc1bktDY25LV0FwWEc0Z0tseHVJQ29nUUhOMFlYUnBZMXh1SUNvZ1FHMWxiV0psY2s5bUlGOWNiaUFxSUVCallYUmxaMjl5ZVNCTVlXNW5YRzRnS2lCQWNHRnlZVzBnZXlwOUlIWmhiSFZsSUZSb1pTQjJZV3gxWlNCMGJ5QmphR1ZqYXk1Y2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JTWlhSMWNtNXpJR0IwY25WbFlDQnBaaUJnZG1Gc2RXVmdJR2x6SUdGdUlHOWlhbVZqZEN3Z1pXeHpaU0JnWm1Gc2MyVmdMbHh1SUNvZ1FHVjRZVzF3YkdWY2JpQXFYRzRnS2lCZkxtbHpUMkpxWldOMEtIdDlLVHRjYmlBcUlDOHZJRDArSUhSeWRXVmNiaUFxWEc0Z0tpQmZMbWx6VDJKcVpXTjBLRnN4TENBeUxDQXpYU2s3WEc0Z0tpQXZMeUE5UGlCMGNuVmxYRzRnS2x4dUlDb2dYeTVwYzA5aWFtVmpkQ2d4S1R0Y2JpQXFJQzh2SUQwK0lHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6VDJKcVpXTjBLSFpoYkhWbEtTQjdYRzRnSUM4dklFRjJiMmxrSUdFZ1ZqZ2dTa2xVSUdKMVp5QnBiaUJEYUhKdmJXVWdNVGt0TWpBdVhHNGdJQzh2SUZObFpTQm9kSFJ3Y3pvdkwyTnZaR1V1WjI5dloyeGxMbU52YlM5d0wzWTRMMmx6YzNWbGN5OWtaWFJoYVd3L2FXUTlNakk1TVNCbWIzSWdiVzl5WlNCa1pYUmhhV3h6TGx4dUlDQjJZWElnZEhsd1pTQTlJSFI1Y0dWdlppQjJZV3gxWlR0Y2JpQWdjbVYwZFhKdUlDRWhkbUZzZFdVZ0ppWWdLSFI1Y0dVZ1BUMGdKMjlpYW1WamRDY2dmSHdnZEhsd1pTQTlQU0FuWm5WdVkzUnBiMjRuS1R0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JwYzA5aWFtVmpkRHRjYmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJ4dlpHRnphQzlzWVc1bkwybHpUMkpxWldOMExtcHpYRzRnS2lvZ2JXOWtkV3hsSUdsa0lEMGdOMXh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aWRtRnlJRk5sZEVOaFkyaGxJRDBnY21WeGRXbHlaU2duTGk5VFpYUkRZV05vWlNjcExGeHVJQ0FnSUdkbGRFNWhkR2wyWlNBOUlISmxjWFZwY21Vb0p5NHZaMlYwVG1GMGFYWmxKeWs3WEc1Y2JpOHFLaUJPWVhScGRtVWdiV1YwYUc5a0lISmxabVZ5Wlc1alpYTXVJQ292WEc1MllYSWdVMlYwSUQwZ1oyVjBUbUYwYVhabEtHZHNiMkpoYkN3Z0oxTmxkQ2NwTzF4dVhHNHZLaUJPWVhScGRtVWdiV1YwYUc5a0lISmxabVZ5Wlc1alpYTWdabTl5SUhSb2IzTmxJSGRwZEdnZ2RHaGxJSE5oYldVZ2JtRnRaU0JoY3lCdmRHaGxjaUJnYkc5a1lYTm9ZQ0J0WlhSb2IyUnpMaUFxTDF4dWRtRnlJRzVoZEdsMlpVTnlaV0YwWlNBOUlHZGxkRTVoZEdsMlpTaFBZbXBsWTNRc0lDZGpjbVZoZEdVbktUdGNibHh1THlvcVhHNGdLaUJEY21WaGRHVnpJR0VnWUZObGRHQWdZMkZqYUdVZ2IySnFaV04wSUhSdklHOXdkR2x0YVhwbElHeHBibVZoY2lCelpXRnlZMmhsY3lCdlppQnNZWEpuWlNCaGNuSmhlWE11WEc0Z0tseHVJQ29nUUhCeWFYWmhkR1ZjYmlBcUlFQndZWEpoYlNCN1FYSnlZWGw5SUZ0MllXeDFaWE5kSUZSb1pTQjJZV3gxWlhNZ2RHOGdZMkZqYUdVdVhHNGdLaUJBY21WMGRYSnVjeUI3Ym5Wc2JIeFBZbXBsWTNSOUlGSmxkSFZ5Ym5NZ2RHaGxJRzVsZHlCallXTm9aU0J2WW1wbFkzUWdhV1lnWUZObGRHQWdhWE1nYzNWd2NHOXlkR1ZrTENCbGJITmxJR0J1ZFd4c1lDNWNiaUFxTDF4dVpuVnVZM1JwYjI0Z1kzSmxZWFJsUTJGamFHVW9kbUZzZFdWektTQjdYRzRnSUhKbGRIVnliaUFvYm1GMGFYWmxRM0psWVhSbElDWW1JRk5sZENrZ1B5QnVaWGNnVTJWMFEyRmphR1VvZG1Gc2RXVnpLU0E2SUc1MWJHdzdYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1kzSmxZWFJsUTJGamFHVTdYRzVjYmx4dVhHNHZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUFxS2lCWFJVSlFRVU5MSUVaUFQxUkZVbHh1SUNvcUlDNHZmaTlzYjJSaGMyZ3ZhVzUwWlhKdVlXd3ZZM0psWVhSbFEyRmphR1V1YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBNFhHNGdLaW9nYlc5a2RXeGxJR05vZFc1cmN5QTlJREJjYmlBcUtpOGlMQ0oyWVhJZ1kyRmphR1ZRZFhOb0lEMGdjbVZ4ZFdseVpTZ25MaTlqWVdOb1pWQjFjMmduS1N4Y2JpQWdJQ0JuWlhST1lYUnBkbVVnUFNCeVpYRjFhWEpsS0NjdUwyZGxkRTVoZEdsMlpTY3BPMXh1WEc0dktpb2dUbUYwYVhabElHMWxkR2h2WkNCeVpXWmxjbVZ1WTJWekxpQXFMMXh1ZG1GeUlGTmxkQ0E5SUdkbGRFNWhkR2wyWlNobmJHOWlZV3dzSUNkVFpYUW5LVHRjYmx4dUx5b2dUbUYwYVhabElHMWxkR2h2WkNCeVpXWmxjbVZ1WTJWeklHWnZjaUIwYUc5elpTQjNhWFJvSUhSb1pTQnpZVzFsSUc1aGJXVWdZWE1nYjNSb1pYSWdZR3h2WkdGemFHQWdiV1YwYUc5a2N5NGdLaTljYm5aaGNpQnVZWFJwZG1WRGNtVmhkR1VnUFNCblpYUk9ZWFJwZG1Vb1QySnFaV04wTENBblkzSmxZWFJsSnlrN1hHNWNiaThxS2x4dUlDcGNiaUFxSUVOeVpXRjBaWE1nWVNCallXTm9aU0J2WW1wbFkzUWdkRzhnYzNSdmNtVWdkVzVwY1hWbElIWmhiSFZsY3k1Y2JpQXFYRzRnS2lCQWNISnBkbUYwWlZ4dUlDb2dRSEJoY21GdElIdEJjbkpoZVgwZ1czWmhiSFZsYzEwZ1ZHaGxJSFpoYkhWbGN5QjBieUJqWVdOb1pTNWNiaUFxTDF4dVpuVnVZM1JwYjI0Z1UyVjBRMkZqYUdVb2RtRnNkV1Z6S1NCN1hHNGdJSFpoY2lCc1pXNW5kR2dnUFNCMllXeDFaWE1nUHlCMllXeDFaWE11YkdWdVozUm9JRG9nTUR0Y2JseHVJQ0IwYUdsekxtUmhkR0VnUFNCN0lDZG9ZWE5vSnpvZ2JtRjBhWFpsUTNKbFlYUmxLRzUxYkd3cExDQW5jMlYwSnpvZ2JtVjNJRk5sZENCOU8xeHVJQ0IzYUdsc1pTQW9iR1Z1WjNSb0xTMHBJSHRjYmlBZ0lDQjBhR2x6TG5CMWMyZ29kbUZzZFdWelcyeGxibWQwYUYwcE8xeHVJQ0I5WEc1OVhHNWNiaTh2SUVGa1pDQm1kVzVqZEdsdmJuTWdkRzhnZEdobElHQlRaWFJnSUdOaFkyaGxMbHh1VTJWMFEyRmphR1V1Y0hKdmRHOTBlWEJsTG5CMWMyZ2dQU0JqWVdOb1pWQjFjMmc3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1UyVjBRMkZqYUdVN1hHNWNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOXNiMlJoYzJndmFXNTBaWEp1WVd3dlUyVjBRMkZqYUdVdWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQTVYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENKMllYSWdhWE5QWW1wbFkzUWdQU0J5WlhGMWFYSmxLQ2N1TGk5c1lXNW5MMmx6VDJKcVpXTjBKeWs3WEc1Y2JpOHFLbHh1SUNvZ1FXUmtjeUJnZG1Gc2RXVmdJSFJ2SUhSb1pTQmpZV05vWlM1Y2JpQXFYRzRnS2lCQWNISnBkbUYwWlZ4dUlDb2dRRzVoYldVZ2NIVnphRnh1SUNvZ1FHMWxiV0psY2s5bUlGTmxkRU5oWTJobFhHNGdLaUJBY0dGeVlXMGdleXA5SUhaaGJIVmxJRlJvWlNCMllXeDFaU0IwYnlCallXTm9aUzVjYmlBcUwxeHVablZ1WTNScGIyNGdZMkZqYUdWUWRYTm9LSFpoYkhWbEtTQjdYRzRnSUhaaGNpQmtZWFJoSUQwZ2RHaHBjeTVrWVhSaE8xeHVJQ0JwWmlBb2RIbHdaVzltSUhaaGJIVmxJRDA5SUNkemRISnBibWNuSUh4OElHbHpUMkpxWldOMEtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUdSaGRHRXVjMlYwTG1Ga1pDaDJZV3gxWlNrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1pHRjBZUzVvWVhOb1czWmhiSFZsWFNBOUlIUnlkV1U3WEc0Z0lIMWNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCallXTm9aVkIxYzJnN1hHNWNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOXNiMlJoYzJndmFXNTBaWEp1WVd3dlkyRmphR1ZRZFhOb0xtcHpYRzRnS2lvZ2JXOWtkV3hsSUdsa0lEMGdNVEJjYmlBcUtpQnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01GeHVJQ29xTHlJc0luWmhjaUJwYzA1aGRHbDJaU0E5SUhKbGNYVnBjbVVvSnk0dUwyeGhibWN2YVhOT1lYUnBkbVVuS1R0Y2JseHVMeW9xWEc0Z0tpQkhaWFJ6SUhSb1pTQnVZWFJwZG1VZ1puVnVZM1JwYjI0Z1lYUWdZR3RsZVdBZ2IyWWdZRzlpYW1WamRHQXVYRzRnS2x4dUlDb2dRSEJ5YVhaaGRHVmNiaUFxSUVCd1lYSmhiU0I3VDJKcVpXTjBmU0J2WW1wbFkzUWdWR2hsSUc5aWFtVmpkQ0IwYnlCeGRXVnllUzVjYmlBcUlFQndZWEpoYlNCN2MzUnlhVzVuZlNCclpYa2dWR2hsSUd0bGVTQnZaaUIwYUdVZ2JXVjBhRzlrSUhSdklHZGxkQzVjYmlBcUlFQnlaWFIxY201eklIc3FmU0JTWlhSMWNtNXpJSFJvWlNCbWRXNWpkR2x2YmlCcFppQnBkQ2R6SUc1aGRHbDJaU3dnWld4elpTQmdkVzVrWldacGJtVmtZQzVjYmlBcUwxeHVablZ1WTNScGIyNGdaMlYwVG1GMGFYWmxLRzlpYW1WamRDd2dhMlY1S1NCN1hHNGdJSFpoY2lCMllXeDFaU0E5SUc5aWFtVmpkQ0E5UFNCdWRXeHNJRDhnZFc1a1pXWnBibVZrSURvZ2IySnFaV04wVzJ0bGVWMDdYRzRnSUhKbGRIVnliaUJwYzA1aGRHbDJaU2gyWVd4MVpTa2dQeUIyWVd4MVpTQTZJSFZ1WkdWbWFXNWxaRHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm5aWFJPWVhScGRtVTdYRzVjYmx4dVhHNHZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUFxS2lCWFJVSlFRVU5MSUVaUFQxUkZVbHh1SUNvcUlDNHZmaTlzYjJSaGMyZ3ZhVzUwWlhKdVlXd3ZaMlYwVG1GMGFYWmxMbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTVRGY2JpQXFLaUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNRnh1SUNvcUx5SXNJblpoY2lCcGMwWjFibU4wYVc5dUlEMGdjbVZ4ZFdseVpTZ25MaTlwYzBaMWJtTjBhVzl1Snlrc1hHNGdJQ0FnYVhOUFltcGxZM1JNYVd0bElEMGdjbVZ4ZFdseVpTZ25MaTR2YVc1MFpYSnVZV3d2YVhOUFltcGxZM1JNYVd0bEp5azdYRzVjYmk4cUtpQlZjMlZrSUhSdklHUmxkR1ZqZENCb2IzTjBJR052Ym5OMGNuVmpkRzl5Y3lBb1UyRm1ZWEpwSUQ0Z05Ta3VJQ292WEc1MllYSWdjbVZKYzBodmMzUkRkRzl5SUQwZ0wxNWNYRnR2WW1wbFkzUWdMaXMvUTI5dWMzUnlkV04wYjNKY1hGMGtMenRjYmx4dUx5b3FJRlZ6WldRZ1ptOXlJRzVoZEdsMlpTQnRaWFJvYjJRZ2NtVm1aWEpsYm1ObGN5NGdLaTljYm5aaGNpQnZZbXBsWTNSUWNtOTBieUE5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1U3WEc1Y2JpOHFLaUJWYzJWa0lIUnZJSEpsYzI5c2RtVWdkR2hsSUdSbFkyOXRjR2xzWldRZ2MyOTFjbU5sSUc5bUlHWjFibU4wYVc5dWN5NGdLaTljYm5aaGNpQm1ibFJ2VTNSeWFXNW5JRDBnUm5WdVkzUnBiMjR1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTzF4dVhHNHZLaW9nVlhObFpDQjBieUJqYUdWamF5QnZZbXBsWTNSeklHWnZjaUJ2ZDI0Z2NISnZjR1Z5ZEdsbGN5NGdLaTljYm5aaGNpQm9ZWE5QZDI1UWNtOXdaWEowZVNBOUlHOWlhbVZqZEZCeWIzUnZMbWhoYzA5M2JsQnliM0JsY25SNU8xeHVYRzR2S2lvZ1ZYTmxaQ0IwYnlCa1pYUmxZM1FnYVdZZ1lTQnRaWFJvYjJRZ2FYTWdibUYwYVhabExpQXFMMXh1ZG1GeUlISmxTWE5PWVhScGRtVWdQU0JTWldkRmVIQW9KMTRuSUN0Y2JpQWdabTVVYjFOMGNtbHVaeTVqWVd4c0tHaGhjMDkzYmxCeWIzQmxjblI1S1M1eVpYQnNZV05sS0M5YlhGeGNYRjRrTGlvclB5Z3BXMXhjWFh0OWZGMHZaeXdnSjF4Y1hGd2tKaWNwWEc0Z0lDNXlaWEJzWVdObEtDOW9ZWE5QZDI1UWNtOXdaWEowZVh3b1puVnVZM1JwYjI0cExpby9LRDg5WEZ4Y1hGeGNLQ2w4SUdadmNpQXVLejhvUHoxY1hGeGNYRnhkS1M5bkxDQW5KREV1S2o4bktTQXJJQ2NrSjF4dUtUdGNibHh1THlvcVhHNGdLaUJEYUdWamEzTWdhV1lnWUhaaGJIVmxZQ0JwY3lCaElHNWhkR2wyWlNCbWRXNWpkR2x2Ymk1Y2JpQXFYRzRnS2lCQWMzUmhkR2xqWEc0Z0tpQkFiV1Z0WW1WeVQyWWdYMXh1SUNvZ1FHTmhkR1ZuYjNKNUlFeGhibWRjYmlBcUlFQndZWEpoYlNCN0tuMGdkbUZzZFdVZ1ZHaGxJSFpoYkhWbElIUnZJR05vWldOckxseHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZKbGRIVnlibk1nWUhSeWRXVmdJR2xtSUdCMllXeDFaV0FnYVhNZ1lTQnVZWFJwZG1VZ1puVnVZM1JwYjI0c0lHVnNjMlVnWUdaaGJITmxZQzVjYmlBcUlFQmxlR0Z0Y0d4bFhHNGdLbHh1SUNvZ1h5NXBjMDVoZEdsMlpTaEJjbkpoZVM1d2NtOTBiM1I1Y0dVdWNIVnphQ2s3WEc0Z0tpQXZMeUE5UGlCMGNuVmxYRzRnS2x4dUlDb2dYeTVwYzA1aGRHbDJaU2hmS1R0Y2JpQXFJQzh2SUQwK0lHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6VG1GMGFYWmxLSFpoYkhWbEtTQjdYRzRnSUdsbUlDaDJZV3gxWlNBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0I5WEc0Z0lHbG1JQ2hwYzBaMWJtTjBhVzl1S0haaGJIVmxLU2tnZTF4dUlDQWdJSEpsZEhWeWJpQnlaVWx6VG1GMGFYWmxMblJsYzNRb1ptNVViMU4wY21sdVp5NWpZV3hzS0haaGJIVmxLU2s3WEc0Z0lIMWNiaUFnY21WMGRYSnVJR2x6VDJKcVpXTjBUR2xyWlNoMllXeDFaU2tnSmlZZ2NtVkpjMGh2YzNSRGRHOXlMblJsYzNRb2RtRnNkV1VwTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR2x6VG1GMGFYWmxPMXh1WEc1Y2JseHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnS2lvZ1YwVkNVRUZEU3lCR1QwOVVSVkpjYmlBcUtpQXVMMzR2Ykc5a1lYTm9MMnhoYm1jdmFYTk9ZWFJwZG1VdWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXhNbHh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aWRtRnlJR2x6VDJKcVpXTjBJRDBnY21WeGRXbHlaU2duTGk5cGMwOWlhbVZqZENjcE8xeHVYRzR2S2lvZ1lFOWlhbVZqZENOMGIxTjBjbWx1WjJBZ2NtVnpkV3gwSUhKbFptVnlaVzVqWlhNdUlDb3ZYRzUyWVhJZ1puVnVZMVJoWnlBOUlDZGJiMkpxWldOMElFWjFibU4wYVc5dVhTYzdYRzVjYmk4cUtpQlZjMlZrSUdadmNpQnVZWFJwZG1VZ2JXVjBhRzlrSUhKbFptVnlaVzVqWlhNdUlDb3ZYRzUyWVhJZ2IySnFaV04wVUhKdmRHOGdQU0JQWW1wbFkzUXVjSEp2ZEc5MGVYQmxPMXh1WEc0dktpcGNiaUFxSUZWelpXUWdkRzhnY21WemIyeDJaU0IwYUdVZ1cyQjBiMU4wY21sdVoxUmhaMkJkS0doMGRIQTZMeTlsWTIxaExXbHVkR1Z5Ym1GMGFXOXVZV3d1YjNKbkwyVmpiV0V0TWpZeUx6WXVNQzhqYzJWakxXOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOXpkSEpwYm1jcFhHNGdLaUJ2WmlCMllXeDFaWE11WEc0Z0tpOWNiblpoY2lCdlltcFViMU4wY21sdVp5QTlJRzlpYW1WamRGQnliM1J2TG5SdlUzUnlhVzVuTzF4dVhHNHZLaXBjYmlBcUlFTm9aV05yY3lCcFppQmdkbUZzZFdWZ0lHbHpJR05zWVhOemFXWnBaV1FnWVhNZ1lTQmdSblZ1WTNScGIyNWdJRzlpYW1WamRDNWNiaUFxWEc0Z0tpQkFjM1JoZEdsalhHNGdLaUJBYldWdFltVnlUMllnWDF4dUlDb2dRR05oZEdWbmIzSjVJRXhoYm1kY2JpQXFJRUJ3WVhKaGJTQjdLbjBnZG1Gc2RXVWdWR2hsSUhaaGJIVmxJSFJ2SUdOb1pXTnJMbHh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGSmxkSFZ5Ym5NZ1lIUnlkV1ZnSUdsbUlHQjJZV3gxWldBZ2FYTWdZMjl5Y21WamRHeDVJR05zWVhOemFXWnBaV1FzSUdWc2MyVWdZR1poYkhObFlDNWNiaUFxSUVCbGVHRnRjR3hsWEc0Z0tseHVJQ29nWHk1cGMwWjFibU4wYVc5dUtGOHBPMXh1SUNvZ0x5OGdQVDRnZEhKMVpWeHVJQ3BjYmlBcUlGOHVhWE5HZFc1amRHbHZiaWd2WVdKakx5azdYRzRnS2lBdkx5QTlQaUJtWVd4elpWeHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwWjFibU4wYVc5dUtIWmhiSFZsS1NCN1hHNGdJQzh2SUZSb1pTQjFjMlVnYjJZZ1lFOWlhbVZqZENOMGIxTjBjbWx1WjJBZ1lYWnZhV1J6SUdsemMzVmxjeUIzYVhSb0lIUm9aU0JnZEhsd1pXOW1ZQ0J2Y0dWeVlYUnZjbHh1SUNBdkx5QnBiaUJ2YkdSbGNpQjJaWEp6YVc5dWN5QnZaaUJEYUhKdmJXVWdZVzVrSUZOaFptRnlhU0IzYUdsamFDQnlaWFIxY200Z0oyWjFibU4wYVc5dUp5Qm1iM0lnY21WblpYaGxjMXh1SUNBdkx5QmhibVFnVTJGbVlYSnBJRGdnZDJocFkyZ2djbVYwZFhKdWN5QW5iMkpxWldOMEp5Qm1iM0lnZEhsd1pXUWdZWEp5WVhrZ1kyOXVjM1J5ZFdOMGIzSnpMbHh1SUNCeVpYUjFjbTRnYVhOUFltcGxZM1FvZG1Gc2RXVXBJQ1ltSUc5aWFsUnZVM1J5YVc1bkxtTmhiR3dvZG1Gc2RXVXBJRDA5SUdaMWJtTlVZV2M3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdhWE5HZFc1amRHbHZianRjYmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJ4dlpHRnphQzlzWVc1bkwybHpSblZ1WTNScGIyNHVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F4TTF4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lMeW9xWEc0Z0tpQkRhR1ZqYTNNZ2FXWWdZSFpoYkhWbFlDQnBjeUJ2WW1wbFkzUXRiR2xyWlM1Y2JpQXFYRzRnS2lCQWNISnBkbUYwWlZ4dUlDb2dRSEJoY21GdElIc3FmU0IyWVd4MVpTQlVhR1VnZG1Gc2RXVWdkRzhnWTJobFkyc3VYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1VtVjBkWEp1Y3lCZ2RISjFaV0FnYVdZZ1lIWmhiSFZsWUNCcGN5QnZZbXBsWTNRdGJHbHJaU3dnWld4elpTQmdabUZzYzJWZ0xseHVJQ292WEc1bWRXNWpkR2x2YmlCcGMwOWlhbVZqZEV4cGEyVW9kbUZzZFdVcElIdGNiaUFnY21WMGRYSnVJQ0VoZG1Gc2RXVWdKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlJQ2R2WW1wbFkzUW5PMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHbHpUMkpxWldOMFRHbHJaVHRjYmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzlwYzA5aWFtVmpkRXhwYTJVdWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXhORnh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aWRtRnlJR2RsZEV4bGJtZDBhQ0E5SUhKbGNYVnBjbVVvSnk0dloyVjBUR1Z1WjNSb0p5a3NYRzRnSUNBZ2FYTk1aVzVuZEdnZ1BTQnlaWEYxYVhKbEtDY3VMMmx6VEdWdVozUm9KeWs3WEc1Y2JpOHFLbHh1SUNvZ1EyaGxZMnR6SUdsbUlHQjJZV3gxWldBZ2FYTWdZWEp5WVhrdGJHbHJaUzVjYmlBcVhHNGdLaUJBY0hKcGRtRjBaVnh1SUNvZ1FIQmhjbUZ0SUhzcWZTQjJZV3gxWlNCVWFHVWdkbUZzZFdVZ2RHOGdZMmhsWTJzdVhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVW1WMGRYSnVjeUJnZEhKMVpXQWdhV1lnWUhaaGJIVmxZQ0JwY3lCaGNuSmhlUzFzYVd0bExDQmxiSE5sSUdCbVlXeHpaV0F1WEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6UVhKeVlYbE1hV3RsS0haaGJIVmxLU0I3WEc0Z0lISmxkSFZ5YmlCMllXeDFaU0FoUFNCdWRXeHNJQ1ltSUdselRHVnVaM1JvS0dkbGRFeGxibWQwYUNoMllXeDFaU2twTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR2x6UVhKeVlYbE1hV3RsTzF4dVhHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dmJHOWtZWE5vTDJsdWRHVnlibUZzTDJselFYSnlZWGxNYVd0bExtcHpYRzRnS2lvZ2JXOWtkV3hsSUdsa0lEMGdNVFZjYmlBcUtpQnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01GeHVJQ29xTHlJc0luWmhjaUJpWVhObFVISnZjR1Z5ZEhrZ1BTQnlaWEYxYVhKbEtDY3VMMkpoYzJWUWNtOXdaWEowZVNjcE8xeHVYRzR2S2lwY2JpQXFJRWRsZEhNZ2RHaGxJRndpYkdWdVozUm9YQ0lnY0hKdmNHVnlkSGtnZG1Gc2RXVWdiMllnWUc5aWFtVmpkR0F1WEc0Z0tseHVJQ29nS2lwT2IzUmxPaW9xSUZSb2FYTWdablZ1WTNScGIyNGdhWE1nZFhObFpDQjBieUJoZG05cFpDQmhJRnRLU1ZRZ1luVm5YU2hvZEhSd2N6b3ZMMkoxWjNNdWQyVmlhMmwwTG05eVp5OXphRzkzWDJKMVp5NWpaMmsvYVdROU1UUXlOemt5S1Z4dUlDb2dkR2hoZENCaFptWmxZM1J6SUZOaFptRnlhU0J2YmlCaGRDQnNaV0Z6ZENCcFQxTWdPQzR4TFRndU15QkJVazAyTkM1Y2JpQXFYRzRnS2lCQWNISnBkbUYwWlZ4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHOWlhbVZqZENCVWFHVWdiMkpxWldOMElIUnZJSEYxWlhKNUxseHVJQ29nUUhKbGRIVnlibk1nZXlwOUlGSmxkSFZ5Ym5NZ2RHaGxJRndpYkdWdVozUm9YQ0lnZG1Gc2RXVXVYRzRnS2k5Y2JuWmhjaUJuWlhSTVpXNW5kR2dnUFNCaVlYTmxVSEp2Y0dWeWRIa29KMnhsYm1kMGFDY3BPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdkbGRFeGxibWQwYUR0Y2JseHVYRzVjYmk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlDb3FJRmRGUWxCQlEwc2dSazlQVkVWU1hHNGdLaW9nTGk5K0wyeHZaR0Z6YUM5cGJuUmxjbTVoYkM5blpYUk1aVzVuZEdndWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXhObHh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aUx5b3FYRzRnS2lCVWFHVWdZbUZ6WlNCcGJYQnNaVzFsYm5SaGRHbHZiaUJ2WmlCZ1h5NXdjbTl3WlhKMGVXQWdkMmwwYUc5MWRDQnpkWEJ3YjNKMElHWnZjaUJrWldWd0lIQmhkR2h6TGx4dUlDcGNiaUFxSUVCd2NtbDJZWFJsWEc0Z0tpQkFjR0Z5WVcwZ2UzTjBjbWx1WjMwZ2EyVjVJRlJvWlNCclpYa2diMllnZEdobElIQnliM0JsY25SNUlIUnZJR2RsZEM1Y2JpQXFJRUJ5WlhSMWNtNXpJSHRHZFc1amRHbHZibjBnVW1WMGRYSnVjeUIwYUdVZ2JtVjNJR1oxYm1OMGFXOXVMbHh1SUNvdlhHNW1kVzVqZEdsdmJpQmlZWE5sVUhKdmNHVnlkSGtvYTJWNUtTQjdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaWh2WW1wbFkzUXBJSHRjYmlBZ0lDQnlaWFIxY200Z2IySnFaV04wSUQwOUlHNTFiR3dnUHlCMWJtUmxabWx1WldRZ09pQnZZbXBsWTNSYmEyVjVYVHRjYmlBZ2ZUdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCaVlYTmxVSEp2Y0dWeWRIazdYRzVjYmx4dVhHNHZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUFxS2lCWFJVSlFRVU5MSUVaUFQxUkZVbHh1SUNvcUlDNHZmaTlzYjJSaGMyZ3ZhVzUwWlhKdVlXd3ZZbUZ6WlZCeWIzQmxjblI1TG1welhHNGdLaW9nYlc5a2RXeGxJR2xrSUQwZ01UZGNiaUFxS2lCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUZ4dUlDb3FMeUlzSWk4cUtseHVJQ29nVlhObFpDQmhjeUIwYUdVZ1cyMWhlR2x0ZFcwZ2JHVnVaM1JvWFNob2RIUndPaTh2WldOdFlTMXBiblJsY201aGRHbHZibUZzTG05eVp5OWxZMjFoTFRJMk1pODJMakF2STNObFl5MXVkVzFpWlhJdWJXRjRYM05oWm1WZmFXNTBaV2RsY2lsY2JpQXFJRzltSUdGdUlHRnljbUY1TFd4cGEyVWdkbUZzZFdVdVhHNGdLaTljYm5aaGNpQk5RVmhmVTBGR1JWOUpUbFJGUjBWU0lEMGdPVEF3TnpFNU9USTFORGMwTURrNU1UdGNibHh1THlvcVhHNGdLaUJEYUdWamEzTWdhV1lnWUhaaGJIVmxZQ0JwY3lCaElIWmhiR2xrSUdGeWNtRjVMV3hwYTJVZ2JHVnVaM1JvTGx4dUlDcGNiaUFxSUNvcVRtOTBaVG9xS2lCVWFHbHpJR1oxYm1OMGFXOXVJR2x6SUdKaGMyVmtJRzl1SUZ0Z1ZHOU1aVzVuZEdoZ1hTaG9kSFJ3T2k4dlpXTnRZUzFwYm5SbGNtNWhkR2x2Ym1Gc0xtOXlaeTlsWTIxaExUSTJNaTgyTGpBdkkzTmxZeTEwYjJ4bGJtZDBhQ2t1WEc0Z0tseHVJQ29nUUhCeWFYWmhkR1ZjYmlBcUlFQndZWEpoYlNCN0tuMGdkbUZzZFdVZ1ZHaGxJSFpoYkhWbElIUnZJR05vWldOckxseHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZKbGRIVnlibk1nWUhSeWRXVmdJR2xtSUdCMllXeDFaV0FnYVhNZ1lTQjJZV3hwWkNCc1pXNW5kR2dzSUdWc2MyVWdZR1poYkhObFlDNWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FYTk1aVzVuZEdnb2RtRnNkV1VwSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCMllXeDFaU0E5UFNBbmJuVnRZbVZ5SnlBbUppQjJZV3gxWlNBK0lDMHhJQ1ltSUhaaGJIVmxJQ1VnTVNBOVBTQXdJQ1ltSUhaaGJIVmxJRHc5SUUxQldGOVRRVVpGWDBsT1ZFVkhSVkk3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdhWE5NWlc1bmRHZzdYRzVjYmx4dVhHNHZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUFxS2lCWFJVSlFRVU5MSUVaUFQxUkZVbHh1SUNvcUlDNHZmaTlzYjJSaGMyZ3ZhVzUwWlhKdVlXd3ZhWE5NWlc1bmRHZ3Vhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F4T0Z4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lMeW9xSUZWelpXUWdZWE1nZEdobElHQlVlWEJsUlhKeWIzSmdJRzFsYzNOaFoyVWdabTl5SUZ3aVJuVnVZM1JwYjI1elhDSWdiV1YwYUc5a2N5NGdLaTljYm5aaGNpQkdWVTVEWDBWU1VrOVNYMVJGV0ZRZ1BTQW5SWGh3WldOMFpXUWdZU0JtZFc1amRHbHZiaWM3WEc1Y2JpOHFJRTVoZEdsMlpTQnRaWFJvYjJRZ2NtVm1aWEpsYm1ObGN5Qm1iM0lnZEdodmMyVWdkMmwwYUNCMGFHVWdjMkZ0WlNCdVlXMWxJR0Z6SUc5MGFHVnlJR0JzYjJSaGMyaGdJRzFsZEdodlpITXVJQ292WEc1MllYSWdibUYwYVhabFRXRjRJRDBnVFdGMGFDNXRZWGc3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnYVc1MmIydGxjeUJnWm5WdVkyQWdkMmwwYUNCMGFHVWdZSFJvYVhOZ0lHSnBibVJwYm1jZ2IyWWdkR2hsWEc0Z0tpQmpjbVZoZEdWa0lHWjFibU4wYVc5dUlHRnVaQ0JoY21kMWJXVnVkSE1nWm5KdmJTQmdjM1JoY25SZ0lHRnVaQ0JpWlhsdmJtUWdjSEp2ZG1sa1pXUWdZWE1nWVc0Z1lYSnlZWGt1WEc0Z0tseHVJQ29nS2lwT2IzUmxPaW9xSUZSb2FYTWdiV1YwYUc5a0lHbHpJR0poYzJWa0lHOXVJSFJvWlNCYmNtVnpkQ0J3WVhKaGJXVjBaWEpkS0doMGRIQnpPaTh2WkdWMlpXeHZjR1Z5TG0xdmVtbHNiR0V1YjNKbkwxZGxZaTlLWVhaaFUyTnlhWEIwTDFKbFptVnlaVzVqWlM5R2RXNWpkR2x2Ym5NdmNtVnpkRjl3WVhKaGJXVjBaWEp6S1M1Y2JpQXFYRzRnS2lCQWMzUmhkR2xqWEc0Z0tpQkFiV1Z0WW1WeVQyWWdYMXh1SUNvZ1FHTmhkR1ZuYjNKNUlFWjFibU4wYVc5dVhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JtZFc1aklGUm9aU0JtZFc1amRHbHZiaUIwYnlCaGNIQnNlU0JoSUhKbGMzUWdjR0Z5WVcxbGRHVnlJSFJ2TGx4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlGdHpkR0Z5ZEQxbWRXNWpMbXhsYm1kMGFDMHhYU0JVYUdVZ2MzUmhjblFnY0c5emFYUnBiMjRnYjJZZ2RHaGxJSEpsYzNRZ2NHRnlZVzFsZEdWeUxseHVJQ29nUUhKbGRIVnlibk1nZTBaMWJtTjBhVzl1ZlNCU1pYUjFjbTV6SUhSb1pTQnVaWGNnWm5WdVkzUnBiMjR1WEc0Z0tpQkFaWGhoYlhCc1pWeHVJQ3BjYmlBcUlIWmhjaUJ6WVhrZ1BTQmZMbkpsYzNSUVlYSmhiU2htZFc1amRHbHZiaWgzYUdGMExDQnVZVzFsY3lrZ2UxeHVJQ29nSUNCeVpYUjFjbTRnZDJoaGRDQXJJQ2NnSnlBcklGOHVhVzVwZEdsaGJDaHVZVzFsY3lrdWFtOXBiaWduTENBbktTQXJYRzRnS2lBZ0lDQWdLRjh1YzJsNlpTaHVZVzFsY3lrZ1BpQXhJRDhnSnl3Z0ppQW5JRG9nSnljcElDc2dYeTVzWVhOMEtHNWhiV1Z6S1R0Y2JpQXFJSDBwTzF4dUlDcGNiaUFxSUhOaGVTZ25hR1ZzYkc4bkxDQW5abkpsWkNjc0lDZGlZWEp1WlhrbkxDQW5jR1ZpWW14bGN5Y3BPMXh1SUNvZ0x5OGdQVDRnSjJobGJHeHZJR1p5WldRc0lHSmhjbTVsZVN3Z0ppQndaV0ppYkdWekoxeHVJQ292WEc1bWRXNWpkR2x2YmlCeVpYTjBVR0Z5WVcwb1puVnVZeXdnYzNSaGNuUXBJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQm1kVzVqSUNFOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLRVpWVGtOZlJWSlNUMUpmVkVWWVZDazdYRzRnSUgxY2JpQWdjM1JoY25RZ1BTQnVZWFJwZG1WTllYZ29jM1JoY25RZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUNobWRXNWpMbXhsYm1kMGFDQXRJREVwSURvZ0tDdHpkR0Z5ZENCOGZDQXdLU3dnTUNrN1hHNGdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQjJZWElnWVhKbmN5QTlJR0Z5WjNWdFpXNTBjeXhjYmlBZ0lDQWdJQ0FnYVc1a1pYZ2dQU0F0TVN4Y2JpQWdJQ0FnSUNBZ2JHVnVaM1JvSUQwZ2JtRjBhWFpsVFdGNEtHRnlaM011YkdWdVozUm9JQzBnYzNSaGNuUXNJREFwTEZ4dUlDQWdJQ0FnSUNCeVpYTjBJRDBnUVhKeVlYa29iR1Z1WjNSb0tUdGNibHh1SUNBZ0lIZG9hV3hsSUNncksybHVaR1Y0SUR3Z2JHVnVaM1JvS1NCN1hHNGdJQ0FnSUNCeVpYTjBXMmx1WkdWNFhTQTlJR0Z5WjNOYmMzUmhjblFnS3lCcGJtUmxlRjA3WEc0Z0lDQWdmVnh1SUNBZ0lITjNhWFJqYUNBb2MzUmhjblFwSUh0Y2JpQWdJQ0FnSUdOaGMyVWdNRG9nY21WMGRYSnVJR1oxYm1NdVkyRnNiQ2gwYUdsekxDQnlaWE4wS1R0Y2JpQWdJQ0FnSUdOaGMyVWdNVG9nY21WMGRYSnVJR1oxYm1NdVkyRnNiQ2gwYUdsekxDQmhjbWR6V3pCZExDQnlaWE4wS1R0Y2JpQWdJQ0FnSUdOaGMyVWdNam9nY21WMGRYSnVJR1oxYm1NdVkyRnNiQ2gwYUdsekxDQmhjbWR6V3pCZExDQmhjbWR6V3pGZExDQnlaWE4wS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdkbUZ5SUc5MGFHVnlRWEpuY3lBOUlFRnljbUY1S0hOMFlYSjBJQ3NnTVNrN1hHNGdJQ0FnYVc1a1pYZ2dQU0F0TVR0Y2JpQWdJQ0IzYUdsc1pTQW9LeXRwYm1SbGVDQThJSE4wWVhKMEtTQjdYRzRnSUNBZ0lDQnZkR2hsY2tGeVozTmJhVzVrWlhoZElEMGdZWEpuYzF0cGJtUmxlRjA3WEc0Z0lDQWdmVnh1SUNBZ0lHOTBhR1Z5UVhKbmMxdHpkR0Z5ZEYwZ1BTQnlaWE4wTzF4dUlDQWdJSEpsZEhWeWJpQm1kVzVqTG1Gd2NHeDVLSFJvYVhNc0lHOTBhR1Z5UVhKbmN5azdYRzRnSUgwN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnY21WemRGQmhjbUZ0TzF4dVhHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dmJHOWtZWE5vTDJaMWJtTjBhVzl1TDNKbGMzUlFZWEpoYlM1cWMxeHVJQ29xSUcxdlpIVnNaU0JwWkNBOUlERTVYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENKMllYSWdZbUZ6WlVac1lYUjBaVzRnUFNCeVpYRjFhWEpsS0NjdUxpOXBiblJsY201aGJDOWlZWE5sUm14aGRIUmxiaWNwTEZ4dUlDQWdJR2x6U1hSbGNtRjBaV1ZEWVd4c0lEMGdjbVZ4ZFdseVpTZ25MaTR2YVc1MFpYSnVZV3d2YVhOSmRHVnlZWFJsWlVOaGJHd25LVHRjYmx4dUx5b3FYRzRnS2lCR2JHRjBkR1Z1Y3lCaElHNWxjM1JsWkNCaGNuSmhlUzRnU1dZZ1lHbHpSR1ZsY0dBZ2FYTWdZSFJ5ZFdWZ0lIUm9aU0JoY25KaGVTQnBjeUJ5WldOMWNuTnBkbVZzZVZ4dUlDb2dabXhoZEhSbGJtVmtMQ0J2ZEdobGNuZHBjMlVnYVhRbmN5QnZibXg1SUdac1lYUjBaVzVsWkNCaElITnBibWRzWlNCc1pYWmxiQzVjYmlBcVhHNGdLaUJBYzNSaGRHbGpYRzRnS2lCQWJXVnRZbVZ5VDJZZ1gxeHVJQ29nUUdOaGRHVm5iM0o1SUVGeWNtRjVYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVmU0JoY25KaGVTQlVhR1VnWVhKeVlYa2dkRzhnWm14aGRIUmxiaTVjYmlBcUlFQndZWEpoYlNCN1ltOXZiR1ZoYm4wZ1cybHpSR1ZsY0YwZ1UzQmxZMmxtZVNCaElHUmxaWEFnWm14aGRIUmxiaTVjYmlBcUlFQndZWEpoYlMwZ2UwOWlhbVZqZEgwZ1cyZDFZWEprWFNCRmJtRmliR1Z6SUhWelpTQmhjeUJoSUdOaGJHeGlZV05ySUdadmNpQm1kVzVqZEdsdmJuTWdiR2xyWlNCZ1h5NXRZWEJnTGx4dUlDb2dRSEpsZEhWeWJuTWdlMEZ5Y21GNWZTQlNaWFIxY201eklIUm9aU0J1WlhjZ1pteGhkSFJsYm1Wa0lHRnljbUY1TGx4dUlDb2dRR1Y0WVcxd2JHVmNiaUFxWEc0Z0tpQmZMbVpzWVhSMFpXNG9XekVzSUZzeUxDQXpMQ0JiTkYxZFhTazdYRzRnS2lBdkx5QTlQaUJiTVN3Z01pd2dNeXdnV3pSZFhWeHVJQ3BjYmlBcUlDOHZJSFZ6YVc1bklHQnBjMFJsWlhCZ1hHNGdLaUJmTG1ac1lYUjBaVzRvV3pFc0lGc3lMQ0F6TENCYk5GMWRYU3dnZEhKMVpTazdYRzRnS2lBdkx5QTlQaUJiTVN3Z01pd2dNeXdnTkYxY2JpQXFMMXh1Wm5WdVkzUnBiMjRnWm14aGRIUmxiaWhoY25KaGVTd2dhWE5FWldWd0xDQm5kV0Z5WkNrZ2UxeHVJQ0IyWVhJZ2JHVnVaM1JvSUQwZ1lYSnlZWGtnUHlCaGNuSmhlUzVzWlc1bmRHZ2dPaUF3TzF4dUlDQnBaaUFvWjNWaGNtUWdKaVlnYVhOSmRHVnlZWFJsWlVOaGJHd29ZWEp5WVhrc0lHbHpSR1ZsY0N3Z1ozVmhjbVFwS1NCN1hHNGdJQ0FnYVhORVpXVndJRDBnWm1Gc2MyVTdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHeGxibWQwYUNBL0lHSmhjMlZHYkdGMGRHVnVLR0Z5Y21GNUxDQnBjMFJsWlhBcElEb2dXMTA3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdabXhoZEhSbGJqdGNibHh1WEc1Y2JpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJQ29xSUZkRlFsQkJRMHNnUms5UFZFVlNYRzRnS2lvZ0xpOStMMnh2WkdGemFDOWhjbkpoZVM5bWJHRjBkR1Z1TG1welhHNGdLaW9nYlc5a2RXeGxJR2xrSUQwZ01qQmNiaUFxS2lCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUZ4dUlDb3FMeUlzSW5aaGNpQmhjbkpoZVZCMWMyZ2dQU0J5WlhGMWFYSmxLQ2N1TDJGeWNtRjVVSFZ6YUNjcExGeHVJQ0FnSUdselFYSm5kVzFsYm5SeklEMGdjbVZ4ZFdseVpTZ25MaTR2YkdGdVp5OXBjMEZ5WjNWdFpXNTBjeWNwTEZ4dUlDQWdJR2x6UVhKeVlYa2dQU0J5WlhGMWFYSmxLQ2N1TGk5c1lXNW5MMmx6UVhKeVlYa25LU3hjYmlBZ0lDQnBjMEZ5Y21GNVRHbHJaU0E5SUhKbGNYVnBjbVVvSnk0dmFYTkJjbkpoZVV4cGEyVW5LU3hjYmlBZ0lDQnBjMDlpYW1WamRFeHBhMlVnUFNCeVpYRjFhWEpsS0NjdUwybHpUMkpxWldOMFRHbHJaU2NwTzF4dVhHNHZLaXBjYmlBcUlGUm9aU0JpWVhObElHbHRjR3hsYldWdWRHRjBhVzl1SUc5bUlHQmZMbVpzWVhSMFpXNWdJSGRwZEdnZ1lXUmtaV1FnYzNWd2NHOXlkQ0JtYjNJZ2NtVnpkSEpwWTNScGJtZGNiaUFxSUdac1lYUjBaVzVwYm1jZ1lXNWtJSE53WldOcFpubHBibWNnZEdobElITjBZWEowSUdsdVpHVjRMbHh1SUNwY2JpQXFJRUJ3Y21sMllYUmxYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVmU0JoY25KaGVTQlVhR1VnWVhKeVlYa2dkRzhnWm14aGRIUmxiaTVjYmlBcUlFQndZWEpoYlNCN1ltOXZiR1ZoYm4wZ1cybHpSR1ZsY0YwZ1UzQmxZMmxtZVNCaElHUmxaWEFnWm14aGRIUmxiaTVjYmlBcUlFQndZWEpoYlNCN1ltOXZiR1ZoYm4wZ1cybHpVM1J5YVdOMFhTQlNaWE4wY21samRDQm1iR0YwZEdWdWFXNW5JSFJ2SUdGeWNtRjVjeTFzYVd0bElHOWlhbVZqZEhNdVhHNGdLaUJBY0dGeVlXMGdlMEZ5Y21GNWZTQmJjbVZ6ZFd4MFBWdGRYU0JVYUdVZ2FXNXBkR2xoYkNCeVpYTjFiSFFnZG1Gc2RXVXVYRzRnS2lCQWNtVjBkWEp1Y3lCN1FYSnlZWGw5SUZKbGRIVnlibk1nZEdobElHNWxkeUJtYkdGMGRHVnVaV1FnWVhKeVlYa3VYRzRnS2k5Y2JtWjFibU4wYVc5dUlHSmhjMlZHYkdGMGRHVnVLR0Z5Y21GNUxDQnBjMFJsWlhBc0lHbHpVM1J5YVdOMExDQnlaWE4xYkhRcElIdGNiaUFnY21WemRXeDBJSHg4SUNoeVpYTjFiSFFnUFNCYlhTazdYRzVjYmlBZ2RtRnlJR2x1WkdWNElEMGdMVEVzWEc0Z0lDQWdJQ0JzWlc1bmRHZ2dQU0JoY25KaGVTNXNaVzVuZEdnN1hHNWNiaUFnZDJocGJHVWdLQ3NyYVc1a1pYZ2dQQ0JzWlc1bmRHZ3BJSHRjYmlBZ0lDQjJZWElnZG1Gc2RXVWdQU0JoY25KaGVWdHBibVJsZUYwN1hHNGdJQ0FnYVdZZ0tHbHpUMkpxWldOMFRHbHJaU2gyWVd4MVpTa2dKaVlnYVhOQmNuSmhlVXhwYTJVb2RtRnNkV1VwSUNZbVhHNGdJQ0FnSUNBZ0lDaHBjMU4wY21samRDQjhmQ0JwYzBGeWNtRjVLSFpoYkhWbEtTQjhmQ0JwYzBGeVozVnRaVzUwY3loMllXeDFaU2twS1NCN1hHNGdJQ0FnSUNCcFppQW9hWE5FWldWd0tTQjdYRzRnSUNBZ0lDQWdJQzh2SUZKbFkzVnljMmwyWld4NUlHWnNZWFIwWlc0Z1lYSnlZWGx6SUNoemRYTmpaWEIwYVdKc1pTQjBieUJqWVd4c0lITjBZV05ySUd4cGJXbDBjeWt1WEc0Z0lDQWdJQ0FnSUdKaGMyVkdiR0YwZEdWdUtIWmhiSFZsTENCcGMwUmxaWEFzSUdselUzUnlhV04wTENCeVpYTjFiSFFwTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnWVhKeVlYbFFkWE5vS0hKbGMzVnNkQ3dnZG1Gc2RXVXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9JV2x6VTNSeWFXTjBLU0I3WEc0Z0lDQWdJQ0J5WlhOMWJIUmJjbVZ6ZFd4MExteGxibWQwYUYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY21WMGRYSnVJSEpsYzNWc2REdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCaVlYTmxSbXhoZEhSbGJqdGNibHh1WEc1Y2JpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJQ29xSUZkRlFsQkJRMHNnUms5UFZFVlNYRzRnS2lvZ0xpOStMMnh2WkdGemFDOXBiblJsY201aGJDOWlZWE5sUm14aGRIUmxiaTVxYzF4dUlDb3FJRzF2WkhWc1pTQnBaQ0E5SURJeFhHNGdLaW9nYlc5a2RXeGxJR05vZFc1cmN5QTlJREJjYmlBcUtpOGlMQ0l2S2lwY2JpQXFJRUZ3Y0dWdVpITWdkR2hsSUdWc1pXMWxiblJ6SUc5bUlHQjJZV3gxWlhOZ0lIUnZJR0JoY25KaGVXQXVYRzRnS2x4dUlDb2dRSEJ5YVhaaGRHVmNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYbDlJR0Z5Y21GNUlGUm9aU0JoY25KaGVTQjBieUJ0YjJScFpua3VYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVmU0IyWVd4MVpYTWdWR2hsSUhaaGJIVmxjeUIwYnlCaGNIQmxibVF1WEc0Z0tpQkFjbVYwZFhKdWN5QjdRWEp5WVhsOUlGSmxkSFZ5Ym5NZ1lHRnljbUY1WUM1Y2JpQXFMMXh1Wm5WdVkzUnBiMjRnWVhKeVlYbFFkWE5vS0dGeWNtRjVMQ0IyWVd4MVpYTXBJSHRjYmlBZ2RtRnlJR2x1WkdWNElEMGdMVEVzWEc0Z0lDQWdJQ0JzWlc1bmRHZ2dQU0IyWVd4MVpYTXViR1Z1WjNSb0xGeHVJQ0FnSUNBZ2IyWm1jMlYwSUQwZ1lYSnlZWGt1YkdWdVozUm9PMXh1WEc0Z0lIZG9hV3hsSUNncksybHVaR1Y0SUR3Z2JHVnVaM1JvS1NCN1hHNGdJQ0FnWVhKeVlYbGJiMlptYzJWMElDc2dhVzVrWlhoZElEMGdkbUZzZFdWelcybHVaR1Y0WFR0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnWVhKeVlYazdYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1lYSnlZWGxRZFhOb08xeHVYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lBdUwzNHZiRzlrWVhOb0wybHVkR1Z5Ym1Gc0wyRnljbUY1VUhWemFDNXFjMXh1SUNvcUlHMXZaSFZzWlNCcFpDQTlJREl5WEc0Z0tpb2diVzlrZFd4bElHTm9kVzVyY3lBOUlEQmNiaUFxS2k4aUxDSjJZWElnYVhOQmNuSmhlVXhwYTJVZ1BTQnlaWEYxYVhKbEtDY3VMaTlwYm5SbGNtNWhiQzlwYzBGeWNtRjVUR2xyWlNjcExGeHVJQ0FnSUdselQySnFaV04wVEdsclpTQTlJSEpsY1hWcGNtVW9KeTR1TDJsdWRHVnlibUZzTDJselQySnFaV04wVEdsclpTY3BPMXh1WEc0dktpb2dWWE5sWkNCbWIzSWdibUYwYVhabElHMWxkR2h2WkNCeVpXWmxjbVZ1WTJWekxpQXFMMXh1ZG1GeUlHOWlhbVZqZEZCeWIzUnZJRDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaVHRjYmx4dUx5b3FJRlZ6WldRZ2RHOGdZMmhsWTJzZ2IySnFaV04wY3lCbWIzSWdiM2R1SUhCeWIzQmxjblJwWlhNdUlDb3ZYRzUyWVhJZ2FHRnpUM2R1VUhKdmNHVnlkSGtnUFNCdlltcGxZM1JRY205MGJ5NW9ZWE5QZDI1UWNtOXdaWEowZVR0Y2JseHVMeW9xSUU1aGRHbDJaU0J0WlhSb2IyUWdjbVZtWlhKbGJtTmxjeTRnS2k5Y2JuWmhjaUJ3Y205d1pYSjBlVWx6Ulc1MWJXVnlZV0pzWlNBOUlHOWlhbVZqZEZCeWIzUnZMbkJ5YjNCbGNuUjVTWE5GYm5WdFpYSmhZbXhsTzF4dVhHNHZLaXBjYmlBcUlFTm9aV05yY3lCcFppQmdkbUZzZFdWZ0lHbHpJR05zWVhOemFXWnBaV1FnWVhNZ1lXNGdZR0Z5WjNWdFpXNTBjMkFnYjJKcVpXTjBMbHh1SUNwY2JpQXFJRUJ6ZEdGMGFXTmNiaUFxSUVCdFpXMWlaWEpQWmlCZlhHNGdLaUJBWTJGMFpXZHZjbmtnVEdGdVoxeHVJQ29nUUhCaGNtRnRJSHNxZlNCMllXeDFaU0JVYUdVZ2RtRnNkV1VnZEc4Z1kyaGxZMnN1WEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdVbVYwZFhKdWN5QmdkSEoxWldBZ2FXWWdZSFpoYkhWbFlDQnBjeUJqYjNKeVpXTjBiSGtnWTJ4aGMzTnBabWxsWkN3Z1pXeHpaU0JnWm1Gc2MyVmdMbHh1SUNvZ1FHVjRZVzF3YkdWY2JpQXFYRzRnS2lCZkxtbHpRWEpuZFcxbGJuUnpLR1oxYm1OMGFXOXVLQ2tnZXlCeVpYUjFjbTRnWVhKbmRXMWxiblJ6T3lCOUtDa3BPMXh1SUNvZ0x5OGdQVDRnZEhKMVpWeHVJQ3BjYmlBcUlGOHVhWE5CY21kMWJXVnVkSE1vV3pFc0lESXNJRE5kS1R0Y2JpQXFJQzh2SUQwK0lHWmhiSE5sWEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6UVhKbmRXMWxiblJ6S0haaGJIVmxLU0I3WEc0Z0lISmxkSFZ5YmlCcGMwOWlhbVZqZEV4cGEyVW9kbUZzZFdVcElDWW1JR2x6UVhKeVlYbE1hV3RsS0haaGJIVmxLU0FtSmx4dUlDQWdJR2hoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvZG1Gc2RXVXNJQ2RqWVd4c1pXVW5LU0FtSmlBaGNISnZjR1Z5ZEhsSmMwVnVkVzFsY21GaWJHVXVZMkZzYkNoMllXeDFaU3dnSjJOaGJHeGxaU2NwTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR2x6UVhKbmRXMWxiblJ6TzF4dVhHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dmJHOWtZWE5vTDJ4aGJtY3ZhWE5CY21kMWJXVnVkSE11YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBeU0xeHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpZG1GeUlHZGxkRTVoZEdsMlpTQTlJSEpsY1hWcGNtVW9KeTR1TDJsdWRHVnlibUZzTDJkbGRFNWhkR2wyWlNjcExGeHVJQ0FnSUdselRHVnVaM1JvSUQwZ2NtVnhkV2x5WlNnbkxpNHZhVzUwWlhKdVlXd3ZhWE5NWlc1bmRHZ25LU3hjYmlBZ0lDQnBjMDlpYW1WamRFeHBhMlVnUFNCeVpYRjFhWEpsS0NjdUxpOXBiblJsY201aGJDOXBjMDlpYW1WamRFeHBhMlVuS1R0Y2JseHVMeW9xSUdCUFltcGxZM1FqZEc5VGRISnBibWRnSUhKbGMzVnNkQ0J5WldabGNtVnVZMlZ6TGlBcUwxeHVkbUZ5SUdGeWNtRjVWR0ZuSUQwZ0oxdHZZbXBsWTNRZ1FYSnlZWGxkSnp0Y2JseHVMeW9xSUZWelpXUWdabTl5SUc1aGRHbDJaU0J0WlhSb2IyUWdjbVZtWlhKbGJtTmxjeTRnS2k5Y2JuWmhjaUJ2WW1wbFkzUlFjbTkwYnlBOUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVN1hHNWNiaThxS2x4dUlDb2dWWE5sWkNCMGJ5QnlaWE52YkhabElIUm9aU0JiWUhSdlUzUnlhVzVuVkdGbllGMG9hSFIwY0RvdkwyVmpiV0V0YVc1MFpYSnVZWFJwYjI1aGJDNXZjbWN2WldOdFlTMHlOakl2Tmk0d0x5TnpaV010YjJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjNOMGNtbHVaeWxjYmlBcUlHOW1JSFpoYkhWbGN5NWNiaUFxTDF4dWRtRnlJRzlpYWxSdlUzUnlhVzVuSUQwZ2IySnFaV04wVUhKdmRHOHVkRzlUZEhKcGJtYzdYRzVjYmk4cUlFNWhkR2wyWlNCdFpYUm9iMlFnY21WbVpYSmxibU5sY3lCbWIzSWdkR2h2YzJVZ2QybDBhQ0IwYUdVZ2MyRnRaU0J1WVcxbElHRnpJRzkwYUdWeUlHQnNiMlJoYzJoZ0lHMWxkR2h2WkhNdUlDb3ZYRzUyWVhJZ2JtRjBhWFpsU1hOQmNuSmhlU0E5SUdkbGRFNWhkR2wyWlNoQmNuSmhlU3dnSjJselFYSnlZWGtuS1R0Y2JseHVMeW9xWEc0Z0tpQkRhR1ZqYTNNZ2FXWWdZSFpoYkhWbFlDQnBjeUJqYkdGemMybG1hV1ZrSUdGeklHRnVJR0JCY25KaGVXQWdiMkpxWldOMExseHVJQ3BjYmlBcUlFQnpkR0YwYVdOY2JpQXFJRUJ0WlcxaVpYSlBaaUJmWEc0Z0tpQkFZMkYwWldkdmNua2dUR0Z1WjF4dUlDb2dRSEJoY21GdElIc3FmU0IyWVd4MVpTQlVhR1VnZG1Gc2RXVWdkRzhnWTJobFkyc3VYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1VtVjBkWEp1Y3lCZ2RISjFaV0FnYVdZZ1lIWmhiSFZsWUNCcGN5QmpiM0p5WldOMGJIa2dZMnhoYzNOcFptbGxaQ3dnWld4elpTQmdabUZzYzJWZ0xseHVJQ29nUUdWNFlXMXdiR1ZjYmlBcVhHNGdLaUJmTG1selFYSnlZWGtvV3pFc0lESXNJRE5kS1R0Y2JpQXFJQzh2SUQwK0lIUnlkV1ZjYmlBcVhHNGdLaUJmTG1selFYSnlZWGtvWm5WdVkzUnBiMjRvS1NCN0lISmxkSFZ5YmlCaGNtZDFiV1Z1ZEhNN0lIMG9LU2s3WEc0Z0tpQXZMeUE5UGlCbVlXeHpaVnh1SUNvdlhHNTJZWElnYVhOQmNuSmhlU0E5SUc1aGRHbDJaVWx6UVhKeVlYa2dmSHdnWm5WdVkzUnBiMjRvZG1Gc2RXVXBJSHRjYmlBZ2NtVjBkWEp1SUdselQySnFaV04wVEdsclpTaDJZV3gxWlNrZ0ppWWdhWE5NWlc1bmRHZ29kbUZzZFdVdWJHVnVaM1JvS1NBbUppQnZZbXBVYjFOMGNtbHVaeTVqWVd4c0tIWmhiSFZsS1NBOVBTQmhjbkpoZVZSaFp6dGNibjA3WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2FYTkJjbkpoZVR0Y2JseHVYRzVjYmk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlDb3FJRmRGUWxCQlEwc2dSazlQVkVWU1hHNGdLaW9nTGk5K0wyeHZaR0Z6YUM5c1lXNW5MMmx6UVhKeVlYa3Vhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F5TkZ4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lkbUZ5SUdselFYSnlZWGxNYVd0bElEMGdjbVZ4ZFdseVpTZ25MaTlwYzBGeWNtRjVUR2xyWlNjcExGeHVJQ0FnSUdselNXNWtaWGdnUFNCeVpYRjFhWEpsS0NjdUwybHpTVzVrWlhnbktTeGNiaUFnSUNCcGMwOWlhbVZqZENBOUlISmxjWFZwY21Vb0p5NHVMMnhoYm1jdmFYTlBZbXBsWTNRbktUdGNibHh1THlvcVhHNGdLaUJEYUdWamEzTWdhV1lnZEdobElIQnliM1pwWkdWa0lHRnlaM1Z0Wlc1MGN5QmhjbVVnWm5KdmJTQmhiaUJwZEdWeVlYUmxaU0JqWVd4c0xseHVJQ3BjYmlBcUlFQndjbWwyWVhSbFhHNGdLaUJBY0dGeVlXMGdleXA5SUhaaGJIVmxJRlJvWlNCd2IzUmxiblJwWVd3Z2FYUmxjbUYwWldVZ2RtRnNkV1VnWVhKbmRXMWxiblF1WEc0Z0tpQkFjR0Z5WVcwZ2V5cDlJR2x1WkdWNElGUm9aU0J3YjNSbGJuUnBZV3dnYVhSbGNtRjBaV1VnYVc1a1pYZ2diM0lnYTJWNUlHRnlaM1Z0Wlc1MExseHVJQ29nUUhCaGNtRnRJSHNxZlNCdlltcGxZM1FnVkdobElIQnZkR1Z1ZEdsaGJDQnBkR1Z5WVhSbFpTQnZZbXBsWTNRZ1lYSm5kVzFsYm5RdVhHNGdLaUJBY21WMGRYSnVjeUI3WW05dmJHVmhibjBnVW1WMGRYSnVjeUJnZEhKMVpXQWdhV1lnZEdobElHRnlaM1Z0Wlc1MGN5QmhjbVVnWm5KdmJTQmhiaUJwZEdWeVlYUmxaU0JqWVd4c0xDQmxiSE5sSUdCbVlXeHpaV0F1WEc0Z0tpOWNibVoxYm1OMGFXOXVJR2x6U1hSbGNtRjBaV1ZEWVd4c0tIWmhiSFZsTENCcGJtUmxlQ3dnYjJKcVpXTjBLU0I3WEc0Z0lHbG1JQ2doYVhOUFltcGxZM1FvYjJKcVpXTjBLU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1SUNCMllYSWdkSGx3WlNBOUlIUjVjR1Z2WmlCcGJtUmxlRHRjYmlBZ2FXWWdLSFI1Y0dVZ1BUMGdKMjUxYldKbGNpZGNiaUFnSUNBZ0lEOGdLR2x6UVhKeVlYbE1hV3RsS0c5aWFtVmpkQ2tnSmlZZ2FYTkpibVJsZUNocGJtUmxlQ3dnYjJKcVpXTjBMbXhsYm1kMGFDa3BYRzRnSUNBZ0lDQTZJQ2gwZVhCbElEMDlJQ2R6ZEhKcGJtY25JQ1ltSUdsdVpHVjRJR2x1SUc5aWFtVmpkQ2twSUh0Y2JpQWdJQ0IyWVhJZ2IzUm9aWElnUFNCdlltcGxZM1JiYVc1a1pYaGRPMXh1SUNBZ0lISmxkSFZ5YmlCMllXeDFaU0E5UFQwZ2RtRnNkV1VnUHlBb2RtRnNkV1VnUFQwOUlHOTBhR1Z5S1NBNklDaHZkR2hsY2lBaFBUMGdiM1JvWlhJcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCbVlXeHpaVHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnBjMGwwWlhKaGRHVmxRMkZzYkR0Y2JseHVYRzVjYmk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlDb3FJRmRGUWxCQlEwc2dSazlQVkVWU1hHNGdLaW9nTGk5K0wyeHZaR0Z6YUM5cGJuUmxjbTVoYkM5cGMwbDBaWEpoZEdWbFEyRnNiQzVxYzF4dUlDb3FJRzF2WkhWc1pTQnBaQ0E5SURJMVhHNGdLaW9nYlc5a2RXeGxJR05vZFc1cmN5QTlJREJjYmlBcUtpOGlMQ0l2S2lvZ1ZYTmxaQ0IwYnlCa1pYUmxZM1FnZFc1emFXZHVaV1FnYVc1MFpXZGxjaUIyWVd4MVpYTXVJQ292WEc1MllYSWdjbVZKYzFWcGJuUWdQU0F2WGx4Y1pDc2tMenRjYmx4dUx5b3FYRzRnS2lCVmMyVmtJR0Z6SUhSb1pTQmJiV0Y0YVcxMWJTQnNaVzVuZEdoZEtHaDBkSEE2THk5bFkyMWhMV2x1ZEdWeWJtRjBhVzl1WVd3dWIzSm5MMlZqYldFdE1qWXlMell1TUM4amMyVmpMVzUxYldKbGNpNXRZWGhmYzJGbVpWOXBiblJsWjJWeUtWeHVJQ29nYjJZZ1lXNGdZWEp5WVhrdGJHbHJaU0IyWVd4MVpTNWNiaUFxTDF4dWRtRnlJRTFCV0Y5VFFVWkZYMGxPVkVWSFJWSWdQU0E1TURBM01UazVNalUwTnpRd09Ua3hPMXh1WEc0dktpcGNiaUFxSUVOb1pXTnJjeUJwWmlCZ2RtRnNkV1ZnSUdseklHRWdkbUZzYVdRZ1lYSnlZWGt0YkdsclpTQnBibVJsZUM1Y2JpQXFYRzRnS2lCQWNISnBkbUYwWlZ4dUlDb2dRSEJoY21GdElIc3FmU0IyWVd4MVpTQlVhR1VnZG1Gc2RXVWdkRzhnWTJobFkyc3VYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnVzJ4bGJtZDBhRDFOUVZoZlUwRkdSVjlKVGxSRlIwVlNYU0JVYUdVZ2RYQndaWElnWW05MWJtUnpJRzltSUdFZ2RtRnNhV1FnYVc1a1pYZ3VYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1VtVjBkWEp1Y3lCZ2RISjFaV0FnYVdZZ1lIWmhiSFZsWUNCcGN5QmhJSFpoYkdsa0lHbHVaR1Y0TENCbGJITmxJR0JtWVd4elpXQXVYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpTVzVrWlhnb2RtRnNkV1VzSUd4bGJtZDBhQ2tnZTF4dUlDQjJZV3gxWlNBOUlDaDBlWEJsYjJZZ2RtRnNkV1VnUFQwZ0oyNTFiV0psY2ljZ2ZId2djbVZKYzFWcGJuUXVkR1Z6ZENoMllXeDFaU2twSUQ4Z0szWmhiSFZsSURvZ0xURTdYRzRnSUd4bGJtZDBhQ0E5SUd4bGJtZDBhQ0E5UFNCdWRXeHNJRDhnVFVGWVgxTkJSa1ZmU1U1VVJVZEZVaUE2SUd4bGJtZDBhRHRjYmlBZ2NtVjBkWEp1SUhaaGJIVmxJRDRnTFRFZ0ppWWdkbUZzZFdVZ0pTQXhJRDA5SURBZ0ppWWdkbUZzZFdVZ1BDQnNaVzVuZEdnN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnYVhOSmJtUmxlRHRjYmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzlwYzBsdVpHVjRMbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTWpaY2JpQXFLaUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNRnh1SUNvcUx5SXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVhVzF3YjNKMElIVnVhWEYxWlNCbWNtOXRJQ2RzYjJSaGMyZ3ZZWEp5WVhrdmRXNXBjWFZsSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHOXNaRkJoY21GdGN5d2dibVYzVUdGeVlXMXpLU0E5UGlCN1hHNGdJR3hsZENCdmJHUkxaWGx6SUQwZ1QySnFaV04wTG10bGVYTW9iMnhrVUdGeVlXMXpLVHRjYmlBZ2JHVjBJRzVsZDB0bGVYTWdQU0JQWW1wbFkzUXVhMlY1Y3lodVpYZFFZWEpoYlhNcE8xeHVYRzRnSUd4bGRDQmhiR3hMWlhseklEMGdkVzVwY1hWbEtHOXNaRXRsZVhNdVkyOXVZMkYwS0c1bGQwdGxlWE1wS1R0Y2JseHVJQ0J5WlhSMWNtNGdZV3hzUzJWNWN5NW1hV3gwWlhJb2EyVjVJRDArSUh0Y2JpQWdJQ0JzWlhRZ2IyeGtWbUZzZFdVZ1BTQnZiR1JRWVhKaGJYTmJhMlY1WFR0Y2JpQWdJQ0JzWlhRZ2JtVjNWbUZzZFdVZ1BTQnVaWGRRWVhKaGJYTmJhMlY1WFR0Y2JseHVJQ0FnSUM4cUlHaGhibVJzWlNCT1lVNGdLaTljYmlBZ0lDQnBaaUFvYjJ4a1ZtRnNkV1VnSVQwOUlHOXNaRlpoYkhWbElDWW1JRzVsZDFaaGJIVmxJQ0U5UFNCdVpYZFdZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0x5b2dZbTkwYUNCdmJHUldZV3gxWlNCaGJtUWdibVYzVm1Gc2RXVWdaWEYxWVd3Z1RtRk9JQ292WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRzlzWkZaaGJIVmxJQ0U5UFNCdVpYZFdZV3gxWlR0Y2JpQWdmU2s3WEc1OU8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXFZWFpoYzJOeWFYQjBMMnRsZVhOWGFYUm9RMmhoYm1kbFpGWmhiSFZsY3k1cWMxeHVJQ29xTHlJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NtVnhkV2x5WlNnbkxpOTFibWx4SnlrN1hHNWNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOXNiMlJoYzJndllYSnlZWGt2ZFc1cGNYVmxMbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTWpoY2JpQXFLaUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNRnh1SUNvcUx5SXNJblpoY2lCaVlYTmxRMkZzYkdKaFkyc2dQU0J5WlhGMWFYSmxLQ2N1TGk5cGJuUmxjbTVoYkM5aVlYTmxRMkZzYkdKaFkyc25LU3hjYmlBZ0lDQmlZWE5sVlc1cGNTQTlJSEpsY1hWcGNtVW9KeTR1TDJsdWRHVnlibUZzTDJKaGMyVlZibWx4Snlrc1hHNGdJQ0FnYVhOSmRHVnlZWFJsWlVOaGJHd2dQU0J5WlhGMWFYSmxLQ2N1TGk5cGJuUmxjbTVoYkM5cGMwbDBaWEpoZEdWbFEyRnNiQ2NwTEZ4dUlDQWdJSE52Y25SbFpGVnVhWEVnUFNCeVpYRjFhWEpsS0NjdUxpOXBiblJsY201aGJDOXpiM0owWldSVmJtbHhKeWs3WEc1Y2JpOHFLbHh1SUNvZ1EzSmxZWFJsY3lCaElHUjFjR3hwWTJGMFpTMW1jbVZsSUhabGNuTnBiMjRnYjJZZ1lXNGdZWEp5WVhrc0lIVnphVzVuWEc0Z0tpQmJZRk5oYldWV1lXeDFaVnBsY205Z1hTaG9kSFJ3T2k4dlpXTnRZUzFwYm5SbGNtNWhkR2x2Ym1Gc0xtOXlaeTlsWTIxaExUSTJNaTgyTGpBdkkzTmxZeTF6WVcxbGRtRnNkV1Y2WlhKdktWeHVJQ29nWm05eUlHVnhkV0ZzYVhSNUlHTnZiWEJoY21semIyNXpMQ0JwYmlCM2FHbGphQ0J2Ym14NUlIUm9aU0JtYVhKemRDQnZZMk4xY21WdVkyVWdiMllnWldGamFDQmxiR1Z0Wlc1MFhHNGdLaUJwY3lCclpYQjBMaUJRY205MmFXUnBibWNnWUhSeWRXVmdJR1p2Y2lCZ2FYTlRiM0owWldSZ0lIQmxjbVp2Y20xeklHRWdabUZ6ZEdWeUlITmxZWEpqYUNCaGJHZHZjbWwwYUcxY2JpQXFJR1p2Y2lCemIzSjBaV1FnWVhKeVlYbHpMaUJKWmlCaGJpQnBkR1Z5WVhSbFpTQm1kVzVqZEdsdmJpQnBjeUJ3Y205MmFXUmxaQ0JwZENkeklHbHVkbTlyWldRZ1ptOXlYRzRnS2lCbFlXTm9JR1ZzWlcxbGJuUWdhVzRnZEdobElHRnljbUY1SUhSdklHZGxibVZ5WVhSbElIUm9aU0JqY21sMFpYSnBiMjRnWW5rZ2QyaHBZMmdnZFc1cGNYVmxibVZ6YzF4dUlDb2dhWE1nWTI5dGNIVjBaV1F1SUZSb1pTQmdhWFJsY21GMFpXVmdJR2x6SUdKdmRXNWtJSFJ2SUdCMGFHbHpRWEpuWUNCaGJtUWdhVzUyYjJ0bFpDQjNhWFJvSUhSb2NtVmxYRzRnS2lCaGNtZDFiV1Z1ZEhNNklDaDJZV3gxWlN3Z2FXNWtaWGdzSUdGeWNtRjVLUzVjYmlBcVhHNGdLaUJKWmlCaElIQnliM0JsY25SNUlHNWhiV1VnYVhNZ2NISnZkbWxrWldRZ1ptOXlJR0JwZEdWeVlYUmxaV0FnZEdobElHTnlaV0YwWldRZ1lGOHVjSEp2Y0dWeWRIbGdYRzRnS2lCemRIbHNaU0JqWVd4c1ltRmpheUJ5WlhSMWNtNXpJSFJvWlNCd2NtOXdaWEowZVNCMllXeDFaU0J2WmlCMGFHVWdaMmwyWlc0Z1pXeGxiV1Z1ZEM1Y2JpQXFYRzRnS2lCSlppQmhJSFpoYkhWbElHbHpJR0ZzYzI4Z2NISnZkbWxrWldRZ1ptOXlJR0IwYUdselFYSm5ZQ0IwYUdVZ1kzSmxZWFJsWkNCZ1h5NXRZWFJqYUdWelVISnZjR1Z5ZEhsZ1hHNGdLaUJ6ZEhsc1pTQmpZV3hzWW1GamF5QnlaWFIxY201eklHQjBjblZsWUNCbWIzSWdaV3hsYldWdWRITWdkR2hoZENCb1lYWmxJR0VnYldGMFkyaHBibWNnY0hKdmNHVnlkSGxjYmlBcUlIWmhiSFZsTENCbGJITmxJR0JtWVd4elpXQXVYRzRnS2x4dUlDb2dTV1lnWVc0Z2IySnFaV04wSUdseklIQnliM1pwWkdWa0lHWnZjaUJnYVhSbGNtRjBaV1ZnSUhSb1pTQmpjbVZoZEdWa0lHQmZMbTFoZEdOb1pYTmdJSE4wZVd4bFhHNGdLaUJqWVd4c1ltRmpheUJ5WlhSMWNtNXpJR0IwY25WbFlDQm1iM0lnWld4bGJXVnVkSE1nZEdoaGRDQm9ZWFpsSUhSb1pTQndjbTl3WlhKMGFXVnpJRzltSUhSb1pTQm5hWFpsYmx4dUlDb2diMkpxWldOMExDQmxiSE5sSUdCbVlXeHpaV0F1WEc0Z0tseHVJQ29nUUhOMFlYUnBZMXh1SUNvZ1FHMWxiV0psY2s5bUlGOWNiaUFxSUVCaGJHbGhjeUIxYm1seGRXVmNiaUFxSUVCallYUmxaMjl5ZVNCQmNuSmhlVnh1SUNvZ1FIQmhjbUZ0SUh0QmNuSmhlWDBnWVhKeVlYa2dWR2hsSUdGeWNtRjVJSFJ2SUdsdWMzQmxZM1F1WEc0Z0tpQkFjR0Z5WVcwZ2UySnZiMnhsWVc1OUlGdHBjMU52Y25SbFpGMGdVM0JsWTJsbWVTQjBhR1VnWVhKeVlYa2dhWE1nYzI5eWRHVmtMbHh1SUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym54UFltcGxZM1I4YzNSeWFXNW5mU0JiYVhSbGNtRjBaV1ZkSUZSb1pTQm1kVzVqZEdsdmJpQnBiblp2YTJWa0lIQmxjaUJwZEdWeVlYUnBiMjR1WEc0Z0tpQkFjR0Z5WVcwZ2V5cDlJRnQwYUdselFYSm5YU0JVYUdVZ1lIUm9hWE5nSUdKcGJtUnBibWNnYjJZZ1lHbDBaWEpoZEdWbFlDNWNiaUFxSUVCeVpYUjFjbTV6SUh0QmNuSmhlWDBnVW1WMGRYSnVjeUIwYUdVZ2JtVjNJR1IxY0d4cFkyRjBaUzEyWVd4MVpTMW1jbVZsSUdGeWNtRjVMbHh1SUNvZ1FHVjRZVzF3YkdWY2JpQXFYRzRnS2lCZkxuVnVhWEVvV3pJc0lERXNJREpkS1R0Y2JpQXFJQzh2SUQwK0lGc3lMQ0F4WFZ4dUlDcGNiaUFxSUM4dklIVnphVzVuSUdCcGMxTnZjblJsWkdCY2JpQXFJRjh1ZFc1cGNTaGJNU3dnTVN3Z01sMHNJSFJ5ZFdVcE8xeHVJQ29nTHk4Z1BUNGdXekVzSURKZFhHNGdLbHh1SUNvZ0x5OGdkWE5wYm1jZ1lXNGdhWFJsY21GMFpXVWdablZ1WTNScGIyNWNiaUFxSUY4dWRXNXBjU2hiTVN3Z01pNDFMQ0F4TGpVc0lESmRMQ0JtZFc1amRHbHZiaWh1S1NCN1hHNGdLaUFnSUhKbGRIVnliaUIwYUdsekxtWnNiMjl5S0c0cE8xeHVJQ29nZlN3Z1RXRjBhQ2s3WEc0Z0tpQXZMeUE5UGlCYk1Td2dNaTQxWFZ4dUlDcGNiaUFxSUM4dklIVnphVzVuSUhSb1pTQmdYeTV3Y205d1pYSjBlV0FnWTJGc2JHSmhZMnNnYzJodmNuUm9ZVzVrWEc0Z0tpQmZMblZ1YVhFb1czc2dKM2duT2lBeElIMHNJSHNnSjNnbk9pQXlJSDBzSUhzZ0ozZ25PaUF4SUgxZExDQW5lQ2NwTzF4dUlDb2dMeThnUFQ0Z1czc2dKM2duT2lBeElIMHNJSHNnSjNnbk9pQXlJSDFkWEc0Z0tpOWNibVoxYm1OMGFXOXVJSFZ1YVhFb1lYSnlZWGtzSUdselUyOXlkR1ZrTENCcGRHVnlZWFJsWlN3Z2RHaHBjMEZ5WnlrZ2UxeHVJQ0IyWVhJZ2JHVnVaM1JvSUQwZ1lYSnlZWGtnUHlCaGNuSmhlUzVzWlc1bmRHZ2dPaUF3TzF4dUlDQnBaaUFvSVd4bGJtZDBhQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQmJYVHRjYmlBZ2ZWeHVJQ0JwWmlBb2FYTlRiM0owWldRZ0lUMGdiblZzYkNBbUppQjBlWEJsYjJZZ2FYTlRiM0owWldRZ0lUMGdKMkp2YjJ4bFlXNG5LU0I3WEc0Z0lDQWdkR2hwYzBGeVp5QTlJR2wwWlhKaGRHVmxPMXh1SUNBZ0lHbDBaWEpoZEdWbElEMGdhWE5KZEdWeVlYUmxaVU5oYkd3b1lYSnlZWGtzSUdselUyOXlkR1ZrTENCMGFHbHpRWEpuS1NBL0lIVnVaR1ZtYVc1bFpDQTZJR2x6VTI5eWRHVmtPMXh1SUNBZ0lHbHpVMjl5ZEdWa0lEMGdabUZzYzJVN1hHNGdJSDFjYmlBZ2FYUmxjbUYwWldVZ1BTQnBkR1Z5WVhSbFpTQTlQU0J1ZFd4c0lEOGdhWFJsY21GMFpXVWdPaUJpWVhObFEyRnNiR0poWTJzb2FYUmxjbUYwWldVc0lIUm9hWE5CY21jc0lETXBPMXh1SUNCeVpYUjFjbTRnS0dselUyOXlkR1ZrS1Z4dUlDQWdJRDhnYzI5eWRHVmtWVzVwY1NoaGNuSmhlU3dnYVhSbGNtRjBaV1VwWEc0Z0lDQWdPaUJpWVhObFZXNXBjU2hoY25KaGVTd2dhWFJsY21GMFpXVXBPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlIVnVhWEU3WEc1Y2JseHVYRzR2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlBcUtpQlhSVUpRUVVOTElFWlBUMVJGVWx4dUlDb3FJQzR2Zmk5c2IyUmhjMmd2WVhKeVlYa3ZkVzVwY1M1cWMxeHVJQ29xSUcxdlpIVnNaU0JwWkNBOUlESTVYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENKMllYSWdZbUZ6WlUxaGRHTm9aWE1nUFNCeVpYRjFhWEpsS0NjdUwySmhjMlZOWVhSamFHVnpKeWtzWEc0Z0lDQWdZbUZ6WlUxaGRHTm9aWE5RY205d1pYSjBlU0E5SUhKbGNYVnBjbVVvSnk0dlltRnpaVTFoZEdOb1pYTlFjbTl3WlhKMGVTY3BMRnh1SUNBZ0lHSnBibVJEWVd4c1ltRmpheUE5SUhKbGNYVnBjbVVvSnk0dlltbHVaRU5oYkd4aVlXTnJKeWtzWEc0Z0lDQWdhV1JsYm5ScGRIa2dQU0J5WlhGMWFYSmxLQ2N1TGk5MWRHbHNhWFI1TDJsa1pXNTBhWFI1Snlrc1hHNGdJQ0FnY0hKdmNHVnlkSGtnUFNCeVpYRjFhWEpsS0NjdUxpOTFkR2xzYVhSNUwzQnliM0JsY25SNUp5azdYRzVjYmk4cUtseHVJQ29nVkdobElHSmhjMlVnYVcxd2JHVnRaVzUwWVhScGIyNGdiMllnWUY4dVkyRnNiR0poWTJ0Z0lIZG9hV05vSUhOMWNIQnZjblJ6SUhOd1pXTnBabmxwYm1jZ2RHaGxYRzRnS2lCdWRXMWlaWElnYjJZZ1lYSm5kVzFsYm5SeklIUnZJSEJ5YjNacFpHVWdkRzhnWUdaMWJtTmdMbHh1SUNwY2JpQXFJRUJ3Y21sMllYUmxYRzRnS2lCQWNHRnlZVzBnZXlwOUlGdG1kVzVqUFY4dWFXUmxiblJwZEhsZElGUm9aU0IyWVd4MVpTQjBieUJqYjI1MlpYSjBJSFJ2SUdFZ1kyRnNiR0poWTJzdVhHNGdLaUJBY0dGeVlXMGdleXA5SUZ0MGFHbHpRWEpuWFNCVWFHVWdZSFJvYVhOZ0lHSnBibVJwYm1jZ2IyWWdZR1oxYm1OZ0xseHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRnRoY21kRGIzVnVkRjBnVkdobElHNTFiV0psY2lCdlppQmhjbWQxYldWdWRITWdkRzhnY0hKdmRtbGtaU0IwYnlCZ1puVnVZMkF1WEc0Z0tpQkFjbVYwZFhKdWN5QjdSblZ1WTNScGIyNTlJRkpsZEhWeWJuTWdkR2hsSUdOaGJHeGlZV05yTGx4dUlDb3ZYRzVtZFc1amRHbHZiaUJpWVhObFEyRnNiR0poWTJzb1puVnVZeXdnZEdocGMwRnlaeXdnWVhKblEyOTFiblFwSUh0Y2JpQWdkbUZ5SUhSNWNHVWdQU0IwZVhCbGIyWWdablZ1WXp0Y2JpQWdhV1lnS0hSNWNHVWdQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdselFYSm5JRDA5UFNCMWJtUmxabWx1WldSY2JpQWdJQ0FnSUQ4Z1puVnVZMXh1SUNBZ0lDQWdPaUJpYVc1a1EyRnNiR0poWTJzb1puVnVZeXdnZEdocGMwRnlaeXdnWVhKblEyOTFiblFwTzF4dUlDQjlYRzRnSUdsbUlDaG1kVzVqSUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdhV1JsYm5ScGRIazdYRzRnSUgxY2JpQWdhV1lnS0hSNWNHVWdQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdZbUZ6WlUxaGRHTm9aWE1vWm5WdVl5azdYRzRnSUgxY2JpQWdjbVYwZFhKdUlIUm9hWE5CY21jZ1BUMDlJSFZ1WkdWbWFXNWxaRnh1SUNBZ0lEOGdjSEp2Y0dWeWRIa29ablZ1WXlsY2JpQWdJQ0E2SUdKaGMyVk5ZWFJqYUdWelVISnZjR1Z5ZEhrb1puVnVZeXdnZEdocGMwRnlaeWs3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdZbUZ6WlVOaGJHeGlZV05yTzF4dVhHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dmJHOWtZWE5vTDJsdWRHVnlibUZzTDJKaGMyVkRZV3hzWW1GamF5NXFjMXh1SUNvcUlHMXZaSFZzWlNCcFpDQTlJRE13WEc0Z0tpb2diVzlrZFd4bElHTm9kVzVyY3lBOUlEQmNiaUFxS2k4aUxDSjJZWElnWW1GelpVbHpUV0YwWTJnZ1BTQnlaWEYxYVhKbEtDY3VMMkpoYzJWSmMwMWhkR05vSnlrc1hHNGdJQ0FnWjJWMFRXRjBZMmhFWVhSaElEMGdjbVZ4ZFdseVpTZ25MaTluWlhSTllYUmphRVJoZEdFbktTeGNiaUFnSUNCMGIwOWlhbVZqZENBOUlISmxjWFZwY21Vb0p5NHZkRzlQWW1wbFkzUW5LVHRjYmx4dUx5b3FYRzRnS2lCVWFHVWdZbUZ6WlNCcGJYQnNaVzFsYm5SaGRHbHZiaUJ2WmlCZ1h5NXRZWFJqYUdWellDQjNhR2xqYUNCa2IyVnpJRzV2ZENCamJHOXVaU0JnYzI5MWNtTmxZQzVjYmlBcVhHNGdLaUJBY0hKcGRtRjBaVnh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUhOdmRYSmpaU0JVYUdVZ2IySnFaV04wSUc5bUlIQnliM0JsY25SNUlIWmhiSFZsY3lCMGJ5QnRZWFJqYUM1Y2JpQXFJRUJ5WlhSMWNtNXpJSHRHZFc1amRHbHZibjBnVW1WMGRYSnVjeUIwYUdVZ2JtVjNJR1oxYm1OMGFXOXVMbHh1SUNvdlhHNW1kVzVqZEdsdmJpQmlZWE5sVFdGMFkyaGxjeWh6YjNWeVkyVXBJSHRjYmlBZ2RtRnlJRzFoZEdOb1JHRjBZU0E5SUdkbGRFMWhkR05vUkdGMFlTaHpiM1Z5WTJVcE8xeHVJQ0JwWmlBb2JXRjBZMmhFWVhSaExteGxibWQwYUNBOVBTQXhJQ1ltSUcxaGRHTm9SR0YwWVZzd1hWc3lYU2tnZTF4dUlDQWdJSFpoY2lCclpYa2dQU0J0WVhSamFFUmhkR0ZiTUYxYk1GMHNYRzRnSUNBZ0lDQWdJSFpoYkhWbElEMGdiV0YwWTJoRVlYUmhXekJkV3pGZE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tHOWlhbVZqZENBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSEpsZEhWeWJpQnZZbXBsWTNSYmEyVjVYU0E5UFQwZ2RtRnNkV1VnSmlZZ0tIWmhiSFZsSUNFOVBTQjFibVJsWm1sdVpXUWdmSHdnS0d0bGVTQnBiaUIwYjA5aWFtVmpkQ2h2WW1wbFkzUXBLU2s3WEc0Z0lDQWdmVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNG9iMkpxWldOMEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdKaGMyVkpjMDFoZEdOb0tHOWlhbVZqZEN3Z2JXRjBZMmhFWVhSaEtUdGNiaUFnZlR0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JpWVhObFRXRjBZMmhsY3p0Y2JseHVYRzVjYmk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlDb3FJRmRGUWxCQlEwc2dSazlQVkVWU1hHNGdLaW9nTGk5K0wyeHZaR0Z6YUM5cGJuUmxjbTVoYkM5aVlYTmxUV0YwWTJobGN5NXFjMXh1SUNvcUlHMXZaSFZzWlNCcFpDQTlJRE14WEc0Z0tpb2diVzlrZFd4bElHTm9kVzVyY3lBOUlEQmNiaUFxS2k4aUxDSjJZWElnWW1GelpVbHpSWEYxWVd3Z1BTQnlaWEYxYVhKbEtDY3VMMkpoYzJWSmMwVnhkV0ZzSnlrc1hHNGdJQ0FnZEc5UFltcGxZM1FnUFNCeVpYRjFhWEpsS0NjdUwzUnZUMkpxWldOMEp5azdYRzVjYmk4cUtseHVJQ29nVkdobElHSmhjMlVnYVcxd2JHVnRaVzUwWVhScGIyNGdiMllnWUY4dWFYTk5ZWFJqYUdBZ2QybDBhRzkxZENCemRYQndiM0owSUdadmNpQmpZV3hzWW1GamExeHVJQ29nYzJodmNuUm9ZVzVrY3lCaGJtUWdZSFJvYVhOZ0lHSnBibVJwYm1jdVhHNGdLbHh1SUNvZ1FIQnlhWFpoZEdWY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQnZZbXBsWTNRZ1ZHaGxJRzlpYW1WamRDQjBieUJwYm5Od1pXTjBMbHh1SUNvZ1FIQmhjbUZ0SUh0QmNuSmhlWDBnYldGMFkyaEVZWFJoSUZSb1pTQndjbTl3WlhKNUlHNWhiV1Z6TENCMllXeDFaWE1zSUdGdVpDQmpiMjF3WVhKbElHWnNZV2R6SUhSdklHMWhkR05vTGx4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdXMk4xYzNSdmJXbDZaWEpkSUZSb1pTQm1kVzVqZEdsdmJpQjBieUJqZFhOMGIyMXBlbVVnWTI5dGNHRnlhVzVuSUc5aWFtVmpkSE11WEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdVbVYwZFhKdWN5QmdkSEoxWldBZ2FXWWdZRzlpYW1WamRHQWdhWE1nWVNCdFlYUmphQ3dnWld4elpTQmdabUZzYzJWZ0xseHVJQ292WEc1bWRXNWpkR2x2YmlCaVlYTmxTWE5OWVhSamFDaHZZbXBsWTNRc0lHMWhkR05vUkdGMFlTd2dZM1Z6ZEc5dGFYcGxjaWtnZTF4dUlDQjJZWElnYVc1a1pYZ2dQU0J0WVhSamFFUmhkR0V1YkdWdVozUm9MRnh1SUNBZ0lDQWdiR1Z1WjNSb0lEMGdhVzVrWlhnc1hHNGdJQ0FnSUNCdWIwTjFjM1J2YldsNlpYSWdQU0FoWTNWemRHOXRhWHBsY2p0Y2JseHVJQ0JwWmlBb2IySnFaV04wSUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdJV3hsYm1kMGFEdGNiaUFnZlZ4dUlDQnZZbXBsWTNRZ1BTQjBiMDlpYW1WamRDaHZZbXBsWTNRcE8xeHVJQ0IzYUdsc1pTQW9hVzVrWlhndExTa2dlMXh1SUNBZ0lIWmhjaUJrWVhSaElEMGdiV0YwWTJoRVlYUmhXMmx1WkdWNFhUdGNiaUFnSUNCcFppQW9LRzV2UTNWemRHOXRhWHBsY2lBbUppQmtZWFJoV3pKZEtWeHVJQ0FnSUNBZ0lDQWdJRDhnWkdGMFlWc3hYU0FoUFQwZ2IySnFaV04wVzJSaGRHRmJNRjFkWEc0Z0lDQWdJQ0FnSUNBZ09pQWhLR1JoZEdGYk1GMGdhVzRnYjJKcVpXTjBLVnh1SUNBZ0lDQWdJQ0FwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2QyaHBiR1VnS0NzcmFXNWtaWGdnUENCc1pXNW5kR2dwSUh0Y2JpQWdJQ0JrWVhSaElEMGdiV0YwWTJoRVlYUmhXMmx1WkdWNFhUdGNiaUFnSUNCMllYSWdhMlY1SUQwZ1pHRjBZVnN3WFN4Y2JpQWdJQ0FnSUNBZ2IySnFWbUZzZFdVZ1BTQnZZbXBsWTNSYmEyVjVYU3hjYmlBZ0lDQWdJQ0FnYzNKalZtRnNkV1VnUFNCa1lYUmhXekZkTzF4dVhHNGdJQ0FnYVdZZ0tHNXZRM1Z6ZEc5dGFYcGxjaUFtSmlCa1lYUmhXekpkS1NCN1hHNGdJQ0FnSUNCcFppQW9iMkpxVm1Gc2RXVWdQVDA5SUhWdVpHVm1hVzVsWkNBbUppQWhLR3RsZVNCcGJpQnZZbXBsWTNRcEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkbUZ5SUhKbGMzVnNkQ0E5SUdOMWMzUnZiV2w2WlhJZ1B5QmpkWE4wYjIxcGVtVnlLRzlpYWxaaGJIVmxMQ0J6Y21OV1lXeDFaU3dnYTJWNUtTQTZJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJR2xtSUNnaEtISmxjM1ZzZENBOVBUMGdkVzVrWldacGJtVmtJRDhnWW1GelpVbHpSWEYxWVd3b2MzSmpWbUZzZFdVc0lHOWlhbFpoYkhWbExDQmpkWE4wYjIxcGVtVnlMQ0IwY25WbEtTQTZJSEpsYzNWc2RDa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1SUNCeVpYUjFjbTRnZEhKMVpUdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCaVlYTmxTWE5OWVhSamFEdGNibHh1WEc1Y2JpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJQ29xSUZkRlFsQkJRMHNnUms5UFZFVlNYRzRnS2lvZ0xpOStMMnh2WkdGemFDOXBiblJsY201aGJDOWlZWE5sU1hOTllYUmphQzVxYzF4dUlDb3FJRzF2WkhWc1pTQnBaQ0E5SURNeVhHNGdLaW9nYlc5a2RXeGxJR05vZFc1cmN5QTlJREJjYmlBcUtpOGlMQ0oyWVhJZ1ltRnpaVWx6UlhGMVlXeEVaV1Z3SUQwZ2NtVnhkV2x5WlNnbkxpOWlZWE5sU1hORmNYVmhiRVJsWlhBbktTeGNiaUFnSUNCcGMwOWlhbVZqZENBOUlISmxjWFZwY21Vb0p5NHVMMnhoYm1jdmFYTlBZbXBsWTNRbktTeGNiaUFnSUNCcGMwOWlhbVZqZEV4cGEyVWdQU0J5WlhGMWFYSmxLQ2N1TDJselQySnFaV04wVEdsclpTY3BPMXh1WEc0dktpcGNiaUFxSUZSb1pTQmlZWE5sSUdsdGNHeGxiV1Z1ZEdGMGFXOXVJRzltSUdCZkxtbHpSWEYxWVd4Z0lIZHBkR2h2ZFhRZ2MzVndjRzl5ZENCbWIzSWdZSFJvYVhOZ0lHSnBibVJwYm1kY2JpQXFJR0JqZFhOMGIyMXBlbVZ5WUNCbWRXNWpkR2x2Ym5NdVhHNGdLbHh1SUNvZ1FIQnlhWFpoZEdWY2JpQXFJRUJ3WVhKaGJTQjdLbjBnZG1Gc2RXVWdWR2hsSUhaaGJIVmxJSFJ2SUdOdmJYQmhjbVV1WEc0Z0tpQkFjR0Z5WVcwZ2V5cDlJRzkwYUdWeUlGUm9aU0J2ZEdobGNpQjJZV3gxWlNCMGJ5QmpiMjF3WVhKbExseHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnVzJOMWMzUnZiV2w2WlhKZElGUm9aU0JtZFc1amRHbHZiaUIwYnlCamRYTjBiMjFwZW1VZ1kyOXRjR0Z5YVc1bklIWmhiSFZsY3k1Y2JpQXFJRUJ3WVhKaGJTQjdZbTl2YkdWaGJuMGdXMmx6VEc5dmMyVmRJRk53WldOcFpua2djR1Z5Wm05eWJXbHVaeUJ3WVhKMGFXRnNJR052YlhCaGNtbHpiMjV6TGx4dUlDb2dRSEJoY21GdElIdEJjbkpoZVgwZ1czTjBZV05yUVYwZ1ZISmhZMnR6SUhSeVlYWmxjbk5sWkNCZ2RtRnNkV1ZnSUc5aWFtVmpkSE11WEc0Z0tpQkFjR0Z5WVcwZ2UwRnljbUY1ZlNCYmMzUmhZMnRDWFNCVWNtRmphM01nZEhKaGRtVnljMlZrSUdCdmRHaGxjbUFnYjJKcVpXTjBjeTVjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlNaWFIxY201eklHQjBjblZsWUNCcFppQjBhR1VnZG1Gc2RXVnpJR0Z5WlNCbGNYVnBkbUZzWlc1MExDQmxiSE5sSUdCbVlXeHpaV0F1WEc0Z0tpOWNibVoxYm1OMGFXOXVJR0poYzJWSmMwVnhkV0ZzS0haaGJIVmxMQ0J2ZEdobGNpd2dZM1Z6ZEc5dGFYcGxjaXdnYVhOTWIyOXpaU3dnYzNSaFkydEJMQ0J6ZEdGamEwSXBJSHRjYmlBZ2FXWWdLSFpoYkhWbElEMDlQU0J2ZEdobGNpa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNCOVhHNGdJR2xtSUNoMllXeDFaU0E5UFNCdWRXeHNJSHg4SUc5MGFHVnlJRDA5SUc1MWJHd2dmSHdnS0NGcGMwOWlhbVZqZENoMllXeDFaU2tnSmlZZ0lXbHpUMkpxWldOMFRHbHJaU2h2ZEdobGNpa3BLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIWmhiSFZsSUNFOVBTQjJZV3gxWlNBbUppQnZkR2hsY2lBaFBUMGdiM1JvWlhJN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUdKaGMyVkpjMFZ4ZFdGc1JHVmxjQ2gyWVd4MVpTd2diM1JvWlhJc0lHSmhjMlZKYzBWeGRXRnNMQ0JqZFhOMGIyMXBlbVZ5TENCcGMweHZiM05sTENCemRHRmphMEVzSUhOMFlXTnJRaWs3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdZbUZ6WlVselJYRjFZV3c3WEc1Y2JseHVYRzR2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlBcUtpQlhSVUpRUVVOTElFWlBUMVJGVWx4dUlDb3FJQzR2Zmk5c2IyUmhjMmd2YVc1MFpYSnVZV3d2WW1GelpVbHpSWEYxWVd3dWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXpNMXh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aWRtRnlJR1Z4ZFdGc1FYSnlZWGx6SUQwZ2NtVnhkV2x5WlNnbkxpOWxjWFZoYkVGeWNtRjVjeWNwTEZ4dUlDQWdJR1Z4ZFdGc1FubFVZV2NnUFNCeVpYRjFhWEpsS0NjdUwyVnhkV0ZzUW5sVVlXY25LU3hjYmlBZ0lDQmxjWFZoYkU5aWFtVmpkSE1nUFNCeVpYRjFhWEpsS0NjdUwyVnhkV0ZzVDJKcVpXTjBjeWNwTEZ4dUlDQWdJR2x6UVhKeVlYa2dQU0J5WlhGMWFYSmxLQ2N1TGk5c1lXNW5MMmx6UVhKeVlYa25LU3hjYmlBZ0lDQnBjMVI1Y0dWa1FYSnlZWGtnUFNCeVpYRjFhWEpsS0NjdUxpOXNZVzVuTDJselZIbHdaV1JCY25KaGVTY3BPMXh1WEc0dktpb2dZRTlpYW1WamRDTjBiMU4wY21sdVoyQWdjbVZ6ZFd4MElISmxabVZ5Wlc1alpYTXVJQ292WEc1MllYSWdZWEpuYzFSaFp5QTlJQ2RiYjJKcVpXTjBJRUZ5WjNWdFpXNTBjMTBuTEZ4dUlDQWdJR0Z5Y21GNVZHRm5JRDBnSjF0dlltcGxZM1FnUVhKeVlYbGRKeXhjYmlBZ0lDQnZZbXBsWTNSVVlXY2dQU0FuVzI5aWFtVmpkQ0JQWW1wbFkzUmRKenRjYmx4dUx5b3FJRlZ6WldRZ1ptOXlJRzVoZEdsMlpTQnRaWFJvYjJRZ2NtVm1aWEpsYm1ObGN5NGdLaTljYm5aaGNpQnZZbXBsWTNSUWNtOTBieUE5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1U3WEc1Y2JpOHFLaUJWYzJWa0lIUnZJR05vWldOcklHOWlhbVZqZEhNZ1ptOXlJRzkzYmlCd2NtOXdaWEowYVdWekxpQXFMMXh1ZG1GeUlHaGhjMDkzYmxCeWIzQmxjblI1SUQwZ2IySnFaV04wVUhKdmRHOHVhR0Z6VDNkdVVISnZjR1Z5ZEhrN1hHNWNiaThxS2x4dUlDb2dWWE5sWkNCMGJ5QnlaWE52YkhabElIUm9aU0JiWUhSdlUzUnlhVzVuVkdGbllGMG9hSFIwY0RvdkwyVmpiV0V0YVc1MFpYSnVZWFJwYjI1aGJDNXZjbWN2WldOdFlTMHlOakl2Tmk0d0x5TnpaV010YjJKcVpXTjBMbkJ5YjNSdmRIbHdaUzUwYjNOMGNtbHVaeWxjYmlBcUlHOW1JSFpoYkhWbGN5NWNiaUFxTDF4dWRtRnlJRzlpYWxSdlUzUnlhVzVuSUQwZ2IySnFaV04wVUhKdmRHOHVkRzlUZEhKcGJtYzdYRzVjYmk4cUtseHVJQ29nUVNCemNHVmphV0ZzYVhwbFpDQjJaWEp6YVc5dUlHOW1JR0JpWVhObFNYTkZjWFZoYkdBZ1ptOXlJR0Z5Y21GNWN5QmhibVFnYjJKcVpXTjBjeUIzYUdsamFDQndaWEptYjNKdGMxeHVJQ29nWkdWbGNDQmpiMjF3WVhKcGMyOXVjeUJoYm1RZ2RISmhZMnR6SUhSeVlYWmxjbk5sWkNCdlltcGxZM1J6SUdWdVlXSnNhVzVuSUc5aWFtVmpkSE1nZDJsMGFDQmphWEpqZFd4aGNseHVJQ29nY21WbVpYSmxibU5sY3lCMGJ5QmlaU0JqYjIxd1lYSmxaQzVjYmlBcVhHNGdLaUJBY0hKcGRtRjBaVnh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUc5aWFtVmpkQ0JVYUdVZ2IySnFaV04wSUhSdklHTnZiWEJoY21VdVhHNGdLaUJBY0dGeVlXMGdlMDlpYW1WamRIMGdiM1JvWlhJZ1ZHaGxJRzkwYUdWeUlHOWlhbVZqZENCMGJ5QmpiMjF3WVhKbExseHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWlhGMVlXeEdkVzVqSUZSb1pTQm1kVzVqZEdsdmJpQjBieUJrWlhSbGNtMXBibVVnWlhGMWFYWmhiR1Z1ZEhNZ2IyWWdkbUZzZFdWekxseHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnVzJOMWMzUnZiV2w2WlhKZElGUm9aU0JtZFc1amRHbHZiaUIwYnlCamRYTjBiMjFwZW1VZ1kyOXRjR0Z5YVc1bklHOWlhbVZqZEhNdVhHNGdLaUJBY0dGeVlXMGdlMkp2YjJ4bFlXNTlJRnRwYzB4dmIzTmxYU0JUY0dWamFXWjVJSEJsY21admNtMXBibWNnY0dGeWRHbGhiQ0JqYjIxd1lYSnBjMjl1Y3k1Y2JpQXFJRUJ3WVhKaGJTQjdRWEp5WVhsOUlGdHpkR0ZqYTBFOVcxMWRJRlJ5WVdOcmN5QjBjbUYyWlhKelpXUWdZSFpoYkhWbFlDQnZZbXBsWTNSekxseHVJQ29nUUhCaGNtRnRJSHRCY25KaGVYMGdXM04wWVdOclFqMWJYVjBnVkhKaFkydHpJSFJ5WVhabGNuTmxaQ0JnYjNSb1pYSmdJRzlpYW1WamRITXVYRzRnS2lCQWNtVjBkWEp1Y3lCN1ltOXZiR1ZoYm4wZ1VtVjBkWEp1Y3lCZ2RISjFaV0FnYVdZZ2RHaGxJRzlpYW1WamRITWdZWEpsSUdWeGRXbDJZV3hsYm5Rc0lHVnNjMlVnWUdaaGJITmxZQzVjYmlBcUwxeHVablZ1WTNScGIyNGdZbUZ6WlVselJYRjFZV3hFWldWd0tHOWlhbVZqZEN3Z2IzUm9aWElzSUdWeGRXRnNSblZ1WXl3Z1kzVnpkRzl0YVhwbGNpd2dhWE5NYjI5elpTd2djM1JoWTJ0QkxDQnpkR0ZqYTBJcElIdGNiaUFnZG1GeUlHOWlha2x6UVhKeUlEMGdhWE5CY25KaGVTaHZZbXBsWTNRcExGeHVJQ0FnSUNBZ2IzUm9TWE5CY25JZ1BTQnBjMEZ5Y21GNUtHOTBhR1Z5S1N4Y2JpQWdJQ0FnSUc5aWFsUmhaeUE5SUdGeWNtRjVWR0ZuTEZ4dUlDQWdJQ0FnYjNSb1ZHRm5JRDBnWVhKeVlYbFVZV2M3WEc1Y2JpQWdhV1lnS0NGdlltcEpjMEZ5Y2lrZ2UxeHVJQ0FnSUc5aWFsUmhaeUE5SUc5aWFsUnZVM1J5YVc1bkxtTmhiR3dvYjJKcVpXTjBLVHRjYmlBZ0lDQnBaaUFvYjJKcVZHRm5JRDA5SUdGeVozTlVZV2NwSUh0Y2JpQWdJQ0FnSUc5aWFsUmhaeUE5SUc5aWFtVmpkRlJoWnp0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0c5aWFsUmhaeUFoUFNCdlltcGxZM1JVWVdjcElIdGNiaUFnSUNBZ0lHOWlha2x6UVhKeUlEMGdhWE5VZVhCbFpFRnljbUY1S0c5aWFtVmpkQ2s3WEc0Z0lDQWdmVnh1SUNCOVhHNGdJR2xtSUNnaGIzUm9TWE5CY25JcElIdGNiaUFnSUNCdmRHaFVZV2NnUFNCdlltcFViMU4wY21sdVp5NWpZV3hzS0c5MGFHVnlLVHRjYmlBZ0lDQnBaaUFvYjNSb1ZHRm5JRDA5SUdGeVozTlVZV2NwSUh0Y2JpQWdJQ0FnSUc5MGFGUmhaeUE5SUc5aWFtVmpkRlJoWnp0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0c5MGFGUmhaeUFoUFNCdlltcGxZM1JVWVdjcElIdGNiaUFnSUNBZ0lHOTBhRWx6UVhKeUlEMGdhWE5VZVhCbFpFRnljbUY1S0c5MGFHVnlLVHRjYmlBZ0lDQjlYRzRnSUgxY2JpQWdkbUZ5SUc5aWFrbHpUMkpxSUQwZ2IySnFWR0ZuSUQwOUlHOWlhbVZqZEZSaFp5eGNiaUFnSUNBZ0lHOTBhRWx6VDJKcUlEMGdiM1JvVkdGbklEMDlJRzlpYW1WamRGUmhaeXhjYmlBZ0lDQWdJR2x6VTJGdFpWUmhaeUE5SUc5aWFsUmhaeUE5UFNCdmRHaFVZV2M3WEc1Y2JpQWdhV1lnS0dselUyRnRaVlJoWnlBbUppQWhLRzlpYWtselFYSnlJSHg4SUc5aWFrbHpUMkpxS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJsY1hWaGJFSjVWR0ZuS0c5aWFtVmpkQ3dnYjNSb1pYSXNJRzlpYWxSaFp5azdYRzRnSUgxY2JpQWdhV1lnS0NGcGMweHZiM05sS1NCN1hHNGdJQ0FnZG1GeUlHOWlha2x6VjNKaGNIQmxaQ0E5SUc5aWFrbHpUMkpxSUNZbUlHaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQW5YMTkzY21Gd2NHVmtYMThuS1N4Y2JpQWdJQ0FnSUNBZ2IzUm9TWE5YY21Gd2NHVmtJRDBnYjNSb1NYTlBZbW9nSmlZZ2FHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZkR2hsY2l3Z0oxOWZkM0poY0hCbFpGOWZKeWs3WEc1Y2JpQWdJQ0JwWmlBb2IySnFTWE5YY21Gd2NHVmtJSHg4SUc5MGFFbHpWM0poY0hCbFpDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHVnhkV0ZzUm5WdVl5aHZZbXBKYzFkeVlYQndaV1FnUHlCdlltcGxZM1F1ZG1Gc2RXVW9LU0E2SUc5aWFtVmpkQ3dnYjNSb1NYTlhjbUZ3Y0dWa0lEOGdiM1JvWlhJdWRtRnNkV1VvS1NBNklHOTBhR1Z5TENCamRYTjBiMjFwZW1WeUxDQnBjMHh2YjNObExDQnpkR0ZqYTBFc0lITjBZV05yUWlrN1hHNGdJQ0FnZlZ4dUlDQjlYRzRnSUdsbUlDZ2hhWE5UWVcxbFZHRm5LU0I3WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQjlYRzRnSUM4dklFRnpjM1Z0WlNCamVXTnNhV01nZG1Gc2RXVnpJR0Z5WlNCbGNYVmhiQzVjYmlBZ0x5OGdSbTl5SUcxdmNtVWdhVzVtYjNKdFlYUnBiMjRnYjI0Z1pHVjBaV04wYVc1bklHTnBjbU4xYkdGeUlISmxabVZ5Wlc1alpYTWdjMlZsSUdoMGRIQnpPaTh2WlhNMUxtZHBkR2gxWWk1cGJ5OGpTazh1WEc0Z0lITjBZV05yUVNCOGZDQW9jM1JoWTJ0QklEMGdXMTBwTzF4dUlDQnpkR0ZqYTBJZ2ZId2dLSE4wWVdOclFpQTlJRnRkS1R0Y2JseHVJQ0IyWVhJZ2JHVnVaM1JvSUQwZ2MzUmhZMnRCTG14bGJtZDBhRHRjYmlBZ2QyaHBiR1VnS0d4bGJtZDBhQzB0S1NCN1hHNGdJQ0FnYVdZZ0tITjBZV05yUVZ0c1pXNW5kR2hkSUQwOUlHOWlhbVZqZENrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhOMFlXTnJRbHRzWlc1bmRHaGRJRDA5SUc5MGFHVnlPMXh1SUNBZ0lIMWNiaUFnZlZ4dUlDQXZMeUJCWkdRZ1lHOWlhbVZqZEdBZ1lXNWtJR0J2ZEdobGNtQWdkRzhnZEdobElITjBZV05ySUc5bUlIUnlZWFpsY25ObFpDQnZZbXBsWTNSekxseHVJQ0J6ZEdGamEwRXVjSFZ6YUNodlltcGxZM1FwTzF4dUlDQnpkR0ZqYTBJdWNIVnphQ2h2ZEdobGNpazdYRzVjYmlBZ2RtRnlJSEpsYzNWc2RDQTlJQ2h2WW1wSmMwRnljaUEvSUdWeGRXRnNRWEp5WVhseklEb2daWEYxWVd4UFltcGxZM1J6S1NodlltcGxZM1FzSUc5MGFHVnlMQ0JsY1hWaGJFWjFibU1zSUdOMWMzUnZiV2w2WlhJc0lHbHpURzl2YzJVc0lITjBZV05yUVN3Z2MzUmhZMnRDS1R0Y2JseHVJQ0J6ZEdGamEwRXVjRzl3S0NrN1hHNGdJSE4wWVdOclFpNXdiM0FvS1R0Y2JseHVJQ0J5WlhSMWNtNGdjbVZ6ZFd4ME8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdKaGMyVkpjMFZ4ZFdGc1JHVmxjRHRjYmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzlpWVhObFNYTkZjWFZoYkVSbFpYQXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F6TkZ4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lkbUZ5SUdGeWNtRjVVMjl0WlNBOUlISmxjWFZwY21Vb0p5NHZZWEp5WVhsVGIyMWxKeWs3WEc1Y2JpOHFLbHh1SUNvZ1FTQnpjR1ZqYVdGc2FYcGxaQ0IyWlhKemFXOXVJRzltSUdCaVlYTmxTWE5GY1hWaGJFUmxaWEJnSUdadmNpQmhjbkpoZVhNZ2QybDBhQ0J6ZFhCd2IzSjBJR1p2Y2x4dUlDb2djR0Z5ZEdsaGJDQmtaV1Z3SUdOdmJYQmhjbWx6YjI1ekxseHVJQ3BjYmlBcUlFQndjbWwyWVhSbFhHNGdLaUJBY0dGeVlXMGdlMEZ5Y21GNWZTQmhjbkpoZVNCVWFHVWdZWEp5WVhrZ2RHOGdZMjl0Y0dGeVpTNWNiaUFxSUVCd1lYSmhiU0I3UVhKeVlYbDlJRzkwYUdWeUlGUm9aU0J2ZEdobGNpQmhjbkpoZVNCMGJ5QmpiMjF3WVhKbExseHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnWlhGMVlXeEdkVzVqSUZSb1pTQm1kVzVqZEdsdmJpQjBieUJrWlhSbGNtMXBibVVnWlhGMWFYWmhiR1Z1ZEhNZ2IyWWdkbUZzZFdWekxseHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnVzJOMWMzUnZiV2w2WlhKZElGUm9aU0JtZFc1amRHbHZiaUIwYnlCamRYTjBiMjFwZW1VZ1kyOXRjR0Z5YVc1bklHRnljbUY1Y3k1Y2JpQXFJRUJ3WVhKaGJTQjdZbTl2YkdWaGJuMGdXMmx6VEc5dmMyVmRJRk53WldOcFpua2djR1Z5Wm05eWJXbHVaeUJ3WVhKMGFXRnNJR052YlhCaGNtbHpiMjV6TGx4dUlDb2dRSEJoY21GdElIdEJjbkpoZVgwZ1czTjBZV05yUVYwZ1ZISmhZMnR6SUhSeVlYWmxjbk5sWkNCZ2RtRnNkV1ZnSUc5aWFtVmpkSE11WEc0Z0tpQkFjR0Z5WVcwZ2UwRnljbUY1ZlNCYmMzUmhZMnRDWFNCVWNtRmphM01nZEhKaGRtVnljMlZrSUdCdmRHaGxjbUFnYjJKcVpXTjBjeTVjYmlBcUlFQnlaWFIxY201eklIdGliMjlzWldGdWZTQlNaWFIxY201eklHQjBjblZsWUNCcFppQjBhR1VnWVhKeVlYbHpJR0Z5WlNCbGNYVnBkbUZzWlc1MExDQmxiSE5sSUdCbVlXeHpaV0F1WEc0Z0tpOWNibVoxYm1OMGFXOXVJR1Z4ZFdGc1FYSnlZWGx6S0dGeWNtRjVMQ0J2ZEdobGNpd2daWEYxWVd4R2RXNWpMQ0JqZFhOMGIyMXBlbVZ5TENCcGMweHZiM05sTENCemRHRmphMEVzSUhOMFlXTnJRaWtnZTF4dUlDQjJZWElnYVc1a1pYZ2dQU0F0TVN4Y2JpQWdJQ0FnSUdGeWNreGxibWQwYUNBOUlHRnljbUY1TG14bGJtZDBhQ3hjYmlBZ0lDQWdJRzkwYUV4bGJtZDBhQ0E5SUc5MGFHVnlMbXhsYm1kMGFEdGNibHh1SUNCcFppQW9ZWEp5VEdWdVozUm9JQ0U5SUc5MGFFeGxibWQwYUNBbUppQWhLR2x6VEc5dmMyVWdKaVlnYjNSb1RHVnVaM1JvSUQ0Z1lYSnlUR1Z1WjNSb0tTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ2ZWeHVJQ0F2THlCSloyNXZjbVVnYm05dUxXbHVaR1Y0SUhCeWIzQmxjblJwWlhNdVhHNGdJSGRvYVd4bElDZ3JLMmx1WkdWNElEd2dZWEp5VEdWdVozUm9LU0I3WEc0Z0lDQWdkbUZ5SUdGeWNsWmhiSFZsSUQwZ1lYSnlZWGxiYVc1a1pYaGRMRnh1SUNBZ0lDQWdJQ0J2ZEdoV1lXeDFaU0E5SUc5MGFHVnlXMmx1WkdWNFhTeGNiaUFnSUNBZ0lDQWdjbVZ6ZFd4MElEMGdZM1Z6ZEc5dGFYcGxjaUEvSUdOMWMzUnZiV2w2WlhJb2FYTk1iMjl6WlNBL0lHOTBhRlpoYkhWbElEb2dZWEp5Vm1Gc2RXVXNJR2x6VEc5dmMyVWdQeUJoY25KV1lXeDFaU0E2SUc5MGFGWmhiSFZsTENCcGJtUmxlQ2tnT2lCMWJtUmxabWx1WldRN1hHNWNiaUFnSUNCcFppQW9jbVZ6ZFd4MElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUdsbUlDaHlaWE4xYkhRcElIdGNiaUFnSUNBZ0lDQWdZMjl1ZEdsdWRXVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJRkpsWTNWeWMybDJaV3g1SUdOdmJYQmhjbVVnWVhKeVlYbHpJQ2h6ZFhOalpYQjBhV0pzWlNCMGJ5QmpZV3hzSUhOMFlXTnJJR3hwYldsMGN5a3VYRzRnSUNBZ2FXWWdLR2x6VEc5dmMyVXBJSHRjYmlBZ0lDQWdJR2xtSUNnaFlYSnlZWGxUYjIxbEtHOTBhR1Z5TENCbWRXNWpkR2x2YmlodmRHaFdZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0Z5Y2xaaGJIVmxJRDA5UFNCdmRHaFdZV3gxWlNCOGZDQmxjWFZoYkVaMWJtTW9ZWEp5Vm1Gc2RXVXNJRzkwYUZaaGJIVmxMQ0JqZFhOMGIyMXBlbVZ5TENCcGMweHZiM05sTENCemRHRmphMEVzSUhOMFlXTnJRaWs3WEc0Z0lDQWdJQ0FnSUNBZ2ZTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lTaGhjbkpXWVd4MVpTQTlQVDBnYjNSb1ZtRnNkV1VnZkh3Z1pYRjFZV3hHZFc1aktHRnljbFpoYkhWbExDQnZkR2hXWVd4MVpTd2dZM1Z6ZEc5dGFYcGxjaXdnYVhOTWIyOXpaU3dnYzNSaFkydEJMQ0J6ZEdGamEwSXBLU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgxY2JpQWdmVnh1SUNCeVpYUjFjbTRnZEhKMVpUdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbGNYVmhiRUZ5Y21GNWN6dGNibHh1WEc1Y2JpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJQ29xSUZkRlFsQkJRMHNnUms5UFZFVlNYRzRnS2lvZ0xpOStMMnh2WkdGemFDOXBiblJsY201aGJDOWxjWFZoYkVGeWNtRjVjeTVxYzF4dUlDb3FJRzF2WkhWc1pTQnBaQ0E5SURNMVhHNGdLaW9nYlc5a2RXeGxJR05vZFc1cmN5QTlJREJjYmlBcUtpOGlMQ0l2S2lwY2JpQXFJRUVnYzNCbFkybGhiR2w2WldRZ2RtVnljMmx2YmlCdlppQmdYeTV6YjIxbFlDQm1iM0lnWVhKeVlYbHpJSGRwZEdodmRYUWdjM1Z3Y0c5eWRDQm1iM0lnWTJGc2JHSmhZMnRjYmlBcUlITm9iM0owYUdGdVpITWdZVzVrSUdCMGFHbHpZQ0JpYVc1a2FXNW5MbHh1SUNwY2JpQXFJRUJ3Y21sMllYUmxYRzRnS2lCQWNHRnlZVzBnZTBGeWNtRjVmU0JoY25KaGVTQlVhR1VnWVhKeVlYa2dkRzhnYVhSbGNtRjBaU0J2ZG1WeUxseHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnY0hKbFpHbGpZWFJsSUZSb1pTQm1kVzVqZEdsdmJpQnBiblp2YTJWa0lIQmxjaUJwZEdWeVlYUnBiMjR1WEc0Z0tpQkFjbVYwZFhKdWN5QjdZbTl2YkdWaGJuMGdVbVYwZFhKdWN5QmdkSEoxWldBZ2FXWWdZVzU1SUdWc1pXMWxiblFnY0dGemMyVnpJSFJvWlNCd2NtVmthV05oZEdVZ1kyaGxZMnNzWEc0Z0tpQWdaV3h6WlNCZ1ptRnNjMlZnTGx4dUlDb3ZYRzVtZFc1amRHbHZiaUJoY25KaGVWTnZiV1VvWVhKeVlYa3NJSEJ5WldScFkyRjBaU2tnZTF4dUlDQjJZWElnYVc1a1pYZ2dQU0F0TVN4Y2JpQWdJQ0FnSUd4bGJtZDBhQ0E5SUdGeWNtRjVMbXhsYm1kMGFEdGNibHh1SUNCM2FHbHNaU0FvS3l0cGJtUmxlQ0E4SUd4bGJtZDBhQ2tnZTF4dUlDQWdJR2xtSUNod2NtVmthV05oZEdVb1lYSnlZWGxiYVc1a1pYaGRMQ0JwYm1SbGVDd2dZWEp5WVhrcEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RISjFaVHRjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjbVYwZFhKdUlHWmhiSE5sTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR0Z5Y21GNVUyOXRaVHRjYmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzloY25KaGVWTnZiV1V1YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBek5seHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpTHlvcUlHQlBZbXBsWTNRamRHOVRkSEpwYm1kZ0lISmxjM1ZzZENCeVpXWmxjbVZ1WTJWekxpQXFMMXh1ZG1GeUlHSnZiMnhVWVdjZ1BTQW5XMjlpYW1WamRDQkNiMjlzWldGdVhTY3NYRzRnSUNBZ1pHRjBaVlJoWnlBOUlDZGJiMkpxWldOMElFUmhkR1ZkSnl4Y2JpQWdJQ0JsY25KdmNsUmhaeUE5SUNkYmIySnFaV04wSUVWeWNtOXlYU2NzWEc0Z0lDQWdiblZ0WW1WeVZHRm5JRDBnSjF0dlltcGxZM1FnVG5WdFltVnlYU2NzWEc0Z0lDQWdjbVZuWlhod1ZHRm5JRDBnSjF0dlltcGxZM1FnVW1WblJYaHdYU2NzWEc0Z0lDQWdjM1J5YVc1blZHRm5JRDBnSjF0dlltcGxZM1FnVTNSeWFXNW5YU2M3WEc1Y2JpOHFLbHh1SUNvZ1FTQnpjR1ZqYVdGc2FYcGxaQ0IyWlhKemFXOXVJRzltSUdCaVlYTmxTWE5GY1hWaGJFUmxaWEJnSUdadmNpQmpiMjF3WVhKcGJtY2diMkpxWldOMGN5QnZabHh1SUNvZ2RHaGxJSE5oYldVZ1lIUnZVM1J5YVc1blZHRm5ZQzVjYmlBcVhHNGdLaUFxS2s1dmRHVTZLaW9nVkdocGN5Qm1kVzVqZEdsdmJpQnZibXg1SUhOMWNIQnZjblJ6SUdOdmJYQmhjbWx1WnlCMllXeDFaWE1nZDJsMGFDQjBZV2R6SUc5bVhHNGdLaUJnUW05dmJHVmhibUFzSUdCRVlYUmxZQ3dnWUVWeWNtOXlZQ3dnWUU1MWJXSmxjbUFzSUdCU1pXZEZlSEJnTENCdmNpQmdVM1J5YVc1bllDNWNiaUFxWEc0Z0tpQkFjSEpwZG1GMFpWeHVJQ29nUUhCaGNtRnRJSHRQWW1wbFkzUjlJRzlpYW1WamRDQlVhR1VnYjJKcVpXTjBJSFJ2SUdOdmJYQmhjbVV1WEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2IzUm9aWElnVkdobElHOTBhR1Z5SUc5aWFtVmpkQ0IwYnlCamIyMXdZWEpsTGx4dUlDb2dRSEJoY21GdElIdHpkSEpwYm1kOUlIUmhaeUJVYUdVZ1lIUnZVM1J5YVc1blZHRm5ZQ0J2WmlCMGFHVWdiMkpxWldOMGN5QjBieUJqYjIxd1lYSmxMbHh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGSmxkSFZ5Ym5NZ1lIUnlkV1ZnSUdsbUlIUm9aU0J2WW1wbFkzUnpJR0Z5WlNCbGNYVnBkbUZzWlc1MExDQmxiSE5sSUdCbVlXeHpaV0F1WEc0Z0tpOWNibVoxYm1OMGFXOXVJR1Z4ZFdGc1FubFVZV2NvYjJKcVpXTjBMQ0J2ZEdobGNpd2dkR0ZuS1NCN1hHNGdJSE4zYVhSamFDQW9kR0ZuS1NCN1hHNGdJQ0FnWTJGelpTQmliMjlzVkdGbk9seHVJQ0FnSUdOaGMyVWdaR0YwWlZSaFp6cGNiaUFnSUNBZ0lDOHZJRU52WlhKalpTQmtZWFJsY3lCaGJtUWdZbTl2YkdWaGJuTWdkRzhnYm5WdFltVnljeXdnWkdGMFpYTWdkRzhnYldsc2JHbHpaV052Ym1SeklHRnVaQ0JpYjI5c1pXRnVjMXh1SUNBZ0lDQWdMeThnZEc4Z1lERmdJRzl5SUdBd1lDQjBjbVZoZEdsdVp5QnBiblpoYkdsa0lHUmhkR1Z6SUdOdlpYSmpaV1FnZEc4Z1lFNWhUbUFnWVhNZ2JtOTBJR1Z4ZFdGc0xseHVJQ0FnSUNBZ2NtVjBkWEp1SUN0dlltcGxZM1FnUFQwZ0syOTBhR1Z5TzF4dVhHNGdJQ0FnWTJGelpTQmxjbkp2Y2xSaFp6cGNiaUFnSUNBZ0lISmxkSFZ5YmlCdlltcGxZM1F1Ym1GdFpTQTlQU0J2ZEdobGNpNXVZVzFsSUNZbUlHOWlhbVZqZEM1dFpYTnpZV2RsSUQwOUlHOTBhR1Z5TG0xbGMzTmhaMlU3WEc1Y2JpQWdJQ0JqWVhObElHNTFiV0psY2xSaFp6cGNiaUFnSUNBZ0lDOHZJRlJ5WldGMElHQk9ZVTVnSUhaekxpQmdUbUZPWUNCaGN5QmxjWFZoYkM1Y2JpQWdJQ0FnSUhKbGRIVnliaUFvYjJKcVpXTjBJQ0U5SUN0dlltcGxZM1FwWEc0Z0lDQWdJQ0FnSUQ4Z2IzUm9aWElnSVQwZ0syOTBhR1Z5WEc0Z0lDQWdJQ0FnSURvZ2IySnFaV04wSUQwOUlDdHZkR2hsY2p0Y2JseHVJQ0FnSUdOaGMyVWdjbVZuWlhod1ZHRm5PbHh1SUNBZ0lHTmhjMlVnYzNSeWFXNW5WR0ZuT2x4dUlDQWdJQ0FnTHk4Z1EyOWxjbU5sSUhKbFoyVjRaWE1nZEc4Z2MzUnlhVzVuY3lCaGJtUWdkSEpsWVhRZ2MzUnlhVzVuY3lCd2NtbHRhWFJwZG1WeklHRnVaQ0J6ZEhKcGJtZGNiaUFnSUNBZ0lDOHZJRzlpYW1WamRITWdZWE1nWlhGMVlXd3VJRk5sWlNCb2RIUndjem92TDJWek5TNW5hWFJvZFdJdWFXOHZJM2d4TlM0eE1DNDJMalFnWm05eUlHMXZjbVVnWkdWMFlXbHNjeTVjYmlBZ0lDQWdJSEpsZEhWeWJpQnZZbXBsWTNRZ1BUMGdLRzkwYUdWeUlDc2dKeWNwTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJtWVd4elpUdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbGNYVmhiRUo1VkdGbk8xeHVYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lBdUwzNHZiRzlrWVhOb0wybHVkR1Z5Ym1Gc0wyVnhkV0ZzUW5sVVlXY3Vhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F6TjF4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lkbUZ5SUd0bGVYTWdQU0J5WlhGMWFYSmxLQ2N1TGk5dlltcGxZM1F2YTJWNWN5Y3BPMXh1WEc0dktpb2dWWE5sWkNCbWIzSWdibUYwYVhabElHMWxkR2h2WkNCeVpXWmxjbVZ1WTJWekxpQXFMMXh1ZG1GeUlHOWlhbVZqZEZCeWIzUnZJRDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaVHRjYmx4dUx5b3FJRlZ6WldRZ2RHOGdZMmhsWTJzZ2IySnFaV04wY3lCbWIzSWdiM2R1SUhCeWIzQmxjblJwWlhNdUlDb3ZYRzUyWVhJZ2FHRnpUM2R1VUhKdmNHVnlkSGtnUFNCdlltcGxZM1JRY205MGJ5NW9ZWE5QZDI1UWNtOXdaWEowZVR0Y2JseHVMeW9xWEc0Z0tpQkJJSE53WldOcFlXeHBlbVZrSUhabGNuTnBiMjRnYjJZZ1lHSmhjMlZKYzBWeGRXRnNSR1ZsY0dBZ1ptOXlJRzlpYW1WamRITWdkMmwwYUNCemRYQndiM0owSUdadmNseHVJQ29nY0dGeWRHbGhiQ0JrWldWd0lHTnZiWEJoY21semIyNXpMbHh1SUNwY2JpQXFJRUJ3Y21sMllYUmxYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnYjJKcVpXTjBJRlJvWlNCdlltcGxZM1FnZEc4Z1kyOXRjR0Z5WlM1Y2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQnZkR2hsY2lCVWFHVWdiM1JvWlhJZ2IySnFaV04wSUhSdklHTnZiWEJoY21VdVhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JsY1hWaGJFWjFibU1nVkdobElHWjFibU4wYVc5dUlIUnZJR1JsZEdWeWJXbHVaU0JsY1hWcGRtRnNaVzUwY3lCdlppQjJZV3gxWlhNdVhHNGdLaUJBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0JiWTNWemRHOXRhWHBsY2wwZ1ZHaGxJR1oxYm1OMGFXOXVJSFJ2SUdOMWMzUnZiV2w2WlNCamIyMXdZWEpwYm1jZ2RtRnNkV1Z6TGx4dUlDb2dRSEJoY21GdElIdGliMjlzWldGdWZTQmJhWE5NYjI5elpWMGdVM0JsWTJsbWVTQndaWEptYjNKdGFXNW5JSEJoY25ScFlXd2dZMjl0Y0dGeWFYTnZibk11WEc0Z0tpQkFjR0Z5WVcwZ2UwRnljbUY1ZlNCYmMzUmhZMnRCWFNCVWNtRmphM01nZEhKaGRtVnljMlZrSUdCMllXeDFaV0FnYjJKcVpXTjBjeTVjYmlBcUlFQndZWEpoYlNCN1FYSnlZWGw5SUZ0emRHRmphMEpkSUZSeVlXTnJjeUIwY21GMlpYSnpaV1FnWUc5MGFHVnlZQ0J2WW1wbFkzUnpMbHh1SUNvZ1FISmxkSFZ5Ym5NZ2UySnZiMnhsWVc1OUlGSmxkSFZ5Ym5NZ1lIUnlkV1ZnSUdsbUlIUm9aU0J2WW1wbFkzUnpJR0Z5WlNCbGNYVnBkbUZzWlc1MExDQmxiSE5sSUdCbVlXeHpaV0F1WEc0Z0tpOWNibVoxYm1OMGFXOXVJR1Z4ZFdGc1QySnFaV04wY3lodlltcGxZM1FzSUc5MGFHVnlMQ0JsY1hWaGJFWjFibU1zSUdOMWMzUnZiV2w2WlhJc0lHbHpURzl2YzJVc0lITjBZV05yUVN3Z2MzUmhZMnRDS1NCN1hHNGdJSFpoY2lCdlltcFFjbTl3Y3lBOUlHdGxlWE1vYjJKcVpXTjBLU3hjYmlBZ0lDQWdJRzlpYWt4bGJtZDBhQ0E5SUc5aWFsQnliM0J6TG14bGJtZDBhQ3hjYmlBZ0lDQWdJRzkwYUZCeWIzQnpJRDBnYTJWNWN5aHZkR2hsY2lrc1hHNGdJQ0FnSUNCdmRHaE1aVzVuZEdnZ1BTQnZkR2hRY205d2N5NXNaVzVuZEdnN1hHNWNiaUFnYVdZZ0tHOWlha3hsYm1kMGFDQWhQU0J2ZEdoTVpXNW5kR2dnSmlZZ0lXbHpURzl2YzJVcElIdGNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUgxY2JpQWdkbUZ5SUdsdVpHVjRJRDBnYjJKcVRHVnVaM1JvTzF4dUlDQjNhR2xzWlNBb2FXNWtaWGd0TFNrZ2UxeHVJQ0FnSUhaaGNpQnJaWGtnUFNCdlltcFFjbTl3YzF0cGJtUmxlRjA3WEc0Z0lDQWdhV1lnS0NFb2FYTk1iMjl6WlNBL0lHdGxlU0JwYmlCdmRHaGxjaUE2SUdoaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IzUm9aWElzSUd0bGVTa3BLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhaaGNpQnphMmx3UTNSdmNpQTlJR2x6VEc5dmMyVTdYRzRnSUhkb2FXeGxJQ2dySzJsdVpHVjRJRHdnYjJKcVRHVnVaM1JvS1NCN1hHNGdJQ0FnYTJWNUlEMGdiMkpxVUhKdmNITmJhVzVrWlhoZE8xeHVJQ0FnSUhaaGNpQnZZbXBXWVd4MVpTQTlJRzlpYW1WamRGdHJaWGxkTEZ4dUlDQWdJQ0FnSUNCdmRHaFdZV3gxWlNBOUlHOTBhR1Z5VzJ0bGVWMHNYRzRnSUNBZ0lDQWdJSEpsYzNWc2RDQTlJR04xYzNSdmJXbDZaWElnUHlCamRYTjBiMjFwZW1WeUtHbHpURzl2YzJVZ1B5QnZkR2hXWVd4MVpTQTZJRzlpYWxaaGJIVmxMQ0JwYzB4dmIzTmxQeUJ2WW1wV1lXeDFaU0E2SUc5MGFGWmhiSFZsTENCclpYa3BJRG9nZFc1a1pXWnBibVZrTzF4dVhHNGdJQ0FnTHk4Z1VtVmpkWEp6YVhabGJIa2dZMjl0Y0dGeVpTQnZZbXBsWTNSeklDaHpkWE5qWlhCMGFXSnNaU0IwYnlCallXeHNJSE4wWVdOcklHeHBiV2wwY3lrdVhHNGdJQ0FnYVdZZ0tDRW9jbVZ6ZFd4MElEMDlQU0IxYm1SbFptbHVaV1FnUHlCbGNYVmhiRVoxYm1Nb2IySnFWbUZzZFdVc0lHOTBhRlpoYkhWbExDQmpkWE4wYjIxcGVtVnlMQ0JwYzB4dmIzTmxMQ0J6ZEdGamEwRXNJSE4wWVdOclFpa2dPaUJ5WlhOMWJIUXBLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJQ0FnZlZ4dUlDQWdJSE5yYVhCRGRHOXlJSHg4SUNoemEybHdRM1J2Y2lBOUlHdGxlU0E5UFNBblkyOXVjM1J5ZFdOMGIzSW5LVHRjYmlBZ2ZWeHVJQ0JwWmlBb0lYTnJhWEJEZEc5eUtTQjdYRzRnSUNBZ2RtRnlJRzlpYWtOMGIzSWdQU0J2WW1wbFkzUXVZMjl1YzNSeWRXTjBiM0lzWEc0Z0lDQWdJQ0FnSUc5MGFFTjBiM0lnUFNCdmRHaGxjaTVqYjI1emRISjFZM1J2Y2p0Y2JseHVJQ0FnSUM4dklFNXZiaUJnVDJKcVpXTjBZQ0J2WW1wbFkzUWdhVzV6ZEdGdVkyVnpJSGRwZEdnZ1pHbG1abVZ5Wlc1MElHTnZibk4wY25WamRHOXljeUJoY21VZ2JtOTBJR1Z4ZFdGc0xseHVJQ0FnSUdsbUlDaHZZbXBEZEc5eUlDRTlJRzkwYUVOMGIzSWdKaVpjYmlBZ0lDQWdJQ0FnS0NkamIyNXpkSEoxWTNSdmNpY2dhVzRnYjJKcVpXTjBJQ1ltSUNkamIyNXpkSEoxWTNSdmNpY2dhVzRnYjNSb1pYSXBJQ1ltWEc0Z0lDQWdJQ0FnSUNFb2RIbHdaVzltSUc5aWFrTjBiM0lnUFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJ2WW1wRGRHOXlJR2x1YzNSaGJtTmxiMllnYjJKcVEzUnZjaUFtSmx4dUlDQWdJQ0FnSUNBZ0lIUjVjR1Z2WmlCdmRHaERkRzl5SUQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnYjNSb1EzUnZjaUJwYm5OMFlXNWpaVzltSUc5MGFFTjBiM0lwS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCMGNuVmxPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHVnhkV0ZzVDJKcVpXTjBjenRjYmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzlsY1hWaGJFOWlhbVZqZEhNdWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXpPRnh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aWRtRnlJR2RsZEU1aGRHbDJaU0E5SUhKbGNYVnBjbVVvSnk0dUwybHVkR1Z5Ym1Gc0wyZGxkRTVoZEdsMlpTY3BMRnh1SUNBZ0lHbHpRWEp5WVhsTWFXdGxJRDBnY21WeGRXbHlaU2duTGk0dmFXNTBaWEp1WVd3dmFYTkJjbkpoZVV4cGEyVW5LU3hjYmlBZ0lDQnBjMDlpYW1WamRDQTlJSEpsY1hWcGNtVW9KeTR1TDJ4aGJtY3ZhWE5QWW1wbFkzUW5LU3hjYmlBZ0lDQnphR2x0UzJWNWN5QTlJSEpsY1hWcGNtVW9KeTR1TDJsdWRHVnlibUZzTDNOb2FXMUxaWGx6SnlrN1hHNWNiaThxSUU1aGRHbDJaU0J0WlhSb2IyUWdjbVZtWlhKbGJtTmxjeUJtYjNJZ2RHaHZjMlVnZDJsMGFDQjBhR1VnYzJGdFpTQnVZVzFsSUdGeklHOTBhR1Z5SUdCc2IyUmhjMmhnSUcxbGRHaHZaSE11SUNvdlhHNTJZWElnYm1GMGFYWmxTMlY1Y3lBOUlHZGxkRTVoZEdsMlpTaFBZbXBsWTNRc0lDZHJaWGx6SnlrN1hHNWNiaThxS2x4dUlDb2dRM0psWVhSbGN5QmhiaUJoY25KaGVTQnZaaUIwYUdVZ2IzZHVJR1Z1ZFcxbGNtRmliR1VnY0hKdmNHVnlkSGtnYm1GdFpYTWdiMllnWUc5aWFtVmpkR0F1WEc0Z0tseHVJQ29nS2lwT2IzUmxPaW9xSUU1dmJpMXZZbXBsWTNRZ2RtRnNkV1Z6SUdGeVpTQmpiMlZ5WTJWa0lIUnZJRzlpYW1WamRITXVJRk5sWlNCMGFHVmNiaUFxSUZ0RlV5QnpjR1ZqWFNob2RIUndPaTh2WldOdFlTMXBiblJsY201aGRHbHZibUZzTG05eVp5OWxZMjFoTFRJMk1pODJMakF2STNObFl5MXZZbXBsWTNRdWEyVjVjeWxjYmlBcUlHWnZjaUJ0YjNKbElHUmxkR0ZwYkhNdVhHNGdLbHh1SUNvZ1FITjBZWFJwWTF4dUlDb2dRRzFsYldKbGNrOW1JRjljYmlBcUlFQmpZWFJsWjI5eWVTQlBZbXBsWTNSY2JpQXFJRUJ3WVhKaGJTQjdUMkpxWldOMGZTQnZZbXBsWTNRZ1ZHaGxJRzlpYW1WamRDQjBieUJ4ZFdWeWVTNWNiaUFxSUVCeVpYUjFjbTV6SUh0QmNuSmhlWDBnVW1WMGRYSnVjeUIwYUdVZ1lYSnlZWGtnYjJZZ2NISnZjR1Z5ZEhrZ2JtRnRaWE11WEc0Z0tpQkFaWGhoYlhCc1pWeHVJQ3BjYmlBcUlHWjFibU4wYVc5dUlFWnZieWdwSUh0Y2JpQXFJQ0FnZEdocGN5NWhJRDBnTVR0Y2JpQXFJQ0FnZEdocGN5NWlJRDBnTWp0Y2JpQXFJSDFjYmlBcVhHNGdLaUJHYjI4dWNISnZkRzkwZVhCbExtTWdQU0F6TzF4dUlDcGNiaUFxSUY4dWEyVjVjeWh1WlhjZ1JtOXZLVHRjYmlBcUlDOHZJRDArSUZzbllTY3NJQ2RpSjEwZ0tHbDBaWEpoZEdsdmJpQnZjbVJsY2lCcGN5QnViM1FnWjNWaGNtRnVkR1ZsWkNsY2JpQXFYRzRnS2lCZkxtdGxlWE1vSjJocEp5azdYRzRnS2lBdkx5QTlQaUJiSnpBbkxDQW5NU2RkWEc0Z0tpOWNiblpoY2lCclpYbHpJRDBnSVc1aGRHbDJaVXRsZVhNZ1B5QnphR2x0UzJWNWN5QTZJR1oxYm1OMGFXOXVLRzlpYW1WamRDa2dlMXh1SUNCMllYSWdRM1J2Y2lBOUlHOWlhbVZqZENBOVBTQnVkV3hzSUQ4Z2RXNWtaV1pwYm1Wa0lEb2diMkpxWldOMExtTnZibk4wY25WamRHOXlPMXh1SUNCcFppQW9LSFI1Y0dWdlppQkRkRzl5SUQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnUTNSdmNpNXdjbTkwYjNSNWNHVWdQVDA5SUc5aWFtVmpkQ2tnZkh4Y2JpQWdJQ0FnSUNoMGVYQmxiMllnYjJKcVpXTjBJQ0U5SUNkbWRXNWpkR2x2YmljZ0ppWWdhWE5CY25KaGVVeHBhMlVvYjJKcVpXTjBLU2twSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjMmhwYlV0bGVYTW9iMkpxWldOMEtUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2FYTlBZbXBsWTNRb2IySnFaV04wS1NBL0lHNWhkR2wyWlV0bGVYTW9iMkpxWldOMEtTQTZJRnRkTzF4dWZUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JyWlhsek8xeHVYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lBdUwzNHZiRzlrWVhOb0wyOWlhbVZqZEM5clpYbHpMbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTXpsY2JpQXFLaUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNRnh1SUNvcUx5SXNJblpoY2lCcGMwRnlaM1Z0Wlc1MGN5QTlJSEpsY1hWcGNtVW9KeTR1TDJ4aGJtY3ZhWE5CY21kMWJXVnVkSE1uS1N4Y2JpQWdJQ0JwYzBGeWNtRjVJRDBnY21WeGRXbHlaU2duTGk0dmJHRnVaeTlwYzBGeWNtRjVKeWtzWEc0Z0lDQWdhWE5KYm1SbGVDQTlJSEpsY1hWcGNtVW9KeTR2YVhOSmJtUmxlQ2NwTEZ4dUlDQWdJR2x6VEdWdVozUm9JRDBnY21WeGRXbHlaU2duTGk5cGMweGxibWQwYUNjcExGeHVJQ0FnSUd0bGVYTkpiaUE5SUhKbGNYVnBjbVVvSnk0dUwyOWlhbVZqZEM5clpYbHpTVzRuS1R0Y2JseHVMeW9xSUZWelpXUWdabTl5SUc1aGRHbDJaU0J0WlhSb2IyUWdjbVZtWlhKbGJtTmxjeTRnS2k5Y2JuWmhjaUJ2WW1wbFkzUlFjbTkwYnlBOUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVN1hHNWNiaThxS2lCVmMyVmtJSFJ2SUdOb1pXTnJJRzlpYW1WamRITWdabTl5SUc5M2JpQndjbTl3WlhKMGFXVnpMaUFxTDF4dWRtRnlJR2hoYzA5M2JsQnliM0JsY25SNUlEMGdiMkpxWldOMFVISnZkRzh1YUdGelQzZHVVSEp2Y0dWeWRIazdYRzVjYmk4cUtseHVJQ29nUVNCbVlXeHNZbUZqYXlCcGJYQnNaVzFsYm5SaGRHbHZiaUJ2WmlCZ1QySnFaV04wTG10bGVYTmdJSGRvYVdOb0lHTnlaV0YwWlhNZ1lXNGdZWEp5WVhrZ2IyWWdkR2hsWEc0Z0tpQnZkMjRnWlc1MWJXVnlZV0pzWlNCd2NtOXdaWEowZVNCdVlXMWxjeUJ2WmlCZ2IySnFaV04wWUM1Y2JpQXFYRzRnS2lCQWNISnBkbUYwWlZ4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHOWlhbVZqZENCVWFHVWdiMkpxWldOMElIUnZJSEYxWlhKNUxseHVJQ29nUUhKbGRIVnlibk1nZTBGeWNtRjVmU0JTWlhSMWNtNXpJSFJvWlNCaGNuSmhlU0J2WmlCd2NtOXdaWEowZVNCdVlXMWxjeTVjYmlBcUwxeHVablZ1WTNScGIyNGdjMmhwYlV0bGVYTW9iMkpxWldOMEtTQjdYRzRnSUhaaGNpQndjbTl3Y3lBOUlHdGxlWE5KYmlodlltcGxZM1FwTEZ4dUlDQWdJQ0FnY0hKdmNITk1aVzVuZEdnZ1BTQndjbTl3Y3k1c1pXNW5kR2dzWEc0Z0lDQWdJQ0JzWlc1bmRHZ2dQU0J3Y205d2MweGxibWQwYUNBbUppQnZZbXBsWTNRdWJHVnVaM1JvTzF4dVhHNGdJSFpoY2lCaGJHeHZkMGx1WkdWNFpYTWdQU0FoSVd4bGJtZDBhQ0FtSmlCcGMweGxibWQwYUNoc1pXNW5kR2dwSUNZbVhHNGdJQ0FnS0dselFYSnlZWGtvYjJKcVpXTjBLU0I4ZkNCcGMwRnlaM1Z0Wlc1MGN5aHZZbXBsWTNRcEtUdGNibHh1SUNCMllYSWdhVzVrWlhnZ1BTQXRNU3hjYmlBZ0lDQWdJSEpsYzNWc2RDQTlJRnRkTzF4dVhHNGdJSGRvYVd4bElDZ3JLMmx1WkdWNElEd2djSEp2Y0hOTVpXNW5kR2dwSUh0Y2JpQWdJQ0IyWVhJZ2EyVjVJRDBnY0hKdmNITmJhVzVrWlhoZE8xeHVJQ0FnSUdsbUlDZ29ZV3hzYjNkSmJtUmxlR1Z6SUNZbUlHbHpTVzVrWlhnb2EyVjVMQ0JzWlc1bmRHZ3BLU0I4ZkNCb1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2EyVjVLU2tnZTF4dUlDQWdJQ0FnY21WemRXeDBMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjbVYwZFhKdUlISmxjM1ZzZER0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0J6YUdsdFMyVjVjenRjYmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzl6YUdsdFMyVjVjeTVxYzF4dUlDb3FJRzF2WkhWc1pTQnBaQ0E5SURRd1hHNGdLaW9nYlc5a2RXeGxJR05vZFc1cmN5QTlJREJjYmlBcUtpOGlMQ0oyWVhJZ2FYTkJjbWQxYldWdWRITWdQU0J5WlhGMWFYSmxLQ2N1TGk5c1lXNW5MMmx6UVhKbmRXMWxiblJ6Snlrc1hHNGdJQ0FnYVhOQmNuSmhlU0E5SUhKbGNYVnBjbVVvSnk0dUwyeGhibWN2YVhOQmNuSmhlU2NwTEZ4dUlDQWdJR2x6U1c1a1pYZ2dQU0J5WlhGMWFYSmxLQ2N1TGk5cGJuUmxjbTVoYkM5cGMwbHVaR1Y0Snlrc1hHNGdJQ0FnYVhOTVpXNW5kR2dnUFNCeVpYRjFhWEpsS0NjdUxpOXBiblJsY201aGJDOXBjMHhsYm1kMGFDY3BMRnh1SUNBZ0lHbHpUMkpxWldOMElEMGdjbVZ4ZFdseVpTZ25MaTR2YkdGdVp5OXBjMDlpYW1WamRDY3BPMXh1WEc0dktpb2dWWE5sWkNCbWIzSWdibUYwYVhabElHMWxkR2h2WkNCeVpXWmxjbVZ1WTJWekxpQXFMMXh1ZG1GeUlHOWlhbVZqZEZCeWIzUnZJRDBnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaVHRjYmx4dUx5b3FJRlZ6WldRZ2RHOGdZMmhsWTJzZ2IySnFaV04wY3lCbWIzSWdiM2R1SUhCeWIzQmxjblJwWlhNdUlDb3ZYRzUyWVhJZ2FHRnpUM2R1VUhKdmNHVnlkSGtnUFNCdlltcGxZM1JRY205MGJ5NW9ZWE5QZDI1UWNtOXdaWEowZVR0Y2JseHVMeW9xWEc0Z0tpQkRjbVZoZEdWeklHRnVJR0Z5Y21GNUlHOW1JSFJvWlNCdmQyNGdZVzVrSUdsdWFHVnlhWFJsWkNCbGJuVnRaWEpoWW14bElIQnliM0JsY25SNUlHNWhiV1Z6SUc5bUlHQnZZbXBsWTNSZ0xseHVJQ3BjYmlBcUlDb3FUbTkwWlRvcUtpQk9iMjR0YjJKcVpXTjBJSFpoYkhWbGN5QmhjbVVnWTI5bGNtTmxaQ0IwYnlCdlltcGxZM1J6TGx4dUlDcGNiaUFxSUVCemRHRjBhV05jYmlBcUlFQnRaVzFpWlhKUFppQmZYRzRnS2lCQVkyRjBaV2R2Y25rZ1QySnFaV04wWEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ2IySnFaV04wSUZSb1pTQnZZbXBsWTNRZ2RHOGdjWFZsY25rdVhHNGdLaUJBY21WMGRYSnVjeUI3UVhKeVlYbDlJRkpsZEhWeWJuTWdkR2hsSUdGeWNtRjVJRzltSUhCeWIzQmxjblI1SUc1aGJXVnpMbHh1SUNvZ1FHVjRZVzF3YkdWY2JpQXFYRzRnS2lCbWRXNWpkR2x2YmlCR2IyOG9LU0I3WEc0Z0tpQWdJSFJvYVhNdVlTQTlJREU3WEc0Z0tpQWdJSFJvYVhNdVlpQTlJREk3WEc0Z0tpQjlYRzRnS2x4dUlDb2dSbTl2TG5CeWIzUnZkSGx3WlM1aklEMGdNenRjYmlBcVhHNGdLaUJmTG10bGVYTkpiaWh1WlhjZ1JtOXZLVHRjYmlBcUlDOHZJRDArSUZzbllTY3NJQ2RpSnl3Z0oyTW5YU0FvYVhSbGNtRjBhVzl1SUc5eVpHVnlJR2x6SUc1dmRDQm5kV0Z5WVc1MFpXVmtLVnh1SUNvdlhHNW1kVzVqZEdsdmJpQnJaWGx6U1c0b2IySnFaV04wS1NCN1hHNGdJR2xtSUNodlltcGxZM1FnUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQmJYVHRjYmlBZ2ZWeHVJQ0JwWmlBb0lXbHpUMkpxWldOMEtHOWlhbVZqZENrcElIdGNiaUFnSUNCdlltcGxZM1FnUFNCUFltcGxZM1FvYjJKcVpXTjBLVHRjYmlBZ2ZWeHVJQ0IyWVhJZ2JHVnVaM1JvSUQwZ2IySnFaV04wTG14bGJtZDBhRHRjYmlBZ2JHVnVaM1JvSUQwZ0tHeGxibWQwYUNBbUppQnBjMHhsYm1kMGFDaHNaVzVuZEdncElDWW1YRzRnSUNBZ0tHbHpRWEp5WVhrb2IySnFaV04wS1NCOGZDQnBjMEZ5WjNWdFpXNTBjeWh2WW1wbFkzUXBLU0FtSmlCc1pXNW5kR2dwSUh4OElEQTdYRzVjYmlBZ2RtRnlJRU4wYjNJZ1BTQnZZbXBsWTNRdVkyOXVjM1J5ZFdOMGIzSXNYRzRnSUNBZ0lDQnBibVJsZUNBOUlDMHhMRnh1SUNBZ0lDQWdhWE5RY205MGJ5QTlJSFI1Y0dWdlppQkRkRzl5SUQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnUTNSdmNpNXdjbTkwYjNSNWNHVWdQVDA5SUc5aWFtVmpkQ3hjYmlBZ0lDQWdJSEpsYzNWc2RDQTlJRUZ5Y21GNUtHeGxibWQwYUNrc1hHNGdJQ0FnSUNCemEybHdTVzVrWlhobGN5QTlJR3hsYm1kMGFDQStJREE3WEc1Y2JpQWdkMmhwYkdVZ0tDc3JhVzVrWlhnZ1BDQnNaVzVuZEdncElIdGNiaUFnSUNCeVpYTjFiSFJiYVc1a1pYaGRJRDBnS0dsdVpHVjRJQ3NnSnljcE8xeHVJQ0I5WEc0Z0lHWnZjaUFvZG1GeUlHdGxlU0JwYmlCdlltcGxZM1FwSUh0Y2JpQWdJQ0JwWmlBb0lTaHphMmx3U1c1a1pYaGxjeUFtSmlCcGMwbHVaR1Y0S0d0bGVTd2diR1Z1WjNSb0tTa2dKaVpjYmlBZ0lDQWdJQ0FnSVNoclpYa2dQVDBnSjJOdmJuTjBjblZqZEc5eUp5QW1KaUFvYVhOUWNtOTBieUI4ZkNBaGFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lHdGxlU2twS1NrZ2UxeHVJQ0FnSUNBZ2NtVnpkV3gwTG5CMWMyZ29hMlY1S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY21WMGRYSnVJSEpsYzNWc2REdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCclpYbHpTVzQ3WEc1Y2JseHVYRzR2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlBcUtpQlhSVUpRUVVOTElFWlBUMVJGVWx4dUlDb3FJQzR2Zmk5c2IyUmhjMmd2YjJKcVpXTjBMMnRsZVhOSmJpNXFjMXh1SUNvcUlHMXZaSFZzWlNCcFpDQTlJRFF4WEc0Z0tpb2diVzlrZFd4bElHTm9kVzVyY3lBOUlEQmNiaUFxS2k4aUxDSjJZWElnYVhOTVpXNW5kR2dnUFNCeVpYRjFhWEpsS0NjdUxpOXBiblJsY201aGJDOXBjMHhsYm1kMGFDY3BMRnh1SUNBZ0lHbHpUMkpxWldOMFRHbHJaU0E5SUhKbGNYVnBjbVVvSnk0dUwybHVkR1Z5Ym1Gc0wybHpUMkpxWldOMFRHbHJaU2NwTzF4dVhHNHZLaW9nWUU5aWFtVmpkQ04wYjFOMGNtbHVaMkFnY21WemRXeDBJSEpsWm1WeVpXNWpaWE11SUNvdlhHNTJZWElnWVhKbmMxUmhaeUE5SUNkYmIySnFaV04wSUVGeVozVnRaVzUwYzEwbkxGeHVJQ0FnSUdGeWNtRjVWR0ZuSUQwZ0oxdHZZbXBsWTNRZ1FYSnlZWGxkSnl4Y2JpQWdJQ0JpYjI5c1ZHRm5JRDBnSjF0dlltcGxZM1FnUW05dmJHVmhibDBuTEZ4dUlDQWdJR1JoZEdWVVlXY2dQU0FuVzI5aWFtVmpkQ0JFWVhSbFhTY3NYRzRnSUNBZ1pYSnliM0pVWVdjZ1BTQW5XMjlpYW1WamRDQkZjbkp2Y2wwbkxGeHVJQ0FnSUdaMWJtTlVZV2NnUFNBblcyOWlhbVZqZENCR2RXNWpkR2x2YmwwbkxGeHVJQ0FnSUcxaGNGUmhaeUE5SUNkYmIySnFaV04wSUUxaGNGMG5MRnh1SUNBZ0lHNTFiV0psY2xSaFp5QTlJQ2RiYjJKcVpXTjBJRTUxYldKbGNsMG5MRnh1SUNBZ0lHOWlhbVZqZEZSaFp5QTlJQ2RiYjJKcVpXTjBJRTlpYW1WamRGMG5MRnh1SUNBZ0lISmxaMlY0Y0ZSaFp5QTlJQ2RiYjJKcVpXTjBJRkpsWjBWNGNGMG5MRnh1SUNBZ0lITmxkRlJoWnlBOUlDZGJiMkpxWldOMElGTmxkRjBuTEZ4dUlDQWdJSE4wY21sdVoxUmhaeUE5SUNkYmIySnFaV04wSUZOMGNtbHVaMTBuTEZ4dUlDQWdJSGRsWVd0TllYQlVZV2NnUFNBblcyOWlhbVZqZENCWFpXRnJUV0Z3WFNjN1hHNWNiblpoY2lCaGNuSmhlVUoxWm1abGNsUmhaeUE5SUNkYmIySnFaV04wSUVGeWNtRjVRblZtWm1WeVhTY3NYRzRnSUNBZ1pteHZZWFF6TWxSaFp5QTlJQ2RiYjJKcVpXTjBJRVpzYjJGME16SkJjbkpoZVYwbkxGeHVJQ0FnSUdac2IyRjBOalJVWVdjZ1BTQW5XMjlpYW1WamRDQkdiRzloZERZMFFYSnlZWGxkSnl4Y2JpQWdJQ0JwYm5RNFZHRm5JRDBnSjF0dlltcGxZM1FnU1c1ME9FRnljbUY1WFNjc1hHNGdJQ0FnYVc1ME1UWlVZV2NnUFNBblcyOWlhbVZqZENCSmJuUXhOa0Z5Y21GNVhTY3NYRzRnSUNBZ2FXNTBNekpVWVdjZ1BTQW5XMjlpYW1WamRDQkpiblF6TWtGeWNtRjVYU2NzWEc0Z0lDQWdkV2x1ZERoVVlXY2dQU0FuVzI5aWFtVmpkQ0JWYVc1ME9FRnljbUY1WFNjc1hHNGdJQ0FnZFdsdWREaERiR0Z0Y0dWa1ZHRm5JRDBnSjF0dlltcGxZM1FnVldsdWREaERiR0Z0Y0dWa1FYSnlZWGxkSnl4Y2JpQWdJQ0IxYVc1ME1UWlVZV2NnUFNBblcyOWlhbVZqZENCVmFXNTBNVFpCY25KaGVWMG5MRnh1SUNBZ0lIVnBiblF6TWxSaFp5QTlJQ2RiYjJKcVpXTjBJRlZwYm5Rek1rRnljbUY1WFNjN1hHNWNiaThxS2lCVmMyVmtJSFJ2SUdsa1pXNTBhV1o1SUdCMGIxTjBjbWx1WjFSaFoyQWdkbUZzZFdWeklHOW1JSFI1Y0dWa0lHRnljbUY1Y3k0Z0tpOWNiblpoY2lCMGVYQmxaRUZ5Y21GNVZHRm5jeUE5SUh0OU8xeHVkSGx3WldSQmNuSmhlVlJoWjNOYlpteHZZWFF6TWxSaFoxMGdQU0IwZVhCbFpFRnljbUY1VkdGbmMxdG1iRzloZERZMFZHRm5YU0E5WEc1MGVYQmxaRUZ5Y21GNVZHRm5jMXRwYm5RNFZHRm5YU0E5SUhSNWNHVmtRWEp5WVhsVVlXZHpXMmx1ZERFMlZHRm5YU0E5WEc1MGVYQmxaRUZ5Y21GNVZHRm5jMXRwYm5Rek1sUmhaMTBnUFNCMGVYQmxaRUZ5Y21GNVZHRm5jMXQxYVc1ME9GUmhaMTBnUFZ4dWRIbHdaV1JCY25KaGVWUmhaM05iZFdsdWREaERiR0Z0Y0dWa1ZHRm5YU0E5SUhSNWNHVmtRWEp5WVhsVVlXZHpXM1ZwYm5ReE5sUmhaMTBnUFZ4dWRIbHdaV1JCY25KaGVWUmhaM05iZFdsdWRETXlWR0ZuWFNBOUlIUnlkV1U3WEc1MGVYQmxaRUZ5Y21GNVZHRm5jMXRoY21kelZHRm5YU0E5SUhSNWNHVmtRWEp5WVhsVVlXZHpXMkZ5Y21GNVZHRm5YU0E5WEc1MGVYQmxaRUZ5Y21GNVZHRm5jMXRoY25KaGVVSjFabVpsY2xSaFoxMGdQU0IwZVhCbFpFRnljbUY1VkdGbmMxdGliMjlzVkdGblhTQTlYRzUwZVhCbFpFRnljbUY1VkdGbmMxdGtZWFJsVkdGblhTQTlJSFI1Y0dWa1FYSnlZWGxVWVdkelcyVnljbTl5VkdGblhTQTlYRzUwZVhCbFpFRnljbUY1VkdGbmMxdG1kVzVqVkdGblhTQTlJSFI1Y0dWa1FYSnlZWGxVWVdkelcyMWhjRlJoWjEwZ1BWeHVkSGx3WldSQmNuSmhlVlJoWjNOYmJuVnRZbVZ5VkdGblhTQTlJSFI1Y0dWa1FYSnlZWGxVWVdkelcyOWlhbVZqZEZSaFoxMGdQVnh1ZEhsd1pXUkJjbkpoZVZSaFozTmJjbVZuWlhod1ZHRm5YU0E5SUhSNWNHVmtRWEp5WVhsVVlXZHpXM05sZEZSaFoxMGdQVnh1ZEhsd1pXUkJjbkpoZVZSaFozTmJjM1J5YVc1blZHRm5YU0E5SUhSNWNHVmtRWEp5WVhsVVlXZHpXM2RsWVd0TllYQlVZV2RkSUQwZ1ptRnNjMlU3WEc1Y2JpOHFLaUJWYzJWa0lHWnZjaUJ1WVhScGRtVWdiV1YwYUc5a0lISmxabVZ5Wlc1alpYTXVJQ292WEc1MllYSWdiMkpxWldOMFVISnZkRzhnUFNCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTzF4dVhHNHZLaXBjYmlBcUlGVnpaV1FnZEc4Z2NtVnpiMngyWlNCMGFHVWdXMkIwYjFOMGNtbHVaMVJoWjJCZEtHaDBkSEE2THk5bFkyMWhMV2x1ZEdWeWJtRjBhVzl1WVd3dWIzSm5MMlZqYldFdE1qWXlMell1TUM4amMyVmpMVzlpYW1WamRDNXdjbTkwYjNSNWNHVXVkRzl6ZEhKcGJtY3BYRzRnS2lCdlppQjJZV3gxWlhNdVhHNGdLaTljYm5aaGNpQnZZbXBVYjFOMGNtbHVaeUE5SUc5aWFtVmpkRkJ5YjNSdkxuUnZVM1J5YVc1bk8xeHVYRzR2S2lwY2JpQXFJRU5vWldOcmN5QnBaaUJnZG1Gc2RXVmdJR2x6SUdOc1lYTnphV1pwWldRZ1lYTWdZU0IwZVhCbFpDQmhjbkpoZVM1Y2JpQXFYRzRnS2lCQWMzUmhkR2xqWEc0Z0tpQkFiV1Z0WW1WeVQyWWdYMXh1SUNvZ1FHTmhkR1ZuYjNKNUlFeGhibWRjYmlBcUlFQndZWEpoYlNCN0tuMGdkbUZzZFdVZ1ZHaGxJSFpoYkhWbElIUnZJR05vWldOckxseHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZKbGRIVnlibk1nWUhSeWRXVmdJR2xtSUdCMllXeDFaV0FnYVhNZ1kyOXljbVZqZEd4NUlHTnNZWE56YVdacFpXUXNJR1ZzYzJVZ1lHWmhiSE5sWUM1Y2JpQXFJRUJsZUdGdGNHeGxYRzRnS2x4dUlDb2dYeTVwYzFSNWNHVmtRWEp5WVhrb2JtVjNJRlZwYm5RNFFYSnlZWGtwTzF4dUlDb2dMeThnUFQ0Z2RISjFaVnh1SUNwY2JpQXFJRjh1YVhOVWVYQmxaRUZ5Y21GNUtGdGRLVHRjYmlBcUlDOHZJRDArSUdaaGJITmxYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpWSGx3WldSQmNuSmhlU2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnYVhOUFltcGxZM1JNYVd0bEtIWmhiSFZsS1NBbUppQnBjMHhsYm1kMGFDaDJZV3gxWlM1c1pXNW5kR2dwSUNZbUlDRWhkSGx3WldSQmNuSmhlVlJoWjNOYmIySnFWRzlUZEhKcGJtY3VZMkZzYkNoMllXeDFaU2xkTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR2x6Vkhsd1pXUkJjbkpoZVR0Y2JseHVYRzVjYmk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlDb3FJRmRGUWxCQlEwc2dSazlQVkVWU1hHNGdLaW9nTGk5K0wyeHZaR0Z6YUM5c1lXNW5MMmx6Vkhsd1pXUkJjbkpoZVM1cWMxeHVJQ29xSUcxdlpIVnNaU0JwWkNBOUlEUXlYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENKMllYSWdhWE5QWW1wbFkzUWdQU0J5WlhGMWFYSmxLQ2N1TGk5c1lXNW5MMmx6VDJKcVpXTjBKeWs3WEc1Y2JpOHFLbHh1SUNvZ1EyOXVkbVZ5ZEhNZ1lIWmhiSFZsWUNCMGJ5QmhiaUJ2WW1wbFkzUWdhV1lnYVhRbmN5QnViM1FnYjI1bExseHVJQ3BjYmlBcUlFQndjbWwyWVhSbFhHNGdLaUJBY0dGeVlXMGdleXA5SUhaaGJIVmxJRlJvWlNCMllXeDFaU0IwYnlCd2NtOWpaWE56TGx4dUlDb2dRSEpsZEhWeWJuTWdlMDlpYW1WamRIMGdVbVYwZFhKdWN5QjBhR1VnYjJKcVpXTjBMbHh1SUNvdlhHNW1kVzVqZEdsdmJpQjBiMDlpYW1WamRDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdhWE5QWW1wbFkzUW9kbUZzZFdVcElEOGdkbUZzZFdVZ09pQlBZbXBsWTNRb2RtRnNkV1VwTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSFJ2VDJKcVpXTjBPMXh1WEc1Y2JseHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnS2lvZ1YwVkNVRUZEU3lCR1QwOVVSVkpjYmlBcUtpQXVMMzR2Ykc5a1lYTm9MMmx1ZEdWeWJtRnNMM1J2VDJKcVpXTjBMbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTkROY2JpQXFLaUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNRnh1SUNvcUx5SXNJblpoY2lCcGMxTjBjbWxqZEVOdmJYQmhjbUZpYkdVZ1BTQnlaWEYxYVhKbEtDY3VMMmx6VTNSeWFXTjBRMjl0Y0dGeVlXSnNaU2NwTEZ4dUlDQWdJSEJoYVhKeklEMGdjbVZ4ZFdseVpTZ25MaTR2YjJKcVpXTjBMM0JoYVhKekp5azdYRzVjYmk4cUtseHVJQ29nUjJWMGN5QjBhR1VnY0hKdmNHVnllU0J1WVcxbGN5d2dkbUZzZFdWekxDQmhibVFnWTI5dGNHRnlaU0JtYkdGbmN5QnZaaUJnYjJKcVpXTjBZQzVjYmlBcVhHNGdLaUJBY0hKcGRtRjBaVnh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUc5aWFtVmpkQ0JVYUdVZ2IySnFaV04wSUhSdklIRjFaWEo1TGx4dUlDb2dRSEpsZEhWeWJuTWdlMEZ5Y21GNWZTQlNaWFIxY201eklIUm9aU0J0WVhSamFDQmtZWFJoSUc5bUlHQnZZbXBsWTNSZ0xseHVJQ292WEc1bWRXNWpkR2x2YmlCblpYUk5ZWFJqYUVSaGRHRW9iMkpxWldOMEtTQjdYRzRnSUhaaGNpQnlaWE4xYkhRZ1BTQndZV2x5Y3lodlltcGxZM1FwTEZ4dUlDQWdJQ0FnYkdWdVozUm9JRDBnY21WemRXeDBMbXhsYm1kMGFEdGNibHh1SUNCM2FHbHNaU0FvYkdWdVozUm9MUzBwSUh0Y2JpQWdJQ0J5WlhOMWJIUmJiR1Z1WjNSb1hWc3lYU0E5SUdselUzUnlhV04wUTI5dGNHRnlZV0pzWlNoeVpYTjFiSFJiYkdWdVozUm9YVnN4WFNrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm5aWFJOWVhSamFFUmhkR0U3WEc1Y2JseHVYRzR2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlBcUtpQlhSVUpRUVVOTElFWlBUMVJGVWx4dUlDb3FJQzR2Zmk5c2IyUmhjMmd2YVc1MFpYSnVZV3d2WjJWMFRXRjBZMmhFWVhSaExtcHpYRzRnS2lvZ2JXOWtkV3hsSUdsa0lEMGdORFJjYmlBcUtpQnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01GeHVJQ29xTHlJc0luWmhjaUJwYzA5aWFtVmpkQ0E5SUhKbGNYVnBjbVVvSnk0dUwyeGhibWN2YVhOUFltcGxZM1FuS1R0Y2JseHVMeW9xWEc0Z0tpQkRhR1ZqYTNNZ2FXWWdZSFpoYkhWbFlDQnBjeUJ6ZFdsMFlXSnNaU0JtYjNJZ2MzUnlhV04wSUdWeGRXRnNhWFI1SUdOdmJYQmhjbWx6YjI1ekxDQnBMbVV1SUdBOVBUMWdMbHh1SUNwY2JpQXFJRUJ3Y21sMllYUmxYRzRnS2lCQWNHRnlZVzBnZXlwOUlIWmhiSFZsSUZSb1pTQjJZV3gxWlNCMGJ5QmphR1ZqYXk1Y2JpQXFJRUJ5WlhSMWNtNXpJSHRpYjI5c1pXRnVmU0JTWlhSMWNtNXpJR0IwY25WbFlDQnBaaUJnZG1Gc2RXVmdJR2xtSUhOMWFYUmhZbXhsSUdadmNpQnpkSEpwWTNSY2JpQXFJQ0JsY1hWaGJHbDBlU0JqYjIxd1lYSnBjMjl1Y3l3Z1pXeHpaU0JnWm1Gc2MyVmdMbHh1SUNvdlhHNW1kVzVqZEdsdmJpQnBjMU4wY21samRFTnZiWEJoY21GaWJHVW9kbUZzZFdVcElIdGNiaUFnY21WMGRYSnVJSFpoYkhWbElEMDlQU0IyWVd4MVpTQW1KaUFoYVhOUFltcGxZM1FvZG1Gc2RXVXBPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHbHpVM1J5YVdOMFEyOXRjR0Z5WVdKc1pUdGNibHh1WEc1Y2JpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJQ29xSUZkRlFsQkJRMHNnUms5UFZFVlNYRzRnS2lvZ0xpOStMMnh2WkdGemFDOXBiblJsY201aGJDOXBjMU4wY21samRFTnZiWEJoY21GaWJHVXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0EwTlZ4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lkbUZ5SUd0bGVYTWdQU0J5WlhGMWFYSmxLQ2N1TDJ0bGVYTW5LU3hjYmlBZ0lDQjBiMDlpYW1WamRDQTlJSEpsY1hWcGNtVW9KeTR1TDJsdWRHVnlibUZzTDNSdlQySnFaV04wSnlrN1hHNWNiaThxS2x4dUlDb2dRM0psWVhSbGN5QmhJSFIzYnlCa2FXMWxibk5wYjI1aGJDQmhjbkpoZVNCdlppQjBhR1VnYTJWNUxYWmhiSFZsSUhCaGFYSnpJR1p2Y2lCZ2IySnFaV04wWUN4Y2JpQXFJR1V1Wnk0Z1lGdGJhMlY1TVN3Z2RtRnNkV1V4WFN3Z1cydGxlVElzSUhaaGJIVmxNbDFkWUM1Y2JpQXFYRzRnS2lCQWMzUmhkR2xqWEc0Z0tpQkFiV1Z0WW1WeVQyWWdYMXh1SUNvZ1FHTmhkR1ZuYjNKNUlFOWlhbVZqZEZ4dUlDb2dRSEJoY21GdElIdFBZbXBsWTNSOUlHOWlhbVZqZENCVWFHVWdiMkpxWldOMElIUnZJSEYxWlhKNUxseHVJQ29nUUhKbGRIVnlibk1nZTBGeWNtRjVmU0JTWlhSMWNtNXpJSFJvWlNCdVpYY2dZWEp5WVhrZ2IyWWdhMlY1TFhaaGJIVmxJSEJoYVhKekxseHVJQ29nUUdWNFlXMXdiR1ZjYmlBcVhHNGdLaUJmTG5CaGFYSnpLSHNnSjJKaGNtNWxlU2M2SURNMkxDQW5abkpsWkNjNklEUXdJSDBwTzF4dUlDb2dMeThnUFQ0Z1cxc25ZbUZ5Ym1WNUp5d2dNelpkTENCYkoyWnlaV1FuTENBME1GMWRJQ2hwZEdWeVlYUnBiMjRnYjNKa1pYSWdhWE1nYm05MElHZDFZWEpoYm5SbFpXUXBYRzRnS2k5Y2JtWjFibU4wYVc5dUlIQmhhWEp6S0c5aWFtVmpkQ2tnZTF4dUlDQnZZbXBsWTNRZ1BTQjBiMDlpYW1WamRDaHZZbXBsWTNRcE8xeHVYRzRnSUhaaGNpQnBibVJsZUNBOUlDMHhMRnh1SUNBZ0lDQWdjSEp2Y0hNZ1BTQnJaWGx6S0c5aWFtVmpkQ2tzWEc0Z0lDQWdJQ0JzWlc1bmRHZ2dQU0J3Y205d2N5NXNaVzVuZEdnc1hHNGdJQ0FnSUNCeVpYTjFiSFFnUFNCQmNuSmhlU2hzWlc1bmRHZ3BPMXh1WEc0Z0lIZG9hV3hsSUNncksybHVaR1Y0SUR3Z2JHVnVaM1JvS1NCN1hHNGdJQ0FnZG1GeUlHdGxlU0E5SUhCeWIzQnpXMmx1WkdWNFhUdGNiaUFnSUNCeVpYTjFiSFJiYVc1a1pYaGRJRDBnVzJ0bGVTd2diMkpxWldOMFcydGxlVjFkTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJ5WlhOMWJIUTdYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NHRnBjbk03WEc1Y2JseHVYRzR2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlBcUtpQlhSVUpRUVVOTElFWlBUMVJGVWx4dUlDb3FJQzR2Zmk5c2IyUmhjMmd2YjJKcVpXTjBMM0JoYVhKekxtcHpYRzRnS2lvZ2JXOWtkV3hsSUdsa0lEMGdORFpjYmlBcUtpQnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01GeHVJQ29xTHlJc0luWmhjaUJpWVhObFIyVjBJRDBnY21WeGRXbHlaU2duTGk5aVlYTmxSMlYwSnlrc1hHNGdJQ0FnWW1GelpVbHpSWEYxWVd3Z1BTQnlaWEYxYVhKbEtDY3VMMkpoYzJWSmMwVnhkV0ZzSnlrc1hHNGdJQ0FnWW1GelpWTnNhV05sSUQwZ2NtVnhkV2x5WlNnbkxpOWlZWE5sVTJ4cFkyVW5LU3hjYmlBZ0lDQnBjMEZ5Y21GNUlEMGdjbVZ4ZFdseVpTZ25MaTR2YkdGdVp5OXBjMEZ5Y21GNUp5a3NYRzRnSUNBZ2FYTkxaWGtnUFNCeVpYRjFhWEpsS0NjdUwybHpTMlY1Snlrc1hHNGdJQ0FnYVhOVGRISnBZM1JEYjIxd1lYSmhZbXhsSUQwZ2NtVnhkV2x5WlNnbkxpOXBjMU4wY21samRFTnZiWEJoY21GaWJHVW5LU3hjYmlBZ0lDQnNZWE4wSUQwZ2NtVnhkV2x5WlNnbkxpNHZZWEp5WVhrdmJHRnpkQ2NwTEZ4dUlDQWdJSFJ2VDJKcVpXTjBJRDBnY21WeGRXbHlaU2duTGk5MGIwOWlhbVZqZENjcExGeHVJQ0FnSUhSdlVHRjBhQ0E5SUhKbGNYVnBjbVVvSnk0dmRHOVFZWFJvSnlrN1hHNWNiaThxS2x4dUlDb2dWR2hsSUdKaGMyVWdhVzF3YkdWdFpXNTBZWFJwYjI0Z2IyWWdZRjh1YldGMFkyaGxjMUJ5YjNCbGNuUjVZQ0IzYUdsamFDQmtiMlZ6SUc1dmRDQmpiRzl1WlNCZ2MzSmpWbUZzZFdWZ0xseHVJQ3BjYmlBcUlFQndjbWwyWVhSbFhHNGdLaUJBY0dGeVlXMGdlM04wY21sdVozMGdjR0YwYUNCVWFHVWdjR0YwYUNCdlppQjBhR1VnY0hKdmNHVnlkSGtnZEc4Z1oyVjBMbHh1SUNvZ1FIQmhjbUZ0SUhzcWZTQnpjbU5XWVd4MVpTQlVhR1VnZG1Gc2RXVWdkRzhnWTI5dGNHRnlaUzVjYmlBcUlFQnlaWFIxY201eklIdEdkVzVqZEdsdmJuMGdVbVYwZFhKdWN5QjBhR1VnYm1WM0lHWjFibU4wYVc5dUxseHVJQ292WEc1bWRXNWpkR2x2YmlCaVlYTmxUV0YwWTJobGMxQnliM0JsY25SNUtIQmhkR2dzSUhOeVkxWmhiSFZsS1NCN1hHNGdJSFpoY2lCcGMwRnljaUE5SUdselFYSnlZWGtvY0dGMGFDa3NYRzRnSUNBZ0lDQnBjME52YlcxdmJpQTlJR2x6UzJWNUtIQmhkR2dwSUNZbUlHbHpVM1J5YVdOMFEyOXRjR0Z5WVdKc1pTaHpjbU5XWVd4MVpTa3NYRzRnSUNBZ0lDQndZWFJvUzJWNUlEMGdLSEJoZEdnZ0t5QW5KeWs3WEc1Y2JpQWdjR0YwYUNBOUlIUnZVR0YwYUNod1lYUm9LVHRjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ2tnZTF4dUlDQWdJR2xtSUNodlltcGxZM1FnUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ2EyVjVJRDBnY0dGMGFFdGxlVHRjYmlBZ0lDQnZZbXBsWTNRZ1BTQjBiMDlpYW1WamRDaHZZbXBsWTNRcE8xeHVJQ0FnSUdsbUlDZ29hWE5CY25JZ2ZId2dJV2x6UTI5dGJXOXVLU0FtSmlBaEtHdGxlU0JwYmlCdlltcGxZM1FwS1NCN1hHNGdJQ0FnSUNCdlltcGxZM1FnUFNCd1lYUm9MbXhsYm1kMGFDQTlQU0F4SUQ4Z2IySnFaV04wSURvZ1ltRnpaVWRsZENodlltcGxZM1FzSUdKaGMyVlRiR2xqWlNod1lYUm9MQ0F3TENBdE1Ta3BPMXh1SUNBZ0lDQWdhV1lnS0c5aWFtVmpkQ0E5UFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHdGxlU0E5SUd4aGMzUW9jR0YwYUNrN1hHNGdJQ0FnSUNCdlltcGxZM1FnUFNCMGIwOWlhbVZqZENodlltcGxZM1FwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2IySnFaV04wVzJ0bGVWMGdQVDA5SUhOeVkxWmhiSFZsWEc0Z0lDQWdJQ0EvSUNoemNtTldZV3gxWlNBaFBUMGdkVzVrWldacGJtVmtJSHg4SUNoclpYa2dhVzRnYjJKcVpXTjBLU2xjYmlBZ0lDQWdJRG9nWW1GelpVbHpSWEYxWVd3b2MzSmpWbUZzZFdVc0lHOWlhbVZqZEZ0clpYbGRMQ0IxYm1SbFptbHVaV1FzSUhSeWRXVXBPMXh1SUNCOU8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdKaGMyVk5ZWFJqYUdWelVISnZjR1Z5ZEhrN1hHNWNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOXNiMlJoYzJndmFXNTBaWEp1WVd3dlltRnpaVTFoZEdOb1pYTlFjbTl3WlhKMGVTNXFjMXh1SUNvcUlHMXZaSFZzWlNCcFpDQTlJRFEzWEc0Z0tpb2diVzlrZFd4bElHTm9kVzVyY3lBOUlEQmNiaUFxS2k4aUxDSjJZWElnZEc5UFltcGxZM1FnUFNCeVpYRjFhWEpsS0NjdUwzUnZUMkpxWldOMEp5azdYRzVjYmk4cUtseHVJQ29nVkdobElHSmhjMlVnYVcxd2JHVnRaVzUwWVhScGIyNGdiMllnWUdkbGRHQWdkMmwwYUc5MWRDQnpkWEJ3YjNKMElHWnZjaUJ6ZEhKcGJtY2djR0YwYUhOY2JpQXFJR0Z1WkNCa1pXWmhkV3gwSUhaaGJIVmxjeTVjYmlBcVhHNGdLaUJBY0hKcGRtRjBaVnh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUc5aWFtVmpkQ0JVYUdVZ2IySnFaV04wSUhSdklIRjFaWEo1TGx4dUlDb2dRSEJoY21GdElIdEJjbkpoZVgwZ2NHRjBhQ0JVYUdVZ2NHRjBhQ0J2WmlCMGFHVWdjSEp2Y0dWeWRIa2dkRzhnWjJWMExseHVJQ29nUUhCaGNtRnRJSHR6ZEhKcGJtZDlJRnR3WVhSb1MyVjVYU0JVYUdVZ2EyVjVJSEpsY0hKbGMyVnVkR0YwYVc5dUlHOW1JSEJoZEdndVhHNGdLaUJBY21WMGRYSnVjeUI3S24wZ1VtVjBkWEp1Y3lCMGFHVWdjbVZ6YjJ4MlpXUWdkbUZzZFdVdVhHNGdLaTljYm1aMWJtTjBhVzl1SUdKaGMyVkhaWFFvYjJKcVpXTjBMQ0J3WVhSb0xDQndZWFJvUzJWNUtTQjdYRzRnSUdsbUlDaHZZbXBsWTNRZ1BUMGdiblZzYkNrZ2UxeHVJQ0FnSUhKbGRIVnlianRjYmlBZ2ZWeHVJQ0JwWmlBb2NHRjBhRXRsZVNBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUhCaGRHaExaWGtnYVc0Z2RHOVBZbXBsWTNRb2IySnFaV04wS1NrZ2UxeHVJQ0FnSUhCaGRHZ2dQU0JiY0dGMGFFdGxlVjA3WEc0Z0lIMWNiaUFnZG1GeUlHbHVaR1Y0SUQwZ01DeGNiaUFnSUNBZ0lHeGxibWQwYUNBOUlIQmhkR2d1YkdWdVozUm9PMXh1WEc0Z0lIZG9hV3hsSUNodlltcGxZM1FnSVQwZ2JuVnNiQ0FtSmlCcGJtUmxlQ0E4SUd4bGJtZDBhQ2tnZTF4dUlDQWdJRzlpYW1WamRDQTlJRzlpYW1WamRGdHdZWFJvVzJsdVpHVjRLeXRkWFR0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnS0dsdVpHVjRJQ1ltSUdsdVpHVjRJRDA5SUd4bGJtZDBhQ2tnUHlCdlltcGxZM1FnT2lCMWJtUmxabWx1WldRN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWW1GelpVZGxkRHRjYmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzlpWVhObFIyVjBMbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTkRoY2JpQXFLaUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNRnh1SUNvcUx5SXNJaThxS2x4dUlDb2dWR2hsSUdKaGMyVWdhVzF3YkdWdFpXNTBZWFJwYjI0Z2IyWWdZRjh1YzJ4cFkyVmdJSGRwZEdodmRYUWdZVzRnYVhSbGNtRjBaV1VnWTJGc2JDQm5kV0Z5WkM1Y2JpQXFYRzRnS2lCQWNISnBkbUYwWlZ4dUlDb2dRSEJoY21GdElIdEJjbkpoZVgwZ1lYSnlZWGtnVkdobElHRnljbUY1SUhSdklITnNhV05sTGx4dUlDb2dRSEJoY21GdElIdHVkVzFpWlhKOUlGdHpkR0Z5ZEQwd1hTQlVhR1VnYzNSaGNuUWdjRzl6YVhScGIyNHVYRzRnS2lCQWNHRnlZVzBnZTI1MWJXSmxjbjBnVzJWdVpEMWhjbkpoZVM1c1pXNW5kR2hkSUZSb1pTQmxibVFnY0c5emFYUnBiMjR1WEc0Z0tpQkFjbVYwZFhKdWN5QjdRWEp5WVhsOUlGSmxkSFZ5Ym5NZ2RHaGxJSE5zYVdObElHOW1JR0JoY25KaGVXQXVYRzRnS2k5Y2JtWjFibU4wYVc5dUlHSmhjMlZUYkdsalpTaGhjbkpoZVN3Z2MzUmhjblFzSUdWdVpDa2dlMXh1SUNCMllYSWdhVzVrWlhnZ1BTQXRNU3hjYmlBZ0lDQWdJR3hsYm1kMGFDQTlJR0Z5Y21GNUxteGxibWQwYUR0Y2JseHVJQ0J6ZEdGeWRDQTlJSE4wWVhKMElEMDlJRzUxYkd3Z1B5QXdJRG9nS0N0emRHRnlkQ0I4ZkNBd0tUdGNiaUFnYVdZZ0tITjBZWEowSUR3Z01Da2dlMXh1SUNBZ0lITjBZWEowSUQwZ0xYTjBZWEowSUQ0Z2JHVnVaM1JvSUQ4Z01DQTZJQ2hzWlc1bmRHZ2dLeUJ6ZEdGeWRDazdYRzRnSUgxY2JpQWdaVzVrSUQwZ0tHVnVaQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJR1Z1WkNBK0lHeGxibWQwYUNrZ1B5QnNaVzVuZEdnZ09pQW9LMlZ1WkNCOGZDQXdLVHRjYmlBZ2FXWWdLR1Z1WkNBOElEQXBJSHRjYmlBZ0lDQmxibVFnS3owZ2JHVnVaM1JvTzF4dUlDQjlYRzRnSUd4bGJtZDBhQ0E5SUhOMFlYSjBJRDRnWlc1a0lEOGdNQ0E2SUNnb1pXNWtJQzBnYzNSaGNuUXBJRDQrUGlBd0tUdGNiaUFnYzNSaGNuUWdQajQrUFNBd08xeHVYRzRnSUhaaGNpQnlaWE4xYkhRZ1BTQkJjbkpoZVNoc1pXNW5kR2dwTzF4dUlDQjNhR2xzWlNBb0t5dHBibVJsZUNBOElHeGxibWQwYUNrZ2UxeHVJQ0FnSUhKbGMzVnNkRnRwYm1SbGVGMGdQU0JoY25KaGVWdHBibVJsZUNBcklITjBZWEowWFR0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnY21WemRXeDBPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHSmhjMlZUYkdsalpUdGNibHh1WEc1Y2JpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJQ29xSUZkRlFsQkJRMHNnUms5UFZFVlNYRzRnS2lvZ0xpOStMMnh2WkdGemFDOXBiblJsY201aGJDOWlZWE5sVTJ4cFkyVXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0EwT1Z4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lkbUZ5SUdselFYSnlZWGtnUFNCeVpYRjFhWEpsS0NjdUxpOXNZVzVuTDJselFYSnlZWGtuS1N4Y2JpQWdJQ0IwYjA5aWFtVmpkQ0E5SUhKbGNYVnBjbVVvSnk0dmRHOVBZbXBsWTNRbktUdGNibHh1THlvcUlGVnpaV1FnZEc4Z2JXRjBZMmdnY0hKdmNHVnlkSGtnYm1GdFpYTWdkMmwwYUdsdUlIQnliM0JsY25SNUlIQmhkR2h6TGlBcUwxeHVkbUZ5SUhKbFNYTkVaV1Z3VUhKdmNDQTlJQzljWEM1OFhGeGJLRDg2VzE1YlhGeGRYU3A4S0Z0Y0lpZGRLU2cvT2lnL0lWeGNNU2xiWGx4Y2JseGNYRnhkZkZ4Y1hGd3VLU28vWEZ3eEtWeGNYUzhzWEc0Z0lDQWdjbVZKYzFCc1lXbHVVSEp2Y0NBOUlDOWVYRngzS2lRdk8xeHVYRzR2S2lwY2JpQXFJRU5vWldOcmN5QnBaaUJnZG1Gc2RXVmdJR2x6SUdFZ2NISnZjR1Z5ZEhrZ2JtRnRaU0JoYm1RZ2JtOTBJR0VnY0hKdmNHVnlkSGtnY0dGMGFDNWNiaUFxWEc0Z0tpQkFjSEpwZG1GMFpWeHVJQ29nUUhCaGNtRnRJSHNxZlNCMllXeDFaU0JVYUdVZ2RtRnNkV1VnZEc4Z1kyaGxZMnN1WEc0Z0tpQkFjR0Z5WVcwZ2UwOWlhbVZqZEgwZ1cyOWlhbVZqZEYwZ1ZHaGxJRzlpYW1WamRDQjBieUJ4ZFdWeWVTQnJaWGx6SUc5dUxseHVJQ29nUUhKbGRIVnlibk1nZTJKdmIyeGxZVzU5SUZKbGRIVnlibk1nWUhSeWRXVmdJR2xtSUdCMllXeDFaV0FnYVhNZ1lTQndjbTl3WlhKMGVTQnVZVzFsTENCbGJITmxJR0JtWVd4elpXQXVYRzRnS2k5Y2JtWjFibU4wYVc5dUlHbHpTMlY1S0haaGJIVmxMQ0J2WW1wbFkzUXBJSHRjYmlBZ2RtRnlJSFI1Y0dVZ1BTQjBlWEJsYjJZZ2RtRnNkV1U3WEc0Z0lHbG1JQ2dvZEhsd1pTQTlQU0FuYzNSeWFXNW5KeUFtSmlCeVpVbHpVR3hoYVc1UWNtOXdMblJsYzNRb2RtRnNkV1VwS1NCOGZDQjBlWEJsSUQwOUlDZHVkVzFpWlhJbktTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSeWRXVTdYRzRnSUgxY2JpQWdhV1lnS0dselFYSnlZWGtvZG1Gc2RXVXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQjlYRzRnSUhaaGNpQnlaWE4xYkhRZ1BTQWhjbVZKYzBSbFpYQlFjbTl3TG5SbGMzUW9kbUZzZFdVcE8xeHVJQ0J5WlhSMWNtNGdjbVZ6ZFd4MElIeDhJQ2h2WW1wbFkzUWdJVDBnYm5Wc2JDQW1KaUIyWVd4MVpTQnBiaUIwYjA5aWFtVmpkQ2h2WW1wbFkzUXBLVHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnBjMHRsZVR0Y2JseHVYRzVjYmk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlDb3FJRmRGUWxCQlEwc2dSazlQVkVWU1hHNGdLaW9nTGk5K0wyeHZaR0Z6YUM5cGJuUmxjbTVoYkM5cGMwdGxlUzVxYzF4dUlDb3FJRzF2WkhWc1pTQnBaQ0E5SURVd1hHNGdLaW9nYlc5a2RXeGxJR05vZFc1cmN5QTlJREJjYmlBcUtpOGlMQ0l2S2lwY2JpQXFJRWRsZEhNZ2RHaGxJR3hoYzNRZ1pXeGxiV1Z1ZENCdlppQmdZWEp5WVhsZ0xseHVJQ3BjYmlBcUlFQnpkR0YwYVdOY2JpQXFJRUJ0WlcxaVpYSlBaaUJmWEc0Z0tpQkFZMkYwWldkdmNua2dRWEp5WVhsY2JpQXFJRUJ3WVhKaGJTQjdRWEp5WVhsOUlHRnljbUY1SUZSb1pTQmhjbkpoZVNCMGJ5QnhkV1Z5ZVM1Y2JpQXFJRUJ5WlhSMWNtNXpJSHNxZlNCU1pYUjFjbTV6SUhSb1pTQnNZWE4wSUdWc1pXMWxiblFnYjJZZ1lHRnljbUY1WUM1Y2JpQXFJRUJsZUdGdGNHeGxYRzRnS2x4dUlDb2dYeTVzWVhOMEtGc3hMQ0F5TENBelhTazdYRzRnS2lBdkx5QTlQaUF6WEc0Z0tpOWNibVoxYm1OMGFXOXVJR3hoYzNRb1lYSnlZWGtwSUh0Y2JpQWdkbUZ5SUd4bGJtZDBhQ0E5SUdGeWNtRjVJRDhnWVhKeVlYa3ViR1Z1WjNSb0lEb2dNRHRjYmlBZ2NtVjBkWEp1SUd4bGJtZDBhQ0EvSUdGeWNtRjVXMnhsYm1kMGFDQXRJREZkSURvZ2RXNWtaV1pwYm1Wa08xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUd4aGMzUTdYRzVjYmx4dVhHNHZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUFxS2lCWFJVSlFRVU5MSUVaUFQxUkZVbHh1SUNvcUlDNHZmaTlzYjJSaGMyZ3ZZWEp5WVhrdmJHRnpkQzVxYzF4dUlDb3FJRzF2WkhWc1pTQnBaQ0E5SURVeFhHNGdLaW9nYlc5a2RXeGxJR05vZFc1cmN5QTlJREJjYmlBcUtpOGlMQ0oyWVhJZ1ltRnpaVlJ2VTNSeWFXNW5JRDBnY21WeGRXbHlaU2duTGk5aVlYTmxWRzlUZEhKcGJtY25LU3hjYmlBZ0lDQnBjMEZ5Y21GNUlEMGdjbVZ4ZFdseVpTZ25MaTR2YkdGdVp5OXBjMEZ5Y21GNUp5azdYRzVjYmk4cUtpQlZjMlZrSUhSdklHMWhkR05vSUhCeWIzQmxjblI1SUc1aGJXVnpJSGRwZEdocGJpQndjbTl3WlhKMGVTQndZWFJvY3k0Z0tpOWNiblpoY2lCeVpWQnliM0JPWVcxbElEMGdMMXRlTGx0Y1hGMWRLM3hjWEZzb1B6b29MVDljWEdRcktEODZYRnd1WEZ4a0t5ay9LWHdvVzF3aUoxMHBLQ2cvT2lnL0lWeGNNaWxiWGx4Y2JseGNYRnhkZkZ4Y1hGd3VLU28vS1Z4Y01pbGNYRjB2Wnp0Y2JseHVMeW9xSUZWelpXUWdkRzhnYldGMFkyZ2dZbUZqYTNOc1lYTm9aWE1nYVc0Z2NISnZjR1Z5ZEhrZ2NHRjBhSE11SUNvdlhHNTJZWElnY21WRmMyTmhjR1ZEYUdGeUlEMGdMMXhjWEZ3b1hGeGNYQ2svTDJjN1hHNWNiaThxS2x4dUlDb2dRMjl1ZG1WeWRITWdZSFpoYkhWbFlDQjBieUJ3Y205d1pYSjBlU0J3WVhSb0lHRnljbUY1SUdsbUlHbDBKM01nYm05MElHOXVaUzVjYmlBcVhHNGdLaUJBY0hKcGRtRjBaVnh1SUNvZ1FIQmhjbUZ0SUhzcWZTQjJZV3gxWlNCVWFHVWdkbUZzZFdVZ2RHOGdjSEp2WTJWemN5NWNiaUFxSUVCeVpYUjFjbTV6SUh0QmNuSmhlWDBnVW1WMGRYSnVjeUIwYUdVZ2NISnZjR1Z5ZEhrZ2NHRjBhQ0JoY25KaGVTNWNiaUFxTDF4dVpuVnVZM1JwYjI0Z2RHOVFZWFJvS0haaGJIVmxLU0I3WEc0Z0lHbG1JQ2hwYzBGeWNtRjVLSFpoYkhWbEtTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMllXeDFaVHRjYmlBZ2ZWeHVJQ0IyWVhJZ2NtVnpkV3gwSUQwZ1cxMDdYRzRnSUdKaGMyVlViMU4wY21sdVp5aDJZV3gxWlNrdWNtVndiR0ZqWlNoeVpWQnliM0JPWVcxbExDQm1kVzVqZEdsdmJpaHRZWFJqYUN3Z2JuVnRZbVZ5TENCeGRXOTBaU3dnYzNSeWFXNW5LU0I3WEc0Z0lDQWdjbVZ6ZFd4MExuQjFjMmdvY1hWdmRHVWdQeUJ6ZEhKcGJtY3VjbVZ3YkdGalpTaHlaVVZ6WTJGd1pVTm9ZWElzSUNja01TY3BJRG9nS0c1MWJXSmxjaUI4ZkNCdFlYUmphQ2twTzF4dUlDQjlLVHRjYmlBZ2NtVjBkWEp1SUhKbGMzVnNkRHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjBiMUJoZEdnN1hHNWNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOXNiMlJoYzJndmFXNTBaWEp1WVd3dmRHOVFZWFJvTG1welhHNGdLaW9nYlc5a2RXeGxJR2xrSUQwZ05USmNiaUFxS2lCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUZ4dUlDb3FMeUlzSWk4cUtseHVJQ29nUTI5dWRtVnlkSE1nWUhaaGJIVmxZQ0IwYnlCaElITjBjbWx1WnlCcFppQnBkQ2R6SUc1dmRDQnZibVV1SUVGdUlHVnRjSFI1SUhOMGNtbHVaeUJwY3lCeVpYUjFjbTVsWkZ4dUlDb2dabTl5SUdCdWRXeHNZQ0J2Y2lCZ2RXNWtaV1pwYm1Wa1lDQjJZV3gxWlhNdVhHNGdLbHh1SUNvZ1FIQnlhWFpoZEdWY2JpQXFJRUJ3WVhKaGJTQjdLbjBnZG1Gc2RXVWdWR2hsSUhaaGJIVmxJSFJ2SUhCeWIyTmxjM011WEc0Z0tpQkFjbVYwZFhKdWN5QjdjM1J5YVc1bmZTQlNaWFIxY201eklIUm9aU0J6ZEhKcGJtY3VYRzRnS2k5Y2JtWjFibU4wYVc5dUlHSmhjMlZVYjFOMGNtbHVaeWgyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZG1Gc2RXVWdQVDBnYm5Wc2JDQS9JQ2NuSURvZ0tIWmhiSFZsSUNzZ0p5Y3BPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHSmhjMlZVYjFOMGNtbHVaenRjYmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzlpWVhObFZHOVRkSEpwYm1jdWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQTFNMXh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aWRtRnlJR2xrWlc1MGFYUjVJRDBnY21WeGRXbHlaU2duTGk0dmRYUnBiR2wwZVM5cFpHVnVkR2wwZVNjcE8xeHVYRzR2S2lwY2JpQXFJRUVnYzNCbFkybGhiR2w2WldRZ2RtVnljMmx2YmlCdlppQmdZbUZ6WlVOaGJHeGlZV05yWUNCM2FHbGphQ0J2Ym14NUlITjFjSEJ2Y25SeklHQjBhR2x6WUNCaWFXNWthVzVuWEc0Z0tpQmhibVFnYzNCbFkybG1lV2x1WnlCMGFHVWdiblZ0WW1WeUlHOW1JR0Z5WjNWdFpXNTBjeUIwYnlCd2NtOTJhV1JsSUhSdklHQm1kVzVqWUM1Y2JpQXFYRzRnS2lCQWNISnBkbUYwWlZ4dUlDb2dRSEJoY21GdElIdEdkVzVqZEdsdmJuMGdablZ1WXlCVWFHVWdablZ1WTNScGIyNGdkRzhnWW1sdVpDNWNiaUFxSUVCd1lYSmhiU0I3S24wZ2RHaHBjMEZ5WnlCVWFHVWdZSFJvYVhOZ0lHSnBibVJwYm1jZ2IyWWdZR1oxYm1OZ0xseHVJQ29nUUhCaGNtRnRJSHR1ZFcxaVpYSjlJRnRoY21kRGIzVnVkRjBnVkdobElHNTFiV0psY2lCdlppQmhjbWQxYldWdWRITWdkRzhnY0hKdmRtbGtaU0IwYnlCZ1puVnVZMkF1WEc0Z0tpQkFjbVYwZFhKdWN5QjdSblZ1WTNScGIyNTlJRkpsZEhWeWJuTWdkR2hsSUdOaGJHeGlZV05yTGx4dUlDb3ZYRzVtZFc1amRHbHZiaUJpYVc1a1EyRnNiR0poWTJzb1puVnVZeXdnZEdocGMwRnlaeXdnWVhKblEyOTFiblFwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJtZFc1aklDRTlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdhV1JsYm5ScGRIazdYRzRnSUgxY2JpQWdhV1lnS0hSb2FYTkJjbWNnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCbWRXNWpPMXh1SUNCOVhHNGdJSE4zYVhSamFDQW9ZWEpuUTI5MWJuUXBJSHRjYmlBZ0lDQmpZWE5sSURFNklISmxkSFZ5YmlCbWRXNWpkR2x2YmloMllXeDFaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1oxYm1NdVkyRnNiQ2gwYUdselFYSm5MQ0IyWVd4MVpTazdYRzRnSUNBZ2ZUdGNiaUFnSUNCallYTmxJRE02SUhKbGRIVnliaUJtZFc1amRHbHZiaWgyWVd4MVpTd2dhVzVrWlhnc0lHTnZiR3hsWTNScGIyNHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQm1kVzVqTG1OaGJHd29kR2hwYzBGeVp5d2dkbUZzZFdVc0lHbHVaR1Y0TENCamIyeHNaV04wYVc5dUtUdGNiaUFnSUNCOU8xeHVJQ0FnSUdOaGMyVWdORG9nY21WMGRYSnVJR1oxYm1OMGFXOXVLR0ZqWTNWdGRXeGhkRzl5TENCMllXeDFaU3dnYVc1a1pYZ3NJR052Ykd4bFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJtZFc1akxtTmhiR3dvZEdocGMwRnlaeXdnWVdOamRXMTFiR0YwYjNJc0lIWmhiSFZsTENCcGJtUmxlQ3dnWTI5c2JHVmpkR2x2YmlrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0JqWVhObElEVTZJSEpsZEhWeWJpQm1kVzVqZEdsdmJpaDJZV3gxWlN3Z2IzUm9aWElzSUd0bGVTd2diMkpxWldOMExDQnpiM1Z5WTJVcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbWRXNWpMbU5oYkd3b2RHaHBjMEZ5Wnl3Z2RtRnNkV1VzSUc5MGFHVnlMQ0JyWlhrc0lHOWlhbVZqZEN3Z2MyOTFjbU5sS1R0Y2JpQWdJQ0I5TzF4dUlDQjlYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdablZ1WXk1aGNIQnNlU2gwYUdselFYSm5MQ0JoY21kMWJXVnVkSE1wTzF4dUlDQjlPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHSnBibVJEWVd4c1ltRmphenRjYmx4dVhHNWNiaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLbHh1SUNvcUlGZEZRbEJCUTBzZ1JrOVBWRVZTWEc0Z0tpb2dMaTkrTDJ4dlpHRnphQzlwYm5SbGNtNWhiQzlpYVc1a1EyRnNiR0poWTJzdWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQTFORnh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aUx5b3FYRzRnS2lCVWFHbHpJRzFsZEdodlpDQnlaWFIxY201eklIUm9aU0JtYVhKemRDQmhjbWQxYldWdWRDQndjbTkyYVdSbFpDQjBieUJwZEM1Y2JpQXFYRzRnS2lCQWMzUmhkR2xqWEc0Z0tpQkFiV1Z0WW1WeVQyWWdYMXh1SUNvZ1FHTmhkR1ZuYjNKNUlGVjBhV3hwZEhsY2JpQXFJRUJ3WVhKaGJTQjdLbjBnZG1Gc2RXVWdRVzU1SUhaaGJIVmxMbHh1SUNvZ1FISmxkSFZ5Ym5NZ2V5cDlJRkpsZEhWeWJuTWdZSFpoYkhWbFlDNWNiaUFxSUVCbGVHRnRjR3hsWEc0Z0tseHVJQ29nZG1GeUlHOWlhbVZqZENBOUlIc2dKM1Z6WlhJbk9pQW5abkpsWkNjZ2ZUdGNiaUFxWEc0Z0tpQmZMbWxrWlc1MGFYUjVLRzlpYW1WamRDa2dQVDA5SUc5aWFtVmpkRHRjYmlBcUlDOHZJRDArSUhSeWRXVmNiaUFxTDF4dVpuVnVZM1JwYjI0Z2FXUmxiblJwZEhrb2RtRnNkV1VwSUh0Y2JpQWdjbVYwZFhKdUlIWmhiSFZsTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR2xrWlc1MGFYUjVPMXh1WEc1Y2JseHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnS2lvZ1YwVkNVRUZEU3lCR1QwOVVSVkpjYmlBcUtpQXVMMzR2Ykc5a1lYTm9MM1YwYVd4cGRIa3ZhV1JsYm5ScGRIa3Vhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0ExTlZ4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lkbUZ5SUdKaGMyVlFjbTl3WlhKMGVTQTlJSEpsY1hWcGNtVW9KeTR1TDJsdWRHVnlibUZzTDJKaGMyVlFjbTl3WlhKMGVTY3BMRnh1SUNBZ0lHSmhjMlZRY205d1pYSjBlVVJsWlhBZ1BTQnlaWEYxYVhKbEtDY3VMaTlwYm5SbGNtNWhiQzlpWVhObFVISnZjR1Z5ZEhsRVpXVndKeWtzWEc0Z0lDQWdhWE5MWlhrZ1BTQnlaWEYxYVhKbEtDY3VMaTlwYm5SbGNtNWhiQzlwYzB0bGVTY3BPMXh1WEc0dktpcGNiaUFxSUVOeVpXRjBaWE1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJSEpsZEhWeWJuTWdkR2hsSUhCeWIzQmxjblI1SUhaaGJIVmxJR0YwSUdCd1lYUm9ZQ0J2YmlCaFhHNGdLaUJuYVhabGJpQnZZbXBsWTNRdVhHNGdLbHh1SUNvZ1FITjBZWFJwWTF4dUlDb2dRRzFsYldKbGNrOW1JRjljYmlBcUlFQmpZWFJsWjI5eWVTQlZkR2xzYVhSNVhHNGdLaUJBY0dGeVlXMGdlMEZ5Y21GNWZITjBjbWx1WjMwZ2NHRjBhQ0JVYUdVZ2NHRjBhQ0J2WmlCMGFHVWdjSEp2Y0dWeWRIa2dkRzhnWjJWMExseHVJQ29nUUhKbGRIVnlibk1nZTBaMWJtTjBhVzl1ZlNCU1pYUjFjbTV6SUhSb1pTQnVaWGNnWm5WdVkzUnBiMjR1WEc0Z0tpQkFaWGhoYlhCc1pWeHVJQ3BjYmlBcUlIWmhjaUJ2WW1wbFkzUnpJRDBnVzF4dUlDb2dJQ0I3SUNkaEp6b2dleUFuWWljNklIc2dKMk1uT2lBeUlIMGdmU0I5TEZ4dUlDb2dJQ0I3SUNkaEp6b2dleUFuWWljNklIc2dKMk1uT2lBeElIMGdmU0I5WEc0Z0tpQmRPMXh1SUNwY2JpQXFJRjh1YldGd0tHOWlhbVZqZEhNc0lGOHVjSEp2Y0dWeWRIa29KMkV1WWk1akp5a3BPMXh1SUNvZ0x5OGdQVDRnV3pJc0lERmRYRzRnS2x4dUlDb2dYeTV3YkhWamF5aGZMbk52Y25SQ2VTaHZZbXBsWTNSekxDQmZMbkJ5YjNCbGNuUjVLRnNuWVNjc0lDZGlKeXdnSjJNblhTa3BMQ0FuWVM1aUxtTW5LVHRjYmlBcUlDOHZJRDArSUZzeExDQXlYVnh1SUNvdlhHNW1kVzVqZEdsdmJpQndjbTl3WlhKMGVTaHdZWFJvS1NCN1hHNGdJSEpsZEhWeWJpQnBjMHRsZVNod1lYUm9LU0EvSUdKaGMyVlFjbTl3WlhKMGVTaHdZWFJvS1NBNklHSmhjMlZRY205d1pYSjBlVVJsWlhBb2NHRjBhQ2s3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjSEp2Y0dWeWRIazdYRzVjYmx4dVhHNHZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUFxS2lCWFJVSlFRVU5MSUVaUFQxUkZVbHh1SUNvcUlDNHZmaTlzYjJSaGMyZ3ZkWFJwYkdsMGVTOXdjbTl3WlhKMGVTNXFjMXh1SUNvcUlHMXZaSFZzWlNCcFpDQTlJRFUyWEc0Z0tpb2diVzlrZFd4bElHTm9kVzVyY3lBOUlEQmNiaUFxS2k4aUxDSjJZWElnWW1GelpVZGxkQ0E5SUhKbGNYVnBjbVVvSnk0dlltRnpaVWRsZENjcExGeHVJQ0FnSUhSdlVHRjBhQ0E5SUhKbGNYVnBjbVVvSnk0dmRHOVFZWFJvSnlrN1hHNWNiaThxS2x4dUlDb2dRU0J6Y0dWamFXRnNhWHBsWkNCMlpYSnphVzl1SUc5bUlHQmlZWE5sVUhKdmNHVnlkSGxnSUhkb2FXTm9JSE4xY0hCdmNuUnpJR1JsWlhBZ2NHRjBhSE11WEc0Z0tseHVJQ29nUUhCeWFYWmhkR1ZjYmlBcUlFQndZWEpoYlNCN1FYSnlZWGw4YzNSeWFXNW5mU0J3WVhSb0lGUm9aU0J3WVhSb0lHOW1JSFJvWlNCd2NtOXdaWEowZVNCMGJ5Qm5aWFF1WEc0Z0tpQkFjbVYwZFhKdWN5QjdSblZ1WTNScGIyNTlJRkpsZEhWeWJuTWdkR2hsSUc1bGR5Qm1kVzVqZEdsdmJpNWNiaUFxTDF4dVpuVnVZM1JwYjI0Z1ltRnpaVkJ5YjNCbGNuUjVSR1ZsY0Nod1lYUm9LU0I3WEc0Z0lIWmhjaUJ3WVhSb1MyVjVJRDBnS0hCaGRHZ2dLeUFuSnlrN1hHNGdJSEJoZEdnZ1BTQjBiMUJoZEdnb2NHRjBhQ2s3WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlodlltcGxZM1FwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdZbUZ6WlVkbGRDaHZZbXBsWTNRc0lIQmhkR2dzSUhCaGRHaExaWGtwTzF4dUlDQjlPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHSmhjMlZRY205d1pYSjBlVVJsWlhBN1hHNWNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOXNiMlJoYzJndmFXNTBaWEp1WVd3dlltRnpaVkJ5YjNCbGNuUjVSR1ZsY0M1cWMxeHVJQ29xSUcxdlpIVnNaU0JwWkNBOUlEVTNYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENKMllYSWdZbUZ6WlVsdVpHVjRUMllnUFNCeVpYRjFhWEpsS0NjdUwySmhjMlZKYm1SbGVFOW1KeWtzWEc0Z0lDQWdZMkZqYUdWSmJtUmxlRTltSUQwZ2NtVnhkV2x5WlNnbkxpOWpZV05vWlVsdVpHVjRUMlluS1N4Y2JpQWdJQ0JqY21WaGRHVkRZV05vWlNBOUlISmxjWFZwY21Vb0p5NHZZM0psWVhSbFEyRmphR1VuS1R0Y2JseHVMeW9xSUZWelpXUWdZWE1nZEdobElITnBlbVVnZEc4Z1pXNWhZbXhsSUd4aGNtZGxJR0Z5Y21GNUlHOXdkR2x0YVhwaGRHbHZibk11SUNvdlhHNTJZWElnVEVGU1IwVmZRVkpTUVZsZlUwbGFSU0E5SURJd01EdGNibHh1THlvcVhHNGdLaUJVYUdVZ1ltRnpaU0JwYlhCc1pXMWxiblJoZEdsdmJpQnZaaUJnWHk1MWJtbHhZQ0IzYVhSb2IzVjBJSE4xY0hCdmNuUWdabTl5SUdOaGJHeGlZV05ySUhOb2IzSjBhR0Z1WkhOY2JpQXFJR0Z1WkNCZ2RHaHBjMkFnWW1sdVpHbHVaeTVjYmlBcVhHNGdLaUJBY0hKcGRtRjBaVnh1SUNvZ1FIQmhjbUZ0SUh0QmNuSmhlWDBnWVhKeVlYa2dWR2hsSUdGeWNtRjVJSFJ2SUdsdWMzQmxZM1F1WEc0Z0tpQkFjR0Z5WVcwZ2UwWjFibU4wYVc5dWZTQmJhWFJsY21GMFpXVmRJRlJvWlNCbWRXNWpkR2x2YmlCcGJuWnZhMlZrSUhCbGNpQnBkR1Z5WVhScGIyNHVYRzRnS2lCQWNtVjBkWEp1Y3lCN1FYSnlZWGw5SUZKbGRIVnlibk1nZEdobElHNWxkeUJrZFhCc2FXTmhkR1VnWm5KbFpTQmhjbkpoZVM1Y2JpQXFMMXh1Wm5WdVkzUnBiMjRnWW1GelpWVnVhWEVvWVhKeVlYa3NJR2wwWlhKaGRHVmxLU0I3WEc0Z0lIWmhjaUJwYm1SbGVDQTlJQzB4TEZ4dUlDQWdJQ0FnYVc1a1pYaFBaaUE5SUdKaGMyVkpibVJsZUU5bUxGeHVJQ0FnSUNBZ2JHVnVaM1JvSUQwZ1lYSnlZWGt1YkdWdVozUm9MRnh1SUNBZ0lDQWdhWE5EYjIxdGIyNGdQU0IwY25WbExGeHVJQ0FnSUNBZ2FYTk1ZWEpuWlNBOUlHbHpRMjl0Ylc5dUlDWW1JR3hsYm1kMGFDQStQU0JNUVZKSFJWOUJVbEpCV1Y5VFNWcEZMRnh1SUNBZ0lDQWdjMlZsYmlBOUlHbHpUR0Z5WjJVZ1B5QmpjbVZoZEdWRFlXTm9aU2dwSURvZ2JuVnNiQ3hjYmlBZ0lDQWdJSEpsYzNWc2RDQTlJRnRkTzF4dVhHNGdJR2xtSUNoelpXVnVLU0I3WEc0Z0lDQWdhVzVrWlhoUFppQTlJR05oWTJobFNXNWtaWGhQWmp0Y2JpQWdJQ0JwYzBOdmJXMXZiaUE5SUdaaGJITmxPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJR2x6VEdGeVoyVWdQU0JtWVd4elpUdGNiaUFnSUNCelpXVnVJRDBnYVhSbGNtRjBaV1VnUHlCYlhTQTZJSEpsYzNWc2REdGNiaUFnZlZ4dUlDQnZkWFJsY2pwY2JpQWdkMmhwYkdVZ0tDc3JhVzVrWlhnZ1BDQnNaVzVuZEdncElIdGNiaUFnSUNCMllYSWdkbUZzZFdVZ1BTQmhjbkpoZVZ0cGJtUmxlRjBzWEc0Z0lDQWdJQ0FnSUdOdmJYQjFkR1ZrSUQwZ2FYUmxjbUYwWldVZ1B5QnBkR1Z5WVhSbFpTaDJZV3gxWlN3Z2FXNWtaWGdzSUdGeWNtRjVLU0E2SUhaaGJIVmxPMXh1WEc0Z0lDQWdhV1lnS0dselEyOXRiVzl1SUNZbUlIWmhiSFZsSUQwOVBTQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ2RtRnlJSE5sWlc1SmJtUmxlQ0E5SUhObFpXNHViR1Z1WjNSb08xeHVJQ0FnSUNBZ2QyaHBiR1VnS0hObFpXNUpibVJsZUMwdEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoelpXVnVXM05sWlc1SmJtUmxlRjBnUFQwOUlHTnZiWEIxZEdWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHbHVkV1VnYjNWMFpYSTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR2xtSUNocGRHVnlZWFJsWlNrZ2UxeHVJQ0FnSUNBZ0lDQnpaV1Z1TG5CMWMyZ29ZMjl0Y0hWMFpXUXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjbVZ6ZFd4MExuQjFjMmdvZG1Gc2RXVXBPMXh1SUNBZ0lIMWNiaUFnSUNCbGJITmxJR2xtSUNocGJtUmxlRTltS0hObFpXNHNJR052YlhCMWRHVmtMQ0F3S1NBOElEQXBJSHRjYmlBZ0lDQWdJR2xtSUNocGRHVnlZWFJsWlNCOGZDQnBjMHhoY21kbEtTQjdYRzRnSUNBZ0lDQWdJSE5sWlc0dWNIVnphQ2hqYjIxd2RYUmxaQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J5WlhOMWJIUXVjSFZ6YUNoMllXeDFaU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEpsZEhWeWJpQnlaWE4xYkhRN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWW1GelpWVnVhWEU3WEc1Y2JseHVYRzR2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlBcUtpQlhSVUpRUVVOTElFWlBUMVJGVWx4dUlDb3FJQzR2Zmk5c2IyUmhjMmd2YVc1MFpYSnVZV3d2WW1GelpWVnVhWEV1YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBMU9GeHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpTHlvcVhHNGdLaUJCYmlCcGJYQnNaVzFsYm5SaGRHbHZiaUJ2WmlCZ1h5NTFibWx4WUNCdmNIUnBiV2w2WldRZ1ptOXlJSE52Y25SbFpDQmhjbkpoZVhNZ2QybDBhRzkxZENCemRYQndiM0owWEc0Z0tpQm1iM0lnWTJGc2JHSmhZMnNnYzJodmNuUm9ZVzVrY3lCaGJtUWdZSFJvYVhOZ0lHSnBibVJwYm1jdVhHNGdLbHh1SUNvZ1FIQnlhWFpoZEdWY2JpQXFJRUJ3WVhKaGJTQjdRWEp5WVhsOUlHRnljbUY1SUZSb1pTQmhjbkpoZVNCMGJ5QnBibk53WldOMExseHVJQ29nUUhCaGNtRnRJSHRHZFc1amRHbHZibjBnVzJsMFpYSmhkR1ZsWFNCVWFHVWdablZ1WTNScGIyNGdhVzUyYjJ0bFpDQndaWElnYVhSbGNtRjBhVzl1TGx4dUlDb2dRSEpsZEhWeWJuTWdlMEZ5Y21GNWZTQlNaWFIxY201eklIUm9aU0J1WlhjZ1pIVndiR2xqWVhSbElHWnlaV1VnWVhKeVlYa3VYRzRnS2k5Y2JtWjFibU4wYVc5dUlITnZjblJsWkZWdWFYRW9ZWEp5WVhrc0lHbDBaWEpoZEdWbEtTQjdYRzRnSUhaaGNpQnpaV1Z1TEZ4dUlDQWdJQ0FnYVc1a1pYZ2dQU0F0TVN4Y2JpQWdJQ0FnSUd4bGJtZDBhQ0E5SUdGeWNtRjVMbXhsYm1kMGFDeGNiaUFnSUNBZ0lISmxjMGx1WkdWNElEMGdMVEVzWEc0Z0lDQWdJQ0J5WlhOMWJIUWdQU0JiWFR0Y2JseHVJQ0IzYUdsc1pTQW9LeXRwYm1SbGVDQThJR3hsYm1kMGFDa2dlMXh1SUNBZ0lIWmhjaUIyWVd4MVpTQTlJR0Z5Y21GNVcybHVaR1Y0WFN4Y2JpQWdJQ0FnSUNBZ1kyOXRjSFYwWldRZ1BTQnBkR1Z5WVhSbFpTQS9JR2wwWlhKaGRHVmxLSFpoYkhWbExDQnBibVJsZUN3Z1lYSnlZWGtwSURvZ2RtRnNkV1U3WEc1Y2JpQWdJQ0JwWmlBb0lXbHVaR1Y0SUh4OElITmxaVzRnSVQwOUlHTnZiWEIxZEdWa0tTQjdYRzRnSUNBZ0lDQnpaV1Z1SUQwZ1kyOXRjSFYwWldRN1hHNGdJQ0FnSUNCeVpYTjFiSFJiS3l0eVpYTkpibVJsZUYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY21WMGRYSnVJSEpsYzNWc2REdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCemIzSjBaV1JWYm1seE8xeHVYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lBdUwzNHZiRzlrWVhOb0wybHVkR1Z5Ym1Gc0wzTnZjblJsWkZWdWFYRXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0ExT1Z4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2UxTjFZbk5qY21sd2RHbHZiaXdnYzNWaWMyTnlhWEIwYVc5dWMwSjVWVlZKUkN3Z2MzVmljMk55YVhCMGFXOXVjMEo1VUhKdmNHVnlkSGtzSUhCeWIzQmxjblJwWlhNc0lHTmhiR3hpWVdOcmZTa2dQVDRnZTF4dUlDQXZLaUJ0WVd0bElHRWdjM1ZpYzJOeWFYQjBhVzl1SUNvdlhHNGdJR3hsZENCemRXSnpZM0pwY0hScGIyNGdQU0JUZFdKelkzSnBjSFJwYjI0b2UzQnliM0JsY25ScFpYTXNJR05oYkd4aVlXTnJmU2s3WEc1Y2JpQWdMeW9nWVdSa0lIUm9aU0J6ZFdKelkzSnBjSFJwYjI0Z2RHOGdkR2hsSUhOMVluTmpjbWx3ZEdsdmJuTkNlVlZWU1VRZ2IySnFaV04wSUNvdlhHNGdJSE4xWW5OamNtbHdkR2x2Ym5OQ2VWVlZTVVJiYzNWaWMyTnlhWEIwYVc5dUxuVjFhV1JkSUQwZ2MzVmljMk55YVhCMGFXOXVPMXh1WEc0Z0lDOHFJR0ZrWkNCeVpXWmxjbVZ1WTJWeklIUnZJSFJvWlNCemRXSnpZM0pwY0hScGIyNGdkRzhnWldGamFDQnZaaUIwYUdVZ0tpOWNiaUFnTHlvZ2MzVmljMk55YVdKbFpDQndjbTl3WlhKMGFXVnpJQ292WEc0Z0lIQnliM0JsY25ScFpYTXVabTl5UldGamFDZ29jSEp2Y0dWeWRIa3BJRDArSUh0Y2JpQWdJQ0J6ZFdKelkzSnBjSFJwYjI1elFubFFjbTl3WlhKMGVTNWhaR1FvZTNCeWIzQmxjblI1TENCemRXSnpZM0pwY0hScGIyNTlLVHRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUhOMVluTmpjbWx3ZEdsdmJpNTFkV2xrTzF4dWZUdGNibHh1WEc1Y2JseHVYRzR2S2lvZ1YwVkNVRUZEU3lCR1QwOVVSVklnS2lwY2JpQXFLaUF1TDJwaGRtRnpZM0pwY0hRdmMzVmljMk55YVdKbExtcHpYRzRnS2lvdklpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXBiWEJ2Y25RZ2RYVnBaQ0JtY205dElDZHViMlJsTFhWMWFXUW5PMXh1WEc1amIyNXpkQ0JUVlVKVFExSkpVRlJKVDA1ZlVGSlBWRTlVV1ZCRklEMGdlMXh1SUNCd2NtOXdaWEowYVdWek9pQmJYU3hjYmlBZ1kyRnNiR0poWTJzNklHWjFibU4wYVc5dUlDZ3BJSHQ5TEZ4dUlDQm5kV2xrT2lCdWRXeHNYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2UzQnliM0JsY25ScFpYTXNJR05oYkd4aVlXTnJmU2tnUFQ0Z2UxeHVJQ0JzWlhRZ2MzVmljMk55YVhCMGFXOXVJRDBnVDJKcVpXTjBMbU55WldGMFpTaFRWVUpUUTFKSlVGUkpUMDVmVUZKUFZFOVVXVkJGS1R0Y2JseHVJQ0J6ZFdKelkzSnBjSFJwYjI0dWNISnZjR1Z5ZEdsbGN5QTlJSEJ5YjNCbGNuUnBaWE03WEc0Z0lITjFZbk5qY21sd2RHbHZiaTVqWVd4c1ltRmpheUE5SUdOaGJHeGlZV05yTzF4dUlDQnpkV0p6WTNKcGNIUnBiMjR1ZFhWcFpDQTlJSFYxYVdRdWRqUW9LVHRjYmx4dUlDQnlaWFIxY200Z2MzVmljMk55YVhCMGFXOXVPMXh1ZlR0Y2JseHVaWGh3YjNKMElIc2dVMVZDVTBOU1NWQlVTVTlPWDFCU1QxUlBWRmxRUlNCOU8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ0xpOXFZWFpoYzJOeWFYQjBMMU4xWW5OamNtbHdkR2x2Ymk1cWMxeHVJQ29xTHlJc0lpOHZJQ0FnSUNCMWRXbGtMbXB6WEc0dkwxeHVMeThnSUNBZ0lFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE1DMHlNREV5SUZKdlltVnlkQ0JMYVdWbVptVnlYRzR2THlBZ0lDQWdUVWxVSUV4cFkyVnVjMlVnTFNCb2RIUndPaTh2YjNCbGJuTnZkWEpqWlM1dmNtY3ZiR2xqWlc1elpYTXZiV2wwTFd4cFkyVnVjMlV1Y0dod1hHNWNiaWhtZFc1amRHbHZiaWdwSUh0Y2JpQWdkbUZ5SUY5bmJHOWlZV3dnUFNCMGFHbHpPMXh1WEc0Z0lDOHZJRlZ1YVhGMVpTQkpSQ0JqY21WaGRHbHZiaUJ5WlhGMWFYSmxjeUJoSUdocFoyZ2djWFZoYkdsMGVTQnlZVzVrYjIwZ0l5Qm5aVzVsY21GMGIzSXVJQ0JYWlNCbVpXRjBkWEpsWEc0Z0lDOHZJR1JsZEdWamRDQjBieUJrWlhSbGNtMXBibVVnZEdobElHSmxjM1FnVWs1SElITnZkWEpqWlN3Z2JtOXliV0ZzYVhwcGJtY2dkRzhnWVNCbWRXNWpkR2x2YmlCMGFHRjBYRzRnSUM4dklISmxkSFZ5Ym5NZ01USTRMV0pwZEhNZ2IyWWdjbUZ1Wkc5dGJtVnpjeXdnYzJsdVkyVWdkR2hoZENkeklIZG9ZWFFuY3lCMWMzVmhiR3g1SUhKbGNYVnBjbVZrWEc0Z0lIWmhjaUJmY201bk8xeHVYRzRnSUM4dklFNXZaR1V1YW5NZ1kzSjVjSFJ2TFdKaGMyVmtJRkpPUnlBdElHaDBkSEE2THk5dWIyUmxhbk11YjNKbkwyUnZZM012ZGpBdU5pNHlMMkZ3YVM5amNubHdkRzh1YUhSdGJGeHVJQ0F2TDF4dUlDQXZMeUJOYjJSbGNtRjBaV3g1SUdaaGMzUXNJR2hwWjJnZ2NYVmhiR2wwZVZ4dUlDQnBaaUFvZEhsd1pXOW1LRjluYkc5aVlXd3VjbVZ4ZFdseVpTa2dQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQjJZWElnWDNKaUlEMGdYMmRzYjJKaGJDNXlaWEYxYVhKbEtDZGpjbmx3ZEc4bktTNXlZVzVrYjIxQ2VYUmxjenRjYmlBZ0lDQWdJRjl5Ym1jZ1BTQmZjbUlnSmlZZ1puVnVZM1JwYjI0b0tTQjdjbVYwZFhKdUlGOXlZaWd4TmlrN2ZUdGNiaUFnSUNCOUlHTmhkR05vS0dVcElIdDlYRzRnSUgxY2JseHVJQ0JwWmlBb0lWOXlibWNnSmlZZ1gyZHNiMkpoYkM1amNubHdkRzhnSmlZZ1kzSjVjSFJ2TG1kbGRGSmhibVJ2YlZaaGJIVmxjeWtnZTF4dUlDQWdJQzh2SUZkSVFWUlhSeUJqY25sd2RHOHRZbUZ6WldRZ1VrNUhJQzBnYUhSMGNEb3ZMM2RwYTJrdWQyaGhkSGRuTG05eVp5OTNhV3RwTDBOeWVYQjBiMXh1SUNBZ0lDOHZYRzRnSUNBZ0x5OGdUVzlrWlhKaGRHVnNlU0JtWVhOMExDQm9hV2RvSUhGMVlXeHBkSGxjYmlBZ0lDQjJZWElnWDNKdVpITTRJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29NVFlwTzF4dUlDQWdJRjl5Ym1jZ1BTQm1kVzVqZEdsdmJpQjNhR0YwZDJkU1RrY29LU0I3WEc0Z0lDQWdJQ0JqY25sd2RHOHVaMlYwVW1GdVpHOXRWbUZzZFdWektGOXlibVJ6T0NrN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWDNKdVpITTRPMXh1SUNBZ0lIMDdYRzRnSUgxY2JseHVJQ0JwWmlBb0lWOXlibWNwSUh0Y2JpQWdJQ0F2THlCTllYUm9MbkpoYm1SdmJTZ3BMV0poYzJWa0lDaFNUa2NwWEc0Z0lDQWdMeTljYmlBZ0lDQXZMeUJKWmlCaGJHd2daV3h6WlNCbVlXbHNjeXdnZFhObElFMWhkR2d1Y21GdVpHOXRLQ2t1SUNCSmRDZHpJR1poYzNRc0lHSjFkQ0JwY3lCdlppQjFibk53WldOcFptbGxaRnh1SUNBZ0lDOHZJSEYxWVd4cGRIa3VYRzRnSUNBZ2RtRnlJQ0JmY201a2N5QTlJRzVsZHlCQmNuSmhlU2d4TmlrN1hHNGdJQ0FnWDNKdVp5QTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQXNJSEk3SUdrZ1BDQXhOanNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnb2FTQW1JREI0TURNcElEMDlQU0F3S1NCeUlEMGdUV0YwYUM1eVlXNWtiMjBvS1NBcUlEQjRNVEF3TURBd01EQXdPMXh1SUNBZ0lDQWdJQ0JmY201a2MxdHBYU0E5SUhJZ1BqNCtJQ2dvYVNBbUlEQjRNRE1wSUR3OElETXBJQ1lnTUhobVpqdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdjbVYwZFhKdUlGOXlibVJ6TzF4dUlDQWdJSDA3WEc0Z0lIMWNibHh1SUNBdkx5QkNkV1ptWlhJZ1kyeGhjM01nZEc4Z2RYTmxYRzRnSUhaaGNpQkNkV1ptWlhKRGJHRnpjeUE5SUhSNWNHVnZaaWhmWjJ4dlltRnNMa0oxWm1abGNpa2dQVDBnSjJaMWJtTjBhVzl1SnlBL0lGOW5iRzlpWVd3dVFuVm1abVZ5SURvZ1FYSnlZWGs3WEc1Y2JpQWdMeThnVFdGd2N5Qm1iM0lnYm5WdFltVnlJRHd0UGlCb1pYZ2djM1J5YVc1bklHTnZiblpsY25OcGIyNWNiaUFnZG1GeUlGOWllWFJsVkc5SVpYZ2dQU0JiWFR0Y2JpQWdkbUZ5SUY5b1pYaFViMEo1ZEdVZ1BTQjdmVHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQXlOVFk3SUdrckt5a2dlMXh1SUNBZ0lGOWllWFJsVkc5SVpYaGJhVjBnUFNBb2FTQXJJREI0TVRBd0tTNTBiMU4wY21sdVp5Z3hOaWt1YzNWaWMzUnlLREVwTzF4dUlDQWdJRjlvWlhoVWIwSjVkR1ZiWDJKNWRHVlViMGhsZUZ0cFhWMGdQU0JwTzF4dUlDQjlYRzVjYmlBZ0x5OGdLaXBnY0dGeWMyVW9LV0FnTFNCUVlYSnpaU0JoSUZWVlNVUWdhVzUwYnlCcGRDZHpJR052YlhCdmJtVnVkQ0JpZVhSbGN5b3FYRzRnSUdaMWJtTjBhVzl1SUhCaGNuTmxLSE1zSUdKMVppd2diMlptYzJWMEtTQjdYRzRnSUNBZ2RtRnlJR2tnUFNBb1luVm1JQ1ltSUc5bVpuTmxkQ2tnZkh3Z01Dd2dhV2tnUFNBd08xeHVYRzRnSUNBZ1luVm1JRDBnWW5WbUlIeDhJRnRkTzF4dUlDQWdJSE11ZEc5TWIzZGxja05oYzJVb0tTNXlaWEJzWVdObEtDOWJNQzA1WVMxbVhYc3lmUzluTENCbWRXNWpkR2x2YmlodlkzUXBJSHRjYmlBZ0lDQWdJR2xtSUNocGFTQThJREUyS1NCN0lDOHZJRVJ2YmlkMElHOTJaWEptYkc5M0lWeHVJQ0FnSUNBZ0lDQmlkV1piYVNBcklHbHBLeXRkSUQwZ1gyaGxlRlJ2UW5sMFpWdHZZM1JkTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnTHk4Z1dtVnlieUJ2ZFhRZ2NtVnRZV2x1YVc1bklHSjVkR1Z6SUdsbUlITjBjbWx1WnlCM1lYTWdjMmh2Y25SY2JpQWdJQ0IzYUdsc1pTQW9hV2tnUENBeE5pa2dlMXh1SUNBZ0lDQWdZblZtVzJrZ0t5QnBhU3NyWFNBOUlEQTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUdKMVpqdGNiaUFnZlZ4dVhHNGdJQzh2SUNvcVlIVnVjR0Z5YzJVb0tXQWdMU0JEYjI1MlpYSjBJRlZWU1VRZ1lubDBaU0JoY25KaGVTQW9ZV3hoSUhCaGNuTmxLQ2twSUdsdWRHOGdZU0J6ZEhKcGJtY3FLbHh1SUNCbWRXNWpkR2x2YmlCMWJuQmhjbk5sS0dKMVppd2diMlptYzJWMEtTQjdYRzRnSUNBZ2RtRnlJR2tnUFNCdlptWnpaWFFnZkh3Z01Dd2dZblJvSUQwZ1gySjVkR1ZVYjBobGVEdGNiaUFnSUNCeVpYUjFjbTRnSUdKMGFGdGlkV1piYVNzclhWMGdLeUJpZEdoYlluVm1XMmtySzExZElDdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKMGFGdGlkV1piYVNzclhWMGdLeUJpZEdoYlluVm1XMmtySzExZElDc2dKeTBuSUN0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0owYUZ0aWRXWmJhU3NyWFYwZ0t5QmlkR2hiWW5WbVcya3JLMTFkSUNzZ0p5MG5JQ3RjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjBhRnRpZFdaYmFTc3JYVjBnS3lCaWRHaGJZblZtVzJrcksxMWRJQ3NnSnkwbklDdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKMGFGdGlkV1piYVNzclhWMGdLeUJpZEdoYlluVm1XMmtySzExZElDc2dKeTBuSUN0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0owYUZ0aWRXWmJhU3NyWFYwZ0t5QmlkR2hiWW5WbVcya3JLMTFkSUN0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0owYUZ0aWRXWmJhU3NyWFYwZ0t5QmlkR2hiWW5WbVcya3JLMTFkSUN0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0owYUZ0aWRXWmJhU3NyWFYwZ0t5QmlkR2hiWW5WbVcya3JLMTFkTzF4dUlDQjlYRzVjYmlBZ0x5OGdLaXBnZGpFb0tXQWdMU0JIWlc1bGNtRjBaU0IwYVcxbExXSmhjMlZrSUZWVlNVUXFLbHh1SUNBdkwxeHVJQ0F2THlCSmJuTndhWEpsWkNCaWVTQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZUR2x2YzBzdlZWVkpSQzVxYzF4dUlDQXZMeUJoYm1RZ2FIUjBjRG92TDJSdlkzTXVjSGwwYUc5dUxtOXlaeTlzYVdKeVlYSjVMM1YxYVdRdWFIUnRiRnh1WEc0Z0lDOHZJSEpoYm1SdmJTQWpKM01nZDJVZ2JtVmxaQ0IwYnlCcGJtbDBJRzV2WkdVZ1lXNWtJR05zYjJOcmMyVnhYRzRnSUhaaGNpQmZjMlZsWkVKNWRHVnpJRDBnWDNKdVp5Z3BPMXh1WEc0Z0lDOHZJRkJsY2lBMExqVXNJR055WldGMFpTQmhibVFnTkRndFltbDBJRzV2WkdVZ2FXUXNJQ2cwTnlCeVlXNWtiMjBnWW1sMGN5QXJJRzExYkhScFkyRnpkQ0JpYVhRZ1BTQXhLVnh1SUNCMllYSWdYMjV2WkdWSlpDQTlJRnRjYmlBZ0lDQmZjMlZsWkVKNWRHVnpXekJkSUh3Z01IZ3dNU3hjYmlBZ0lDQmZjMlZsWkVKNWRHVnpXekZkTENCZmMyVmxaRUo1ZEdWeld6SmRMQ0JmYzJWbFpFSjVkR1Z6V3pOZExDQmZjMlZsWkVKNWRHVnpXelJkTENCZmMyVmxaRUo1ZEdWeld6VmRYRzRnSUYwN1hHNWNiaUFnTHk4Z1VHVnlJRFF1TWk0eUxDQnlZVzVrYjIxcGVtVWdLREUwSUdKcGRDa2dZMnh2WTJ0elpYRmNiaUFnZG1GeUlGOWpiRzlqYTNObGNTQTlJQ2hmYzJWbFpFSjVkR1Z6V3paZElEdzhJRGdnZkNCZmMyVmxaRUo1ZEdWeld6ZGRLU0FtSURCNE0yWm1aanRjYmx4dUlDQXZMeUJRY21WMmFXOTFjeUIxZFdsa0lHTnlaV0YwYVc5dUlIUnBiV1ZjYmlBZ2RtRnlJRjlzWVhOMFRWTmxZM01nUFNBd0xDQmZiR0Z6ZEU1VFpXTnpJRDBnTUR0Y2JseHVJQ0F2THlCVFpXVWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMkp5YjI5bVlTOXViMlJsTFhWMWFXUWdabTl5SUVGUVNTQmtaWFJoYVd4elhHNGdJR1oxYm1OMGFXOXVJSFl4S0c5d2RHbHZibk1zSUdKMVppd2diMlptYzJWMEtTQjdYRzRnSUNBZ2RtRnlJR2tnUFNCaWRXWWdKaVlnYjJabWMyVjBJSHg4SURBN1hHNGdJQ0FnZG1GeUlHSWdQU0JpZFdZZ2ZId2dXMTA3WEc1Y2JpQWdJQ0J2Y0hScGIyNXpJRDBnYjNCMGFXOXVjeUI4ZkNCN2ZUdGNibHh1SUNBZ0lIWmhjaUJqYkc5amEzTmxjU0E5SUc5d2RHbHZibk11WTJ4dlkydHpaWEVnSVQwZ2JuVnNiQ0EvSUc5d2RHbHZibk11WTJ4dlkydHpaWEVnT2lCZlkyeHZZMnR6WlhFN1hHNWNiaUFnSUNBdkx5QlZWVWxFSUhScGJXVnpkR0Z0Y0hNZ1lYSmxJREV3TUNCdVlXNXZMWE5sWTI5dVpDQjFibWwwY3lCemFXNWpaU0IwYUdVZ1IzSmxaMjl5YVdGdUlHVndiMk5vTEZ4dUlDQWdJQzh2SUNneE5UZ3lMVEV3TFRFMUlEQXdPakF3S1M0Z0lFcFRUblZ0WW1WeWN5QmhjbVZ1SjNRZ2NISmxZMmx6WlNCbGJtOTFaMmdnWm05eUlIUm9hWE1zSUhOdlhHNGdJQ0FnTHk4Z2RHbHRaU0JwY3lCb1lXNWtiR1ZrSUdsdWRHVnlibUZzYkhrZ1lYTWdKMjF6WldOekp5QW9hVzUwWldkbGNpQnRhV3hzYVhObFkyOXVaSE1wSUdGdVpDQW5ibk5sWTNNblhHNGdJQ0FnTHk4Z0tERXdNQzF1WVc1dmMyVmpiMjVrY3lCdlptWnpaWFFnWm5KdmJTQnRjMlZqY3lrZ2MybHVZMlVnZFc1cGVDQmxjRzlqYUN3Z01UazNNQzB3TVMwd01TQXdNRG93TUM1Y2JpQWdJQ0IyWVhJZ2JYTmxZM01nUFNCdmNIUnBiMjV6TG0xelpXTnpJQ0U5SUc1MWJHd2dQeUJ2Y0hScGIyNXpMbTF6WldOeklEb2dibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2s3WEc1Y2JpQWdJQ0F2THlCUVpYSWdOQzR5TGpFdU1pd2dkWE5sSUdOdmRXNTBJRzltSUhWMWFXUW5jeUJuWlc1bGNtRjBaV1FnWkhWeWFXNW5JSFJvWlNCamRYSnlaVzUwSUdOc2IyTnJYRzRnSUNBZ0x5OGdZM2xqYkdVZ2RHOGdjMmx0ZFd4aGRHVWdhR2xuYUdWeUlISmxjMjlzZFhScGIyNGdZMnh2WTJ0Y2JpQWdJQ0IyWVhJZ2JuTmxZM01nUFNCdmNIUnBiMjV6TG01elpXTnpJQ0U5SUc1MWJHd2dQeUJ2Y0hScGIyNXpMbTV6WldOeklEb2dYMnhoYzNST1UyVmpjeUFySURFN1hHNWNiaUFnSUNBdkx5QlVhVzFsSUhOcGJtTmxJR3hoYzNRZ2RYVnBaQ0JqY21WaGRHbHZiaUFvYVc0Z2JYTmxZM01wWEc0Z0lDQWdkbUZ5SUdSMElEMGdLRzF6WldOeklDMGdYMnhoYzNSTlUyVmpjeWtnS3lBb2JuTmxZM01nTFNCZmJHRnpkRTVUWldOektTOHhNREF3TUR0Y2JseHVJQ0FnSUM4dklGQmxjaUEwTGpJdU1TNHlMQ0JDZFcxd0lHTnNiMk5yYzJWeElHOXVJR05zYjJOcklISmxaM0psYzNOcGIyNWNiaUFnSUNCcFppQW9aSFFnUENBd0lDWW1JRzl3ZEdsdmJuTXVZMnh2WTJ0elpYRWdQVDBnYm5Wc2JDa2dlMXh1SUNBZ0lDQWdZMnh2WTJ0elpYRWdQU0JqYkc5amEzTmxjU0FySURFZ0ppQXdlRE5tWm1ZN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1VtVnpaWFFnYm5ObFkzTWdhV1lnWTJ4dlkyc2djbVZuY21WemMyVnpJQ2h1WlhjZ1kyeHZZMnR6WlhFcElHOXlJSGRsSjNabElHMXZkbVZrSUc5dWRHOGdZU0J1WlhkY2JpQWdJQ0F2THlCMGFXMWxJR2x1ZEdWeWRtRnNYRzRnSUNBZ2FXWWdLQ2hrZENBOElEQWdmSHdnYlhObFkzTWdQaUJmYkdGemRFMVRaV056S1NBbUppQnZjSFJwYjI1ekxtNXpaV056SUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUc1elpXTnpJRDBnTUR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCUVpYSWdOQzR5TGpFdU1pQlVhSEp2ZHlCbGNuSnZjaUJwWmlCMGIyOGdiV0Z1ZVNCMWRXbGtjeUJoY21VZ2NtVnhkV1Z6ZEdWa1hHNGdJQ0FnYVdZZ0tHNXpaV056SUQ0OUlERXdNREF3S1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjNWMWFXUXVkakVvS1RvZ1EyRnVYRnduZENCamNtVmhkR1VnYlc5eVpTQjBhR0Z1SURFd1RTQjFkV2xrY3k5elpXTW5LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmZiR0Z6ZEUxVFpXTnpJRDBnYlhObFkzTTdYRzRnSUNBZ1gyeGhjM1JPVTJWamN5QTlJRzV6WldOek8xeHVJQ0FnSUY5amJHOWphM05sY1NBOUlHTnNiMk5yYzJWeE8xeHVYRzRnSUNBZ0x5OGdVR1Z5SURRdU1TNDBJQzBnUTI5dWRtVnlkQ0JtY205dElIVnVhWGdnWlhCdlkyZ2dkRzhnUjNKbFoyOXlhV0Z1SUdWd2IyTm9YRzRnSUNBZ2JYTmxZM01nS3owZ01USXlNVGt5T1RJNE1EQXdNREE3WEc1Y2JpQWdJQ0F2THlCZ2RHbHRaVjlzYjNkZ1hHNGdJQ0FnZG1GeUlIUnNJRDBnS0NodGMyVmpjeUFtSURCNFptWm1abVptWmlrZ0tpQXhNREF3TUNBcklHNXpaV056S1NBbElEQjRNVEF3TURBd01EQXdPMXh1SUNBZ0lHSmJhU3NyWFNBOUlIUnNJRDQrUGlBeU5DQW1JREI0Wm1ZN1hHNGdJQ0FnWWx0cEt5dGRJRDBnZEd3Z1BqNCtJREUySUNZZ01IaG1aanRjYmlBZ0lDQmlXMmtySzEwZ1BTQjBiQ0ErUGo0Z09DQW1JREI0Wm1ZN1hHNGdJQ0FnWWx0cEt5dGRJRDBnZEd3Z0ppQXdlR1ptTzF4dVhHNGdJQ0FnTHk4Z1lIUnBiV1ZmYldsa1lGeHVJQ0FnSUhaaGNpQjBiV2dnUFNBb2JYTmxZM01nTHlBd2VERXdNREF3TURBd01DQXFJREV3TURBd0tTQW1JREI0Wm1abVptWm1aanRjYmlBZ0lDQmlXMmtySzEwZ1BTQjBiV2dnUGo0K0lEZ2dKaUF3ZUdabU8xeHVJQ0FnSUdKYmFTc3JYU0E5SUhSdGFDQW1JREI0Wm1ZN1hHNWNiaUFnSUNBdkx5QmdkR2x0WlY5b2FXZG9YMkZ1WkY5MlpYSnphVzl1WUZ4dUlDQWdJR0piYVNzclhTQTlJSFJ0YUNBK1BqNGdNalFnSmlBd2VHWWdmQ0F3ZURFd095QXZMeUJwYm1Oc2RXUmxJSFpsY25OcGIyNWNiaUFnSUNCaVcya3JLMTBnUFNCMGJXZ2dQajQrSURFMklDWWdNSGhtWmp0Y2JseHVJQ0FnSUM4dklHQmpiRzlqYTE5elpYRmZhR2xmWVc1a1gzSmxjMlZ5ZG1Wa1lDQW9VR1Z5SURRdU1pNHlJQzBnYVc1amJIVmtaU0IyWVhKcFlXNTBLVnh1SUNBZ0lHSmJhU3NyWFNBOUlHTnNiMk5yYzJWeElENCtQaUE0SUh3Z01IZzRNRHRjYmx4dUlDQWdJQzh2SUdCamJHOWphMTl6WlhGZmJHOTNZRnh1SUNBZ0lHSmJhU3NyWFNBOUlHTnNiMk5yYzJWeElDWWdNSGhtWmp0Y2JseHVJQ0FnSUM4dklHQnViMlJsWUZ4dUlDQWdJSFpoY2lCdWIyUmxJRDBnYjNCMGFXOXVjeTV1YjJSbElIeDhJRjl1YjJSbFNXUTdYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2JpQTlJREE3SUc0Z1BDQTJPeUJ1S3lzcElIdGNiaUFnSUNBZ0lHSmJhU0FySUc1ZElEMGdibTlrWlZ0dVhUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWW5WbUlEOGdZblZtSURvZ2RXNXdZWEp6WlNoaUtUdGNiaUFnZlZ4dVhHNGdJQzh2SUNvcVlIWTBLQ2xnSUMwZ1IyVnVaWEpoZEdVZ2NtRnVaRzl0SUZWVlNVUXFLbHh1WEc0Z0lDOHZJRk5sWlNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlluSnZiMlpoTDI1dlpHVXRkWFZwWkNCbWIzSWdRVkJKSUdSbGRHRnBiSE5jYmlBZ1puVnVZM1JwYjI0Z2RqUW9iM0IwYVc5dWN5d2dZblZtTENCdlptWnpaWFFwSUh0Y2JpQWdJQ0F2THlCRVpYQnlaV05oZEdWa0lDMGdKMlp2Y20xaGRDY2dZWEpuZFcxbGJuUXNJR0Z6SUhOMWNIQnZjblJsWkNCcGJpQjJNUzR5WEc0Z0lDQWdkbUZ5SUdrZ1BTQmlkV1lnSmlZZ2IyWm1jMlYwSUh4OElEQTdYRzVjYmlBZ0lDQnBaaUFvZEhsd1pXOW1LRzl3ZEdsdmJuTXBJRDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCaWRXWWdQU0J2Y0hScGIyNXpJRDA5SUNkaWFXNWhjbmtuSUQ4Z2JtVjNJRUoxWm1abGNrTnNZWE56S0RFMktTQTZJRzUxYkd3N1hHNGdJQ0FnSUNCdmNIUnBiMjV6SUQwZ2JuVnNiRHRjYmlBZ0lDQjlYRzRnSUNBZ2IzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5NZ2ZId2dlMzA3WEc1Y2JpQWdJQ0IyWVhJZ2NtNWtjeUE5SUc5d2RHbHZibk11Y21GdVpHOXRJSHg4SUNodmNIUnBiMjV6TG5KdVp5QjhmQ0JmY201bktTZ3BPMXh1WEc0Z0lDQWdMeThnVUdWeUlEUXVOQ3dnYzJWMElHSnBkSE1nWm05eUlIWmxjbk5wYjI0Z1lXNWtJR0JqYkc5amExOXpaWEZmYUdsZllXNWtYM0psYzJWeWRtVmtZRnh1SUNBZ0lISnVaSE5iTmwwZ1BTQW9jbTVrYzFzMlhTQW1JREI0TUdZcElId2dNSGcwTUR0Y2JpQWdJQ0J5Ym1Seld6aGRJRDBnS0hKdVpITmJPRjBnSmlBd2VETm1LU0I4SURCNE9EQTdYRzVjYmlBZ0lDQXZMeUJEYjNCNUlHSjVkR1Z6SUhSdklHSjFabVpsY2l3Z2FXWWdjSEp2ZG1sa1pXUmNiaUFnSUNCcFppQW9ZblZtS1NCN1hHNGdJQ0FnSUNCbWIzSWdLSFpoY2lCcGFTQTlJREE3SUdscElEd2dNVFk3SUdscEt5c3BJSHRjYmlBZ0lDQWdJQ0FnWW5WbVcya2dLeUJwYVYwZ1BTQnlibVJ6VzJscFhUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWW5WbUlIeDhJSFZ1Y0dGeWMyVW9jbTVrY3lrN1hHNGdJSDFjYmx4dUlDQXZMeUJGZUhCdmNuUWdjSFZpYkdsaklFRlFTVnh1SUNCMllYSWdkWFZwWkNBOUlIWTBPMXh1SUNCMWRXbGtMbll4SUQwZ2RqRTdYRzRnSUhWMWFXUXVkalFnUFNCMk5EdGNiaUFnZFhWcFpDNXdZWEp6WlNBOUlIQmhjbk5sTzF4dUlDQjFkV2xrTG5WdWNHRnljMlVnUFNCMWJuQmhjbk5sTzF4dUlDQjFkV2xrTGtKMVptWmxja05zWVhOeklEMGdRblZtWm1WeVEyeGhjM003WEc1Y2JpQWdhV1lnS0hSNWNHVnZaaWh0YjJSMWJHVXBJQ0U5SUNkMWJtUmxabWx1WldRbklDWW1JRzF2WkhWc1pTNWxlSEJ2Y25SektTQjdYRzRnSUNBZ0x5OGdVSFZpYkdsemFDQmhjeUJ1YjJSbExtcHpJRzF2WkhWc1pWeHVJQ0FnSUcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnZFhWcFpEdGNiaUFnZlNCbGJITmxJQ0JwWmlBb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1NCN1hHNGdJQ0FnTHk4Z1VIVmliR2x6YUNCaGN5QkJUVVFnYlc5a2RXeGxYRzRnSUNBZ1pHVm1hVzVsS0daMWJtTjBhVzl1S0NrZ2UzSmxkSFZ5YmlCMWRXbGtPMzBwTzF4dUlGeHVYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdMeThnVUhWaWJHbHphQ0JoY3lCbmJHOWlZV3dnS0dsdUlHSnliM2R6WlhKektWeHVJQ0FnSUhaaGNpQmZjSEpsZG1sdmRYTlNiMjkwSUQwZ1gyZHNiMkpoYkM1MWRXbGtPMXh1WEc0Z0lDQWdMeThnS2lwZ2JtOURiMjVtYkdsamRDZ3BZQ0F0SUNoaWNtOTNjMlZ5SUc5dWJIa3BJSFJ2SUhKbGMyVjBJR2RzYjJKaGJDQW5kWFZwWkNjZ2RtRnlLaXBjYmlBZ0lDQjFkV2xrTG01dlEyOXVabXhwWTNRZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJRjluYkc5aVlXd3VkWFZwWkNBOUlGOXdjbVYyYVc5MWMxSnZiM1E3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkWFZwWkR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnWDJkc2IySmhiQzUxZFdsa0lEMGdkWFZwWkR0Y2JpQWdmVnh1ZlNrdVkyRnNiQ2gwYUdsektUdGNibHh1WEc1Y2JpOHFLaW9xS2lvcUtpb3FLaW9xS2lvcUtseHVJQ29xSUZkRlFsQkJRMHNnUms5UFZFVlNYRzRnS2lvZ0xpOStMMjV2WkdVdGRYVnBaQzkxZFdsa0xtcHpYRzRnS2lvZ2JXOWtkV3hsSUdsa0lEMGdOakpjYmlBcUtpQnRiMlIxYkdVZ1kyaDFibXR6SUQwZ01GeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dVkyOXVjM1FnVTFWQ1UwTlNTVkJVU1U5T1UxOUNXVjlRVWs5UVJWSlVXVjlRVWs5VVQxUlpVRVVnUFNCN1hHNGdJR0ZrWkNoN2NISnZjR1Z5ZEhrc0lITjFZbk5qY21sd2RHbHZibjBwSUh0Y2JpQWdJQ0JzWlhRZ1kzVnljbVZ1ZEZOMVluTmpjbWx3ZEdsdmJuTWdQU0IwYUdsekxuTjFZbk5qY21sd2RHbHZibk5iY0hKdmNHVnlkSGxkTzF4dUlDQWdJRnh1SUNBZ0lHbG1JQ2doWTNWeWNtVnVkRk4xWW5OamNtbHdkR2x2Ym5NZ2ZId2dUMkpxWldOMExtdGxlWE1vWTNWeWNtVnVkRk4xWW5OamNtbHdkR2x2Ym5NcExteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXpkV0p6WTNKcGNIUnBiMjV6VzNCeWIzQmxjblI1WFNBOUlIdDlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFJSFZ6WldsdVp5QnZZbXBsWTNRZ2JHbHJaU0JoSUhObGRDQm9aWEpsSUNvdlhHNGdJQ0FnZEdocGN5NXpkV0p6WTNKcGNIUnBiMjV6VzNCeWIzQmxjblI1WFZ0emRXSnpZM0pwY0hScGIyNHVkWFZwWkYwZ1BTQjBjblZsTzF4dUlDQjlMRnh1WEc0Z0lISmxiVzkyWlNoN2NISnZjR1Z5ZEhrc0lITjFZbk5qY21sd2RHbHZibjBwSUh0Y2JpQWdJQ0JzWlhRZ1kzVnljbVZ1ZEZOMVluTmpjbWx3ZEdsdmJuTWdQU0IwYUdsekxuTjFZbk5qY21sd2RHbHZibk5iY0hKdmNHVnlkSGxkTzF4dVhHNGdJQ0FnYVdZZ0tDRmpkWEp5Wlc1MFUzVmljMk55YVhCMGFXOXVjeUI4ZkNCUFltcGxZM1F1YTJWNWN5aGpkWEp5Wlc1MFUzVmljMk55YVhCMGFXOXVjeWt1YkdWdVozUm9JRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQjBhR2x6TG5OMVluTmpjbWx3ZEdsdmJuTmJjSEp2Y0dWeWRIbGRJRDBnZTMwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWkdWc1pYUmxJSFJvYVhNdWMzVmljMk55YVhCMGFXOXVjMXR3Y205d1pYSjBlVjFiYzNWaWMyTnlhWEIwYVc5dUxuVjFhV1JkTzF4dUlDQjlYRzVjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDZ3BJRDArSUh0Y2JpQWdiR1YwSUhOMVluTmpjbWx3ZEdsdmJuTkNlVkJ5YjNCbGNuUjVJRDBnVDJKcVpXTjBMbU55WldGMFpTaFRWVUpUUTFKSlVGUkpUMDVUWDBKWlgxQlNUMUJGVWxSWlgxQlNUMVJQVkZsUVJTazdYRzVjYmlBZ2MzVmljMk55YVhCMGFXOXVjMEo1VUhKdmNHVnlkSGt1YzNWaWMyTnlhWEIwYVc5dWN5QTlJSHQ5TzF4dVhHNGdJSEpsZEhWeWJpQnpkV0p6WTNKcGNIUnBiMjV6UW5sUWNtOXdaWEowZVR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0I3SUZOVlFsTkRVa2xRVkVsUFRsTmZRbGxmVUZKUFVFVlNWRmxmVUZKUFZFOVVXVkJGSUgwN1hHNWNibHh1WEc0dktpb2dWMFZDVUVGRFN5QkdUMDlVUlZJZ0tpcGNiaUFxS2lBdUwycGhkbUZ6WTNKcGNIUXZjM1ZpYzJOeWFYQjBhVzl1YzBKNVVISnZjR1Z5ZEhrdWFuTmNiaUFxS2k4aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JpOHFJSE5wYm1kc1pYUnZiaUJ2WW1wbFkzUWdkWE5sWkNCMGJ5Qm9iMnhrSUhOMVluTmpjbWx3ZEdsdmJpQnZZbXBsWTNSeklHSjVJSFJvWldseUlGVlZTVVFnS2k5Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UzMDdYRzVjYmx4dVhHNHZLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSWdLaXBjYmlBcUtpQXVMMnBoZG1GelkzSnBjSFF2YzNWaWMyTnlhWEIwYVc5dWMwSjVWVlZKUkM1cWMxeHVJQ29xTHlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0h0emRXSnpZM0pwY0hScGIyNVZWVWxFTENCemRXSnpZM0pwY0hScGIyNXpRbmxWVlVsRUxDQnpkV0p6WTNKcGNIUnBiMjV6UW5sUWNtOXdaWEowZVgwcElEMCtJSHRjYmlBZ2JHVjBJSE4xWW5OamNtbHdkR2x2YmlBOUlITjFZbk5qY21sd2RHbHZibk5DZVZWVlNVUmJjM1ZpYzJOeWFYQjBhVzl1VlZWSlJGMDdYRzVjYmlBZ2FXWWdLSE4xWW5OamNtbHdkR2x2YmlrZ2UxeHVJQ0FnSUM4cUlISmxiVzkyWlNCMGFHVWdjM1ZpYzJOeWFYQjBhVzl1SUdaeWIyMGdkR2hsSUhOMVluTmpjbWx3ZEdsdmJuTkNlVlZWU1VRZ2IySnFaV04wSUNvdlhHNGdJQ0FnWkdWc1pYUmxJSE4xWW5OamNtbHdkR2x2Ym5OQ2VWVlZTVVJiYzNWaWMyTnlhWEIwYVc5dVZWVkpSRjA3WEc1Y2JpQWdJQ0F2S2lCeVpXMXZkbVVnY21WbVpYSmxibU5sY3lCMGJ5QjBhR1VnYzNWaWMyTnlhWEIwYVc5dUlHWnliMjBnWldGamFDQnZaaUIwYUdVZ2MzVmljMk55YVdKbFpDQndjbTl3WlhKMGFXVnpJQ292WEc0Z0lDQWdjM1ZpYzJOeWFYQjBhVzl1TG5CeWIzQmxjblJwWlhNdVptOXlSV0ZqYUNod2NtOXdaWEowZVNBOVBpQjdYRzRnSUNBZ0lDQnpkV0p6WTNKcGNIUnBiMjV6UW5sUWNtOXdaWEowZVM1eVpXMXZkbVVvZTNCeWIzQmxjblI1TENCemRXSnpZM0pwY0hScGIyNTlLVHRjYmlBZ0lDQjlLVHRjYmlBZ2ZWeHVmVHRjYmx4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJQzR2YW1GMllYTmpjbWx3ZEM5MWJuTjFZbk5qY21saVpTNXFjMXh1SUNvcUx5SmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oYXNoLXN1YnNjcmliZXIvYnVuZGxlLmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2RlcGVuZGVuY2llcy9za2VsZXRvbi9jc3Mvbm9ybWFsaXplLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9kZXBlbmRlbmNpZXMvc2tlbGV0b24vY3NzL3NrZWxldG9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9jc3MvbWFuZGVsYnJvdC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vY3NzL2hlYWRlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==
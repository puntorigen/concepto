(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.npmPackageES6Concepto = factory());
}(this, (function () {

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _addToUnscopables = function () { /* empty */ };

	var _addToUnscopables$1 = /*#__PURE__*/Object.freeze({
		default: _addToUnscopables,
		__moduleExports: _addToUnscopables
	});

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	var _iterStep$1 = /*#__PURE__*/Object.freeze({
		default: _iterStep,
		__moduleExports: _iterStep
	});

	var _iterators = {};

	var _iterators$1 = /*#__PURE__*/Object.freeze({
		default: _iterators,
		__moduleExports: _iterators
	});

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var _cof$1 = /*#__PURE__*/Object.freeze({
		default: _cof,
		__moduleExports: _cof
	});

	var cof = ( _cof$1 && _cof ) || _cof$1;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

	var _iobject$1 = /*#__PURE__*/Object.freeze({
		default: _iobject,
		__moduleExports: _iobject
	});

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	var _defined$1 = /*#__PURE__*/Object.freeze({
		default: _defined,
		__moduleExports: _defined
	});

	var IObject = ( _iobject$1 && _iobject ) || _iobject$1;

	var defined = ( _defined$1 && _defined ) || _defined$1;

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return IObject(defined(it));
	};

	var _toIobject$1 = /*#__PURE__*/Object.freeze({
		default: _toIobject,
		__moduleExports: _toIobject
	});

	var _library = true;

	var _library$1 = /*#__PURE__*/Object.freeze({
		default: _library,
		__moduleExports: _library
	});

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _global$1 = /*#__PURE__*/Object.freeze({
		default: _global,
		__moduleExports: _global
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.5.5' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _core$1 = /*#__PURE__*/Object.freeze({
		default: _core,
		__moduleExports: _core,
		version: _core_1
	});

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	var _aFunction$1 = /*#__PURE__*/Object.freeze({
		default: _aFunction,
		__moduleExports: _aFunction
	});

	var aFunction = ( _aFunction$1 && _aFunction ) || _aFunction$1;

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
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

	var _ctx$1 = /*#__PURE__*/Object.freeze({
		default: _ctx,
		__moduleExports: _ctx
	});

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _isObject$1 = /*#__PURE__*/Object.freeze({
		default: _isObject,
		__moduleExports: _isObject
	});

	var isObject = ( _isObject$1 && _isObject ) || _isObject$1;

	var _anObject = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _anObject$1 = /*#__PURE__*/Object.freeze({
		default: _anObject,
		__moduleExports: _anObject
	});

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	var _fails$1 = /*#__PURE__*/Object.freeze({
		default: _fails,
		__moduleExports: _fails
	});

	var require$$1 = ( _fails$1 && _fails ) || _fails$1;

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !require$$1(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var _descriptors$1 = /*#__PURE__*/Object.freeze({
		default: _descriptors,
		__moduleExports: _descriptors
	});

	var global$1 = ( _global$1 && _global ) || _global$1;

	var document$1 = global$1.document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document$1) && isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _domCreate$1 = /*#__PURE__*/Object.freeze({
		default: _domCreate,
		__moduleExports: _domCreate
	});

	var require$$0 = ( _descriptors$1 && _descriptors ) || _descriptors$1;

	var require$$2 = ( _domCreate$1 && _domCreate ) || _domCreate$1;

	var _ie8DomDefine = !require$$0 && !require$$1(function () {
	  return Object.defineProperty(require$$2('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	var _ie8DomDefine$1 = /*#__PURE__*/Object.freeze({
		default: _ie8DomDefine,
		__moduleExports: _ie8DomDefine
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var _toPrimitive$1 = /*#__PURE__*/Object.freeze({
		default: _toPrimitive,
		__moduleExports: _toPrimitive
	});

	var anObject = ( _anObject$1 && _anObject ) || _anObject$1;

	var IE8_DOM_DEFINE = ( _ie8DomDefine$1 && _ie8DomDefine ) || _ie8DomDefine$1;

	var toPrimitive = ( _toPrimitive$1 && _toPrimitive ) || _toPrimitive$1;

	var dP = Object.defineProperty;

	var f = require$$0 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

	var _objectDp = {
		f: f
	};

	var _objectDp$1 = /*#__PURE__*/Object.freeze({
		default: _objectDp,
		__moduleExports: _objectDp,
		f: f
	});

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _propertyDesc$1 = /*#__PURE__*/Object.freeze({
		default: _propertyDesc,
		__moduleExports: _propertyDesc
	});

	var dP$1 = ( _objectDp$1 && _objectDp ) || _objectDp$1;

	var descriptor = ( _propertyDesc$1 && _propertyDesc ) || _propertyDesc$1;

	var _hide = require$$0 ? function (object, key, value) {
	  return dP$1.f(object, key, descriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var _hide$1 = /*#__PURE__*/Object.freeze({
		default: _hide,
		__moduleExports: _hide
	});

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var _has$1 = /*#__PURE__*/Object.freeze({
		default: _has,
		__moduleExports: _has
	});

	var core = ( _core$1 && _core ) || _core$1;

	var require$$0$1 = ( _ctx$1 && _ctx ) || _ctx$1;

	var require$$0$2 = ( _hide$1 && _hide ) || _hide$1;

	var has = ( _has$1 && _has ) || _has$1;

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
	  var target = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] : (global$1[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? require$$0$1(out, global$1)
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
	    })(out) : IS_PROTO && typeof out == 'function' ? require$$0$1(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) require$$0$2(expProto, key, out);
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
	var _export = $export;

	var _export$1 = /*#__PURE__*/Object.freeze({
		default: _export,
		__moduleExports: _export
	});

	var _redefine = require$$0$2;

	var _redefine$1 = /*#__PURE__*/Object.freeze({
		default: _redefine,
		__moduleExports: _redefine
	});

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	var _toInteger$1 = /*#__PURE__*/Object.freeze({
		default: _toInteger,
		__moduleExports: _toInteger
	});

	var toInteger = ( _toInteger$1 && _toInteger ) || _toInteger$1;

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var _toLength$1 = /*#__PURE__*/Object.freeze({
		default: _toLength,
		__moduleExports: _toLength
	});

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	var _toAbsoluteIndex$1 = /*#__PURE__*/Object.freeze({
		default: _toAbsoluteIndex,
		__moduleExports: _toAbsoluteIndex
	});

	var toIObject = ( _toIobject$1 && _toIobject ) || _toIobject$1;

	var toLength = ( _toLength$1 && _toLength ) || _toLength$1;

	var toAbsoluteIndex = ( _toAbsoluteIndex$1 && _toAbsoluteIndex ) || _toAbsoluteIndex$1;

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
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

	var _arrayIncludes$1 = /*#__PURE__*/Object.freeze({
		default: _arrayIncludes,
		__moduleExports: _arrayIncludes
	});

	var SHARED = '__core-js_shared__';
	var store = global$1[SHARED] || (global$1[SHARED] = {});
	var _shared = function (key) {
	  return store[key] || (store[key] = {});
	};

	var _shared$1 = /*#__PURE__*/Object.freeze({
		default: _shared,
		__moduleExports: _shared
	});

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _uid$1 = /*#__PURE__*/Object.freeze({
		default: _uid,
		__moduleExports: _uid
	});

	var require$$0$3 = ( _shared$1 && _shared ) || _shared$1;

	var uid = ( _uid$1 && _uid ) || _uid$1;

	var shared = require$$0$3('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};

	var _sharedKey$1 = /*#__PURE__*/Object.freeze({
		default: _sharedKey,
		__moduleExports: _sharedKey
	});

	var require$$0$4 = ( _arrayIncludes$1 && _arrayIncludes ) || _arrayIncludes$1;

	var require$$1$1 = ( _sharedKey$1 && _sharedKey ) || _sharedKey$1;

	var arrayIndexOf = require$$0$4(false);
	var IE_PROTO = require$$1$1('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
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

	var _objectKeysInternal$1 = /*#__PURE__*/Object.freeze({
		default: _objectKeysInternal,
		__moduleExports: _objectKeysInternal
	});

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	var _enumBugKeys$1 = /*#__PURE__*/Object.freeze({
		default: _enumBugKeys,
		__moduleExports: _enumBugKeys
	});

	var $keys = ( _objectKeysInternal$1 && _objectKeysInternal ) || _objectKeysInternal$1;

	var require$$0$5 = ( _enumBugKeys$1 && _enumBugKeys ) || _enumBugKeys$1;

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return $keys(O, require$$0$5);
	};

	var _objectKeys$1 = /*#__PURE__*/Object.freeze({
		default: _objectKeys,
		__moduleExports: _objectKeys
	});

	var getKeys = ( _objectKeys$1 && _objectKeys ) || _objectKeys$1;

	var _objectDps = require$$0 ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP$1.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var _objectDps$1 = /*#__PURE__*/Object.freeze({
		default: _objectDps,
		__moduleExports: _objectDps
	});

	var document$2 = global$1.document;
	var _html = document$2 && document$2.documentElement;

	var _html$1 = /*#__PURE__*/Object.freeze({
		default: _html,
		__moduleExports: _html
	});

	var dPs = ( _objectDps$1 && _objectDps ) || _objectDps$1;

	var require$$2$1 = ( _html$1 && _html ) || _html$1;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = require$$1$1('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = require$$2('iframe');
	  var i = require$$0$5.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  require$$2$1.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][require$$0$5[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

	var _objectCreate$1 = /*#__PURE__*/Object.freeze({
		default: _objectCreate,
		__moduleExports: _objectCreate
	});

	var _wks = createCommonjsModule(function (module) {
	var store = require$$0$3('wks');

	var Symbol = global$1.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var _wks$1 = /*#__PURE__*/Object.freeze({
		default: _wks,
		__moduleExports: _wks
	});

	var require$$1$2 = ( _wks$1 && _wks ) || _wks$1;

	var def = dP$1.f;

	var TAG = require$$1$2('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var _setToStringTag$1 = /*#__PURE__*/Object.freeze({
		default: _setToStringTag,
		__moduleExports: _setToStringTag
	});

	var create = ( _objectCreate$1 && _objectCreate ) || _objectCreate$1;

	var setToStringTag = ( _setToStringTag$1 && _setToStringTag ) || _setToStringTag$1;

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	require$$0$2(IteratorPrototype, require$$1$2('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

	var _iterCreate$1 = /*#__PURE__*/Object.freeze({
		default: _iterCreate,
		__moduleExports: _iterCreate
	});

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(defined(it));
	};

	var _toObject$1 = /*#__PURE__*/Object.freeze({
		default: _toObject,
		__moduleExports: _toObject
	});

	var toObject = ( _toObject$1 && _toObject ) || _toObject$1;

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = require$$1$1('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	var _objectGpo$1 = /*#__PURE__*/Object.freeze({
		default: _objectGpo,
		__moduleExports: _objectGpo
	});

	var LIBRARY = ( _library$1 && _library ) || _library$1;

	var $export$1 = ( _export$1 && _export ) || _export$1;

	var redefine = ( _redefine$1 && _redefine ) || _redefine$1;

	var Iterators = ( _iterators$1 && _iterators ) || _iterators$1;

	var $iterCreate = ( _iterCreate$1 && _iterCreate ) || _iterCreate$1;

	var getPrototypeOf = ( _objectGpo$1 && _objectGpo ) || _objectGpo$1;

	var ITERATOR = require$$1$2('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
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
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') require$$0$2(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    require$$0$2(proto, ITERATOR, $default);
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
	    } else $export$1($export$1.P + $export$1.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	var _iterDefine$1 = /*#__PURE__*/Object.freeze({
		default: _iterDefine,
		__moduleExports: _iterDefine
	});

	var addToUnscopables = ( _addToUnscopables$1 && _addToUnscopables ) || _addToUnscopables$1;

	var step = ( _iterStep$1 && _iterStep ) || _iterStep$1;

	var require$$0$6 = ( _iterDefine$1 && _iterDefine ) || _iterDefine$1;

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = require$$0$6(Array, 'Array', function (iterated, kind) {
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

	var TO_STRING_TAG = require$$1$2('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global$1[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) require$$0$2(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
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

	var _stringAt$1 = /*#__PURE__*/Object.freeze({
		default: _stringAt,
		__moduleExports: _stringAt
	});

	var require$$0$7 = ( _stringAt$1 && _stringAt ) || _stringAt$1;

	var $at = require$$0$7(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	require$$0$6(String, 'String', function (iterated) {
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

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$1 = require$$1$2('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	var _classof$1 = /*#__PURE__*/Object.freeze({
		default: _classof,
		__moduleExports: _classof
	});

	var classof = ( _classof$1 && _classof ) || _classof$1;

	var ITERATOR$1 = require$$1$2('iterator');

	var core_getIteratorMethod = core.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$1]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

	var core_getIteratorMethod$1 = /*#__PURE__*/Object.freeze({
		default: core_getIteratorMethod,
		__moduleExports: core_getIteratorMethod
	});

	var getIterFn = ( core_getIteratorMethod$1 && core_getIteratorMethod ) || core_getIteratorMethod$1;

	var core_getIterator = core.getIterator = function (it) {
	  var iterFn = getIterFn(it);
	  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

	var core_getIterator$1 = /*#__PURE__*/Object.freeze({
		default: core_getIterator,
		__moduleExports: core_getIterator
	});

	var require$$2$2 = ( core_getIterator$1 && core_getIterator ) || core_getIterator$1;

	var getIterator = require$$2$2;

	var getIterator$1 = /*#__PURE__*/Object.freeze({
		default: getIterator,
		__moduleExports: getIterator
	});

	var require$$0$8 = ( getIterator$1 && getIterator ) || getIterator$1;

	var getIterator$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$8, __esModule: true };
	});

	var _getIterator = unwrapExports(getIterator$2);

	// most Object methods by ES6 should accept primitives



	var _objectSap = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export$1($export$1.S + $export$1.F * require$$1(function () { fn(1); }), 'Object', exp);
	};

	var _objectSap$1 = /*#__PURE__*/Object.freeze({
		default: _objectSap,
		__moduleExports: _objectSap
	});

	var require$$0$9 = ( _objectSap$1 && _objectSap ) || _objectSap$1;

	// 19.1.2.14 Object.keys(O)



	require$$0$9('keys', function () {
	  return function keys(it) {
	    return getKeys(toObject(it));
	  };
	});

	var keys = core.Object.keys;

	var keys$1 = /*#__PURE__*/Object.freeze({
		default: keys,
		__moduleExports: keys
	});

	var require$$0$10 = ( keys$1 && keys ) || keys$1;

	var keys$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$10, __esModule: true };
	});

	var _Object$keys = unwrapExports(keys$2);

	var runtime = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	!(function(global) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = 'object' === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);
	});

	var runtime$1 = /*#__PURE__*/Object.freeze({
		default: runtime,
		__moduleExports: runtime
	});

	var require$$0$11 = ( runtime$1 && runtime ) || runtime$1;

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() { return this })() || Function("return this")();

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	var runtimeModule = require$$0$11;

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	var runtimeModule$1 = /*#__PURE__*/Object.freeze({
		default: runtimeModule,
		__moduleExports: runtimeModule
	});

	var require$$0$12 = ( runtimeModule$1 && runtimeModule ) || runtimeModule$1;

	var regenerator = require$$0$12;

	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export$1($export$1.S + $export$1.F * !require$$0, 'Object', { defineProperty: dP$1.f });

	var $Object = core.Object;
	var defineProperty = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};

	var defineProperty$1 = /*#__PURE__*/Object.freeze({
		default: defineProperty,
		__moduleExports: defineProperty
	});

	var require$$0$13 = ( defineProperty$1 && defineProperty ) || defineProperty$1;

	var defineProperty$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$13, __esModule: true };
	});

	var defineProperty$3 = unwrapExports(defineProperty$2);

	var defineProperty$4 = /*#__PURE__*/Object.freeze({
		default: defineProperty$3,
		__moduleExports: defineProperty$2
	});

	var _defineProperty = ( defineProperty$4 && defineProperty$3 ) || defineProperty$4;

	var defineProperty$5 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};
	});

	var _defineProperty$1 = unwrapExports(defineProperty$5);

	var _anInstance = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

	var _anInstance$1 = /*#__PURE__*/Object.freeze({
		default: _anInstance,
		__moduleExports: _anInstance
	});

	// call something on iterator step with safe closing on error

	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

	var _iterCall$1 = /*#__PURE__*/Object.freeze({
		default: _iterCall,
		__moduleExports: _iterCall
	});

	// check on default Array iterator

	var ITERATOR$2 = require$$1$2('iterator');
	var ArrayProto = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR$2] === it);
	};

	var _isArrayIter$1 = /*#__PURE__*/Object.freeze({
		default: _isArrayIter,
		__moduleExports: _isArrayIter
	});

	var call = ( _iterCall$1 && _iterCall ) || _iterCall$1;

	var isArrayIter = ( _isArrayIter$1 && _isArrayIter ) || _isArrayIter$1;

	var _forOf = createCommonjsModule(function (module) {
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
	  var f = require$$0$1(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = call(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;
	});

	var _forOf$1 = /*#__PURE__*/Object.freeze({
		default: _forOf,
		__moduleExports: _forOf
	});

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)


	var SPECIES = require$$1$2('species');
	var _speciesConstructor = function (O, D) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

	var _speciesConstructor$1 = /*#__PURE__*/Object.freeze({
		default: _speciesConstructor,
		__moduleExports: _speciesConstructor
	});

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	var _invoke = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};

	var _invoke$1 = /*#__PURE__*/Object.freeze({
		default: _invoke,
		__moduleExports: _invoke
	});

	var invoke = ( _invoke$1 && _invoke ) || _invoke$1;

	var process = global$1.process;
	var setTask = global$1.setImmediate;
	var clearTask = global$1.clearImmediate;
	var MessageChannel = global$1.MessageChannel;
	var Dispatch = global$1.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (cof(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(require$$0$1(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(require$$0$1(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = require$$0$1(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global$1.addEventListener && typeof postMessage == 'function' && !global$1.importScripts) {
	    defer = function (id) {
	      global$1.postMessage(id + '', '*');
	    };
	    global$1.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in require$$2('script')) {
	    defer = function (id) {
	      require$$2$1.appendChild(require$$2('script'))[ONREADYSTATECHANGE] = function () {
	        require$$2$1.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(require$$0$1(run, id, 1), 0);
	    };
	  }
	}
	var _task = {
	  set: setTask,
	  clear: clearTask
	};
	var _task_1 = _task.set;
	var _task_2 = _task.clear;

	var _task$1 = /*#__PURE__*/Object.freeze({
		default: _task,
		__moduleExports: _task,
		set: _task_1,
		clear: _task_2
	});

	var require$$0$14 = ( _task$1 && _task ) || _task$1;

	var macrotask = require$$0$14.set;
	var Observer = global$1.MutationObserver || global$1.WebKitMutationObserver;
	var process$1 = global$1.process;
	var Promise$1 = global$1.Promise;
	var isNode = cof(process$1) == 'process';

	var _microtask = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process$1.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process$1.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(global$1.navigator && global$1.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise$1 && Promise$1.resolve) {
	    var promise = Promise$1.resolve();
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global$1, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};

	var _microtask$1 = /*#__PURE__*/Object.freeze({
		default: _microtask,
		__moduleExports: _microtask
	});

	// 25.4.1.5 NewPromiseCapability(C)


	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject = aFunction(reject);
	}

	var f$1 = function (C) {
	  return new PromiseCapability(C);
	};

	var _newPromiseCapability = {
		f: f$1
	};

	var _newPromiseCapability$1 = /*#__PURE__*/Object.freeze({
		default: _newPromiseCapability,
		__moduleExports: _newPromiseCapability,
		f: f$1
	});

	var _perform = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};

	var _perform$1 = /*#__PURE__*/Object.freeze({
		default: _perform,
		__moduleExports: _perform
	});

	var newPromiseCapability = ( _newPromiseCapability$1 && _newPromiseCapability ) || _newPromiseCapability$1;

	var _promiseResolve = function (C, x) {
	  anObject(C);
	  if (isObject(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var _promiseResolve$1 = /*#__PURE__*/Object.freeze({
		default: _promiseResolve,
		__moduleExports: _promiseResolve
	});

	var _redefineAll = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];
	    else require$$0$2(target, key, src[key]);
	  } return target;
	};

	var _redefineAll$1 = /*#__PURE__*/Object.freeze({
		default: _redefineAll,
		__moduleExports: _redefineAll
	});

	var SPECIES$1 = require$$1$2('species');

	var _setSpecies = function (KEY) {
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global$1[KEY];
	  if (require$$0 && C && !C[SPECIES$1]) dP$1.f(C, SPECIES$1, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};

	var _setSpecies$1 = /*#__PURE__*/Object.freeze({
		default: _setSpecies,
		__moduleExports: _setSpecies
	});

	var ITERATOR$3 = require$$1$2('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR$3]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	} catch (e) { /* empty */ }

	var _iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR$3]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR$3] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};

	var _iterDetect$1 = /*#__PURE__*/Object.freeze({
		default: _iterDetect,
		__moduleExports: _iterDetect
	});

	var anInstance = ( _anInstance$1 && _anInstance ) || _anInstance$1;

	var forOf = ( _forOf$1 && _forOf ) || _forOf$1;

	var speciesConstructor = ( _speciesConstructor$1 && _speciesConstructor ) || _speciesConstructor$1;

	var require$$1$3 = ( _microtask$1 && _microtask ) || _microtask$1;

	var perform = ( _perform$1 && _perform ) || _perform$1;

	var promiseResolve = ( _promiseResolve$1 && _promiseResolve ) || _promiseResolve$1;

	var require$$3 = ( _redefineAll$1 && _redefineAll ) || _redefineAll$1;

	var require$$5 = ( _setSpecies$1 && _setSpecies ) || _setSpecies$1;

	var require$$0$15 = ( _iterDetect$1 && _iterDetect ) || _iterDetect$1;

	var task = require$$0$14.set;
	var microtask = require$$1$3();



	var PROMISE = 'Promise';
	var TypeError$1 = global$1.TypeError;
	var process$2 = global$1.process;
	var $Promise = global$1[PROMISE];
	var isNode$1 = classof(process$2) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability$1 = newGenericPromiseCapability = newPromiseCapability.f;

	var USE_NATIVE = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[require$$1$2('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(global$1, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = perform(function () {
	        if (isNode$1) {
	          process$2.emit('unhandledRejection', value, promise);
	        } else if (handler = global$1.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = global$1.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(global$1, function () {
	    var handler;
	    if (isNode$1) {
	      process$2.emit('rejectionHandled', promise);
	    } else if (handler = global$1.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, require$$0$1($resolve, wrapper, 1), require$$0$1($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(require$$0$1($resolve, this, 1), require$$0$1($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = require$$3($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability$1(speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode$1 ? process$2.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = require$$0$1($resolve, promise, 1);
	    this.reject = require$$0$1($reject, promise, 1);
	  };
	  newPromiseCapability.f = newPromiseCapability$1 = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	$export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE, { Promise: $Promise });
	setToStringTag($Promise, PROMISE);
	require$$5(PROMISE);
	Wrapper = core[PROMISE];

	// statics
	$export$1($export$1.S + $export$1.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability$1(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export$1($export$1.S + $export$1.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
	  }
	});
	$export$1($export$1.S + $export$1.F * !(USE_NATIVE && require$$0$15(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability$1(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability$1(C);
	    var reject = capability.reject;
	    var result = perform(function () {
	      forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});

	$export$1($export$1.P + $export$1.R, 'Promise', { 'finally': function (onFinally) {
	  var C = speciesConstructor(this, core.Promise || global$1.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });

	// https://github.com/tc39/proposal-promise-try




	$export$1($export$1.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = newPromiseCapability.f(this);
	  var result = perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });

	var promise = core.Promise;

	var promise$1 = /*#__PURE__*/Object.freeze({
		default: promise,
		__moduleExports: promise
	});

	var require$$0$16 = ( promise$1 && promise ) || promise$1;

	var promise$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$16, __esModule: true };
	});

	var _Promise = unwrapExports(promise$2);

	var promise$3 = /*#__PURE__*/Object.freeze({
		default: _Promise,
		__moduleExports: promise$2
	});

	var _promise = ( promise$3 && _Promise ) || promise$3;

	var asyncToGenerator = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _promise2 = _interopRequireDefault(_promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }

	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            step("next", value);
	          }, function (err) {
	            step("throw", err);
	          });
	        }
	      }

	      return step("next");
	    });
	  };
	};
	});

	var _asyncToGenerator = unwrapExports(asyncToGenerator);

	// 19.1.2.9 Object.getPrototypeOf(O)



	require$$0$9('getPrototypeOf', function () {
	  return function getPrototypeOf$$1(it) {
	    return getPrototypeOf(toObject(it));
	  };
	});

	var getPrototypeOf$1 = core.Object.getPrototypeOf;

	var getPrototypeOf$2 = /*#__PURE__*/Object.freeze({
		default: getPrototypeOf$1,
		__moduleExports: getPrototypeOf$1
	});

	var require$$0$17 = ( getPrototypeOf$2 && getPrototypeOf$1 ) || getPrototypeOf$2;

	var getPrototypeOf$3 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$17, __esModule: true };
	});

	var _Object$getPrototypeOf = unwrapExports(getPrototypeOf$3);

	var f$2 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$2
	};

	var _objectGops$1 = /*#__PURE__*/Object.freeze({
		default: _objectGops,
		__moduleExports: _objectGops,
		f: f$2
	});

	var f$3 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$3
	};

	var _objectPie$1 = /*#__PURE__*/Object.freeze({
		default: _objectPie,
		__moduleExports: _objectPie,
		f: f$3
	});

	var gOPS = ( _objectGops$1 && _objectGops ) || _objectGops$1;

	var pIE = ( _objectPie$1 && _objectPie ) || _objectPie$1;

	// 19.1.2.1 Object.assign(target, source, ...)





	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	var _objectAssign = !$assign || require$$1(function () {
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

	var _objectAssign$1 = /*#__PURE__*/Object.freeze({
		default: _objectAssign,
		__moduleExports: _objectAssign
	});

	var require$$0$18 = ( _objectAssign$1 && _objectAssign ) || _objectAssign$1;

	// 19.1.3.1 Object.assign(target, source)


	$export$1($export$1.S + $export$1.F, 'Object', { assign: require$$0$18 });

	var assign = core.Object.assign;

	var assign$1 = /*#__PURE__*/Object.freeze({
		default: assign,
		__moduleExports: assign
	});

	var require$$0$19 = ( assign$1 && assign ) || assign$1;

	var assign$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$19, __esModule: true };
	});

	var assign$3 = unwrapExports(assign$2);

	var assign$4 = /*#__PURE__*/Object.freeze({
		default: assign$3,
		__moduleExports: assign$2
	});

	var _assign = ( assign$4 && assign$3 ) || assign$4;

	var _extends = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



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
	});

	var _extends$1 = unwrapExports(_extends);

	var classCallCheck = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var createClass = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



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
	});

	var _createClass = unwrapExports(createClass);

	var f$4 = require$$1$2;

	var _wksExt = {
		f: f$4
	};

	var _wksExt$1 = /*#__PURE__*/Object.freeze({
		default: _wksExt,
		__moduleExports: _wksExt,
		f: f$4
	});

	var wksExt = ( _wksExt$1 && _wksExt ) || _wksExt$1;

	var iterator = wksExt.f('iterator');

	var iterator$1 = /*#__PURE__*/Object.freeze({
		default: iterator,
		__moduleExports: iterator
	});

	var require$$0$20 = ( iterator$1 && iterator ) || iterator$1;

	var iterator$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$20, __esModule: true };
	});

	var iterator$3 = unwrapExports(iterator$2);

	var iterator$4 = /*#__PURE__*/Object.freeze({
		default: iterator$3,
		__moduleExports: iterator$2
	});

	var _meta = createCommonjsModule(function (module) {
	var META = uid('meta');


	var setDesc = dP$1.f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !require$$1(function () {
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
	});
	var _meta_1 = _meta.KEY;
	var _meta_2 = _meta.NEED;
	var _meta_3 = _meta.fastKey;
	var _meta_4 = _meta.getWeak;
	var _meta_5 = _meta.onFreeze;

	var _meta$1 = /*#__PURE__*/Object.freeze({
		default: _meta,
		__moduleExports: _meta,
		KEY: _meta_1,
		NEED: _meta_2,
		fastKey: _meta_3,
		getWeak: _meta_4,
		onFreeze: _meta_5
	});

	var defineProperty$6 = dP$1.f;
	var _wksDefine = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global$1.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$6($Symbol, name, { value: wksExt.f(name) });
	};

	var _wksDefine$1 = /*#__PURE__*/Object.freeze({
		default: _wksDefine,
		__moduleExports: _wksDefine
	});

	// all enumerable object keys, includes symbols



	var _enumKeys = function (it) {
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

	var _enumKeys$1 = /*#__PURE__*/Object.freeze({
		default: _enumKeys,
		__moduleExports: _enumKeys
	});

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};

	var _isArray$1 = /*#__PURE__*/Object.freeze({
		default: _isArray,
		__moduleExports: _isArray
	});

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = require$$0$5.concat('length', 'prototype');

	var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$5
	};

	var _objectGopn$1 = /*#__PURE__*/Object.freeze({
		default: _objectGopn,
		__moduleExports: _objectGopn,
		f: f$5
	});

	var require$$0$21 = ( _objectGopn$1 && _objectGopn ) || _objectGopn$1;

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

	var gOPN = require$$0$21.f;
	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	var f$6 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};

	var _objectGopnExt = {
		f: f$6
	};

	var _objectGopnExt$1 = /*#__PURE__*/Object.freeze({
		default: _objectGopnExt,
		__moduleExports: _objectGopnExt,
		f: f$6
	});

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$7 = require$$0 ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return descriptor(!pIE.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$7
	};

	var _objectGopd$1 = /*#__PURE__*/Object.freeze({
		default: _objectGopd,
		__moduleExports: _objectGopd,
		f: f$7
	});

	var require$$0$22 = ( _meta$1 && _meta ) || _meta$1;

	var require$$0$23 = ( _wksDefine$1 && _wksDefine ) || _wksDefine$1;

	var enumKeys = ( _enumKeys$1 && _enumKeys ) || _enumKeys$1;

	var isArray = ( _isArray$1 && _isArray ) || _isArray$1;

	var gOPNExt = ( _objectGopnExt$1 && _objectGopnExt ) || _objectGopnExt$1;

	var require$$1$4 = ( _objectGopd$1 && _objectGopd ) || _objectGopd$1;

	// ECMAScript 6 symbols shim





	var META = require$$0$22.KEY;



















	var gOPD$1 = require$$1$4.f;
	var dP$2 = dP$1.f;
	var gOPN$1 = gOPNExt.f;
	var $Symbol = global$1.Symbol;
	var $JSON = global$1.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE$2 = 'prototype';
	var HIDDEN = require$$1$2('_hidden');
	var TO_PRIMITIVE = require$$1$2('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = require$$0$3('symbol-registry');
	var AllSymbols = require$$0$3('symbols');
	var OPSymbols = require$$0$3('op-symbols');
	var ObjectProto$1 = Object[PROTOTYPE$2];
	var USE_NATIVE$1 = typeof $Symbol == 'function';
	var QObject = global$1.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = require$$0 && require$$1(function () {
	  return create(dP$2({}, 'a', {
	    get: function () { return dP$2(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$1(ObjectProto$1, key);
	  if (protoDesc) delete ObjectProto$1[key];
	  dP$2(it, key, D);
	  if (protoDesc && it !== ObjectProto$1) dP$2(ObjectProto$1, key, protoDesc);
	} : dP$2;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = create($Symbol[PROTOTYPE$2]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE$1 && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP$2(it, HIDDEN, descriptor(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = create(D, { enumerable: descriptor(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$2(it, key, D);
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
	var $create = function create$$1(it, P) {
	  return P === undefined ? create(it) : $defineProperties(create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto$1 && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto$1 && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD$1(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$1(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto$1;
	  var names = gOPN$1(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE$1) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto$1) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, descriptor(1, value));
	    };
	    if (require$$0 && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
	    return this._k;
	  });

	  require$$1$4.f = $getOwnPropertyDescriptor;
	  dP$1.f = $defineProperty;
	  require$$0$21.f = gOPNExt.f = $getOwnPropertyNames;
	  pIE.f = $propertyIsEnumerable;
	  gOPS.f = $getOwnPropertySymbols;

	  if (require$$0 && !LIBRARY) {
	    redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(require$$1$2(name));
	  };
	}

	$export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE$1, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)require$$1$2(es6Symbols[j++]);

	for (var wellKnownSymbols = getKeys(require$$1$2.store), k = 0; wellKnownSymbols.length > k;) require$$0$23(wellKnownSymbols[k++]);

	$export$1($export$1.S + $export$1.F * !USE_NATIVE$1, 'Symbol', {
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

	$export$1($export$1.S + $export$1.F * !USE_NATIVE$1, 'Object', {
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
	$JSON && $export$1($export$1.S + $export$1.F * (!USE_NATIVE$1 || require$$1(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || require$$0$2($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global$1.JSON, 'JSON', true);

	require$$0$23('asyncIterator');

	require$$0$23('observable');

	var symbol = core.Symbol;

	var symbol$1 = /*#__PURE__*/Object.freeze({
		default: symbol,
		__moduleExports: symbol
	});

	var require$$0$24 = ( symbol$1 && symbol ) || symbol$1;

	var symbol$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$24, __esModule: true };
	});

	var symbol$3 = unwrapExports(symbol$2);

	var symbol$4 = /*#__PURE__*/Object.freeze({
		default: symbol$3,
		__moduleExports: symbol$2
	});

	var _iterator = ( iterator$4 && iterator$3 ) || iterator$4;

	var _symbol = ( symbol$4 && symbol$3 ) || symbol$4;

	var _typeof_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _iterator2 = _interopRequireDefault(_iterator);



	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};
	});

	var _typeof = unwrapExports(_typeof_1);

	var _typeof$1 = /*#__PURE__*/Object.freeze({
		default: _typeof,
		__moduleExports: _typeof_1
	});

	var _typeof2 = ( _typeof$1 && _typeof ) || _typeof$1;

	var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};
	});

	var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = require$$0$1(Function.call, require$$1$4.f(Object.prototype, '__proto__').set, 2);
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
	var _setProto_1 = _setProto.set;
	var _setProto_2 = _setProto.check;

	var _setProto$1 = /*#__PURE__*/Object.freeze({
		default: _setProto,
		__moduleExports: _setProto,
		set: _setProto_1,
		check: _setProto_2
	});

	var require$$0$25 = ( _setProto$1 && _setProto ) || _setProto$1;

	// 19.1.3.19 Object.setPrototypeOf(O, proto)

	$export$1($export$1.S, 'Object', { setPrototypeOf: require$$0$25.set });

	var setPrototypeOf = core.Object.setPrototypeOf;

	var setPrototypeOf$1 = /*#__PURE__*/Object.freeze({
		default: setPrototypeOf,
		__moduleExports: setPrototypeOf
	});

	var require$$0$26 = ( setPrototypeOf$1 && setPrototypeOf ) || setPrototypeOf$1;

	var setPrototypeOf$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$26, __esModule: true };
	});

	var setPrototypeOf$3 = unwrapExports(setPrototypeOf$2);

	var setPrototypeOf$4 = /*#__PURE__*/Object.freeze({
		default: setPrototypeOf$3,
		__moduleExports: setPrototypeOf$2
	});

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export$1($export$1.S, 'Object', { create: create });

	var $Object$1 = core.Object;
	var create$1 = function create(P, D) {
	  return $Object$1.create(P, D);
	};

	var create$2 = /*#__PURE__*/Object.freeze({
		default: create$1,
		__moduleExports: create$1
	});

	var require$$0$27 = ( create$2 && create$1 ) || create$2;

	var create$3 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$27, __esModule: true };
	});

	var create$4 = unwrapExports(create$3);

	var create$5 = /*#__PURE__*/Object.freeze({
		default: create$4,
		__moduleExports: create$3
	});

	var _setPrototypeOf = ( setPrototypeOf$4 && setPrototypeOf$3 ) || setPrototypeOf$4;

	var _create = ( create$5 && create$4 ) || create$5;

	var inherits = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);



	var _create2 = _interopRequireDefault(_create);



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
	});

	var _inherits = unwrapExports(inherits);

	$export$1($export$1.G + $export$1.B, {
	  setImmediate: require$$0$14.set,
	  clearImmediate: require$$0$14.clear
	});

	var setImmediate = core.setImmediate;

	var setImmediate$1 = /*#__PURE__*/Object.freeze({
		default: setImmediate,
		__moduleExports: setImmediate
	});

	var require$$0$28 = ( setImmediate$1 && setImmediate ) || setImmediate$1;

	var setImmediate$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$28, __esModule: true };
	});

	unwrapExports(setImmediate$2);

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

	var $getOwnPropertyDescriptor$1 = require$$1$4.f;

	require$$0$9('getOwnPropertyDescriptor', function () {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor$1(toIObject(it), key);
	  };
	});

	var $Object$2 = core.Object;
	var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  return $Object$2.getOwnPropertyDescriptor(it, key);
	};

	var getOwnPropertyDescriptor$1 = /*#__PURE__*/Object.freeze({
		default: getOwnPropertyDescriptor,
		__moduleExports: getOwnPropertyDescriptor
	});

	var require$$0$29 = ( getOwnPropertyDescriptor$1 && getOwnPropertyDescriptor ) || getOwnPropertyDescriptor$1;

	var getOwnPropertyDescriptor$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$29, __esModule: true };
	});

	unwrapExports(getOwnPropertyDescriptor$2);

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	require$$0$9('getOwnPropertyNames', function () {
	  return gOPNExt.f;
	});

	var $Object$3 = core.Object;
	var getOwnPropertyNames = function getOwnPropertyNames(it) {
	  return $Object$3.getOwnPropertyNames(it);
	};

	var getOwnPropertyNames$1 = /*#__PURE__*/Object.freeze({
		default: getOwnPropertyNames,
		__moduleExports: getOwnPropertyNames
	});

	var require$$0$30 = ( getOwnPropertyNames$1 && getOwnPropertyNames ) || getOwnPropertyNames$1;

	var getOwnPropertyNames$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$30, __esModule: true };
	});

	unwrapExports(getOwnPropertyNames$2);

	var $JSON$1 = core.JSON || (core.JSON = { stringify: JSON.stringify });
	var stringify = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON$1.stringify.apply($JSON$1, arguments);
	};

	var stringify$1 = /*#__PURE__*/Object.freeze({
		default: stringify,
		__moduleExports: stringify
	});

	var require$$0$31 = ( stringify$1 && stringify ) || stringify$1;

	var stringify$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$31, __esModule: true };
	});

	var _JSON$stringify = unwrapExports(stringify$2);

	var ITERATOR$4 = require$$1$2('iterator');

	var core_isIterable = core.isIterable = function (it) {
	  var O = Object(it);
	  return O[ITERATOR$4] !== undefined
	    || '@@iterator' in O
	    // eslint-disable-next-line no-prototype-builtins
	    || Iterators.hasOwnProperty(classof(O));
	};

	var core_isIterable$1 = /*#__PURE__*/Object.freeze({
		default: core_isIterable,
		__moduleExports: core_isIterable
	});

	var require$$2$3 = ( core_isIterable$1 && core_isIterable ) || core_isIterable$1;

	var isIterable = require$$2$3;

	var isIterable$1 = /*#__PURE__*/Object.freeze({
		default: isIterable,
		__moduleExports: isIterable
	});

	var require$$0$32 = ( isIterable$1 && isIterable ) || isIterable$1;

	var isIterable$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$32, __esModule: true };
	});

	var isIterable$3 = unwrapExports(isIterable$2);

	var isIterable$4 = /*#__PURE__*/Object.freeze({
		default: isIterable$3,
		__moduleExports: isIterable$2
	});

	var _isIterable2 = ( isIterable$4 && isIterable$3 ) || isIterable$4;

	var slicedToArray = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _isIterable3 = _interopRequireDefault(_isIterable2);



	var _getIterator3 = _interopRequireDefault(getIterator$2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();
	});

	var _slicedToArray = unwrapExports(slicedToArray);

	var _createProperty = function (object, index, value) {
	  if (index in object) dP$1.f(object, index, descriptor(0, value));
	  else object[index] = value;
	};

	var _createProperty$1 = /*#__PURE__*/Object.freeze({
		default: _createProperty,
		__moduleExports: _createProperty
	});

	var createProperty = ( _createProperty$1 && _createProperty ) || _createProperty$1;

	$export$1($export$1.S + $export$1.F * !require$$0$15(function (iter) { }), 'Array', {
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
	    if (mapping) mapfn = require$$0$1(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
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

	var from = core.Array.from;

	var from$1 = /*#__PURE__*/Object.freeze({
		default: from,
		__moduleExports: from
	});

	var require$$0$33 = ( from$1 && from ) || from$1;

	var from$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$33, __esModule: true };
	});

	var from$3 = unwrapExports(from$2);

	var from$4 = /*#__PURE__*/Object.freeze({
		default: from$3,
		__moduleExports: from$2
	});

	var _from = ( from$4 && from$3 ) || from$4;

	var toConsumableArray = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



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
	});

	var _toConsumableArray = unwrapExports(toConsumableArray);

	var isEnum$1 = pIE.f;
	var _objectToArray = function (isEntries) {
	  return function (it) {
	    var O = toIObject(it);
	    var keys = getKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) if (isEnum$1.call(O, key = keys[i++])) {
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

	var _objectToArray$1 = /*#__PURE__*/Object.freeze({
		default: _objectToArray,
		__moduleExports: _objectToArray
	});

	var require$$0$34 = ( _objectToArray$1 && _objectToArray ) || _objectToArray$1;

	// https://github.com/tc39/proposal-object-values-entries

	var $entries = require$$0$34(true);

	$export$1($export$1.S, 'Object', {
	  entries: function entries(it) {
	    return $entries(it);
	  }
	});

	var entries = core.Object.entries;

	var entries$1 = /*#__PURE__*/Object.freeze({
		default: entries,
		__moduleExports: entries
	});

	var require$$0$35 = ( entries$1 && entries ) || entries$1;

	var entries$2 = createCommonjsModule(function (module) {
	module.exports = { "default": require$$0$35, __esModule: true };
	});

	var _Object$entries = unwrapExports(entries$2);

	/**
	* Concepto DSL Base Class: A base class (to be extended) for defining new languages for Concepto to be compiled to.
	* @name 	concepto
	* @module 	concepto
	**/

	/**
	 * A node object representation of a DSL node.
	 * @typedef {Object} NodeDSL
	 * @property {number} id - Node unique ID.
	 * @property {number} level - Indicates the depth level from the center of the dsl map.
	 * @property {string} text - Indicates the text defined in the node itself.
	 * @property {string} text_rich - Indicates the html defined in the node itself.
	 * @property {string} text_note - Indicates the text/html defined in the notes view of the node (if any).
	 * @property {string} image - Image link defined as an image within the node.
	 * @property {Object} cloud - Cloud information of the node.
	 * @property {string} cloud.bgcolor - Background color of cloud.
	 * @property {boolean} cloud.used - True if cloud is used, false otherwise. 
	 * @property {Arrow[]} arrows - Visual connections of this node with other nodes {@link #module_concepto..Arrow}.
	 * @property {NodeDSL[]} nodes - Children nodes of current node.
	 * @property {Object} font - Define font, size and styles of node texts.
	 * @property {Object} font.face - Font face type used on node.
	 * @property {Object} font.size - Font size used on node.
	 * @property {Object} font.bold - True if node text is in bold.
	 * @property {Object} font.italic - True if node text is in italics.
	 * @property {string} style - Style applied to the node.
	 * @property {string} color - Text color of node.
	 * @property {string} bgcolor - Background color of node.
	 * @property {string} link - Link defined on node.
	 * @property {string} position - Position in relation of central node (left,right).
	 * @property {Object[]} attributes - Array of objects with each attribute (key is attribute name, value is attribute value).
	 * @property {string[]} icons - Array with icon names used in the node.
	 * @property {date} date_modified - Date of node when it was last modified.
	 * @property {date} date_created - Date of node when it was created.
	 */

	/**
	 * Arrow object definition, for connections to other nodes within a DSL.
	 * @typedef {Object} Arrow
	 * @property {string} target - Target node ID of connection.
	 * @property {string} color - Color of visual connection.
	 * @property {string} style - Graphical representation type of link (source-to-target, target-to-source, both-ways). 
	*/
	var concepto = function () {
		function concepto(file) {
			var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			_classCallCheck(this, concepto);

			if (arguments.length != 2 || _typeof(arguments[0]) === 'object') throw new Error('fatal error! missing file parameter for parser!');
			var console_ = require('open_console');
			var def_config = {
				class: 'concepto',
				console: true,
				debug: false,
				cache: true,
				dsl_git: true,
				prefix: ''
			};
			this.x_config = _extends$1({}, def_config, config);
			this.x_console = new console_({ silent: !this.x_config.console });
			this.x_console.setPrefix({ prefix: this.x_config.class, color: 'yellow' });
			this.x_flags = { init_ok: false, dsl: file, watchdog: { start: new Date(), end: new Date() } };
			this.x_commands = {}; //this.commands();
			this.x_time_stats = {};
			this.x_state = {}; // for dsl parser to share variables within commands and onMethods.
			this.x_crypto_key = require('crypto').randomBytes(32); // for hash helper method
			// grab class methods that start with the 'on' prefix
			/* @TODO check if this is useful or needed 1-Aug-2020
	  this.x_on_methods={};
	  let my_methods=getInstanceMethodNames(this);
	  for (let i in my_methods) {
	  	let name = my_methods[i].name;
	  	if (name.substring(0,2)=='on') {
	  		delete my_methods[i].name;
	  		this.x_on_methods[name]=my_methods[i];
	  	}
	  }
	  console.log('x_on_methods says',this.x_on_methods);*/
		}

		/**
	 * Initializes/starts the class 
	 * @async
	 */


		_createClass(concepto, [{
			key: 'init',
			value: function () {
				var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
					var dsl_parser, path, fs, tmp, for_git, git_target;
					return regenerator.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									if (this.x_flags.init_ok) {
										_context.next = 47;
										break;
									}

									dsl_parser = require('dsl_parser'), path = require('path'), fs = require('fs').promises, tmp = {};
									// show title

									this.x_console.title({
										title: 'DSL Interpreter ' + this.x_config.class + '\ninit:compiling file:\n' + this.x_flags.dsl,
										color: 'cyan',
										config: { align: 'left' }
									});
									this.dsl_parser = new dsl_parser({ file: this.x_flags.dsl, config: { cancelled: false, debug: this.x_config.debug } });
									_context.prev = 4;
									_context.next = 7;
									return this.dsl_parser.process();

								case 7:
									_context.next = 13;
									break;

								case 9:
									_context.prev = 9;
									_context.t0 = _context['catch'](4);

									this.x_console.out({ message: 'error: file ' + this.x_flags.dsl + ' does\'t exist!', data: _context.t0 });
									return _context.abrupt('return');

								case 13:
									// @TODO I believe we should get the subnodes as cheerio references and request as needed on Writer method
									//this.x_dsl_nodes = await this.dsl_parser.getNodes({ level:2, recurse:true });
									// 7-ago-2020 x_dsl_nodes commented out, because its not used anymore (was used for git version).
									/*
	        // parse nodes ..
	        this.x_console.outT({ message:`parsing nodes with dates ..`, color:'cyan' });
	        this.x_dsl_nodes = await this.dsl_parser.getNodes({ level:'2', nodes_raw:true });
	        */
									tmp.directory = path.dirname(path.resolve(this.x_flags.dsl));
									if (this.x_config.cache) {
										// @TODO implement cache (i'll port 'cache' for after testing version 1)
										//this.x_console.outT({ message:`creating dsl_cache subdir ..`, color:'cyan', data:tmp.directory });
									}
									this.x_console.outT({ message: 'time passed since start .. ' + this.secsPassed_() + ' secs', color: 'cyan' });
									// @TODO create github compatible DSL

									if (!this.x_config.dsl_git) {
										_context.next = 42;
										break;
									}

									this.x_console.outT({ message: 'creating github compatible DSL', color: 'green' });
									_context.next = 20;
									return this.dsl_parser.createGitVersion();

								case 20:
									for_git = _context.sent;

									if (!(typeof this.x_config.dsl_git === 'boolean')) {
										_context.next = 37;
										break;
									}

									tmp.dsl_git_path = path.join(tmp.directory, 'dsl_git');
									this.debug('dsl_git dir', tmp.dsl_git_path);
									// @TODO create dsl_git dir and save file contents as dsl_git/(filename).dsl
									_context.prev = 24;
									_context.next = 27;
									return fs.mkdir(tmp.dsl_git_path);

								case 27:
									_context.next = 31;
									break;

								case 29:
									_context.prev = 29;
									_context.t1 = _context['catch'](24);

								case 31:
									git_target = path.join(tmp.dsl_git_path, path.basename(this.x_flags.dsl));
									_context.next = 34;
									return fs.writeFile(git_target, for_git, 'utf-8');

								case 34:
									this.debug('dsl_git file saved as: ' + git_target);
									_context.next = 41;
									break;

								case 37:
									if (!(typeof this.x_config.dsl_git === 'function')) {
										_context.next = 41;
										break;
									}

									// if dsl_git is a function, call it with out ready content; maybe to send it though sockets, further processing or saving in a diferent location
									this.debug('calling dsl_git custom method ' + this.x_config.dsl_git.name);
									_context.next = 41;
									return this.x_config.dsl_git(for_git);

								case 41:
									//
									this.x_console.outT({ message: 'ready github compatible DSL', color: 'green' });

								case 42:
									// continue
									this.x_flags.init_ok = true;
									_context.next = 45;
									return this.onInit();

								case 45:
									_context.next = 48;
									break;

								case 47:
									// this was already called!
									this.x_console.out({ message: 'you may only call method init() once!' });

								case 48:
								case 'end':
									return _context.stop();
							}
						}
					}, _callee, this, [[4, 9], [24, 29]]);
				}));

				function init() {
					return _ref.apply(this, arguments);
				}

				return init;
			}()

			// **********************************
			// template methods (to be extended)
			// **********************************

			/**
	  * Sets the default reply Object for commands
	  * @param 	{Object}	[init]				- Merges given object keys with default defined template
	  * @return 	{Object}
	  */

		}, {
			key: 'reply_template',
			value: function reply_template() {
				var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				var resp = { init: '', open: '', close: '', hasChildren: true, type: 'simple', valid: true, _meta: { _set: {}, cache: true } };
				return _extends$1({}, resp, init);
			}

			/**
	  * Gets automatically executed after init method finishes.
	  * You should place any parser preparation steps here (ex. load commands)
	  * @async
	  */

		}, {
			key: 'onInit',
			value: function () {
				var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
					return regenerator.wrap(function _callee2$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									console.log('hello from concepto.js');

								case 1:
								case 'end':
									return _context2.stop();
							}
						}
					}, _callee2, this);
				}));

				function onInit() {
					return _ref2.apply(this, arguments);
				}

				return onInit;
			}()

			/**
	  * Gets automatically executed after parsing all nodes of the given dsl (before onCompleteCodeTemplate)
	  * @async
	  * @param 	{Array}		processedNodes		- reply content of writer method
	  * @return 	{NodeDSL[]}
	  */
			//@TODO rename to onAfterWriter (or onAfterProcess) later 4-ago-20

		}, {
			key: 'onAfterWritten',
			value: function () {
				var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(processedNodes) {
					return regenerator.wrap(function _callee3$(_context3) {
						while (1) {
							switch (_context3.prev = _context3.next) {
								case 0:
									return _context3.abrupt('return', processedNodes);

								case 1:
								case 'end':
									return _context3.stop();
							}
						}
					}, _callee3, this);
				}));

				function onAfterWritten(_x3) {
					return _ref3.apply(this, arguments);
				}

				return onAfterWritten;
			}()

			/**
	  * Gets automatically executed within writer method for setting the title for a node level 2.
	  * @async
	  * @param 	{NodeDSL}		node		- node to process
	  * @return 	{String}
	  */

		}, {
			key: 'onDefineTitle',
			value: function () {
				var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(node) {
					var resp, i;
					return regenerator.wrap(function _callee4$(_context4) {
						while (1) {
							switch (_context4.prev = _context4.next) {
								case 0:
									resp = node.text, i = void 0;
									_context4.t0 = regenerator.keys(node.attributes);

								case 2:
									if ((_context4.t1 = _context4.t0()).done) {
										_context4.next = 9;
										break;
									}

									i = _context4.t1.value;

									if (!(node.attributes[i] == 'title' || node.attributes[i] == 'titulo')) {
										_context4.next = 7;
										break;
									}

									resp = node.attributes[i];
									return _context4.abrupt('break', 9);

								case 7:
									_context4.next = 2;
									break;

								case 9:
									return _context4.abrupt('return', resp);

								case 10:
								case 'end':
									return _context4.stop();
							}
						}
					}, _callee4, this);
				}));

				function onDefineTitle(_x4) {
					return _ref4.apply(this, arguments);
				}

				return onDefineTitle;
			}()

			/**
	  * Gets automatically executed for naming filename of class/page by testing node (you could use a slud method here).
	  * @async
	  * @param 	{NodeDSL}		node		- node to process
	  * @return 	{String}
	  */

		}, {
			key: 'onDefineFilename',
			value: function () {
				var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(node) {
					return regenerator.wrap(function _callee5$(_context5) {
						while (1) {
							switch (_context5.prev = _context5.next) {
								case 0:
									return _context5.abrupt('return', node.text);

								case 1:
								case 'end':
									return _context5.stop();
							}
						}
					}, _callee5, this);
				}));

				function onDefineFilename(_x5) {
					return _ref5.apply(this, arguments);
				}

				return onDefineFilename;
			}()

			/**
	  * Gets automatically called for naming the class/page by testing node (similar to a filename, but for objects reference).
	  * @async
	  * @param 	{NodeDSL}		node		- node to process
	  * @return 	{String}
	  */

		}, {
			key: 'onDefineNodeName',
			value: function () {
				var _ref6 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(node) {
					return regenerator.wrap(function _callee6$(_context6) {
						while (1) {
							switch (_context6.prev = _context6.next) {
								case 0:
									return _context6.abrupt('return', node.text.replace(' ', '_'));

								case 1:
								case 'end':
									return _context6.stop();
							}
						}
					}, _callee6, this);
				}));

				function onDefineNodeName(_x6) {
					return _ref6.apply(this, arguments);
				}

				return onDefineNodeName;
			}()

			/**
	  * Defines template for code given the processedNodes of writer(). Useful to prepend/append code before writting code to disk.
	  * @async
	  * @param 	{NodeDSL[]}		processedNodes		- array of nodes already processed before writing them to disk
	  * @return 	{NodeDSL[]}
	  */

		}, {
			key: 'onCompleteCodeTemplate',
			value: function () {
				var _ref7 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee7(processedNodes) {
					return regenerator.wrap(function _callee7$(_context7) {
						while (1) {
							switch (_context7.prev = _context7.next) {
								case 0:
									return _context7.abrupt('return', processedNodes);

								case 1:
								case 'end':
									return _context7.stop();
							}
						}
					}, _callee7, this);
				}));

				function onCompleteCodeTemplate(_x7) {
					return _ref7.apply(this, arguments);
				}

				return onCompleteCodeTemplate;
			}()

			/**
	  * Defines preparation steps before processing nodes.
	  * @async
	  */

		}, {
			key: 'onPrepare',
			value: function () {
				var _ref8 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee8() {
					return regenerator.wrap(function _callee8$(_context8) {
						while (1) {
							switch (_context8.prev = _context8.next) {
								case 0:
								case 'end':
									return _context8.stop();
							}
						}
					}, _callee8, this);
				}));

				function onPrepare() {
					return _ref8.apply(this, arguments);
				}

				return onPrepare;
			}()

			/**
	  * Gets automatically called after errors have being found while processing nodes (with the defined commands)
	  * @async
	  * @param 	{string[]}		errors		- array of errors messages
	  */

		}, {
			key: 'onErrors',
			value: function () {
				var _ref9 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee9(errors) {
					return regenerator.wrap(function _callee9$(_context9) {
						while (1) {
							switch (_context9.prev = _context9.next) {
								case 0:
								case 'end':
									return _context9.stop();
							}
						}
					}, _callee9, this);
				}));

				function onErrors(_x8) {
					return _ref9.apply(this, arguments);
				}

				return onErrors;
			}()

			/**
	  * Gets automatically called after all processing on nodes has being done. You usually create the files here using the received processedNodes array.
	  * @async
	  * @param 	{NodeDSL[]}		processedNodes		- array of nodes already processed ready to be written to disk
	  */

		}, {
			key: 'onCreateFiles',
			value: function () {
				var _ref10 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee10(processedNodes) {
					return regenerator.wrap(function _callee10$(_context10) {
						while (1) {
							switch (_context10.prev = _context10.next) {
								case 0:
								case 'end':
									return _context10.stop();
							}
						}
					}, _callee10, this);
				}));

				function onCreateFiles(_x9) {
					return _ref10.apply(this, arguments);
				}

				return onCreateFiles;
			}()

			// ********************
			// helper methods
			// ********************

			/**
	  * A command object specifying requirements for a node to execute its function.
	  * @typedef {Object} Command
	  * @property {string} [x_icons] 				- List of required icons that the node must define to be a match for this command.
	  * @property {string} [x_not_icons] 			- List of icons that the node cannot define to be a match for this command.
	  * @property {string} [x_not_empty] 			- List of keys that must not be empty to be a match for this command (can be any key from a NodeDSL object). Example: 'attribute[src],color'
	  * @property {string} [x_not_text_contains] 	- List of strings, which cannot be within the node text.
	  * @property {string} [x_empty] 				- List of NodeDSL keys that must be empty to be a match for this command.
	  * @property {string} [x_text_contains]		- List of strings, that can be contain in node text (if delimiter is comma) or that must be all contained within the node text (if delimiter is |).
	  * @property {string} [x_level] 				- Numeric conditions that the level of the node must met (example: '>2,<5' or '2,3,4').
	  * @property {string} [x_all_hasparent] 		- List of commands ids (keys), which must be ancestors of the node to be a match for this command.
	  * @property {string} [x_or_hasparent] 		- List of commands ids (keys), which at least one must be an ancestor of the node to be a match for this command.
	  * @property {string} [x_or_isparent] 		- List of commands ids (keys), which at least one must be the exact parent of the node to be a match for this command.
	  * @property {Object} [autocomplete] 			- Describes the node for the autocomplete feature of Concepto DSL software and its related documentation. The feature also takes into account the definition of the command (x_level and x_icons)
	  * @property {string} [autocomplete.key_text] 	- String that the node text must have for this command to be suggested.
	  * @property {string} [autocomplete.hint] 		- Text description for this command to be shown on Concepto DSL.
	  * @property {Function} func - Function to execute with a matching node. Receives one argument and it must be a NodeDSL object.
	  */

			/**
	  * Add commands for processing nodes with the current class
	  * @async
	  * @param 	{Function}		command_func		- async function returning an object with commands objects ({@link Command}) where each key is the command id, and its value a Command object.
	  */

		}, {
			key: 'addCommands',
			value: function () {
				var _ref11 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee11(command_func) {
					var t;
					return regenerator.wrap(function _callee11$(_context11) {
						while (1) {
							switch (_context11.prev = _context11.next) {
								case 0:
									if (!(command_func && typeof command_func === 'function')) {
										_context11.next = 11;
										break;
									}

									_context11.next = 3;
									return command_func(this);

								case 3:
									t = _context11.sent;

									if (!((typeof t === 'undefined' ? 'undefined' : _typeof(t)) === 'object')) {
										_context11.next = 8;
										break;
									}

									this.x_commands = _extends$1({}, this.x_commands, t);
									_context11.next = 9;
									break;

								case 8:
									throw new Error('error! addCommands() argument doesn\'t reply with an Object');

								case 9:
									_context11.next = 12;
									break;

								case 11:
									if (command_func && (typeof command_func === 'undefined' ? 'undefined' : _typeof(command_func)) === 'object') {
										this.x_commands = _extends$1({}, this.x_commands, command_func);
									}

								case 12:
								case 'end':
									return _context11.stop();
							}
						}
					}, _callee11, this);
				}));

				function addCommands(_x10) {
					return _ref11.apply(this, arguments);
				}

				return addCommands;
			}()

			/**
	  * Finds one or more commands defined that matches the specs of the given node.
	  * @async
	  * @param 	{NodeDSL}		node			- node for which to find commands that match
	  * @param 	{boolean}		[justone=true]	- indicates if you want just the first match (true), or all commands that match the given node (false)
	  * @return 	{Command|Command[]}
	  */

		}, {
			key: 'findCommand',
			value: function () {
				var _ref12 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee12() {
					var _this = this;

					var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('node');
					var justone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

					var resp, xtest, keys, command_requires, def_matched, comm, key, comm_keys, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, qi, com_reqs, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, test, testpath, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, word, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _key, _testpath, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _key2, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _key3, _test, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _key4, _test2, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, _key5, _test3, count, sorted;

					return regenerator.wrap(function _callee12$(_context12) {
						while (1) {
							switch (_context12.prev = _context12.next) {
								case 0:
									resp = _extends$1({}, this.reply_template(), { id: 'not_found', hint: 'failover command' }), xtest = [];
									keys = 'x_icons,x_not_icons,x_not_empty,x_not_text_contains,x_empty,x_text_starts,x_text_contains,x_level,x_or_hasparent,x_all_hasparent,x_or_isparent';
									command_requires = node_features = command_defaults = setObjectKeys(keys, '');
									def_matched = matched = setObjectKeys(keys, true), comm = void 0;

									this.debug('findCommand for node ID ' + node.id);
									// iterate through commands
									_context12.t0 = regenerator.keys(this.x_commands);

								case 6:
									if ((_context12.t1 = _context12.t0()).done) {
										_context12.next = 301;
										break;
									}

									key = _context12.t1.value;
									comm_keys = _Object$keys(this.x_commands[key]);
									// reset defaults for current command

									matched = def_matched;
									// build template for used keys
									command_requires = _extends$1({}, command_defaults, this.x_commands[key]);
									delete command_requires.func;
									// test command features vs node features
									// test 1: icon match
									this.debug_time({ id: key + ' x_icons' });
									//if (this.x_config.debug) this.x_console.time({ id:`${key} x_icons` });

									if (!(command_requires['x_icons'] != '')) {
										_context12.next = 41;
										break;
									}

									_iteratorNormalCompletion = true;
									_didIteratorError = false;
									_iteratorError = undefined;
									_context12.prev = 17;
									_iterator = _getIterator(command_requires.x_icons.split(','));

								case 19:
									if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
										_context12.next = 27;
										break;
									}

									qi = _step.value;

									matched.x_icons = node.icons.includes(qi) ? true : false;

									if (matched.x_icons) {
										_context12.next = 24;
										break;
									}

									return _context12.abrupt('break', 27);

								case 24:
									_iteratorNormalCompletion = true;
									_context12.next = 19;
									break;

								case 27:
									_context12.next = 33;
									break;

								case 29:
									_context12.prev = 29;
									_context12.t2 = _context12['catch'](17);
									_didIteratorError = true;
									_iteratorError = _context12.t2;

								case 33:
									_context12.prev = 33;
									_context12.prev = 34;

									if (!_iteratorNormalCompletion && _iterator.return) {
										_iterator.return();
									}

								case 36:
									_context12.prev = 36;

									if (!_didIteratorError) {
										_context12.next = 39;
										break;
									}

									throw _iteratorError;

								case 39:
									return _context12.finish(36);

								case 40:
									return _context12.finish(33);

								case 41:
									this.debug_timeEnd({ id: key + ' x_icons' });
									//if (this.x_config.debug) this.x_console.timeEnd({ id:`${key} x_icons` });
									// test 2: x_not_icons
									this.debug_time({ id: key + ' x_not_icons' });
									if (matched.x_icons && command_requires['x_not_icons'] != '') {
										// special case first
										if (node.icons.length > 0 && command_requires['x_not_icons'] != '' && ['*'].includes(command_requires['x_not_icons'])) {
											matched.x_not_icons = false;
										} else if (command_requires['x_not_icons'] != '') {
											// if node has any icons of the x_not_icons, return false aka intersect values, and if any assign false.
											matched.x_not_icons = this.array_intersect(command_requires['x_not_icons'].split(','), node.icons).length > 1 ? false : true;
										}
									}
									this.debug_timeEnd({ id: key + ' x_not_icons' });
									// test 3: x_not_empty. example: attributes[event,name] aka key[value1||value2] in node
									// supports multiple requirements using + as delimiter "attributes[event,name]+color"
									this.debug_time({ id: key + ' x_not_empty' });

									if (!(command_requires['x_not_empty'] != '' && allTrue(matched, keys))) {
										_context12.next = 80;
										break;
									}

									//this.debug(`test x_not_empty: ${command_requires['x_not_empty']}`);
									// transform x_not_empty value => ex. attributes[event,name]+color => attributes[event+name],color in com_reqs
									com_reqs = command_requires['x_not_empty'].replace(/\+/g, '/').replace(/\,/g, '+').replace(/\//g, ',').split(',');
									//this.debug(':transformed x_not_empty',com_reqs.join(','));

									_iteratorNormalCompletion2 = true;
									_didIteratorError2 = false;
									_iteratorError2 = undefined;
									_context12.prev = 51;
									_iterator2 = _getIterator(com_reqs);

								case 53:
									if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
										_context12.next = 66;
										break;
									}

									test = _step2.value;

									if (!(test.indexOf('.') != -1)) {
										_context12.next = 62;
										break;
									}

									// struct type definition: ex. cloud.bgcolor (if exists, it must not be empty, or false if doesnt exist)
									testpath = getVal(node, test);

									if (!(typeof testpath === 'string' && testpath == '' || typeof testpath === 'boolean' && testpath == false)) {
										_context12.next = 60;
										break;
									}

									matched.x_not_empty = false;
									return _context12.abrupt('break', 66);

								case 60:
									_context12.next = 63;
									break;

								case 62:
									if (test.indexOf('[') != -1) {
										(function () {
											// array type definition: ex. attributes[value1,value2..] (attributes is an array type)
											// it must exist value1,value2,.. within array attributes of objects to be true
											var array_key = test.split('[')[0];
											var keys = _this.dsl_parser.findVariables({ text: test, symbol: '[', symbol_closing: ']' }).split('+');
											var has_keys = [];
											if (node[array_key]) {
												var _iteratorNormalCompletion3 = true;
												var _didIteratorError3 = false;
												var _iteratorError3 = undefined;

												try {
													for (var _iterator3 = _getIterator(node[array_key]), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
														var obj = _step3.value;

														_Object$keys(obj).filter(function (x) {
															return has_keys.push(x);
														});
													}
												} catch (err) {
													_didIteratorError3 = true;
													_iteratorError3 = err;
												} finally {
													try {
														if (!_iteratorNormalCompletion3 && _iterator3.return) {
															_iterator3.return();
														}
													} finally {
														if (_didIteratorError3) {
															throw _iteratorError3;
														}
													}
												}
											}
											if (_this.array_intersect(has_keys, keys).length != keys.length) {
												matched.x_not_empty = false;
											}
										})();
									} else {
										// single attribute
										if (test in node && typeof node[test] === 'string' && node[test] == '') {
											matched.x_not_empty = false;
										} else if (test in node && typeof node[test] === 'boolean' && node[test] == false) {
											matched.x_not_empty = false;
										} else if (typeof node[test] === 'undefined') {
											matched.x_not_empty = false;
										}
									}

								case 63:
									_iteratorNormalCompletion2 = true;
									_context12.next = 53;
									break;

								case 66:
									_context12.next = 72;
									break;

								case 68:
									_context12.prev = 68;
									_context12.t3 = _context12['catch'](51);
									_didIteratorError2 = true;
									_iteratorError2 = _context12.t3;

								case 72:
									_context12.prev = 72;
									_context12.prev = 73;

									if (!_iteratorNormalCompletion2 && _iterator2.return) {
										_iterator2.return();
									}

								case 75:
									_context12.prev = 75;

									if (!_didIteratorError2) {
										_context12.next = 78;
										break;
									}

									throw _iteratorError2;

								case 78:
									return _context12.finish(75);

								case 79:
									return _context12.finish(72);

								case 80:
									this.debug_timeEnd({ id: key + ' x_not_empty' });
									// test 4: x_not_text_contains
									// can have multiple values.. ex: margen,arriba
									this.debug_time({ id: key + ' x_not_text_contains' });

									if (!(command_requires['x_not_text_contains'] != '' && allTrue(matched, keys))) {
										_context12.next = 110;
										break;
									}

									_iteratorNormalCompletion4 = true;
									_didIteratorError4 = false;
									_iteratorError4 = undefined;
									_context12.prev = 86;
									_iterator4 = _getIterator(command_requires['x_not_text_contains'].split(','));

								case 88:
									if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
										_context12.next = 96;
										break;
									}

									word = _step4.value;

									if (!(node.text.indexOf(word) != -1)) {
										_context12.next = 93;
										break;
									}

									matched.x_not_text_contains = false;
									return _context12.abrupt('break', 96);

								case 93:
									_iteratorNormalCompletion4 = true;
									_context12.next = 88;
									break;

								case 96:
									_context12.next = 102;
									break;

								case 98:
									_context12.prev = 98;
									_context12.t4 = _context12['catch'](86);
									_didIteratorError4 = true;
									_iteratorError4 = _context12.t4;

								case 102:
									_context12.prev = 102;
									_context12.prev = 103;

									if (!_iteratorNormalCompletion4 && _iterator4.return) {
										_iterator4.return();
									}

								case 105:
									_context12.prev = 105;

									if (!_didIteratorError4) {
										_context12.next = 108;
										break;
									}

									throw _iteratorError4;

								case 108:
									return _context12.finish(105);

								case 109:
									return _context12.finish(102);

								case 110:
									this.debug_timeEnd({ id: key + ' x_not_text_contains' });
									// test 5: x_empty (node keys that must be empty (undefined also means not empty))
									this.debug_time({ id: key + ' x_empty' });

									if (!(command_requires['x_empty'] != '' && allTrue(matched, keys))) {
										_context12.next = 151;
										break;
									}

									_iteratorNormalCompletion5 = true;
									_didIteratorError5 = false;
									_iteratorError5 = undefined;
									_context12.prev = 116;
									_iterator5 = _getIterator(command_requires['x_empty'].split(','));

								case 118:
									if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
										_context12.next = 137;
										break;
									}

									_key = _step5.value;
									_testpath = getVal(node, _key);

									if (!(typeof _testpath === 'string' && _testpath != '')) {
										_context12.next = 126;
										break;
									}

									matched.x_empty = false;
									return _context12.abrupt('break', 137);

								case 126:
									if (!((typeof _testpath === 'undefined' ? 'undefined' : _typeof(_testpath)) === 'object' && _testpath.length > 0)) {
										_context12.next = 131;
										break;
									}

									matched.x_empty = false;
									return _context12.abrupt('break', 137);

								case 131:
									if (!(typeof _testpath === 'undefined')) {
										_context12.next = 134;
										break;
									}

									matched.x_empty = false;
									return _context12.abrupt('break', 137);

								case 134:
									_iteratorNormalCompletion5 = true;
									_context12.next = 118;
									break;

								case 137:
									_context12.next = 143;
									break;

								case 139:
									_context12.prev = 139;
									_context12.t5 = _context12['catch'](116);
									_didIteratorError5 = true;
									_iteratorError5 = _context12.t5;

								case 143:
									_context12.prev = 143;
									_context12.prev = 144;

									if (!_iteratorNormalCompletion5 && _iterator5.return) {
										_iterator5.return();
									}

								case 146:
									_context12.prev = 146;

									if (!_didIteratorError5) {
										_context12.next = 149;
										break;
									}

									throw _iteratorError5;

								case 149:
									return _context12.finish(146);

								case 150:
									return _context12.finish(143);

								case 151:
									this.debug_timeEnd({ id: key + ' x_empty' });
									// test 6: x_text_contains
									this.debug_time({ id: key + ' x_text_contains' });

									if (!(command_requires['x_text_contains'] != '' && allTrue(matched, keys))) {
										_context12.next = 212;
										break;
									}

									if (!(command_requires['x_text_contains'].indexOf('|') != -1)) {
										_context12.next = 185;
										break;
									}

									// 'or' delimiter
									matched.x_text_contains = false;
									_iteratorNormalCompletion6 = true;
									_didIteratorError6 = false;
									_iteratorError6 = undefined;
									_context12.prev = 159;
									_iterator6 = _getIterator(command_requires['x_text_contains'].split('|'));

								case 161:
									if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
										_context12.next = 169;
										break;
									}

									_key2 = _step6.value;

									if (!(node.text.indexOf(_key2) != -1)) {
										_context12.next = 166;
										break;
									}

									matched.x_text_contains = true;
									return _context12.abrupt('break', 169);

								case 166:
									_iteratorNormalCompletion6 = true;
									_context12.next = 161;
									break;

								case 169:
									_context12.next = 175;
									break;

								case 171:
									_context12.prev = 171;
									_context12.t6 = _context12['catch'](159);
									_didIteratorError6 = true;
									_iteratorError6 = _context12.t6;

								case 175:
									_context12.prev = 175;
									_context12.prev = 176;

									if (!_iteratorNormalCompletion6 && _iterator6.return) {
										_iterator6.return();
									}

								case 178:
									_context12.prev = 178;

									if (!_didIteratorError6) {
										_context12.next = 181;
										break;
									}

									throw _iteratorError6;

								case 181:
									return _context12.finish(178);

								case 182:
									return _context12.finish(175);

								case 183:
									_context12.next = 212;
									break;

								case 185:
									// 'and' delimiter
									_iteratorNormalCompletion7 = true;
									_didIteratorError7 = false;
									_iteratorError7 = undefined;
									_context12.prev = 188;
									_iterator7 = _getIterator(command_requires['x_text_contains'].split(','));

								case 190:
									if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
										_context12.next = 198;
										break;
									}

									_key3 = _step7.value;

									if (!(node.text.indexOf(_key3) == -1)) {
										_context12.next = 195;
										break;
									}

									matched.x_text_contains = false;
									return _context12.abrupt('break', 198);

								case 195:
									_iteratorNormalCompletion7 = true;
									_context12.next = 190;
									break;

								case 198:
									_context12.next = 204;
									break;

								case 200:
									_context12.prev = 200;
									_context12.t7 = _context12['catch'](188);
									_didIteratorError7 = true;
									_iteratorError7 = _context12.t7;

								case 204:
									_context12.prev = 204;
									_context12.prev = 205;

									if (!_iteratorNormalCompletion7 && _iterator7.return) {
										_iterator7.return();
									}

								case 207:
									_context12.prev = 207;

									if (!_didIteratorError7) {
										_context12.next = 210;
										break;
									}

									throw _iteratorError7;

								case 210:
									return _context12.finish(207);

								case 211:
									return _context12.finish(204);

								case 212:
									this.debug_timeEnd({ id: key + ' x_text_contains' });
									// test 7: x_level - example: '2,3,4' (any) or '>2,<7' (all)
									this.debug_time({ id: key + ' x_level' });
									if (command_requires['x_level'] != '' && allTrue(matched, keys)) {
										matched.x_level = numberInCondition(node.level, command_requires['x_level']);
									}
									this.debug_timeEnd({ id: key + ' x_level' });
									// test 8: x_or_hasparent (currently mockup logic)
									this.debug_time({ id: key + ' x_or_hasparent' });

									if (!(command_requires['x_or_hasparent'] != '' && allTrue(matched, keys))) {
										_context12.next = 223;
										break;
									}

									// @TODO need to create hasParentID method
									matched.x_or_hasparent = false;
									_context12.next = 221;
									return this.hasParentID(node.x_id, command_requires['x_or_hasparent']);

								case 221:
									_test = _context12.sent;

									if (_test) {
										matched.x_or_hasparent = true;
									}

								case 223:
									this.debug_timeEnd({ id: key + ' x_or_hasparent' });
									// test 9: x_all_hasparent (currently mockup logic)
									this.debug_time({ id: key + ' x_all_hasparent' });

									if (!(command_requires['x_all_hasparent'] != '' && allTrue(matched, keys))) {
										_context12.next = 256;
										break;
									}

									// @TODO need to create hasParentID method
									_iteratorNormalCompletion8 = true;
									_didIteratorError8 = false;
									_iteratorError8 = undefined;
									_context12.prev = 229;
									_iterator8 = _getIterator(command_requires['x_all_hasparent'].split(','));

								case 231:
									if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
										_context12.next = 242;
										break;
									}

									_key4 = _step8.value;
									_context12.next = 235;
									return this.hasParentID(node.x_id, _key4);

								case 235:
									_test2 = _context12.sent;

									if (_test2) {
										_context12.next = 239;
										break;
									}

									matched.x_all_hasparent = false;
									return _context12.abrupt('break', 242);

								case 239:
									_iteratorNormalCompletion8 = true;
									_context12.next = 231;
									break;

								case 242:
									_context12.next = 248;
									break;

								case 244:
									_context12.prev = 244;
									_context12.t8 = _context12['catch'](229);
									_didIteratorError8 = true;
									_iteratorError8 = _context12.t8;

								case 248:
									_context12.prev = 248;
									_context12.prev = 249;

									if (!_iteratorNormalCompletion8 && _iterator8.return) {
										_iterator8.return();
									}

								case 251:
									_context12.prev = 251;

									if (!_didIteratorError8) {
										_context12.next = 254;
										break;
									}

									throw _iteratorError8;

								case 254:
									return _context12.finish(251);

								case 255:
									return _context12.finish(248);

								case 256:
									this.debug_timeEnd({ id: key + ' x_all_hasparent' });
									// test 10: x_or_isparent (currently mockup logic)
									this.debug_time({ id: key + ' x_or_isparent' });

									if (!(command_requires['x_or_isparent'] != '' && allTrue(matched, keys))) {
										_context12.next = 290;
										break;
									}

									// @TODO need to create isExactParentID method
									matched.x_or_isparent = false;
									_iteratorNormalCompletion9 = true;
									_didIteratorError9 = false;
									_iteratorError9 = undefined;
									_context12.prev = 263;
									_iterator9 = _getIterator(command_requires['x_or_isparent'].split(','));

								case 265:
									if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
										_context12.next = 276;
										break;
									}

									_key5 = _step9.value;
									_context12.next = 269;
									return this.isExactParentID(node.x_id, _key5);

								case 269:
									_test3 = _context12.sent;

									if (_test3) {
										_context12.next = 273;
										break;
									}

									matched.x_or_isparent = true;
									return _context12.abrupt('break', 276);

								case 273:
									_iteratorNormalCompletion9 = true;
									_context12.next = 265;
									break;

								case 276:
									_context12.next = 282;
									break;

								case 278:
									_context12.prev = 278;
									_context12.t9 = _context12['catch'](263);
									_didIteratorError9 = true;
									_iteratorError9 = _context12.t9;

								case 282:
									_context12.prev = 282;
									_context12.prev = 283;

									if (!_iteratorNormalCompletion9 && _iterator9.return) {
										_iterator9.return();
									}

								case 285:
									_context12.prev = 285;

									if (!_didIteratorError9) {
										_context12.next = 288;
										break;
									}

									throw _iteratorError9;

								case 288:
									return _context12.finish(285);

								case 289:
									return _context12.finish(282);

								case 290:
									this.debug_timeEnd({ id: key + ' x_or_isparent' });
									// ***************************
									// if we passed all tests ... 
									// ***************************

									if (!allTrue(matched, keys)) {
										_context12.next = 299;
										break;
									}

									// count num of defined requires on matched command (more is more exact match, aka priority)
									count = _Object$entries(command_requires).reduce(function (n, x) {
										return n + (x[1] != '');
									}, 0);
									// assign resp

									resp = _extends$1({ x_priority: -1 }, this.x_commands[key], { x_id: key, priority: count });

									if (justone) {
										_context12.next = 298;
										break;
									}

									xtest.push(resp);
									_context12.next = 299;
									break;

								case 298:
									return _context12.abrupt('break', 301);

								case 299:
									_context12.next = 6;
									break;

								case 301:
									// sort by priority
									this.debug_time({ id: 'sorting by priority' });
									sorted = xtest.sort(function (a, b) {
										if (a.x_priority != -1 && b.x_priority != -1) {
											// sort by x_priority
											return b.x_priority - a.x_priority;
										} else {
											// sort by priority (number of features)
											return b.priority - a.priority;
										}
									});

									this.debug_timeEnd({ id: 'sorting by priority' });
									// reply
									if (!justone) {
										/*
	         // get just the ids
	         let sorted_ids = sorted.map(function(elem,value) {
	         	return elem.id;	
	         });
	         */
										// return the array of commands, sorted by 'priority' key
										resp = sorted;
									}
									//console.log(`findCommand resp`,resp);
									return _context12.abrupt('return', resp);

								case 306:
								case 'end':
									return _context12.stop();
							}
						}
					}, _callee12, this, [[17, 29, 33, 41], [34,, 36, 40], [51, 68, 72, 80], [73,, 75, 79], [86, 98, 102, 110], [103,, 105, 109], [116, 139, 143, 151], [144,, 146, 150], [159, 171, 175, 183], [176,, 178, 182], [188, 200, 204, 212], [205,, 207, 211], [229, 244, 248, 256], [249,, 251, 255], [263, 278, 282, 290], [283,, 285, 289]]);
				}));

				function findCommand() {
					return _ref12.apply(this, arguments);
				}

				return findCommand;
			}()

			/**
	  * Finds the valid/best command match for the given node.
	  * Also tests the command for its 'valid' attribute, in case the command func specified aditional conditions.
	  * If no command is found, returns false.
	  *
	  * @async
	  * @param 	{NodeDSL}		node			- node for which to find the command
	  * @param 	{boolean}		[object=false]	- if false returns the command reference, true returns the command execution answer
	  * @return 	{Command|boolean}
	  */

		}, {
			key: 'findValidCommand',
			value: function () {
				var _ref13 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee13() {
					var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('node');
					var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

					var commands_, reply, test, qm_index, qm, _test4;

					return regenerator.wrap(function _callee13$(_context13) {
						while (1) {
							switch (_context13.prev = _context13.next) {
								case 0:
									this.debug({ message: 'findValidCommand called for node ' + node.id, color: 'yellow' });
									_context13.next = 3;
									return this.findCommand(node, false);

								case 3:
									commands_ = _context13.sent;
									reply = {};

									if (!(commands_.length == 0)) {
										_context13.next = 9;
										break;
									}

									this.debug({ message: 'findValidCommand: no command found.', color: 'red' });
									_context13.next = 46;
									break;

								case 9:
									if (!(commands_.length == 1)) {
										_context13.next = 25;
										break;
									}

									reply = commands_[0];
									// try executing the node on the found commands_
									_context13.prev = 11;
									_context13.next = 14;
									return this.x_commands[reply.x_id].func(node);

								case 14:
									test = _context13.sent;

									reply.exec = test;
									// @TODO test if _f4e is used; because its ugly
									reply._f4e = commands_[0].x_id;
									this.debug({ message: 'findValidCommand: 1/1 applying command ' + commands_[0].x_id + ' ... VALID MATCH FOUND! (nodeid:' + node.id + ')', color: 'green' });
									_context13.next = 23;
									break;

								case 20:
									_context13.prev = 20;
									_context13.t0 = _context13['catch'](11);

									this.debug({ message: 'findValidCommand: 1/1 applying command ' + commands_[0].x_id + ' ... ERROR! (nodeid:' + node.id + ')', color: 'red' });
									// @TODO emit('internal_error','findValidCommand')

								case 23:
									_context13.next = 46;
									break;

								case 25:
									// more than one command found
									this.debug({ message: 'findValidCommand: ' + commands_.length + ' commands found: (nodeid:' + node.id + ')', color: 'green' });
									// test each command
									_context13.t1 = regenerator.keys(commands_);

								case 27:
									if ((_context13.t2 = _context13.t1()).done) {
										_context13.next = 46;
										break;
									}

									qm_index = _context13.t2.value;
									qm = commands_[qm_index];
									_context13.prev = 30;
									_context13.next = 33;
									return this.x_commands[qm.x_id].func(node);

								case 33:
									_test4 = _context13.sent;

									if (!_test4.valid) {
										_context13.next = 39;
										break;
									}

									this.debug({ message: 'findValidCommand: ' + (parseInt(qm_index) + 1) + '/' + commands_.length + ' testing command ' + qm.x_id + ' ... VALID MATCH FOUND! (nodeid:' + node.id + ')', color: 'green' });
									this.debug({ message: '---------------------', time: false });
									if (object) {
										reply = _test4;
									} else {
										// @TODO test if _f4e is used; because its ugly
										reply = qm;
										reply.exec = _test4;
										reply._f4e = qm.x_id;
									}
									return _context13.abrupt('break', 46);

								case 39:
									_context13.next = 44;
									break;

								case 41:
									_context13.prev = 41;
									_context13.t3 = _context13['catch'](30);

									this.debug({ message: 'findValidCommand: error executing command ' + qm + ' (nodeid:' + node.id + ')', data: _context13.t3, color: 'red' });

								case 44:
									_context13.next = 27;
									break;

								case 46:
									if (_Object$keys(reply).length == 0) reply = false;
									return _context13.abrupt('return', reply);

								case 48:
								case 'end':
									return _context13.stop();
							}
						}
					}, _callee13, this, [[11, 20], [30, 41]]);
				}));

				function findValidCommand() {
					return _ref13.apply(this, arguments);
				}

				return findValidCommand;
			}()

			// **********************
			// public helper methods
			// **********************

		}, {
			key: 'secsPassed_',
			value: function secsPassed_() {
				var tmp = new Date().getTime() - this.x_flags.watchdog.start.getTime();
				return tmp / 1000;
			}
		}, {
			key: 'throwIfMissing',
			value: function throwIfMissing(name) {
				throw new Error('Missing ' + name + ' parameter!');
			}

			/**
	  * Helper method for obtaining the common values (which can be anything) between two arrays.
	  * @param 	{string[]|Object[]|boolean[]}		arr1	- first array
	  * @param 	{string[]|Object[]|boolean[]}		arr2	- second array
	  * @return 	{string[]|Object[]|boolean[]}
	  */

		}, {
			key: 'array_intersect',
			value: function array_intersect(arr1, arr2) {
				return arr1.filter(function (x) {
					return arr2.includes(x);
				});
			}

			/**
	  * Helper method for obtaining the first array items minus the second array items (which can be anything).
	  * @param 	{string[]|Object[]|boolean[]}		arr1	- first array from which to substract
	  * @param 	{string[]|Object[]|boolean[]}		arr2	- second array with items to substract from arr1
	  * @return 	{string[]|Object[]|boolean[]}
	  */

		}, {
			key: 'array_substract',
			value: function array_substract(arr1, arr2) {
				return arr1.filter(function (x) {
					return !arr2.includes(x);
				});
			}

			/**
	  * Helper method for obtaining the unique values (which can be anything) between two arrays.
	  * @param 	{string[]|Object[]|boolean[]}		arr1	- first array
	  * @param 	{string[]|Object[]|boolean[]}		arr2	- second array
	  * @return 	{string[]|Object[]|boolean[]}
	  */

		}, {
			key: 'array_difference',
			value: function array_difference(arr1, arr2) {
				return arr1.filter(function (x) {
					return !arr2.includes(x);
				}).concat(arr2.filter(function (x) {
					return !arr1.includes(x);
				}));
			}

			/**
	  * Helper method for joining the values (which can be anything) between two arrays.
	  * @param 	{string[]|Object[]|boolean[]}		arr1	- first array
	  * @param 	{string[]|Object[]|boolean[]}		arr2	- second array
	  * @return 	{string[]|Object[]|boolean[]}
	  */

		}, {
			key: 'array_union',
			value: function array_union(arr1, arr2) {
				return [].concat(_toConsumableArray(arr1), _toConsumableArray(arr2));
			}

			// public helpers
			/**
	  * Helper method for defining how to display (or do with them; if you overload it) debug messages.
	  * @param 	{string|Object}		message		- message to display. It can also be an Object of open-console params.
	  * @param 	{*}					[data]		- data variable to show with message
	  */

		}, {
			key: 'debug',
			value: function debug(message, data) {
				var params = {};
				if (arguments.length == 1 && _typeof(arguments[0]) === 'object') {
					params = arguments[0];
				} else {
					params = { message: message, data: data };
				}
				if (this.x_config.debug && params.time) {
					this.x_console.outT(_extends$1({ prefix: 'debug,dim', color: 'dim' }, params));
				} else if (this.x_config.debug) {
					this.x_console.out(_extends$1({ prefix: 'debug,dim', color: 'dim' }, params));
				}
			}

			/*
	  * Creates required app folder structure needed for file generation as the given specs and returns object with absolute paths
	  * optional output_dir overwrites base target directory (which is location of .dsl file + apptitle subdir)
	  * @param 	{Object} 	keys 			- Object with keys for which to return absolute paths. Each key must contain a relative output directory (can be nested) to be created and returned.
	  * @param 	{string} 	[output_dir]	- Overwrites the default output base directory (which is the location of the dsl file being proccessed).
	  * @return 	{Object}
	  */

		}, {
			key: '_appFolders',
			value: function () {
				var _ref14 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee14(keys, output_dir) {
					var fs, path, dsl_folder, resp, key;
					return regenerator.wrap(function _callee14$(_context14) {
						while (1) {
							switch (_context14.prev = _context14.next) {
								case 0:
									fs = require('fs').promises;

									this.debug('_appFolders');
									path = require('path');
									dsl_folder = path.dirname(path.resolve(this.x_flags.dsl));

									if (output_dir) dsl_folder = output_dir;
									resp = { base: dsl_folder, src: dsl_folder + path.sep + this.x_state.central_config.apptitle + path.sep };

									resp.app = path.normalize(resp.src);
									// depending on central config type
									_context14.t0 = regenerator.keys(keys);

								case 8:
									if ((_context14.t1 = _context14.t0()).done) {
										_context14.next = 20;
										break;
									}

									key = _context14.t1.value;

									resp[key] = path.join(resp.app, keys[key]);
									// create directories as needed
									_context14.prev = 11;
									_context14.next = 14;
									return fs.mkdir(resp[key], { recursive: true });

								case 14:
									_context14.next = 18;
									break;

								case 16:
									_context14.prev = 16;
									_context14.t2 = _context14['catch'](11);

								case 18:
									_context14.next = 8;
									break;

								case 20:
									return _context14.abrupt('return', resp);

								case 21:
								case 'end':
									return _context14.stop();
							}
						}
					}, _callee14, this, [[11, 16]]);
				}));

				function _appFolders(_x15, _x16) {
					return _ref14.apply(this, arguments);
				}

				return _appFolders;
			}()

			/**
	  * Helper method for measuring (start) time in ms from this method until debug_timeEnd() method and show it in the console.
	  * @param 	{string}		id		- id key (which can also have spaces and/or symbols) with a unique id to identify the stopwatch.
	  */

		}, {
			key: 'debug_time',
			value: function debug_time() {
				if (this.x_config.debug && arguments.length > 0) {
					this.x_console.time(arguments[0]);
				}
			}

			/**
	  * Helper method for measuring (end) time in ms from the call of debug_time() method.
	  * @param 	{string}		id		- id key used in the call for debug_time() method.
	  */

		}, {
			key: 'debug_timeEnd',
			value: function debug_timeEnd() {
				if (this.x_config.debug && arguments.length > 0) {
					this.x_console.timeEnd(_extends$1({ color: 'dim', prefix: 'debug,dim' }, arguments[0]));
				}
			}

			/**
	  * Helper method to return true if given node id has a brother of given command x_id
	  * @async
	  * @param 	{string}	id		- ID of NodeDSL object to query
	  * @param 	{string}	x_id	- Command object x_id to test for
	  * @return 	{Boolean}
	  */

		}, {
			key: 'hasBrotherID',
			value: function () {
				var _ref15 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee15() {
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('id');
					var x_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.throwIfMissing('x_id');

					var brother_ids, brother_x_ids, resp, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, q, node, command;

					return regenerator.wrap(function _callee15$(_context15) {
						while (1) {
							switch (_context15.prev = _context15.next) {
								case 0:
									_context15.next = 2;
									return this.dsl_parser.getBrotherNodesIDs({ id: id, before: true, after: true }).split(',');

								case 2:
									brother_ids = _context15.sent;
									brother_x_ids = [], resp = false;
									_iteratorNormalCompletion10 = true;
									_didIteratorError10 = false;
									_iteratorError10 = undefined;
									_context15.prev = 7;
									_iterator10 = _getIterator(brother_ids);

								case 9:
									if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
										_context15.next = 23;
										break;
									}

									q = _step10.value;
									_context15.next = 13;
									return this.dsl_parser.getNode({ id: q, recurse: false });

								case 13:
									node = _context15.sent;
									_context15.next = 16;
									return findValidCommand(node);

								case 16:
									command = _context15.sent;

									if (!brother_x_ids.includes(x_id)) {
										_context15.next = 19;
										break;
									}

									return _context15.abrupt('return', true);

								case 19:
									brother_x_ids.push(command.x_id);

								case 20:
									_iteratorNormalCompletion10 = true;
									_context15.next = 9;
									break;

								case 23:
									_context15.next = 29;
									break;

								case 25:
									_context15.prev = 25;
									_context15.t0 = _context15['catch'](7);
									_didIteratorError10 = true;
									_iteratorError10 = _context15.t0;

								case 29:
									_context15.prev = 29;
									_context15.prev = 30;

									if (!_iteratorNormalCompletion10 && _iterator10.return) {
										_iterator10.return();
									}

								case 32:
									_context15.prev = 32;

									if (!_didIteratorError10) {
										_context15.next = 35;
										break;
									}

									throw _iteratorError10;

								case 35:
									return _context15.finish(32);

								case 36:
									return _context15.finish(29);

								case 37:
									resp = brother_x_ids.includes(x_id);
									return _context15.abrupt('return', resp);

								case 39:
								case 'end':
									return _context15.stop();
							}
						}
					}, _callee15, this, [[7, 25, 29, 37], [30,, 32, 36]]);
				}));

				function hasBrotherID() {
					return _ref15.apply(this, arguments);
				}

				return hasBrotherID;
			}()

			/**
	  * Helper method to return true if given node ID has a brother before it
	  * @async
	  * @param 	{string}	id		- ID of NodeDSL object to query
	  * @return 	{Boolean}
	  */

		}, {
			key: 'hasBrotherBefore',
			value: function () {
				var _ref16 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee16() {
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('id');
					var brother_ids;
					return regenerator.wrap(function _callee16$(_context16) {
						while (1) {
							switch (_context16.prev = _context16.next) {
								case 0:
									_context16.next = 2;
									return this.dsl_parser.getBrotherNodesIDs({ id: id, before: true, after: false }).split(',');

								case 2:
									brother_ids = _context16.sent;
									return _context16.abrupt('return', brother_ids.includes(id));

								case 4:
								case 'end':
									return _context16.stop();
							}
						}
					}, _callee16, this);
				}));

				function hasBrotherBefore() {
					return _ref16.apply(this, arguments);
				}

				return hasBrotherBefore;
			}()

			/**
	  * Helper method to return true if given node ID has a brother following it
	  * @async
	  * @param 	{string}	id		- ID of NodeDSL object to query
	  * @return 	{Boolean}
	  */

		}, {
			key: 'hasBrotherNext',
			value: function () {
				var _ref17 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee17() {
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('id');
					var brother_ids;
					return regenerator.wrap(function _callee17$(_context17) {
						while (1) {
							switch (_context17.prev = _context17.next) {
								case 0:
									_context17.next = 2;
									return this.dsl_parser.getBrotherNodesIDs({ id: id, before: false, after: true }).split(',');

								case 2:
									brother_ids = _context17.sent;
									return _context17.abrupt('return', brother_ids.includes(id));

								case 4:
								case 'end':
									return _context17.stop();
							}
						}
					}, _callee17, this);
				}));

				function hasBrotherNext() {
					return _ref17.apply(this, arguments);
				}

				return hasBrotherNext;
			}()

			/**
	  * Helper method to return true if given Command object x_id is the exact parent for the given NodeDSL object id
	  * @async
	  * @param 	{string}	id		- ID of NodeDSL object to query
	  * @param 	{string}	x_id	- Command object x_id to test for
	  * @return 	{Boolean}
	  */

		}, {
			key: 'isExactParentID',
			value: function () {
				var _ref18 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee18() {
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('id');
					var x_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.throwIfMissing('x_id');
					var parent_node, parent_command;
					return regenerator.wrap(function _callee18$(_context18) {
						while (1) {
							switch (_context18.prev = _context18.next) {
								case 0:
									_context18.next = 2;
									return this.dsl_parser.getParentNode({ id: id });

								case 2:
									parent_node = _context18.sent;
									_context18.next = 5;
									return this.findValidCommand(parent_node);

								case 5:
									parent_command = _context18.sent;

									if (!(parent_command && parent_command.x_id == x_id)) {
										_context18.next = 8;
										break;
									}

									return _context18.abrupt('return', true);

								case 8:
									return _context18.abrupt('return', false);

								case 9:
								case 'end':
									return _context18.stop();
							}
						}
					}, _callee18, this);
				}));

				function isExactParentID() {
					return _ref18.apply(this, arguments);
				}

				return isExactParentID;
			}()

			/**
	  * Helper method to return true if given Command object x_id is the parent or is an ancestor for the given NodeDSL object id
	  * @async
	  * @param 	{string}	id		- ID of NodeDSL object to query
	  * @param 	{string}	x_id	- Command object x_id to test for
	  * @return 	{Boolean}
	  */

		}, {
			key: 'hasParentID',
			value: function () {
				var _ref19 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee19() {
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('id');
					var x_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.throwIfMissing('x_id');

					var x_ids, parents, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, parent_id, node, command;

					return regenerator.wrap(function _callee19$(_context19) {
						while (1) {
							switch (_context19.prev = _context19.next) {
								case 0:
									// @TODO test it after having 'real' commands on some parser 4-ago-20
									x_ids = x_id.split(',');
									_context19.next = 3;
									return this.dsl_parser.getParentNodesIDs({ id: id, array: true });

								case 3:
									parents = _context19.sent;
									_iteratorNormalCompletion11 = true;
									_didIteratorError11 = false;
									_iteratorError11 = undefined;
									_context19.prev = 7;
									_iterator11 = _getIterator(parents);

								case 9:
									if (_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done) {
										_context19.next = 22;
										break;
									}

									parent_id = _step11.value;
									_context19.next = 13;
									return this.dsl_parser.getNode({ parent_id: parent_id, recurse: false });

								case 13:
									node = _context19.sent;
									_context19.next = 16;
									return this.findValidCommand(node);

								case 16:
									command = _context19.sent;

									if (!(command && x_ids.includes(command.x_id))) {
										_context19.next = 19;
										break;
									}

									return _context19.abrupt('return', true);

								case 19:
									_iteratorNormalCompletion11 = true;
									_context19.next = 9;
									break;

								case 22:
									_context19.next = 28;
									break;

								case 24:
									_context19.prev = 24;
									_context19.t0 = _context19['catch'](7);
									_didIteratorError11 = true;
									_iteratorError11 = _context19.t0;

								case 28:
									_context19.prev = 28;
									_context19.prev = 29;

									if (!_iteratorNormalCompletion11 && _iterator11.return) {
										_iterator11.return();
									}

								case 31:
									_context19.prev = 31;

									if (!_didIteratorError11) {
										_context19.next = 34;
										break;
									}

									throw _iteratorError11;

								case 34:
									return _context19.finish(31);

								case 35:
									return _context19.finish(28);

								case 36:
									return _context19.abrupt('return', false);

								case 37:
								case 'end':
									return _context19.stop();
							}
						}
					}, _callee19, this, [[7, 24, 28, 36], [29,, 31, 35]]);
				}));

				function hasParentID() {
					return _ref19.apply(this, arguments);
				}

				return hasParentID;
			}()

			/**
	  * Helper method to return all Command object x_ids parents of given NodeDSL id; if array=true, 
	  * @async
	  * @param 	{string}	id		- ID of NodeDSL object to query
	  * @param 	{Boolean}	array	- If true, returns array of objects with x_id and ids, instead of a list of NodeDSL ids.
	  * @return 	{string|Object[]}
	  */

		}, {
			key: 'getParentIDs',
			value: function () {
				var _ref20 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee20() {
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('id');
					var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

					var parents, resp, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, parent_id, node, command;

					return regenerator.wrap(function _callee20$(_context20) {
						while (1) {
							switch (_context20.prev = _context20.next) {
								case 0:
									_context20.next = 2;
									return this.dsl_parser.getParentNodesIDs({ id: id, array: true });

								case 2:
									parents = _context20.sent;
									resp = [];
									_iteratorNormalCompletion12 = true;
									_didIteratorError12 = false;
									_iteratorError12 = undefined;
									_context20.prev = 7;
									_iterator12 = _getIterator(parents);

								case 9:
									if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
										_context20.next = 21;
										break;
									}

									parent_id = _step12.value;
									_context20.next = 13;
									return this.dsl_parser.getNode({ parent_id: parent_id, recurse: false });

								case 13:
									node = _context20.sent;
									_context20.next = 16;
									return this.findValidCommand(node);

								case 16:
									command = _context20.sent;

									if (command && array) {
										resp.push({ id: parent_id, x_id: command.x_id });
									} else {
										resp.push(command.x_id);
									}

								case 18:
									_iteratorNormalCompletion12 = true;
									_context20.next = 9;
									break;

								case 21:
									_context20.next = 27;
									break;

								case 23:
									_context20.prev = 23;
									_context20.t0 = _context20['catch'](7);
									_didIteratorError12 = true;
									_iteratorError12 = _context20.t0;

								case 27:
									_context20.prev = 27;
									_context20.prev = 28;

									if (!_iteratorNormalCompletion12 && _iterator12.return) {
										_iterator12.return();
									}

								case 30:
									_context20.prev = 30;

									if (!_didIteratorError12) {
										_context20.next = 33;
										break;
									}

									throw _iteratorError12;

								case 33:
									return _context20.finish(30);

								case 34:
									return _context20.finish(27);

								case 35:
									if (!array) {
										_context20.next = 37;
										break;
									}

									return _context20.abrupt('return', resp);

								case 37:
									return _context20.abrupt('return', resp.join(','));

								case 38:
								case 'end':
									return _context20.stop();
							}
						}
					}, _callee20, this, [[7, 23, 27, 35], [28,, 30, 34]]);
				}));

				function getParentIDs() {
					return _ref20.apply(this, arguments);
				}

				return getParentIDs;
			}()

			/**
	  * Helper method to return all Command object x_ids parents of given NodeDSL id as an array (its an alias for getParentIDs) 
	  * @async
	  * @param 	{string}	id		- ID of NodeDSL object to query
	  * @return 	{Object[]}
	  */

		}, {
			key: 'getParentIDs2Array',
			value: function () {
				var _ref21 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee21() {
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('id');
					return regenerator.wrap(function _callee21$(_context21) {
						while (1) {
							switch (_context21.prev = _context21.next) {
								case 0:
									_context21.next = 2;
									return this.getParentIDs(id, true);

								case 2:
									return _context21.abrupt('return', _context21.sent);

								case 3:
								case 'end':
									return _context21.stop();
							}
						}
					}, _callee21, this);
				}));

				function getParentIDs2Array() {
					return _ref21.apply(this, arguments);
				}

				return getParentIDs2Array;
			}()

			// 3-aug-20 PSB doesn't seem to be used anywhere)
			/**
	  * Helper method to return all NodeDSL ids parents of given NodeDSL id 
	  * @async
	  * @param 	{string}	id		- ID of NodeDSL object to query
	  * @return 	{Object[]}
	  * @deprecated
	  */

		}, {
			key: 'getParentIDs2ArrayWXID',
			value: function () {
				var _ref22 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee22() {
					var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('id');
					var parents;
					return regenerator.wrap(function _callee22$(_context22) {
						while (1) {
							switch (_context22.prev = _context22.next) {
								case 0:
									_context22.next = 2;
									return this.getParentIDs(id, true);

								case 2:
									parents = _context22.sent;
									return _context22.abrupt('return', parents.map(function (x) {
										id: x.id;
									}));

								case 4:
								case 'end':
									return _context22.stop();
							}
						}
					}, _callee22, this);
				}));

				function getParentIDs2ArrayWXID() {
					return _ref22.apply(this, arguments);
				}

				return getParentIDs2ArrayWXID;
			}()

			/**
	  * Helper method to transform object keys/values into params for customtags usage
	  * @param 	{Object}	struct		- Object with keys and values to transform from.
	  * @return 	{string}
	  */

		}, {
			key: 'struct2params',
			value: function struct2params() {
				var struct = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('id');

				var resp = [];
				var _iteratorNormalCompletion13 = true;
				var _didIteratorError13 = false;
				var _iteratorError13 = undefined;

				try {
					for (var _iterator13 = _getIterator(_Object$entries(struct)), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
						var _ref23 = _step13.value;

						var _ref24 = _slicedToArray(_ref23, 2);

						var key = _ref24[0];
						var value = _ref24[1];

						if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && typeof value !== 'function' && typeof value !== 'undefined') {
							resp.push(key + '=\'' + value + '\'');
						}
					}
				} catch (err) {
					_didIteratorError13 = true;
					_iteratorError13 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion13 && _iterator13.return) {
							_iterator13.return();
						}
					} finally {
						if (_didIteratorError13) {
							throw _iteratorError13;
						}
					}
				}

				return resp.join(' ');
			}
		}, {
			key: 'cleanIDs4node',
			value: function cleanIDs4node() {
				var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.throwIfMissing('node');

				var copy = node;
				delete copy.id;
				return copy;
			}
		}, {
			key: 'hash',
			value: function hash(thing) {
				// returns a hash of the given object, using google highwayhash (fastest)
				//this.debug_time({ id:`hash ${thing}` });
				var highwayhash = require('highwayhash');
				var input = void 0;
				if (typeof thing === 'string') {
					input = Buffer.from(thing);
				} else if ((typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === 'object') {
					// serialize object into buffer first
					input = Buffer.from(_JSON$stringify(thing));
				}
				var resp = highwayhash.asHexString(this.x_crypto_key, input);
				//this.debug_timeEnd({ id:`hash ${thing}` });;
				return resp;
			}
		}]);

		return concepto;
	}();

	//sets/creates the same value to all keys in an object
	function setObjectKeys(obj, value) {
		var resp = obj;
		if (typeof resp === 'string') {
			resp = {};
			var keys = obj.split(',');
			for (var i in keys) {
				resp[keys[i]] = value;
			}
		} else {
			for (var _i in resp) {
				resp[_i] = value;
			}
		}
		return resp;
	}

	function allTrue(object, keys) {
		//ex. allTrue(matched,'x_icons,x_not_icons');
		var resp = true;
		var _iteratorNormalCompletion14 = true;
		var _didIteratorError14 = false;
		var _iteratorError14 = undefined;

		try {
			for (var _iterator14 = _getIterator(keys.split(',')), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
				var key = _step14.value;

				if (object[key] !== true) {
					resp = false;
					break;
				}
			}
		} catch (err) {
			_didIteratorError14 = true;
			_iteratorError14 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion14 && _iterator14.return) {
					_iterator14.return();
				}
			} finally {
				if (_didIteratorError14) {
					throw _iteratorError14;
				}
			}
		}

		return resp;
	}

	//returns true if num meets the conditions listed on test (false otherwise)
	function numberInCondition(num, test) {
		var resp = true;
		if (test.indexOf('>') != -1 || test.indexOf('<') != -1) {
			// 'and/all' (>2,<7)
			var _iteratorNormalCompletion15 = true;
			var _didIteratorError15 = false;
			var _iteratorError15 = undefined;

			try {
				for (var _iterator15 = _getIterator(test.split(',')), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
					var i = _step15.value;

					if (i.substring(0, 1) == '>') {
						if (num <= parseInt(i.replace('>', ''))) {
							resp = false;
							break;
						}
					} else if (i.substring(0, 1) == '<') {
						if (num >= parseInt(i.replace('<', ''))) {
							resp = false;
							break;
						}
					}
				}
			} catch (err) {
				_didIteratorError15 = true;
				_iteratorError15 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion15 && _iterator15.return) {
						_iterator15.return();
					}
				} finally {
					if (_didIteratorError15) {
						throw _iteratorError15;
					}
				}
			}
		} else {
			// 'or/any' (2,3,5)
			resp = false;
			var _iteratorNormalCompletion16 = true;
			var _didIteratorError16 = false;
			var _iteratorError16 = undefined;

			try {
				for (var _iterator16 = _getIterator(test.split(',')), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
					var _i2 = _step16.value;

					if (num == _i2) {
						resp = true;
						break;
					}
				}
			} catch (err) {
				_didIteratorError16 = true;
				_iteratorError16 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion16 && _iterator16.return) {
						_iterator16.return();
					}
				} finally {
					if (_didIteratorError16) {
						throw _iteratorError16;
					}
				}
			}
		}
		return resp;
	}

	function getVal(project, myPath) {
		return myPath.split('.').reduce(function (res, prop) {
			return res[prop];
		}, project);
	}

	// end: private helper methods

	var internal_commands = (function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(context) {
			var state, null_template;
			return regenerator.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							state = context.x_state;
							null_template = { hint: 'Allowed node type that must be ommited',
								func: function () {
									var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(node) {
										return regenerator.wrap(function _callee$(_context) {
											while (1) {
												switch (_context.prev = _context.next) {
													case 0:
														return _context.abrupt('return', context.reply_template({ hasChildren: false }));

													case 1:
													case 'end':
														return _context.stop();
												}
											}
										}, _callee, this);
									}));

									function func(_x2) {
										return _ref2.apply(this, arguments);
									}

									return func;
								}()
							};
							/*
	      //special node names you can define:
	      'not_found': {
	      	//executed when no there was no matching command for a node.
	      	func: async function(node) {
	      		return me.reply_template();
	      	}
	      }
	      	full node example:
	      'def_otro': {
	      	x_priority: 'lowest,last,highest,first',
	      	x_icons: 'cancel,desktop_new,idea,..',
	      	x_not_icons: '',
	      	x_not_empty: 'attribute[name]',
	      	x_not_text_contains: '',
	      	x_empty: '',
	      	x_text_contains: '',
	      	x_level: '2,>2,<5,..',
	      	x_all_hasparent: 'def_padre_otro',
	      	x_or_hasparent: '',
	      	x_or_isparent: '',
	      	autocomplete: {
	      		'key_text': 'otro', //activate autocomplete if the node text equals to this
	      		'key_icon': 'idea', //activate autocomplete if the node has this icon
	      		'hint': 'Testing node',
	      		'attributes': {
	      			'from': {
	      				'type': 'int',
	      				'description': 'If defined, sets the start offset for the node. (example)'
	      			}
	      		}
	      	},
	      	func: async function(node) {
	      		let resp = me.reply_template();
	      		return resp;
	      	}
	      }
	      */

							return _context5.abrupt('return', {
								'cancel': _extends$1({}, null_template, { x_icons: 'button_cancel' }),
								'def_config': _extends$1({}, null_template, { x_icons: 'desktop_new', x_level: '2', x_text_contains: 'config' }),
								'def_modelos': _extends$1({}, null_template, { x_icons: 'desktop_new', x_level: '2', x_text_contains: 'modelos' }),
								'def_assets': _extends$1({}, null_template, { x_icons: 'desktop_new', x_level: '2', x_text_contains: 'assets' }),

								'def_server': {
									x_icons: 'desktop_new',
									x_level: '2',
									x_text_contains: 'server|servidor|api',
									hint: 'Representa a un backend integrado con funciones de express.',
									func: function () {
										var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(node) {
											var resp;
											return regenerator.wrap(function _callee2$(_context2) {
												while (1) {
													switch (_context2.prev = _context2.next) {
														case 0:
															resp = context.reply_template();

															state.npm = _extends$1({}, state.npm, { 'body_parser': '*', 'cookie-parser': '*' });
															state.central_config.static = false;
															return _context2.abrupt('return', resp);

														case 4:
														case 'end':
															return _context2.stop();
													}
												}
											}, _callee2, this);
										}));

										function func(_x3) {
											return _ref3.apply(this, arguments);
										}

										return func;
									}()
								},
								'def_path': {
									x_icons: 'list',
									x_level: '3,4',
									x_or_isparent: 'def_server',
									x_not_icons: 'button_cancel,desktop_new,help',
									hint: 'Carpeta para ubicacion de funcion de servidor',
									func: function () {
										var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(node) {
											var resp, parent_node;
											return regenerator.wrap(function _callee3$(_context3) {
												while (1) {
													switch (_context3.prev = _context3.next) {
														case 0:
															resp = context.reply_template();

															if (!(node.level == 2)) {
																_context3.next = 5;
																break;
															}

															state.current_folder = node.text;
															_context3.next = 18;
															break;

														case 5:
															_context3.t0 = node.level == 3;

															if (!_context3.t0) {
																_context3.next = 10;
																break;
															}

															_context3.next = 9;
															return context.isExactParentID(node.id, 'def_path');

														case 9:
															_context3.t0 = _context3.sent;

														case 10:
															if (!_context3.t0) {
																_context3.next = 17;
																break;
															}

															_context3.next = 13;
															return context.dsl_parser.getParentNode({ id: node.id });

														case 13:
															parent_node = _context3.sent;

															state.current_folder = parent_node.text + '/' + node.id;
															_context3.next = 18;
															break;

														case 17:
															resp.valid = false;

														case 18:
															return _context3.abrupt('return', resp);

														case 19:
														case 'end':
															return _context3.stop();
													}
												}
											}, _callee3, this);
										}));

										function func(_x4) {
											return _ref4.apply(this, arguments);
										}

										return func;
									}()
								},

								'def_imagen': {
									x_icons: 'idea',
									x_not_icons: 'button_cancel,desktop_new,help',
									x_not_empty: 'attributes[:src]',
									x_empty: '',
									x_level: '>2',
									func: function () {
										var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(node) {
											return regenerator.wrap(function _callee4$(_context4) {
												while (1) {
													switch (_context4.prev = _context4.next) {
														case 0:
															return _context4.abrupt('return', context.reply_template({ otro: 'Pablo' }));

														case 1:
														case 'end':
															return _context4.stop();
													}
												}
											}, _callee4, this);
										}));

										function func(_x5) {
											return _ref5.apply(this, arguments);
										}

										return func;
									}()
								}
							});

						case 3:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, this);
		}));

		return function (_x) {
			return _ref.apply(this, arguments);
		};
	})();

	var vue = function (_concepto) {
		_inherits(vue, _concepto);

		function vue(file) {
			var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			_classCallCheck(this, vue);

			// we can get class name, from package.json name key (after its in its own project)
			var my_config = {
				class: 'vue',
				debug: true
			};
			var nuevo_config = _extends$1({}, my_config, config);
			return _possibleConstructorReturn(this, (vue.__proto__ || _Object$getPrototypeOf(vue)).call(this, file, nuevo_config)); //,...my_config
		}

		// **************************
		// methods to be auto-called
		// **************************

		//Called after init method finishes


		_createClass(vue, [{
			key: 'onInit',
			value: function () {
				var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
					var _appFolders;

					return regenerator.wrap(function _callee$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									this.x_console.outT({ message: 'hello from vue', color: 'yellow' });
									// define and assign commands
									_context.next = 3;
									return this.addCommands(internal_commands);

								case 3:
									_context.next = 5;
									return this._readConfig();

								case 5:
									this.x_state.config_node = _context.sent;
									_context.next = 8;
									return this._readCentralConfig();

								case 8:
									this.x_state.central_config = _context.sent;
									_context.next = 11;
									return this._readAssets();

								case 11:
									this.x_state.assets = _context.sent;

									if (!this.x_state.central_config.componente) {
										_context.next = 18;
										break;
									}

									_context.next = 15;
									return this._appFolders({
										'components': '',
										'pages': '',
										'assets': 'assets/',
										'static': 'static/',
										'umd': 'umd/'
									});

								case 15:
									this.x_state.dirs = _context.sent;
									_context.next = 21;
									break;

								case 18:
									_context.next = 20;
									return this._appFolders((_appFolders = {
										'client': 'client/',
										'layouts': 'client/layouts/',
										'components': 'client/components/',
										'pages': 'client/pages/',
										'plugins': 'client/plugins/',
										'static': 'client/static/',
										'store': 'client/store/',
										'middleware': 'client/middleware/',
										'server': 'client/server/',
										'assets': 'client/assets/',
										'css': 'client/assets/css/'
									}, _defineProperty$1(_appFolders, 'store', 'client/store/'), _defineProperty$1(_appFolders, 'lang', 'client/lang/'), _appFolders));

								case 20:
									this.x_state.dirs = _context.sent;

								case 21:
									this.debug('app dirs', this.x_state.dirs);
									// read modelos node (virtual DB)
									_context.next = 24;
									return this._readModelos();

								case 24:
									this.x_state.models = _context.sent;
									//alias: database tables
									this.debug('models', this.x_state.models);

								case 26:
								case 'end':
									return _context.stop();
							}
						}
					}, _callee, this);
				}));

				function onInit() {
					return _ref.apply(this, arguments);
				}

				return onInit;
			}()

			//Called after parsing nodes

		}, {
			key: 'onAfterWritten',
			value: function () {
				var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(processedNodes) {
					return regenerator.wrap(function _callee2$(_context2) {
						while (1) {
							switch (_context2.prev = _context2.next) {
								case 0:
									return _context2.abrupt('return', processedNodes);

								case 1:
								case 'end':
									return _context2.stop();
							}
						}
					}, _callee2, this);
				}));

				function onAfterWritten(_x2) {
					return _ref2.apply(this, arguments);
				}

				return onAfterWritten;
			}()

			//Called for defining the title of class/page by testing node.

		}, {
			key: 'onDefineTitle',
			value: function () {
				var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(node) {
					var resp, i;
					return regenerator.wrap(function _callee3$(_context3) {
						while (1) {
							switch (_context3.prev = _context3.next) {
								case 0:
									resp = node.text, i = void 0;
									_context3.t0 = regenerator.keys(node.attributes);

								case 2:
									if ((_context3.t1 = _context3.t0()).done) {
										_context3.next = 9;
										break;
									}

									i = _context3.t1.value;

									if (!['title', 'titulo'].includes(node.attributes[i])) {
										_context3.next = 7;
										break;
									}

									resp = node.attributes[i];
									return _context3.abrupt('break', 9);

								case 7:
									_context3.next = 2;
									break;

								case 9:
									return _context3.abrupt('return', resp);

								case 10:
								case 'end':
									return _context3.stop();
							}
						}
					}, _callee3, this);
				}));

				function onDefineTitle(_x3) {
					return _ref3.apply(this, arguments);
				}

				return onDefineTitle;
			}()

			//Called for naming filename of class/page by testing node.

		}, {
			key: 'onDefineFilename',
			value: function () {
				var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4(node) {
					return regenerator.wrap(function _callee4$(_context4) {
						while (1) {
							switch (_context4.prev = _context4.next) {
								case 0:
									return _context4.abrupt('return', node.text);

								case 1:
								case 'end':
									return _context4.stop();
							}
						}
					}, _callee4, this);
				}));

				function onDefineFilename(_x4) {
					return _ref4.apply(this, arguments);
				}

				return onDefineFilename;
			}()

			//Called for naming the class/page by testing node.

		}, {
			key: 'onDefineNodeName',
			value: function () {
				var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(node) {
					return regenerator.wrap(function _callee5$(_context5) {
						while (1) {
							switch (_context5.prev = _context5.next) {
								case 0:
									return _context5.abrupt('return', node.text.replace(' ', '_'));

								case 1:
								case 'end':
									return _context5.stop();
							}
						}
					}, _callee5, this);
				}));

				function onDefineNodeName(_x5) {
					return _ref5.apply(this, arguments);
				}

				return onDefineNodeName;
			}()

			//Defines template for code given the processedNodes of writer()

		}, {
			key: 'onCompleteCodeTemplate',
			value: function () {
				var _ref6 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6(processedNodes) {
					return regenerator.wrap(function _callee6$(_context6) {
						while (1) {
							switch (_context6.prev = _context6.next) {
								case 0:
									return _context6.abrupt('return', processedNodes);

								case 1:
								case 'end':
									return _context6.stop();
							}
						}
					}, _callee6, this);
				}));

				function onCompleteCodeTemplate(_x6) {
					return _ref6.apply(this, arguments);
				}

				return onCompleteCodeTemplate;
			}()

			//Defines preparation steps before processing nodes.

		}, {
			key: 'onPrepare',
			value: function () {
				var _ref7 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee7() {
					return regenerator.wrap(function _callee7$(_context7) {
						while (1) {
							switch (_context7.prev = _context7.next) {
								case 0:
								case 'end':
									return _context7.stop();
							}
						}
					}, _callee7, this);
				}));

				function onPrepare() {
					return _ref7.apply(this, arguments);
				}

				return onPrepare;
			}()

			//Executed when compiler founds an error processing nodes.

		}, {
			key: 'onErrors',
			value: function () {
				var _ref8 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee8(errors) {
					return regenerator.wrap(function _callee8$(_context8) {
						while (1) {
							switch (_context8.prev = _context8.next) {
								case 0:
								case 'end':
									return _context8.stop();
							}
						}
					}, _callee8, this);
				}));

				function onErrors(_x7) {
					return _ref8.apply(this, arguments);
				}

				return onErrors;
			}()

			//Transforms the processed nodes into files.

		}, {
			key: 'onCreateFiles',
			value: function () {
				var _ref9 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee9(processedNodes) {
					return regenerator.wrap(function _callee9$(_context9) {
						while (1) {
							switch (_context9.prev = _context9.next) {
								case 0:
								case 'end':
									return _context9.stop();
							}
						}
					}, _callee9, this);
				}));

				function onCreateFiles(_x8) {
					return _ref9.apply(this, arguments);
				}

				return onCreateFiles;
			}()

			//overwrites default reply structure and value for command's functions
			/*
	  reply_template(init={}) {
	  }
	  */

			// **************************
			// 	Helper Methods
			// **************************

			/*
	  * Reads the node called modelos and creates tables definitions and managing code (alias:database).
	  */

		}, {
			key: '_readModelos',
			value: function () {
				var _ref10 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee10() {
					var modelos, tmp, fields_map, resp, type_map, _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, table;

					return regenerator.wrap(function _callee10$(_context10) {
						while (1) {
							switch (_context10.prev = _context10.next) {
								case 0:
									// @IDEA this method could return the insert/update/delete/select 'function code generators'
									this.debug('_readModelos');
									this.debug_time({ id: 'readModelos' });
									_context10.next = 4;
									return this.dsl_parser.getNodes({ text: 'modelos', level: 2, icon: 'desktop_new', recurse: true });

								case 4:
									modelos = _context10.sent;
									//nodes_raw:true	
									tmp = { appname: this.x_state.config_node.name }, fields_map = {};
									resp = {
										tables: {},
										attributes: {}
									};
									// map our values to real database values 

									type_map = {
										id: { value: 'INT AUTOINCREMENT PRIMARY KEY', alias: ['identificador', 'autoid', 'autonum', 'key'] },
										texto: { value: 'STRING', alias: ['text', 'varchar', 'string'] },
										int: { value: 'INTEGER', alias: ['numero chico', 'small int', 'numero'] },
										float: { value: 'FLOAT', alias: ['decimal', 'real'] },
										boolean: { value: 'BOOLEAN', alias: ['boleano', 'true/false'] },
										date: { value: 'DATEONLY', alias: ['fecha'] },
										datetime: { value: 'DATETIME', alias: ['fechahora'] },
										blob: { value: 'BLOB', alias: ['binario', 'binary'] }
									};
									// expand type_map into fields_map

									_Object$keys(type_map).map(function (x) {
										var aliases = type_map[x].alias;
										aliases.push(x);
										aliases.map(function (y) {
											fields_map[y] = type_map[x].value;
										});
									});
									// parse nodes into tables with fields

									if (!(modelos.length > 0)) {
										_context10.next = 31;
										break;
									}

									modelos[0].attributes.map(function (x) {
										resp.attributes = _extends$1({}, resp.attributes, x);
									}); //modelos attributes

									_loop = function _loop(table) {
										var fields = {};table.attributes.map(function (x) {
											fields = _extends$1({}, fields, x);
										}); //table attributes
										resp.tables[table.text] = { fields: {} }; //create table
										tmp.sql_fields = [];
										for (var field in fields) {
											resp.tables[table.text].fields[field] = fields_map[fields[field]]; //assign field with mapped value
											tmp.sql_fields.push(field + ' ' + fields_map[fields[field]]);
										}
										resp.tables[table.text].sql = 'CREATE TABLE ' + table.text + '(' + tmp.sql_fields.join(',') + ')';
									};

									_iteratorNormalCompletion = true;
									_didIteratorError = false;
									_iteratorError = undefined;
									_context10.prev = 15;
									for (_iterator = _getIterator(modelos[0].nodes); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
										table = _step.value;

										_loop(table);
									}
									_context10.next = 23;
									break;

								case 19:
									_context10.prev = 19;
									_context10.t0 = _context10['catch'](15);
									_didIteratorError = true;
									_iteratorError = _context10.t0;

								case 23:
									_context10.prev = 23;
									_context10.prev = 24;

									if (!_iteratorNormalCompletion && _iterator.return) {
										_iterator.return();
									}

								case 26:
									_context10.prev = 26;

									if (!_didIteratorError) {
										_context10.next = 29;
										break;
									}

									throw _iteratorError;

								case 29:
									return _context10.finish(26);

								case 30:
									return _context10.finish(23);

								case 31:
									this.debug_timeEnd({ id: 'readModelos' });
									return _context10.abrupt('return', resp);

								case 33:
								case 'end':
									return _context10.stop();
							}
						}
					}, _callee10, this, [[15, 19, 23, 31], [24,, 26, 30]]);
				}));

				function _readModelos() {
					return _ref10.apply(this, arguments);
				}

				return _readModelos;
			}()

			/*
	  * Reads assets node, and returns object with info
	  */

		}, {
			key: '_readAssets',
			value: function () {
				var _ref11 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee11() {
					var resp, path, assets, sep, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, child, key, _loop2, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, i18n_node;

					return regenerator.wrap(function _callee11$(_context11) {
						while (1) {
							switch (_context11.prev = _context11.next) {
								case 0:
									resp = {}, path = require('path');

									this.debug('_readAssets');
									this.debug_time({ id: '_readAssets' });
									_context11.next = 5;
									return this.dsl_parser.getNodes({ text: 'assets', level: 2, icon: 'desktop_new', recurse: true });

								case 5:
									assets = _context11.sent;
									//nodes_raw:true
									sep = path.sep;
									//
									//this.debug('assets search',assets);

									if (!(assets.length > 0)) {
										_context11.next = 64;
										break;
									}

									assets = assets[0];
									// 15ms full
									_iteratorNormalCompletion2 = true;
									_didIteratorError2 = false;
									_iteratorError2 = undefined;
									_context11.prev = 12;
									_iterator2 = _getIterator(assets.nodes);

								case 14:
									if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
										_context11.next = 50;
										break;
									}

									child = _step2.value;

									if (!(child.nodes.length == 1 && child.nodes[0].image != '')) {
										_context11.next = 20;
										break;
									}

									// if there is just 1 grand-child and has an image defined
									resp[child.text.toLowerCase()] = {
										i18n: false,
										original: child.nodes[0].image,
										css: '~assets' + sep + path.basename(child.nodes[0].image),
										js: '~' + sep + 'assets' + sep + path.basename(child.nodes[0].image)
									};

									_context11.next = 47;
									break;

								case 20:
									if (!(child.nodes.length > 1)) {
										_context11.next = 46;
										break;
									}

									// if child has more than 1 child (grandchild), we'll assume its an image with i18n alternatives
									key = child.text.toLowerCase();

									resp[key] = { i18n: true, i18n_keys: [] };

									_loop2 = function _loop2(i18n_node) {
										// expand node attributes
										var attrs = {};
										i18n_node.attributes.map(function (x) {
											attrs = _extends$1({}, attrs, x);
										});
										if (attrs.idioma && i18n_node.image != '') {
											var lang = attrs.idioma.toLowerCase();
											resp[key].i18n_keys.push(lang);
											resp[key][lang] = _defineProperty$1({
												original: i18n_node.image,
												css: '~assets' + sep + path.basename(i18n_node.image)
											}, 'css', '~' + sep + 'assets' + sep + path.basename(i18n_node.image));
										}
									};

									_iteratorNormalCompletion3 = true;
									_didIteratorError3 = false;
									_iteratorError3 = undefined;
									_context11.prev = 27;
									for (_iterator3 = _getIterator(child.nodes); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
										i18n_node = _step3.value;

										_loop2(i18n_node);
									}
									// transform i18n_keys to list
									_context11.next = 35;
									break;

								case 31:
									_context11.prev = 31;
									_context11.t0 = _context11['catch'](27);
									_didIteratorError3 = true;
									_iteratorError3 = _context11.t0;

								case 35:
									_context11.prev = 35;
									_context11.prev = 36;

									if (!_iteratorNormalCompletion3 && _iterator3.return) {
										_iterator3.return();
									}

								case 38:
									_context11.prev = 38;

									if (!_didIteratorError3) {
										_context11.next = 41;
										break;
									}

									throw _iteratorError3;

								case 41:
									return _context11.finish(38);

								case 42:
									return _context11.finish(35);

								case 43:
									resp[key].i18n_keys = resp[key].i18n_keys.join(',');

									_context11.next = 47;
									break;

								case 46:
									if (child.link != '') {
										resp[child.text.toLowerCase()] = {
											original: child.link,
											css: '~assets' + sep + path.basename(child.link),
											js: '~' + sep + 'assets' + sep + path.basename(child.link)
										};
									}

								case 47:
									_iteratorNormalCompletion2 = true;
									_context11.next = 14;
									break;

								case 50:
									_context11.next = 56;
									break;

								case 52:
									_context11.prev = 52;
									_context11.t1 = _context11['catch'](12);
									_didIteratorError2 = true;
									_iteratorError2 = _context11.t1;

								case 56:
									_context11.prev = 56;
									_context11.prev = 57;

									if (!_iteratorNormalCompletion2 && _iterator2.return) {
										_iterator2.return();
									}

								case 59:
									_context11.prev = 59;

									if (!_didIteratorError2) {
										_context11.next = 62;
										break;
									}

									throw _iteratorError2;

								case 62:
									return _context11.finish(59);

								case 63:
									return _context11.finish(56);

								case 64:
									this.debug_timeEnd({ id: '_readAssets' });
									return _context11.abrupt('return', resp);

								case 66:
								case 'end':
									return _context11.stop();
							}
						}
					}, _callee11, this, [[12, 52, 56, 64], [27, 31, 35, 43], [36,, 38, 42], [57,, 59, 63]]);
				}));

				function _readAssets() {
					return _ref11.apply(this, arguments);
				}

				return _readAssets;
			}()

			/* 
	  * Grabs central node configuration information
	  */

		}, {
			key: '_readCentralConfig',
			value: function () {
				var _ref12 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee12() {
					var central, resp;
					return regenerator.wrap(function _callee12$(_context12) {
						while (1) {
							switch (_context12.prev = _context12.next) {
								case 0:
									this.debug('_readCentralConfig');
									_context12.next = 3;
									return this.dsl_parser.getNodes({ level: 1, recurse: false });

								case 3:
									central = _context12.sent;

									//this.debug('central search',central);
									// set defaults
									resp = {
										cloud: 'aws',
										type: 'simple',
										i18n: false,
										log: 'console',
										debug: false,
										deploy: false,
										static: false,
										timeout: 30,
										modelos: 'aurora',
										componente: false,
										'keep-alive': true,
										'keep-warm': true,
										port: 3000,
										git: true,
										idiomas: 'es',
										':cache': this.x_config.cache,
										':mode': 'spa',
										':keywords': '',
										':author': 'Punto Origen SpA',
										':license': 'MIT',
										':github': '',
										':version': '1.0.0',
										':description': central[0].text_note,
										default_face: central[0].font.face,
										default_size: central[0].font.size,
										apptitle: central[0].text
									};
									// overwrite default resp with info from central node

									central[0].attributes.map(function (x) {
										resp = _extends$1({}, resp, x);
									});
									if (resp.dominio) {
										resp.service_name = resp.dominio.replace(/\./g, '').toLowerCase();
									} else {
										resp.service_name = resp.apptitle;
									}
									if (!resp[':cache']) this.x_config.cache = false; // disables cache when processing nodes (@todo)
									// return
									return _context12.abrupt('return', resp);

								case 9:
								case 'end':
									return _context12.stop();
							}
						}
					}, _callee12, this);
				}));

				function _readCentralConfig() {
					return _ref12.apply(this, arguments);
				}

				return _readCentralConfig;
			}()

			/*
	  * Grabs the configuration from node named 'config'
	  */

		}, {
			key: '_readConfig',
			value: function () {
				var _ref13 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee13() {
					var resp, config_node, search, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, key, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, meta_child, path, dsl_folder, parent_folder, folder;

					return regenerator.wrap(function _callee13$(_context13) {
						while (1) {
							switch (_context13.prev = _context13.next) {
								case 0:
									this.debug('_readConfig');
									resp = { id: '', meta: [], seo: {} }, config_node = {};
									_context13.next = 4;
									return this.dsl_parser.getNodes({ text: 'config', level: '2', icon: 'desktop_new', recurse: true });

								case 4:
									search = _context13.sent;

									if (!(search.length > 0)) {
										_context13.next = 56;
										break;
									}

									config_node = search[0];
									// define default font_face
									resp.default_face = config_node.font.face;
									resp.default_size = config_node.font.size;
									// apply children nodes as keys/value for resp
									_iteratorNormalCompletion4 = true;
									_didIteratorError4 = false;
									_iteratorError4 = undefined;
									_context13.prev = 12;
									_iterator4 = _getIterator(config_node.nodes);

								case 14:
									if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
										_context13.next = 42;
										break;
									}

									key = _step4.value;

									if (!(key.text.toLowerCase() == 'meta')) {
										_context13.next = 38;
										break;
									}

									_iteratorNormalCompletion5 = true;
									_didIteratorError5 = false;
									_iteratorError5 = undefined;
									_context13.prev = 20;

									for (_iterator5 = _getIterator(key.nodes); !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
										meta_child = _step5.value;

										// apply grand_childs as meta tags
										if (meta_child.text.toLowerCase() == 'keywords') {
											resp.seo['keywords'] = meta_child.nodes.map(function (x) {
												return x.text;
											});
											resp.meta.push({ hid: this.hash(meta_child.nodes[0].text), name: 'keywords', content: resp.seo['keywords'].join(',') });
										} else if (meta_child.text.toLowerCase() == 'language') {
											resp.seo['language'] = meta_child.nodes[0].text;
											resp.meta.push({ hid: this.hash(meta_child.nodes[0].text), lang: meta_child.nodes[0].text });
										} else if (meta_child.text.toLowerCase() == 'charset') {
											resp.seo['charset'] = meta_child.nodes[0].text;
											resp.meta.push({ charset: meta_child.nodes[0].text });
										} else {
											resp.seo['charset'] = meta_child.nodes[0].text;
											if (meta_child.text.indexOf(':') != -1) {
												resp.meta.push({ property: meta_child.text, vmid: meta_child.text, content: meta_child.nodes[0].text });
											} else {
												resp.meta.push({ hid: this.hash(meta_child.nodes[0].text), name: meta_child.text, content: meta_child.nodes[0].text });
											}
										}
										//
									}
									_context13.next = 28;
									break;

								case 24:
									_context13.prev = 24;
									_context13.t0 = _context13['catch'](20);
									_didIteratorError5 = true;
									_iteratorError5 = _context13.t0;

								case 28:
									_context13.prev = 28;
									_context13.prev = 29;

									if (!_iteratorNormalCompletion5 && _iterator5.return) {
										_iterator5.return();
									}

								case 31:
									_context13.prev = 31;

									if (!_didIteratorError5) {
										_context13.next = 34;
										break;
									}

									throw _iteratorError5;

								case 34:
									return _context13.finish(31);

								case 35:
									return _context13.finish(28);

								case 36:
									_context13.next = 39;
									break;

								case 38:
									// apply keys as config keys (standard config node by content types)
									if (key.attributes.length > 0) {
										(function () {
											// @TODO: test
											var values = {};
											key.attributes.map(function (x) {
												values = _extends$1({}, values, x);
											});
											resp[key.text.toLowerCase().replace(/ /g, '')] = values;
										})();
									} else if (key.nodes.length > 0) {
										resp[key.text] = key.nodes[0].text;
									} else if (key.link != '') {
										resp[key.text] = key.link;
									}
									//

								case 39:
									_iteratorNormalCompletion4 = true;
									_context13.next = 14;
									break;

								case 42:
									_context13.next = 48;
									break;

								case 44:
									_context13.prev = 44;
									_context13.t1 = _context13['catch'](12);
									_didIteratorError4 = true;
									_iteratorError4 = _context13.t1;

								case 48:
									_context13.prev = 48;
									_context13.prev = 49;

									if (!_iteratorNormalCompletion4 && _iterator4.return) {
										_iterator4.return();
									}

								case 51:
									_context13.prev = 51;

									if (!_didIteratorError4) {
										_context13.next = 54;
										break;
									}

									throw _iteratorError4;

								case 54:
									return _context13.finish(51);

								case 55:
									return _context13.finish(48);

								case 56:
									// assign dsl file folder name+filename if node.name is not given
									if (!resp.name) {
										path = require('path');
										dsl_folder = path.dirname(path.resolve(this.x_flags.dsl));
										parent_folder = path.resolve(dsl_folder, '../');
										folder = dsl_folder.replace(parent_folder, '');

										resp.name = folder.replace('/', '').replace('\\', '') + '_' + path.basename(this.x_flags.dsl, '.dsl');
										//console.log('folder:',{folder,name:resp.name});
										//this.x_flags.dsl
									}
									// create id if not given
									if (!resp.id) resp.id = 'com.puntorigen.' + resp.name;
									return _context13.abrupt('return', resp);

								case 59:
								case 'end':
									return _context13.stop();
							}
						}
					}, _callee13, this, [[12, 44, 48, 56], [20, 24, 28, 36], [29,, 31, 35], [49,, 51, 55]]);
				}));

				function _readConfig() {
					return _ref13.apply(this, arguments);
				}

				return _readConfig;
			}()
		}]);

		return vue;
	}(concepto);

	return vue;

})));

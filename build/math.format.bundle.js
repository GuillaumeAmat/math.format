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
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = format;
	
	var _decimalAdjust = __webpack_require__(1);
	
	var _decimalAdjust2 = _interopRequireDefault(_decimalAdjust);
	
	var _toLocaleString = __webpack_require__(2);
	
	var _toLocaleString2 = _interopRequireDefault(_toLocaleString);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Number.prototype.toLocaleString = _toLocaleString2.default;
	
	var default_options = {
	    'round': false,
	    'floor': false,
	    'ceil': false,
	    'min': false,
	    'max': false,
	    'ifNaN': NaN, // Value to return if the new value is not a number
	    'ifEmpty': undefined, // Value to return if the original value is empty or undefined
	    'ifInfinity': Infinity, // Value to return if the original value is infinite
	    'preProcess': false, // String to be evaluated before any operation. The value has to be replaced by a "x" (eg: "x + 2")
	    'postProcess': false, // String to be evaluated after all the operations. The value has to be replaced by a "x" (eg: "x + 2")
	
	    // Output layout
	    // This parameters make the output type become string
	    'prefix': false, // Prepends a string to the output
	    'suffix': false, // Appends a string to the output
	    'toLocaleString': false // Calls the toLocaleString Javascript function on the output
	};
	
	function format(value, options) {
	    // Merge user options et default options
	    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
	        options = default_options;
	    } else {
	        for (var index in default_options) {
	            if (default_options.hasOwnProperty(index)) {
	                if (typeof options[index] === 'undefined') {
	                    options[index] = default_options[index];
	                }
	            }
	        }
	    }
	
	    if (typeof value === 'undefined' || value === '') {
	        return options.ifEmpty;
	    }
	
	    if ([Infinity, -Infinity].indexOf(value) !== -1) {
	        return options.ifInfinity;
	    }
	
	    if (typeof value === 'string') {
	        value = value.replace(/,/g, '.');
	    }
	
	    value = +value;
	
	    if (isNaN(value)) {
	        return options.ifNaN;
	    }
	
	    var new_value = value;
	
	    // PreProcess
	    if (options.preProcess !== false) {
	        new_value = eval(options.preProcess.replace(/x/g, new_value));
	
	        if (isNaN(new_value)) {
	            return options.ifNaN;
	        }
	    }
	
	    // Minimum
	    if (options.min !== false) {
	        options.min = +options.min;
	
	        if (isNaN(options.min)) {
	            return options.ifNaN;
	        }
	
	        if (new_value < options.min) {
	            new_value = options.min;
	        }
	    }
	
	    // Maximum
	    if (options.max !== false) {
	        options.max = +options.max;
	
	        if (isNaN(options.max)) {
	            return options.ifNaN;
	        }
	
	        if (new_value > options.max) {
	            new_value = options.max;
	        }
	    }
	
	    // Round
	    if (options.round !== false) {
	        options.round = +options.round;
	        new_value = Math.round10(new_value, options.round);
	
	        if (isNaN(new_value)) {
	            return options.ifNaN;
	        }
	    }
	
	    // Floor
	    if (options.floor !== false) {
	        options.floor = +options.floor;
	        new_value = Math.floor10(new_value, options.floor);
	
	        if (isNaN(new_value)) {
	            return options.ifNaN;
	        }
	    }
	
	    // Ceil
	    if (options.ceil !== false) {
	        options.ceil = +options.ceil;
	        new_value = Math.ceil10(new_value, options.ceil);
	
	        if (isNaN(new_value)) {
	            return options.ifNaN;
	        }
	    }
	
	    // PostProcess
	    if (options.postProcess !== false) {
	        new_value = eval(options.postProcess.replace(/x/g, new_value));
	
	        if (isNaN(new_value)) {
	            return options.ifNaN;
	        }
	    }
	
	    // If infinite
	    if ([Infinity, -Infinity].indexOf(value) != -1) {
	        return options.ifInfinity;
	    }
	
	    // Output layout
	
	    // ToLocaleString
	    if (options.toLocaleString === true) {
	        new_value = new_value.toLocaleString();
	    }
	
	    // Prefix
	    if (options.prefix !== false) {
	        new_value = options.prefix + new_value.toString();
	    }
	
	    // Suffix
	    if (options.suffix !== false) {
	        new_value = new_value.toString() + options.suffix;
	    }
	
	    return new_value;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = decimalAdjust;
	// Usefull methods from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
	/**
	 * Decimal adjustment of a number.
	 *
	 * @param {String} type - The type of adjustment.
	 * @param {Number} value - The number.
	 * @param {Integer} exp - The exponent (the 10 logarithm of the adjustment base).
	 * @returns {Number} - The adjusted value.
	 */
	function decimalAdjust(type, value, exp) {
	    // If the exp is undefined or zero...
	    if (typeof exp === 'undefined' || +exp === 0) {
	        return Math[type](value);
	    }
	    value = +value;
	    exp = +exp;
	    // If the value is not a number or the exp is not an integer...
	    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
	        return NaN;
	    }
	    // Shift
	    value = value.toString().split('e');
	    value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
	    // Shift back
	    value = value.toString().split('e');
	    return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
	}
	
	// Decimal round
	if (!Math.round10) {
	    Math.round10 = function (value, exp) {
	        return decimalAdjust('round', value, exp);
	    };
	}
	// Decimal floor
	if (!Math.floor10) {
	    Math.floor10 = function (value, exp) {
	        return decimalAdjust('floor', value, exp);
	    };
	}
	// Decimal ceil
	if (!Math.ceil10) {
	    Math.ceil10 = function (value, exp) {
	        return decimalAdjust('ceil', value, exp);
	    };
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = toLocaleString;
	
	/* Author: Tyler Stark
	 * Name: Localized Numbers Patch
	 * Url: https://github.com/TheIronDeveloper/NumberToLocaleStringPatch
	 * Purpose: Patch Legacy Browsers Usage of toLocaleString
	 **/
	
	// Helper Function to assist with formatting numbers
	var formatNumber = function formatNumber(number, delimiter, decimalDelimiter) {
	    var numberString = number.toString(),
	        splitNumber = numberString.split('.'),
	        splitFloats = '';
	
	    // Check if the number's precision is greater than the thousanths place.
	    // If so, build out the tail end of the formatted Number.
	    if (splitNumber[1] && splitNumber[1].length > 3) {
	        splitFloats = decimalDelimiter + number.toFixed(3).toString().split('.')[1];
	    }
	
	    return splitNumber[0].split(/(?=(?:\d{3})+$)/g).join(delimiter) + splitFloats;
	};
	
	function toLocaleString() {
	    var locale, navigatorLanguage, numberPrecision;
	
	    navigatorLanguage = navigator && navigator.language || 'en';
	    navigatorLanguage = navigatorLanguage.replace(/\-\w+$/g, '');
	    locale = arguments[0] || navigatorLanguage;
	
	    switch (locale) {
	        case 'en':
	            return formatNumber(this, ',', '.');
	        case 'au':
	            return formatNumber(this, ',', '.');
	        case 'gb':
	            return formatNumber(this, ',', '.');
	        case 'fr':
	            return formatNumber(this, ' ', ',');
	        case 'de':
	            return formatNumber(this, '.', ',');
	        case 'at':
	            return formatNumber(this, ',', '.');
	        case 'fi':
	            return formatNumber(this, ' ', ',');
	        case 'nl':
	            return formatNumber(this, '.', ',');
	        case 'fi':
	            return formatNumber(this, ',', '.');
	        case 'es':
	            return formatNumber(this, '.', ',');
	        case 'da':
	            return formatNumber(this, '.', ',');
	        case 'el':
	            return formatNumber(this, '.', ',');
	        case 'et':
	            return formatNumber(this, ' ', ',');
	        case 'it':
	            return formatNumber(this, '.', ',');
	        case 'pl':
	            return formatNumber(this, ' ', ',');
	        case 'sv':
	            return formatNumber(this, ' ', ',');
	        case 'ru':
	            return formatNumber(this, ' ', ',');
	        case 'no':
	            return formatNumber(this, ',', '.');
	    }
	
	    // Failsafe scenerio
	    return this.valueOf();
	};

/***/ }
/******/ ]);
//# sourceMappingURL=math.format.bundle.js.map
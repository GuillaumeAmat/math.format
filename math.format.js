(function(){

	var default_options = {
		
		'round': false,
		'floor': false,
		'ceil': false,
		'min': false,
		'max': false,
		'ifNaN': NaN, // Value to return if the new value is not a number
		'ifEmpty': undefined, // Value to return if the original value is empty or undefined
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
		if (typeof(options) != 'object') {
			
			options = default_options;
		}
		else {
			
			for (var index in default_options) {
				
				if (typeof(options[index]) == 'undefined') {
					
					options[index] = default_options[index];
				}
			}
		}
		
		
		if (typeof(value) == 'undefined' || value === '') {
			
			return options.ifEmpty;
		}
		
		if (typeof(value) == 'string') {

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

	if (!Math.format) {
		
		Math.format = format;
	}



	// Usefull methods from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
	/**
	 * Decimal adjustment of a number.
	 *
	 * @param	{String}	type	The type of adjustment.
	 * @param	{Number}	value	The number.
	 * @param	{Integer}	exp		The exponent (the 10 logarithm of the adjustment base).
	 * @returns	{Number}			The adjusted value.
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
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		// Shift back
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	// Decimal round
	if (!Math.round10) {
		Math.round10 = function(value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}
	// Decimal floor
	if (!Math.floor10) {
		Math.floor10 = function(value, exp) {
			return decimalAdjust('floor', value, exp);
		};
	}
	// Decimal ceil
	if (!Math.ceil10) {
		Math.ceil10 = function(value, exp) {
			return decimalAdjust('ceil', value, exp);
		};
	}

})();

(function(){

	var default_options = {
		
		'round': false,
		'floor': false,
		'ceil': false,
		'min': false,
		'max': false,
		'ifNaN': NaN, // Value to return if the new value is not a number
		'ifEmpty': undefined // Value to return if the original value is empty or undefined
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

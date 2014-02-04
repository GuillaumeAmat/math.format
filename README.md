Math.format
===========

Method to check values and format numbers.


# Usage

	Math.format(34.5279, {'round': -2}); // Returns 34.53
	Math.format(34.5279, {'round': 0}); // Returns 35
	Math.format(34.5279, {'round': 1}); // Returns 30
	
	Math.format(34.5279, {'floor': -2}); // Returns 34.52
	Math.format(34.5279, {'floor': 0}); // Returns 34
	Math.format(34.5279, {'floor': 1}); // Returns 30
	
	Math.format(34.5279, {'ceil': -2}); // Returns 34.53
	Math.format(34.5279, {'ceil': 0}); // Returns 35
	Math.format(34.5279, {'ceil': 1}); // Returns 40
	
	Math.format(34.5279, {'min': 40}); // Returns 40
	Math.format(34.5279, {'max': 30}); // Returns 30
	
	Math.format('a string', {'ifNaN': 'custom value'}); // Returns 'custom value'
	Math.format('', {'ifEmpty': 'custom value'}); // Returns 'custom value'
	Math.format(undefined, {'ifEmpty': 'custom value'}); // Returns 'custom value'
	
	Math.format(2, {'preProcess': '(x + 2) * 3'}); // Returns 12
	Math.format(2, {'postProcess': '(x + 2) * 3'}); // Returns 12
	Math.format(2, {'preProcess': '(x + 2) * 3', 'max': 10}); // Returns 10
	Math.format(2, {'postProcess': '(x + 2) * 3', 'max': 10}); // Returns 12
	
	Math.format(2, {'prefix': 'hello '}); // Returns 'hello 2'
	Math.format(2, {'suffix': ' times'}); // Returns '2 times'
	Math.format(2, {'prefix': 'hello ', 'suffix': ' times'}); // Returns 'hello 2 times'


# Unit tests

Unit tests are made with the [QUnit testing framework](http://qunitjs.com). They are usable by browsing the `test/index.html` page or using [Grunt](http://gruntjs.com).

To use Grunt, install the dependencies via [NodeJS](http://nodejs.org) and launch it

	npm install
	grunt


# Source

Some [very usefull functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) come from the marvelous [Mozilla Developer Network](https://developer.mozilla.org).
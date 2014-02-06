

test( "Round of 1111111.111111", function() {
	equal( Math.format(1111111.111111, { 'round': -2 }), 1111111.11, 'Round -2' );
	equal( Math.format(1111111.111111, { 'round': -1 }), 1111111.1, 'Round -1' );
	equal( Math.format(1111111.111111, { 'round': 0 }), 1111111, 'Round 0' );
	equal( Math.format(1111111.111111, { 'round': 1 }), 1111110, 'Round 1' );
	equal( Math.format(1111111.111111, { 'round': 2 }), 1111100, 'Round 2' );
});

test( "Round of -1111111.111111", function() {
	equal( Math.format(-1111111.111111, { 'round': -2 }), -1111111.11, 'Round -2' );
	equal( Math.format(-1111111.111111, { 'round': -1 }), -1111111.1, 'Round -1' );
	equal( Math.format(-1111111.111111, { 'round': 0 }), -1111111, 'Round 0' );
	equal( Math.format(-1111111.111111, { 'round': 1 }), -1111110, 'Round 1' );
	equal( Math.format(-1111111.111111, { 'round': 2 }), -1111100, 'Round 2' );
});

test( "Round of 9999999.999999", function() {
	equal( Math.format(9999999.999999, { 'round': -2 }), 10000000, 'Round -2' );
	equal( Math.format(9999999.999999, { 'round': -1 }), 10000000, 'Round -1' );
	equal( Math.format(9999999.999999, { 'round': 0 }), 10000000, 'Round 0' );
	equal( Math.format(9999999.999999, { 'round': 1 }), 10000000, 'Round 1' );
	equal( Math.format(9999999.999999, { 'round': 2 }), 10000000, 'Round 2' );
});

test( "Round of -9999999.999999", function() {
	equal( Math.format(-9999999.999999, { 'round': -2 }), -10000000, 'Round -2' );
	equal( Math.format(-9999999.999999, { 'round': -1 }), -10000000, 'Round -1' );
	equal( Math.format(-9999999.999999, { 'round': 0 }), -10000000, 'Round 0' );
	equal( Math.format(-9999999.999999, { 'round': 1 }), -10000000, 'Round 1' );
	equal( Math.format(-9999999.999999, { 'round': 2 }), -10000000, 'Round 2' );
});




test( "Floor of 1111111.111111", function() {
	equal( Math.format(1111111.111111, { 'floor': -2 }), 1111111.11, 'Floor -2' );
	equal( Math.format(1111111.111111, { 'floor': -1 }), 1111111.1, 'Floor -1' );
	equal( Math.format(1111111.111111, { 'floor': 0 }), 1111111, 'Floor 0' );
	equal( Math.format(1111111.111111, { 'floor': 1 }), 1111110, 'Floor 1' );
	equal( Math.format(1111111.111111, { 'floor': 2 }), 1111100, 'Floor 2' );
});

test( "Floor of -1111111.111111", function() {
	equal( Math.format(-1111111.111111, { 'floor': -2 }), -1111111.12, 'Floor -2' );
	equal( Math.format(-1111111.111111, { 'floor': -1 }), -1111111.2, 'Floor -1' );
	equal( Math.format(-1111111.111111, { 'floor': 0 }), -1111112, 'Floor 0' );
	equal( Math.format(-1111111.111111, { 'floor': 1 }), -1111120, 'Floor 1' );
	equal( Math.format(-1111111.111111, { 'floor': 2 }), -1111200, 'Floor 2' );
});

test( "Floor of 9999999.999999", function() {
	equal( Math.format(9999999.999999, { 'floor': -2 }), 9999999.99, 'Floor -2' );
	equal( Math.format(9999999.999999, { 'floor': -1 }), 9999999.9, 'Floor -1' );
	equal( Math.format(9999999.999999, { 'floor': 0 }), 9999999, 'Floor 0' );
	equal( Math.format(9999999.999999, { 'floor': 1 }), 9999990, 'Floor 1' );
	equal( Math.format(9999999.999999, { 'floor': 2 }), 9999900, 'Floor 2' );
});

test( "Floor of -9999999.999999", function() {
	equal( Math.format(-9999999.999999, { 'floor': -2 }), -10000000, 'Floor -2' );
	equal( Math.format(-9999999.999999, { 'floor': -1 }), -10000000, 'Floor -1' );
	equal( Math.format(-9999999.999999, { 'floor': 0 }), -10000000, 'Floor 0' );
	equal( Math.format(-9999999.999999, { 'floor': 1 }), -10000000, 'Floor 1' );
	equal( Math.format(-9999999.999999, { 'floor': 2 }), -10000000, 'Floor 2' );
});




test( "Ceil of 1111111.111111", function() {
	equal( Math.format(1111111.111111, { 'ceil': -2 }), 1111111.12, 'Ceil -2' );
	equal( Math.format(1111111.111111, { 'ceil': -1 }), 1111111.2, 'Ceil -1' );
	equal( Math.format(1111111.111111, { 'ceil': 0 }), 1111112, 'Ceil 0' );
	equal( Math.format(1111111.111111, { 'ceil': 1 }), 1111120, 'Ceil 1' );
	equal( Math.format(1111111.111111, { 'ceil': 2 }), 1111200, 'Ceil 2' );
});

test( "Ceil of -1111111.111111", function() {
	equal( Math.format(-1111111.111111, { 'ceil': -2 }), -1111111.11, 'Ceil -2' );
	equal( Math.format(-1111111.111111, { 'ceil': -1 }), -1111111.1, 'Ceil -1' );
	equal( Math.format(-1111111.111111, { 'ceil': 0 }), -1111111, 'Ceil 0' );
	equal( Math.format(-1111111.111111, { 'ceil': 1 }), -1111110, 'Ceil 1' );
	equal( Math.format(-1111111.111111, { 'ceil': 2 }), -1111100, 'Ceil 2' );
});

test( "Ceil of 9999999.999999", function() {
	equal( Math.format(9999999.999999, { 'ceil': -2 }), 10000000, 'Ceil -2' );
	equal( Math.format(9999999.999999, { 'ceil': -1 }), 10000000, 'Ceil -1' );
	equal( Math.format(9999999.999999, { 'ceil': 0 }), 10000000, 'Ceil 0' );
	equal( Math.format(9999999.999999, { 'ceil': 1 }), 10000000, 'Ceil 1' );
	equal( Math.format(9999999.999999, { 'ceil': 2 }), 10000000, 'Ceil 2' );
});

test( "Ceil of -9999999.999999", function() {
	equal( Math.format(-9999999.999999, { 'ceil': -2 }), -9999999.99, 'Ceil -2' );
	equal( Math.format(-9999999.999999, { 'ceil': -1 }), -9999999.9, 'Ceil -1' );
	equal( Math.format(-9999999.999999, { 'ceil': 0 }), -9999999, 'Ceil 0' );
	equal( Math.format(-9999999.999999, { 'ceil': 1 }), -9999990, 'Ceil 1' );
	equal( Math.format(-9999999.999999, { 'ceil': 2 }), -9999900, 'Ceil 2' );
});




test( "Maximum", function() {
	equal( Math.format(1111111.111111, { 'round': -2, 'max': 100 }), 100, 'With round' );
	equal( Math.format(1111111.111111, { 'floor': -2, 'max': 100 }), 100, 'With floor' );
	equal( Math.format(1111111.111111, { 'ceil': -2, 'max': 100 }), 100, 'With ceil' );
	equal( Math.format(1111111.111111, { 'max': 100 }), 100, 'Without options' );
});

test( "Minimum", function() {
	equal( Math.format(1111111.111111, { 'round': -2, 'min': 9999999 }), 9999999, 'With round' );
	equal( Math.format(1111111.111111, { 'floor': -2, 'min': 9999999 }), 9999999, 'With floor' );
	equal( Math.format(1111111.111111, { 'ceil': -2, 'min': 9999999 }), 9999999, 'With ceil' );
	equal( Math.format(1111111.111111, { 'min': 9999999 }), 9999999, 'Without options' );
});

test( "If not a number", function() {
	equal( Math.format('string', { 'round': -2, 'ifNaN': 'test ok' }), 'test ok', 'With round' );
	equal( Math.format('string', { 'floor': -2, 'ifNaN': 'test ok' }), 'test ok', 'With floor' );
	equal( Math.format('string', { 'ceil': -2, 'ifNaN': 'test ok' }), 'test ok', 'With ceil' );
	equal( Math.format('string', { 'ifNaN': 'test ok' }), 'test ok', 'Without options' );
});

test( "If empty", function() {
	equal( Math.format('', { 'round': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With round' );
	equal( Math.format('', { 'floor': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With floor' );
	equal( Math.format('', { 'ceil': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With ceil' );
	equal( Math.format('', { 'ifEmpty': 'test ok' }), 'test ok', 'Without options' );
});

test( "If undefined", function() {
	equal( Math.format(undefined, { 'round': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With round' );
	equal( Math.format(undefined, { 'floor': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With floor' );
	equal( Math.format(undefined, { 'ceil': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With ceil' );
	equal( Math.format(undefined, { 'ifEmpty': 'test ok' }), 'test ok', 'Without options' );
});

test( "If infinite", function() {
	equal( Math.format(Infinity, { 'round': -2, 'ifInfinity': 'test ok' }), 'test ok', 'With round' );
	equal( Math.format(Infinity, { 'floor': -2, 'ifInfinity': 'test ok' }), 'test ok', 'With floor' );
	equal( Math.format(Infinity, { 'ceil': -2, 'ifInfinity': 'test ok' }), 'test ok', 'With ceil' );
	equal( Math.format(Infinity, { 'ifInfinity': 'test ok' }), 'test ok', 'Without options' );
});

test( "Pre-process", function() {
	equal( Math.format(2, { 'preProcess': 'x + 2' }), 4, 'Addition' );
	equal( Math.format(2, { 'preProcess': 'x - 2' }), 0, 'Soustraction' );
	equal( Math.format(2, { 'preProcess': 'x * 2' }), 4, 'Multiplication' );
	equal( Math.format(2, { 'preProcess': 'x / 2' }), 1, 'Division' );
	equal( Math.format(2, { 'preProcess': '(x + 2) * 2' }), 8, 'Complex' );
});

test( "Post-process", function() {
	equal( Math.format(2, { 'postProcess': 'x + 2' }), 4, 'Addition' );
	equal( Math.format(2, { 'postProcess': 'x - 2' }), 0, 'Soustraction' );
	equal( Math.format(2, { 'postProcess': 'x * 2' }), 4, 'Multiplication' );
	equal( Math.format(2, { 'postProcess': 'x / 2' }), 1, 'Division' );
	equal( Math.format(2, { 'postProcess': '(x + 2) * 2' }), 8, 'Complex' );
});

test( "Prefix and suffix", function() {
	equal( Math.format(2, { 'prefix': 'hello ' }), 'hello 2', 'Prefix' );
	equal( Math.format(2, { 'suffix': ' times' }), '2 times', 'Suffix' );
	equal( Math.format(2, { 'prefix': 'hello ', 'suffix': ' times' }), 'hello 2 times', 'Prefix and suffix' );
});


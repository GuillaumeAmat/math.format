
import 'babel-polyfill';
import assert from 'assert';

import f from '../build/math.format.bundle';



describe('Math.format', () => {
    describe('Round', () => {
        it('Round of 1111111.111111', () => {
        	assert.equal(Math.format(1111111.111111, { 'round': -2 }), 1111111.11, 'Round -2');
        	assert.equal(Math.format(1111111.111111, { 'round': -1 }), 1111111.1, 'Round -1');
        	assert.equal(Math.format(1111111.111111, { 'round': 0 }), 1111111, 'Round 0');
        	assert.equal(Math.format(1111111.111111, { 'round': 1 }), 1111110, 'Round 1');
        	assert.equal(Math.format(1111111.111111, { 'round': 2 }), 1111100, 'Round 2');
        });

        it('Round of -1111111.111111', () => {
        	assert.equal(Math.format(-1111111.111111, { 'round': -2 }), -1111111.11, 'Round -2');
        	assert.equal(Math.format(-1111111.111111, { 'round': -1 }), -1111111.1, 'Round -1');
        	assert.equal(Math.format(-1111111.111111, { 'round': 0 }), -1111111, 'Round 0');
        	assert.equal(Math.format(-1111111.111111, { 'round': 1 }), -1111110, 'Round 1');
        	assert.equal(Math.format(-1111111.111111, { 'round': 2 }), -1111100, 'Round 2');
        });

        it('Round of 9999999.999999', () => {
        	assert.equal(Math.format(9999999.999999, { 'round': -2 }), 10000000, 'Round -2');
        	assert.equal(Math.format(9999999.999999, { 'round': -1 }), 10000000, 'Round -1');
        	assert.equal(Math.format(9999999.999999, { 'round': 0 }), 10000000, 'Round 0');
        	assert.equal(Math.format(9999999.999999, { 'round': 1 }), 10000000, 'Round 1');
        	assert.equal(Math.format(9999999.999999, { 'round': 2 }), 10000000, 'Round 2');
        });

        it('Round of -9999999.999999', () => {
        	assert.equal(Math.format(-9999999.999999, { 'round': -2 }), -10000000, 'Round -2');
        	assert.equal(Math.format(-9999999.999999, { 'round': -1 }), -10000000, 'Round -1');
        	assert.equal(Math.format(-9999999.999999, { 'round': 0 }), -10000000, 'Round 0');
        	assert.equal(Math.format(-9999999.999999, { 'round': 1 }), -10000000, 'Round 1');
        	assert.equal(Math.format(-9999999.999999, { 'round': 2 }), -10000000, 'Round 2');
        });
    });

    describe('Floor', () => {
        it('Floor of 1111111.111111', () => {
        	assert.equal(Math.format(1111111.111111, { 'floor': -2 }), 1111111.11, 'Floor -2');
        	assert.equal(Math.format(1111111.111111, { 'floor': -1 }), 1111111.1, 'Floor -1');
        	assert.equal(Math.format(1111111.111111, { 'floor': 0 }), 1111111, 'Floor 0');
        	assert.equal(Math.format(1111111.111111, { 'floor': 1 }), 1111110, 'Floor 1');
        	assert.equal(Math.format(1111111.111111, { 'floor': 2 }), 1111100, 'Floor 2');
        });

        it('Floor of -1111111.111111', () => {
        	assert.equal(Math.format(-1111111.111111, { 'floor': -2 }), -1111111.12, 'Floor -2');
        	assert.equal(Math.format(-1111111.111111, { 'floor': -1 }), -1111111.2, 'Floor -1');
        	assert.equal(Math.format(-1111111.111111, { 'floor': 0 }), -1111112, 'Floor 0');
        	assert.equal(Math.format(-1111111.111111, { 'floor': 1 }), -1111120, 'Floor 1');
        	assert.equal(Math.format(-1111111.111111, { 'floor': 2 }), -1111200, 'Floor 2');
        });

        it('Floor of 9999999.999999', () => {
        	assert.equal(Math.format(9999999.999999, { 'floor': -2 }), 9999999.99, 'Floor -2');
        	assert.equal(Math.format(9999999.999999, { 'floor': -1 }), 9999999.9, 'Floor -1');
        	assert.equal(Math.format(9999999.999999, { 'floor': 0 }), 9999999, 'Floor 0');
        	assert.equal(Math.format(9999999.999999, { 'floor': 1 }), 9999990, 'Floor 1');
        	assert.equal(Math.format(9999999.999999, { 'floor': 2 }), 9999900, 'Floor 2');
        });

        it('Floor of -9999999.999999', () => {
        	assert.equal(Math.format(-9999999.999999, { 'floor': -2 }), -10000000, 'Floor -2');
        	assert.equal(Math.format(-9999999.999999, { 'floor': -1 }), -10000000, 'Floor -1');
        	assert.equal(Math.format(-9999999.999999, { 'floor': 0 }), -10000000, 'Floor 0');
        	assert.equal(Math.format(-9999999.999999, { 'floor': 1 }), -10000000, 'Floor 1');
        	assert.equal(Math.format(-9999999.999999, { 'floor': 2 }), -10000000, 'Floor 2');
        });
    });

    describe('Ceil', () => {
        it('Ceil of 1111111.111111', () => {
        	assert.equal(Math.format(1111111.111111, { 'ceil': -2 }), 1111111.12, 'Ceil -2');
        	assert.equal(Math.format(1111111.111111, { 'ceil': -1 }), 1111111.2, 'Ceil -1');
        	assert.equal(Math.format(1111111.111111, { 'ceil': 0 }), 1111112, 'Ceil 0');
        	assert.equal(Math.format(1111111.111111, { 'ceil': 1 }), 1111120, 'Ceil 1');
        	assert.equal(Math.format(1111111.111111, { 'ceil': 2 }), 1111200, 'Ceil 2');
        });

        it('Ceil of -1111111.111111', () => {
        	assert.equal(Math.format(-1111111.111111, { 'ceil': -2 }), -1111111.11, 'Ceil -2');
        	assert.equal(Math.format(-1111111.111111, { 'ceil': -1 }), -1111111.1, 'Ceil -1');
        	assert.equal(Math.format(-1111111.111111, { 'ceil': 0 }), -1111111, 'Ceil 0');
        	assert.equal(Math.format(-1111111.111111, { 'ceil': 1 }), -1111110, 'Ceil 1');
        	assert.equal(Math.format(-1111111.111111, { 'ceil': 2 }), -1111100, 'Ceil 2');
        });

        it('Ceil of 9999999.999999', () => {
        	assert.equal(Math.format(9999999.999999, { 'ceil': -2 }), 10000000, 'Ceil -2');
        	assert.equal(Math.format(9999999.999999, { 'ceil': -1 }), 10000000, 'Ceil -1');
        	assert.equal(Math.format(9999999.999999, { 'ceil': 0 }), 10000000, 'Ceil 0');
        	assert.equal(Math.format(9999999.999999, { 'ceil': 1 }), 10000000, 'Ceil 1');
        	assert.equal(Math.format(9999999.999999, { 'ceil': 2 }), 10000000, 'Ceil 2');
        });

        it('Ceil of -9999999.999999', () => {
        	assert.equal(Math.format(-9999999.999999, { 'ceil': -2 }), -9999999.99, 'Ceil -2');
        	assert.equal(Math.format(-9999999.999999, { 'ceil': -1 }), -9999999.9, 'Ceil -1');
        	assert.equal(Math.format(-9999999.999999, { 'ceil': 0 }), -9999999, 'Ceil 0');
        	assert.equal(Math.format(-9999999.999999, { 'ceil': 1 }), -9999990, 'Ceil 1');
        	assert.equal(Math.format(-9999999.999999, { 'ceil': 2 }), -9999900, 'Ceil 2');
        });
    });

    describe('Min/Max', () => {
        it('Maximum', () => {
        	assert.equal(Math.format(1111111.111111, { 'round': -2, 'max': 100 }), 100, 'With round');
        	assert.equal(Math.format(1111111.111111, { 'floor': -2, 'max': 100 }), 100, 'With floor');
        	assert.equal(Math.format(1111111.111111, { 'ceil': -2, 'max': 100 }), 100, 'With ceil');
        	assert.equal(Math.format(1111111.111111, { 'max': 100 }), 100, 'Without options');
        });

        it('Minimum', () => {
        	assert.equal(Math.format(1111111.111111, { 'round': -2, 'min': 9999999 }), 9999999, 'With round');
        	assert.equal(Math.format(1111111.111111, { 'floor': -2, 'min': 9999999 }), 9999999, 'With floor');
        	assert.equal(Math.format(1111111.111111, { 'ceil': -2, 'min': 9999999 }), 9999999, 'With ceil');
        	assert.equal(Math.format(1111111.111111, { 'min': 9999999 }), 9999999, 'Without options');
        });
    });

    describe('Value', () => {
        it('If not a number', () => {
        	assert.equal(Math.format('string', { 'round': -2, 'ifNaN': 'test ok' }), 'test ok', 'With round');
        	assert.equal(Math.format('string', { 'floor': -2, 'ifNaN': 'test ok' }), 'test ok', 'With floor');
        	assert.equal(Math.format('string', { 'ceil': -2, 'ifNaN': 'test ok' }), 'test ok', 'With ceil');
        	assert.equal(Math.format('string', { 'ifNaN': 'test ok' }), 'test ok', 'Without options');
        });

        it('If empty', () => {
        	assert.equal(Math.format('', { 'round': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With round');
        	assert.equal(Math.format('', { 'floor': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With floor');
        	assert.equal(Math.format('', { 'ceil': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With ceil');
        	assert.equal(Math.format('', { 'ifEmpty': 'test ok' }), 'test ok', 'Without options');
        });

        it('If undefined', () => {
        	assert.equal(Math.format(undefined, { 'round': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With round');
        	assert.equal(Math.format(undefined, { 'floor': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With floor');
        	assert.equal(Math.format(undefined, { 'ceil': -2, 'ifEmpty': 'test ok' }), 'test ok', 'With ceil');
        	assert.equal(Math.format(undefined, { 'ifEmpty': 'test ok' }), 'test ok', 'Without options');
        });

        it('If infinite', () => {
        	assert.equal(Math.format(Infinity, { 'round': -2, 'ifInfinity': 'test ok' }), 'test ok', 'With round');
        	assert.equal(Math.format(Infinity, { 'floor': -2, 'ifInfinity': 'test ok' }), 'test ok', 'With floor');
        	assert.equal(Math.format(Infinity, { 'ceil': -2, 'ifInfinity': 'test ok' }), 'test ok', 'With ceil');
        	assert.equal(Math.format(Infinity, { 'ifInfinity': 'test ok' }), 'test ok', 'Without options');
        });

        it('Pre-process', () => {
        	assert.equal(Math.format(2, { 'preProcess': 'x + 2' }), 4, 'Addition');
        	assert.equal(Math.format(2, { 'preProcess': 'x - 2' }), 0, 'Soustraction');
        	assert.equal(Math.format(2, { 'preProcess': 'x * 2' }), 4, 'Multiplication');
        	assert.equal(Math.format(2, { 'preProcess': 'x / 2' }), 1, 'Division');
        	assert.equal(Math.format(2, { 'preProcess': '(x + 2) * 2' }), 8, 'Complex');
        });

        it('Post-process', () => {
        	assert.equal(Math.format(2, { 'postProcess': 'x + 2' }), 4, 'Addition');
        	assert.equal(Math.format(2, { 'postProcess': 'x - 2' }), 0, 'Soustraction');
        	assert.equal(Math.format(2, { 'postProcess': 'x * 2' }), 4, 'Multiplication');
        	assert.equal(Math.format(2, { 'postProcess': 'x / 2' }), 1, 'Division');
        	assert.equal(Math.format(2, { 'postProcess': '(x + 2) * 2' }), 8, 'Complex');
        });
    });

    describe('Display', () => {
        it('Prefix and suffix', () => {
        	assert.equal(Math.format(2, { 'prefix': 'hello ' }), 'hello 2', 'Prefix');
        	assert.equal(Math.format(2, { 'suffix': ' times' }), '2 times', 'Suffix');
        	assert.equal(Math.format(2, { 'prefix': 'hello ', 'suffix': ' times' }), 'hello 2 times', 'Prefix and suffix');
        });
    });
});

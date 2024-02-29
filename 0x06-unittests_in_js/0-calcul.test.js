const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the correct sum integer inputs', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return the correct sum when one input is a float', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return the correct sum when both inputs are floats', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return the correct sum when both inputs are floats and rounded up', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
})
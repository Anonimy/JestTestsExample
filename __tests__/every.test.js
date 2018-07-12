'use strict';

import every from '../src/every';

describe("# EVERY", () => {
    it('should be a function', () => {
        expect({}.toString.call(every)).toBe('[object Function]');
    });

    it('should throw a TypeError if no second argument is provided', () => {
        expect(() => every([1, 2, 3])).toThrow(/is not a function/gi);
        expect(() => every()).toThrow(TypeError);
    });

    it('should properly pass the arguments to the callback function', () => {
        expect(every([2, 1, 0], value => !!value)).toBe(false);
        expect(every([1, 2, 3], (value, index) => (value === index + 1))).toBe(true);
        expect(every([1, 2, 3], (value, index, array) => (value === array[index]))).toBe(true);
    });

    it('should work properly if a string is given as first argument', () => {
        expect(every('abc', value => !!value)).toBe(true);
    });

    it('should bind a "this" to the callback function if a third argument is provided', () => {
        expect(every([1, 2, 3], function () {
            return this;
        }, true)).toBe(true);
        expect(every([1, 2, 3], function () {
            return this;
        }, 'abcd')).toBe(true);
    });
});
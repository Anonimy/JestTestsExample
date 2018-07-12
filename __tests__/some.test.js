'use strict';

import some from '../some';

describe("# SOME", () => {
    it('should be a function', () => {
        expect({}.toString.call(some)).toBe('[object Function]');
    });

    it('should throw a TypeError if no second argument is provided', () => {
        expect(() => some([1, 2, 3])).toThrow(/is not a function/gi);
        expect(() => some()).toThrow(TypeError);
    });

    it('should properly pass the arguments to the callback function', () => {
        expect(some([2, 1, 0], value => !!value)).toBe(true);
        expect(some([1, 2, 3], (value, index) => (value === index + 1))).toBe(true);
        expect(some([1, 2, 3], (value, index, array) => (value === 4))).toBe(false);
    });

    it('should work properly if a string is given as first argument', () => {
        expect(some('abc', value => !!value)).toBe(true);
    });

    it('should bind a "this" to the callback function if a third argument is provided', () => {
        expect(some([1, 2, 3], function (value) {
            return (this || value === 4);
        }, false)).toBe(false);
    });
});
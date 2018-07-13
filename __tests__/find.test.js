'use strict';

import find from '../src/find';

describe('# FIND', () => {
    it('should be a function', () => {
        expect({}.toString.call(find)).toBe('[object Function]');
    });

    it('should throw a TypeError if the second argument is not a function', () => {
        expect(() => find(2)).toThrow(/is not a function/gi);
        expect(() => find([1, 2, 3], 'abcd')).toThrow(TypeError);
    });

    it('should return the value when the given function returns true', () => {
        expect(find([1, 2, 3], value => !!value)).toBe(1);
        expect(find([3, 4, 5], value => value % 2 === 0)).toBe(4);
    });

    it('should return undefined if no element satisfy the given function', () => {
        expect(find([1, 2], value => value === 3)).toBe(undefined);
    });

    it('should pass the parameters "value", "index" and "array" to the callback function', () => {
        var arr = [1, 2];
        expect(find(arr, (value, index) => !!index)).toBe(2);
        expect(find(arr, (value, index, array) => arr === array)).toBe(1);
    });

    it('should work properly with strings', () => {
        expect(find('abcd', value => !!value)).toBe('a');
    });

    it('should bind "this" to the callback function if a third parameter is provided', () => {
        expect(find([1, 2], function () {
            return this;
        }, true)).toBe(1);
        expect(find([1, 2], function (value) {
            return value === this;
        }, 3)).toBe(undefined);
    });
});
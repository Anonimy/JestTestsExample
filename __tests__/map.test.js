'use strict';

import map from '../map';

describe('# MAP', () => {
    it('should be a function', () => {
        expect({}.toString.call(map)).toBe('[object Function]');
    });

    it('should return an empty array if there\'s no arguments informed', () => {
        expect(map()).toEqual([]);
    });

    it('should return a copy of the given array when there\'s no second parameter informed', () => {
        expect(map([1, 2, 3])).toEqual([1, 2, 3]);
        expect(map([4, 5, 6])).toEqual([4, 5, 6]);
    });

    it('should not return the same reference of the array', () => {
        const arr = [1, 2, 3];
        expect(map(arr)).not.toBe(arr);
    });

    it('should return an empty array if the first argument is not iterable', () => {
        expect(map(2)).toEqual([]);
        expect(map(2, value => value * 2)).toEqual([]);
    });

    it('should throw an error in case the second argument is not undefined nor a function', () => {
        expect(() => map([], 1)).toThrow(/is not a function/gi);
        expect(() => map([], 1)).toThrow(TypeError);
    });

    it('should repass the parameters "value", "index" and "array" to the callback function', () => {
        const arr = [1, 2, 3];
        expect(map(arr, value => value)).toEqual([1, 2, 3]);
        expect(map(arr, (value, index) => index)).toEqual([0, 1, 2]);
        expect(map(arr, (index, value, array) => array)).toEqual([arr, arr, arr]);
    });

    it('should apply the given callback to all elements of the array', () => {
        expect(map([1, 2, 3], value => value * 2)).toEqual([2, 4, 6]);
        expect(map([1, 2, 3], value => value % 2)).toEqual([1, 0, 1]);
    });

    it('should work properly in case a string is given as first argument', () => {
        expect(map('abcd')).toEqual(['a', 'b', 'c', 'd']);
        expect(map('abcd', value => value + 'a')).toEqual(['aa', 'ba', 'ca', 'da']);
    });

    it('should bind a "this" property to the callback function in case a third argument is given', () => {
        expect(map('d', function (value) {
            return this + value;
        }, 'abc')).toEqual(['abcd']);
    });
});
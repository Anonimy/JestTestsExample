'use strict';

import filter from '../filter';

describe('# FILTER', () => {
    it('should be a function', () => {
        expect({}.toString.call(filter)).toBe('[object Function]');
    });

    it('should return an empty array if there\'s no arguments informed', () => {
        expect(filter()).toEqual([]);
    });

    it('should return a new array containing all truthy elements when no second argument is provided', () => {
        expect(filter([0, 2, 3])).toEqual([2, 3]);
        expect(filter([4, 5, 6])).toEqual([4, 5, 6]);
    });

    it('should not return the same reference of the array', () => {
        const arr = [1, 2, 3];
        expect(filter(arr)).not.toBe(arr);
    });

    it('should return an empty array if the first argument is not iterable', () => {
        expect(filter(2)).toEqual([]);
        expect(filter(2, value => value == 2)).toEqual([]);
    });

    it('should throw an error in case the second argument is not undefined nor a function', () => {
        expect(() => filter([], 1)).toThrow(/is not a function/gi);
        expect(() => filter([], null)).toThrow(TypeError);
        expect(filter([1], undefined)).toEqual([1]);
    });

    it('should repass the parameters "value", "index" and "array" to the callback function', () => {
        const arr = [1, 2, 3];
        expect(filter(arr, value => value === 2)).toEqual([2]);
        expect(filter(arr, (value, index) => index === 2)).toEqual([3]);
        expect(filter(arr, (index, value, array) => array === arr)).toEqual([1, 2, 3]);
    });

    it('should call the given function properly and return all elements when the callback returns true', () => {
        const arr = [0, 1, 2, 3, 4];
        expect(filter(arr, value => value % 2 !== 0)).toEqual([1, 3]);
        expect(filter(arr, value => value % 2 === 0)).toEqual([0, 2, 4]);
        expect(filter(arr, () => false)).toEqual([]);
    });

    it('should work properly in case a string is given as first argument', () => {
        expect(filter('abcd')).toEqual(['a', 'b', 'c', 'd']);
        expect(filter('abcd', value => value === 'a')).toEqual(['a']);
    });

    it('should bind a "this" property to the callback function in case a third argument is given', () => {
        expect(filter('d', function (value) {
            return this + value === 'abcd';
        }, 'abc')).toEqual(['d']);
    });
});
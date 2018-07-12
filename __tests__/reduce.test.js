'use strict';

import reduce from '../reduce';

describe('# REDUCE', () => {
    it('should be a function', () => {
        expect({}.toString.call(reduce)).toBe('[object Function]');
    });

    it('should throw a TypeError if the second argument is not a function', () => {
        expect(() => reduce('abcd')).toThrow(/is not a function/gi);
        expect(() => reduce([1, 2, 3])).toThrow(TypeError);
    });

    it('should return the accumulated value returned by a given callback function', () => {
        expect(reduce([1, 2, 3], (acc, value) => acc + value)).toBe(6);
        expect(reduce([0, 1, 2], (acc, value) => acc + value)).toBe(3);
    });

    it('should receive a third argument as an initial value to "accumulated"', () => {
        expect(reduce([1, 2, 3], (acc, value) => acc + value, 1)).toBe(7);
    });

    it('should pass the arguments "accumulated", "value", "index" and "array" to callback', () => {
        const arr = [1, 2, 3];
        expect(reduce(arr, (acc, value, index) => {
            acc.push(index);
            return acc;
        }, [])).toEqual([0, 1, 2]);
        expect(reduce(arr, (acc, value, index, arr) => {
            acc.push(arr);
            return acc;
        }, [])).toEqual([arr, arr, arr]);
    });

    it('should work with strings as well', () => {
        expect(reduce('abc', (acc, value) => acc + value, 'd')).toBe('dabc');
    });
});
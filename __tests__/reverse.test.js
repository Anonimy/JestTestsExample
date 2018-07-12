'use strict';

import reverse from '../src/reverse';

describe('# REVERSE', () => {
    it('should be a function', () => {
        expect({}.toString.call(reverse)).toBe('[object Function]');
    });

    it('should return the same reference of the first argument', () => {
        const arr = [1, 2, 3];
        expect(reverse(arr)).toBe(arr);
    });

    it('should invert the array', () => {
        expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
        expect(reverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    });

    it('should throw an error if the first argument is not an array', () => {
        expect(() => reverse('abcd')).toThrow(/is not an array/gi);
        expect(() => reverse('abcd')).toThrow(TypeError);
    });
});
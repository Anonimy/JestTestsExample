'use strict';

export default (array = [], callback = value => !!value, thisArg) => {
    let finalArray = [];
    if ({}.toString.call(callback) !== '[object Function]') {
        throw new TypeError(`${callback} is not a function`);
    }
    Array.prototype.forEach.call(array, (value, index, array) => {
        if (callback.call(thisArg, value, index, array)) {
            finalArray.push(value);
        }
    });
    return finalArray;
};
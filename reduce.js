'use strict';

export default (parameter, callback, initAccumulated) => {
    const parameterObjectified = Object(parameter);
    let finalValue = parameterObjectified[0];
    let i = 1;
    if ({}.toString.call(callback) !== '[object Function]') {
        throw new TypeError(`${callback} is not a function`);
    }
    if (initAccumulated !== undefined) {
        finalValue = initAccumulated;
        i--;
    }
    for (i; i < parameterObjectified.length; i++) {
        finalValue = callback(finalValue, parameterObjectified[i], i, parameterObjectified);
    }
    return finalValue;
};
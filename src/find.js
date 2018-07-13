'use strict';

export default (parameter, callback, thisArg) => {
    const parameterObjetified = Object(parameter);
    if ({}.toString.call(callback) !== '[object Function]') {
        throw new TypeError(`${callback} is not a function`);
    }
    for (let i = 0; i < parameterObjetified.length; i++) {
        if (callback.call(thisArg, parameterObjetified[i], i, parameterObjetified)) {
            return parameterObjetified[i];
        }
    }
};
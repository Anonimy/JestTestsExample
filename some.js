'use strict';

export default (parameter, callback, thisArg) => {
    const parameterObjetified = Object(parameter);
    let final = false;
    if ({}.toString.call(callback) !== '[object Function]') {
        throw new TypeError(`${callback} is not a function`);
    }
    for (let i = 0; i < parameterObjetified.length && !final; i++) {
        final = callback.call(thisArg, parameterObjetified[i], i, parameterObjetified);
    }
    return final;
};
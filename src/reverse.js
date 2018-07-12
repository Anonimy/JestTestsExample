'use strict';

export default (array) => {
    const length = array.length;
    const top = length / 2 | 0;
    if ({}.toString.call(array) !== '[object Array]') {
        throw new TypeError(`${array} is not an array`);
    }
    for (let i = 0; i < top; i++) {
        const init = array[i];
        const indexFinal = length - i - 1;
        array[i] = array[indexFinal];
        array[indexFinal] = init;
    }
    return array;
};
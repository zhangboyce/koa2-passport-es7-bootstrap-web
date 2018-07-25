const _ = require('lodash');

export const pagination = (pageNum, pageSize, count) => {
    let offset = (pageNum - 1) * pageSize;
    let maxPage = _.toInteger((count - 1)/pageSize) + 1;
    let hasNext = pageNum < maxPage;
    let hasPrev = pageNum > 1;
    let nextPage = hasNext ? (pageNum + 1) : null;
    let prevPage = hasPrev ? (pageNum - 1) : null;
    return {
        pageNum,
        pageSize,
        count,
        offset,
        maxPage,
        hasPrev,
        hasNext,
        prevPage,
        nextPage
    };
};

const toString = Object.prototype.toString;
export const isString = v => toString.call(v) === '[object String]';
export const isNumber = v => toString.call(v) === '[object Number]';
export const isBoolean = v => toString.call(v) === '[object Boolean]';
export const isObject = v => toString.call(v) === '[object Object]';
export const isArray = v => toString.call(v) === '[object Array]';
export const isFunction = v => toString.call(v) === '[object Function]';

export const format = date => {
    if (isString(date))
        date = new Date(date);

    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let yy = date.getFullYear();

    return [yy, (mm>9 ? '' : '0') + mm, (dd>9 ? '' : '0') + dd].join('-');
};

export const flatten = arr => arr.reduce(
    (acc, val) => acc.concat(
        Array.isArray(val) ? flatten(val) : val
    ),
    []
);
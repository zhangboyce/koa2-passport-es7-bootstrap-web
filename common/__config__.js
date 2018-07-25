'use strict';
const c = {  };

const set = function (obj) {
    Object.assign(c, obj);
};

const get = function (key) {
    return c[key];
};

const getConfig = function () {
    let cx = {  };
    Object.assign(cx, c);
    return cx;
};

const init = function(config) {
    Object.assign(c, config.util.getConfigSources()[0].parsed);
};

module.exports = {
    init: init,
    set: set,
    get: get,
    getConfig: getConfig
};
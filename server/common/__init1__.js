import * as utils from './Utils';
export default __init0__ => {
    let __init1__ = async (config, key='default') => {
        if (!config) {
            console.warn('Cannot init sources without config.');
        }
        if (utils.isString(config)) {
            await __init0__(config, key);
        }
        if (utils.isObject(config)) {
            for (let k in config) {
                await __init1__(config[k], key == 'default' ? k : key + '.' + k);
            }
        }
    };
    return __init1__;
};

import es from 'elasticsearch';
import config from 'config';
import __init1__ from './__init1__';
const ecCol = {  };

const __init0__ = async (url, key='default') => {
    let client = new es.Client({
        host: url
    });
    try {
        await client.ping({ requestTimeout: Infinity, hello: "elasticsearch!"});
        ecCol[key] = client;
        console.log(`ES client ${key} is well, ${ url }`);
    } catch (e) {
        console.error(`elasticsearch cluster ${key} is down!`);
    }
};

export default {
    init: async () => {
        let esConfig = config.get('es');
        await __init1__(__init0__)(esConfig);
    },
    get: function (key = 'default') {
        return ecCol[key];
    }
}
import config from 'config';
import __init1__ from './__init1__';
let mongoClient = require('mongodb').MongoClient;
let dbCol = {  };

const __init0__ = async (url, key='default') => {
    try {
        let db = await mongoClient.connect(url);
        dbCol[key] = db;
        console.log(`DB client ${key} is well, ${ url }`);
    } catch (e) {
        console.error(`db cluster ${key} is down!`);
    }
};

export default {
    init: async () => {
        let mongoConfig = config.get('mongo');
        await __init1__(__init0__)(mongoConfig);
    },
    get: function (key = 'default') {
        console.log('key', key);
        console.log('dbCol[key]', dbCol[key]);
        return dbCol[key];
    },
    getAll: function() {

        let c = Object.assign({}, dbCol);

        console.log('c', c)
        return c;
    }
}
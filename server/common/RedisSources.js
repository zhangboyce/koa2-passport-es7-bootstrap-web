import config from 'config';
import __init1__ from './__init1__';

const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

let redisCol = {  };

const __init0__ = async (url, key='default') => {
    try {
        let client = await redis.createClient({ url: url });
        redisCol[key] = client;
        console.log(`Redis client ${key} is well, ${ url }`);
    } catch (e) {
        console.error(`Redis cluster ${key} is down!`);
    }
};

export default {
    init: async () => {
        let redisConfig = config.get('redis');
        await __init1__(__init0__)(redisConfig);
    },
    get: function (key = 'default') {
        return redisCol[key];
    }
}
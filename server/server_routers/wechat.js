import parse from 'co-body';
import lodash from 'lodash';
import { pagination } from '../common/Utils';
import MongoSources from '../common/MongoSources';
import ESSources from '../common/ESSources';
import RedisSources from '../common/RedisSources';
import authMiddleware from './authMiddleware';
import KoaRouter from 'koa-router';

const router = new KoaRouter({ prefix: '/api/wechat' });
const boomDB = MongoSources.get('83');
const rowDB = MongoSources.get('raw');
const redis = RedisSources.get('spider');
const es = ESSources.get();

const PAGE_SIZE = 100;

router.get('/feedsources', authMiddleware, async (ctx, next) => {
    console.log('MongoSources.getAll();', MongoSources.getAll())

    let coll = boomDB.collection('feedsources');
    let query = { type: 'wechat' };

    let keyword = this.query.keyword;
    if(keyword) {
        query['$or'] = [
            {name: {$regex: `^.*${keyword}.*$`, $options: 'i'}},
            {id: keyword}
        ]
    }

    let count = await coll.count(query);
    let page = _.toInteger(this.query.page) || 1;
    let pageSize = _.toInteger(this.query.size) || PAGE_SIZE;
    let pagination = pagination(page, pageSize, count);

    let list = await coll.find(query).sort({_id: -1}).skip(pagination.offset).limit(pageSize).toArray();

    ctx.body = { pagination, list };

});

export default router;
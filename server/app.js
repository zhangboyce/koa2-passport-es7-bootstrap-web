import co from 'co';
import Koa from 'koa';
import koaStaticServer from 'koa-static-server';
import KoaRouter from 'koa-router';
import serverRouters from './server_routers';
import path from 'path';
import rootPath from 'app-root-path';
import SwigRender from 'koa-swig';
import config from 'config';

import ESSources from './common/ESSources';
import MongoSources from './common/MongoSources';
import RedisSources from './common/RedisSources';

const __config__ = require('../common/__config__');
__config__.init(config);

const app = new Koa();
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (e) {
        console.log(ctx.path, ctx.query, e, e.stack);
        await ctx.render('error', { stack: e.stack });
    }
});

app.use(koaStaticServer({
    rootDir: 'public',
    rootPath: '/static'
}));

app.context.render = co.wrap(SwigRender({
    root: path.join(rootPath.path, 'public/views'),
    autoescape: true,
    cache: false,
    ext: 'html'
}));

serverRouters(app);

let router = new KoaRouter();
router.get('/*', async (ctx, next) => {
    await ctx.render('index', { __config__: { host: config.get('host') } });
});
app.use(router.routes());
app.use(router.allowedMethods());

ESSources.init();
MongoSources.init();
RedisSources.init();

const port = config.get('port');
app.listen(9876);
console.log('cce-ato-data-manager listening on port ' + 9876);

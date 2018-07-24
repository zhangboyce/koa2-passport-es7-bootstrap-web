import co from 'co';
import Koa from 'koa';
import koaStaticServer from 'koa-static-server';
import KoaRouter from 'koa-router';
import serverRouters from './server_routers';
import path from 'path';
import rootPath from 'app-root-path';
import SwigRender from 'koa-swig';
import config from 'config';

const app = new Koa();
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (e) {
        console.log(ctx.path, ctx.query, e, e.stack);
        await ctx.render('404');
    }
});

app.use(koaStaticServer({
    rootDir: 'public',
    rootPath: '/static',
    maxage: 10000000
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
    await ctx.render('index');
});
app.use(router.routes());
app.use(router.allowedMethods());

///* mongo */
//const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
//const mongo_uri = nodeConfig.get('mongo') || 'mongodb://localhost:27017/boom';
//mongoose.connect(mongo_uri);
//
///* elasticsearch */
//const esFactory = require('./common/ESClientFactory');
//esFactory.init({ host: nodeConfig.get('es') || 'localhost:9200' });

const port = config.get('port');
app.listen(9876);
console.log('cce-ato-data-manager listening on port ' + 9876);

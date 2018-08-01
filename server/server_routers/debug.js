import authMiddleware from './authMiddleware';
import MongoSources from '../common/MongoSources';
import KoaRouter from 'koa-router';
const router = new KoaRouter();

router.get('/debug/auth', authMiddleware, async (ctx, next) => {
    console.log('debugx');
    ctx.body = 'debug';
});

router.get('/debug/error', async (ctx, next) => {
    console.log('debug');
    ctx.throw(403);
    ctx.body = 'debug';
});

router.get('/debug', async (ctx, next) => {
    ctx.body = MongoSources.getAll();
});

export default router;
import authMiddleware from './authMiddleware';
import KoaRouter from 'koa-router';
const router = new KoaRouter();

router.get('/debugx', authMiddleware, async (ctx, next) => {
    console.log('debugx');
    ctx.body = 'debug';
});

router.get('/debug', async (ctx, next) => {
    console.log('debug');
    ctx.throw(403);
    ctx.body = 'debug';
});

export default router;
import authMiddleware from './authMiddleware';
import KoaRouter from 'koa-router';
const router = new KoaRouter();

router.get('/debugx', authMiddleware, async (ctx, next) => {
    console.log('sasasa');
    ctx.body = 'debug';
});

router.get('/debug', async (ctx, next) => {
    console.log('sasasa');
    ctx.body = 'debug';
});

export default router;
import authMiddleware from './authMiddleware';
import KoaRouter from 'koa-router';
const router = new KoaRouter();

router.get('/login', async (ctx, next) => {
    if (ctx.isAuthenticated()) {
        ctx.redirect('/');
    } else {
        await ctx.render('login');
    }
});

router.get('/api/getUserInfo', authMiddleware, async (ctx, next) => {
    ctx.body = ctx.state.user;
});

export default router;
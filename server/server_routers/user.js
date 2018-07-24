import KoaRouter from 'koa-router';
const router = new KoaRouter();

router.get('/login', async (ctx, next) => {
    await ctx.render('login');
});

export default router;
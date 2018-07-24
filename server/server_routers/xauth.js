const passport = require('./passport_config.js');
import KoaRouter from 'koa-router';
const router = new KoaRouter();

/**
 * 认证登录
 */
router.post('/xauth/login', function (ctx, next) {
    return passport.authenticate('local', function (err, user, info, status) {
        if (user) {
            ctx.body = 'Y'
            return ctx.login(user)
        } else {
            ctx.body = info
        }
    })(ctx, next)
});

/**
 * 认证登出
 */
router.get('/xauth/logout', function (ctx, next) {
    ctx.logout();
    ctx.body = 'Y'
});


router.post('/xauth/test', function (ctx, next) {
    if (ctx.isAuthenticated()) {
        ctx.body = '认证通过'
    } else {
        ctx.throw(401);
        ctx.body = '非法访问'
    }
});

export default router;
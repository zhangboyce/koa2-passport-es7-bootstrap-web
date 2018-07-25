const passport = require('./passport_config.js');
import KoaRouter from 'koa-router';
const router = new KoaRouter();

router.post('/xauth/login', function (ctx, next) {
    return passport.authenticate('local', function (err, user, info, status) {
        if (user) {
            ctx.redirect('/');
            return ctx.login(user)
        } else {
            ctx.body = info
        }
    })(ctx, next)
});

router.get('/xauth/logout', function (ctx, next) {
    ctx.logout();
    ctx.redirect('/login');
});

export default router;
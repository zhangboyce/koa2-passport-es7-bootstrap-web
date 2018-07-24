import passport from 'koa-passport';
import session from 'koa-session2';
import bodyParser from 'koa-bodyparser';
import debug from './debug';
import xauth from './xauth';
import user from './user';

export default (app) => {
    app.proxy = true;
    app.use(session({ key: "cce-ato-data-manager" }));
    app.use(bodyParser());
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(debug.routes());
    app.use(user.routes());
    app.use(xauth.routes());
}
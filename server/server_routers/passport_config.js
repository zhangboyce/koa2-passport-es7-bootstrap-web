import passport from 'koa-passport';
import LocalStrategy from 'passport-local';

const user = {
    id: 0,
    username: "cce",
    password: "cceGroup"
};

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, (username, password, done) => {
    if(user.username === username && user.password === password) {
        return done(null, user);
    } else {
        return done(null, false);
    }
}));

// serializeUser 在用户登录验证成功以后将会把用户的数据存储到 session 中
passport.serializeUser(function (user, done) {
    done(null, user)
});

// deserializeUser 在每次请求的时候将从 session 中读取用户对象
passport.deserializeUser(function (user, done) {
    return done(null, user)
});

module.exports = passport;

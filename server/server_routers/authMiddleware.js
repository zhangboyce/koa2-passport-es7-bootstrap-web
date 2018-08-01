export default async (ctx, next) => {
    //if (ctx.isAuthenticated()) {
    //    await next();
    //} else {
    //    await ctx.render('/login');
    //}
    await next();
};
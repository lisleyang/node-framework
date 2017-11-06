'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//处理404和500
const errorHandler = {
    error(app) {
        //把服务器常见错误（500）统一处理在这儿
        app.use(async (ctx, next) => {
            try {
                await next();
            } catch (err) {
                console.log('error', err);
                ctx.status = err.status || 500;
                ctx.body = "500";
            }
        });

        //把404的错误放在这儿
        app.use(async (ctx, next) => {
            await next();
            if (404 != ctx.status) return;
            ctx.status = 404;
            ctx.body = '404';
        });
    }
};

exports.default = errorHandler;
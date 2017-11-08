'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//处理404和500
const errorHandler = {
    error(app, log4js) {
        //把服务器常见错误（500）统一处理在这儿
        app.use(async (ctx, next) => {
            try {
                //直接跳去处理正常的请求，如果在处理过程出出现问题，则跳到catch
                await next();
            } catch (err) {
                log4js.logger_log_date.error('error', err);
                ctx.status = err.status || 500;
                ctx.body = "500";
            }
        });

        //把404的错误放在这儿
        app.use(async (ctx, next) => {
            await next();
            console.log(ctx.status);
            if (404 != ctx.status) return;
            ctx.status = 404;
            ctx.body = '404';
        });
    }
};

exports.default = errorHandler;
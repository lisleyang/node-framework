console.log('系统变量' + process.env.NODE_ENV)
import Koa from 'koa';
import config from './config/config';
import errorHandler from './middleware/errorhandler'
import controllerInit from './controllers/controllerInit'
import router from 'koa-simple-router'
import render from 'koa-swig'
import co from 'co'
import serve from 'koa-static'
import log4js from './log/log4js';
const app = new Koa();
//这样就可以ctx.render了
// co.wrap 把generator函数变成一个返回Promise的常规函数
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}))

errorHandler.error(app, log4js);
controllerInit.getAllRouters(app, router);
app.use(serve(config.staticDir));

const server = app.listen(config.port, () => {
    console.log('System is running at' + config.port);
})

//api测试的时候  supertest引用文件
export default app
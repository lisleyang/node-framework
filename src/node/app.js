console.log('系统变量' + process.env.NODE_ENV)
import Koa from 'koa';
import config from './config/config';
import errorHandler from './middleware/errorhandler'
import controllerInit from './controllers/controllerInit'
import router from 'koa-simple-router'

import log4js from './log/log4js';
const app = new Koa();

errorHandler.error(app, log4js);
controllerInit.getAllRouters(app, router);

const server = app.listen(config.port, () => {
    console.log('System is running at' + config.port);
})

//api测试的时候  supertest引用文件
export default app
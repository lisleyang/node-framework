console.log('系统变量' + process.env.NODE_ENV)
import Koa from 'koa';
import config from './config/config';
import errorHandler from './middleware/errorhandler'

import log4js from 'log4js';
/* const logger = log4js.getLogger();
logger.level = "error";
logger.error('this is test for log4'); */
log4js.configure({

})

const app = new Koa();

errorHandler.error(app);

const server = app.listen(config.port, () => {
    console.log('System is running at' + config.port);
})

//api测试的时候  supertest引用文件
export default app
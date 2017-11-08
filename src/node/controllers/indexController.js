import indexModel from '../models/indexModel'
import log4js from '../log/log4js';

const indexController = {
    index() {
        return async(ctx, next) => {
            const indexModelIns = new indexModel();
            const result = await indexModelIns.getData();
            ctx.body = result;
            /* indexModelIns.getData().then(function(htmlString) {
                console.log(htmlString);
                ctx.body = htmlString;
                ctx.status = 200;
            }, function(err) {
                log4js.logger_log_date.error('promise请求baidu失败');
                log4js.logger_log_date.error(err);
            }).catch(function(err) {
                log4js.logger_log_date.error('catch请求baidu失败');
                log4js.logger_log_date.error(err)
            }) */
        }
    }
}

export default indexController;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexModel = require('../models/indexModel');

var _indexModel2 = _interopRequireDefault(_indexModel);

var _log4js = require('../log/log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexController = {
    index() {
        return async (ctx, next) => {
            const indexModelIns = new _indexModel2.default();
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
        };
    }
};

exports.default = indexController;
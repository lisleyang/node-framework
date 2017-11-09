'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _errorhandler = require('./middleware/errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _controllerInit = require('./controllers/controllerInit');

var _controllerInit2 = _interopRequireDefault(_controllerInit);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _log4js = require('./log/log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('系统变量' + process.env.NODE_ENV);

const app = new _koa2.default();
//这样就可以ctx.render了
// co.wrap 把generator函数变成一个返回Promise的常规函数
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.viewDir,
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: false
}));

_errorhandler2.default.error(app, _log4js2.default);
_controllerInit2.default.getAllRouters(app, _koaSimpleRouter2.default);
app.use((0, _koaStatic2.default)(_config2.default.staticDir));

const server = app.listen(_config2.default.port, () => {
    console.log('System is running at' + _config2.default.port);
});

//api测试的时候  supertest引用文件
exports.default = app;
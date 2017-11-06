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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('系统变量' + process.env.NODE_ENV);


const app = new _koa2.default();

_errorhandler2.default.error(app);

const server = app.listen(_config2.default.port, () => {
	console.log('System is running at' + _config2.default.port);
});

//api测试的时候  supertest引用文件
exports.default = app;
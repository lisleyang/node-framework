"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_log4js2.default.configure({
    "appenders": {
        "console": {
            "type": "console"
        },
        "log_file": {
            "type": "file",
            "filename": "./logs/log_file/file.log",
            "maxLogSize": 104800,
            "backups": 100
        },
        "log_date": {
            "type": "dateFile",
            "filename": "./logs/log_date/date",
            "alwaysIncludePattern": true,
            "pattern": "-yyyy-MM-dd.log"
        },
        "default": {
            "type": "file",
            "filename": "./logs/default.log",
            "maxLogSize": 104800,
            "backups": 100
        }
    },
    "categories": {
        "console": {
            "appenders": ["console"],
            "level": "info"
        },
        "log_file": {
            "appenders": ["log_file"],
            "level": "info"
        },
        "log_date": {
            "appenders": ["log_date"],
            "level": "error"
        },
        "default": {
            "appenders": ["default"],
            "level": "info"
        }
    }
});

exports.default = {
    logger_console: _log4js2.default.getLogger('console'),
    logger_log_file: _log4js2.default.getLogger('log_file'),
    logger_log_date: _log4js2.default.getLogger('log_date'),
    logger_default: _log4js2.default.getLogger('default')
};
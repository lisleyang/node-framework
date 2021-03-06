import log4js from 'log4js';

log4js.configure({
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

export default {
    logger_console: log4js.getLogger('console'),
    logger_log_file: log4js.getLogger('log_file'),
    logger_log_date: log4js.getLogger('log_date'),
    logger_default: log4js.getLogger('default')
}
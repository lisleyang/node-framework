import local from './local';
import _ from 'lodash';
import path from 'path';

// 开发环境下监听8081接口
// 正式环境下监听8088接口
const server = {
    port: 8088
}

let config = {
    viewDir: path.join(__dirname, '..', 'views'),
    staticDir: path.join(__dirname, '..', 'assets'),
    env: process.env.NODE_ENV
};
if (!config.env || config.env === 'dev') {
    config = _.extend(config, local);
} else {
    config = _.extend(config, server);
}

export default config;
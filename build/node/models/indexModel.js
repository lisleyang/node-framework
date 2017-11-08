'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class indexModel {
    getData() {
        return new Promise((resolve, reject) => {
            (0, _requestPromise2.default)("https://malls.3g.fang.com/api/shop/GetCityInfo?cityShort=bj").then(function (htmlString) {
                console.log(htmlString);
                resolve(htmlString);
                /* const $ = cheerio.load(htmlString);
                console.log($('#pane-news .hotnews ul'));
                resolve(); */
            }).catch(err => {
                reject(err);
            });
        });
    }
}

exports.default = indexModel;
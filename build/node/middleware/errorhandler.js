"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
//处理404和500
const errorHandler = {
    error(app) {
        console.log(404);
    }
};

exports.default = errorHandler;
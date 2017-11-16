const webpack = require('webpack');
const fs = require("fs");
const path = require("path");

const pagesPath = path.join(__dirname, '../src/web/views');
const widgetPath = path.join(__dirname, '../src/web/widget');
// 处理所有的js的处理文件
const jsEntries = {};
fs.readdirSync(pagesPath).map((o, filename) => {
    console.log(o);
})
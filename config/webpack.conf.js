const webpack = require('webpack');
const fs = require("fs");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const _ = require("lodash");

const pagesPath = path.join(__dirname, '../src/web/views');
const widgetPath = path.join(__dirname, '../src/web/widget');
// 处理所有的js的处理文件
const jsEntries = {};
fs.readdirSync(pagesPath).map((o, filename) => {
    const _fd = pagesPath + "/" + o;
    fs.readdirSync(_fd).map((innero, infile) => {
        if (/\.entry\.js$/.test(innero)) {
            jsEntries[innero.replace(".entry.js", "")] = _fd + "/" + innero;
        }
    })
})

const _entries = Object.assign(jsEntries); //{ 'index-index': 'C:\\Users\\Administrator\\Desktop\\jiagou\\src\\web\\views/index/index-index.entry.js' }
const _module = {
    rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                }]
            })
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                "presets": ["env"]
            }
        }
    ]
}

const _resolve = {
    extensions: [".js", ".css"]
}
const _devLoaders = _.clone(_module.rules);
_devLoaders.push({
    test: /\.(png|jpg|gif|eot|woff|woff2|tff|svg|otf)$/,
    loader: "fileloader?name=assets/images/[name].[ext]"
})
const _prodLoaders = _.clone(_module.rules);
_prodLoaders.push({
    test: /\.(png|jpg|gif|eot|woff|woff2|tff|svg|otf)$/,
    loader: "fileloader?name=assets/images/[name].[hash:5].[ext]"
})

const WebpackConfig = {
    dev: {
        entry: _entries,
        module: {
            rules: _devLoaders
        },
        resolve: _resolve
    },
    prod: {
        entry: _entries,
        module: {
            rules: _prodLoaders
        },
        resolve: _resolve
    }
}

module.exports = WebpackConfig
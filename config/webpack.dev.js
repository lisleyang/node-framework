const conf = require("./webpack.conf");
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const options = {
    output: {
        path: path.join(__dirname, '../build/assets'),
        publicPath: '/', //上线前用，所有css/js都要加到前面的
        filename: "scripts/[name].bundle.js"
    },
    plugins: [
        new ExtractTextPlugin("styles/[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(), //scope hoisting if(a(值是) == 1 )之类的代码变成if(true)
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || "dev")
        }),
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                /* compress: {
                    drop_console: true
                } */
            }
        })

    ]
}
const _options = Object.assign(conf.dev, options);

module.exports = _options;
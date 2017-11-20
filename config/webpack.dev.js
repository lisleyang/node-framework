const conf = require("./webpack.conf");
const path = require("path");
const webpack = require("webpack");

const options = {
    output: {
        path: path.join(__dirname, '../build/'),
        publicPath: '/', //上线前用，所有css/js都要加到前面的
        filename: "assets/scripts/[name].bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugins(),
        new webpack.optimize.ModuleConcatenationPlugin(), //scope hoisting 去除if(true ==false )之类的代码
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || "dev")
        })
    ]
}
const _options = Object.assign(conf.dev, options);

module.exports = _options;
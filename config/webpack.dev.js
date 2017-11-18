const conf = require("./webpack.conf");
const path = require("path");

const options = {
    output: {
        path: path.join(__dirname, '../build/'),
        publicPath: '/', //上线前用，所有css/js都要加到前面的
        filename: "assets/scripts/[name].bundle.js"
    }
}
const _options = Object.assign(conf.dev, options);

module.exports = _options;
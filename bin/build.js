var path = require("path");
var webpack = require("webpack");
var prodConfig = require('../webpack.config.prod');

webpack(prodConfig, function (err, stats) {
    if (!err) {
      console.log('\n' + stats.toString({
        hash: false,
        chunks: false,
        children: false,
        colors: true
      }));
    } else {
      cconsole.log("err:", err);
    }
});
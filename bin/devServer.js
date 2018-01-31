const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.config.dev');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
// const proxy = require('express-http-proxy'); 
const proxy = require("http-proxy-middleware");
const history = require('connect-history-api-fallback');


const app = express();
const compiler = webpack(config);

app.use(history());

app.use(webpackDevMiddleware(compiler, {
    noInfo: true, //false将打印编译信息（建议true，false会打印很多信息）
    publicPath: config.output.publicPath //绑定middleware
}));

app.use('/test', proxy({
    target: 'https://mock.yonyoucloud.com/mock/38',
    logLevel : "debug",
    changeOrigin: true,
    onProxyRes: function(proxyRes) {
        // console.log('proxying....')
        proxyRes.headers["Uba-Server-Proxy"] = "true";
    }
  }));

app.use(webpackHotMiddleware(compiler));


// app.get('*', function(req, res) {
//     console.log("req.path:", req.path);
//     res.sendFile(path.resolve(__dirname, '../src/index.html')); 
// });

app.listen(3100, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Listening at http://localhost:3100');
  });
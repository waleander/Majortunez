// var path = require('path');
// var express = require('express');
// var app = new express();
// var port = process.env.PORT || 5000;
//
// if (process.env.NODE_ENV !== 'production') {
//   var webpack = require('webpack');
//   var webpackDevMiddleware = require('webpack-dev-middleware');
//   var webpackHotMiddleware = require('webpack-hot-middleware');
//   var config = require('./webpack.dev.js');
//   var compiler = webpack(config);
//   app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
//   app.use(webpackHotMiddleware(compiler));
// }
//
// app.use(express.static(path.join(__dirname, '/public')));
//
// app.use(function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'))
// });
//
// app.listen(port, function(error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
//   }
// });


var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/'));

 app.use(function(req, res) {
   res.sendFile(path.join(__dirname, 'index.html'))
 });

app.listen(process.env.PORT || 8080);

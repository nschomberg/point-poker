// Load env vars
require('dotenv').config();

// Module Imports
const express = require('express');
const secure = require('express-force-https');
const expressStaticGzip = require('express-static-gzip');
const path = require('path');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');

// Relative imports
const webpackConfig = require('./webpack.config.js');
const { isProduction, log } = require('./lib/utils');

const app = express();

log(`${isProduction ? 'Production' : 'Dev'} Build!`);

// If in dev, hook up webpack dev middleware for hmr
if (!isProduction) {
  const compiler = webpack(webpackConfig);
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
}

const http = require('http').Server(app);
const io = require('socket.io')(http);
const socket = require('./lib/socket');

socket.init(io);

const port = process.env.PORT || 4200;

// Try to send down gzipped static assets if available
app.use('/', expressStaticGzip(path.resolve(__dirname, 'public'), {}));

// Try to redirect to https
app.use(secure);

// Reroute unmatched routes to home page
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

// Start server
http.listen(port, () => {
  log(`listening on port ${port}`);
});

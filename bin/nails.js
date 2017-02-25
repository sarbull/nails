const express = require('express'),
  app = express(),
  routes = require('../app/routes'),
  config = require('../config/environment');

let server;

server = app.listen(config.PORT);
console.log(`Your server is running on port ${ config.PORT }.`);

app.use('/', routes);

module.exports = server;

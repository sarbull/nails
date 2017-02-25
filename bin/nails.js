const express = require('express'),
  app = express(),
  config = require('../config/environment'),
  application = require('../config/application');

let server;

server = app.listen(config.PORT);
console.log(`Your server is running on port ${ config.PORT }.`);

application(app);

module.exports = server;

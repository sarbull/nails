const express = require('express'),
  app = express(),
  config = require('../config/environment'),
  dbConnection = require('../db/connection'),
  application = require('../config/application');

let server;

server = app.listen(config.PORT);
console.log(`Your server is running on port ${ config.PORT }.`);

dbConnection();

application(app);

module.exports = server;

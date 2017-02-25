const express = require('express'),
  routes = express.Router();

routes.get('/', function (req, res) {
  res.send({'version': '0.0.0'});
});

module.exports = routes;
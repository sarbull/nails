const mongoose = require('mongoose'),
  config = require('../config/environment');

module.exports = function() {
  if(config.DB) {
    mongoose.connect(config.DATABASE_URL);
  }
};

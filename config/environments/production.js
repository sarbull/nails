const common = require('./common'),
  _ = require('lodash');

const production = {
  SECRET_TOKEN: process.env.SECRET_TOKEN,
  DATABASE_URL: process.env.DATABASE_URL
};

module.exports = _.merge({}, common, production);

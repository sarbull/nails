const common = require('./common'),
  _ = require('lodash');

const development = {
  SECRET_TOKEN: 'Not that s3cret.',
  DATABASE_URL: 'mongodb://localhost:27017'
};

module.exports = _.merge({}, common, development);

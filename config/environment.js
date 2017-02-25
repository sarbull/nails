const production = require('./environments/production'),
     development = require('./environments/development'),
            test = require('./environments/test');

var environment;

switch(process.env.NODE_ENV) {
  case 'production':
    environment = production;
    break;
  case 'development':
    environment = development;
    break;
  case 'test':
    environment = test;
    break;
  default:
    environment = development;
}

module.exports = environment;
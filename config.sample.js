const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    apiUrl: 'http://domain',
  },
  test: {},
  development: {},
  production: {
    apiUrl: '',
  },
}

module.exports = merge(config.all, config[config.all.env])

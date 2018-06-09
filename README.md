[![Build Status](https://travis-ci.org/JW275/SWPP2018_01_Group15_FrontEnd.svg?branch=master)](https://travis-ci.org/JW275/SWPP2018_01_Group15_FrontEnd)
# SWPP 2018/01 Group 15

## `<root>/src/config.js`
```
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
```

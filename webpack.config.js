var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'resources/js');
var APP_DIR = path.resolve(__dirname, 'web/WEB-INF/jsx/');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
};

module.exports = config;
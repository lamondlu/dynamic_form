var config = require('./config.js'),
    http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

module.exports = function(db) {
    var app = express();

    return app;
}
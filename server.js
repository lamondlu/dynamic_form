process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
    config = require('./config/config')
db = require('./config/mongodb');

var db = db();
var config = config();
var app = express(db);

app.listen(config.serverPort);
module.exports = app;

console.log('Server running at http://localhost:3000');
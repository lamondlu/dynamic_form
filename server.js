process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
    db = require('./config/mongodb');

var db = db();
var app = express(db);

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000');
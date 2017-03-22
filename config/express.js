var config = require('./config.js'),
    http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

module.exports = function(db) {
    var app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(methodOverride()); //启用支持Delete和Put

    //配置Session
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    require('../app/routes/user.server.routes')(app);

    app.use(express.static('./public'));

    return app;
}
var config = require('./config'),
    MongoClient = require('mongodb').MongoClient;

module.exports = function() {
    var db = MongoClient.connect(config.db, function(err, db) {
        console.log('Connected to server correctly');
    });

    return db;
}
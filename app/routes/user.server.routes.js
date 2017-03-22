var users = require('../../app/controllers/user.server.controller'),
    passport = require('passport');


module.exports = function(app) {

    app.route('/login').get(users.renderSignIn);

};
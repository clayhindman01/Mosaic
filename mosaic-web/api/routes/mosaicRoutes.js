'use strict';
module.exports = function(app) {
    var users = require('../controllers/mosaicController');

    app.route('/users')
        .get(users.list_all_users)
        .post(users.create_a_user)
};
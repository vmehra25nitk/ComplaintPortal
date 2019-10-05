const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Hostel = sequelize.define('hostel', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Hostel;
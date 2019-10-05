const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Mess = sequelize.define('mess', {
    messName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Mess;
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Fees = sequelize.define('fees', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Fees;
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Lab = sequelize.define('lab', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Lab;
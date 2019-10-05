const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Faculty = sequelize.define('faculty', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false
    }

});


module.exports = Faculty;
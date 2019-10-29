/*jshint esversion: 6 */

const Sequelize = require('sequelize');

const sequelize = require('../util/database');



const authStudent = sequelize.define('authStudent', {
    sid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        allowNull: false,
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull:false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobile: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    room: {
        type: Sequelize.STRING,
        allowNull: false
    },
    branch: {
        type: Sequelize.ENUM,
        values: ['cse', 'it', 'ece', 'eee', 'min', 'mec', 'met', 'civ', 'che'],
        allowNull: false
    },
    hostel: {
        type: Sequelize.ENUM,
        values: ['1', '2', '3', '4', '5', '6', '7', '8', 'mt1', 'mt2', 'mt3'],
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resetToken: {
        type: Sequelize.STRING
    },
    resetTokenExpiration: {
        type: Sequelize.DATE
    }

});


module.exports = authStudent;

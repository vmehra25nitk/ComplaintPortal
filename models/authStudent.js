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
        type: Sequelize.STRING,
        allowNull: false
    },
    hostel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

});


module.exports = authStudent;

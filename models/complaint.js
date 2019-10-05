const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Student = require('./student');

const Complaint = sequelize.define('complaint', {
    cid:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull: true
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    solvedBy: {
        type: Sequelize.STRING,
        allowNull: true
    },
    studentSid: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Student,
            key: 'sid'
        }
    }


});


module.exports = Complaint;
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Complaint = require('../models/complaint');

const Mess = sequelize.define('mess', {
    messName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    complaintCid: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Complaint,
            key: 'cid'
        }
    }
});



module.exports = Mess;
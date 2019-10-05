const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Complaint = require('../models/complaint');

const Hostel = sequelize.define('hostel', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cid: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Complaint,
            key: 'cid'
        }
    }
});


module.exports = Hostel;
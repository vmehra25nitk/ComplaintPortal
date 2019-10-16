const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Complaint = require('../models/complaint');

const Hostel = sequelize.define('hostel', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name:{
        type: Sequelize.ENUM,
        values:['1','2','3','4','5','6','7','8','mt1','mt2','mt3'],
        allowNull: false
    },
    complaintCid: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Complaint,
            key: 'cid'
        }
    }
});


module.exports = Hostel;
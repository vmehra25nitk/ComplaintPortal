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
        values:['I','II','III','IV','V','PG','VII','VIII','MT1','MT2','MT3', 'GB'],
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
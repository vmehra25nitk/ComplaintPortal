const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Complaint = require('../models/complaint');

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
        type: Sequelize.ENUM,
        values: ['cse','it','ece','eee','min','mec','met','civ','che'],
        allowNull: false
    },
    complaintCid: {
        type: Sequelize.STRING,
        primaryKey: true,
        references: {
            model: Complaint,
            key: 'cid'
        }
    }
});


module.exports = Lab;
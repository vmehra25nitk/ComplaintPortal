const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Complaint = require('../models/complaint');

const Faculty = sequelize.define('faculty', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(50),
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
        allowNull: false,
        references: {
            model: Complaint,
            key: 'cid'
        }
    }

});




module.exports = Faculty;
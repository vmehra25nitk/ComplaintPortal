const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Complaint = require('../models/complaint');

const Library = sequelize.define('library', {
    type: {
        type: Sequelize.STRING,
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



module.exports = Library;
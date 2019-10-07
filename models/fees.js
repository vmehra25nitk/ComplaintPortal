const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Complaint = require('../models/complaint');


const Fees = sequelize.define('fees', {
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





//

module.exports = Fees;
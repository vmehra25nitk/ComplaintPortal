const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Library = sequelize.define('library', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = Library;
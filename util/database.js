const Sequelize = require('sequelize');

const sequelize = new Sequelize('testsqldb', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
const Sequelize = require('sequelize');

const sequelize = new Sequelize('Evoting','root', 'password', {
    dialect: 'mysql',
    host:'localhost'
});

module.exports = sequelize;
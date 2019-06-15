const Sequelize = require('sequelize');

const sequelize = new Sequelize('Evoting','root', 'password', {
    dialect: 'mysql',
    host:'localhost'
});

const VoterModel =  sequelize.define('voter',{
    voterid:{
        type: Sequelize.STRING,
        autoIncrement:false,
        allowNull:false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,    
        allowNull:false 
    },
    photosDir:{
        type:Sequelize.STRING,
        allowNull: true 
    }
});

module.exports = VoterModel;
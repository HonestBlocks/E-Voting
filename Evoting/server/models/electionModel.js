module.exports = (sequelize, type)=>{
    return sequelize.define('Election', {
        admin_account:{
            type: type.STRING,
            autoIncrement:false,
            allowNull:false,
            primaryKey: true
        },
        election_address:{
            type: type.STRING,
            autoIncrement: false,
            allowNull:false,
        }
    })
} 

module.exports = (sequelize, type) => {
    return sequelize.define('voter',{
    voterid:{
        type: type.STRING,
        autoIncrement:false,
        allowNull:false,
        primaryKey: true
    },
    name:{
        type:type.STRING,    
        allowNull:false 
    },
    photosDir:{
        type:type.STRING,
        allowNull: true 
    },
    address:{
        type:type.STRING,
        allowNull: false
    }
});
}
const {DataTypes, Model} = require('sequelize');
const connection = require('../../dbconnection')

class attributes extends Model{};

attributes.init({
        attributeId : {
        primaryKey: true,
        type : DataTypes.STRING(60)
    },
    name : {
        type : DataTypes.STRING(60),
        
    },
    value:{
        type : DataTypes.STRING(300),
    
    }
    

},{
    sequelize: connection,
    modelName: 'attributes',
    paranoid:true,
    timestamps:true
})

module.exports = attributes;
const {DataTypes, Model} = require('sequelize');
const vendor = require('./vendor');
const connection = require('../../dbconnection')

class product extends Model{};

product.init({
    productId : {
        primaryKey: true,
        type : DataTypes.STRING(60)
    },
    productName : {
        type : DataTypes.STRING(60),
        allowNull : false
    },
    description:{
        type : DataTypes.STRING(300),
        allowNull : false
    },
    vendorId:{
        type : DataTypes.STRING(60),
        allowNull : false,
        references : {
            model : vendor,
            key : 'vendorId'
        }
    }
    
    

},{
    sequelize: connection,
    modelName: 'product',
    paranoid:true,
    timestamps:true
})

module.exports = product;

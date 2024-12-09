const {DataTypes, Model} = require('sequelize');
const connection = require('../../dbconnection')
const product = require('./product');

class productVariations extends Model{};

productVariations.init({
    productVariationsId : {
        primaryKey: true,
        type : DataTypes.STRING(60)
    },
    productVariationsName : {
        type : DataTypes.STRING(60),
        allowNull : false
    },
    description:{
        type : DataTypes.STRING(300),
        allowNull : false
    },
    quantity : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    price : {
        type : DataTypes.DECIMAL(10,2),
        allowNull : false
    },
    productId :{
        type : DataTypes.STRING(),
        allowNull: false,
        references:{
            model : product,
            key : 'productId'
        }
    }

    

},{
    sequelize: connection,
    modelName: 'productVariations',
    paranoid:true,
    timestamps:true
})

module.exports = productVariations;

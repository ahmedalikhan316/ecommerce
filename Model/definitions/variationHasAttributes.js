const {DataTypes, Model} = require('sequelize');
const connection = require('../../dbconnection')
const productVariations = require('./productVariations');
const attributes = require('./attributes');

class variationHasAttributes extends Model{};

variationHasAttributes.init({
    variationHasAttributesId : {
        primaryKey: true,
        type : DataTypes.STRING(60)
    },
   productVariationsId : {
    type : DataTypes.STRING(60),
    references: {
        model : productVariations,
        key : 'productVariationsId'
    }
   },
   attributeId : {
    type : DataTypes.STRING(60),
    references: {
        model : attributes,
        key : 'attributeId'
    }
   }
    
   

},{
    sequelize: connection,
    modelName: 'variationHasAttributes',
    paranoid:true,
    timestamps:true
})

module.exports = variationHasAttributes;
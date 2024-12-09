const {DataTypes, Model} = require('sequelize');
const connection = require('../../dbconnection')

class vendor extends Model{};

vendor.init({
    vendorId : {
        primaryKey: true,
        type : DataTypes.STRING(60)
    },
    vendorName : {
        type : DataTypes.STRING(60),
        allowNull:false,
    }
    

},{
    sequelize: connection,
    modelName: 'vendor',
    paranoid:true,
    timestamps:true
})

module.exports = vendor;
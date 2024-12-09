const {DataTypes, Model} = require('sequelize');
const connection = require('../../dbconnection')

class customer extends Model{};

customer.init({
    customerId : {
        primaryKey: true,
        type : DataTypes.STRING(60)
    },
    

},{
    sequelize: connection,
    modelName: 'customer',
    paranoid:true,
    timestamps:true
})

module.exports = customer;
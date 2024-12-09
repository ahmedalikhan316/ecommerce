const {DataTypes, Model} = require('sequelize');
const connection = require('../../dbconnection')

class Admin extends Model{};

Admin.init({
   adminId : {
        primaryKey: true,
        type : DataTypes.STRING(60)
    },
    

},{
    sequelize: connection,
    modelName: 'admin',
    paranoid:true,
    timestamps:true
})

module.exports = Admin;
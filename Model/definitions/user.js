const {DataTypes, Model} = require('sequelize');
const connection = require('../../dbconnection');
const {hash} = require('bcrypt')

class User extends Model{};

User.init({
    userId : {
        primaryKey: true,
        type : DataTypes.STRING(60)
    },
    name:{
            type:DataTypes.STRING(40),
            allowNull: false,
    },
    userName : {
            type: DataTypes.STRING(30),
            allowNull:false
    },
    password:{
        type:DataTypes.STRING(1000),
        allowNull:false,
    },

},{
    sequelize: connection,
    modelName: 'user',
    paranoid:true,
    timestamps:true
})
User.beforeCreate(async(user)=>{
    user.password = await  hash(user.password);
})
module.exports = User;
const {Sequelize} = require('sequelize');
require('dotenv').config();
const connection = new Sequelize({
    database : process.env.DB_NAME,
    username : process.env.DB_USER,
    password : process.env.DB_PASS,
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    dialect : process.env.DIALECT

})
connection.authenticate()
.then(()=>{
    console.log("connections established");
})
.catch((err)=>{
    console.log("not established", err);
})
module.exports = connection;
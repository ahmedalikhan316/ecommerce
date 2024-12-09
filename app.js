const express = require('express');
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const {Create,DeleteData,Update} = require('./validations/user')
const {create,deleteuser,updateUserData,getAllusers, GetUser} = require('./controllers/userController')
const {createproduct} = require('./controllers/productController');
const {db} = require('./Model/index');
const { login } = require('./controllers/authController');
const {middleware} = require('./middleware')
const cors = require('cors')
const app = express();



const port = 3006;
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    credentials:true,
    origin : true
}));
app.get('/',(req,res)=>{
    console.log(req.query);
    res.send('Hello World!');
})
app.post('/login',login)
app.post('/create',Create,create)
app.post('/delete',DeleteData,deleteuser)
app.post('/update',Update,updateUserData)
// app.get('/get-all',middleware,getAllusers)
app.get('/get-all',getAllusers)
app.get('/get-user',GetUser)
app.post('/new-product',createproduct);

app.listen(port,()=>{
    console.log("app is listening");
})
db.connection.sync({alter: true, logging: true })
.then(()=>{
    console.log("'done")
})
.catch((err)=>{
    console.log(err)
})
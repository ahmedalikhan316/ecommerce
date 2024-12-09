const User = require('../Model/definitions/user');
const {v4:uuid} = require('uuid');
const {createUser,deleteUser, updateuser,getAllUsers,getUser} = require('../Model/userModel')
module.exports={
    create:async(req,res)=>{
        try{
            console.log("check")
            const userId = uuid();
            console.log(userId);
        req.body.userId = userId;
        console.log(req.body.useId);
        

        const user = await createUser(req.body);
        if(user.error){
            res.send({
                newUserName: user,
                message:"failed to create"
            })
        }
        res.send({
            newUserName: user,
            message:"userCreated Successfully"
        })
        }
        catch(err){
            res.send({
                error : err
            })
        }
    },
    deleteuser: async(req,res)=>{
        try{
            const {name} = req.body;
            const response = await deleteUser(name);
            res.send({
                data: response,
            })
        }
        catch(err){
            res.send({
                error: err
            })
        }
    },
    updateUserData: async(req,res)=>{
        try{
            const user = await updateuser(req.body);
            res.send({
                data: user,
                value:'succesful'
            })
        }
        catch(err){
            res.send(err);
        }
    },
    getAllusers:async(req,res)=>{
        try{
            const users = await getAllUsers();
            if(users.error){
                res.send({
                    error: users.error,
                    message:'Unable to get all users data'
                })

            }
            
            res.send({
                data : users,
                message: 'Fetched succesfully'
            })
        }
        catch(err){
            res.send(err);
        }
    },
    GetUser:async(req,res)=>{
        const {userName} = req.query
        const singleuser =await getUser(userName);
        res.send(singleuser)
    }
} 
require('dotenv').config();
const {compare} = require('bcrypt');
const {getUser} = require('./../Model/userModel');
const  {sign}= require('jsonwebtoken')
module.exports = {
    login: async(req, res) => {
       try{
        const {userName , password} = req.body;
        const result = await getUser(userName);
       
        if(result.status !==200){
            return res.send(
                {
                    data : "user not exist"
                }
            ) 
        }
        
        const user = result.user;
      
        
        // const isValid = await compare(
        //     password,
        //     user.password
        // );
        //if (!isValid) 
         console.log(user.password)
        if(user.password!==password)
        {
            res.cookie("auth","undefined", {maxAge : 90000});
            // If the password does not match, return an invalid credentials message
            return res.status(401).send({
                data: "Invalid credentials"
            });
        }
        console.log(result.user)
        const token = sign(result.user.dataValues,process.env.SECRET, {
            expiresIn : 180
        })
        res.cookie("auth",token, {maxAge : 3*1000});

        return res.status(200).send({
            data: "Login successful",
            response : token

        });
            

       }
       catch (err) {
        // Handle any unexpected errors and send a 500 response
        return res.status(500).send({
            data: err.message || "Internal Server Error",
            status: 500
        });
    }

    }
}

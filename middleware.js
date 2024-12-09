require('dotenv').config();
const {verify} = require('jsonwebtoken');
module.exports ={
    middleware: async(req,res,next)=>{
        try{
            const token = req.cookies.auth;
            if(token == "undefined"){
                return res.status(401).json({message: "Unauthorized"})
            }

           verify(token,process.env.SECRET,(error,data)=>{
            if(error){
                return res.status(401).json({message: "forbidden access"})
            }
            console.log(data);
            next();
           })

            
        }
        catch(err){
            return {
                status: 500,
                message: 'Internal Server Error',
                error: err,
            }
        }
    }
}
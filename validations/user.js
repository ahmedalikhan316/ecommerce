const joi = require('joi');
const create = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    userName :joi.string(),
    userId: joi.string(),
    password: joi.string()

})
const deleteData = joi.object({
            name: joi.string(),
})
const update = joi.object({
    userId:joi.string(),
    name: joi.string(),
    email:joi.string().email()
})
module.exports = {
    Create : async(req,res,next)=>{
        try{
                await create.validateAsync(req.body);
                console.log(req.query);
                next();
        }
        catch(err){
            console.log(err);
        }
    },
    DeleteData : async(req,res,next)=>{
        try{
            await deleteData.validateAsync(req.query);
            next();
        }
        catch(err){
            res.send(err);
        }
    },
    Update: async(req,res)=>{
        try{
            await update.validateAsync(req.body);
            res.send(req.body);
        }
        catch(err){
            res.send({
                error : err,
                status: 'Not validated'
            })
        }
    }
}


const User = require('./definitions/user');


module.exports = {
    createUser: async (body)=>{
       try{
        console.log(body)
        const users = await User.create({
            ...body
        })
        console.log(users);
        return {
            response : users,
        }
       }
       catch(err){
        return {
            error : err.message,
        }
       }
    },
    deleteUser:async(name)=>{
        try{
            const response =await User.destroy({
                where:{
                    name: name,
                }
            })
            return response;
        }
        catch(err){
            return err;
        }
    },
    updateuser:async ({name,email,userId})=>{
        try{
            const response =await User.update({name: name ,
                email : email
            },{
                where :{
                    userId : userId,
                }      
                
            }
           
        )
        if(response.error){
                    return response.error;
        }
        return response;
        }
        catch(err){
            return err;
        }
    },
    getAllUsers:async()=>{
         try{
            const allusers= await User.findAll();
         if(allusers.error){
            return allusers.error
         }
         console.log('check users all')
         return allusers;
         }
         catch(err){
            return err;
         }
    },
    getUser:async(userName)=>{
        const user =await User.findOne({
            attributes: ['name', 'userName', 'password','userId'],
            where: {
                userName: userName
            }
        });
        if(!user){
            console.log(user);
            return {
                error: 'User not found',
                status: 404
            }
            
        }
        return {
            user: user,
            status: 200
        };
    },

}
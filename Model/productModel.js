const product = require('./definitions/product');


module.exports = {
    createProduct: async (body)=>{
       try{
        console.log(body)
        const prod = await product.create({
            ...body
        })
        console.log(prod);
        return {
            response : prod,
        }
       }
       catch(err){
        return {
            error : err.message,
        }
       }
    },
    // deleteUser:async(name)=>{
    //     try{
    //         const response =await User.destroy({
    //             where:{
    //                 name: name,
    //             }
    //         })
    //         return response;
    //     }
    //     catch(err){
    //         return err;
    //     }
    // },
    // updateuser:async ({name,email,userId})=>{
    //     try{
    //         const response =await User.update({name: name ,
    //             email : email
    //         },{
    //             where :{
    //                 userId : userId,
    //             }      
                
    //         }
           
    //     )
    //     if(response.error){
    //                 return response.error;
    //     }
    //     return response;
    //     }
    //     catch(err){
    //         return err;
    //     }
    // },
    // getAllUsers:async()=>{
    //      try{
    //         const allusers= await User.findAll();
    //      if(allusers.error){
    //         return allusers.error
    //      }
    //      return allusers;
    //      }
    //      catch(err){
    //         return err;
    //      }
    // },
    // getUser:async(userId)=>{
    //     const user =await User.findOne({
    //         attributes:['name','userName']
    //     },{
    //         where:{
    //             userId:userId,
    //         }
    //     });
    //     if(user.error){
    //         return "user not found";
    //     }
    //     return user;
    // },

}
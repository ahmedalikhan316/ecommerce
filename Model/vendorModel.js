const vendor = require('./definitions/vendor');

module.exports={
    createVendorId: async(id,userName)=>{
        try{
            const ID = await vendor.create(id,userName);
        if(ID.error){
            return false;
        }
        return true;
        }
        catch(err){
            return err;
        }

    }
}
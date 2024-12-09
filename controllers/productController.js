const {createProduct} = require('./../Model/productModel');
const {createVendorId} = require('./../Model/vendorModel');
module.exports = {
    createproduct: async (req, res) => {
        try {
            const {vendorId,vendorName} =  req.body;
            const updated = await createVendorId(vendorid,vendorName);
            delete req.body.vendorId ;
            delete req.body.vendorName;
            const product = await createProduct(req.body);
            if(product.error){
                return res.send({
                    status: false,
                    error : product.error
                })
            }
            return res.send({
                status: true,
                message: "Product created successfully",
            })
        }
        catch(err){
            res.send({
                error : err,
                message : "Error in creating product"
            })
        }
    }
}
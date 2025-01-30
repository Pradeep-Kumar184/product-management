import productModel from "../models/productModel.js";

// create product
export const createProductController=async(req,res)=>{
    try {
        const {productName,price,description}=req.body
         // validation
    if (!productName) res.send({ message: "productName is required" });
    if (!price) res.send({ message: "price is required" });
    if (!description) res.send({ message: "description is required" });

    // chk existing product
    const existingProduct=await productModel.findOne({productName})
    if(existingProduct){
        return res.status(401).send({
            success:false,
            message:"product already created"
        })
    }
    // create new product
    const product=new productModel({
        productName,
        price,
        description
    })
    await product.save()
    return res.status(201).send({
        success:true,
        message:"product created successfully",
        product
    })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in create product",
            error:error.message,
          });
    }
}

// get all product
export const getAllProductController=async(req,res)=>{
    try {
        const product=await productModel.find({})
        return res.status(200).send({
            success:true,
            message:"get products successfully",
            total: product.length,
            product
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in get all product",
            error:error.message,
          });
    }
}

// delete product controller
export const deleteProductController=async(req,res)=>{
    try {
        const id=req.params.id
        const product=await productModel.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            message: "Product Deleted Successfully",
            product
          });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in delete product",
            error:error.message,
          });
    }
}
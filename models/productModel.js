import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        require:true,
        unique:true
    },
    price:{
        type:Number,
        require:true
    },
    description: {
        type: String,
        required: true,
      }
})
export default mongoose.model("product",productSchema)
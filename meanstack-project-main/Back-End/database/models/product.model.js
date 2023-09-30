import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id:Number,
  productName: String,
  productPrice: Number,
  productDescription:String,
  productImage:String,
  productStatus:String,
  productType:String,
  pageNumber:Number,
  quantity:Number,




  rating:{
    rate:Number,
    count:Number
  }

});
export const productModel= mongoose.model("Product", productSchema);

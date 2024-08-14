const mongoose=require("mongoose")
const cartSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    image:String,
    qty:Number,
    subTotal:Number
})
const Cart = new mongoose.model("Cart", cartSchema);
module.exports=Cart

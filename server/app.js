const express = require("express");
const app = express();
const cors = require('cors');
const Feature=require("./Featured")
const Cart= require("./Cart")
const cloudinary=require("cloudinary")
const stripe=require("stripe")("sk_test_51OIwkWKCxgQFwew7Mi8D4u382IbMDm0yiayrKaFXiUFRjN89RrDdiQvEifhvk4NfmyCA0Zx3FR67Fmbn99u6nhYA00t7dMi7rg")
app.use(cors());
app.use(express.json());
// const { app, BrowserWindow } = require('electron');
const connect= require("./coonectDb")
app.listen(4000, () => {
    console.log("sener is listening");
  });
  connect()

  let saving=async()=>{
let  featured = [
    { 
     title: 'Hot and Spicy',
     description: 'soft and tender fried chicken',
     restaurants: [
         {
             
             name: 'Papa Johns',
             image: 'https://res.cloudinary.com/dvzwvedra/image/upload/v1692151155/mz09hbah7r8oqpahtkjd.jpg',
             description: 'Hot and spicy pizzas',
             lng: -85.5324269,
             lat: 38.2145602,
             address: '434 second street',
             stars: 4,
             reviews: '4.4k',
             category: 'Fast Food',
             dishes: [
                 {
                   
                    name: ' Papa pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  'https://res.cloudinary.com/dvzwvedra/image/upload/v1692151693/nl6r6ru9u8rsoav31z8k.jpg',
                    qty:1,
                    subTotal:10
                 },
                 {
                    
                    name: ' Papa Burgur',
                    description: 'Apetizing burgurs',
                    price: 20,
                    image: 'https://res.cloudinary.com/dvzwvedra/image/upload/v1692151810/ljv5bt6k1wqzxqhyti7r.jpg',
                    qty:1,
                    subTotal:20
 
                 },
                 {
                    
                    name: ' Papa Pasta',
                    description: 'cheezy pastas ',
                    price: 30,
                    image:  'https://res.cloudinary.com/dvzwvedra/image/upload/v1692152013/wyvu7ht0wpvs8mhcfwdn.jpg',
                    qty:1,
                    subTotal:30
 
                 },
             ]
     
         },
         {
            
             name: 'Al-Baik',
             image: 'https://res.cloudinary.com/dvzwvedra/image/upload/v1692152095/eyygewtlcxl304ezqvka.jpg',
             description: 'Hot and spicy Broasts',
             lng: -85.5324269,
             lat: 38.2145602,
             address: '434 second street',
             stars: 4,
             reviews: '4.4k',
             category: 'Fast Food',
             dishes: [
                 {
                   
                    name: ' Al-pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  'https://res.cloudinary.com/dvzwvedra/image/upload/v1692152140/nab91uds4c5l0ue4ezaj.jpg',
                    qty:1,
                    subTotal:10
                 },
                 {
                   
                    name: ' Al-Burgur',
                    description: 'Apetizing burgurs',
                    price: 20,
                    image:  'https://res.cloudinary.com/dvzwvedra/image/upload/v1692152198/c0rgkk8b7cs6xkf1my4i.jpg',
                    qty:1,
                    subTotal:20
 
                 },
                 {
                   
                    name: ' Al-Pasta',
                    description: 'cheezy pastas ',
                    price: 30,
                    image: 'https://res.cloudinary.com/dvzwvedra/image/upload/v1692152265/pm2fodbbwevhk8neruon.jpg',
                    qty:1,
                    subTotal:30
 
                 },
             ]
     
         },
         {
            
             name: 'Macdonals',
             image:'https://res.cloudinary.com/dvzwvedra/image/upload/v1692152302/rsqatr38ogxtuwngytwa.jpg',
             description: 'Hot and spicy pizzas',
             lng: -85.5324269,
             lat: 38.2145602,
             address: '434 second street',
             stars: 4,
             reviews: '4.4k',
             category: 'Fast Food',
             dishes: [
                 {
                    
                    name: 'Mac-pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image:  'https://res.cloudinary.com/dvzwvedra/image/upload/v1692151693/nl6r6ru9u8rsoav31z8k.jpg',
                    qty:1,
                    subTotal:10
                 },
                 {
                    
                    name: 'Mac-Burgur',
                    description: 'Apetizing burgurs',
                    price: 20,
                    image:  'https://res.cloudinary.com/dvzwvedra/image/upload/v1692152442/zavxfv0zqtwbqsg3ropl.jpg',
                    qty:1,
                    subTotal:20
 
                 },
                 {
                   
                    name: 'Mac-Pasta',
                    description: 'cheezy pastas ',
                    price: 30,
                    image:  'https://res.cloudinary.com/dvzwvedra/image/upload/v1692152481/flwd1eov1o6wd1fxluyg.png',
                    qty:1,
                    subTotal:30
 
                 },
             ]
     
         }
     ]}
 ]
     let founded=await Feature.insertMany(featured)
     console.log(founded);
  }
//   saving()

// Configuration 
// cloudinary.config({
//   cloud_name: "dvzwvedra",
//   api_key: "294787435149364",
//   api_secret: "5HcEOWEeLkImWVuh3WoEdG-18Gk"
// });

// const res = cloudinary.uploader.upload('./my-app/assets/images/pasta.png', {folder: "images",public_id: "sample_id" })



// res.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// }).catch((err) => {
//   console.log(err);
// });

app.get("/get",async(req,res)=>{
   let founded= await Feature.find()
   // console.log(founded);
   res.json({
      success:true,
      data:founded
   })
})
app.get("/cartData",async(req,res)=>{
   let founded= await Cart.find()
   res.json({
      success:true,
      data:founded
   })
})

app.post("/cart",async(req,res)=>{
   // console.log(req.body);

   let founded= await Cart.find({_id:req.body.item._id})
   if (founded.length==0) {
      let nya=new Cart(req.body.item)
      await nya.save()
      res.json({
         success:true
      })
      
   }else{
      res.json({
         success:false
      })

   }
 
})

app.put("/editQty/:id",async(req,res)=>{
      let id= req.params.id
      console.log(req.body);
      let founded= await Feature.find()
      // console.log(founded);
      founded.forEach((item)=>{
         let flag= false
               item.restaurants.forEach((restaurant)=>{
                   let df=  restaurant.dishes.find((dish)=>{
                        if (dish._id==id) {
                           return true
                           
                        }
                     })
                     if (df) {
                        flag=true
                        console.log(df.name);
                        console.log(req.body);
                        df.qty=req.body.nqty
                        df.subTotal=df.total
                        return
                     }
                     
               })
               
      })


})

app.delete("/delete/:id",async(req,res)=>{
   let id= req.params.id
   // console.log(id);
   let founded= await Cart.deleteMany({_id:id})
   res.json({
      success:true
   })
})
app.post("/intent",async(req,res)=>{
      // console.log(req.body.gTotal);
   try {
      const paymentIntent=await stripe.paymentIntents.create({
         amount:req.body.gTotal,
         currency:"usd",
         // automatic_payment_methods: {
         //    enabled: true,
         //  },
          payment_method_types: ["card"],
   
      })
      res.json({success:true,paymentIntent: paymentIntent.client_secret })
   } catch (error) {
      res.json({success:false,msg:error.message})
   }
  
})
const mongoose=require("mongoose")
const dishSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    image:String,
    qty:Number,
    subTotal:Number
})
const  restaurantSchema=mongoose.Schema({
    name:String,
    image:String,
    description:String,
    lng:Number,
    lat:Number,
    address:String,
    stars:Number,
    reviews:String,
    category:String,
    dishes:[dishSchema],


    
})
const featuredSchema= mongoose.Schema({
    title:String,
    description:String,
    restaurants:[restaurantSchema],

})

const Feature = new mongoose.model("Feature", featuredSchema);
module.exports=Feature

// let  featured = [
//     { 
//      title: 'Hot and Spicy',
//      description: 'soft and tender fried chicken',
//      restaurants: [
//          {
             
//              name: 'Papa Johns',
//              image: '../assets/images/pizza.png',
//              description: 'Hot and spicy pizzas',
//              lng: -85.5324269,
//              lat: 38.2145602,
//              address: '434 second street',
//              stars: 4,
//              reviews: '4.4k',
//              category: 'Fast Food',
//              dishes: [
//                  {
                   
//                     name: 'pizza',
//                     description: 'cheezy garlic pizza',
//                     price: 10,
//                     image:  '../assets/images/pizzaDish.png',
//                     qty:1,
//                     subTotal:10
//                  },
//                  {
                    
//                     name: 'Burgur',
//                     description: 'Apetizing burgurs',
//                     price: 20,
//                     image: '../assets/images/pBurgur.jpg',
//                     qty:1,
//                     subTotal:20
 
//                  },
//                  {
                    
//                     name: 'Pasta',
//                     description: 'cheezy pastas ',
//                     price: 30,
//                     image:  '../assets/images/bPasta.jpg',
//                     qty:1,
//                     subTotal:30
 
//                  },
//              ]
     
//          },
//          {
            
//              name: 'Al-Baik',
//              image: '../assets/images/alBaik.jpeg',
//              description: 'Hot and spicy Broasts',
//              lng: -85.5324269,
//              lat: 38.2145602,
//              address: '434 second street',
//              stars: 4,
//              reviews: '4.4k',
//              category: 'Fast Food',
//              dishes: [
//                  {
                   
//                     name: 'pizza',
//                     description: 'cheezy garlic pizza',
//                     price: 10,
//                     image:  '../assets/images/pizza.png',
//                     qty:1,
//                     subTotal:10
//                  },
//                  {
                   
//                     name: 'Burgur',
//                     description: 'Apetizing burgurs',
//                     price: 20,
//                     image:  '../assets/images/aBurgur.jpg',
//                     qty:1,
//                     subTotal:20
 
//                  },
//                  {
                   
//                     name: 'Pasta',
//                     description: 'cheezy pastas ',
//                     price: 30,
//                     image: '../assets/images/Pasta.jpg',
//                     qty:1,
//                     subTotal:30
 
//                  },
//              ]
     
//          },
//          {
            
//              name: 'Macdonals',
//              image:'../assets/images/mac.jpeg',
//              description: 'Hot and spicy pizzas',
//              lng: -85.5324269,
//              lat: 38.2145602,
//              address: '434 second street',
//              stars: 4,
//              reviews: '4.4k',
//              category: 'Fast Food',
//              dishes: [
//                  {
                    
//                     name: 'pizza',
//                     description: 'cheezy garlic pizza',
//                     price: 10,
//                     image:  '../assets/images/pizzaDish.png',
//                     qty:1,
//                     subTotal:10
//                  },
//                  {
                    
//                     name: 'Burgur',
//                     description: 'Apetizing burgurs',
//                     price: 20,
//                     image:  '../assets/images/mBurgur.jpg',
//                     qty:1,
//                     subTotal:20
 
//                  },
//                  {
                   
//                     name: 'Pasta',
//                     description: 'cheezy pastas ',
//                     price: 30,
//                     image:  '../assets/images/pasta.png',
//                     qty:1,
//                     subTotal:30
 
//                  },
//              ]
     
//          }
//      ]}
//  ]


































// let  featured = [
//     { 
//      title: 'Hot and Spicy',
//      description: 'soft and tender fried chicken',
//      restaurants: [
//          {
             
//              name: 'Papa Johns',
//              image: require('../assets/images/pizza.png'),
//              description: 'Hot and spicy pizzas',
//              lng: -85.5324269,
//              lat: 38.2145602,
//              address: '434 second street',
//              stars: 4,
//              reviews: '4.4k',
//              category: 'Fast Food',
//              dishes: [
//                  {
                   
//                     name: 'pizza',
//                     description: 'cheezy garlic pizza',
//                     price: 10,
//                     image:  require('../assets/images/pizzaDish.png'),
//                     qty:1,
//                     subTotal:10
//                  },
//                  {
                    
//                     name: 'Burgur',
//                     description: 'Apetizing burgurs',
//                     price: 20,
//                     image: require('../assets/images/pBurgur.jpg'),
//                     qty:1,
//                     subTotal:20
 
//                  },
//                  {
                    
//                     name: 'Pasta',
//                     description: 'cheezy pastas ',
//                     price: 30,
//                     image:  require('../assets/images/bPasta.jpg'),
//                     qty:1,
//                     subTotal:30
 
//                  },
//              ]
     
//          },
//          {
            
//              name: 'Al-Baik',
//              image: require('../assets/images/alBaik.jpeg'),
//              description: 'Hot and spicy Broasts',
//              lng: -85.5324269,
//              lat: 38.2145602,
//              address: '434 second street',
//              stars: 4,
//              reviews: '4.4k',
//              category: 'Fast Food',
//              dishes: [
//                  {
                   
//                     name: 'pizza',
//                     description: 'cheezy garlic pizza',
//                     price: 10,
//                     image:  require('../assets/images/pizza.png'),
//                     qty:1,
//                     subTotal:10
//                  },
//                  {
                   
//                     name: 'Burgur',
//                     description: 'Apetizing burgurs',
//                     price: 20,
//                     image:  require('../assets/images/aBurgur.jpg'),
//                     qty:1,
//                     subTotal:20
 
//                  },
//                  {
                   
//                     name: 'Pasta',
//                     description: 'cheezy pastas ',
//                     price: 30,
//                     image: require('../assets/images/Pasta.jpg'),
//                     qty:1,
//                     subTotal:30
 
//                  },
//              ]
     
//          },
//          {
            
//              name: 'Macdonals',
//              image:require('../assets/images/mac.jpeg' ),
            
//              description: 'Hot and spicy pizzas',
//              lng: -85.5324269,
//              lat: 38.2145602,
//              address: '434 second street',
//              stars: 4,
//              reviews: '4.4k',
//              category: 'Fast Food',
//              dishes: [
//                  {
                    
//                     name: 'pizza',
//                     description: 'cheezy garlic pizza',
//                     price: 10,
//                     image:  require('../assets/images/pizzaDish.png'),
//                     qty:1,
//                     subTotal:10
//                  },
//                  {
                    
//                     name: 'Burgur',
//                     description: 'Apetizing burgurs',
//                     price: 20,
//                     image:  require('../assets/images/mBurgur.jpg'),
//                     qty:1,
//                     subTotal:20
 
//                  },
//                  {
                   
//                     name: 'Pasta',
//                     description: 'cheezy pastas ',
//                     price: 30,
//                     image:  require('../assets/images/pasta.png'),
//                     qty:1,
//                     subTotal:30
 
//                  },
//              ]
     
//          }
//      ]}
//  ]
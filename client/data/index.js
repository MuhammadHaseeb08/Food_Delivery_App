export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/burgur.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/pasta.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/salad.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/pasta.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/icecream.png'),
    },

]


export const featured = [
   { 
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            
            name: 'Papa Johns',
            image: '../assets/images/pizza.png',
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                  
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  '../assets/images/pizzaDish.png',
                   qty:1,
                   subTotal:10
                },
                {
                   
                   name: 'Burgur',
                   description: 'Apetizing burgurs',
                   price: 20,
                   image: '../assets/images/pBurgur.jpg',
                   qty:1,
                   subTotal:20

                },
                {
                   
                   name: 'Pasta',
                   description: 'cheezy pastas ',
                   price: 30,
                   image:  '../assets/images/bPasta.jpg',
                   qty:1,
                   subTotal:30

                },
            ]
    
        },
        {
           
            name: 'Al-Baik',
            image: '../assets/images/alBaik.jpeg',
            description: 'Hot and spicy Broasts',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                  
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  '../assets/images/pizzaDish.png',
                   qty:1,
                   subTotal:10
                },
                {
                  
                   name: 'Burgur',
                   description: 'Apetizing burgurs',
                   price: 20,
                   image:  '../assets/images/aBurgur.jpg',
                   qty:1,
                   subTotal:20

                },
                {
                  
                   name: 'Pasta',
                   description: 'cheezy pastas ',
                   price: 30,
                   image: '../assets/images/Pasta.jpg',
                   qty:1,
                   subTotal:30

                },
            ]
    
        },
        {
           
            name: 'Macdonals',
            image:'../assets/images/mac.jpeg',
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  '../assets/images/pizzaDish.png',
                   qty:1,
                   subTotal:10
                },
                {
                   
                   name: 'Burgur',
                   description: 'Apetizing burgurs',
                   price: 20,
                   image:  '../assets/images/mBurgur.jpg',
                   qty:1,
                   subTotal:20

                },
                {
                  
                   name: 'Pasta',
                   description: 'cheezy pastas ',
                   price: 30,
                   image:  '../assets/images/pasta.png',
                   qty:1,
                   subTotal:30

                },
            ]
    
        }
    ]}
]

export const staff=[
    {
        id: 1,
        name: 'John Arthur',
        image: require('../assets/images/2.jpeg'),
        role:"Chief"
    },
    {
        id: 2,
        name: ' Anjalina Julie',
        image: require('../assets/images/m1.jpeg'),
        role:"Branch Manager"
    },
    {
        id: 3,
        name: ' Jennie Chilta',
        image: require('../assets/images/chief2.jpeg'),
        role:"Branch Manager"
    },
    {
        id: 4,
        name: ' Andrew Tate',
        image: require('../assets/images/m2.jpg'),
        role:"Senior  Manager"
    },

]
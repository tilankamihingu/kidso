import React, {createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const[products, setProducts] = useState([
        {
            "_id":"1",
             "title": "Choco Smoothie",
             "images": "https://images.pexels.com/photos/6261272/pexels-photo-6261272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 440.00,
         },
         {
             "_id": "2",
             "title": "Banana Smoothie",
             "images": "https://images.pexels.com/photos/5946804/pexels-photo-5946804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 260.00,

         },
         {
             "_id": "3",
             "title": "Watermelon Juice",
             "images": "https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 130.00,

         },
         {
             "_id": "4",
             "title": "Kiwi Juice",
             "images": "https://images.pexels.com/photos/1149300/pexels-photo-1149300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 800.00,

         },
         {
             "_id": "5",
             "title":"Carrot Juice",
             "images": "https://images.pexels.com/photos/8215133/pexels-photo-8215133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 320.00,

         },
         {
             "_id": "6",
             "title": "Dark Coffee",
             "images": "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium",
             "note": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
             "specialp": "buy 2 get 1 free",
             "price": 280.00,

         }
    ])
    const [special, setSpecial] = useState([
        {
            "_id":"001",
             "title": "Cold Desert",
             "images": "https://images.pexels.com/photos/88917/pexels-photo-88917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium exercitationem nesciunt quos possimus, expedita nisi laboriosam molestias",
             "price": 870.00,
         },
         {
            "_id":"002",
             "title": "Vegetable Salad",
             "images": "https://images.pexels.com/photos/434258/pexels-photo-434258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium exercitationem nesciunt quos possimus, expedita nisi laboriosam molestias",
             "price": 650.00,

         },
         {
            "_id":"003",
             "title": "Spicy Salad",
             "images": "https://images.pexels.com/photos/4194625/pexels-photo-4194625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
             "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur quia delectus praesentium exercitationem nesciunt quos possimus, expedita nisi laboriosam molestias",
             "price": 400.00,

         }
    ])

    const value = {
        products: [products, setProducts],
        specials: [special, setSpecial]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
import React, {createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const[products, setProducts] = useState([
        {
            "_id":"1",
             "title": "English CVC Words",
             "images": "https://img.freepik.com/free-vector/gradient-elegant-certificate_52683-63963.jpg?w=740&t=st=1665229488~exp=1665230088~hmac=922ca6a91067d3b76b8c278d4117a804711116cba574eb896865acba174be0adhttps://img.freepik.com/free-vector/gradient-elegant-certificate_52683-63963.jpg?w=740&t=st=1665229488~exp=1665230088~hmac=922ca6a91067d3b76b8c278d4117a804711116cba574eb896865acba174be0ad",
             "description": "you've completed Pronouncing English CVC words",
             "note": "Congratulation for your Achivement",
             "date": "08/10/2022",
             "level": "level 01",
             "code": "$hbkbkjbj%#52dd2262"
         },
         {
             "_id": "2",
             "title": "Object Identification",
             "images": "https://img.freepik.com/free-vector/clean-certificate-template-multipurpose-use_1017-31372.jpg?w=740&t=st=1665229612~exp=1665230212~hmac=a2ea9ce3996de8e6b34072c0353160a9cf36564b48cbf03f161a77deca51ae64",
             "description": "you've completed object identification level for explore inside home.",
             "note": "Congratulation for your Achivement",
             "date": "25/09/2022",
             "level": "level 05",
             "code": "$hbkbkjbj%#52dd2262"
         },
         {
             "_id": "3",
             "title": "Pronouncing Diphthongs",
             "images": "https://img.freepik.com/free-vector/engraving-hand-drawn-ornamental-certificate_52683-64060.jpg?w=740&t=st=1665229779~exp=1665230379~hmac=f2008f2e6102f8b8d1d6da22003450d0d1de933adca0ef5f9f971f12e116c012",
             "description": "you've completed Pronouncing Diphthongs",
             "note": "Congratulation for your Achivement",
             "date": "14/09/2022",
             "level": "level 04",
             "code": "$hbkbkjbj%#52dd2262"
         },
         {
             "_id": "4",
             "title": "Object Identification",
             "images": "https://img.freepik.com/free-psd/editable-certificate-template-psd-minimal-botanical-design_53876-123364.jpg?w=740&t=st=1665230095~exp=1665230695~hmac=d23d6ed12533a70d574d3eef58fcf05c1076525fa18f937b280adcdb03d1b396",
             "description": "you've completed object identification level for explore outside home.",
             "note": "Congratulation for your Achivement",
             "date": "08/06/2022",
             "level": "level 08",
             "code": "$hbkbkjbj%#52dd2262"
         },
         {
             "_id": "5",
             "title":"Maths Addition",
             "images": "https://img.freepik.com/free-psd/certificate-achievement-template-psd-luxury-design_53876-123370.jpg?w=740&t=st=1665229873~exp=1665230473~hmac=1ad2eab67085a0bfb9fba2edafcf0c9ea6e40de8073ce3f6cec22d77112fd6e7",
             "description": "you've completed Level of Mathematics Addition",
             "note": "Congratulation for your Achivement",
             "date": "04/10/2022",
             "level": "level 01",
             "code": "$hbkbkjbj%#52dd2262"
         },
         {
             "_id": "6",
             "title": "Maths Substraction",
             "images": "https://img.freepik.com/free-psd/vintage-floral-certificate-template-psd-classy-style_53876-114568.jpg?w=740&t=st=1665230031~exp=1665230631~hmac=c65ff3123eade61ee7a88e7fef5e7e5fe4870ac51db3876a41726abdc3d1461f",
             "description": "you've completed Level of Mathematics Substraction",
             "note": "Congratulation for your Achivement",
             "date": "01/10/2022",
             "level": "level 02",
             "code": "$hbkbkjbj%#52dd2262"
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
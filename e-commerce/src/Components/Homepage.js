import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const Homepage = () => {
    const [ecom, setecom] = useState([])
   
    useEffect(() => {
         axios.get("http://localhost:3004/ecomerce").then(res=>{
            setecom(res.data)
         })
         .catch(err=>console.log(err))
       },
     [])
  return (
    <div className='haed'>
        <h1>E-commerce</h1>
        <div className="App">
            
            {
              ecom.map(x=>
                      <diV className="ind">
                       <p>productsName:{x.productName}</p>
                       <p>Price:{x.price}</p>
                       <p>Rating:{x.rating}</p>
                       <p>Discount:{x.discount}</p>
                       <p>Availability:{x.availability}</p>
                      </diV>
              
                  )
            }
    </div>
    </div>
  );
};

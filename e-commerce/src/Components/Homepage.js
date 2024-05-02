import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Homepage = () => {
    const [ecom, setecom] = useState([])
    const Access="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0NjMwNDE1LCJpYXQiOjE3MTQ2MzAxMTUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijk2MDhkYjMzLWIwMWEtNDBkNS05NTY2LWY0NTI4MmQzMWJmNyIsInN1YiI6IlNyaXdhdWdoMDk4N0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJTSVRERSIsImNsaWVudElEIjoiOTYwOGRiMzMtYjAxYS00MGQ1LTk1NjYtZjQ1MjgyZDMxYmY3IiwiY2xpZW50U2VjcmV0Ijoidm9BdHBOQmR3UEV2TnVkbSIsIm93bmVyTmFtZSI6IlNyaXdhdWdoIiwib3duZXJFbWFpbCI6IlNyaXdhdWdoMDk4N0BnbWFpbC5jb20iLCJyb2xsTm8iOiIyMUNTMTAzIn0.XJtsiEYqm7ieTKVWuS2T1AchDK6yd7rKHutvaxw4sCI"
    useEffect(() => {
         axios.get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000").then(res=>{
            setecom(res.data)
         })
         .catch(err=>console.log(err))
       },
     [])
  return (
        <div className="App">
            {
              ecom.map(x=>(
                      <diV>
                       <p>sriwaugh{x.discount}</p>
                      </diV>
              )
                  )
            }
    </div>
  );
};

// @flow strict

import React from 'react'
import { useState,useContext } from 'react';
import { GlobalState } from './Global';
import { Link } from 'react-router-dom';



function Home() {
    
  const state = useContext(GlobalState)
  const [data,setData] = state.userAPI.data
  const [cart,setCart] = state.userAPI.cart
  const addCart = state.userAPI.addCart
  function add_to_cart(val){
    console.log(cart)
    addCart(val)
    console.log(cart)
    console.log(cart.length)
    }
  
  return (
<div className='row     p-3  m-2 text-center  '>

{
  data.map(val =>
    <div key={val._id} 
     className='  hover_box container-fluid   border  col-sm-10 col-md-4 col-lg-3   p-1 mt-5  text-center' >
    <div className=' container-fluid'>
        <div> 
            <img src={val.url} width="250px" height="250px"/>
            </div>
        
      <h6>
        {
          val.name
        }
      </h6>
      <p>
         ₹{
          val.prize
        } 
      </p>

    </div>
    <h6>
      {val.about}
    </h6>

    <div>
      <button className='hover_box btn btn-outline-warning'>
                 <Link to="/Ordrers" onClick={()=> add_to_cart(val)}> Add to Cart      </Link>
      </button>
      
      </div>
</div>
  )
}

</div>

 )
}
export default Home;

// @flow strict

import React, { useState ,useContext} from 'react'
import logo from '../../img/logo.png';
import cart from '../client/Cart';

import { GlobalState } from './Global.js';
 const  Home=()=> {

  
  const state = useContext(GlobalState)
  const [data,setData] = state.userAPI.data
  function add_to_cart(id,name){
    const cart = data.filter((i)=>i.id === id);
    console.log(cart);
  }

  
  function handle_item(id,name){
    alert(id + "  "+ name);
  }



  function remove(id){
    const newlist = data.filter((i)=>i.id !== id);
    setData(newlist);
  }
  return (
    
<div className='row     p-3  m-2 text-center  '>

{
  data.map(val =>
    <div key={val._id}  onClick={()=>{handle_item(val._id,val.name)
    }}
     className='  hover_box container-fluid   border  col-sm-10 col-md-4 col-lg-3   p-1 mt-5  text-center' >
    <div className=' container-fluid'>
        <div> 
            <img src={val.url} width="300px" height="250px"/>
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
      {
        Number(val.N) <6 ?<h6 className='bg-danger text-white '>      

Total Number Of Product=
        {
         val.N
       } 
     </h6>:<h6 className='bg-primary text-white '>      

       Total Number Of Product=
        {
         val.N
       } 
     </h6>
      }
      
      

    </div>
    <h4>
      {val.about}
    </h4>

    <div>
      {/* <button className='hover_box btn btn-outline-warning' onClick={()=>remove(val.id)}>
                 <h4 onClick={()=> add_to_cart(val.id,val.name)}> Add to Cart      </h4>
      </button> */}
      </div>
</div>
  )
}

</div>

 )
}
export default Home;

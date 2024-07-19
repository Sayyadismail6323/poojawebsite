// @flow strict

import React, { useState ,useContext} from 'react'
import { GlobalState } from './Global.js';

function Home() {
  
  const state = useContext(GlobalState)
  const [data] = state.userAPI.products
 
  
  function handle_item(id){
    alert(id);
  }

  return (

<div className='row     p-3  m-2 text-center '>

{
  data.map(val =>
    
    <div key={val._id}  onClick={()=>{handle_item(val._id)
    }} className='  hover_box container-fluid   border  col-sm-10 col-md-4 col-lg-3   p-2 mt-3 text-center' >
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
    <h4>
      {val.about}
    </h4>
  
    <div>
      <button className='hover_box btn btn-outline-warning'  onClick={()=>(val.id)}>
                 <a className='nav-link' href='/CustomerLogin'><h6> Add to Cart</h6></a>

      </button>
      </div>
</div>
  )
}

</div>

 )
}
export default Home;

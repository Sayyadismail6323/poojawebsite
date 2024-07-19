import React from 'react'
import logo from '../img/logo.png'
import Candle from '../img/Candle.png'

import UncontrolledExample from '../img/Cursor.js';
import data3 from '../HomePageitem';
import Ayyappa from '../img/Ayyappa.png'
import data4 from '../HomePageAbbout';

export default function NewHome() {
  return (
  
         
   
    <div className='cotainer bg-white text-black text-center'>
      <div>     <UncontrolledExample/>  
           {/* <img src={logo} width="100%" height="800px"/> */}
       </div>
 
        

<div className='row p-3  m-2 text-center '>

{
  data3.map(val =>
    
    <div key={val.id}   className='  hover_box container-fluid   border  col-sm-10 col-md-4 col-lg-3   p-2 mt-3  text-center' >
    <div className=' container-fluid'>
        <div>
            <img src={val.img} width="250px" height="250px"/>
          </div>
        
      <h5>
        {
          val.name
        }
      </h5>
      <p>
        
        <h5> ₹{
          val.Price
        } </h5>
      </p>

    </div>
    
  
    <div>
      <button className='hover_box btn btn-outline-warning' onClick={()=>(val.id)}>
                 <a className='nav-link' href='/CustomerLogin'><h6> Add to Cart</h6></a>
                

      </button>
  
      </div>
</div>
  )
}

</div>



       <div>
           <img src={Ayyappa} width="100%" height="400px"/>
       </div>

       <h1>
        Services
       </h1>
      
<div className='row      text-center  '>

{
  data4.map(val =>
    
    <div key={val.id}  onClick={()=>(val.id)
    } className='  hover_box container-fluid   border  col-sm-10 col-md-4 col-lg-3   text-center' >
    <div className=' container'>
            <img src={val.img} alt=
            "ser" width="250px" height="250px"/>
            <h2><a className=' nav-link' href='/CustomerLogin'>  {val.name}</a></h2>
            <p>{val.Description}</p>
    </div>
</div>
  )
}

</div>

    </div>
  )
}

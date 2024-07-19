// @flow strict

import * as React from 'react';
import data from './PoojaTypes';

function Home() {
    return (
 
<div className='row     p-3  m-2 text-center  '>

{
  data.map(val =>
      
    <div key={val.id}  
     className='  hover_box container-fluid   border  row  p-1 mt-5  text-center' >
    <div className=' row container-fluid'>
        <div className='col-sm-10 col-md-5 col-lg-5 '>
            <img src={val.img} width="250px" height="250px"/>
        </div>
        <div className='col-sm-10 col-md-5 col-lg-5 '>
        <h1
        >
        {
          val.Custname
        }

      </h1>
      <h3>Pooja Name:-{
          val.PoojaName 
        } </h3>
       
      <h2>
        
         ₹{
          val.Price
        } 
      </h2>
      <h4><b> Benfit:-</b>{
          val.Descrption 
        } </h4>
       
     
           
        </div>
        </div>
        </div>
    
    )
}
</div>)
}



export default Home;
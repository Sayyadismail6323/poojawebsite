


// @flow strict
import React from 'react'
import { useState,useContext } from 'react';
import { GlobalState } from './Global';
import axios from 'axios'

import Button from 'react-bootstrap/Button';
function Home() {
  const state = useContext(GlobalState)
  const [order,setorder]  = state.userAPI.order
  const [token] = state.token
  const done  = async (val) =>{
    alert("Thank you for your service")

    await axios.post('/prist/done',{val},{   headers: {Authorization: token}});
    window.location.href ="/"
  }


  const notdone   = async (val) =>{
    alert("Are You sure want to cancel this pooja")
    await axios.post('/prist/notdone',{val},{   headers: {Authorization: token}});
    window.location.href ="/"
  }



 // var l ={name,lastname,age,phone,add,zip,poojname,poojaprize,poojaurl,"email":customer.email,date,time}

if(order.length !== 0)
{
  return (
<>

<div className='row     p-3  m-2 text-center  '>
{
  order.map(val=>
      
    <div  className='  hover_box container-fluid   border  row  p-1 mt-5  text-center' >
    <div className=' row container-fluid bg-secondary'>
        <div className='col-sm-10 col-md-5 col-lg-5 '>
            <img src={val.poojaurl} width="250px" height="250px"/>
            <br/>
            <h1>Product : {val.poojname}</h1>
            <h1></h1>
        </div>
        <div className='col-sm-10 col-md-5 col-lg-5 '>
        <h1>
        customer  : 
        {
          val.name+" "+val.lastname
        }
      </h1>
      <h1>
        Time  : 
        {
          val.time
        }
      </h1>
      <h1>
        Date  : 
        {
          val.date
        }
      </h1>
      <h1>
        Pincode  : 
        {
          val.zip
        }
      </h1>
      <h1>
        Address:
        {
          val.add
        }
      
      </h1>
    
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button"  class="btn btn-secondary bg-primary" onClick={()=>{done(val) }}> <h1> Done</h1></button>
        <button type="button"  class="btn btn-secondary bg-danger"  onClick={()=>{notdone(val)}} > <h1>Reject </h1></button>
      </div>
    
          </div>
    </div>
    <div>
      </div>
</div>
    
   
  )
}


</div>


 </>)
}
else{
  return (
    <>
     <div>
      <h1 className='bg-primary p-5 text-center'>
       No Item in the Order
      </h1>
    </div>


    


    </>
  )
}
}
export default Home;
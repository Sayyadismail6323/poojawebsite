// @flow strict
import React from 'react'
import { useState,useContext } from 'react';
import { GlobalState } from './Global';
import axios from 'axios'

import Button from 'react-bootstrap/Button';
function Home() {
  const state = useContext(GlobalState)
  const [cart,setCart]  = state.userAPI.cart
  const update = state.userAPI.update
  const cal_sum = state.userAPI.cal_sum
  const [token] = state.token
  const [sum,SetSum] = state.userAPI.sum
 cal_sum()
  var today =   new Date()
  var dd = today.getDate();
  var mm = today.getMonth() + 1;

  var yyyy = today.getFullYear();
  if (dd < 10) {
      dd = '0' + dd;
  }
  if (mm < 10) {
      mm = '0' + mm;
  }
  var today = dd + '/' + mm + '/' + yyyy;

  const handleopenrazorpaysite=async(data)=>{
    var options = {
      key: "rzp_test_XNdaPboetoEHnm", 
      amount:Number(data.amount) , 
      currency: "INR",
      name: "Online Pooja Samagari",
      description: "Test Transaction",
      image: "https://www.vecteezy.com/free-vector/community-logo",
      order_id:data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler:function (response){
       axios.get('/customer/order',  {headers: {Authorization: token}})
      alert("order is placed")
      window.location.href ="/"
       
      }
    }
    var rzp1 = new window.Razorpay(options);
    rzp1.open()
  }

  const order = async () => {
    alert("Your Order is placing ")
    try{
      await  axios.post('/customer/orders',{sum}).then((res)=>{
        handleopenrazorpaysite(res.data.order)
  
      })

    }catch(err)
    {
      alert(err.response.data.msg)
      window.location.href ="/"

    }

    

}    


function add(id)
{
   cart.map((i)=>{
    if(i._id === id)
    {
      if(i.size <= 4)
      {
        i.size = i.size+ 1;

      }else{
        alert("Item size is more than 5")
      }


    }
  })
  setCart(cart)
  update()
  SetSum(0)
  cal_sum(cart);
}

function miuns(id)
{
  SetSum(0)
   cart.map((i)=>{
    if(i._id === id)
    {
      if(i.size === 1)
      {
        remove(id)
      }
      else{
        i.size = i.size- 1;

      }
    }
  })
  setCart(cart)
  update()
  SetSum(0)
  cal_sum(cart);
}




const remove = id =>{
  if(window.confirm("Do you want to delete this product?")){
      cart.forEach((item, index) => {
          if(item._id === id){
              cart.splice(index, 1)
          }
      })

      setCart(cart)
  update()
  SetSum(0)
  cal_sum(cart);
  if(cart.length === 0)
  {
    window.location.href ="/"

  }
  }
}
if(cart.length !== 0)
{
  return (
<>
  
<div className='row     p-3  m-2 text-center  '>
{
  cart.map(val =>
      
    <div key={val._id}  
     className='  hover_box container-fluid   border  row  p-1 mt-5  text-center' >
    <div className=' row container-fluid'>
        <div className='col-sm-10 col-md-5 col-lg-5 '>
            <img src={val.url} width="250px" height="250px"/>
        </div>
        <div className='col-sm-10 col-md-5 col-lg-5 '>
        <h1
        >
        {
          val.name
        }
      </h1>
      <h3>
         ₹{
          val.prize*val.size
        } 
      </h3>
      <div class="btn-group" role="group" aria-label="Basic example">
         <button type="button" onClick={()=>miuns(val._id)} class="btn btn-secondary"> <h1> - </h1></button>
         <button type="button" class="btn btn-secondary"><h1> {val.size} </h1></button>
         <button type="button" onClick={()=>add(val._id)} class="btn btn-secondary "><h1> + </h1></button>
         <button className='hover_box btn bg-danger p-3  ' onClick={()=>remove(val._id)}>
                 <h4 ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></h4>
          </button>
      </div>
    
          </div>
    </div>
    <div>
      </div>
</div>
    
   
  )
}


</div>

<div>
      <h1 className='bg-primary p-5 text-center'>
        Sum = ₹{sum}
        <br/>
        Date of Delivery: {today}
        <br/>
        <button  class="btn btn-outline-light" onClick={()=>order()}><h1>
          Order Now</h1></button>

        </h1>
    </div>
 </>)
}
else{
  return (
    <>
     <div>
      <h1 className='bg-primary p-5 text-center'>
       No Item in the cart
      </h1>
    </div>

    


    


    </>
  )
}
}
export default Home;



























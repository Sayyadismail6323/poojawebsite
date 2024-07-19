// @flow strict

import * as React from 'react';
import data from '../SWAMI/PoojaTypes';
import { GlobalState } from './Global';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import axios  from 'axios';

function Home() {
  const state = useContext(GlobalState)
  const [poojname,setpoojaname] = state.userAPI.poojname
  const [poojaprize,setpoojaprize] = state.userAPI.poojaprize
  const [poojaurl,setpoojaurl] = state.userAPI.poojaurl
  const [name,setname] = state.userAPI.name
  const [phone,setphone] = state.userAPI.phone
const [token] = state.token
const [email,setemail]= state.userAPI.email
const [zip,setzip] =state.userAPI.zip
const [lastname,setlastname] = state.userAPI.lastname
const [age,setage] = state.userAPI.age
const [date,setdate] = useState('')
const [time,settime] = useState('')

const [add,setadd] = state.userAPI.add
const [done,setdone] = useState(false)
  const [r,setr] = useState(true)
 //
 const order =async(val) =>{
  setpoojaname(val.PoojaName)
setpoojaprize(val.Price)
setpoojaurl(val.img)
setr(false)

}

/// razorpay

const handleopenrazorpaysite=async(data)=>{
  var options = {
    key: "rzp_test_XNdaPboetoEHnm", 
    amount:Number(data.amount) , 
    currency: "INR",
    name: "Online Pooja Samagari",
    description: "Test Transaction",
    image: "https://www.vecteezy.com/free-vector/community-logo",
    order_id:data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler:async (response)=>{
      await axios.post('/customer/pooja',{name,lastname,email,age,phone,add,zip,add,poojname,poojaprize,date,time,poojaurl},{   headers: {Authorization: token}});
    alert("Pooja Booked")
    window.location.href ="/"
     
    }
  }
  var rzp1 = new window.Razorpay(options);
  rzp1.open()
}




const handleSubmit = async e => {
  alert("booking pooja ")
  alert(poojname)
  e.preventDefault()

  try{
    await  axios.post('/customer/orders',{"sum":poojaprize}).then((res)=>{
      handleopenrazorpaysite(res.data.order)

    })
      

  }catch(err)
  {
      //alert(err.response.data.msg)
      alert(err.data.msg)

  }

}
if(r)
{
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
          <h2>Pooja Name:-{
              val.PoojaName 
            } </h2>
          <h2>
            
             ₹{
              val.Price
            } 
          </h2>
        
           
           <h5><b> Benfit:-</b>{
              val.Descrption
            } </h5>
             <div className="btn-group" role="group" aria-label="Basic example">
             <button className="hover_box btn btn-outline-primary   " onClick={()=>{order(val)}}> <h3>Book Priest</h3></button>
            
             </div>
               
            </div>
            </div>
            </div>
        
        )
    }
    </div>)
}else{
  
  return (
    // @flow strict

        <div className="container-fluid p-5  text-white text-center bg-primary bg-gradient p-5">
<div 
         className='  hover_box container-fluid   border  row  p-1 mt-5  text-center' >
        <div className=' row container-fluid'>
            <div className='col-sm-10 col-md-5 col-lg-5 '>
                <img src={poojaurl} width="250px" height="250px"/>
            </div>
            <div className='col-sm-10 col-md-5 col-lg-5 '>
            <h1
            >
            {
              poojname
            }
    
          </h1>
          <h2>
            
             ₹{
              poojaprize
            } 
          </h2>
          <h2>Pooja Name:-{
          poojname            } </h2>
           
           
             <div className="btn-group" role="group" aria-label="Basic example">
            
             </div>
               
            </div>
            </div>
            </div>            
            <div>
            <form className='row text-center align-center' onSubmit={handleSubmit} >
                <div className="col-md-2"/>

                    <div className='col-sm-12 col-md-4 mb-3 mt-3 '>
                         <input for="name" placeholder='Enter First Name' type="text" className='form-control' id='Name'
                         value={name} onChange={(e) =>setname(e.target.value)}  />
                    </div>
                    <div className=' col-sm-12 col-md-4 mb-3 mt-3'>
                        <input for="lastname" value={lastname} onChange={(e) =>setlastname(e.target.value)} placeholder='Enter Lastname' type="text" className='form-control' id='lastname' />
                    </div>
                    <div className="col-md-2"/>


                    <div className="col-md-2"/>

                    <div className='col-sm-12 col-md-4  mb-3 mt-3'>
                        <input for="age" placeholder='Enter your age'  value={age} onChange={(e) =>setage(e.target.value)} type="number" className='form-control' id='age' />
                    </div>
                    <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                        <input for="Phone Number" placeholder='Enter Phone Number' value={phone} onChange={(e) =>setphone(e.target.value)}   type="text" className='form-control' id='phone' />
                    </div>
                    <div className="col-md-2"/>
                    <div className="col-md-2"/>

                    <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                        <input  placeholder='Enter Your Email  ' value={email} onChange={(e) =>setemail(e.target.value)}     type="text" className='form-control' id='email' />
                    </div>
                    <div className="col-md-2"/>
                    <div className="col-md-2"/>

                    <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                        <input for="address 2. ..." type="address 2. ..."  value={add} onChange={(e) =>setadd(e.target.value)} placeholder='Address' className='form-control' id='address 2. ...' />
                    </div>
                    <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                        <input for="address 3. ..." type="address 3. ..." value={zip} onChange={(e) =>setzip(e.target.value)} placeholder='zip' className='form-control' id='address 3. ...' />
                    </div>
                 
                    <div className="col-md-2"/>
                    <div className="col-md-2"/>
                      
<div className='col-sm-12 col-md-4 mb-3 mt-3'>
    <input type="time" value={time} onChange={(e) =>settime(e.target.value)} placeholder='date' className='form-control' id='address 3. ...' />
</div>
   
<div className='col-sm-12 col-md-4 mb-3 mt-3'>
    <input type="date" value={date} onChange={(e) =>setdate(e.target.value)} placeholder='date' className='form-control' id='address 3. ...' />
</div>
<div className="col-md-2"/>
                        <button  type='submit' className='container col-sm-12 col-md-6 mb-3 mt-3 bg-success btn btn-outline-warning' >
                            Order

                        </button>
                </form>
                <h5 >
                    <Link className='text-white' to={'/Profile'} >No need</Link>
                </h5>
                <p></p>
            </div>
        </div>


)
}
}
export default Home;